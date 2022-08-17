import { MediaPageActions } from '../../utils/actions/';
import encoderPath from 'opus-recorder/dist/encoderWorker.min.js';
import { saveAs } from 'file-saver';
import WavHeader from './WavHeader';

export default function Wav2opus(wavData) {
  var wavFile = new File([wavData], 'voice.wav', { type: 'audio/wav' });

  var fileReader = new FileReader();

  fileReader.onload = function() {
    encodeOgg(this.result);
  };

  fileReader.readAsArrayBuffer( wavFile );

  return;
}

function concatUint8Arrays(a, b) {
  var c = new Uint8Array(a.length + b.length);
  c.set(a);
  c.set(b, a.length);
  return c;
}

function chunkBuffers(arrayBuffer, chunkLength, channelCount, bitDepth) {
  var chunkedBuffers = [];

  var maxPossible = 2 ** bitDepth / 2; // Bit depth is the data resolution.
  console.log('MAX POSSIBlE `WAV` DATA VALUE', maxPossible);

  var totalFile = new Int16Array(arrayBuffer);
  // Skip wave header; 44 bytes
  for (var i = 22; i < totalFile.length; i += chunkLength) {
    // Convert 16 bit signed int to 32bit float
    var bufferChunk = new Float32Array(chunkLength / channelCount); // Just keep 1st channel. So, divide length.
    var idx = 0; // To skip 2nd channel.
    for (var j = 0; j < chunkLength; j += channelCount) { // Just keep 1st channel by `j+=`.
      // https://github.com/chris-rudmin/opus-recorder/issues/265#issuecomment-1218059017
      // Shifting the 0 crossing and keeping the two halves of the waveform symmetric,
      // by `+-0.5` statements:
      bufferChunk[idx] = (totalFile[i + j]+ 0.5) / (maxPossible-0.5);
      idx++;
    }

    chunkedBuffers.push([bufferChunk]);
  }

  return chunkedBuffers;
}

function encodeOgg(arrayBuffer) {
    // Reference to read WAV header:
    // https://github.com/zhuker/lamejs/blob/582bbba6a12f981b984d8fb9e1874499fed85675/example.html#L43
    var wavHeader = WavHeader.readHeader(new DataView(arrayBuffer));
    console.debug('wav header:'.toUpperCase(), wavHeader);

  // Reference:
  // https://github.com/chris-rudmin/opus-recorder/blob/fdfdadeeb9bc9d045c59dc75ebefed390e4ad6dc/example/fileEncoder.html#L71
  var completeOggData = new Uint8Array(0);

  console.debug('encoderPath'.toUpperCase(), encoderPath);

  var encoderWorker = new Worker(encoderPath);
  var bufferLength = 4096; // Is passed to chunk function too.

  encoderWorker.postMessage({
    command: 'init',
    encoderSampleRate: wavHeader.sampleRate, // Of output OPUS. TODO: Set equal to input WAV?
    bufferLength: bufferLength,
    originalSampleRate: wavHeader.sampleRate, // Of input WAV.
    encoderApplication: 2048, // 2048 - Voice
    encoderComplexity: 5, // 0 is fastest with lowest complexity. 10 is slowest with highest complexity.
    resampleQuality: 3, // 0 is fastest with lowest quality. 10 is slowest with highest quality.
    numberOfChannels: 1, // Of output OPUS. Only `1` works. Test for `2` throws error.
    encoderBitRate: 96000, // Determines voice quality? TODO: 64000?
  });

  encoderWorker.postMessage({
    command: 'getHeaderPages',
  });

  // According to this line:
  // https://github.com/zhuker/lamejs/blob/582bbba6a12f981b984d8fb9e1874499fed85675/example.html#L45
  // Looks like WAV bit depth is always assumed to be 16.

  chunkBuffers(arrayBuffer, bufferLength, wavHeader.channels, 16).forEach((bufferChunk) =>
    encoderWorker.postMessage({
      command: 'encode',
      buffers: bufferChunk,
    })
  );

  encoderWorker.postMessage({
    command: 'done',
  });

  encoderWorker.onmessage = ({ data }) => {
    if (data.message === 'done') {
      //finished encoding - save to audio tag
      var dataBlob = new Blob([completeOggData], { type: 'audio/ogg' });
      saveAs(dataBlob, 'voice.ogg');
      MediaPageActions.submitVoice(dataBlob);
    } else if (data.message === 'page') {
      completeOggData = concatUint8Arrays(completeOggData, data.page);
    }
  };
}
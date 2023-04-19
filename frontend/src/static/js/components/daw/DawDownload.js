import React from 'react'

import './DawDownload.css';

export default function DawDownload({ ee, playerInstance }) {
    return (
        <div className="daw-download-outer">
            <div className="daw-download" id="daw-download">
                <button type="button" className="btn btn-outline-dark" title="Download video + displayed voices"
                    onClick={(event) => {
                        console.log('event: ', event)
                    }}
                >
                    <i className="fas fa-download"></i>
                </button>
            </div>
        </div>
    )
}

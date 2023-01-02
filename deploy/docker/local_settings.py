FRONTEND_HOST = 'https://micrufun.com'
PORTAL_NAME = 'MICRUFUN'
SECRET_KEY = 'ma!s3^b-cw!f#7s6s0m3*jx77a@riw(7701**(r=ww%w!2+yk2'
POSTGRES_HOST = 'db'
REDIS_LOCATION = "redis://redis:6379/1"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "mediacms",
        "HOST": POSTGRES_HOST,
        "PORT": "5432",
        "USER": "mediacms",
        "PASSWORD": "mediacms",
    }
}

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": REDIS_LOCATION,
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    }
}

# CELERY STUFF
BROKER_URL = REDIS_LOCATION
CELERY_RESULT_BACKEND = BROKER_URL

MP4HLS_COMMAND = "/home/mediacms.io/bento4/bin/mp4hls"

DEBUG = False

### Set email settings
### Set correct settings per provider
DEFAULT_FROM_EMAIL = 'micrufun@gmail.com'
EMAIL_HOST_PASSWORD = '***REMOVED***'
EMAIL_HOST_USER = 'micrufun@gmail.com'
EMAIL_USE_TLS = True
SERVER_EMAIL = DEFAULT_FROM_EMAIL
EMAIL_HOST = 'gmail.com'
EMAIL_PORT = 587
ADMIN_EMAIL_LIST = ['micrufun@gmail.com']

### https://github.com/Micrufun/django-ads
### Copied from README of the above repo:

# https://stackoverflow.com/a/12995923/3405291
from django.utils.translation import gettext as _

gettext = lambda s: s

ADS_GOOGLE_ADSENSE_CLIENT = None  # 'ca-pub-xxxxxxxxxxxxxxxx'

ADS_ZONES = {
    'header': {
        'name': gettext('Header'),
        'ad_size': {
            'xs': '720x150',
            'sm': '800x90',
            'md': '800x90',
            'lg': '800x90',
            'xl': '800x90'
        },
        'google_adsense_slot': None,  # 'xxxxxxxxx',
        'google_adsense_format': None,  # 'auto'
    },
    'content': {
        'name': gettext('Content'),
        'ad_size': {
            'xs': '720x150',
            'sm': '800x90',
            'md': '800x90',
            'lg': '800x90',
            'xl': '800x90'
        },
        'google_adsense_slot': None,  # 'xxxxxxxxx',
        'google_adsense_format': None,  # 'auto'
    },
    'sidebar': {
        'name': gettext('Sidebar'),
        'ad_size': {
            'xs': '720x150',
            'sm': '800x90',
            'md': '800x90',
            'lg': '800x90',
            'xl': '800x90'
        }
    }
}

ADS_DEFAULT_AD_SIZE = '720x150'

ADS_DEVICES = (
    ('xs', _('Extra small devices')),
    ('sm', _('Small devices')),
    ('md', _('Medium devices (Tablets)')),
    ('lg', _('Large devices (Desktops)')),
    ('xl', _('Extra large devices (Large Desktops)')),
)

ADS_VIEWPORTS = {
    'xs': 'd-block img-fluid d-sm-none',
    'sm': 'd-none img-fluid d-sm-block d-md-none',
    'md': 'd-none img-fluid d-md-block d-lg-none',
    'lg': 'd-none img-fluid d-lg-block d-xl-none',
    'xl': 'd-none img-fluid d-xl-block',
}
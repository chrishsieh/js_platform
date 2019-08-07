set PATH="C:\Program Files\Git\usr\bin";%PATH%
openssl req -x509 -new -nodes -sha256 -utf8 -days 36500 -newkey rsa:2048 -keyout ./private-key.pem -out ./public-certificate.pem -config ./ssl.conf
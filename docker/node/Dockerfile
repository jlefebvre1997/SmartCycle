FROM node:10.12.0-alpine

RUN apk update && \
	apk add --no-cache \
		su-exec \
		nano \
		bash \
		bash-doc \
		bash-completion && \
	addgroup bar && \
    adduser -D -h /home -s /bin/bash -G bar foo

ADD entrypoint.sh /entrypoint

ENTRYPOINT ["/entrypoint"]

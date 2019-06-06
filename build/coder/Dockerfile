ARG NODE_VERSION=12
FROM node:${NODE_VERSION}-stretch-slim

ENV RUN_DEPS="sudo dumb-init jq zip git unzip wget curl \
            socat supervisor ca-certificates" \
    RUN_DEV_DEPS="mysql-client xsel"

RUN set -x \
    && DEBIAN_FRONTEND=noninteractive apt-get update -qq \
# ---- Installing Running dependencies ----
    && DEBIAN_FRONTEND=noninteractive apt-get install -qq -y --no-install-recommends --no-install-suggests ${RUN_DEPS} ${RUN_DEV_DEPS} \
    && DEBIAN_FRONTEND=noninteractive apt-get purge -qq -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false apt-utils \
    && rm -rf /var/lib/apt/lists/* \
    && update-ca-certificates

# ---- Installing Running env ----
RUN set -x \
    && npm install -g webpack-cli \
    && npm cache clean --force \
    && rm -rf /etc/supervisor* \
    && mkdir -p /etc/supervisor/conf.d \
    && mkdir -p /var/log/supervisor \
    && mkdir -p /run.d \
# ---- Add user ----
    && adduser --gecos '' --disabled-password coder \
    && echo "coder ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers \
    && echo "alias ls='ls --color=auto'" >> /root/.bashrc \
    && echo "alias ll='ls --color=auto -l'" >> /root/.bashrc \
    && echo "alias l='ls --color=auto -lA'" >> /root/.bashrc

ENV HOME="/home/coder" \
    TERM="xterm-color"

COPY supervisord.conf /etc/supervisor/supervisord.conf

USER coder

WORKDIR /var/www

VOLUME [ "/var/www" ]

USER root
COPY coder-entrypoint.sh /coder-entrypoint.sh
COPY coder-entrypoint.d/*.sh /coder-entrypoint.d/
RUN chmod +x /coder-entrypoint.sh && chmod +x /coder-entrypoint.d/*.sh

ENTRYPOINT ["dumb-init", "/coder-entrypoint.sh"]
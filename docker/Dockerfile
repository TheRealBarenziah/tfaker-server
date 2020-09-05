FROM debian:stable-slim

SHELL ["/bin/bash", "--login", "-c"]

RUN apt-get update && \ 
    apt-get install -y apt-utils && \
    apt-get upgrade -y

RUN apt-get install -y --no-install-recommends \
    curl \
    git \
    ca-certificates

# Install node version manager (nvm) : https://stackoverflow.com/a/34591932/11894221
# I want the good ol' reliable 0.10.48. Back in my days it never failed to do the job.
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 0.10.48
ENV NODE_VERSION_WITH_V v0.10.48

RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm use $NODE_VERSION

ENV NODE_PATH $NVM_DIR/$NODE_VERSION_WITH_V/lib/node_modules
ENV PATH $NVM_DIR/$NODE_VERSION_WITH_V/bin:$PATH
ENV SHLVL 1
ENV NVM_PATH /usr/local/nvm/v0.10.48/lib/node
ENV NVM_BIN /usr/local/nvm/v0.10.48/bin
ENV NVM_IOJS_ORG_MIRROR https://iojs.org/dist
ENV NVM_NODEJS_ORG_MIRROR https://nodejs.org/dist

RUN mkdir /app
WORKDIR /app

COPY ./ ./

CMD ["node", "src/index.js"]
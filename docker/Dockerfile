FROM debian:stable-slim

# nvm with docker: https://stackoverflow.com/a/57344191/11894221
SHELL ["/bin/bash", "--login", "-c"]

RUN apt-get update && \ 
    apt-get install -y apt-utils && \
    apt-get upgrade -y

RUN apt-get install -y --no-install-recommends \
        curl \
        git

# Install node version manager (nvm)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# I want the good ol' reliable 0.10.48. Back in my days it never failed to do the job. 
RUN nvm install 0.10.48 && \
    nvm use 0.10.48

RUN cp -R ./src ./app
WORKDIR /app

CMD node index.js
FROM debian:stable-slim

RUN apt-get update && \ 
    apt-get install -y apt-utils && \
    apt-get upgrade -y \ 
    apt-get install -y --no-install-recommends \
    curl \
    git

# Install node version manager (nvm) : https://stackoverflow.com/a/57344191/11894221
# I want the good ol' reliable 0.10.48. Back in my days it never failed to do the job. 
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash && \
    nvm install 0.10.48 && \
    nvm use 0.10.48 && \
    mkdir /app

WORKDIR /app

COPY ./src ./

CMD node index.js
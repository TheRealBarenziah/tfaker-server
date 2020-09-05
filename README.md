# tfaker-server
### In terminal, with nodejs on your system :
```bash
git clone git@github.com:TheRealBarenziah/tfaker-server.git && \
cd ./tfaker-server/src && \
node index.js
```  
```bash
listening on port 9615
```
[Go to localhost:9615 with your browser](http://0.0.0.0:9615)

### In terminal, with Docker on your system :
```bash
docker image build -t tfaker-server:v1 -f docker/Dockerfile .

docker container run --rm --name tfakerserver -d -p 9615:9615 tfaker-server:v1
```
[Go to localhost:9615 with your browser](http://0.0.0.0:9615)

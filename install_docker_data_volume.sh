#!/bin/bash
mkdir -p ~/gulp-env/

docker rm gulp-tool-dir
docker create --name gulp-tool-dir \
       -v ~/gulp-tool:/gulp-tool/ \
       -v ~/gulp-env:/gulp-env \
       -v /var/run/docker.sock:/var/run/docker.sock \
       -v /:/gulp-host \
       busybox /bin/true

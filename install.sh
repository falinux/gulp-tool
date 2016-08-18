#!/bin/bash
./install_docker_images.sh
./install_cmd.sh
./install_docker_data_volume.sh
gulp-tool "npm install"

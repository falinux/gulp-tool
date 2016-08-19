# gulp-tool

## 개요

gulp-tool 은 gulp 를 이용하여 처리 자동화 모음이다. 

## gulp-tool 바로 시작하기 

### 시스템 요구 조건

	Linux 배포판 (우분투, 배포판)
	Docker
	Git

### gulp-tool-dev

#### 사용을 위한 최초 툴 설치 

	$ git clone https://github.com/falinux/gulp-tool.git ~/gulp-tool
	$ cd ~/gulp-tool
	$ ./install.sh	


##### 툴 사용하기

	$ cd [working directory]
	$ gulp-tool


#### 최초 설치 후 명령 스크립트 만 재 설치 

	$ cd gulp-tool
	$ ./install_cmd.sh	


#### gulp-tool 컨테이너 진입

	$ cd [working directory]
	$ gulp-tool
	
	
#### gulp-tool 컨테이너에서 업그레이드

	$ cd ~/gulp-tool
	$ gulp-tool
	$ ./gt-update
	
	
### gulp-tool-dev

#### Download and install	

	$ git clone https://github.com/falinux/gulp-tool.git ~/gulp-tool-dev
	$ cd ~/gulp-tool-dev
	$ ./install.sh
	
#### Edit gulp-tool

	$ gulp-tool-dev
	
	... Edit ...
	
	$ ./gtd-push


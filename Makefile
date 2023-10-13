NAME=Clash.Mini
BINDIR=bin
META=1.16.0
BUILDTIME=$(shell date -u)
BUILD_VERSION = 0.2.0
APP_VERSION = v${BUILD_VERSION}-dev

GOBUILD=CGO_ENABLED=0 go build -trimpath -ldflags '-X "github.com/Dreamacro/clash/constant.BuildTime=$(BUILDTIME)" \
		-X "github.com/Dreamacro/clash/constant.Version=$(META)" \
		-H=windowsgui -w -s -buildid='

WINDOWS_ARCH_LIST = \
	windows-386 \
	windows-amd64

.PHONY: pre-build post-build

pre-build:
	sed -i "s/{{VERSION}}/${APP_VERSION}/g" ".\app\app.go"

post-build:
	sed -i "s/${APP_VERSION}/{{VERSION}}/g" ".\app\app.go"

all: pre-build windows-amd64 windows-386 post-build  # Most used

custom: pre-build windows-amd64 post-build

windows-386:
	GOARCH=386 GOOS=windows $(GOBUILD) -o $(BINDIR)/$(NAME)-$@.exe

windows-amd64:
	GOARCH=amd64 GOOS=windows $(GOBUILD) -o $(BINDIR)/$(NAME)-$@.exe
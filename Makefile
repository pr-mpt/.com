MAKEFLAGS += --silent

.PHONY: start
start: install
	yarn run start

.PHONY: install
install:
	yarn

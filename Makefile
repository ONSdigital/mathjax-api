NVM_SOURCE_PATH ?= $(HOME)/.nvm/nvm.sh

ifneq ("$(wildcard $(NVM_SOURCE_PATH))","")
	NVM_EXEC = source $(NVM_SOURCE_PATH) && nvm exec --
endif
NPM = $(NVM_EXEC) npm
NODE = $(NVM_EXEC) node

.PHONY: all
all: audit test build

.PHONY: audit
audit:
	# $(NPM) audit --audit-level=high
	@echo audit not yet implemented for this repo
	exit 1

.PHONY: build
build:
	$(NPM) install

.PHONY: debug
debug: build
	$(NODE) app.js

.PHONY: test
test:
	@echo tests not yet implemented for this repo
	exit 1

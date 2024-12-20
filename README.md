# mathjax-api

A Node.js HTTP API to render MathJax equations in HTML content.

This service uses the MathJax-node implementation that is optimised for mathjax embedded in HTML content. It is currently limited to Tex to SVG conversion.

## Getting started

### Prerequisites

To run the API locally you must have the following:

1. [nvm](https://github.com/nvm-sh/nvm) installed:

   ```shell
   brew install nvm
   ```

   Then add the following to your `~/.bashrc` or `~/.zshrc`:

   ```shell
   export NVM_DIR="$HOME/.nvm"
   [ -s "$(brew --prefix nvm)/nvm.sh" ] && \. "$(brew --prefix nvm)/nvm.sh"
   [ -s "$(brew --prefix nvm)/etc/bash_completion.d/nvm" ] && \. "$(brew --prefix nvm)/etc/bash_completion.d/nvm"
   ```

   and reload your shell:

   ```shell
   exec $SHELL -l
   ```

2. The node version specified in [`.nvmrc`](./.nvmrc) installed through nvm:

   ```shell
   nvm install
   ```

### Build and run

Once you have node installed, run the following to install the dependencies and run the server:

```shell
make debug
```

The API binds to port 8080, and is currently not configurable.

### Test the API is running

To test the API is running correctly:

1. Test the server is working by doing a HTTP GET or navigate to http://localhost:8080:

   ```shell
   curl http://localhost:8080
   ```

2. Test `POST`ing content to the service for conversion:

   ```shell
   curl -X POST -H "Content-Type: text/plain" --data "input=$ Gamma(z) = int_0^infty t^{z-1} $" http://localhost:8080
   ```

## Licence

Copyright © Crown Copyright ([Office for National Statistics](https://www.ons.gov.uk))

Released under MIT license, see [LICENCE](LICENCE.md) for details.

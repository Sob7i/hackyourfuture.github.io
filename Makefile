
RUN_AWS_CLI := docker run -it --rm \
		-v $(shell pwd):/workspace \
		-v ~/.aws:/root/.aws \
		mesosphere/aws-cli --profile hyf

VERSION = $(shell git rev-parse --short=7 HEAD)

api/dist:
	@cd api && npm run build

api-$(VERSION).zip: api/dist
	@cd api/dist && zip -r ./../../api-$(VERSION).zip *

upload-lambda: api-$(VERSION).zip
	@$(RUN_AWS_CLI) s3 cp /workspace/api-$(VERSION).zip s3://hyf-api-deploy/api-$(VERSION).zip

publish-api: clean upload-lambda
	@$(RUN_AWS_CLI) lambda update-function-code --s3-bucket=hyf-api-deploy --s3-key=api-$(VERSION).zip --publish --function-name=gateway_proxy

.PHONY: clean
clean:
	@rm -rf api/dist

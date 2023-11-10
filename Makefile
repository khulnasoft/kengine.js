docker-build:
	docker build --tag kengine:latest .

docker-run:
	docker run -it -e KENGINE_API_KEY=yourApiKey -v $(pwd)/.kengine:/workspace/.kengine kengine --version
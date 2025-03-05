start_back:
	cd ./server/ && concurrently "tsc --watch" "nodemon ./dist/server/src/server.js"

start_front:
	cd ./client/ && npm run dev

dev:
	concurrently "make start_back" "make start_front"

install_dependencies:
	npm i -g nodemon concurrently

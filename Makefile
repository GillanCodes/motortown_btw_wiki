start_back:
	cd ./server/ && concurrently "tsc --watch" "nodemon ./dist/server/src/server.js"

start_front:
	cd ./client/ && npm run dev

make_env:
	echo -e "PORT=5000\nJWT_TOKEN=ChangeMe\nDB_CONNECT_STRING=mongodb://127.0.0.1:27017/motortown_wiki_dev" > ./server/dist/server/.env

dev:
	concurrently "make start_back" "make start_front"

init:
	sudo npm i -g nodemon concurrently; make make_env

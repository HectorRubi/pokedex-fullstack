start:
	make simple-start
	chmod +x ./scripts/check-database-ready.sh
	./scripts/check-database-ready.sh
	make init

simple-start:
	docker compose up -d

stop:
	docker compose down
	docker image rm pokedex_app
	docker image rm pokedex_server

init:
	docker compose exec server npm run migration:run

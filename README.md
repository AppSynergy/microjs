
## Install global packages

- `npm i knex -g`
- `npm i nodemon -g`  *(optional, but recommended for hacking)*

## Install local packages

`npm install`

## Download front-end dependencies

`bower install`

## Database setup

- Create a MySQL Database
- Edit `knexfile.js`, adding the correct database name and authorization.

## Run migrations

`knex migrate:latest`

## Populate the database

>> TODO

## Build the `dist` directory

`gulp build`

## Run the client application

`nodemon`  or  `node src/client.js`

## Run some microservices

`nodemon src/microservices/server.js`

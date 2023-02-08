## Database

### MacOs Installation

```bash
brew update
brew install postgresql@14
brew services stop postgresql@14
brew services start postgresql@14
psql postgres
```

### Ubuntu Installation

```bash
sudo apt install postgresql postgresql-contrib
sudo service postgresql stop
sudo service postgresql start
sudo -u postgres psql
```

### Psql database and user creation

```
create database library;
create user library with encrypted password '1234';
grant all privileges on database library to library;
\c library
\l
\dt
\du
```

## Running the app

```bash
# Install packages
$ npm install

# Run migrations (database tables creation)
$ npm run db:migrate

# Run seeds (populate tables with dummy data)
$ npm run db:seed

# Start node application
$ npm run start

# Start node application watch mode
$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## TODO

- 'admin' role can patch every user, but 'user' role only can patch itself

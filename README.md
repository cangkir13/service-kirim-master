# Express-rest-api

> Express REST API with Sequalize and Mysql
## Library

- Routes mapping : [express-routes-mapper](https://github.com/aichbauer/express-routes-mapper)
- Mysql driver : [mysql2](https://www.npmjs.com/package/mysql2).
- Promise-based ORM : [Sequalize](https://www.npmjs.com/package/sequelize).
- Data validator : [joi](https://www.npmjs.com/package/joi).
- Utility [nodemon](https://www.npmjs.com/package/nodemon)
- Enable Cors [cors](https://www.npmjs.com/package/cors)
- Secure HTTP headers [helmet](https://www.npmjs.com/package/helmet)


## Installation

clone repositories
```sh
git clone git@gitlab.com:cangkir13/service-kirim-master.git
```
#### Install Modules & Dependencies

```sh
$ npm install
```
#### Set Database config
```sh
development: config/connection.js
production: .env
```
### migrate and sedder files
after that run CLI migration step by step
```cli
node console migrate
node console sedder location
node console sedder ekspedisi
node console sedder warehouse
node console sedder kurirs #100K+ record
node console sedder member #200K+ record
```
#### Start Server
###### For development environments...
```sh
$ npm start
```
###### For production environments...
```sh
$ npm run production
```
Server will starts on 127.0.0.1:3030 or on 127.0.0.1:PORT_ENV

Documentation get to our team
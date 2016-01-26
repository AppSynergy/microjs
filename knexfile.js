
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'microjs_dev',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

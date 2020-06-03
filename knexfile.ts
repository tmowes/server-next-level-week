import path from 'path'

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(
      __dirname,
      'src',
      'shared',
      'database',
      'database.sqlite',
    ),
  },
  migrations: {
    directory: path.resolve(
      __dirname,
      'src',
      'shared',
      'database',
      'migrations',
    ),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'shared', 'database', 'seeds'),
  },
  useNullAsDefault: true,
}

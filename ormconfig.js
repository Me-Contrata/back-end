module.exports = {
  type: 'postgres',
  host: process.env.HOST,
  port: process.env.PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  entities: [__dirname + '/dist/v1/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrationsTableName: 'migration',
  migrations: ["dist/migrations/*{.ts,.js}"]
};
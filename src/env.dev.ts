const config = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "testdb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

const dialect = "mysql";

export { config, dialect }
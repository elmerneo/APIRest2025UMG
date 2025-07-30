module.exports = {
    HOST: "ep-odd-star-afhpqyow-pooler.c-2.us-west-2.aws.neon.tech",
    USER: "neondb_owner",
    PASSWORD: "npg_3tdQAh5lmIBx",
    DB: "neondb",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // <-- permite SSL sin verificación estricta del certificado
      }
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

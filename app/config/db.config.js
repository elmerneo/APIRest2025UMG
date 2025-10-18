require('dotenv').config(); // Asegura que las variables .env se carguen

module.exports = {
  HOST: process.env.DB_HOST || "ep-odd-star-afhpqyow-pooler.c-2.us-west-2.aws.neon.tech",
  USER: process.env.DB_USER || "neondb_owner",
  PASSWORD: process.env.DB_PASSWORD || "npg_3tdQAh5lmIBx",
  DB: process.env.DB_NAME || "neondb",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Permite conexión SSL flexible (útil en Neon.tech)
    }
  },
  pool: {
    max: parseInt(process.env.DB_POOL_MAX) || 5,
    min: parseInt(process.env.DB_POOL_MIN) || 0,
    acquire: parseInt(process.env.DB_POOL_ACQUIRE) || 30000,
    idle: parseInt(process.env.DB_POOL_IDLE) || 10000
  }
};

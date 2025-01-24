const { Pool } = require('pg');
    require('dotenv').config();

    const pool = new Pool({
      connectionString: process.env.SQL_DB_URI
    });

    const connectToSQL = async () => {
      try {
        await pool.connect();
        console.log('Connected to SQL database');
      } catch (error) {
        console.error('Error connecting to SQL database:', error);
        throw error;
      }
    };

    module.exports = { pool, connectToSQL };

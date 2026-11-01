const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');

const app = express(); // <--- MUST be right here at the top
app.use(express.json());

// Secret key used to sign the JWT
const JWT_SECRET = 'your_jwt_secret_key';

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'db_user',
  password: process.env.DB_PASSWORD || 'user_password',
  database: process.env.DB_NAME || 'my_database',
  port: process.env.DB_PORT || 3307
};

// Login Endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = rows[0];

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.json({
      message: 'Login successful',
      token: token
    });

  } catch (err) {
    console.error('Database query error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
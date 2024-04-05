const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const cors = require('cors');


const app = express();
const port = 3000;

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());

app.use(cors());



// Define API endpoint to add a new food item
app.post('/api/foods', (req, res) => {
  const { food_id, food_name, food_price } = req.body;

  const query = 'INSERT INTO foods (food_id, food_name, food_price) VALUES (?, ?, ?)';
  connection.query(query, [food_id, food_name, food_price], (error, results) => {
    if (error) {
      console.error('Error adding food:', error);
      res.status(500).json({ error: 'Error adding food' });
    } else {
      console.log('Food added successfully');
      res.status(201).json({ message: 'Food added successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});











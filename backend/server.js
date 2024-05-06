const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// Set up connection to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'english_learning'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// API endpoint for adding a new expression
app.post('/addExpression', (req, res) => {
  const { polishExpression, englishTranslation } = req.body;

  const query = 'INSERT INTO expressions (polish, english) VALUES (?, ?)';
  db.query(query, [polishExpression, englishTranslation], (err, result) => {
    if (err) throw err;
    res.send('Expression added successfully');
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

// API endpoint for reviewing an expression
app.get('/reviewExpression/:id', (req, res) => {
  const { id } = req.params;

  const query = 'SELECT * FROM expressions WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});
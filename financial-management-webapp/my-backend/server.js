const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const { exec } = require('child_process');
const User = require('../db/User');
const Transaction = require('../db/Transaction')
const app = express();
const port = 3000;
const Analysis = require('../db/Analysis')
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

// Enable CORS for all origins
app.use(cors());
app.use(bodyParser.json()); // To parse JSON body

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.get('/transactions', async (req, res) => {
    try {
        const { user } = req.query; // Get user ID from the query string
        const transactions = await Transaction.find({ user });
        res.status(200).json(transactions);
    } catch (err) {
        console.error('Error fetching transactions:', err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

app.get('/analysis', async (req, res) => {
    try {
        const { user } = req.query; // Get user ID from the query string
        const analysis = await Analysis.find({ user });
        res.status(200).json(analysis);
    } catch (err) {
        console.error('Error fetching analysis:', err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});


  
app.delete('/transactions/:id', async (req, res) => {
    try {
      const transaction = await Transaction.findByIdAndDelete(req.params.id);
  
      if (!transaction) {
        return res.status(404).json({ success: false, msg: 'Transaction not found' });
      }
  
      res.status(200).json({ success: true, msg: 'Transaction deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, msg: 'Server Error' });
    }
  });


app.post('/transactions', async (req, res) => {
    try {
        const { text, amount, category, user } = req.body;

        const newTransaction = new Transaction({ text, amount, category, user });


        const transaction = await newTransaction.save();

        res.status(201).json({
            success: true,
            data: transaction,
            msg: 'User registered successfully'
        });
    } catch (err) {
        console.error('Error during adding transaction:', err);
        res.status(500).send('Server error');
    }
});


app.post('/SignUp', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        user = new User({ email, password });
        await user.save();
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error('Error during signup:', err); // More detailed error logging
        res.status(500).send('Server error');
    }
});

app.post('/SignIn', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(400).json({ success: false, msg: 'Invalid credentials' });
        }

        const isMatch = (password === user.password); // For simplicity, not hashed. Hash your passwords in production!

        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        res.json({ success: true, userId: user._id });
    } catch (err) {
        console.error('Error during signin:', err); // More detailed error logging
        res.status(500).send('Server error');
    }
});

app.post('/data', (req, res) => {
    const userData = req.body; // This is the data you want to send to Python

    console.log('Received data:', req.body); // Log data to terminal

    // Convert the data to a JSON string
    const dataString = JSON.stringify(userData);
    console.log(dataString)
    // Path to the Python script
    const scriptPath = path.join(__dirname, 'model.py');
    

    // Execute the Python script
    exec(`python ${scriptPath} '${dataString}'`, (error, stdout, stderr) => {
        if (error) {
            console.error('Error executing script:', error);
            return res.status(500).json({ message: 'Failed to train model', error: error.message });
        }
        console.log('Script output:', stdout);
        res.json({ message: 'Model trained and saved successfully', scriptOutput: stdout });
    });
});


app.post('/analysis', async (req, res) => {
    const { user, categories } = req.body;

    try {
        // Find the document with the specified user ID and update it, or create a new one if it doesn't exist
        const result = await Analysis.findOneAndUpdate(
            { user }, // Filter by user ID
            { categories, updatedAt: new Date() }, // Update categories and timestamp
            { new: true, upsert: true } // Return the updated document, and create a new one if it doesn't exist
        );

        res.status(201).json({ success: true, data: result });
    } catch (error) {
        console.error('Error saving analysis:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

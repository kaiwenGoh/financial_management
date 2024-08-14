const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const { exec } = require('child_process');
const app = express();
const port = 3000;
const path = require('path');
// Enable CORS for all origins
app.use(cors());

app.use(bodyParser.json()); // To parse JSON body

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// app.post('/data', (req, res) => {
//     console.log('Received data:', req.body); // Log data to terminal
//     res.json({ message: 'Data received successfully', receivedData: req.body }); // Respond with data
// });

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


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const express = require('express');
const { spawn } = require('child_process');

const app = express();
const port = 3000;

// Endpoint to run the Python script
app.get('/runPythonScript', (req, res) => {
    // Run the Python script
    const pythonProcess = spawn('python', ['your_python_script.py']);

    // Collect output from Python script
    let output = '';
    pythonProcess.stdout.on('data', (data) => {
        output += data.toString();
    });

    // Handle errors
    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python script: ${data}`);
        res.status(500).send('An error occurred while running the Python script.');
    });

    // When Python script execution is finished
    pythonProcess.on('close', (code) => {
        console.log(`Python script exited with code ${code}`);
        // Send output back to the frontend
        res.send(output);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const taskRouter = require('./routes/task.routes');
const authRouter = require('./routes/auth.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/tasks', taskRouter);


connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Listening on port: ${port}`);
    });
})
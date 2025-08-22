const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');


const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, (err)=>{
  err ? console.log(err.message) : console.log('')
})

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.get('/health-check', (req,res)=> {
  res.send('Healtht is OK ✅');
})
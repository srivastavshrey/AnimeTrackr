const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = require('./routes/userRoutes.js')

const app = express();
dotenv.config()

const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users',router)
app.get('/',(req,res)=>{
  res.send("Working")
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

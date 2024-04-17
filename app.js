//const http = require('http');
//const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:  false}));
//app.use('/',(req,res,next)=>{
  //  console.log("This always runs!");
    //next();
//})
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);


app.use((req,res,next)=>{
  res.status(404).send('<h1>Page not  found</h1>');
})



//const server = http.createServer(app);
//const PORT = 3000;

//server.listen(PORT, () => {
  //  console.log(`Server is running on port ${PORT}`);
//});
//server.listen(3000);
app.listen(3000);
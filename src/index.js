const express = require('express');
const app = express();

const productsRoutes = require('./routes/products');


require('./database');

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(express.json());

//routes
app.use(productsRoutes);

app.listen(app.get('port'), () =>{
    console.log('server on port ', app.get('port'));
});
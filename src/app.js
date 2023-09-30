const express=require('express');
const morgan=require('morgan');
const app=express();
var cors = require('cors');
//settings
app.set('puerto',process.env.PORT|| 3000);
app.set('nombreApp','Gestión de empleados');
app.use(express.json())
app.use(cors());
app.use('/api/empleados',require('./routes/empleados.routes'));
app.use(morgan('dev'));
module.exports=app;

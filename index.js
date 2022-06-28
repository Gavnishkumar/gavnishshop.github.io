const express=require('express');
const app=express();
const port=80;
const path=require('path');
app.use('/static',express.static('static'));
app.set('view engine','pug');
app.set('./views', path.join(__dirname, 'views'));
app.get('/',(req,res)=>{
    res.status(200).render('index');
});
app.get('/items',(req,res)=>{
    res.status(200).render('items');
});
app.get('/about',(req,res)=>{
    res.status(200).render('about');
});
app.get('/contact',(req,res)=>{
    res.status(200).render('contact');
});
app.listen(port,(err,data)=>{
    console.log(`server is stared at port ${port}`);
});
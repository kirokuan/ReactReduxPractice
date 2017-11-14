const express=require('express');
const path = require('path');
const app = express();
app.get('/',(req,res)=>{
    res.sendFile('index.html', { root: path.join(__dirname, '../build')});
});
app.get('/bundle.js',(req,res)=>{
    res.sendFile('bundle.js', { root: path.join(__dirname, '../build')});
});

app.post("/getEvents",(req, res)=>{
    res.status(200).json([{
        event_id: 12345,
        camera_id: 332323,
        starting_timestamp: 12345678,
        prediction: 'people' ,
        thumbnail: 'http://sjojosjgs.png'
    }]);

});

app.listen(3000, () => {
    console.log(
      `  App is running at ${process.env.URL}:${process.env.PORT} in ${process.env.NODE_ENV} mode.`,
    );
    console.log('  Press CTRL-C to stop.\n');
  });
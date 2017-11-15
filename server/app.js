const express=require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(cors());
app.get('/',(req,res)=>{
    res.sendFile('index.html', { root: path.join(__dirname, '../build')});
});
app.get('/bundle.js',(req,res)=>{
    res.sendFile('bundle.js', { root: path.join(__dirname, '../build')});
});

app.post("/new-alarm-events",(req, res)=>{
    res.status(200).json({data:[{
        event_id: 12345,
        camera_id: 332923,
        starting_timestamp: 12345678,
        prediction: 'dog' ,
        thumbnail: 'http://sjojosjgs.png'
    },{
        event_id: 12346,
        camera_id: 3323993,
        starting_timestamp: 12310678,
        prediction: 'car' ,
        thumbnail: 'http://sjojosjgs.png'
    },{
        event_id: 12347,
        camera_id: 33232823,
        starting_timestamp: 123725678,
        prediction: 'people' ,
        thumbnail: 'http://sjojosjgs.png'
    }
]});

});
app.post("/event-viewed/:event_id",(req, res)=>{
    res.status(200).json({id:req.params.event_id });

});

app.listen(3000, () => {
    
    console.log('  Press CTRL-C to stop.\n');
  });
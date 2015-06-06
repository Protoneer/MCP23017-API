var I2C_addresses = [20,21];
var port = 8080;

var MCP23017 = require('node-mcp23017');
var express    = require('express');
var app        = express();
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/set', function(req, res) {
    res.json({ message: 'hooray! welcome to our Set api!' });
});

router.get('/get', function(req, res) {
    console.log('Start'); //get GPIO B Pin 0 value

    var mcp = new MCP23017({
        address: 0x20, //all address pins pulled low
        device: '/dev/i2c-1', // Model B
        debug: false
    });

    console.log(mcp.getGpioBPinValue(0)); //get GPIO B Pin 0 value

    res.json({ message: 'hooray! welcome to our Get api!' });
});

router.get('/mode', function(req, res) {
    res.json({ message: 'hooray! welcome to our Mode api!' });
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens at http://localhost:'+port+'/api');

/**
 * Created by sinires on 02.03.17.
 */

var serial = null;
var globalString = '';
let dataAsObj = {}

function connectToCOMPort(){
    const SerialPort = require('serialport');
    var statusElement = document.getElementById("socket-status");

    var port = document.getElementById("com-port-param").value;

    statusElement.innerHTML = "Try connect";

    serial && serial.close();

    statusElement.innerHTML = "Try reconnect";

    serial = new SerialPort(port, {
        parser: SerialPort.parsers.readline('\r')
    });

    serial.on('open', ()=>{
        console.log("COM port opened");

        statusElement.innerHTML = "Open";
    });

    serial.on('data', (data)=>{
        // console.log("COM data received len: " + data.length + " content: " + JSON.stringify(data));

        dataAsObj = parser.parse(data);
        redrawTable(dataAsObj);

        // statusElement.innerHTML = "Receive data";
        // globalString = JSON.stringify(data);
        // redrawTable(string2array(JSON.stringify(data)));
    });

    serial.on('close', ()=>{
        console.log("COM port closed");

        statusElement.innerHTML = "Close";
    });

    serial.on('error', (e)=>{
        console.log(`COM post err: ${JSON.stringify(e)}`);

        statusElement.innerHTML = `Error ${JSON.stringify(e)}`;
    });

    serial.on('disconnect', ()=>{
        console.log("COM post disconnected")

        statusElement.innerHTML = "Disconnect";
    });
}


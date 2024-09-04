const http = require('http');
const fs =require('fs');
const port = 3000
const os= require('os');
-------------------------------------------

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    fs.readFile('index.html',(error,data)=>{
        if (error) {
            res.write('File not found/read')
        } else {
            res.write(data);
            
        }ddd

        res.end();

    })
});

server.listen(port,(error)=>{
    if (error) {
        console.log('errororrrr:', error);
    } else {
        
        const appip= os.networkInterfaces().er0.[0].address
        const appaddress = 'http://['+appip+']:'+port+'/'
                console.log('server is listening on port: ' + appaddress);
    }

})



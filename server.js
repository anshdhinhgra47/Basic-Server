const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});

    
    let filepath;
    switch(req.url){
        case '/':
            filepath = './index.html'
            break;
        case '/profile': 
            filepath = './profile.html'
            break;

        default:
            filepath = './404.html'
    }

    fs.readFile(filepath, function(err, data){
        if(err){
            console.log('Error', err);
            return res.end('<h1>Error!</h1>')
        }

        return res.end(data);
    })


}


const createServer = http.createServer(requestHandler);
createServer.listen(port, function(err){
    if(err){
        console.log("Sorry! Error");
        return;
    }

    else{
        console.log('Server running on port: ', port);
    }
})


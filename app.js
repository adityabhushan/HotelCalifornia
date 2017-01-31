const express = require('express')
const app = express()
const http = require('http').Server(app)
const path = require('path')
const PORT = 3000 || process.env.PORT
let usernames = []

app.use('/',express.static(path.join(__dirname, 'public')))

http.listen(PORT, function(){
	console.log('listening at: '+PORT)
}) 

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html')
})

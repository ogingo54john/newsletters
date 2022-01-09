const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const request = require('request')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',function(req,res){
    res.sendFile(__dirname +"/signup.html")
})
app.listen(3000, function(){
    console.log('server running on port 3000')
})

app.post('/', function(req,res){
var firstName = req.body.firstName;
var lastName = req.body.lastName;
var email = req.body.email; 

console.log(firstName, lastName,email)
if(res.statusCode==200){
    res.send("successfully subscribed");
}else{
    res.send("There was an error can't suscibe");
}

})
//238b869dd27d4c46399aafd68c8b93cf-us20

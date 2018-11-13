var mongo = require("mongoose");  
var db =   
mongo.connect("mongodb://127.0.0.1:27017/meantcrud", function(err, response){  
   if(err){
       console.log(err);
}  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
  
module.exports =db;   
const mongoose =require("mongoose");
var mongoURL = 'mongodb+srv://nadulafourdiv:hO1JMNOMnBiS4xgM@cluster0.7kpi87l.mongodb.net/mern-rooms'
mongoose.connect(mongoURL,{useUnifiedTopology :true,useNewUrlParser:true});
var connection=mongoose.connection;
connection.on('error',()=>{
    console.log("Mongo DB connection failed")
})
connection.on('connected',()=>{
    console.log("Mongo DB connection successfull")
})

module.export=mongoose;
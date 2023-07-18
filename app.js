// const MongoClient=require("mongodb").MongoClient;
// const assert=require("assert");

// const url="mongodb://localhost:27017/db";
// const dbName="Fruits";
// const Client=new MongoClient(url);
// Client.connect(function(err){
//     assert.equal(err);
//     console.log("successfully connected");
//     const db=Client.db(dbName);
//     Client.close();
// });


const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/personsDB",{useNewUrlParser:true});
const fruitschema=new mongoose.Schema({
name:String,

price:Number,
rating:Number
})


   

const Fruit=mongoose.model("Fruit",fruitschema);
const fruit=new Fruit({
    name:"apple",
       
    

    price:94,
    rating:7
});
fruit.save();
const Banana=new Fruit({
    name:"Banana",
    price:44,
    rating:7
});
Banana.save();
const orange=new Fruit({
    name:"orange",
    price:54,
    rating:8
});
orange.save();

const peopleschema=new mongoose.Schema({
    name:String,
    
    age:Number,
    favfruit:fruitschema
   
    });
const Person=mongoose.model("Person",peopleschema)
const person=new Person({
    name:"john",
    age:30,
    favfruit:orange
});
person.save();


    
//Fruit.save();


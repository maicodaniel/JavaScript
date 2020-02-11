const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const admin = require("./routes/admin");
const path = require("path");
const porta = 3000;
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");


//Configurações
    //Sessão
        app.use(session({
            secret: "usuarios",
            resave: true,
            saveUninitialized: true
        }));
        app.use(flash());
    //Midleware
        app.use((req,res,next) => {
            res.locals.success_msg = req.flash("success_msg");
            res.locals.error_msg = req.flash("error_msg");
            next();
        })    
    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    //Handlebars
        app.engine("handlebars", handlebars({defaultLayout: "main"}));
        app.set("view engine", "handlebars");    
    //BD
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/cadastros", {useMongoClient: true}).then(() => {
            console.log("Conectado");
        }).catch((err) => {
            console.log("Conexão falhou" + err)
        })   
    //Public
        app.use(express.static(path.join(__dirname,"public")));    
//Rotas
app.use("/", admin)

// Outros

app.listen(porta, () => {
    console.log("Servidor on")
})
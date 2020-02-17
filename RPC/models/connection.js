const mongoose = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/acessos, {useMongoClient: true}").then(() =>{
    console.log('Conectado com sucesso')
}).catch((err) => {
    console.log('Erro ao conectar' + err)
})
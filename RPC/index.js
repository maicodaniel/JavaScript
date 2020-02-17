const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");
const path = require('path');
const fetch = require('node-fetch');
let data = new Date();
let dia = data.getDate();
let mes  = data.getMonth() + 1;
let ano = data.getFullYear() ;
let diaprog = ano +'-'+ mes+'-'+ dia;
let url =  'https://epg-api.video.globo.com/programmes/1337?date='+diaprog;
let pessoas;

app.use('/style',express.static(__dirname +'/style'));
const hbs = handlebars.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),

    helpers: {
        tempo: function(str) {
            
            str = str +'';
            let hora = str.split(':',2);
            console.log(str);
            let horainteira = parseInt(hora[0]);
            horainteira = horainteira - 3;
            
            if (horainteira ==  -1){
                horainteira = 23;
            }
            if (horainteira ==  -2){
                horainteira = 22;
            }
            if (horainteira ==  -3){
                horainteira = 21;
            }
            horainteira = horainteira + '';
            return horainteira +':'+hora[1];
        }
    }
})


fetch(url)
.then((res) => { return res.json(); })
.then((json) => {pessoas =json.programme.entries })





app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', function (req, res) {
    

    res.render('index', {prog: pessoas})
})


app.listen(port, function(){
    console.log(`Example app listening on port port!`)
} )
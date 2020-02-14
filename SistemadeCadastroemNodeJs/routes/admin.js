const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Usuarios")
const Usuario = mongoose.model("usuarios");

router.get('/', (req,res) => {
    res.render("admin/index")
})

router.get("/admin/listaUsuarios", (req, res, next) => {
        Usuario.find().sort({date: 'desc'})
        .lean()
        .then((usuario) => {
            res.render("admin/listaUsuarios", {usuario: usuario, titulo: 'Listar'});
        console.log(usuarios);
    }).catch((err) => {
        req.flash("error_msg","Erro ao buscar usuarios")
    })
    
})

router.get('/admin/addUsuarios', (req,res) => {
    res.render("admin/addUsuarios", {titulo: 'Adicionar'});
})

router.post('/admin/addUsuarios/novo',(req,res) => {

    let erros =[];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido"});
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "Email inválido"});
    }

    if (erros.length > 0) {
        res.render("admin/addUsuarios", {erros: erros});
    }else{
        const novoUsuario = {
            nome: req.body.nome,
            email: req.body.email
        }
        new Usuario(novoUsuario).save().then(() => {
            req.flash("success_msg", "Cadastrado com sucesso!!!");
            res.redirect("/admin/listaUsuarios");
            
        }).catch((err) => {
            req.flash("error_msg","Erro ao cadastrar o usuario " + err )
            res.redirect("/admin/listaUsuarios");
            
        })
    }

    

    
})

router.get('/admin/editarUsuarios/:id',(req,res) => {
    Usuario.findOne({
        _id: req.params.id
    })
    .lean()
    .then((usuario) => {
        res.render("admin/editarUsuario", {usuario: usuario})
    }).catch((err) => {
        req.flash("error_msg", "Cadastro não encontrado")
    })
})

router.post('/admin/editarUsuarios/novo',(req,res) => {
    Usuario.findOne({
        _id: req.body.id
    })
    
    .then((usuario) => {
        usuario.nome = req.body.nome;
        usuario.email = req.body.email;
        usuario.save().then(() => {
            req.flash("success_msg", "Editado com sucesso!!!");
            res.redirect("/admin/listaUsuarios");
        }).catch((err) => {
            req.flash("error_msg","Erro ao salvar o usuario " + err )
            res.redirect("/admin/listaUsuarios");
        })
    }).catch((err) => {
        req.flash("error_msg", "Erro ao editar o usuario")
        res.redirect("/admin/listaUsuarios");
    })
})


module.exports = router;
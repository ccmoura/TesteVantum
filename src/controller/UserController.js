const user = require('../model/User');

module.exports = {
    async index(req, res) {
        user.find()
        .then((rows) =>{
            res.render('index', {users: rows});
        });
    },

    async store(req, res) {
        let row = {
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            endereco: req.body.endereco,
        }
        let data = new user(row);
        data.save();
    },

    async findUserById(req, res){
        let id = req.body.id;
        users.findById(id, function(err, row) {
            if (err) res.send(`User ${id} not found.`);
            res.send(row)
        });
    },

    async putUserById(req, res){
        let id = req.body.id;
        users.findById(id, function(err, row) {  
            if (err) res.send(`User ${id} not found.`); 

            row.nome = req.body.nome;  
            row.email = req.body.email;  
            row.telefone = req.body.telefone;  
            row.endereco = req.body.endereco;  
            row.save();  
        })  
        res.send(`User ${id} successfully changed`);
    },
    
    async remove(req, res){
        let id = req.body.id;
        Contatos.findByIdAndRemove(id).exec();
        res.send(`User ${id} removed.`);
    },

}
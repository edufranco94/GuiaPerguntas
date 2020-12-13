const express = require ("express");
const app = express();
const bodyParses = require ("body-parser");
const connection = require("./database/database");

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.set('view engine', 'ejs') //Estou dizendo para o express usar o EJS como view engine
app.use(express.static('public')); //O Express vai usar arquivos estáticos que ficam na pasta públic

app.use(bodyParses.urlencoded({extended: false}));
app.use(bodyParses.json());

//Rota -> renderiza para index
app.get("/", (req, res) => {
    res.render("index");
});

//Rota -> renderiza para perguntar.ejs
app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao; 
    res.send("Formulário recebido! titulo " + titulo + " descricao " + descricao)
})

// Criar o servidor
app.listen(8080, () => { console.log ("App rodando...")});
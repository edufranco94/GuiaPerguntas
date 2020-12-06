const express = require ("express");
const app = express();


app.set('view engine', 'ejs') //Estou dizendo para o express usar o EJS como view engine
app.use(express.static('public')); //O Express vai usar arquivos estáticos que ficam na pasta públic

//Rota -> renderiza para index
app.get("/", (req, res) => {
    res.render("index");
});

//Rota -> renderiza para perguntar.ejs
app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

// Criar o servidor
app.listen(8080, () => { console.log ("App rodando...")});
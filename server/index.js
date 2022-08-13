const express = require("express");
const app = express();


const mysql = require ("mysql");
const cors = require ("cors");

const db = mysql.createPool({
    host: "localhost",
    port: "3307",
    user: "root",
    password:"",
    database: "crudpets",

});

app.use(cors());
app.use(express.json());

app.post("/register",(req, res)=>{
    const {dono} = req.body;
    const {endereco} = req.body;
    const {telefone} = req.body;
    const {nome} = req.body;
    const {idade} = req.body;
    const {tipo} = req.body;
    const {raca} = req.body;


    let SQL = "INSERT INTO pets(dono,endereco,telefone,nome,idade,tipo, raca) VALUES (?, ?,?,?,?,?,?)";

    db.query(SQL, [dono,endereco,telefone,nome,idade,tipo,raca], (err,result)=>{
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/getCards",(req, res)=>{
    let SQL = "SELECT * from pets";
    sb.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send (result);
    });

});

app.put("/edit", (req, res) => {
    const {id} = req.boby;
    const {dono} = req.boby;
    const {endereco} = req.boby;
    const {telefone} = req.boby;
    const {nome} = req.boby;
    const {idade} = req.boby;
    const {tipo} = req.boby;
    const {raca} = req.boby;

    let SQL = "UPDATE pets SET dono=?, endereco=?, telefone =?, nome=?, idade=?, tipo=?, raca=? WHERE idpets = ? ";

    db.query(SQL,[dono, endereco, telefone, nome, idade, tipo, raca, id], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })

});

app.delete("/delete/:id",(req, res) =>{
    const {id} = req.params;
    let SQL = "DELETE FROM pets WHERE idpets= ?";
    db.query(SQL,[id], (err,result)=>{
        if(err) console.log(err);
        else res.send(result);
    })
})

app.listen(3001, ()=>{
    console.log("rodando servidor");
});


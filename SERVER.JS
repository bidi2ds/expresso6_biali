// APRIMORAR A APRESENTAÇÃO DOS RESULTADOS

const express = require('express')
const mysql = require('mysql2')
const mysql_config = require('./mysql-config');
const functions = require('./fuctions')
const app = express();
app.listen(3000, ()=>{
    console.log('Servirdor no ar')

})

//mysql connection
const connection = mysql.createConnection(mysql_config)
//criar uma função qu eirá parametrizar as respostas da api
//para ultilizar todos os endpoints vamos uma função para isso
//criando o reoteamento

//consumindo cors
app.use(cors())

app.get('/',(req,res)=>{
    //estabelecer a conexão para execuitar a query
    //vamos consumir a fuctions criada
    connection.query("SELECT * FROM tasks",(err,results)=>{
        if(err){
            res.json(functions.response('error','Erro: '+err.message))
        }else{
            res.jsomn(functions.response('sucess', 'tasks listadas com sucesso', results))
        }
        
    })
})
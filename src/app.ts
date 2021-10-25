//inicializa o express
import express from "express";
const app = express();
//inicializa o server na porta 4000
app.listen(4000, () => console.log('Server Node rodando na porta 4000'))
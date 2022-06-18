import express from "express";
import cors from "cors";


const server = express();
server.use(cors());

const usuarios = [];

server.use(express.json());

server.post('/sign-up', (request, response) => {
    
    const usuarioCadastrado = usuarios.find((usuario) =>{
        request.body.username === usuario.username
    });
    if(usuarioCadastrado){
        console.log("esse usuario ja existe");
    }
    else{
        usuarios.push(request.body);
        response.send("OK");
    }
});

server.listen(5000);

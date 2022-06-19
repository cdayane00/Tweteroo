import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

const usuarios = [];
let tweets = [
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "1"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "2"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "3"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "4"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "5"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "6"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "7"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "8"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "9"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "10"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "11"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "12"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "13"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "14"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "15"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "16"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "17"
	// },
    // {
	// 	username: "bobesponja",
	// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	//   tweet: "18"
	// }
];

server.use(express.json());

server.post('/sign-up', (request, response) => {

    if(request.body.username && request.body.avatar){

        const usuarioCadastrado = usuarios.find((usuario) =>{
            request.body.username === usuario.username
        });
        if(usuarioCadastrado){
            response.status(400).send("Usuário existente");
        }
        else{
            usuarios.push(request.body);
            response.status(201).send("OK");
        }
    }
    else{
        response.status(400).send("Todos os campos são obrigatórios!");
    }
    
    
});

server.get('/tweets', (request, response) =>{
    if(tweets.length <= 10){
        const primeiro = 0;
        const ultimo = tweets.length;
        response.send(tweets.slice(primeiro,ultimo).reverse());
    }
    else{
        const ultimos = 10;
        const primeiro = tweets.length - ultimos;
        const ultimo = tweets.length;
        
        response.send(tweets.slice(primeiro,ultimo).reverse());
    }
    
});

server.post('/tweets', (request, response) => {
    if(request.body.username && request.body.tweet){
        let tweet = {
            username: request.body.username, 
            tweet: request.body.tweet
        }
    
        const msg = usuarios.find(
            (user) => user.username === tweet.username
        );
    
        tweet = {...tweet, avatar: msg.avatar};
        tweets.push(tweet);
        response.status(201).send("OK");
    }
    else{
        response.status(400).send("Todos os campos são obrigatórios!");
    }
    
} )

server.listen(5000);

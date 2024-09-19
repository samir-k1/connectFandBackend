// index.js
import express from 'express';
import dotenv from 'dotenv';


const app = express();
const port = process.env.PORT||3000;

app.get('/', (req, res) => {
  res.send('Hello World from the backend!');
});


app.get('/jokes',(req,res)=>{
   const jokes= [
        {
            "id": 1,
            "title": "Why don't scientists trust atoms?",
            "content": "Because they make up everything!"
        },
        {
            "id": 2,
            "title": "What do you call fake spaghetti?",
            "content": "An impasta!"
        },
        {
            "id": 3,
            "title": "Why did the scarecrow win an award?",
            "content": "Because he was outstanding in his field!"
        },
        {
            "id": 4,
            "title": "What do you call cheese that isn't yours?",
            "content": "Nacho cheese!"
        },
        {
            "id": 5,
            "title": "Why don't skeletons fight each other?",
            "content": "They don't have the guts!"
        }
    ]
res.send( jokes);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

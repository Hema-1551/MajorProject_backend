const express = require('express');

const app = express();

const port = 5000;

app.get("/api/todos",(req,res) =>{
    return res.json({todos:[
        {
            title:'task1'
        },
        {
            second_argument:" its value"
        }
    ]})
})


app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`)
});
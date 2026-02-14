const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/health',(req,res)=>{
    res.status(200).json({status: 'healthy',timestamp:new Date().toISOString()});

})

//api routes 

app.get('/api/items',(req,res)=>{
    res.json([
        {id: 1,name:'Learn Docker',done:true},
        {id:2,name:'Learn CI/CD',done:false},
        {id:3,name:'Deploy to Azure',done:false}
    ]);

});



app.get('api/items/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const items = [
        {id:1 ,name:'Learn Docker',done: true},
        {id:2,name:'Learn CI/CD',done:false},
        {id:3,name:'Deploy to Azure',done:false}
    ];
    const item = items.find(i => i.id === id);
    if(!item) return res.status(404).json({error:"Not found"});
    res.json(item);
})

if(process.env.NODE_ENV !== 'test'){
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
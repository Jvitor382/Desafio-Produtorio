const {app, PORT } = require("./server");

let produtorio = 1;

app.get("/", (req, res) =>{
    res.send(`Produtorio`);
});

app.get("/produtorio/:limiteinf/:limitesup", (req, res) => {
    let limiteinf = parseInt(req.params.limiteinf);
    let limitesup = parseInt(req.params.limitesup);

    if(limiteinf > 0 && limiteinf < limitesup )
    {
        produtorio = 1;
        for(let i = limiteinf; i < limitesup; i++) 
        {
            produtorio *= i + 1/i;
        }
        res.send(`Produtorio é igual ${produtorio}`);
    }
    else
    {
        res.status(400).send("Digite os valores corretamente");
    }

});

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});

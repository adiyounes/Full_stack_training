const fetch=require("node-fetch");
fetch("https://google.com")
    .then(response=>{
        console.log(response);
    })


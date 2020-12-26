document.getElementById('compileCode').addEventListener('click',()=>{
    console.log("clicked")

    const codeWritten=document.getElementById('code').value;
    const language=document.getElementById('cars').value;
    const inputGiven=document.getElementById('input').value;

    const data={
        codeWritten,
        language:"cpp17",
        inputGiven,
    }

    fetch('/compileCode',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then((res2)=>{
        /*
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.jdoodle.com/v1/execute";

        fetch(proxy+url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                script: codeWritten,
                language: "cpp17",
                versionIndex: "0",
                stdin: inputGiven,
                clientId:data.id,
                clientSecret:data.secret,
            })
        })
        .then(res=>res.json())
        .then((res2)=>{
            console.log(res2);
        })*/
        console.log(res2.output)
    })
 
})

document.getElementById('cars').addEventListener('change',()=>{
    lang=document.getElementById('cars').value;
    if(lang==='suz')
    {
        document.getElementById('code').innerHTML="hey";
    }
    else if(lang==='volvo')
    {
        document.getElementById('code').innerHTML="vik";
    }
})
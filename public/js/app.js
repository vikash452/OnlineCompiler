document.getElementById('compileCode').addEventListener('click',()=>{
    console.log("clicked")
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
let userCode=document.getElementById('code');
let userLanguage=document.getElementById('language');
let userInput=document.getElementById('input');
let userOutput=document.getElementById('output');

document.getElementById('compileCode').addEventListener('click',()=>{
    console.log("clicked")
    console.log(userLanguage.value)

    const data={
        codeWritten:userCode.value,
        language:userLanguage.value,
        inputGiven:userInput.value,
    }

    userOutput.value='Running....'

    fetch('/compileCode',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then((res2)=>{
        console.log(res2.output)
        userOutput.value=res2.output
    })
 
})

userLanguage.addEventListener('change',()=>{
    var languageChoosen=userLanguage.value;

    if(languageChoosen === 'cpp17')
    {
        userCode.value=
        "#include <iostream>\r\n" +
        "using namespace std;\r\n" +
        "\r\n" +
        "int main() {\r\n" +
        "// your code goes here\r\n" +
        "return 0;\r\n" +
        "}\r\n";
    }
    else if(languageChoosen === 'c')
    {
        userCode.value=
        "#include <stdio.h>\r\n" +
        "\r\n" +
        "int main(void) {\r\n" +
        "// your code goes here\r\n" +
        "return 0;\r\n" +
        "}\r\n" +
        "\r\n";
    }
    else if(languageChoosen === 'python2')
    {
        userCode.value="# write your python code here\r\n";
    }
    else if(languageChoosen === 'java')
    {
        userCode.value=
        "public class Solution {\r\n" +
        "    public static void main(String[] args) {\r\n" +
        "        // Write your code here\r\n" +
        "    }\r\n" +
        "}";
    }
    else
    {
        alert('please select a language')
    }
})

document.getElementById('clear').addEventListener('click',()=>{
    console.log('here')
    userCode.value="";
})
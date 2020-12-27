let userCode=document.getElementById('code');
let userLanguage=document.getElementById('language');
let userInput=document.getElementById('input');
let userOutput=document.getElementById('output');

var editor=CodeMirror.fromTextArea(document.querySelector('#code'),{
    lineNumbers:true,
    tabSize:2,  
    extraKeys:{'Ctrl-Space':'autocomplete'},
    matchBrackets:true,
});

editor.setSize('700','600')

document.getElementById('compileCode').addEventListener('click',()=>{
    // console.log(editor.getValue())
    // console.log("clicked")
    // console.log(userLanguage.value)

    const data={
        codeWritten:editor.getValue(),
        language:userLanguage.value,
        inputGiven:userInput.value,
    }

    userOutput.value='Running....'
    document.getElementById('compileCode').disabled=true;

    fetch('/compileCode',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then((res2)=>{
        console.log(res2)
        userOutput.value=res2.output
        document.getElementById('compileCode').disabled=false;
    })
 
})

userLanguage.addEventListener('change',()=>{
    var languageChoosen=userLanguage.value;

    if(languageChoosen === 'cpp17')
    {
        editor.setValue("#include <iostream>\r\n" +
        "using namespace std;\r\n" +
        "\r\n" +
        "int main() {\r\n" +
        "\t// your code goes here\r\n" +
        "\treturn 0;\r\n" +
        "}\r\n")
    }
    else if(languageChoosen === 'c')
    {
        editor.setValue("#include <stdio.h>\r\n" +
        "\r\n" +
        "int main(void) {\r\n" +
        "\t// your code goes here\r\n" +
        "\treturn 0;\r\n" +
        "}\r\n" +
        "\r\n")
    }
    else if(languageChoosen === 'python2')
    {
        editor.setValue("# write your python code here\r\n")
    }
    else if(languageChoosen === 'java')
    {
        editor.setValue("public class Solution {\r\n" +
        "    public static void main(String[] args) {\r\n" +
        "        // Write your code here\r\n" +
        "    }\r\n" +
        "}")
    }
    else
    {
        alert('please select a language')
    }
})


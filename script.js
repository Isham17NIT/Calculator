let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);

function isOperator(c)
{
    return c=='+' || c=='-' || c=='%' || c=='/' || c=='*';
}
arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string).toString();
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL')
        {
            string = string.substring(0, string.length-1);
            input.value=string;
        }
        else
        {
            let lastChar = string[string.length - 1];

            // Prevent two operators in a row
            if (isOperator(e.target.innerHTML) && isOperator(lastChar)) {
                return; // do nothing
            }
            else{
                string += e.target.innerHTML;
                input.value = string;
            }            
        }
    })
})
let calcInput = document.querySelector('.calc-input-text')
const calcUndo = document.querySelector('.calc-input-undo')
let calcEqually = document.querySelector('.calc-menu-equally')


calcInput.value = '0,00'

function textInput(num){
    if (calcInput.value == '0,00' || calcInput.value == '∞'){
        calcInput.value = '' 
        
    }
    calcInput.value = calcInput.value + num;
    if (calcInput.value == '+' || calcInput.value == '-' || calcInput.value == '*' || calcInput.value == '/' || calcInput.value == ','){
        calcInput.value = '0,00'
    }
    
    let calcInputArr = calcInput.value.toString().split('')
    for(let i=0; i<=calcInputArr.length; i++){
        if(calcInputArr[i]==='+' && calcInputArr[i+1]==='+' || calcInputArr[i]==='+' && calcInputArr[i+1]==='-' || calcInputArr[i]==='+' && calcInputArr[i+1]==='*' || calcInputArr[i]==='+' && calcInputArr[i+1]==='/' || calcInputArr[i]==='+' && calcInputArr[i+1]==='.'){
           calcInputArr.pop()
           calcInput.value = calcInputArr.join('')
        }
        if(calcInputArr[i]==='-' && calcInputArr[i+1]==='+' || calcInputArr[i]==='-' && calcInputArr[i+1]==='-' || calcInputArr[i]==='-' && calcInputArr[i+1]==='*' || calcInputArr[i]==='-' && calcInputArr[i+1]==='/' || calcInputArr[i]==='-' && calcInputArr[i+1]==='.'){
            calcInputArr.pop()
            calcInput.value = calcInputArr.join('')
         }
         if(calcInputArr[i]==='*' && calcInputArr[i+1]==='+' || calcInputArr[i]==='*' && calcInputArr[i+1]==='-' || calcInputArr[i]==='*' && calcInputArr[i+1]==='*' || calcInputArr[i]==='*' && calcInputArr[i+1]==='/' || calcInputArr[i]==='*' && calcInputArr[i+1]==='.'){
            calcInputArr.pop()
            calcInput.value = calcInputArr.join('')
         }
         if(calcInputArr[i]==='/' && calcInputArr[i+1]==='+' || calcInputArr[i]==='/' && calcInputArr[i+1]==='-' || calcInputArr[i]==='/' && calcInputArr[i+1]==='*' || calcInputArr[i]==='/' && calcInputArr[i+1]==='/' || calcInputArr[i]==='/' && calcInputArr[i+1]==='.'){
            calcInputArr.pop()
            calcInput.value = calcInputArr.join('')
         }
         if(calcInputArr[i]==='.' && calcInputArr[i+1]==='+' || calcInputArr[i]==='.' && calcInputArr[i+1]==='-' || calcInputArr[i]==='.' && calcInputArr[i+1]==='*' || calcInputArr[i]==='.' && calcInputArr[i+1]==='/' || calcInputArr[i]==='.' && calcInputArr[i+1]==='.'){
            calcInputArr.pop()
            calcInput.value = calcInputArr.join('')
         }
    }
}

function textClear(){ 
   calcInput.value = '0,00'
}

calcEqually.addEventListener('click', function(){
    let calcEval = eval(calcInput.value)
    calcInput.value = calcEval
    
    if(calcEval == Infinity){
        calcInput.value = '∞'
    }
    
    if(calcEval == undefined){
        calcInput.value = '0,00'
    }
    if(calcInput.value == 'NaN'){
        calcInput.value = 'Error, try again'
    }
    if(calcEval == '0'){
        calcInput.value = '0,00'
    }
})

calcUndo.addEventListener('click', function(){
    if(calcInput.value == '0,00'){
        calcInput.value = ''
    }
    else{
        let calcInputArray = calcInput.value.toString().split('')
        let trash = calcInputArray.pop()  
        calcInput.value = calcInputArray.join('')
    }
    
    
})
    

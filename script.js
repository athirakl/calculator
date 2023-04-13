function displayNumber(num){
    // console.log(num);


    // let resultbox=document.querySelector("#id_result")
    // resultbox.value+=num

    id_result.value+=num
}
function clearBox(){
    id_result.value=""

}

function evaluateExpression(){
    let currentexpression=id_result.value
    let out=eval(currentexpression)
    //eval function used to evaluate a function 
    id_result.value=out

}
function backspace(){
    let currentvalue=id_result.value
    let output=currentvalue.slice(0,-1)
    id_result.value=output
}
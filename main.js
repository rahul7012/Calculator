//display content
const displayContent = (content)=>{
     resultbox.value += content;
}

//clear content
const clearContent = ()=>{
    resultbox.value = "";
}

//evaluvate
const evalContent = ()=>{
    try{
        resultbox.value = eval(resultbox.value);
    }
    catch{
        resultbox.value ="Error"
    }

}

const removeContent = ()=>{
    resultbox.value = resultbox.value.slice(0,-1)
}
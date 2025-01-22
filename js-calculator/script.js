const total = document.querySelector(".text");
const val = document.querySelectorAll(".val");
const fshi = document.querySelector(".AC");
const fshiel = document.querySelector(".DEL");
const barabart = document.querySelector(".equal");

// mbledh te dhenat dhe i afishon
val.forEach((val)=>{
    val.addEventListener("click",()=>{
        outputEl.value += val.value ;
    })
})

// fshin te gjitha shifrat
fshi.addEventListener("click",()=>{
    outputEl.value = "";
})

// fshin shiren e fundit
fshi1.addEventListener("click",()=>{
    outputEl.value = outputEl.value.slice(0,-1);
})

// tregon error ose jo
barabart.addEventListener("click",()=>{
    try{
        outputEl.value = eval(outputEl.value);
    }catch(e){
        alert(e);
    }
})
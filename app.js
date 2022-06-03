const input_displayer = document.querySelector("#input_displayer");
const out_displayer = document.querySelector("#output_displayer");
const btn = document.querySelectorAll("td");

input_displayer.focus();

btn.forEach(element =>{
    element.addEventListener("click" , () =>{
        if(element.classList.contains("equal")){
            if(input_displayer.value != ""){
                input_displayer.value = eval(input_displayer.value)
            }  
            out_displayer.value =""  
        }else if(element.classList.contains("reduice")){
            input_displayer.value = input_displayer.value.slice(0,-1);
        }else if(element.classList.contains("toNull")){
            input_displayer.value = "";
        }
        else{
            if(input_displayer.value === ""){
                if(!element.classList.contains("twoZero")){
                    input_displayer.value += element.innerHTML
                }
            }else if(input_displayer.value === "0"){
                if(!element.classList.contains("oneZero")){
                    input_displayer.value += element.innerHTML
                }
            }
            else{
                input_displayer.value += element.innerHTML
            }   
        }
        if(input_displayer.value != eval(input_displayer.value)){
                out_displayer.value = eval(input_displayer.value)
        }else{
            out_displayer.value = ""
        }
        if(input_displayer.value === ""){
            input_displayer.focus();
            out_displayer.value = ""
        }        
    })   
    
})





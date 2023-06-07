let increment=document.getElementById("incrmntbutton");
let decrement=document.getElementById("dcrmntbutton");
let reset=document.getElementById("resetbutton");
let disp=document.getElementById("display");


decrement.addEventListener("click", () =>{
    let value = Number(disp.innerText);
    if(value<=0) alert("Negative values are not allowed");
    else
    disp.innerText = value -1;
  }); 
  
  // for increment button click
  increment.addEventListener("click", () => {
    const value = Number(disp.innerText);
   
    if (value >= 10) {
        alert("10+ values are not allowed");
    }
    else
         disp.innerText = value + 1;
  
  
});

  reset.addEventListener("click", () => {
    const value = Number(disp.innerText);
    disp.innerText = 0;

  });



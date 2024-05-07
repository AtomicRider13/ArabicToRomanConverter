const outputEl = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("number");



convertBtn.addEventListener("click", () => {
  
   convertCheck(inputEl.value);

});

const romanObj = [
  {roman: "M",arabic:1000},
  {roman: "CM",arabic:900},
  {roman:"D",arabic:500},
  {roman:"CD",arabic:400},
  {roman:"C",arabic:100},
  {roman:"XC",arabic:90},
  {roman:"L",arabic:50},
  {roman:"XL",arabic:40},
  {roman:"X",arabic:10},
  {roman:"IX",arabic:9},
  {roman:"V",arabic:5},
  {roman:"IV",arabic:4},
  {roman:"I",arabic:1}
]

function convert(input)  {
    let result="";

    for(let i=0;i < romanObj.length;i++) {
      while(input >= romanObj[i].arabic) {
        result+=romanObj[i].roman;
        input-=romanObj[i].arabic;
      }
    }
  outputEl.innerText = result;
};

function convertCheck(input) {
  if (input === "") {
    outputEl.innerText = "Please enter a valid number";
  } else if (input < 0) {

    outputEl.innerText = "Please enter a number greater than or equal to 1"

  } else if (input >= 4000) {
    
    outputEl.innerText = "Please enter a number less than or equal to 3999"
    
  } else {
    convert(input);
  }

  
};

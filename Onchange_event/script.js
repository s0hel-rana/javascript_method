console.clear();
//input change
// const input = document.querySelector("input[name=name]");
// input.addEventListener("change", handleChange);

// function handleChange(e){
//     // e.target.name;
//     console.log(e.target.value);

// }

//checkbox change
// const programs = document.querySelectorAll("input[name=program]");
// // console.log(programs);
// Array.from(programs).map((program) => {
//     program.addEventListener("change", handleProgram);
// });

// function handleProgram(e){
//     if(e.target.checked){   
//         console.log(e.target.value);
//     }
// }

//select change
const country = document.querySelector("#country");
country.addEventListener("change", handleCountry);

function handleCountry(e){  
    console.log(e.target.value);
}
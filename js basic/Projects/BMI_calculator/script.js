
const form = document.querySelector('form');
//this usecase will give you empty value

// const height = parseInt(document.querySelector('#height').value);

// Event Listener
form.addEventListener('submit',(e) =>{
    console.log(form)
e.preventDefault(); // prevent value for the submission

//get input values convert it into number because value comes in string.

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;
} else if (weight === ''||  weight < 0 || isNaN(weight)){
    results.innerHTML = `Please Enter a valid  Weight ${weight}`
}else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2);

    //show the result
    results.innerHTML = `<span> Your BMI is ${bmi}</span>`
};
})
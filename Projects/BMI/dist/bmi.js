
const form = document.querySelector('form');
// console.log('form')

form.addEventListener('submit',function (e) {
    e.preventDefault();

    const height =parseInt(document.querySelector('#height').value)
    // console.log("Height:",height);
    const weight=parseInt(document.querySelector('#weight').value);
    // console.log("Weight:",weight);
    const result=document.querySelector('#result');
    const cond=document.querySelector('#result1')

    result.style.margin="10px"

    if (height==='' || height<0 || isNaN(height)) {
        result.innerHTML=`PLease enter a valid height ${height}`
    } 
    else if (weight==='' || weight<0 || isNaN(weight)) {
        result.innerHTML=`PLease enter a valid weight ${weight}`
    } 
    
    else {
            const bmi=(weight/((height*height)/10000)).toFixed(2);
            result.innerHTML=`BMI is <span> ${bmi}</span>`
    
            if (bmi<18.6) {
                cond.innerHTML="Underweight"
                cond.style.color="red"
            }
            if (bmi >= 18.6 && bmi <= 26) {
                cond.innerHTML = "Normal BMI";
                cond.style.color = "green";
             }

              if (bmi>26) {
                cond.innerHTML = "OverWeight";
                cond.style.color = "red";
             }

    }
})
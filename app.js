const age = parseInt(prompt('HowOld?', 'Insert Age'));
function ageMesure(age){
    if(isNaN(age)) {
        alert('Insert Number');
    }
    else if(age >= 20){
        alert('you can drink')
    }
    else{
         alert('you are too young')
    }
}
ageMesure(age);
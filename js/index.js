// Student Grade Generator
/**
 * Basic Rules:
 * A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
 *  */
function gradeGenerator(event){
    event.preventDefault();
    const gradeElm = document.getElementById('grade-output')
    const score = parseInt(document.getElementById('grade-generator').value)
    if(score > 79 && score < 101){
        console.log('Works!')
        gradeElm.innerText= "A"
        return "A"
    }
    else if(score <80 && score > 59){
        gradeElm.innerText= "B"
        return "B"
    }
    else if(score < 60 && score > 48){
        gradeElm.innerText= "C"
        return "C"
    }
    else if (score < 50 && score > 39){
        gradeElm.innerText= "D"
        return "D"
    }
    else if(score < 40){
        gradeElm.innerText= "E"
        return "E"
    }
    else{
        gradeElm.innerText= "Invalid Score, try again!"
    }

}
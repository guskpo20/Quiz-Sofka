const baseDeDatos = [
    {
        pregunta: 'La Respuesta es a',
        a: 'es esta',
        b: 'esta no',
        c: 'esta tampoco',
        d: 'tas ciego? es la a',
        correcta: 'a'
    },{
        pregunta: 'La Respuesta es c',
        a: 'esta tampoco',
        b: 'esta no',
        c: 'es esta',
        d: 'tas ciego? es la c',
        correcta: 'c'
    },{
        pregunta: 'La Respuesta es b',
        a: 'esta tampoco',
        b: 'es esta',
        c: 'esta no',
        d: 'tas ciego? es la b',
        correcta: 'b'
    },{
        pregunta: 'La Respuesta es d',
        a: 'esta tampoco',
        b: 'tas ciego? es la d',
        c: 'esta no',
        d: 'es esta',
        correcta: 'd'
    }
]

const pregunta = document.getElementById('pregunta')
const resp_a = document.getElementById('a_text')
const resp_b = document.getElementById('b_text')
const resp_c = document.getElementById('c_text')
const resp_d = document.getElementById('d_text')
const botonSiguiente = document.getElementById('btnSig')

let answer = undefined;
let index = 0;
let correctas = 0;

llenarQuiz()


function llenarQuiz(){
    let quizData = baseDeDatos[index]
    pregunta.textContent = quizData.pregunta
    resp_a.textContent = quizData.a
    resp_b.textContent = quizData.b
    resp_c.textContent = quizData.c
    resp_d.textContent = quizData.d
}

//funcion para chequear si eligio o no alguna respuesta
function getSelected(){
    const answersEls = document.querySelectorAll('input.answer');

    let answer = undefined;

    answersEls.forEach((answersEl) =>{
        if(answersEl.checked){
            answer = answersEl.id;
        }
    });
    
    return answer;
}


botonSiguiente.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        let quizData = baseDeDatos[index];
        if(answer == quizData.correcta ){
            correctas++;
        }
        index++;
        if(index < baseDeDatos.length){
            llenarQuiz();
        }else{
            alert("Terminaste!, lograste responder " + correctas +" respuestas correctas");
            console.log(correctas);
        }
    }
})

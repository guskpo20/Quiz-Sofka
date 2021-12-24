const Preguntas1 = [
    {
        pregunta: 'Que animal es el rey de la selva?',
        a: 'Leon',
        b: 'Mono',
        c: 'Hormiga',
        d: 'Horangutan',
        correcta: 'a'
    },{
        pregunta: 'Que animal es el mas rapido terrestre?',
        a: 'Ballena',
        b: 'Tiburon',
        c: 'Cheeta',
        d: 'Gusano',
        correcta: 'c'
    },{
        pregunta: 'Que animal es mamifero y pone huevos?',
        a: 'Nutria',
        b: 'Ornitorrinco',
        c: 'Canguro',
        d: 'Humanos',
        correcta: 'b'
    },{
        pregunta: 'Cual de estos es un insecto?',
        a: 'Serpiente',
        b: 'Mono',
        c: 'Perro',
        d: 'Araña',
        correcta: 'd'
    },{
        pregunta: 'Cual de estos es el mejor amigo del hombre?',
        a: 'Caballos',
        b: 'Leones',
        c: 'Mariposas',
        d: 'Perros',
        correcta: 'd'
    }
]
const Preguntas2 = [
    {
        pregunta: 'Cual de estos no es un continente?',
        a: 'China',
        b: 'America',
        c: 'Europa',
        d: 'Asia',
        correcta: 'a'
    },{
        pregunta: 'Cuántos estados tiene los Estados Unidos?',
        a: '20',
        b: '10',
        c: '50',
        d: 'No tiene estados, son departamentos',
        correcta: 'c'
    },{
        pregunta: 'Cual es la capital de Paraguay?',
        a: 'Montevideo',
        b: 'Asuncion',
        c: 'Brasilia',
        d: 'Paraguay',
        correcta: 'b'
    },{
        pregunta: 'Cual de estos paises no tiene salida al oceano?',
        a: 'Uruguay',
        b: 'Brasil',
        c: 'Mexico',
        d: 'Bolivia',
        correcta: 'd'
    },{
        pregunta: 'Cual de estos paises es el mas grande?',
        a: 'Uruguay',
        b: 'Paraguay',
        c: 'Bolivia',
        d: 'Brasil',
        correcta: 'd'
    }
]
const Preguntas3 = [
    {
        pregunta: 'Como se llama el componente minimo que forma a los seres vivos?',
        a: 'Celula',
        b: 'Poro',
        c: 'Tejido',
        d: 'Pelo',
        correcta: 'a'
    },{
        pregunta: 'El proceso por el cual una celula se divide para formar dos es :',
        a: 'Meiosis',
        b: 'Segregacion',
        c: 'Mitosis',
        d: 'Canto',
        correcta: 'c'
    },{
        pregunta: 'Los comosomas estan formados por:',
        a: 'Proteinas',
        b: 'ADN',
        c: 'ARN',
        d: 'Chocolate',
        correcta: 'b'
    },{
        pregunta: 'La fuerza fisica que la tierra ejerce sobre los cuerpos hacia su centro es la:',
        a: 'Normal',
        b: 'Rozamiento',
        c: 'Peso',
        d: 'Gravedad',
        correcta: 'd'
    },{
        pregunta: 'La columna más a la derecha de la tabla periódica esta compuesta por:',
        a: 'Haluros',
        b: 'Minerales',
        c: 'Ninguna de las opciones es correcta',
        d: 'Gases Nobles',
        correcta: 'd'
    }
]
const Preguntas4 = [
    {
        pregunta: 'Cuánto es la cuarta parte de la tercera parte?',
        a: 'Un doceavo',
        b: '3/4 partes',
        c: 'Un septimo',
        d: 'Dos septimos',
        correcta: 'a'
    },{
        pregunta: 'Si 3x+2 = 5. Cuanto vale x?',
        a: '2',
        b: '3',
        c: '1',
        d: 'Ninguna de las anteriores',
        correcta: 'c'
    },{
        pregunta: 'Que se usa para resolver sistemas con dos incognitas?',
        a: 'Ruffini',
        b: 'Bhaskara',
        c: 'Pitagoras',
        d: 'Ninguna de las anteriores',
        correcta: 'b'
    },{
        pregunta: 'Cuantos lados iguales tiene un triangulo isosceles?',
        a: '3',
        b: 'Ninguno',
        c: 'Puede ser la a y la d',
        d: '2',
        correcta: 'd'
    },{
        pregunta: 'Si 5 + 3x = 20. Cuanto vale x?',
        a: '0',
        b: '1',
        c: '2',
        d: '5',
        correcta: 'd'
    }
]
const Preguntas5 = [
    {
        pregunta: 'Cuándo se inauguró el metro de Londres?',
        a: '1863',
        b: '1860',
        c: '1963',
        d: '1760',
        correcta: 'a'
    },{
        pregunta: 'Quién inventó la World Wide Web, y cuándo?',
        a: 'Tim Berners-Lee, 1980',
        b: 'Robert Anderson, 1990',
        c: 'Tim Berners-Lee, 1990',
        d: 'Robert Anderson, 1980',
        correcta: 'c'
    },{
        pregunta: 'Qué ocurrió el 20 de Julio de 1969?',
        a: 'El ataque a las torres gemelas',
        b: 'El alunizaje del Apollo 11',
        c: 'Fin de la primera guerra mundial',
        d: 'El nacimiento de Newton',
        correcta: 'b'
    },{
        pregunta: 'Cuándo se publicó la primer edición de la revista Vogue?',
        a: '1880',
        b: '2000',
        c: '1960',
        d: '1892',
        correcta: 'd'
    },{
        pregunta: 'Quién inventó el icónico Little Black Dress?',
        a: 'Coco Chanel, 1930s',
        b: 'Vincent van Gogh, 1800s',
        c: 'Vincent van Gogh, 1920s',
        d: 'Coco Chanel, 1920s',
        correcta: 'd'
    }
]
const BaseDePreguntas = [Preguntas1, Preguntas2, Preguntas3, Preguntas4, Preguntas5]
const pregunta = document.getElementById('pregunta')
const resp_a = document.getElementById('a_text')
const resp_b = document.getElementById('b_text')
const resp_c = document.getElementById('c_text')
const resp_d = document.getElementById('d_text')
const botonSiguiente = document.getElementById('btnSig')
const botonSalir = document.getElementById('btnExt')
const botonRestart = document.getElementById('btnRes')
const puntos = document.getElementById('puntos')
const highScore = document.getElementById('highscore')
const resetHigh = document.getElementById('btnResHis')


let myHighScore = localStorage['HighScore']
let answer = undefined;
let index = Math.floor(Math.random() * 5);
let correctas = 0;
puntos.innerText = "Puntos: " + correctas;
let preguntaIndex = 0;
let preguntas = BaseDePreguntas[preguntaIndex];
let respondidas = 0;
if(myHighScore){
    highscore.innerText = "Highscore: " + myHighScore
}else{
    myHighScore = "0"
    highScore.innerText = "Highscore: " + myHighScore
}


llenarQuiz()

function llenarQuiz(){
    let quizData = preguntas[index]
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
        let quizData = preguntas[index];
        if(answer == quizData.correcta ){
            correctas++;
            puntos.innerText = "Puntos: " + correctas*10;
            respondidas++;
            preguntaIndex++;
            preguntas = BaseDePreguntas[preguntaIndex];
            index = Math.floor(Math.random() * 5);

            if(respondidas < 5){
                llenarQuiz();
            }else{
                alert("Terminaste!, lograste responder " + correctas +" respuestas correctas. Hiciste " + correctas*10 + " puntos");
                botonSalir.disabled = true;
            }
            puntuacion = correctas*10
            if((puntuacion)>myHighScore){
                localStorage['HighScore'] = (correctas*10).toString();
                highscore.innerText = "Highscore: " + puntuacion
            }
        }else{
            alert("Fallaste!, has perdido el juego.");
            document.location.reload();
        }
        
    }
})

botonSalir.addEventListener("click", () =>{
    botonSiguiente.disabled = true;
    alert("Terminaste!, lograste responder " + correctas +" respuestas correctas. Hiciste " + correctas*10 + " puntos");
    puntuacion = correctas*10
    if((puntuacion)>myHighScore){
        localStorage['HighScore'] = puntuacion.toString();
        highscore.innerText = "Highscore: " + puntuacion
    }
})

botonRestart.addEventListener("click",()=>{
    document.location.reload();
})

resetHigh.addEventListener("click",()=>{
    puntuacion=0;
    localStorage['HighScore'] = puntuacion.toString();
    highscore.innerText = "Highscore: " + puntuacion
})
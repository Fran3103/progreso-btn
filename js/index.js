const numero = document.querySelectorAll('.circle');
const siguiente = document.getElementById('next');
const anterior = document.querySelector('.anterior')
const progreso = document.getElementById('progreso');

let activos= 1

siguiente.addEventListener('click', ()=>{
    
    activos ++;
    
    if (activos>numero.length){
        activos = numero.length
    }
    
    actualizar()
    
})

anterior.addEventListener('click', ()=>{
    
    activos --;
    

    if (activos<numero.length){
        activos = 1
    }
    
    actualizar()
    
    
})



function actualizar(){
    numero.forEach( (num, idx) => {
        if (idx < activos){
            num.classList.add('activo')
        } else{
            num.classList.remove('activo')
        }
    })

    const activo = document.querySelectorAll('.activo')
    progreso.style.width = (activo.length - 1) / (numero.length - 1) * 100 + '%';

    if(activos === 1){
        anterior.disabled = true;
    } else if (activos === numero.length){
        siguiente.disabled = true
    }
    else{
        anterior.disabled = false;
        siguiente.disabled = false;
    }

   



    }




    









    

dateDay = document.getElementById('day');

const days = {
    1:'lundi',
    2:'mardi',
    3:'mercredi',
    4:'jeudi',
    5:'vendredi',
    6:'samedi',
    7:'dimanche'
}
const months = {
    0:'janvier',
    1:'fevrier',
    2:'mars',
    3:'avril',
    4:'mai',
    5:'juin',
    6:'juillet',
    7:'août',
    8:'septembre',
    9:'octobre',
    10:'novembre',
    11:'decembre'
}
let day = new Date();

d = day.getDay();

dd = day.getDate();

m = day.getMonth();

y = day.getFullYear();

dateDay.innerText = days[d]+' '+dd+' '+months[m] +' '+y;


setInterval(()=>{

    let day = new Date();

    let h = day.getHours() * 30;

    let m = day.getMinutes() * 6;

    let s = day.getSeconds() * 6;

    const hr = document.querySelector('.hr');

    const mn = document.querySelector('.mn');

    const sc = document.querySelector('.sc');


    hr.style.transform = `rotateZ(${h+(m/12)}deg)`;

    mn.style.transform = `rotateZ(${m+s/60}deg)`;

    sc.style.transform = `rotateZ(${s}deg)`;

})

const works = document.querySelector('.works');

var id = 1,idDiv = 1;

var list = [];


// *****************sleep********************

function sleep(milliseconds) {

    let timeStart = new Date().getTime();

    while (true) {

        let elapsedTime = new Date().getTime() - timeStart;

        if (elapsedTime > milliseconds) {

            break;
        }
    }
}



// *****************refresh*************


function filtrer(list){
    
    l = [];

    for(el of list){
        
        if(el.classList.contains('deleted')){

            l.push(el);
        }
    }

    return l;
    
}

function classe(){

    var check = document.querySelectorAll('.inp')

    var t=0;

        r = setInterval(()=>{

            t++;

            if(t>1){
        
                refresh.classList.remove('fa-spin');

                checked = filtrer(check);

                checked.forEach(el => {el.parentElement.parentElement.style.display = 'none'});

                clearInterval(r);
            }

        },1000);
    
        refresh.classList.add('fa-spin');
    
    
}

const refresh = document.getElementById('refresh');

setInterval(()=>{

    refresh.onclick = function (e){

        e.preventDefault();

        classe();
        
    };


},)


//********************create element



document.getElementById('todo').addEventListener('keyup',(e)=>{

    const valu = document.getElementById('todo');

    if(valu.value && e.code === 'Enter'){

        const div = document.createElement('div');

        const p = document.createElement('p');

        const input = document.createElement('input');

        const span = document.createElement('span');

        const img = document.createElement('img');

        p.appendChild(input);

        p.appendChild(span);

        div.appendChild(p);

        div.appendChild(img);

        div.classList.add('work');

        div.setAttribute('id','div'+idDiv);

        img.setAttribute('src','icone.png');

        img.classList.add('image');

        input.setAttribute('type','checkbox');

        input.classList.add('inp');

        input.setAttribute('id','in'+id);

        works.appendChild(div);

        span.innerText = valu.value;

        valu.value = '';

        // list.push(div);

        id++;

        idDiv++;
       
    }
});



// ****************the works done*******



setInterval(() => {

    var check = document.querySelectorAll('.inp');


    for(c of check){

        if(c.checked == true){

            c.nextElementSibling.style.color = "#555"

            c.nextElementSibling.style.textDecoration = "line-through";

            c.classList.add('deleted');
             
        }
        else
        {
            c.nextElementSibling.style.color = "#000";

            c.nextElementSibling.style.textDecoration = "none";

            if(c.classList.contains('deleted')){

                c.classList.remove('deleted');
            }
           
             
        }
    }
    
},);


// ****************delete icon**********************


function deleted(){

    this.parentElement.style.display = 'none';
}

setInterval(() => {

    var del = document.querySelectorAll('.image');

    del.forEach(trash => trash.onclick = deleted)

},);



// sleep(3000);






  

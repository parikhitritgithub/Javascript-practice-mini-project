const buttons = document.querySelectorAll('.button');
const body = document.getElementById('main');
console.log(body);

buttons.forEach(function (button) {
    console.log(button.id);
    button.addEventListener('click', function(event){
        console.log(event.target.id);
        body.style.backgroundColor=event.target.id ;

       
        // console.log(event);
        
        

    })
})

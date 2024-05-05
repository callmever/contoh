
// const buttons = document.querySelectorAll('.buttons')
// buttons.forEach((button) => {
//     alert("its worked")
// })

// const buttons = document.querySelectorAll('.buttons');
// const page = document.querySelectorAll('.maq');

// buttons.forEach((button) => {
//     button.addEventListener('click', ()=> {
//         button.remove
//     })
// })

// let page = $('.maq');

// const page = document.querySelector('.active-maq');

// const buttons = document.querySelectorAll('.buttons');
// buttons.forEach((button) => {
//     button.addEventListener('click', ()=>{
//         $('.maq').removeClass('active-maq');
//     })
// })

let page = $('.maq');
$('.buttons').click(function (e) { 
    $('.maq').removeClass('active-maq');

    let index = $(this).index();
    page.eq(index).addClass('active-maq');
    
});


// $('.buttons').click(function(){
//     $('.page').removeClass('active-maq');
// });



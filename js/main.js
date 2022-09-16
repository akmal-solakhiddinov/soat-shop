let btnB =  document.querySelector('.pop_up-btn1');
document.querySelector('#btn1').onclick = () => {
    btnB.classList.toggle('.active')
    btnA.classList.remove('.active');
    btnC.classList.remove('.active');
    // readMore.classList.remove('.active');
}

let btnC =  document.querySelector('.pop_up-btn2');
document.querySelector('#btn2').onclick = () => {
    btnC.classList.toggle('.active')
    btnA.classList.remove('.active');
    btnB.classList.remove('.active');
    // readMore.classList.remove('.active');
}



let btnA = document.querySelector('.list-global');

document.querySelector('#menu-btn').onclick = () => {
    btnA.classList.toggle('.active');
    btnB.classList.remove('.active');
    btnC.classList.remove('.active');
    // readMore.classList.remove('.active');

}

// let readMore = document.querySelector('.tooltip-content');

// document.querySelector('#tooltip').onclick = () => {
//     readMore.classList.toggle('active');
//     btnA.classList.remove('.active');
//     btnB.classList.remove('.active');
//     btnC.classList.remove('.active');

// }

window.onscroll = () => {
    btnA.classList.remove('.active');
    btnB.classList.remove('.active');
    btnC.classList.remove('.active');
    // readMore.classList.remove('.active');
}
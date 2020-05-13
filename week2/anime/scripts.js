
var animate1 = anime({
    targets: '.square',
    backgroundColor: '#f96',
    borderRadius: '50%',
    scale: 0.8,
    delay: (elm, index, t) => index * 200,
    autoplay: false
})



document.querySelector('.btnanimate').onclick = animate1.restart;

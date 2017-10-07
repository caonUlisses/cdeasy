function mostrar() {
    var menu   = document.getElementById('menu');
    var status = menu.style.display;
    
    if(status === 'none') {
        document.getElementById('menu').style.display = block;
        console.log(status);
    } else {
        status = 'none';
        console.log(status);
    }
}
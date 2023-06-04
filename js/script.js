
document.getElementById('calculate').addEventListener('click', function(){
    let value = document.getElementById('value').value;
    let fee = (document.getElementById('fee').value) / 100;
    let time = document.getElementById('time').value;

    let total = value * (1 + fee)** time// formula do juros composto//
    document.getElementById('total').innerHTML = ("R$" + total.toFixed(2).replace('.', ',')); 

    // repace faz a troca , nesse casso do ponto por virgula.
    // tofixed eu seleciono o numero de digitos dpos do ponto decimal.
});
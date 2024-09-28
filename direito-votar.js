
function clicar() {
    var idade = document.getElementById('idadebtn')
    var idade1 = Number.parseInt(idade.value) 
    var res = document.getElementById('resultado')

    
    if(idade1 < 16 ){  res.innerHTML = `Sua idade é ${idade1} anos.<br>Você não pode votar!`
    
    } else if (idade1 < 18 || idade1 > 69) {
        
        res.innerHTML = `Sua idade é ${idade1} anos.<br>Você tem direito a voto opcional!`
    } else  {
        res.innerHTML = `Sua idade é ${idade1} anos.<br>Você pode votar!`
    }
   
}
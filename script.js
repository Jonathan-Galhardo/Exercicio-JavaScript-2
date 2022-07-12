function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   

   if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('Se liga! O ano digitado não existe!')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    //res.innerHTML = 'Idade calculada é: ' + idade   
    // até aqui está beleza 
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
 
    if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'ocrianca.jpg')
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemo.jpg')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'acrianca.jpg')
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'senhora.jpg')
            }
        }
    res.innerHTML = 'Idade calculada é: ' + genero + idade 
    res.appendChild(img)
   } 
}

    
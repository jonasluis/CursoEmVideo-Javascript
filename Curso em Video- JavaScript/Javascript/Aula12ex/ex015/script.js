function verificar(){
let data = new Date()
let ano = data.getFullYear()
let fano = window.document.getElementById('txtano')
let res = window.document.querySelector('div#res')
if(fano.value.length == 0 || fano.value > ano){
window.alert('[ERRO] Verifique os dados e tente novamente!')
} else{
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
  let genero = ''
  let img = document.createElement('img')
img.setAttribute('id', 'foto')
  if(fsex[0].checked){
    genero = 'Homem'
    if(idade >= 0 && idade < 5 ){
        //bebe
        img.setAttribute('src', 'bebehomem.png')
    }else if (idade < 12){
//crianca
img.setAttribute('src', 'criancahomem.png')
    }else if(idade < 16){
        //adolecente
        img.setAttribute('src', 'adolescentehomem.png')
    }
    else if(idade < 25){
        img.setAttribute('src', 'jovemhomem.png')
        //jovem
    } else if(idade < 60){
        //adulto
        img.setAttribute('src', 'homem.png')
    } else{
        img.setAttribute('src', 'idoso.png')
 }
}
  
  else if (fsex[1].checked){
    genero = ' Mulher'
    if(idade >= 0 && idade < 5 ){
        //bebe
        img.setAttribute('src', 'bebemulher.png')
    }else if (idade < 12){
//crianca
img.setAttribute('src', 'criancamulher.png')
    }else if(idade < 16){
        //adolecente
        img.setAttribute('src', 'adolescentemulher.png')
    }
    else if(idade < 25){
        img.setAttribute('src', 'jovemmulher.png')
        //jovem
    } else if(idade < 60){
        //adulto
        img.setAttribute('src', 'mulher.png')
    } else{
        img.setAttribute('src', 'idosa.png')
 }
   
  }
  res.style.textAlign = 'center'
  res.innerHTML = ` Detectamos ${genero} com ${idade} anos.`
res.appendChild(img)





}
    



}
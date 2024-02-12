
function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
   
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >=0 && hora < 12){
        //bom dia!
          img.src = 'fotomanha.png'
          document.body.style.background ='#E0D8C8'
          
    } else if (hora >= 12 && hora < 18){
//boa tarde
        img.src = 'fototarde.png'
        document.body.style.background ='#EE7812'
    } else {
// boa noite
       img.src = 'fotonoite.png'
       document.body.style.background = '#1C161A'
    }
    
} 
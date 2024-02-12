//deentro do switch tem o case e dentro do cas e obriagdorio ter um break 
/*
Domingo = 0
Segunda = 1
terca = 2
Quarta = 3
Quinta = 4
Sexta = 5
Sabado = 6
*/
let agora = new Date()
let diaSemana = agora.getDay()
//console.log(diaSemana)
switch(diaSemana){
    case 0:
        console.log('Domingo')
        break
        case 1:
            console.log('Segunda')
            break
            case 2:
                console.log('Terca')
                break
                case 3:
                    console.log('Quarta')
                    break
                    case 4:
                        console.log("Quinta")
                        break
                        case 5:
                            console.log('Sexta')
                            break
                            case 6:
                                console.log('Sabado')
                                break
                                default:
                                    console.log('[ERRO] DIa invalido!')
}

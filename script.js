function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
      }  else{
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex [0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src','https://www.bwimg.com.br/castelodacrianca/produtos/camiseta-bebe-masculina-1648213145.1037.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src','https://images.tcdn.com.br/img/img_prod/736739/000_f_pijama_juvenil_masculino_familia_xadrez_2407_1_a2cf2d4213f7b555a27c5c5f6ba625dc.png') 
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','https://thumbs.dreamstime.com/b/adulto-masculino-europeu-bonito-com-barba-e-bigode-que-sorriem-amplamente-sobre-o-fundo-cinzento-suporte-do-noivo-atr%C3%A1s-109587809.jpg') 
            }else{
                //idoso
                img.setAttribute('src','https://thumbs.dreamstime.com/b/homem-idoso-idoso-24922472.jpg') 
            }
         } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src','https://i.pinimg.com/236x/cc/3a/b8/cc3ab848a733887958905e2e804e26db.jpg') 
            }else if (idade < 21){
                // jovem
                img.setAttribute('src','https://i.pinimg.com/236x/5f/95/69/5f95695f20e25caf0cfaeb509e80f5f8--kids-hair-styles-kids-modeling.jpg') 
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','https://images.freeimages.com/images/premium/previews/2592/25929716-adult-woman.jpg')  
            }else{
                //idoso
                img.setAttribute('src','https://viisolutions.com.br/wp-content/uploads/2018/08/PersonaIdosa-700x441.jpg') 
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
         res.appendChild(img)
        }
    }

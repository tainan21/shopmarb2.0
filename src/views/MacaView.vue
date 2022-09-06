<template>
    <div>
        <div class="onepage">
            <div class="img1">
                <div class="">
                <img src="@/assets/garantia-maca.png" class="" alt="Responsive image">
                </div>
            </div>
            <div class="img2">
                <div class="ban-img">
                <img src="@/assets/taisebn1.png" class="img-fluid taiseimage" alt="Responsive image">
                </div>
            </div>
        </div>
        <div class="onepagebottom">
            <div class="texto">Clique em Continuar Para Acessar o Site Oficial</div>
            <div class="subtitle">MACA PERUANA NEGRA COM BORO ® Acesse o Site Oficial com Frete Grátis e até 45% de Desconto!</div>
            <a href="" class="botao">Continuar</a>
        </div>
    </div>
</template>
    
<style lang="scss" scoped>
    .onepage{
      width: 100vw;
      height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      
    }
    .onepagebottom{
        width: 100vw;
        height: 14vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    
    }
    .img1{
      width: 30vw;
      height: 80vh;
    }
    .img2{
      width: 30vw;
      height: 80vh;
    }
    @media (max-width: 599px){
        .img2{
            display: none;
        }
        .img1{
            width: 90vw;
            height: 100% !important;
        }
        .onepage{height: 70vh !important; }
        .onepagebottom{padding: 10%; height: 1vh !important;}
        .texto{font-size: 1em;}
        .subtitle{font-size: 1em; line-height: 1rem;}

    }

    .texto{
        font-family: 'Oswald', sans-serif;
        color: #1EA566;
        font-weight: 700;
        font-size: 2em;
    }
    .subtitle{
        font-family: 'Poppins', sans-serif;
        color: #1EA566;
        font-weight: 500;
        font-size: 1em;
    }
    .botao{
        font-family: 'Oswald', sans-serif!important;
        color: #FFFFFF!important;
        background-color: #323332!important;
        border-color: #323332!important;
        font-weight: 600!important;
        font-size: 1.5em!important;
        display: flex;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        padding: 0.375rem 0.75rem;
        line-height: 1.5;
        border-radius: 0.25rem;
        text-decoration: none !important;
        width: 90vw;
        align-items: center;
        justify-content: center;
    }
</style>  
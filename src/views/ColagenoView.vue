<template>
 <div>
 <section class="banner bannerfundao" style="position: relative;">
        <div class="container-fluid">
            <div class="row align-items-center">
            <div class="col-md-6 order-1 order-md-0">
                <div class="banner-content">
                <p class="titleDream">Dream</p><span class="titleColageno">Colágeno</span>
                <p class="legendcolageno">Poderosa e jovem novamente</p>
                <span class="subcolageno">Melhora as rugas, pele ressecada, perda de sustentação, bigode chinês, olheiras e linhas de expressão além de melhorar o aspecto cansado e envelhecido da pele, <b>SEM USO DE AGULHAS ou PROCEDIMENTOS INVASIVOS</b></span>
                </div>
            </div>
            <div class="col-md-6  order-0 order-md-1">
                <div class="ban-img">
                <img src="@/assets/dream_colageno_header.png" class="img-fluid taiseimage" alt="Responsive image" style="width: 60%;">
                </div>
            </div>
            </div>        
        </div>
        <div class="onepagebottomlipo" style="margin-bottom: 10px;">
            <div class="subcolageno">Clique em Continuar Para Acessar o Site Oficial</div>
            <div class="subcolageno">Dream Colágeno ® Acesse o Site Oficial com Frete Grátis e até 45% de Desconto!</div>
            <a href="http://mon.net.br/22a03s" class="botao">Continuar</a>
        </div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
    .bannerfundao{
        background-color: #5f0850;
        //background-image: url('@/assets/banner1.png');
    }
    .titleDream{
        color: #fff;
        font-family: Montserrat,Sans-serif;
        font-size: 40px;
        font-weight: 600;
        -webkit-text-stroke-color: #000;
        stroke: #000;
    }
    .titleColageno{
        color: #f0b200;
        font-family: playball,Sans-serif;
        font-size: 70px;
        font-weight: 600;
    }
    .legendcolageno{
        color: #f75ba7;
        font-family: lobster,Sans-serif;
        font-size: 30px;
        font-weight: 300;
        line-height: 1.3em;
    }
    .subcolageno{
        color: #fff;
        font-family: Montserrat,Sans-serif;
        font-size: 17px;
        font-weight: 300;
        line-height: 1.3em;
    }
    .onepage{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      
    }
    .list-itens{
        display: flex;
        flex-direction: column;
    }
    .sublipo{        
        color: #383737;
        font-family: "Roboto", Sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5em;
    }
    .titlelipo{
        margin-bottom: 2px;
        color: #217D19;
        font-family: "Exo", Sans-serif;
        font-size: 17px;
        font-weight: 800;
    }
    .titlepagelipo{
        color: #373837;
        font-family: "Raleway", Sans-serif;
        font-size: 45px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -2.1px;
    }
    .onepagebottomlipo{
        width: 100%;
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
        margin: 5px;
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
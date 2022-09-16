<template>
    <div  style="background-color: #ededed;">
        <div class="onepage container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="list-itens">
                    <h1 class="titlepagelipo">FÓRMULA <b style="color: #069337">100% CONCENTRADA</b></h1>
                    <div class="sublipo">Ingredientes naturais, selecionados minuciosamente</div>
                    <h2 class="titlelipo">COlÁGENO</h2>
                    <div class="sublipo">Proteína responsável por garantir firmeza e elasticidade à pele, que é produzida naturalmente pelo corpo</div>
                    <div class="titlelipo">Biominerals 5</div>
                    <div class="sublipo">Seu principal benefício é clarear a derme e absorver a oleosidade sem desidratar ou comprometer o tecido cutâneo. Com ação suavizante e cicatrizante.</div>
                    <div class="titlelipo">FIBER DTOX</div>
                    <div class="sublipo">FIBER DTOX é ativo projetado para remover toxinas adsorvidas na pele. FIBER DTOX combina moléculas naturais obtidas de quatro plantas diferentes</div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="imglipo">
                        <div class="">
                        <img src="@/assets/img_formula.png" class="" alt="Responsive image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="onepagebottomlipo" style="margin-bottom: 10px;">
            <div class="texto">Clique em Continuar Para Acessar o Site Oficial</div>
            <div class="subtitle">MACA PERUANA NEGRA COM BORO ® Acesse o Site Oficial com Frete Grátis e até 45% de Desconto!</div>
            <a href="http://mon.net.br/22e7b4" class="botao">Continuar</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
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
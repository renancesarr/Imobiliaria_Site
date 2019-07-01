function createImovel(preco, patchImage, rua, numeroCasa, bairro, banheiros, quartos, area, garagem){
    var divPrincipal = document.getElementById("itens-content");
    var html = 
            '<a href="assets/pages/items/1_e.html">'+
                '<div class="inner">'+
                    '<div class="image">'+
                        '<div class="price average-color"><span>$'+preco+'</span></div>'+
                        '<img src="'+patchImage+'" alt="">'+
                    '</div>'+
                    '<div class="item-content">'+
                        '<header>'+
                            '<h2>'+rua+', '+numeroCasa+'</h2>'+
                            '<h3>'+bairro+'</h3>'+
                        '</header>'+
                        '<footer>'+
                            '<dl>'+
                                '<dt>Banheiros</dt>'+
                                '<dd>'+banheiros+'</dd>'+
                                '<dt>Quartos</dt>'+
                                '<dd>'+quartos+'</dd>'+
                                '<dt>Area</dt>'+
                                '<dd>'+area+'m<sup>2</sup></dd>'+
                                '<dt>Garagens</dt>'+
                                '<dd>'+garagem+'</dd>'
                            '</dl>'+
                        '</footer>'+
                    '</div>'+
                '</div>'+
            '</a>'+
        '</div>';
    var divItem = document.createElement('div');
    divItem.classList.add("item");
    divItem.classList.add("col-sm-12");
    divItem.classList.add("col-md-3");
    divItem.innerHTML = html;
    divPrincipal.appendChild(divItem);
    //divPrincipal.insertBefore(divItem, divPrincipal.childNodes[0]);
}

function transar(){
    $.ajax({
        method: "GET",
        url: "https://firestore.googleapis.com/v1beta1/projects/imoveis-a66a3/databases/(default)/documents/imovel/",
        cache: false,
        dataType: "json",
        success: function(retorno) {
            for(var i=0;i<retorno.documents.length;i++){
                createImovel(retorno.documents[i].fields.valor.integerValue,"assets/img/casa1.jpg",retorno.documents[i].fields.logradouro.stringValue,"342",retorno.documents[i].fields.bairro.stringValue,retorno.documents[i].fields.banheiros.integerValue,retorno.documents[i].fields.quartos.integerValue,retorno.documents[i].fields.area.integerValue,retorno.documents[i].fields.garagem.integerValue)
            } 
        }
    });
    return true;
}

function exterminio(){
    var pai = document.getElementById("itens-content");
    pai.parentNode.removeChild(pai);
}

function pesquisa(){
    
}

function teste(){
    var a = transar();
    console.log(a);
    if(a == false){
        exterminio();
    }
    //exterminio();
}
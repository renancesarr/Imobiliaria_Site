var firebaseConfig = {
    apiKey: "AIzaSyA9etshpb92of2cS3rcvsEiaZHMxyLiDJM",
    authDomain: "xablau-84077.firebaseapp.com",
    databaseURL: "https://xablau-84077.firebaseio.com",
    projectId: "xablau-84077",
    storageBucket: "xablau-84077.appspot.com",
    messagingSenderId: "810824469369",
    appId: "1:810824469369:web:50b412cb0980ea63"
};
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function createImovel(preco, patchImage, rua, numeroCasa, bairro, banheiros, quartos, area, garagem){
    var divPrincipal = document.getElementById("itens-content");
    var html = 
            '<a href="assets/pages/items/1_e.html">'+
                '<div class="inner">'+
                    '<div class="image">'+
                        '<div class="tipo average-color"><span>ALUGA-SE</span></div>'+
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
}

function createBar(categorias){
    var divPrincipal = document.getElementById("header");
    var divSearch = document.createElement('div');
    divSearch.id = 'search-collapse';
    divSearch.classList.add('search');
    divSearch.classList.add('collapse');
    divSearch.classList.add('in');

    var htmlCategorias = '<option value="0">Sem Categorias</option>';
    if(categorias.length > 0){
        htmlCategorias = '';
        var i = 0;
        categorias.forEach((oneCategoria) => {
            htmlCategorias = htmlCategorias + '<option value="'+i+'">'+oneCategoria.nome+'</option>';
            i++
        });
    }
    var html = 
        '<div class="container">'+//div container
            '<form class="main-search" role="form" method="post" action="#">'+//form
                '<div class="row">'+//div row1
                    /* '<div class="col-md-2 col-sm-2">'+//div collum
                        '<div class="form-group">'+//div form group
                            '<label for="type">O que você precisa?</label>'+
                            '<select name="type" multiple title="Escolha uma opção" id="type" class="animate" data-transition-parent=".dropdown-menu">'+
                                '<option value="1">Alugar</option>'+
                                '<option value="2">Comprar</option>'+
                            '</select>'+
                        '</div>'+//fecha div form group
                    '</div>'+//fecha div collum
                    '<div class="col-md-2 col-sm-2">'+//div collum
                        '<div class="form-group">'+//div form grup
                            '<label for="type">Qual tipo?</label>'+
                            '<select name="type" id="type" class="animate" multiple>'+
                                '<option value="1">Casa</option>'+
                                '<option value="2">Fazenda</option>'+
                            '</select>'+
                        '</div>'+//fim div form grup
                    '</div>'+ *///fim div collum
                    '<div class="col-md-4 col-sm-4">'+// div collum
                        '<div class="row">'+//div row
                            '<div class="col-md-6 col-sm-6">'+//div collum
                                '<div class="form-group">'+//div form group
                                    '<label for="bedrooms">Banheiros</label>'+
                                    '<div class="input-group counter">'+//div input group
                                        '<input type="text" class="form-control" id="bedrooms" name="bedrooms" placeholder="Indiferente">'+
                                        '<span class="input-group-btn">'+
                                            '<button class="btn btn-default minus" type="button"><i class="fa fa-minus"></i></button>'+
                                        '</span>'+
                                        '<span class="input-group-btn">'+
                                            '<button class="btn btn-default plus" type="button"><i class="fa fa-plus"></i></button>'+
                                        '</span>'+
                                    '</div>'+//fim input group
                                '</div>'+//fim form group
                            '</div>'+//fim collum
                            '<div class="col-md-6 col-sm-6">'+//div collun
                                '<div class="form-group">'+//div formgroup
                                    '<label for="bathrooms">Quartos</label>'+
                                    '<div class="input-group counter">'+//div input
                                        '<input type="text" class="form-control" id="bathrooms" name="bathrooms" placeholder="Indiferente">'+
                                        '<span class="input-group-btn">'+
                                            '<button class="btn btn-default minus" type="button"><i class="fa fa-minus"></i></button>'+
                                        '</span>'+
                                        '<span class="input-group-btn">'+
                                            '<button class="btn btn-default plus" type="button"><i class="fa fa-plus"></i></button>'+
                                        '</span>'+
                                    '</div>'+//fim div input
                                '</div>'+//fim form group
                            '</div>'+//fim div collun
                        '</div>'+//fim row
                    '</div>'+//fim collun
                    /* '<div class="col-md-2 col-sm-2">'+
                        '<div class="form-group">'+
                            '<label for="location">Bairro</label>'+
                            '<select name="type" multiple title="Todos" id="location" class="animate" data-transition-parent=".dropdown-menu">'+
                                '<option value="1">Setor Aeroporto</option>'+
                                '<option value="2">Bueno</option>'+
                            '</select>'+
                        '</div>'+
                    '</div>'+ */
                    /* '<div class="col-md-2 col-sm-2">'+
                        '<div class="form-group">'+
                            '<label>Preço</label>'+
                            '<div class="ui-slider" id="price-slider" data-value-min="100" data-value-max="40000" data-value-type="price" data-currency="R$" data-currency-placement="before">'+
                                '<div class="values clearfix">'+
                                    '<input class="value-min" name="value-min[]" readonly>'+
                                    '<input class="value-max" name="value-max[]" readonly>'+
                                '</div>'+
                                '<div class="element"></div>'+
                           '</div>'+
                        '</div>'+
                    '</div>'+ */
                '</div>'+
            '</form>'+
        '</div>';
        divSearch.innerHTML = html;
        divPrincipal.appendChild(divSearch);
}

function updateCategorias(categorias){
    var select = document.getElementById('categoria');
    if(categorias.length > 0){
        var i = 0;
        categorias.forEach((oneCategoria) =>{
            var option = document.createElement('option');
            option.text = oneCategoria.nome;
            //option.text = oneCategoria.nome.charAt(0).toUpperCase() + oneCategoria.nome.slice(1);
            select.add(option,i);
            $('#categoria').selectpicker('refresh');
            i++;
        })
    }
}

function updateBairros(cidades){
    var select = document.getElementById("bairro");
    var i =0;
    if(cidades.length > 0 && cidades.length<2){
        cidades.forEach((oneCidade)=>{
            var bairros = oneCidade.bairros;
            bairros.forEach((oneBairro)=>{
                var option = document.createElement('option');
                option.text = oneBairro;
                select.add(option,i);
                $('#bairro').selectpicker('refresh');
                i++;
            });
        });

    }else if(cidades.length >0){
        cidades.forEach((oneCidade)=>{
            var bairros = oneCidade.bairros;
            bairros.forEach((oneBairro)=>{
                var option = document.createElement('option');
                option.text = oneBairro+ " : "+ oneCidade.nome;
                select.add(option,i);
                $('#bairro').selectpicker('refresh');
                i++;
            });
        });
    } 
}

function getAllConfig(){
    db.collection("config").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var dados = doc.data();
            updateCategorias(dados.categorias);
            var estado = dados.estado;
            estado.forEach((oneEstado) =>{
                updateBairros(oneEstado.cidades);
            });
            
        });
    });

}

function getAllImoveis(){
    db.collection("imoveis").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var dados = doc.data();
            if(dados.ativo == true){
                if(dados.numero == "" || dados.numero == "0" || dados.numero == null){
                    createImovel(dados.valor, "assets/img/casa1.jpg", dados.logadouro, dados.complemento, dados.bairro, dados.banheiros, dados.quartos, dados. area, dados.garagem);
                }else{
                    createImovel(dados.valor, "assets/img/casa1.jpg", dados.logadouro, dados.numero, dados.bairro, dados.banheiros, dados.quartos, dados. area, dados.garagem);
                }
            }
        });
    });
}
getAllConfig();



function exterminio(){
    var pai = document.getElementById("itens-content");
    pai.parentNode.removeChild(pai);
}







/* function transar(){
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
} */

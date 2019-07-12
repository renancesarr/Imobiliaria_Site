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
                        '<div class="price average-color"><span>R$ '+preco+'</span></div>'+
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
    getAllImoveis();

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

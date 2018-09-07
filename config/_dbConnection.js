/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
    console.log('Entrou na função de conexão.');

    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //string contendo o endereço do servidor
            27017, //porta de conexão
            {} //objeto contendo opções de configuração do servidor - neste caso, vazio
        ),
        {} //objeto contendo opções de configuração da conexão - neste caso, vazio 
    );

    return db;
}

module.exports = function(){
    return connMongoDB;
}
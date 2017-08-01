
/*  NÃO ESTÁ SENDO UTILIZADA NO PROJETO -
SERVE SOMENTE PARA ESTUDO DE COMO ACESSAR
OS CAMPOS E REALIZAR OPERAÇÕES */



//pega todos os ID do index e atribui a variavel campos
var campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];


console.log(campos); //imprime no console o array


var tbody = document.querySelector('table tbody'); //seleciona o tbody da tabela


document.querySelector('.form').addEventListener('submit', function(event){
  event.preventDefault();

  var tr = document.createElement('tr');

  campos.forEach(function(campo){
    var td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td); //A função appendChild() insere um elemento filho ao elemento pai, na última posição
  });

  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  //limpando os campos do formulario
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;

  //colocando foco no campo data
  campos[0].focus();

  //#######################################################################


  /*com o let no lugar do var só é possivel acessa
  as variáveis dentro do bloco */

//#######################################################################


//quando se cria uma funcao dentro de 1 classe se chama metodo
//METODOS ACESSADORES
getVolume(){
   return this._quantidade * this._valor;
}

getData(){
  return this._data;
}

getQuantidade(){
  return this._quantidade;
}

getValor(){
  return this._valor;
}

});

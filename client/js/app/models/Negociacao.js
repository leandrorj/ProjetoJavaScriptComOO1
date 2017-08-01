// o nome do arquivo fica em Maiusculo porque é uma classe
class Negociacao{

  //os propriedades(atributos) são definidos numa function constructor
  constructor(data, quantidade, valor){
    //criando os atributos com valor padrão
    /*utiliza o ' _ ' para que os atributos só sejam
    modificados/acessados pela propria classe */
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    //deixa os atributos inacessiveis por outras classes. Mesmo utilizando o ' _ '
    Object.freeze(this);
  }

  //quando se cria uma funcao dentro de 1 classe se chama metodo
  //METODOS ACESSADORES GET - somente leitura
  //criase novos objetos dentro dos get para q os atributos fiquem inacessiveis por outras classes
  get volume(){
     return this._quantidade * this._valor;
  }

  get data(){
    return new Date(this._data.getTime());
  }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }

}

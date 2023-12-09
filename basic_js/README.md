# Basic JS

## 🔢 Declaração de Variáveis

No JavaScript, existem três formas de declarar uma variável:

- `var`: Declara uma variável, opcionalmente, inicializando-a com um valor.
  - Escopo global: A variável é visível em todo o escopo do programa.
  - Não é muito recomendado o uso hoje em dia. Por ser de escopo global, ou seja, pode ser acessada de qualquer lugar do código, pode causar problemas devido a sobrescrita de valores.
- `const`: Declara uma constante de escopo de bloco, apenas de leitura.
  - Escopo de bloco: A variável é visível apenas dentro do bloco onde foi declarada.
  - Não pode ser redeclarada ou reatribuída.
  - Deve ser inicializada com um valor.
  - Não é mutável.
  - Como o nome já diz, é uma **constante**.
- `let`: Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
  - Escopo de bloco: A variável é visível apenas dentro do bloco onde foi declarada.
  - Não pode ser redeclarada, mas pode ser reatribuída.
  - Deve ser inicializada com um valor.
  - É mutável.

## 📚 Tipos de Dados

### Strings

Para declarar uma string, você pode usar aspas simples ou duplas, desde que sejam iguais no início e no final da string.

```js
let primeiroNome = "Lucas";
let segundoNome = 'Gabriel';
```

Para printar uma string no console, você pode usar o `console.log()`.

```js
console.log(string1);
console.log(`Meu primeiro nome é: ${primeiroNome}`);
console.log(`Meno nome é ${primeiroNome} ${segundoNome}`);
```

#### Métodos de string

- `toUpperCase()`: Converte uma string em letras maiúsculas.
- `toLowerCase()`: Converte uma string em letras minúsculas.
- `split()`: Divide uma string em um array de substrings. O separador pode ser um caractere especificado
- `length`: Retorna o tamanho da string.
- `indexOf()`: Retorna o índice da primeira ocorrência do valor especificado.
- `lastIndexOf()`: Retorna o índice da última ocorrência do valor especificado.
- `search()`: Retorna o índice da primeira ocorrência do valor especificado. Pode receber uma expressão regular.
- `slice()`: Extrai uma parte de uma string e retorna uma nova string.
- `substring()`: Extrai os caracteres de uma string, entre dois índices especificados, e retorna a nova sub-string.
- `substr()`: Extrai os caracteres de uma string, começando em uma posição especificada e retornando o número especificado de caracteres.
- `replace()`: Substitui o texto em uma string, usando uma expressão regular ou pesquisa de string.
- `concat()`: Concatena duas ou mais strings.
- `trim()`: Remove os espaços em branco do início e/ou fim de um texto.

### Numbers

> Em JavaScript, números podem ser escritos com ou sem decimais. Sem muito segredo.

```js
let numero1 = 10;
let numero2 = 20;
```

#### Métodos de number

- `toString()`: Converte um número em uma string.
- `toFixed()`: Formata um número usando notação de ponto fixo.
- `toPrecision()`: Formata um número para um comprimento de dígitos especificado.
- `toExponential()`: Retorna uma string que representa um número em notação exponencial.
- `parseInt()`: Converte uma string em um inteiro.
- `parseFloat()`: Converte uma string em um número de ponto flutuante.

### Boolean

> São booleans, não tem muito o que falar.

São valores que podem ser `true` ou `false`.

### Null e Undefined

`null` é um valor especial que significa "nada". `undefined` é um valor especial que significa "não atribuído".

```js
const x = null;
const y = undefined;
```

> Quando você declara uma variável e não a inicializa, ela automaticamente recebe o valor `undefined`.

### Arrays (Listas)

```js
const nomes = ['Felipe', 'João', 'Julia', 10, true];
```

> Lembrando que com arrays, você pode ter vários tipos de dados dentro de um mesmo array

Para acessar um elemento do array, você pode usar o índice dele. Lembrando que o primeiro índice é em 0.

```js
console.log(nomes[0]); // Felipe
console.log(nomes[1]); // João
```

#### Métodos de array

- `length`: Retorna o tamanho do array.
- `push()`: Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
- `unshift()`: Adiciona um ou mais elementos no início de um array e retorna o novo comprimento desse array.
- `pop()`: Remove o último elemento de um array e retorna o elemento removido.
- `shift()`: Remove o primeiro elemento de um array e retorna o elemento removido.
- `indexOf()`: Retorna o primeiro índice em que um elemento pode ser encontrado no array.
- `lastIndexOf()`: Retorna o último índice em que um elemento pode ser encontrado no array.
- `includes()`: Determina se um array contém um determinado elemento, retornando true ou false.
- `slice()`: Retorna uma cópia de parte de um array a partir de um sub-array criado entre as posições início e fim (fim não é necessário) de um array original.
- `Array.isArray()`: Retorna true se o parâmetro passado é um array, se não false.

#### Map, Filter e Reduce

O map, Filter e Reduce são métodos de array que são muito utilizados no dia a dia de um desenvolvedor.

##### Map

O método `map()` invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

```js
const numbers = [1, 2, 3, 4, 5];
const dobro = numbers.map((numero) => numero * 2);
```

##### Filter

O método `filter()` cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

```js
const numbers = [1, 2, 3, 4, 5];
const pares = numbers.filter((numero) => numero % 2 === 0);
```

##### Reduce

O método `reduce()` executa uma função para cada elemento retornando um único valor de retorno.

```js
const numbers = [1, 2, 3, 4, 5];
const soma = numbers.reduce((numero, acumulador) => total + numero, 0);
```

### Objects

> São muito parecidos com dicionários em Python

Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade também pode ser uma função, que é então considerada um método do objeto.

Criação de um objeto pessoa:

```js
const pessoa = {
  nome: 'Lucas',
  idade: 21,
  cidade: 'Recife',
  dog: {
    nome: 'Poppy',
    idade: 6,
  }
};
```

Também é possível adicionar propriedades ao objeto depois de criá-lo.

```js
pessoa.sexo = 'Masculino';
```

Para acessar uma propriedade do objeto, você pode usar a notação de ponto ou colchetes.

```js
console.log(pessoa.nome); // Lucas
console.log(pessoa['idade']); // 21
```

Existe também o destructuring (ou desempacotar), que é uma forma de desestruturar um objeto.

```js
const { nome, idade } = pessoa;
console.log(nome); // Lucas
console.log(idade); // 21
```

## 📄 Json

JSON significa JavaScript Object Notation. É um formato de troca de dados entre sistemas e programas muito leve e de fácil utilização.

Normalmente é utilizado para troca de dados entre o front-end e o back-end.

Vamos considerar o objeto pessoa que criamos anteriormente.

Para transformar esse objeto em um JSON, podemos usar o método `JSON.stringify()`. Esse método recebe um objeto e retorna uma string JSON.

```js
const JsonPessoa = JSON.stringify(pessoa);
```

Para transformar um JSON em um objeto, podemos usar o método `JSON.parse()`. Esse método recebe uma string JSON e retorna um objeto.

```js
const objetoPessoa = JSON.parse(JsonPessoa);
```

## Loops

### For

O loop `for` é o mais comum de todos. Ele executa um bloco de código um número específico de vezes.

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### While

O loop `while` executa um bloco de código enquanto uma condição especificada for verdadeira.

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

### Do While

O loop `do while` executa um bloco de código uma vez e depois verifica se a condição é verdadeira, então repete o loop enquanto a condição for verdadeira.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

### For of

> Usado para qualquer estrutura iterável

O loop `for of` percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

```js
const nomes = ['Felipe', 'João', 'Julia', 10, true];
for (let nome of nomes) {
  console.log(nome);
}
// Felipe João Julia 10 true
```

### For in

> Usado para objetos. Contudo, o For In não é muito performático. Ou seja, ele é mais lento que as outras formas de loop.

O loop `for in` percorre as propriedades de um objeto, na ordem original de inserção. Para cada propriedade distinta, o JavaScript executa as instruções especificadas em uma função personalizada.

```js
const pessoa = {
  nome: 'Lucas',
  idade: 21,
  cidade: 'Recife',
  dog: {
    nome: 'Poppy',
    idade: 6,
  }
};
for (let propriedade in pessoa) {
  console.log(propriedade);
}
// nome idade cidade dog
```

### For each

> Usado para arrays

O loop `for each` percorre os elementos de um array, na ordem original de inserção. Para cada elemento distinto, o JavaScript executa as instruções especificadas em uma função personalizada.

```js
const nomes = ['Felipe', 'João', 'Julia', 10, true];
nomes.forEach((nome) => {
  console.log(nome);
}); // Felipe João Julia 10 true
```

No entanto, o `forEach` não pode ser interrompido usando o `break` ou `return`.

Além disso, o `forEach` tem a vantagem de poder pegar o índice do elemento.

```js
const nomes = ['Felipe', 'João', 'Julia', 10, true];
nomes.forEach((nome, index) => {
  console.log(`${index}: ${nome}`);
}); // 0: Felipe 1: João 2: Julia 3: 10 4: true
```

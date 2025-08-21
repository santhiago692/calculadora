#  Projeto: Calculadora Web

##  Introdução

Este é um projeto simples de uma calculadora web que desenvolvi utilizando **HTML**, **CSS** e **JavaScript**. A ideia foi criar uma interface funcional e responsiva que permitisse realizar operações matemáticas básicas, como soma, subtração, multiplicação e divisão. Além disso, implementei um botão de energia (ON/OFF) para simular o funcionamento de uma calculadora física.

---

##  Tecnologias Utilizadas

- **HTML5**: Estrutura da página e dos elementos da calculadora.
- **CSS3**: Estilização da interface, incluindo responsividade para dispositivos móveis.
- **JavaScript (ES6)**: Lógica de funcionamento da calculadora e controle de interatividade.

---

##  Estrutura do Projeto

- `index.html`: Contém a estrutura principal da calculadora.
- `style.css`: Responsável pela aparência visual e adaptação da interface.
- `script.js`: Implementa toda a lógica de inserção de números, operações, cálculo e controle de energia.

---

##  Funcionalidades

### 1. Inserção de Números e Operadores
Os botões numéricos e de operação adicionam os respectivos valores ao display da calculadora.

### 2. Botão "C" (Clear)
Limpa completamente o conteúdo do display.

### 3. Botão "←" (Backspace)
Remove o último caractere digitado.

### 4. Botão "=" (Calcular)
Utiliza `eval()` para avaliar a expressão matemática digitada. Em caso de erro, exibe "Erro" ou "Nada..." se o campo estiver vazio.

### 5. Botão "ON/OFF"
Liga ou desliga a calculadora. Quando desligada, todos os botões (exceto o de energia) são desativados e o display é limpo.

---

##  Estilo e Layout

- Interface centralizada com fundo em gradiente (preto e azul).
- Botões escuros com efeito hover e clique em vermelho.
- Display com alinhamento à direita e cor contrastante.
- Responsividade garantida com media queries para telas menores que 400px.

---

##  Responsividade

A calculadora se adapta bem a dispositivos móveis:
- Botões redimensionados proporcionalmente.
- Fontes ajustadas para melhor leitura.
- Layout flexível para diferentes tamanhos de tela.

---

##  Considerações Técnicas

- O uso de `eval()` foi feito por simplicidade, mas reconheço que não é a abordagem mais segura. Em projetos maiores, recomendaria o uso de bibliotecas como [math.js](https://mathjs.org).
- A lógica de controle de energia foi implementada para simular o comportamento de uma calculadora física, adicionando um toque extra de realismo.

---

##  Possíveis Melhorias Futuras

- Implementar suporte ao teclado físico (eventos de `keydown`).
- Adicionar histórico de cálculos.
- Suporte a parênteses e funções matemáticas avançadas.
- Substituir `eval()` por uma função de parsing segura.

---

##  Conclusão

Esse projeto foi uma ótima oportunidade para praticar manipulação de DOM, lógica condicional e responsividade. A calculadora funciona bem em diferentes dispositivos e tem uma interface intuitiva. Fico aberto a sugestões e melhorias!

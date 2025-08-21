#  Documentação do Projeto: Calculadora Web

##  Visão Geral
Este projeto é uma calculadora interativa desenvolvida para navegadores, permitindo operações matemáticas básicas com uma interface responsiva e um botão de energia para controle de funcionamento.

---

##  Tecnologias Utilizadas

| Linguagem/Tecnologia | Finalidade |
|----------------------|------------|
| **HTML5**            | Estrutura da interface da calculadora |
| **CSS3**             | Estilização visual e responsividade |
| **JavaScript (ES6)** | Lógica funcional e interatividade |

---

##  Estrutura de Arquivos

- `index.html` → Estrutura da interface
- `style.css` → Estilos visuais e responsividade
- `script.js` → Lógica de funcionamento da calculadora

---

##  Componentes da Interface

- **Display (`#resultado`)**: Mostra os números e resultados
- **Botões Numéricos (0–9)**: Inserem dígitos
- **Botões de Operações (`+`, `-`, `*`, `/`)**: Inserem operadores
- **Botão `C`**: Limpa o display
- **Botão `←`**: Apaga o último caractere
- **Botão `=`**: Executa o cálculo
- **Botão `ON/OFF`**: Liga/desliga a calculadora

---

##  Funcionalidades JavaScript

### `insert(num)`
Adiciona número ou operador ao display, se a calculadora estiver ligada.

### `clean()`
Limpa completamente o conteúdo do display.

### `back()`
Remove o último caractere digitado.

### `calcular()`
Avalia a expressão matemática com `eval()`, tratando erros com `try/catch`.

### `powerToggle()`
Alterna o estado da calculadora entre ligada e desligada, habilitando ou desabilitando os botões.

---

##  Estilização CSS

- Layout centralizado com `transform: translate(-50%, -30%)`
- Botões estilizados com efeitos de hover e clique
- Responsividade com media queries para telas menores
- Cores temáticas: fundo gradiente, botões escuros, destaque em vermelho no clique

---

##  Responsividade

- Uso de unidades relativas (`vw`, `vh`) para adaptação
- Fontes e botões redimensionados proporcionalmente
- Interface otimizada para dispositivos móveis

---

##  Observações Técnicas

- O uso de `eval()` pode representar riscos de segurança. Para projetos mais robustos, recomenda-se bibliotecas como [math.js](https://mathjs.org).
- O botão ON/OFF simula o funcionamento de uma calculadora física, oferecendo controle de estado.

---

##  Sugestões de Melhoria

- Suporte a teclado físico (`keydown`)
- Histórico de cálculos
- Suporte a parênteses e funções matemáticas avançadas
- Substituição de `eval()` por uma função segura

---

##  Licença

Este projeto é de uso livre para fins educacionais e pessoais. Para uso comercial, recomenda-se revisar as práticas de segurança e otimização.

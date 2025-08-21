let isOn = true;

        function insert(num) {
            if (!isOn) return;
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }

        function clean() {
            if (!isOn) return;
            document.getElementById('resultado').innerHTML = "";
        }

        function back() {
            if (!isOn) return;
            var resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
        }

        function calcular() {
           if (!isOn) return;
           var resultado = document.getElementById('resultado').innerHTML;
           console.log("Expressão para calcular:", resultado);
           if (resultado) {
           try {
              let resposta = eval(resultado);
              console.log("Resultado do eval:", resposta);
              document.getElementById('resultado').innerHTML = resposta;
          } catch (e) {
              console.error("Erro ao calcular:", e);
              document.getElementById('resultado').innerHTML = "Erro";
          }
          } else {
              document.getElementById('resultado').innerHTML = "Nada...";
          }
}


        function powerToggle() {
            const botoes = document.querySelectorAll(".botao");
            const resultado = document.getElementById("resultado");
            const powerBtn = document.getElementById("powerBtn");

            isOn = !isOn;

            if (!isOn) {
                resultado.innerHTML = "";
                botoes.forEach(botao => {
                    if (botao.id !== "powerBtn") {
                        botao.disabled = true;
                    }
                });
                powerBtn.innerText = "OFF";
                powerBtn.classList.add("off");
            } else {
                botoes.forEach(botao => {
                    botao.disabled = false;
                });
                powerBtn.innerText = "ON";
                powerBtn.classList.remove("off");
            }
        }
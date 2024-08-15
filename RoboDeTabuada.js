let numero = parseFloat(prompt("Digite um número"));
let multiplicacao = "";

for (let i = 1; i <= 20; i++) {
  multiplicacao += i + "*" + numero + "=" + i * numero + "\n";
}

alert("Tabuada do " + numero + "\n" + multiplicacao);

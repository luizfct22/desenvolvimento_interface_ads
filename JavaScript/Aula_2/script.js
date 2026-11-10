const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const t1 = document.getElementById("n1").value.trim();
  const t2 = document.getElementById("n2").value.trim();
  const t3 = document.getElementById("n3").value.trim();

  if (t1 === "" || t2 === "" || t3 === "") {
    saida.textContent = "Preencha as três notas.";
    return;
  }

  const nota1 = Number(t1);
  const nota2 = Number(t2);
  const nota3 = Number(t3);

  // agora cada nota é verificada separada, pra dizer qual está errada
  if (!Number.isFinite(nota1) || nota1 < 0 || nota1 > 10) {
    saida.textContent = "A Nota 1 é inválida. Use um valor de 0 a 10.";
    return;
  }
  if (!Number.isFinite(nota2) || nota2 < 0 || nota2 > 10) {
    saida.textContent = "A Nota 2 é inválida. Use um valor de 0 a 10.";
    return;
  }
  if (!Number.isFinite(nota3) || nota3 < 0 || nota3 > 10) {
    saida.textContent = "A Nota 3 é inválida. Use um valor de 0 a 10.";
    return;
  }

  const media = (nota1 + nota2 + nota3) / 3;

  let situacao;
  if (media >= 6) {
    situacao = "Aprovado";
  } else {
    situacao = "Recuperação";
  }

  saida.textContent = "Média: " + media.toFixed(2) + " - " + situacao;
});

const inputNome = document.querySelector('#nome');
const inputNota1 = document.querySelector('#nota1');
const inputNota2 = document.querySelector('#nota2');
const inputNota3 = document.querySelector('#nota3');
const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

function classificar(media) {
  if (media >= 7) {
    return 'Aprovado';
  }

  if (media >= 5) {
    return 'Recuperação';
  }

  return 'Reprovado';
}

botao.addEventListener('click', function () {
  const estudante = inputNome.value.trim();
  const camposNotas = [inputNota1, inputNota2, inputNota3];

  if (estudante === '' || camposNotas.some(campo => campo.value.trim() === '')) {
    resultado.textContent = 'Preencha todos os campos.';
    return;
  }

  const notas = camposNotas.map(campo => Number(campo.value));

  if (notas.some(nota => !Number.isFinite(nota) || nota < 0 || nota > 10)) {
    resultado.textContent = 'Use notas entre 0 e 10.';
    return;
  }

  const media = calcularMedia(...notas);
  const situacao = classificar(media);

  resultado.textContent =
    `${estudante}: média ${media.toFixed(1).replace('.', ',')}. Situação: ${situacao}.`;
});

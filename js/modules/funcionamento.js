export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  [1, 2, 3, 4,].indexOf(5);

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);


  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}










/*
const agora = new Date();
const futuro = new Date('Dec 24 2020 22:00')

console.log(agora.getMonth());
console.log(futuro);
console.log(transformarDias(agora.getTime()));

const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());


console.log(Math.floor(diasFuturo - diasAgora));

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}
*/
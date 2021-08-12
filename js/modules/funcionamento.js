export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    if(this.activeClass === undefined) this.activeClass = 'aberto';
    else this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);

    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if(this.estaAberto())
    this.funcionamento.classList.add(this.activeClass);
  }


  init() {
    if(this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }

    return this;
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
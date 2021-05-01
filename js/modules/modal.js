export default class Modal {

  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para fazer a referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }


  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // Adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal()
  }

  // Fecha o modal ao clicar fora
  cliqueForaModal(event) {
    if(event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // Adiciona os eventos aos elementos da moda;
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if(this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }

    return this;
  }

}

export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach(numero => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }


  let observer;
  /**
   * Mutation caotura quando o elemento sofre uma mudança
   *
   * @param {*} mutation Funciona com event, um array-like com as mutações que o elemento sofreu
   */
  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  observer = new MutationObserver(handleMutation)

  observer.observe(observerTarget, {attributes: true});
}

export function setup() {
    const parentContainer = document.querySelector('.main-container');
    if (parentContainer.clientWidth > parentContainer.clientHeight) {
      parentContainer.classList.add('width-greater');
    } else {
      parentContainer.classList.add('height-greater');
    }    
}
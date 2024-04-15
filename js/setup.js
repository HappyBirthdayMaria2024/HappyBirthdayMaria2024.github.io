export function setup() {
    function handler() {
        const parentContainer = document.querySelector('#main-container');
        parentContainer.classList.remove('width-greater');
        parentContainer.classList.remove('height-greater');

        if (parentContainer.clientWidth > parentContainer.clientHeight) {
        parentContainer.classList.add('width-greater');
        } else {
        parentContainer.classList.add('height-greater');
        }    
    }

    handler();
    window.addEventListener('resize', handler);
}


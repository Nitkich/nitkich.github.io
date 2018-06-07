const slider = {
    wrapper: document.querySelector('.slider'),
    buttons: document.querySelectorAll('.slider .slider__button'),
    index: 0,
    interval: 10000,
    timer: function () {
        let interval = {};

        return () => {
            clearInterval(interval);

            interval = setInterval(() => {
                this.index = this.index < this.buttons.length - 1 ? this.index + 1 : 0;
                this.buttons[this.index].click();
            }, this.interval);
        };
    }
};

const timer = slider.timer();

const init = () => {
    timer();

    for (let button of slider.buttons) {
        button.addEventListener('click', event => {
            event.preventDefault();

            for (let button of slider.buttons) button.classList.remove('slider__button_active');
            button.classList.add('slider__button_active');

            const id = button.dataset.id - 1;
            slider.wrapper.style.setProperty('--page', id);
            slider.index = id;
            timer();
        });
    }
};

window.addEventListener('load', init);
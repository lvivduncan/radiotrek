
// simple-srollbar init
SimpleScrollbar.initAll();

// media tabs
{
    const items = document.querySelectorAll('.scroll-nav a');
    const media = document.querySelector('.media');
    const span = document.querySelector('.media span');

    items.forEach(item => item.addEventListener('click', function(e) {
        e.preventDefault();
        
        media.style.backgroundImage = `url('project/${this.dataset.image}')`;
        media.href = this.href;
        span.innerText = item.title;

        items.forEach(item => item.className='');
        this.className = 'active';

    }));
}


// slider 
{
    const slider = document.querySelector('.slider ul');
    const left = document.querySelector('.slider-to-left');
    const right = document.querySelector('.slider-to-right');

    left.addEventListener('click', () => {
        const first = slider.firstElementChild;
        slider.append(first);

        slider.style.transition = 'none';
        slider.classList.add('to-left');
        setTimeout(() => {
            slider.classList.remove('to-left');
            slider.style.transition = '.5s';
        }, 50);
    });

    right.addEventListener('click', () => {
        const last = slider.lastElementChild;
        slider.prepend(last);

        slider.style.transition = 'none';
        slider.classList.add('to-right');
        setTimeout(() => {
            slider.classList.remove('to-right');
            slider.style.transition = '.5s';
        }, 50);
    });

    // автоскролл
    function autoscroll(){
        const first = slider.firstElementChild;
        slider.append(first);

        slider.style.transition = 'none';
        slider.classList.add('to-left');

        setTimeout(() => {    
            slider.classList.remove('to-left');
            slider.style.transition = '.5s';
        }, 0);
    }

    setInterval(() => {
        autoscroll();
    }, 4000);
    
}

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

    left && left.addEventListener('click', () => {
        const first = slider.firstElementChild;
        slider.append(first);

        slider.style.transition = 'none';
        slider.classList.add('to-left');
        setTimeout(() => {
            slider.classList.remove('to-left');
            slider.style.transition = '.5s';
        }, 50);
    });

    right && right.addEventListener('click', () => {
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
        if(slider){
            const first = slider.firstElementChild;
            slider.append(first);
        
            slider.style.transition = 'none';
            slider.classList.add('to-left');

            setTimeout(() => {    
                slider.classList.remove('to-left');
                slider.style.transition = '.5s';
            }, 0);
        }
    }

    setInterval(() => {
        autoscroll();
    }, 4000);
    
}

// offset menu
{
    const menu = document.querySelector('#mobile-menu');
    const offset = document.querySelector('#offset');
    const close = document.querySelector('#close');

    menu.addEventListener('click', () => {
        offset.className = 'active';
    });

    close.addEventListener('click', () => {
        offset.className = '';
    });
}

// live 
{
    const live = document.querySelector('#live a');

    // console.log(live)

    // автоскролл
    function autoscroll(){
        const first = live.firstElementChild;
        live.append(first);

        live.style.transition = 'none';
        live.classList.add('to-up');

        setTimeout(() => {    
            live.classList.remove('to-up');
            live.style.transition = '.5s';
        }, 0);
    }

    setInterval(() => {
        autoscroll();
    }, 3000);
}
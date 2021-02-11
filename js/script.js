
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

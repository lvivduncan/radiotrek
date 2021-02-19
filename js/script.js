
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

    menu && menu.addEventListener('click', () => {
        offset.className = 'active';
    });

    close && close.addEventListener('click', () => {
        offset.className = '';
    });
}

// live 
{
    const live = document.querySelector('#live a');

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

// соціальні кнопки
{
  // facebook
  const facebook = document.querySelectorAll('.share-facebook');
  
  // twitter
  const twitter = document.querySelectorAll('.share-twitter');
  
  // linkedin
  const linkedin = document.querySelectorAll('.share-linkedin');
  
  // telegram
  const telegram = document.querySelectorAll('.share-telegram');
  
  // viber
  const viber = document.querySelectorAll('.share-viber');
  
  facebook.forEach(item => {    
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = 'https://facebook.com/sharer.php?display=popup&u=' + window.location.href;
      const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
      window.open(url, 'sharer', options);
    });
  });
  
  twitter.forEach(item => {    
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = 'https://twitter.com/intent/tweet?text=' + document.title + ' ' + window.location.href;
      const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
      window.open(url, 'twitter', options);
    });
  });
  
  linkedin.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = 'https://linkedin.com/shareArticle?mini=true&url=' + window.location.href + '&title=' + document.title;
      const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
      window.open(url, 'linkedin', options);
    });
  });
  
  telegram.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = 'https://telegram.me/share/url?url=' + window.location.href + '&text=' + document.title;
      const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
      window.open(url, 'telegram', options);
    });
  });
  
  viber.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = 'viber://forward?text=' + document.title + ' ' + window.location.href;
      const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
      window.open(url, 'viber', options);
    });
  });
}



// tabs
{
  const tabs = document.querySelectorAll('.post-tabs');

  tabs.forEach(tab => {
    const buttons = tab.querySelectorAll('.post-tabs-buttons span');
    const contents = tab.querySelectorAll('.post-tabs-content ul');

    buttons.forEach((button, i) => button.addEventListener('click', function() {
      buttons.forEach(button => button.className = '');
      this.className = 'active';

      contents.forEach(content => content.className = '');
      contents[i].className = 'active';
    }));

  });
}


// big top slider 
{
  const slider = document.querySelector('#project-slider ul');
  const left = document.querySelector('#project-to-left');
  const right = document.querySelector('#project-to-right');

  left && left.addEventListener('click', () => {
      const first = slider.firstElementChild;
      slider.append(first);

      slider.style.transition = 'none';
      slider.classList.add('to-left');
      setTimeout(() => {
          slider.classList.remove('to-left');
          slider.style.transition = '.75s';
      }, 50);
  });

  right && right.addEventListener('click', () => {
      const last = slider.lastElementChild;
      slider.prepend(last);

      slider.style.transition = 'none';
      slider.classList.add('to-right');
      setTimeout(() => {
          slider.classList.remove('to-right');
          slider.style.transition = '.75s';
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
              slider.style.transition = '.75s';
          }, 0);
      }
  }

  setInterval(() => {
      autoscroll();
  }, 4000);
  
}
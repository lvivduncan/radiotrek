
// offset menu 
{
	if(document.querySelector('#mobile-menu') != null){

		const wrapper = document.createElement('div');
		wrapper.setAttribute('id', 'mobile-menu-wrapper');

		const menu = document.querySelector('#mobile-menu');
		const nav = document.querySelector('#nav');

		const body = document.querySelector('body');

		menu.addEventListener('click', () => {
			// якщо кнопка уже натиснута
			if(menu.classList.contains('active')){

				nav.className = menu.className = body.className = '';
				wrapper.remove();
			} else {

				nav.className = menu.className = 'active';
				body.append(wrapper);
				body.className = 'lock';				
			}

		});

		wrapper.addEventListener('click', () => {

			nav.className = menu.className = body.className = '';
			wrapper.remove();
		});
		
		nav.addEventListener('click', () => {
			
			nav.className = menu.className = body.className = '';
			wrapper.remove();
		});	
	}
	
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

    autoscroll();
    // setInterval(() => {
    // }, 3000);
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

// sticky ads
{
	const ad = document.querySelector("[data-key='news_sidebar2']");
	ad && (ad.className = 'sticked');
}

// затемнення фону (для шарбатонів та лайків)
const wrapperModal = document.createElement('div');
wrapperModal.classList.add('wrapper-modal');
document.body.append(wrapperModal);

{
	// блок зі смайлами
	const smile = document.getElementById('smile');

	// замінили на прямий лінк (шарбатон фейсбука)
/* 
	// modal window (смайлики)
	document.getElementById('smile-mobile').addEventListener('click', () => {
		setTimeout(() => {
			smile.classList.toggle('modal');
			wrapperModal.classList.toggle('show');			
		}, 200);
	});	
 */	

	// share
	const like = document.getElementById('like');

	// modal window (смайлики)
	document.getElementById('like-mobile') && document.getElementById('like-mobile').addEventListener('click', () => {
		setTimeout(() => {
			like.classList.toggle('modal');
			wrapperModal.classList.toggle('show');
		}, 200);
	});	

	document.addEventListener('click', e => {
		if(e.target.classList.contains('wrapper-modal')){
			wrapperModal.classList.remove('show');

			like.classList.remove('modal');
			smile.classList.remove('modal');
		}
	});
}


// simple-srollbar init -- повернено 23-11-21
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
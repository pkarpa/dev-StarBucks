  const burger = document.querySelector('#btn-burger');
  const mobileContainer = document.querySelector('#mobile-container');
  const proccessVideo = document.querySelector('#video');
  const playBnt = document.querySelector('#play');
  const stopBnt = document.querySelector('#stop');
  const pauseBnt = document.querySelector('#pause');
  const madeBnt = document.querySelector('#how-made');
  const roasterBnt = document.querySelector('#roaster');
  const tasteBnt = document.querySelector('#taste');

  playBnt.addEventListener('click', () => {
    playVideo();
    console.log('play');
  })

  pauseBnt.addEventListener('click', () => {
    pauseVideo();
    console.log('pause');
  })

  stopBnt.addEventListener('click', () => {
    stopVideo();
    console.log('stop');
  })

  madeBnt.addEventListener('click', () => {
    currentHowIsMade();
  })

  roasterBnt.addEventListener('click', () => {
    currentRoaster();
  })

  tasteBnt.addEventListener('click', () => {
    currentTaste();
  })

  function playVideo(){
    proccessVideo.play();
  }

  function stopVideo(){
    proccessVideo.pause();
    proccessVideo.currentTime = 0;
  }

  function pauseVideo(){
    proccessVideo.pause();
  }

  function currentHowIsMade(){
    proccessVideo.currentTime = 65;
  }

  function currentRoaster(){
    proccessVideo.currentTime = 128;
  }

  function currentTaste(){
    proccessVideo.currentTime = 170;
  }


  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileContainer.classList.toggle('show');
  });

  // modal

  const modalTrigers = document.querySelectorAll('[data-triger-modal]');
  const modalClose = document.querySelectorAll('[data-modal-close]');
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");
 

  function showModal(){
    body.classList.add('overflow-hidden');
    overlay.classList.add('show');
  }

  modalTrigers.forEach(item => {
    item.addEventListener('click', function(event){
      event.preventDefault();

      const dataTriger = item.getAttribute('data-triger-modal');
      const modal = document.querySelector('#' + dataTriger);

      showModal();

      if (modal.classList.contains('video-procecess')) {
        modal.classList.add('show')
        playVideo()
      } else {
          modal.classList.add('show')
      }
    })
  });

  function closeModal(){
    const openModal = document.querySelector('.modal.show');
    body.classList.remove('overflow-hidden');
    overlay.classList.remove('show');
    openModal.classList.remove("show");
    stopVideo();
  }

  modalClose.forEach(item => {
    item.addEventListener('click', closeModal)
  });
  
// Swiper
const swiper = new Swiper('.swiper', {
  spaceBetween: 48,
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
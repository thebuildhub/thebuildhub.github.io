const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);

const nextBtn = document.querySelector('.right_btn');
const prevBtn = document.querySelector('.left_btn');
const dotNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotNav.children);


//arranging slides side by slide
const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth*index + 'px';
};

slides.forEach(setSlidePosition);


//adding Event listener now
nextBtn.addEventListener('click',moveRight);
function moveRight(e){
  const currentSlide = track.querySelector('.current_slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotNav.querySelector('.current_slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIdx = slides.findIndex(slide => slide === nextSlide);
  //now moving
  moveToSlide(track,currentSlide,nextSlide);
  updateDots(currentDot,nextDot);
  btnShowHide(slides,prevBtn,nextBtn,nextIdx);

}

prevBtn.addEventListener('click',e=>{
  const currentSlide = track.querySelector('.current_slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotNav.querySelector('.current_slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIdx = slides.findIndex(slide => slide === prevSlide);


  moveToSlide(track,currentSlide,prevSlide);
  updateDots(currentDot,prevDot);
  btnShowHide(slides,prevBtn,nextBtn,prevIdx);

});

const moveToSlide = (track,currentSlide, targetSlide) =>{
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

  currentSlide.classList.remove('current_slide');
  targetSlide.classList.add('current_slide');
}

dotNav.addEventListener('click',e =>{
  const targetDot = e.target.closest('button');
  if(!targetDot) return;

  const currentSlide = track.querySelector('.current_slide');
  const currentDot = dotNav.querySelector('.current_slide');
  const targetIdx = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIdx];

  moveToSlide(track,currentSlide,targetSlide);
  updateDots(currentDot,targetDot);
  btnShowHide(slides,prevBtn,nextBtn,targetIdx);

});

const updateDots = (currentDot, targetDot ) => {
  currentDot.classList.remove('current_slide');
  targetDot.classList.add('current_slide');
};
const btnShowHide = (slides, prevBtn,nextBtn,targetIdx) =>{
  if(targetIdx === 0){
    prevBtn.classList.add('is-hidden');
    nextBtn.classList.remove('is-hidden');
  }
  else if(targetIdx === slides.length -1){
    prevBtn.classList.remove('is-hidden');
    nextBtn.classList.add('is-hidden');
  }
  else{
    prevBtn.classList.remove('is-hidden');
    nextBtn.classList.remove('is-hidden');
  }
}

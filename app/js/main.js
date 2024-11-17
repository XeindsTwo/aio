document.querySelectorAll(".desktop").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    link.blur();

    const header = document.querySelector(".header");
    header.classList.remove('scroll');

    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const currentScrollPos = window.scrollY;
      const offsetTop = targetSection.getBoundingClientRect().top + currentScrollPos - 30;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

const homeTimeline = gsap.timeline();
const subhomeTimeline = gsap.timeline();

function homeAnimation() {
  homeTimeline.from('.header', {
    opacity: 0,
    duration: 1.4,
    ease: "power4.out",
    x: 0,
    y: -350,
    scale: 0.5
  }, '-=0.2');

  homeTimeline.fromTo('.decor-1',
    {y: 0, opacity: 0},
    {duration: 0.8, y: 0, opacity: 1}, 0.2);

  homeTimeline.fromTo('.home__hashtag',
    {y: 120, opacity: 0},
    {duration: 0.34, y: 0, opacity: 1}, 0.6);

  homeTimeline.fromTo('.home__title',
    {y: 50, opacity: 0},
    {duration: 0.2, y: 0, opacity: 1}, 1.1);

  homeTimeline.fromTo('.home-follow',
    {y: 50, opacity: 0},
    {duration: 0.4, y: 0, opacity: 1}, 1.6);

  homeTimeline.fromTo('.home-twitter',
    {y: 50, opacity: 0},
    {duration: 0.4, y: 0, opacity: 1}, 1.75);

  homeTimeline.fromTo('.home-discord',
    {y: 50, opacity: 0},
    {duration: 0.4, y: 0, opacity: 1}, 1.9);

  homeTimeline.eventCallback('onComplete', () => {
    setTimeout(() => {
      subhomeTimeline.play();
    }, 50);
  });
}

homeAnimation();

const betaAnimation = gsap.timeline({paused: true});
betaAnimation.from('.beta', {
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
}, 0.3);
betaAnimation.from('.beta__title', {
  opacity: 0,
  duration: 0.9,
  y: -80,
  ease: "power4.out",
}, 0.2);
betaAnimation.from('.beta__text', {
  opacity: 0,
  duration: 1,
  ease: "power4.out",
}, 0.7);
betaAnimation.from('.beta__link', {opacity: 0, y: 60, duration: 0.6}, 1.4);
betaAnimation.from('.beta__img', {opacity: 0, y: 460, duration: 0.7}, 1.5);

function createScrollTriggerOffers() {
  let startValue = 'top 50%';

  if (window.matchMedia('(max-width: 640px)').matches) {
    startValue = 'top 70%';
  }

  ScrollTrigger.create({
    trigger: '.beta',
    start: startValue,
    once: true,
    onEnter: () => {
      betaAnimation.play();
    },
  });
}

createScrollTriggerOffers();

const featuresAnimation = gsap.timeline({paused: true});
featuresAnimation.from('.features__title', {
  opacity: 0,
  duration: 1.8,
  ease: "power4.out",
}, 0.6);
featuresAnimation.from('.features__hashtag', {
  opacity: 0,
  duration: 0.9,
  ease: "power4.out",
}, 0.4);
featuresAnimation.from('.features__card.one', {
  opacity: 0,
  y: -110,
  duration: 1.1,
  ease: "power4.out",
}, 0.4);
featuresAnimation.from('.features__card.two', {
  opacity: 0,
  y: -110,
  duration: 1.1,
  ease: "power4.out",
}, 0.7);
featuresAnimation.from('.features__card.three', {
  opacity: 0,
  y: -110,
  duration: 1.1,
  ease: "power4.out",
}, 0.9);
featuresAnimation.from('.features__card.four', {
  opacity: 0,
  y: -150,
  duration: 1.1,
  ease: "power4.out",
}, 1.1);
featuresAnimation.from('.features__card.five', {
  opacity: 0,
  y: -150,
  duration: 1.1,
  ease: "power4.out",
}, 1.3);

function createScrollTriggerFeatures() {
  let startValue = 'top 60%';

  if (window.matchMedia('(max-width: 640px)').matches) {
    startValue = 'top 70%';
  }

  ScrollTrigger.create({
    trigger: '.features',
    start: startValue,
    once: true,
    onEnter: () => {
      featuresAnimation.play();
    },
  });
}

createScrollTriggerFeatures();

const animationDao = gsap.timeline({paused: true});
animationDao.from('.dao', {
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
}, 0.3);
animationDao.from('.dao__title', {
  opacity: 0,
  duration: 0.9,
  y: -80,
  ease: "power4.out",
}, 0.2);
animationDao.from('.dao__text', {
  opacity: 0,
  y: -40,
  duration: 1,
  ease: "power4.out",
}, 0.7);
animationDao.from('.dao__img', {opacity: 0, y: 460, duration: 0.7}, 1.2);

function createScrollTriggerDao() {
  let startValue = 'top 70%';

  ScrollTrigger.create({
    trigger: '.dao',
    start: startValue,
    once: true,
    onEnter: () => {
      animationDao.play();
    },
  });
}

createScrollTriggerDao();

const animationContacts = gsap.timeline({paused: true});
animationContacts.from('.contacts__title', {
  opacity: 0,
  y: -60,
  duration: 1.3,
  ease: "power4.out",
}, 0.3);
animationContacts.from('.contacts__link-one', {
  opacity: 0,
  y: -40,
  duration: 1.2,
  ease: "power4.out",
}, 0.6);
animationContacts.from('.contacts__link-two', {
  opacity: 0,
  y: -40,
  duration: 1.2,
  ease: "power4.out",
}, 0.8);
animationContacts.from('.decor-3', {
  opacity: 0,
  duration: 2,
  ease: "power4.out",
}, 0.6);

function createScrollTriggerContacts() {
  let startValue = 'top 70%';

  ScrollTrigger.create({
    trigger: '.contacts',
    start: startValue,
    once: true,
    onEnter: () => {
      animationContacts.play();
    },
  });
}

createScrollTriggerContacts();

animationContacts.from('.footer__link', {
  opacity: 0,
  y: -40,
  duration: 1.3,
  ease: "power4.out",
}, 0.3);
animationContacts.from('.footer__copy', {
  opacity: 0,
  y: -50,
  duration: 1.3,
  ease: "power4.out",
}, 0.5);
animationContacts.from('.footer__socials', {
  opacity: 0,
  y: -40,
  duration: 1.3,
  ease: "power4.out",
}, 0.5);
function createScrollTriggerFooter() {
  let startValue = 'top 70%';

  ScrollTrigger.create({
    trigger: '.footer',
    start: startValue,
    once: true,
    onEnter: () => {
      animationFooter.play();
    },
  });
}

createScrollTriggerFooter();
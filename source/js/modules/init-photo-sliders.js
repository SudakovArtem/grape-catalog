const initPhotoSliders = () => {
  const sliders = document.querySelectorAll('.product-card__slider');

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    new Swiper(slider, {});
  });
};

export {initPhotoSliders};

<template>
  <div class="simple-slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <!-- <div class="absolute_slider">
            <h2 class="text-center">مجال الويب</h2>
						<h2 class="text-center">كلية الحاسبات والمعلومات</h2>
						<h2 class="text-center">قسم علوم حاسب</h2>
					 <h2 class="text-center title">مجال الويب</h2>
            <p class="text-center descreption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est
              esse commodi consequatur tenetur provident cumque facilis natus
              eos, tempore placeat unde alias blanditiis cupiditate?
              Exercitationem totam nemo sunt in.
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.simple-slider .swiper-slide {
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.simple-slider .swiper-button-next,
.simple-slider .swiper-button-prev {
  width: 50px;
  margin-left: 20px;
  margin-right: 20px;
}
.swiper-slide {
  background-image: url("@/assets/img/17876784 [Converted]-.jpg");
  position: relative;
}
.absolute_slider {
  position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: #FFF;
    background-color: #000000a8;
padding: 1rem;
}

@media (max-width: 767px) {
  .simple-slider .swiper-button-next,
  .simple-slider .swiper-button-prev {
    display: none;
  }
}

@media (max-width: 767px) {
  .simple-slider .swiper-slide {
    height: 360px;
  }
}
</style>

<template>
<div>
  <div class="simple-slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">

        </div>
      </div>
    </div>
  </div>
  <div class="text-center descreption">
    <h2>{{techno.name}}</h2>
    <p>
              {{techno.des}}
            </p>
  </div>
  <div class="team-boxed">
    <div class="intro">
                <h2 class="text-center">الدورات التدريبية</h2>
            </div>
        <div class="container">

            <div class="row people">
                <div v-for="course in courses" :key="course.id" class="col-md-6 col-lg-4 item">
                    <div class="box">
                      <img
                            :src="'https://roadmapapi.ahmedhesham.systems/storage/' + course.image">
                        <h3 class="name">{{course.name}}</h3>
                        <p class="description">{{course.des}}</p>

                    </div>
                </div>


            </div>
        </div>
    </div>
</div>

</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      courses: '',
      id: '',
      techno: {
        name: '',
        des: ''
      }
    }
  },
  mounted() {
        const technoID = localStorage.getItem('technoID')? localStorage.getItem('technoID') : 'https://roadmapapi.ahmedhesham.systems/api/v1/techno/index';

    axios.get(technoID)
    .then(res => {
      this.courses = res.data.data;
      this.techno.name = res.data.data[0].technological.name;
      this.techno.des = res.data.data[0].technological.des;
    })
  },
}
</script>


<style scoped>

.descreption {
  padding: 2rem;
  background-color: #ccc;
  line-height: 1.7;
margin: .5rem;

}
.team-boxed h2 {
  font-weight: bold;
  color: inherit;
  margin: .5rem;
  padding: .5rem;
}
button {
  padding: 0.5rem 1rem;
  border-radius: 50%;
  left: 1rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}
.team-boxed {
  color: #313437;
  background-color: #eef4f7;
}

.team-boxed p {
  color: #7d8285;
}



@media (max-width:767px) {
  .team-boxed h2 {
    margin-bottom: 25px;
    padding-top: 25px;
    font-size: 24px;
  }
}

.team-boxed .intro {
  font-size: 16px;
  margin: 0 auto;
  width: 100%;
  background-color: #35363a;
  color: #FFF;
}

.team-boxed .intro p {
  margin-bottom: 0;
}

.team-boxed .people {
  padding: 50px 0;
}

.team-boxed .item {
  text-align: center;
}

.team-boxed .item .box {
  text-align: center;
  padding: 30px;
  background-color: #fff;
  margin-bottom: 30px;
}

.team-boxed .item .name {
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 8px;
  color: inherit;
}

.team-boxed .item .title {
  text-transform: uppercase;
  font-weight: bold;
  color: #d0d0d0;
  letter-spacing: 2px;
  font-size: 13px;
}

.team-boxed .item .description {
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
}

.team-boxed .item img {
  max-width: 160px;
}

.team-boxed .social {
  font-size: 18px;
  color: #a2a8ae;
}

.team-boxed .social a {
  color: inherit;
  margin: 0 10px;
  display: inline-block;
  opacity: 0.7;
}

.team-boxed .social a:hover {
  opacity: 1;
}


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
  background-image: url("@/assets/img/1805 [Converted].jpg");
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

<template>
  <div class="team-boxed">
    <div class="intro">
      <h2 class="text-center">تصفح المزيد</h2>
    </div>
    <div class="container">
      <div class="row people">
        <div
          class="col-md-6 col-lg-4 item"
        >
          <div class="box">
            <img
              :src="
                'https://roadmapapi.ahmedhesham.systems/storage/' + techno.image
              "
            />
            <h3 class="name">{{ techno.name }}</h3>
            <p class="description">{{ techno.des }}</p>

            <button :value="techno.id" :id="techno.id" @click="technoID">
              الذهاب
            </button>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4 item"
        >
                  <div class="box">
            <img
              :src="
                'https://roadmapapi.ahmedhesham.systems/storage/' + faculity.image
              "
            />
            <h3 class="name">{{ faculity.name }}</h3>
            <p class="description">{{ faculity.des }}</p>

            <button :value="faculity.id" :id="faculity.id" @click="faculityID">
              الذهاب
            </button>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4 item"
        >
          <div class="box">
            <img
              :src="
                'https://roadmapapi.ahmedhesham.systems/storage/' + course.image
              "
            />
            <h3 class="name">{{ course.name }}</h3>
            <!-- <p class="description">{{ course.des }}</p> -->

            <button :value="course.id" :id="course.id" @click="courseID">
              الذهاب
            </button>
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
      techno: {
        image:'',
        name: '',
        des: '',
        id:''
      },
      faculity: {
        image:'',
        name: '',
        des: '',
                id:''

      },
      course: {
        image:'',
        name: '',
        des: '',
                id:''

      },
      techno_ID:'',
      faculity_ID:'',
      course_ID:'',

    };
  },
  mounted() {
    const randomID =
      "https://roadmapapi.ahmedhesham.systems/api/v1/Front/index";

    axios.get(randomID).then((res) => {
      this.techno.name = res.data.data.tech[0].name;
      this.techno.image = res.data.data.tech[0].image;
      this.techno.des = res.data.data.tech[0].des;
      this.techno.id = res.data.data.tech[0].id;

      this.faculity.name = res.data.data.fac[0].name;
      this.faculity.image = res.data.data.fac[0].image;
      this.faculity.des = res.data.data.fac[0].des;
      this.faculity.id = res.data.data.fac[0].id;

      this.course.name = res.data.data.course[0].name;
      this.course.image = res.data.data.course[0].image;
      this.course.des = res.data.data.course[0].des;
      this.course.id = res.data.data.course[0].technological_id;


    });
  },
  methods: {
    technoID: function (e) {
      this.techno_ID = e.target.value;
      localStorage.setItem(
        "technoID",
        `https://roadmapapi.ahmedhesham.systems/api/v1/courses/index?techno=${this.techno_ID}`
      );
      this.$router.push("/Techno");
    },
    faculityID: function(e) {
      this.faculity_ID = e.target.value;
      localStorage.setItem(
        "faculityID",
        `https://roadmapapi.ahmedhesham.systems/api/v1/department/index?fac_id=${this.faculity_ID}`
      );
      this.$router.push("/Faculity");
    },
    courseID: function(e) {
      this.course_ID = e.target.value;
      localStorage.setItem(
        "technoID",
        `https://roadmapapi.ahmedhesham.systems/api/v1/courses/index?techno=${this.course_ID}`
      );
      this.$router.push("/Techno");
    }
  },
};
</script>
<style scoped>
.descreption {
  padding: 2rem;
  background-color: #ccc;
  line-height: 1.7;
  margin: 0.5rem;
}
.team-boxed h2 {
  font-weight: bold;
  color: inherit;
  margin: 0.5rem;
  padding: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
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

@media (max-width: 767px) {
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
  color: #fff;
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
  background-image: url("@/assets/img/ER20_3206_706x394_Blog.jpg");
  position: relative;
}
.absolute_slider {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
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

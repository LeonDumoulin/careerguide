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
    <h2>{{ field.name }}</h2>
    <p>
              {{field.des}}
            </p>
  </div>
    <div class="team-boxed">
        <div class="intro">
          <h2 class="text-center">مجالات العمل</h2>
        </div>
      <div class="container">
        <div class="row people">
          <div
            v-for="techno in technos"
            :key="techno.id"
            class="col-md-6 col-lg-4 item"
          >
          <div class="box">

            <img
              :src="
                'https://roadmapapi.ahmedhesham.systems/storage/' + techno.image
              "
            />
            <h3 class="name">{{ techno.name }}</h3>
            <!-- <p class="description">{{ techno.des }}</p> -->

            <button :value="techno.id" :id="techno.id" @click="technoID">
              الذهاب
            </button>
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
      technos: "",
      id: "",
      field: {
        name: "",
        des: "",
      },
    };
  },
  mounted() {
    const fieldID = localStorage.getItem("fieldtID")
      ? localStorage.getItem("fieldtID")
      : "https://roadmapapi.ahmedhesham.systems/api/v1/techno/index";

    axios.get(fieldID).then((res) => {
      this.technos = res.data.data;
      this.field.name = res.data.data[0].field.name;
      this.field.des = res.data.data[0].field.des;
    });
  },
  methods: {
    technoID: function (e) {
      this.id = e.target.value;
      localStorage.setItem(
        "technoID",
        `https://roadmapapi.ahmedhesham.systems/api/v1/courses/index?techno=${this.id}`
      );
      this.$router.push("/Techno");
    },
  },
};
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

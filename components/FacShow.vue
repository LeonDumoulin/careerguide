<template>
  <div>
    <div class="team-boxed">
        <div class="intro">
          <h2 class="text-center">الكليات</h2>
        </div>
      <div class="container">
        <div class="row people">
          <div
            v-for="faculity in faculities"
            :key="faculity.id"
            class="col-md-6 col-lg-4 item"
          >
          <div class="box">
<img
              :src="
                'https://roadmapapi.ahmedhesham.systems/storage/' + faculity.image
              "
            />
            <h3 class="name">{{ faculity.name }}</h3>
              <!-- <p class="description">{{ faculity.des }}</p> -->

            <button :value="faculity.id" :id="faculity.id" @click="faculityID">
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
      faculities: "",
      id: ""
    };
  },
  mounted() {
    axios
      .get("https://roadmapapi.ahmedhesham.systems/api/v1/faculty/index")
      .then(res => {
        this.faculities = res.data.data;
      });
  },
  methods: {
    faculityID: function(e) {
      this.id = e.target.value;
      localStorage.setItem(
        "faculityID",
        `https://roadmapapi.ahmedhesham.systems/api/v1/department/index?fac_id=${this.id}`
      );
      this.$router.push("/Faculity");
    }
  }
};
</script>
<style scoped>
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

.team-boxed h2 {
  font-weight: bold;
  color: inherit;
  margin:0 .5rem;
  padding: .5rem;
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


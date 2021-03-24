<template>
  <div>
    <button data-toggle="modal" class="mb-5" data-target="#addcourses">
      اضافة الكورس
    </button>
    <div
      class="modal fade"
      id="addcourses"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">اضافة الكورس</h5>
          </div>
          <div class="modal-body">
            <label> الكورس التابع لها التكنولوجي</label>
            <select class="form-control" v-model="courses.technological_id">
              <option disabled selected>
                يرجي اختيار الكورس التابع لها التكنولوجي
              </option>
              <option
                v-for="techno in technos"
                :key="techno.id"
                :value="techno.id"
              >
                {{ techno.name }}
              </option>
            </select>
            <div class="form-group">
              <label for="courses_name">اسم الكورس</label>
              <input
                type="text"
                class="form-control"
                id="courses_name"
                aria-describedby="emailHelp"
                placeholder="اسم الكورس"
                v-model="courses.name"
              />
            </div>
            <div class="form-group">
              <label for="courses_descreption">وصف الكورس</label>
              <textarea
                class="form-control"
                id="courses_descreption"
                rows="3"
                placeholder="وصف الكورس"
                v-model="courses.des"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="courses_img">صورة الكورس</label>
              <input
                type="file"
                ref="file"
                class="form-control"
                id="courses_img"
                v-on:change="handleFileUpload()"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              غلق
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="addcourses"
            >
              اضافة
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
      courses: {
        name: "",
        des: "",
        image: "",
        Filed_id: "",
      },
      technos : "",
    };
  },
  mounted() {
    axios
      .get(`https://roadmapapi.ahmedhesham.systems/api/v1/techno/index`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myToken")}`,
        },
      })
      .then((res) => {
        this.technos = res.data.data;
        console.log(res.data.data);
      });
  },
  methods: {
    addcourses({ $axios }) {
      let formData = new FormData();

      formData.append("name", this.courses.name);
      formData.append("des", this.courses.des);
      formData.append("image", this.courses.image);
      formData.append("technological_id", this.courses.technological_id);
      console.log(
        this.courses.name,
        this.courses.des,
        this.courses.image,
        'fid' + this.courses.technological_id
      );

      this.$axios
        .$post("/courses/add", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("myToken")}`,
          },
        })
        .then((res) => {
          console.log(res);
          location.reload();
        });
    },
    handleFileUpload() {
      this.courses.image = this.$refs.file.files[0];
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: #fd7b38;

label {
  color: #fd7b38;
}
button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: $main-color;
  color: #fff;
  border: none;
  font-size: 15px;
}
</style>

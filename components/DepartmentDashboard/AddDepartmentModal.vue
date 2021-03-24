<template>
  <div>
    <button data-toggle="modal" class="mb-5" data-target="#adddepartment">
      اضافة قسم
    </button>
    <div
      class="modal fade"
      id="adddepartment"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">اضافة قسم</h5>
          </div>
          <div class="modal-body">
            <label> الكلية التابع لها القسم</label>
            <select class="form-control" v-model="department.faculty_id">
              <option disabled selected>
                يرجي اختيار الكلية التابع لها القسم
              </option>
              <option
                v-for="faculity in faculities"
                :key="faculity.id"
                :value="faculity.id"
              >
                {{ faculity.name }}
              </option>
            </select>
            <div class="form-group">
              <label for="department_name">اسم القسم</label>
              <input
                type="text"
                class="form-control"
                id="department_name"
                aria-describedby="emailHelp"
                placeholder="اسم القسم"
                v-model="department.name"
              />
            </div>
            <div class="form-group">
              <label for="department_descreption">وصف القسم</label>
              <textarea
                class="form-control"
                id="department_descreption"
                rows="3"
                placeholder="وصف القسم"
                v-model="department.des"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="department_img">صورة القسم</label>
              <input
                type="file"
                ref="file"
                class="form-control"
                id="department_img"
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
              @click="addDepartment"
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
      department: {
        name: "",
        des: "",
        image: "",
        faculty_id: "",
      },
      faculities: "",
    };
  },
  mounted() {
    axios
      .get(`https://roadmapapi.ahmedhesham.systems/api/v1/faculty/index`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myToken")}`,
        },
      })
      .then((res) => {
        this.faculities = res.data.data;
        console.log(res.data.data);
      });
  },
  methods: {
    addDepartment({ $axios }) {
      let formData = new FormData();

      formData.append("name", this.department.name);
      formData.append("des", this.department.des);
      formData.append("image", this.department.image);
      formData.append("faculty_id", this.department.faculty_id);
      console.log(
        this.department.name,
        this.department.des,
        this.department.image,
        'fid' + this.department.faculty_id
      );

      this.$axios
        .$post("/department/add", formData, {
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
      this.department.image = this.$refs.file.files[0];
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

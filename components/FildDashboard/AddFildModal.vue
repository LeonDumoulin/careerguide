<template>
  <div>
    <button data-toggle="modal" class="mb-5" data-target="#addfield">
      اضافة مجال
    </button>
    <div
      class="modal fade"
      id="addfield"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">اضافة مجال</h5>
          </div>
          <div class="modal-body">
            <label> القسم التابع لها المجال</label>
            <select class="form-control" v-model="field.department_id">
              <option disabled selected>
                يرجي اختيار القسم التابع لها المجال
              </option>
              <option
                v-for="Department in Departments"
                :key="Department.id"
                :value="Department.id"
              >
                {{ Department.name }}
              </option>
            </select>
            <div class="form-group">
              <label for="field_name">اسم المجال</label>
              <input
                type="text"
                class="form-control"
                id="field_name"
                aria-describedby="emailHelp"
                placeholder="اسم المجال"
                v-model="field.name"
              />
            </div>
            <div class="form-group">
              <label for="field_descreption">وصف المجال</label>
              <textarea
                class="form-control"
                id="field_descreption"
                rows="3"
                placeholder="وصف المجال"
                v-model="field.des"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="field_img">صورة المجال</label>
              <input
                type="file"
                ref="file"
                class="form-control"
                id="field_img"
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
              @click="addfield"
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
      field: {
        name: "",
        des: "",
        image: "",
        department_id: "",
      },
      Departments : "",
    };
  },
  mounted() {
    axios
      .get(`https://roadmapapi.ahmedhesham.systems/api/v1/department/index`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myToken")}`,
        },
      })
      .then((res) => {
        this.Departments = res.data.data;
        console.log(res.data.data);
      });
  },
  methods: {
    addfield({ $axios }) {
      let formData = new FormData();

      formData.append("name", this.field.name);
      formData.append("des", this.field.des);
      formData.append("image", this.field.image);
      formData.append("department_id", this.field.department_id);
      console.log(
        this.field.name,
        this.field.des,
        this.field.image,
        'fid' + this.field.department_id
      );

      this.$axios
        .$post("/field/add", formData, {
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
      this.field.image = this.$refs.file.files[0];
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

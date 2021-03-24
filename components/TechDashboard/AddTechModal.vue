<template>
  <div>
    <button data-toggle="modal" class="mb-5" data-target="#addtechno">
      اضافة تكنولوجي
    </button>
    <div
      class="modal fade"
      id="addtechno"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">اضافة تكنولوجي</h5>
          </div>
          <div class="modal-body">
            <label> المجال التابع لها التكنولوجي</label>
            <select class="form-control" v-model="techno.field_id">
              <option disabled selected>
                يرجي اختيار المجال التابع لها التكنولوجي
              </option>
              <option
                v-for="field in fields"
                :key="field.id"
                :value="field.id"
              >
                {{ field.name }}
              </option>
            </select>
            <div class="form-group">
              <label for="techno_name">اسم التكنولوجي</label>
              <input
                type="text"
                class="form-control"
                id="techno_name"
                aria-describedby="emailHelp"
                placeholder="اسم التكنولوجي"
                v-model="techno.name"
              />
            </div>
            <div class="form-group">
              <label for="techno_descreption">وصف التكنولوجي</label>
              <textarea
                class="form-control"
                id="techno_descreption"
                rows="3"
                placeholder="وصف التكنولوجي"
                v-model="techno.des"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="techno_img">صورة التكنولوجي</label>
              <input
                type="file"
                ref="file"
                class="form-control"
                id="techno_img"
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
              @click="addtechno"
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
      techno: {
        name: "",
        des: "",
        image: "",
        field_id: "",
      },
      fields : "",
    };
  },
  mounted() {
    axios
      .get(`https://roadmapapi.ahmedhesham.systems/api/v1/field/index`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myToken")}`,
        },
      })
      .then((res) => {
        this.fields = res.data.data;
        console.log(res.data.data);
      });
  },
  methods: {
    addtechno({ $axios }) {
      let formData = new FormData();

      formData.append("name", this.techno.name);
      formData.append("des", this.techno.des);
      formData.append("image", this.techno.image);
      formData.append("field_id", this.techno.field_id);
      console.log(
        this.techno.name,
        this.techno.des,
        this.techno.image,
        'fid' + this.techno.field_id
      );

      this.$axios
        .$post("/techno/add", formData, {
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
      this.techno.image = this.$refs.file.files[0];
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

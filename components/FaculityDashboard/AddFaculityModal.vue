<template>
  <div>
    <button data-toggle="modal" class="mb-5" data-target="#addfaculity">
        اضافة كلية
      </button>
    <div class="modal fade" id="addfaculity" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">اضافة كلية</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
  <div class="form-group">
    <label for="faculity_name">اسم الكلية</label>
    <input type="text" class="form-control" id="faculity_name" aria-describedby="emailHelp" placeholder="اسم الكلية" v-model="faculity.name">
  </div>
  <div class="form-group">
    <label for="faculity_descreption">وصف الكلية</label>
    <textarea class="form-control" id="faculity_descreption" rows="3" placeholder="وصف الكلية" v-model="faculity.des"></textarea>

  </div>
  <div class="form-group">
    <label for="faculity_img">صورة الكلية</label>
    <input  type="file" ref="file" class="form-control" id="faculity_img" v-on:change="handleFileUpload()">
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">غلق</button>
        <button type="submit" class="btn btn-primary" data-dismiss="modal" @click='addFaculity'>اضافة</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      faculity: {
        name: '',
        des: '',
        image: ''
      }
    }
  },
  methods: {
    addFaculity({$axios}) {
       let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('name', this.faculity.name);
            formData.append('des', this.faculity.des);
            formData.append('image', this.faculity.image);

      this.$axios.$post(
        '/faculty/add'
        ,formData, {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('myToken')}`
  }
        }
  ).then(res => {
        console.log(res);
        location.reload();
      })



    },
    handleFileUpload(){
    this.faculity.image = this.$refs.file.files[0];
  },

  }
}
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

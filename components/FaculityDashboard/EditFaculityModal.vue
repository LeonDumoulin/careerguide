<template>
  <div>

    <div class="modal fade" id="editfaculity" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >تعديل كلية</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
  <div class="form-group">
    <label for="faculity_name">اسم الكلية</label>
    <input type="text" class="form-control faculity_name" aria-describedby="emailHelp" placeholder="اسم الكلية">
  </div>
  <div class="form-group">
    <label for="faculity_descreption">وصف الكلية</label>
    <textarea class="form-control faculity_descreption" rows="3" placeholder="وصف الكلية"></textarea>

  </div>
  <div class="form-group">
    <label for="faculity_img">صورة الكلية</label>
    <br>
    <img src="" class="faculity_img rounded-circle" style="width: 100px; height: 100px">
    <input  type="file" ref="newfile" class="form-control new_faculity_img" v-on:change="handleFileUploadnew()">
  </div>
    <input  type="hidden" class="form-control faculity_id">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">غلق</button>
        <button type="submit" class="btn btn-primary" data-dismiss="modal" @click='updateFaculity'>تعديل</button>
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
      Efaculity: {
        image: ''
      }
    }
  },
  methods: {
    updateFaculity({$axios}) {
      let formData = new FormData();
      formData.append('name', $("#editfaculity").find(".faculity_name").val());
      formData.append('des', $("#editfaculity").find(".faculity_descreption").val());
      this.Efaculity.image == '' ? '':formData.append('image', this.Efaculity.image);
      formData.append('id', $("#editfaculity").find(".faculity_id").val());

      this.$axios.$post(
        '/faculty/update'
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
    handleFileUploadnew(){
    this.Efaculity.image = this.$refs.newfile.files[0];
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

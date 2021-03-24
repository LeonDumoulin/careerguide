<template>
  <div>

    <div class="modal fade" id="editDepartment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    <label for="Department_name">اسم القسم</label>
    <input type="text" class="form-control Department_name" aria-describedby="emailHelp" placeholder="اسم القسم">
  </div>
  <div class="form-group">
    <label for="Department_descreption">وصف القسم</label>
    <textarea class="form-control Department_descreption" rows="3" placeholder="وصف القسم"></textarea>

  </div>
  <div class="form-group">
    <label for="Department_img">صورة القسم</label>
    <br>
    <img src="" class="Department_img rounded-circle" style="width: 100px; height: 100px">
    <input  type="file" ref="newfile" class="form-control new_Department_img" v-on:change="handleFileUploadnew()">
  </div>


    <input  type="hidden" class="form-control Department_id">
    <input  type="hidden" class="form-control faculity_id">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">غلق</button>
        <button type="submit" class="btn btn-primary" data-dismiss="modal" @click='updateDepartment'>تعديل</button>
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
      EDepartment: {
        image: ''
      }
    }
  },
  methods: {
    //Department_id
    updateDepartment({$axios}) {
      let formData = new FormData();
      formData.append('name', $("#editDepartment").find(".Department_name").val());
      formData.append('des', $("#editDepartment").find(".Department_descreption").val());
      this.EDepartment.image == '' ? '':formData.append('image', this.EDepartment.image);
      formData.append('id', $("#editDepartment").find(".Department_id").val());
      formData.append('faculty_id', $("#editDepartment").find(".faculity_id").val());
     
      this.$axios.$post(
        '/department/update'
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
    this.EDepartment.image = this.$refs.newfile.files[0];
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

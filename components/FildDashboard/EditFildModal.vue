<template>
  <div>

    <div class="modal fade" id="editFiled" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >تعديل المجال</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
  <div class="form-group">
    <label for="Filed_name">اسم المجال</label>
    <input type="text" class="form-control Filed_name" aria-describedby="emailHelp" placeholder="اسم الكلية">
  </div>
  <div class="form-group">
    <label for="Filed_descreption">وصف المجال</label>
    <textarea class="form-control Filed_descreption" rows="3" placeholder="وصف الكلية"></textarea>

  </div>
  <div class="form-group">
    <label for="Filed_img">صورة المجال</label>
    <br>
    <img src="" class="Filed_img rounded-circle" style="width: 100px; height: 100px">
    <input  type="file" ref="newfile" class="form-control new_Filed_img" v-on:change="handleFileUploadnew()">
  </div>
    <input  type="hidden" class="form-control Filed_id">
    <input  type="hidden" class="form-control department_id">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">غلق</button>
        <button type="submit" class="btn btn-primary" data-dismiss="modal" @click='updateFiled'>تعديل</button>
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
      EFiled: {
        image: ''
      }
    }
  },
  methods: {
    updateFiled({$axios}) {
      let formData = new FormData();
      formData.append('name', $("#editFiled").find(".Filed_name").val());
      formData.append('des', $("#editFiled").find(".Filed_descreption").val());
      this.EFiled.image == '' ? '':formData.append('image', this.EFiled.image);
      formData.append('id', $("#editFiled").find(".Filed_id").val());
      formData.append('department_id', $("#editFiled").find(".department_id").val());


      this.$axios.$post(
        '/field/update'
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
    this.EFiled.image = this.$refs.newfile.files[0];
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

<template>
  <div>

    <div class="modal fade" id="editcourses" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >تعديل الكورس</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
  <div class="form-group">
    <label for="courses_name">اسم الكورس</label>
    <input type="text" class="form-control courses_name" aria-describedby="emailHelp" placeholder="اسم التكنولوجي">
  </div>
  <div class="form-group">
    <label for="courses_descreption">وصف الكورس</label>
    <textarea class="form-control courses_descreption" rows="3" placeholder="وصف التكنولوجي"></textarea>

  </div>
  <div class="form-group">
    <label for="courses_img">صورة الكورس</label>
    <br>
    <img src="" class="courses_img rounded-circle" style="width: 100px; height: 100px">
    <input  type="file" ref="newfile" class="form-control new_courses_img" v-on:change="handleFileUploadnew()">
  </div>
    <input  type="hidden" class="form-control courses_id">
    <input  type="hidden" class="form-control technological_id">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">غلق</button>
        <button type="submit" class="btn btn-primary" data-dismiss="modal" @click='updatecourses'>تعديل</button>
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
      Ecourses: {
        image: ''
      }
    }
  },
  methods: {
    updatecourses({$axios}) {
      let formData = new FormData();
      formData.append('name', $("#editcourses").find(".courses_name").val());
      formData.append('des', $("#editcourses").find(".courses_descreption").val());
      this.Ecourses.image == '' ? '':formData.append('image', this.Ecourses.image);
      formData.append('id', $("#editcourses").find(".courses_id").val());
      formData.append('technological_id', $("#editcourses").find(".technological_id").val());
      console.log($("#editcourses").find(".technological_id").val()
     , $("#editcourses").find(".courses_id").val()
      );

      this.$axios.$post(
        '/courses/update'
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
    this.Ecourses.image = this.$refs.newfile.files[0];
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

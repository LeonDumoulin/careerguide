<template>
  <div>

    <div class="modal fade" id="edittechno" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >تعديل التكنولوجي</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
  <div class="form-group">
    <label for="techno_name">اسم التكنولوجي</label>
    <input type="text" class="form-control techno_name" aria-describedby="emailHelp" placeholder="اسم التكنولوجي">
  </div>
  <div class="form-group">
    <label for="techno_descreption">وصف التكنولوجي</label>
    <textarea class="form-control techno_descreption" rows="3" placeholder="وصف التكنولوجي"></textarea>

  </div>
  <div class="form-group">
    <label for="techno_img">صورة التكنولوجي</label>
    <br>
    <img src="" class="techno_img rounded-circle" style="width: 100px; height: 100px">
    <input  type="file" ref="newfile" class="form-control new_techno_img" v-on:change="handleFileUploadnew()">
  </div>
    <input  type="hidden" class="form-control technological_id">
    <input  type="hidden" class="form-control field_id">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">غلق</button>
        <button type="submit" class="btn btn-primary" data-dismiss="modal" @click='updatetechno'>تعديل</button>
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
      Etechno: {
        image: ''
      }
    }
  },
  methods: {
    updatetechno({$axios}) {
      let formData = new FormData();
      formData.append('name', $("#edittechno").find(".techno_name").val());
      formData.append('des', $("#edittechno").find(".techno_descreption").val());
      this.Etechno.image == '' ? '':formData.append('image', this.Etechno.image);
      formData.append('id', $("#edittechno").find(".technological_id").val());
      formData.append('field_id', $("#edittechno").find(".field_id").val());

      this.$axios.$post(
        '/techno/update'
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
    this.Etechno.image = this.$refs.newfile.files[0];
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

<template>
  <div>
    <table id="techno_table" class="display mt-5" style="width: 100%">
      <thead>
        <tr>
          <th>اسم التكنولوجي</th>
          <th>وصف التكنولوجي</th>
          <th>صورة التكنولوجي</th>
          <th>معرف المجال</th>
          <th>تابع المجال</th>
          <th>حذف</th>
          <th>تعديل</th>
          <th>id</th>
        </tr>
      </thead>
    </table>
  </div>
</template>



<script>
import axios from "axios";

$("body").on("click", ".delete_button", function () {
  var select = {
    row: $(this).closest("tr"),
    id: $(this).closest("tr").find(".hide_column > span").text(),
  };

  $("body").on("click", ".refuse-button", function () {
    delete select.id;
    delete select.row;
    console.log(select);
    console.log(select.id);
    console.log(select.row);
  });

  $('#deleteElement').on('hidden.bs.modal', function () {
    delete select.id;
    delete select.row;
    console.log(select);
    console.log(select.id);
    console.log(select.row);
})

  $(".confirm-delete").click(function () {
    axios
      .post(
        "https://roadmapapi.ahmedhesham.systems/api/v1/techno/delete",
        {id:select.id},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("myToken")}`,
          },
        }
      )
      .then((res) => {
        select.row.remove();
        delete select.id;
        delete select.row;
        $("#deleteElement").modal('hide');
      });
  });
});


    $("body").on("click", ".edit_button", function () {
        var selectAlltdFromRow = {rows: $(this).closest('tr').eq(0).find('td')}
        // اما الموديل يفتح
        // باخد الداتا من الجدول و اوديها الموديل
        $("#edittechno").on("show.bs.modal", function(e) {

          var hamada = $(e.relatedTarget);
            var fromTableToModal = {
              row: hamada.parents("tr"),
            }
            var modalVariable = {
              //technological_id
              techno_nameValue: fromTableToModal.row.find(".techno_name").text(),
              techno_descreptionValue: fromTableToModal.row.find(".techno_descreption").text(),
              techno_fidValue: fromTableToModal.row.find(".field_id").text(),
              techno_imgValue: fromTableToModal.row.find(".techno_img > img").attr('src'),
              technological_idValue: fromTableToModal.row.find(".hide_column > span").text(),
            }
            $(this).find(".techno_name").val(modalVariable.techno_nameValue);
            $(this).find(".techno_descreption").val(modalVariable.techno_descreptionValue);
            $(this).find(".techno_img").attr('src' , modalVariable.techno_imgValue);
            $(this).find(".technological_id").val(modalVariable.technological_idValue);
            $(this).find(".field_id").val(modalVariable.techno_fidValue);

        /*  */
        });
    });


    //    دا زرار التعديل من الجدول



    // $("#editpayment").on("click", ".edit-button", function() {
    //     student_id = $(".hide_column1").val();
    //     month_id = $("#studentlevelpaymentmodal option:selected").val();
    //     month = 'month' + month_id;
    //     paymentState = document.getElementById("cancelpayment").checked;

    //     if (paymentState == true) {
    //         const params = new URLSearchParams();
    //         params.append('students_id', parseInt(student_id));
    //         params.append('month', String(month));
    //         axios({
    //                 method: 'post',
    //                 url: '/admin/membership/edit',
    //                 data: params
    //             }).then(function(respornse) {
    //                 if (respornse.data == 'done') {
    //                     selectAlltdFromRow.eq(month_id).html('<span style="color:#EB5757;">---</span>');
    //                 }

    //             })
    //             .catch(function(error) {
    //                 console.log(error);
    //             });
    //     }

    // });

export default {
  name: "index",

  data() {
    return {
      dataTable: null,
      externalLoaded: false,
    };
  },
  mounted() {
    console.log("table mounted");
    if (this.dataTable === null) {
      this.onScriptLoaded();
    }
  },
  methods: {
    onScriptLoaded() {



      this.externalLoaded = true;
      console.log("script loaded");
      this.dataTable = $("#techno_table").DataTable({
        language: {
          search: '<strong style="padding:5px">البحث</strong>',
          searchPlaceholder: "بحث",
          paginate: {
            next: "التالي",
            previous: "السابق",
          },
        },
        columnDefs: [
          {
            targets: [-1],
            className: "hide_column",
          },
        ],
        ajax: "https://roadmapapi.ahmedhesham.systems/api/v1/techno/index",
        columns: [
          { data: "name",
          className: "techno_name" },
          { data: "des",
          className: "techno_descreption" },
          {
            data: "image",

          className: "techno_img",
            render: function (data, type, row, meta) {
              return type === "display"
                ? '<img style="width: 100px; height: 100px" class="rounded-circle" src="https://roadmapapi.ahmedhesham.systems/storage/' +
                    data +
                    '">'
                : data;
            },
          },
          { data: "field_id",
          className: "field_id d-none" },
          { data: "field.name"
         },
          //
          {
            data: null,
            className: "center",
            defaultContent: `<button style="
             padding: 0.5rem 1rem;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
  display: inline-block;
    background-color: #eb5757 !important;

  " class="delete_button" data-toggle="modal" data-target="#deleteElement">
      حذف
    </button>
    `,
          },
          {
            data: null,
            className: "center",
            defaultContent: `
    <button  style="
            padding: 0.5rem 1rem;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
    background-color: #3341ffd6 !important;
  display: inline-block;

  "class="edit_button" data-toggle="modal" data-target="#edittechno">
      تعديل
    </button>`,
          },
          {
            data: "id",
            render: function (data, type, row, meta) {
              return type === "display"
                ? '<span style="display: none;">' + data + "</span>"
                : data;
            },
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: #fd7b38;
$main-typo: #242424;
$main-background: rgba(253, 123, 56, 0.2);
// $main-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
$main-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
  0px 10px 32px -4px rgba(24, 39, 75, 0.1);

.table {
  margin: 1rem 0;
}

input {
  background-color: #f8f8f8 !important;
  border: none !important;
  color: $main-typo;
}
button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}
.ok-button {
  background-color: #27ae60;
}
.refuse-button,
.delete_button {
  background-color: #eb5757 !important;
}
.show-button {
  background-color: #0dcaf0;
}
.edit-button,
.edit_button {
  background-color: #3341ffd6 !important;
}
.hide_column {
  display: none;
}
</style>

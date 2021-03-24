<template>
  <div>
    <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-8 text-left container">
        
        <AddDepartment></AddDepartment>
        <DeleteDepartment/>
        <EditDepartment />
<DashboardDepartment></DashboardDepartment>
    </div>
    </div>
</div>
</template>

<script>
import DashboardDepartment from "@/components/DepartmentDashboard/DashboardDepartment"
import AddDepartment from "@/components/DepartmentDashboard/AddDepartmentModal";
import DeleteDepartment from "@/components/DeleteModal";
import EditDepartment from "@/components/DepartmentDashboard/EditDepartmentModal";


export default {
      middleware: "authenticated",
  layout: 'AsideLayout',

  components: {
DashboardDepartment,
AddDepartment,
DeleteDepartment,
EditDepartment,
  }
}
</script>


<style lang="scss" scoped>
.container {
  position: absolute;
  top: 1rem;
  right: 350px;
}
</style>

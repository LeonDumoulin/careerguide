<template>
  <div class="row">

        <div class="col-md-4"></div>

<div class="col-md-8 text-left container">
  <Delete></Delete>
  <EditFaculity></EditFaculity>
        <AddFaculity></AddFaculity>

<DashboardFac>

  </DashboardFac>
</div>
</div>
</template>

<script>

import DashboardFac from "@/components/FaculityDashboard/DashboardFac"
import AddFaculity from "@/components/FaculityDashboard/AddFaculityModal";
import Delete from "@/components/DeleteModal";
import EditFaculity from "@/components/FaculityDashboard/EditFaculityModal";




export default {
      middleware: "authenticated",
  layout: 'AsideLayout',

  components: {
DashboardFac,
AddFaculity,
Delete,
EditFaculity
  }
}
</script>


<style lang="scss" scoped>
$main-color: #fd7b38;
$main-typo: #242424;
$main-background: rgba(253, 123, 56, 0.2);
// $main-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
$main-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
  0px 10px 32px -4px rgba(24, 39, 75, 0.1);
.container {
  position: absolute;
  top: 1rem;
  right: 350px;
}
.inputs {
  margin: 0 0 5rem 0;
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
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none !important;
  background: url("@/assets/img/selectarrow.svg") $main-color no-repeat 0 !important; /* Better placement regardless of input width */
  background-color: #f8f8f8 !important;
  color: $main-typo;
  min-width: 3rem;
  text-align: right;
}
label {
  color: $main-color !important;
  font-weight: bold !important;
}
</style>

<template>
  <div class="row">

        <div class="col-md-4"></div>

<div class="col-md-8 text-left container">
  <Delete></Delete>
  <EditFild></EditFild>
        <AddFild></AddFild>

<FildFac>

  </FildFac>
</div>
</div>
</template>

<script>

import FildFac from "@/components/FildDashboard/FildFac"
import AddFild from "@/components/FildDashboard/AddFildModal";
import Delete from "@/components/DeleteModal";
import EditFild from "@/components/FildDashboard/EditFildModal";

export default {
  middleware: "authenticated",
  layout: 'AsideLayout',
  components: {
FildFac,
AddFild,
Delete,
EditFild
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

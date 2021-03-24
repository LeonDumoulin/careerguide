<template>
  <div class="row">

        <div class="col-md-4"></div>

<div class="col-md-8 text-left container">
  <Delete></Delete>
  <EditTech></EditTech>
        <AddTech></AddTech>

<TechFac>

  </TechFac>
</div>
</div>
</template>

<script>

import TechFac from "@/components/TechDashboard/TechFac"
import AddTech from "@/components/TechDashboard/AddTechModal";
import Delete from "@/components/DeleteModal";
import EditTech from "@/components/TechDashboard/EditTechModal";

export default {
  middleware: "authenticated",
  layout: 'AsideLayout',
  components: {
TechFac,
AddTech,
Delete,
EditTech
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

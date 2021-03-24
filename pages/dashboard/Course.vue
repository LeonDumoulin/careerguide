<template>
  <div class="row">

        <div class="col-md-4"></div>

<div class="col-md-8 text-left container">
  <Delete></Delete>
  <EditCourses></EditCourses>
        <AddCourses></AddCourses>

<CoursesFac>

  </CoursesFac>
</div>
</div>
</template>

<script>

import CoursesFac from "@/components/CoursesDashboard/CoursesFac"
import AddCourses from "@/components/CoursesDashboard/AddCoursesModal";
import Delete from "@/components/DeleteModal";
import EditCourses from "@/components/CoursesDashboard/EditCoursesModal";

export default {
  middleware: "authenticated",
  layout: 'AsideLayout',
  components: {
CoursesFac,
AddCourses,
Delete,
EditCourses
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

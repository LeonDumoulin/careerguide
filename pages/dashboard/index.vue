<template>
  <Login></Login>
</template>

<script>
import Login from "@/components/LoginDashboard"

export default {
    middleware: "notAuthenticated",

  components: {
    Login
  }
}
</script>

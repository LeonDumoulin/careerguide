<template>
  <aside class="col-md-2">
    <div class="logo">
      <p>logo</p>
    </div>
    <div class="main-pages">
      <ul class="text-left w-100">
        <li>
          <NuxtLink to="/dashboard/Faculity">
            <i class="fas fa-university"></i> الكلية</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/dashboard/Department">
            <i class="far fa-building"></i> القسم</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/dashboard/Field">
            <i class="fas fa-shield-alt"></i> المجال</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/dashboard/Technology">
            <i class="fas fa-microchip"></i> التكنولوجي</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/dashboard/Course">
            <i class="fas fa-chalkboard-teacher"></i> الكورسات</NuxtLink
          >
        </li>
          <li @click='logout'>
            <i class="fas fa-chalkboard-teacher"></i> تسجيل الخروج
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
export default {
  methods: {
    logout(){
      localStorage.clear()
      this.$router.push('/');
    }
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
aside {
  position: fixed !important;
  width: 200px;
  height: 200px;
  top: 0rem;
  right: 0rem;
  margin-right: 1.8rem;
  margin-top: 0.8rem;
  display: inline-block;
  height: 1045px;
  background: #ffffff;
  /* main shadow */
  overflow: auto;

  box-shadow: $main-shadow;
  border-radius: 10px;

  .logo {
    color: $main-typo;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 2;
  }

  .main-pages {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.5rem;
        color: #65676d;
        width: 100%;
        cursor: pointer;
        a {
          font-weight: bold;
          color: $main-typo;
          text-decoration: none;
          padding: 0.5rem 1rem;
          display: block;

          &.nuxt-link-active {
            color: $main-color;
            background-color: $main-background;
          }
        }
      }
      .collapse {
        margin-right: 2.5rem !important;
      }
      li.active {
        background: $main-background;
        color: $main-color;
      }
    }
  }
}
</style>

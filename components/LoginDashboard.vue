<template>
  <div class="login-clean">
    <form method="post">
      <div v-if="massage !== ''" class="alert alert-danger" role="alert">
        {{ massage }}
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="email"
          name="email"
          placeholder="Email"
          v-model="form.email"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="Password"
          v-model="form.password"
        />
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block" @click.prevent="performLogin">
          Log In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      massage: ""
    };
  },

  methods: {
    performLogin({ $axios }) {
      this.$axios.$post("/login", this.form).then(res => {
        console.log(res);
        if (res.massage == "تم تسجيل الدخول بنجاح") {
          const auth = {
            accessToken: res.data.token
          };
          this.$axios.setToken(res.data.token, 'Bearer')

          localStorage.setItem("auth", auth);
          localStorage.setItem("myToken", res.data.token);

          this.$router.push("/dashboard/Faculity");
        }

        this.massage = res.massage;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-clean {
  background: #f7f6f4;
  height: 100vh;
  position: relative;
}

.login-clean form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 320px;
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 4px;
  color: #505e6c;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

.login-clean .illustration {
  text-align: center;
  padding: 0 0 20px;
  font-size: 100px;
  color: #fd7b38;
}

.login-clean form .form-control {
  background: #f7f9fc;
  border: none;
  border-bottom: 1px solid #dfe7f1;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: inherit;
  text-indent: 8px;
  height: 42px;
}

.login-clean form .btn-primary {
  background: #fd7b38;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 26px;
  text-shadow: none;
  outline: none !important;
}

.login-clean form .btn-primary:hover,
.login-clean form .btn-primary:active {
  background: #eb3b60;
}

.login-clean form .btn-primary:active {
  transform: translateY(1px);
}

.login-clean form .forgot {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
}

.login-clean form .forgot:hover,
.login-clean form .forgot:active {
  opacity: 1;
  text-decoration: none;
}
</style>

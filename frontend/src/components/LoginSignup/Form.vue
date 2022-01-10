<template>
  <form>
    <div class="animated bounceInDown">
      <div class="container">
        <span class="error animated tada" id="msg"></span>
        <!-- Login animation -->
        <div class="form-structor">
          <div class="signup">
            <h2 class="form-title" id="signup"><span>or</span>Login</h2>
            <div class="form-holder">
              <input
                type="email"
                v-model="form.email"
                class="input"
                placeholder="Email"
                name="email"
              />
              <input
                :type="show === true ? 'text' : 'password'"
                class="input"
                id="pwd"
                v-model="form.password"
                placeholder="Password"
                name="password"
              />
              <i
                class="fas fa-eye show-icon"
                v-if="show"
                @click="show = !show"
              ></i>
              <i
                class="fas fa-eye-slash hide-icon"
                v-else
                @click="show = !show"
              ></i>
            </div>
            <label>
              <input type="checkbox" class="checkbox" />
              <span></span>
              <small class="rmb">Remember me</small>
            </label>
            <small
              ><a href="#" class="forgetpass"
                ><router-link to="/forgot_pwd">Forgot Password?</router-link></a
              ></small
            >
            <router-link to="/profile_completion">
            <BaseButton class="submit-btn" text="Login" @click="login()" /></router-link>
            <p>or</p>
            <div>
              <p>
                <img
                  src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                />
                Continue with google
              </p>
            </div>
          </div>
          <div class="login slide-up">
            <div class="center">
              <h2 class="form-title" id="login">
                <span>Don't have an account?</span>Sign up
              </h2>
              <div class="form-holder">
                <input
                  type="text"
                  class="input"
                  placeholder="Name"
                  v-model="form.username"
                  name="name"
                />
                <input
                  type="email"
                  class="input"
                  name="email"
                  placeholder="Email"
                  v-model="form.email"
                />
                <input
                  :type="show === true ? 'text' : 'password'"
                  class="input"
                  placeholder="Password"
                  v-model="form.password"
                />
                <i
                  class="fas fa-eye show-icon icon2"
                  v-if="show"
                  @click="show = !show"
                ></i>
                <i
                  class="fas fa-eye-slash hide-icon icon2"
                  v-else
                  @click="show = !show"
                ></i>
                <input
                  :type="show === true ? 'text' : 'password'"
                  class="input"
                  placeholder="Confirm Password"
                  v-model="form.confirm_password"
                />
                <i
                  class="fas fa-eye show-icon icon2"
                  v-if="show"
                  @click="show = !show"
                ></i>
                <i
                  class="fas fa-eye-slash hide-icon icon2"
                  v-else
                  @click="show = !show"
                ></i>
              </div>

              <BaseButton class="submit-btn" text="Sign up" @click="check()" />
              <div>
                <p>or</p>
                <p>
                  <img
                    src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                  />
                  Continue with google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import BaseButton from "../BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  name: "Form",
  data: () => {
    return {
      //
      form: {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },

  methods: {
    check() {
      axios
        .post("http://localhost:5000/login_signup", this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log(error);
        })
        .finally(() => {
          //Perform action in always
        });
    },
    login() {
      axios
        .post("http://localhost:5000/login_signup", this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log(error);
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },

  mounted() {
    console.clear();
    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");
    loginBtn.addEventListener("click", (e) => {
      let parent = e.target.parentNode.parentNode;
      Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
          // parent.classList.add("slide-up");
        } else {
          signupBtn.parentNode.classList.add("slide-up");
          parent.classList.remove("slide-up");
        }
      });
    });
    signupBtn.addEventListener("click", (e) => {
      let parent = e.target.parentNode;
      Array.from(e.target.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
          // parent.classList.add("slide-up");
        } else {
          loginBtn.parentNode.parentNode.classList.add("slide-up");
          parent.classList.remove("slide-up");
        }
      });
    });
  },
};
</script>

<style scoped>
.fas {
  position: absolute;
  left: 85%;
  top: 42%;
  color: #7f60eb;
  font-size: 20%x;
  cursor: pointer;
}

.icon2 {
  position: absolute;
  left: 85%;
  top: 54%;
  color: #7f60eb;
  font-size: 20%x;
  cursor: pointer;
}

/* .error {
  background: #ff3333;
  text-align: center;
  width: 337px;
  height: 20px;
  padding: 2px;
  border: 0;
  border-radius: 5px;
  margin: 10px auto 10px;
  position: absolute;
  top: 31%;
  left: 7.2%;
  color: white;
  display: none;
} */

.checkbox {
  margin-left: -45%;
  margin-top: 2%;
}
[type="checkbox"]:checked + span:before {
  /* <-- style its checked state */
  font-family: FontAwesome;
  font-size: 16px;
  content: "\f00c";
  position: absolute;
  top: -4px;
  color: white;
  left: -1px;
  width: 13px;
}
.rmb {
  position: absolute;
  margin-left: -1%;
  margin-top: 2%;
  color: #dfdeee;
  font-size: 13px;
}

a {
  color: white;
}

a:hover {
  text-decoration: underline;
  color: #3b476b;
}

.forgetpass {
  position: relative;
  float: right;
  right: 3%;
  margin-top: 2%;
  text-decoration: none;
  color: white;
}
.container {
  /* position: relative; */
  background-color: #6b92a4;
  border-radius: 15px;
  height: 550px;
  width: 350px;
  overflow: hidden;
  margin-left: 40%;
  margin: 0;
  top: 10%;
  left: 50%;
  margin-bottom: 50%;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
}
.form-structor::after {
  content: "";
  opacity: 0.3;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 500px;
}
.form-structor .signup {
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  width: 65%;
  z-index: 5;
  -webkit-transition: all 0.3s ease;
}
.form-structor .signup.slide-up {
  top: 5%;
  -webkit-transform: translate(-50%, 0%);
  -webkit-transition: all 0.3s ease;
}
.form-structor .signup.slide-up .form-holder,
.form-structor .signup.slide-up .submit-btn {
  opacity: 0;
  visibility: hidden;
}
.form-structor .signup.slide-up .form-title {
  font-size: 1em;
  cursor: pointer;
}
.form-structor .signup.slide-up .form-title span {
  margin-right: 5px;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}
.form-structor .signup .form-title {
  color: #fff;
  font-size: 1.7em;
  text-align: center;
}
.form-structor .signup .form-title span {
  color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease;
}
.form-structor .signup .form-holder {
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  margin-top: 50px;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}
.form-structor .signup .form-holder .input {
  border: 0;
  outline: none;
  box-shadow: none;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 8px 15px;
  border-bottom: 1px solid #eee;
  width: 100%;
  font-size: 12px;
}
.form-structor .signup .form-holder .input:last-child {
  border-bottom: 0;
}
.form-structor .signup .form-holder .input::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.form-structor .signup .submit-btn {
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.7);
  border: 0;
  border-radius: 15px;
  display: block;
  margin: 15px auto;
  padding: 15px 45px;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}
.form-structor .signup .submit-btn:hover {
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.8);
}
.form-structor .login {
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d8ebe4;
  z-index: 5;
  -webkit-transition: all 0.3s ease;
}
.form-structor .login::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -20px;
  -webkit-transform: translate(-50%, 0);
  background-color: #d8ebe4;
  width: 200%;
  height: 250px;
  border-radius: 50%;
  z-index: 4;
  -webkit-transition: all 0.3s ease;
}
.form-structor .login .center {
  position: absolute;
  top: calc(50% - 10%);
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  width: 65%;
  z-index: 5;
  -webkit-transition: all 0.3s ease;
}
.form-structor .login .center .form-title {
  color: #000;
  font-size: 1.7em;
  text-align: center;
}
.form-structor .login .center .form-title span {
  color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease;
}
.form-structor .login .center .form-holder {
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid #eee;
  overflow: hidden;
  margin-top: 50px;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}
.form-structor .login .center .form-holder .input {
  border: 0;
  outline: none;
  box-shadow: none;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 8px 15px;
  border-bottom: 1px solid #eee;
  width: 100%;
  font-size: 12px;
}
.form-structor .login .center .form-holder .input:last-child {
  border-bottom: 0;
}
.form-structor .login .center .form-holder .input::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.form-structor .login .center .submit-btn {
  background-color: #6b92a4;
  color: white;
  border: 0;
  border-radius: 15px;
  display: block;
  margin: 15px auto;
  padding: 15px 45px;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}
.form-structor .login .center .submit-btn:hover {
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.8);
}
.form-structor .login.slide-up {
  top: 90%;
  -webkit-transition: all 0.3s ease;
}
.form-structor .login.slide-up .center {
  top: 10%;
  -webkit-transform: translate(-50%, 0%);
  -webkit-transition: all 0.3s ease;
}
.form-structor .login.slide-up .form-holder,
.form-structor .login.slide-up .submit-btn {
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease;
}
.form-structor .login.slide-up .form-title {
  font-size: 1em;
  margin: 0;
  padding: 0;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
}
.form-structor .login.slide-up .form-title span {
  margin-right: 5px;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}
</style>

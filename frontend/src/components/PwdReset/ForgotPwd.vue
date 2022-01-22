<template>

  <div>
    <BgParticles />
    <div class="animated bounceInDown">
      <div class="container">
        <!-- Login animation -->
        <div class="form-structor">
          <div class="forgot">
            <h2 class="form-title" id="forgot"><span></span>Forgot Password</h2>
            <div class="form-holder">
              <input type="email" class="input" placeholder="Email"  v-model="email"/>
            </div>
              <BaseButton class="submitbtn" text="Send" @click="submit()" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import Swal from 'sweetalert2'
import axios from "axios";
import BgParticles from "../LoginSignup/BgParticles.vue";
import BaseButton from "../BaseButton.vue";
export default {

  components: {
    BgParticles,
    BaseButton,
  },
  name:"Form",
    data:()=>{
      return{
          email:"",
      };
    },
    methods:{
      submit() {
      var data={"email":this.email}
      axios
        .post("http://localhost:5000/forgot_pwd", data)
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
  // mounted() {
  //   console.clear();
  //   const submitbtn = document.getElementById("forgetpass");
  //   submitbtn.addEventListener("click", (e) => {
  //     let parent = e.target.parentNode.parentNode;
  //     Array.from(e.target.parentNode.parentNode.classList).find((element) => {
  //       if (element !== "slide-up") {
  //         // parent.classList.add("slide-up");
  //       } else {
  //         submitbtn.parentNode.classList.add("slide-up");
  //         parent.classList.remove("slide-up");
  //       }
  //     });
  //   });
    
  // },
};


  // mounted() {
  //   showAlert() {
  //     Swal.fire({
  //     title: 'Error!',
  //     text: 'Do you want to continue',
  //     icon: 'error',
  //     confirmButtonText: 'Cool'
  //   });
  // }

</script>

<style scoped>
.container {
  /* position: relative; */
  background-color: #6b92a4;
  border-radius: 15px;
  position: absolute;
  height: 270px;
  width: 380px;
  overflow: hidden;
  margin-left: 40%;
  margin: 0;
  top: 30%;
  left: 50%;
  
  text-align: center;
  transform: translateX(-50%);
  /* background-color: rgb(114, 115, 117); */
  /* border-radius: 9px; */
  /* border-top: 10px solid #79a6fe; */
  /* border-bottom: 10px solid #8BD17C; */
  /* width: 400px;
  height: 500px; */
  /* box-shadow: 1px 1px 108.8px 19.2px rgb(25,31,53); */
}

.form-structor::after {
  content: "";
  opacity: 0.3;
  /* position: absolute; */
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  background-repeat: no-repeat;
  /* background-position: left bottom; */
  background-size: 500px;
}
.form-structor .forgot {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  width: 65%;
  z-index: 5;
  /* -webkit-transition: all 0.3s ease; */
}
.form-structor .forgot .form-title {
  color: #fff;
  font-size: 1.7em;
  text-align: center;
}
.form-structor .forgot .form-title {
  color: rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.3s ease;
}
.form-structor .forgot .form-holder {
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  margin-top: 50px;
  opacity: 1;
  /* visibility: visible; */
  /* -webkit-transition: all 0.3s ease; */
}
.form-structor .forgot .form-holder .input {
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
/* .form-structor .forogt .form-holder .input::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.4);
} */
.form-structor .forgot .submitbtn {
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
.form-structor .forgot .submitbtn:hover {
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>

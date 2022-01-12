<template>
  <div>
  <BgParticles />
  <div class="animated bounceInDown">
  <div class="container">
    <div class="form-structor">
      <div class="forgot">
        <h2 class="form-title" id="forgot"><span></span>Reset Password</h2>
        <div class="form-holder">
          <input type="password" class="input" placeholder="New Password" />
          <input type="password" class="input" placeholder="Confirm Password" />
        </div>
        <BaseButton class="submit-btn" text="Reset Password" @click="reset()" />
      </div>
    </div>
  </div> 
</div>
  </div>
</template>

<script>
// import swal from 'sweetalert';
import BgParticles from '../LoginSignup/BgParticles.vue';
import BaseButton from '../BaseButton.vue';
export default {
  components: {
    BgParticles,
    BaseButton
  },
  methods: {
    reset() {
      alert("Password Reset");
    }
  }
}
</script>

<style scoped>
.container {
  /* position: relative; */
  background-color:#6B92A4;
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
.form-structor .forgot .submit-btn {
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
.form-structor .forgot .submit-btn:hover {
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
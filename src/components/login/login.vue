<template>
  <div class="row justify-content-center">
    <div class="col-5 mt-5">
      <div class="card">
        <div class="card-header bg-success text-center text-white">
          Login
        </div>
        <div class="card-body">
          <form @submit.prevent="onLogin">
            <div class="form-group">
              <label for="">Email</label>
              <input v-model='email' type="email" :class="clases" placeholder="Enter email">
              <div v-if="descriptionEmail" class="invalid-feedback">
                <span>{{ descriptionEmail }}</span>
              </div>
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input v-model='password' type="password" :class="['form-control', {'is-invalid':descriptionPassword}]" placeholder="Password">
              <div v-if="descriptionPassword" class="invalid-feedback">
                <span>{{ descriptionPassword }}</span>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <button type="submit"  class="btn btn-success">Entrar</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import UserService from '@/services/UserService';
const userService = new UserService();

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },
  computed: {
    descriptionEmail() {
      if(this.$v.email.$error){
        if(!this.$v.email.required)
          return "email requerido"
        else if(!this.$v.email.email)
          return "email invalido"
      }
    },
    descriptionPassword(){
      if(this.$v.password.$error){
        if(!this.$v.password.required)
          return "password requerido"
        else if(!this.$v.password.minLength)
          return "password demasiado corto"
      }
    },
    clases(){
      return [{'form-control':true},{'is-invalid':this.descriptionEmail}]
    }
  },
  methods: {
    onLogin() {
        console.log(process.env.NODE_ENV);
      this.$v.$touch();
      if (this.$v.$invalid) {return;}

      userService.sendRequest().then(res => {
      });
    }
  },
}
</script>

<style lang="">
    
</style>
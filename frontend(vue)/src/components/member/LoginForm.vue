<template>
<div>
  <Nav></Nav>
  <form>
    <div class="form-group">
      <label for="email">ID:</label>
      <input type="email" class="form-control" v-model="customerId" id="email" placeholder="Enter ID">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" v-model="password" id="pwd" placeholder="Enter password">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button class="btn btn-defult" @click="count">count</button>
    <button class="btn btn-defult" @click="deleteById">deleteById</button>
    <button class="btn btn-defult" @click="existsById">existsById</button>
    <button class="btn btn-defult" @click="findAll">findAll</button>
    <button class="btn btn-defult" @click="findById">findById</button>
    <button class="btn btn-defult" @click="save">save</button>
    <button class="btn btn-defult" @click="login">login</button>
  </form>
  <Footer></Footer>
</div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from'@/components/common/Footer.vue'
import axios from 'axios'

export default {
  data(){
    return{
      context: 'http://localhost:9000/customers',
      customerId: 'hong',
      customerName: '홍길동',
      password : '1234', 
      ssn : '123456-2345678', 
      phone : '010-4444-4444', 
      city : '서울', 
      address : '창동', 
      postalcode : '567-89', 
      photo : 'hong.jpg'
    }
  },

  components: {
    Nav, Footer
    },
  
  methods: {
    count() {
      axios.get(`${this.context}/count`)
      .then(res=>{
        alert(`count() SUCCESS : ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },

    deleteById() {
      axios.delete(`${this.context}/1`)
      .then(res=>{
        alert(`delete() SUCCESS : ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },

    existsById() {
      axios.get(`${this.context}/exists/1`)
      .then(res=>{
        alert(`existsById() SUCCESS : ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },

    findAll() {
      axios.get(`${this.context}`)
      .then(res=>{
        alert(`findAll() : ${res.data[0].customerName}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },

    findById() {
      axios.get(`${this.context}/1`)
      .then(res=>{
        alert(`findById()SUCCESS : ${res.data.customerName}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },

    save() {
      let data = {
        id : 40,
        customerId : this.customerId,
        customerName : this.customerName,
        password : this.password, 
        ssn : this.ssn, 
        phone : this.phone, 
        city : this.city, 
        address : this.address, 
        postalcode : this.postalcode, 
        photo : this.photo
      }
      let headers = {
        'Content-Type' : 'application/json',
        'Authorization' : 'JWT fefege..'
      }
      axios.post(`${this.context}`, JSON.stringify(data), {headers: headers})
      .then(res=>{
        alert(`SUCCESS : ${res.data}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    },

    login(){
      let data = {
        customerId : this.customerId,
        password : this.password
      }
      alert(this.customerId)
      alert(this.password)
      axios.get(`${this.context}/login`, `${this.customerId} ${this.password}`)
      .then(res=>{
        alert(`로그인 성공 : ${res.data.customerName}`)
      })
      .catch(e=>{
        alert('ERROR')
      })
    }
  }
}
</script>

<style scoped>
</style>
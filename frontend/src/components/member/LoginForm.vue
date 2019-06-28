<template>
<div>
  <Nav></Nav>
  <form>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button class="btn btn-defult" @click="get">조회</button>
    <button class="btn btn-defult" @click="post">입력</button>
    <button class="btn btn-defult" @click="put">수정</button>
    <button class="btn btn-defult" @click="del">삭제</button>
    <input type="submmit" v-model="submmit">
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
      context: 'http://localhost:9000',
      id :'',
      passeword : ''
    }
  },
    components: {
      Nav, Footer
    },

    methods: {
        get(){
          axios.get(`${this.context}/customers/count`)
          .then(res=>{
            alert(`SUCCESS : ${res.data}`)
          })
          .catch(e=>{
            alert('ERROR')
          })
        },

        submit(){
          var data = {
            id:this.id,
            passeord:this.passeword
          }
          axios.post(this.localhost + 'customers/join', data)
          .then(d=>{
            alert('SUCCESS' + d.data)
          }).catch(d=>{
            alert('ERROR');
          })
        },

        put(){
          axios.put('/customers/id')
          .then(d=>{
            alert(`PUT 연동 성공 : ${d.data.result}`)
          })
        },

        del(){
          axios.delete('/customers/id')
          .then(d=>{
            alert(`DELETE 연동 성공 : ${d.data.result}`)
          })
        }
    }
}
</script>

<style scoped>
</style>
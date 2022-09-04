<template>
  <!-- totalIncome is props in Header components and access it by :totalIncome -->
<Header :totalIncome="state.totalIncome" />
<form></form>
</template>
<script>
import {computed,reactive} from 'vue'
import Header from './components/Header'
import form from './components/form'
export default {
  components:{
    Header
  },
  setup() {
    const state=reactive({
      income:[{
        value:400
      }],
     
      totalIncome:computed(()=>{
        let temp=0
        if (state.income.length > 0){
          state.income.forEach(income=>{
            
            temp +=income.value
          })
        }
        return temp
      })
     })
    return{
      Header,
      form,
      state
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

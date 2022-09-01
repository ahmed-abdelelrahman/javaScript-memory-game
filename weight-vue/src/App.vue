<script setup>
import {ref,shallowRef,computed,watch,nextTick} from 'vue'
import Chart from 'chart.js/auto'
const weights=ref([])  
const weightChartE1=ref(null)
const weightChart=shallowRef(null)
const  weightInput=ref(60)
const currentWeight=computed(()=>{
  return weights.value.sort((a,b)=> b.date - a.date)
})
const addWeight=()=>{
  weights.value.push({
    weight:weightInput.value +=.1,
    
    date:new Date().getTime()
  })
}
watch(weights,newWeights=>{
  const ws=[...newWeights]
  if (weightChart.value) {
		weightChart.value.data.labels = ws
			.sort((a, b) => a.date - b.date)
			.map(weight => new Date(weight.date).toLocaleDateString() )
			.slice(-7)
		weightChart.value.data.datasets[0].data = ws
			.sort((a, b) => a.date - b.date)
			.map(weight => weight.weight)
			.slice(-7)
		weightChart.value.update()
		return
	}
  nextTick(()=>{
    weightChart.value=new Chart(weightChartE1.value.getContext('2d'),{
      type:'line',
      data:{
        labels:ws
        .sort((a,b)=>{a.date - b.date})
        .map(w=>new Date(w.date).toLocaleDateString()),
        datasets:[
          {
            label:'weight',
            data:ws.
            sort((a,b)=>a.date - b.date)
            .map(w=>new Date(w.date).toLocaleDateString()),
            backgroundColor:'red',
            borderColor:'black',
            borderwidth:1,
            fill:true
            
          }
        ]
      },
      options:{
        responsive:true,
        maintainAspectRatio:false
      }
    })
  })
},{deep:true})

</script>

<template>
<h1>weight Tracker</h1>
<div class="mt-5 text-bold text-xl mx-auto bg-green-200 border-2 border-black ">
  <span>{{weightInput}}</span>
  <small>Current Weight(kg)</small>

</div>

<form @submit.prevent="addWeight()" class='mt-3 mb-3'>
  <input type="number" step=".1" v-model="weightInput"/>
  <button type="submit" class='bg-red-500 mt-3' >add weight</button>
</form>
<div>
  <h1>last 7 days</h1>
  <div>
    <canvas ref="weightChartE1"></canvas>
  </div>
  <div>
    <h2 class="text-xl text-bold">weight history</h2>
    <ul>
      <li v-for="weight in weights">
        <span> {{weight.weight}}</span>
        <small>{{new Date(weight.date).toLocaleDateString()}}</small>
      </li>
    </ul>
  </div>
</div>
</template>

<style scoped>
</style>

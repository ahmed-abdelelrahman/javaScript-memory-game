<script setup>
import {ref,computed,onMounted} from 'vue'
const transcript=ref('')
const isRecording=ref(false)
const Recognation=window.SpeechRecognition ||window.webkitSpeechRecognition
const sr=new Recognation()

onMounted(()=>{
  sr.continuous=true;
  sr.interimResults=true

  sr.onstart=()=>{
    console.log('sr started')
    isRecording.value=true
  }
  sr.onend =()=>{
    console.log('sr stopped')
    isRecording.value=false
  }
  sr.onresult =(evt)=>{
    for ( let i ; i <= evt.length ; i++){
      const result=evt.results[i]
      if(result.isFinal) checkForCommand(result)
    }
    const t=Array.from(evt.results).map(result=>result[0]).map(result=>result.transcript).join('')
    transcript.value=t
  }
})
const checkForCommand=(result)=>{
  if(result[0].transcript.includes('Stop recording.')){
    sr.stop()
  }
}
const toggleMic=()=>{
  if(isRecording.value){
    sr.stop()
  } else{
    sr.start()
  }
}
</script>

<template>
<div class="app">
  <button :class="`mic`" @click="toggleMic">Record</button>
  <div class="transcript" v-text="transcript"></div>
</div>
</template>

<style >

</style>

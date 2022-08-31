<template>
    <header>
      <h1>My Music</h1>
    </header>
    <main>
      <section class="player">
        <h2 class="song-title">{{ current.title }} - <span>{{ current.artist }}</span></h2>
        <div class="mb-5">
          <button class="border-hidden px-16 py-3 bg-red-500" @click="prev">Prev</button>
          <button class="border-hidden px-16 py-3 bg-red-500" v-if="isplaying" @click="pause">pause</button>
          <button class="border-hidden px-16 py-3 bg-green-500" v-else  @click="play">play</button>
          <button class="border-hidden px-16 py-3 bg-red-500" @click="next">Next</button>
        </div>
      </section>
      <section class="playlist">
        <h3 class="text-blue-500">The Playlist</h3>
        <button v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
          {{ song.title }} - {{ song.artist }}
        </button>
      </section>
    </main>
  
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  data(){
    return{
    isplaying:false,
    index:0,
    current:{},
    songs:[
    {
      title:'neffex-grateful',
      src:require('../assets/neffex-grateful.mp3')      
    },
    {
      title:'src_assets_deaf-kev',
      src:require('../assets/src_assets_deaf-kev-invincible (1).mp3')

    }
    ],
    player:new Audio()

    }
     
  },
  methods:{
    play(song){
      if (typeof song.src !='undefined'){
        this.current=song
        this.player.src=this.current.src
      }
      this.player.play()
      this.player.addEventListener('ended',()=>{
        this.index ++
         if (this.index >this.songs.length){
        this.index =0
        }
        this.current=this.songs[this.index]
        this.play(this.current)

      })
      this.isplaying=true
    },
    next(){
      this.index++
      if (this.index >this.songs.length){
        this.index =0
      }
      this.current=this.songs[this.index]
      this.play(this.current)
      
    },
    prev(){
      this.index--
      if (this.index < 0){
        this.index =this.songs.length -1
      }
      this.current=this.songs[this.index]
      this.play(this.current)
    },
    pause(){
      this.player.pause()
      this.isplaying=false
           
    }
  },
  created(){
    this.current=this.songs[this.index]
    this.player.src=this.current.src
  }

}
</script>

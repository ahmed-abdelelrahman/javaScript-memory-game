<template>
 <div class="home">
  <!-- card -->
  <div>
    <!-- router link to movie/tt0409591 -->
    <img src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg" alt="naruto poster"/>
    <!-- details -->
    <div>
       <h3>Naruto</h3>
          <p>Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.</p>
    </div>
  </div>
  <!-- form for search of movie -->
  <form @submit.prevent="searchMovies()">
    <!-- fetch api -->
    <input type="text" placeholder="search for movie" v-model="search" >
    <button type="submit">search</button>
  </form>
  <div v-for="movie in movies" :key="movie.impdID">
  {{movie}}
    <router-link :to="'/movie/' + movie.impdID">
      <h2>{{movie.Title}}</h2>
      <span>{{movie.Year}}</span>
      <img :src= movie.Poster />
    </router-link>
    
  </div>
 </div>
</template>

<script>
import {ref} from 'vue'
import env from '@/env.js'
export default {
  name: 'HomeView',
  
  setup(){
    const search=ref('')
    const movies=ref([])
    // searchMovies
    const searchMovies=()=>{
      if (search.value != 0){
      fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
      .then(res=>res.json())
      .then(data=>movies.value =data.Search)
      search.value =''
      }
    }
    
  return{searchMovies,search,movies}
  }
  
}
</script>

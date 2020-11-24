<template>
  <div class="about" >

    <nav id="header" class="w-full z-10 pin-t">

    	<div id="progress" class="h-1 z-20 pin-t" style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>

    		<div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3  px-4" style="background-color:#111;">

    			<div class="pl-4">
    				<a class="text-black text-base no-underline hover:no-underline font-extrabold text-xl text-yellow-400"  href="#">
    					Ethereum Space War Wiki
    				</a>
          </div>


          <div class="pl-4">
            <form v-on:submit.prevent="onSearchSubmit()">
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="query" type="text" placeholder="Search..." v-model="searchQuery">
             </form>
          </div>


    		</div>
    	</nav>




      <div class="flex mb-4   " style="min-height:450px">
        <div class="w-1/3 bg-gray-800 overflow-y-scroll text-white ">
          <div class="m-6 p-4 bg-gray-900">

            <ul>
              <li> <a href="#" @click="setPaneContent('wikihome')"> Wiki Home </a> </li>
              <li> <a href="#" @click="setPaneContent('solarsystems')"> Solarsystems </a> </li>
              <li> <a href="#" @click="setPaneContent('ships')"> Ships </a> </li>
              <li> <a href="#" @click="setPaneContent('items')"> Items </a> </li>
          </ul>

          </div>
        </div>
        <div class="w-2/3 bg-gray-800 text-white " >
          <div class="m-6 p-4 bg-gray-900">

            <WikiContentPane

            ref="wikicontentpane"
            />




          </div>
        </div>
      </div>

      <Footer />

  </div>
</template>


<script>

//import  MarkdownIt  from 'markdown-it';
//import hljs from 'highlight.js'

import Vue from 'vue'
import WikiContentPane from './wiki/WikiContentPane.vue'
import Footer from './Footer.vue'

export default {
  name: 'Wiki',
  props: [],
  components:{Footer,WikiContentPane},
  data() {
    return {

      searchQuery: null
    }
  },
  mounted(){
    Vue.nextTick(function () {
      this.setPaneContent(this.$route.params.query)

    }.bind(this))

  },
  watch: {
    $route(to, from) {
      Vue.nextTick(function () {
        this.setPaneContent(this.$route.params.query)

      }.bind(this))

      // react to route changes...
    }
  },
  methods: {

    setPaneContent (contentName) {
      if(this.$refs.wikicontentpane && contentName){
        this.$refs.wikicontentpane.setContent( contentName )

      }

    },



    onSearchSubmit (){
      this.handleSearchQuery( this.searchQuery )


      this.searchQuery = null
    },

    handleSearchQuery(query){
      console.log('on search submit ', query)

      this.$router.push ( '/wiki/'.concat(query))

    }
  }
}
</script>

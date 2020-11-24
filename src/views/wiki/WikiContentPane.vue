<template>
  <div class="wiki-content" >

    <h3 class="text-lg"> {{loadedContent.title}}   </h3>
    <br>

    <div v-if="loadedContent.paragraphs" v-for="paragraph in loadedContent.paragraphs" >
     <p>  {{paragraph}}  </p>

    </div>


    <div  v-if="loadedContent.linkarray" v-for="linkitem in loadedContent.linkarray" >

        <span class="cursor-pointer font-semibold text-yellow-400 hover:underline" @click="navigateToContent(linkitem.query)">  {{linkitem.name}} </span>

    </div>





  </div>
</template>


<script>

import WikiContentBuilder from './WikiContentBuilder'

export default {
  name: 'WikiContentPane',
  props: [],
  components:{ },
  data() {
    return {
      activeContent: 'wikihome',
      loadedContent: {}

    }
  },
  mounted(){
      this.setContent('wikihome')
  },
  methods: {

    setContent (contentName) {
      console.log('set content', contentName)

      this.activeContent = contentName

      this.loadedContent = WikiContentBuilder.getContentByName( contentName )
    },

    navigateToContent(query){

        this.$router.push ( '/wiki/'.concat(query))

    }

  }
}
</script>

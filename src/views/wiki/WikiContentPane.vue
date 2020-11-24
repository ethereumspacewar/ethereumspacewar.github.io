<template>
  <div class="wiki-content" >

    <h3 class="text-lg"> {{loadedContent.title}}   </h3>
    <br>

    <div v-for="paragraph in loadedContent.paragraphs" >
     <p>  {{paragraph}}  </p>

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
    }
  }
}
</script>

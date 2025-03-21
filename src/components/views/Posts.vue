<template>
  <div>
    <ul>
      <li v-for="post in posts">
        {{ post.title }} by {{ post.author }} posted on {{ post.dateCreated }}
      </li>
  </ul>

  <form @submit.prevent="submitPost">
      <input type="text" v-model="newPostTitle" placeholder="title"/>
      <input type="text" v-model="newPostAuthor" placeholder="your name"/>
      <textarea type="text" v-model="newPostContent" placeholder="post content"/>
      <button type="submit">Submit</button>
  </form>
  </div>
</template>

<script>
import postsData from '../../posts.json'

export default {
  data() {
    return {
      posts: postsData,
      newPostTitle: '',
      newPostAuthor: '',
      newPostContent: ''
    }
  },
  computed: {
    postCount() {
      return this.posts.length
    }
  },
  methods: {
    currentDate() {
      const current = new Date()
      const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`
      return date
    },
    submitPost: function() {
      const newPost = {
        id: this.postCount + 1,
        title: this.newPostTitle,
        author: this.newPostAuthor,
        content: this.newPostContent,
        dateCreated: this.currentDate()
      }

      this.posts.push(newPost)
      console.log(JSON.stringify(newPost))
        
      // clear form variables
      this.newPostTitle = ''
      this.newPostAuthor = ''
      this.newPostContent = ''
   }
  }
}
</script>

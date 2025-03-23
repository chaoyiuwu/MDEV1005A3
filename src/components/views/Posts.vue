<template>
  <div class="PostsContainer">
  <ul>
      <li v-for="post in posts">
        <span>{{ post.title }} by {{ post.author }} posted on {{ post.dateCreated }}</span>
      </li>
  </ul>

  <form @submit.prevent="submitPost">
      <input type="text" v-model="newPostTitle" placeholder="title"/>
      <input type="text" v-model="newPostAuthor" placeholder="your name"/>
      <textarea type="text" v-model="newPostContent" placeholder="post content"/>
      <button  class="SubmitPostButton" type="submit">Submit</button>
  </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useCollection } from 'vuefire'
import { firebaseApp } from '@/firebaseApp'

const db = getFirestore(firebaseApp)
const postsRef = collection(db, 'posts')
const posts = useCollection(postsRef)

const newPostTitle = ref('')
const newPostAuthor = ref('')
const newPostContent = ref('')

const currentDate = () => {
  const current = new Date()
  return `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`
};

const submitPost = async () => {
  const newPost = {
    title: newPostTitle.value,
    category: 'misc',
    author: newPostAuthor.value,
    content: newPostContent.value,
    dateCreated: currentDate(),
  }

  const docRef = await addDoc(postsRef, newPost)
  console.log(`new data: ${JSON.stringify(newPost)} new doc id: ${docRef.id}`)

  // Clear form variables
  newPostTitle.value = ''
  newPostAuthor.value = ''
  newPostContent.value = ''
};
</script>

<style scoped>
.PostsContainer {
  margin-top:100px;
}

.SubmitPostButton{
  margin-left: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background-color:#ADD8E6;
  border-radius: 7%;
  border-color:#ADD8E6;
}
</style>

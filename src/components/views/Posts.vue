<template>
  <div class="PostsContainer">
  <ol>
      <li v-for="post in posts">
        <div class="PostTitle" >{{ post.title }}</div>
        <div class="PostCat"> Category: {{ post.category }} </div>
        <div> {{ post.content }} </div>
        <!--button id="show-modal" v-on:click="showDetails(post)">Additional Info</button-->
          <button id="show-modal" v-on:click="showDetails(post)">Additional Info</button>
      </li>
      <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Custom Header</h3>
      </template>
    </modal>
  </Teleport>
  </ol>
  
  <form @submit.prevent="submitPost">
      <input type="text" v-model="newPostTitle" placeholder="title"/>
      <input type="text" v-model="newPostAuthor" placeholder="your name"/>
      <textarea type="text" v-model="newPostContent" placeholder="post content"/>
      <button  class="SubmitPostButton" type="submit">Submit</button>
  </form>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
    components: {
        Modal,
    },
    data() {
        return {
            product: null,
            products: [],
            showModal: false,
        };
    },
    methods: {
        showDetails(product) {
            this.product = product;
            this.showModal = true;
        },
    },
};
</script>
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

.PostTitle{
  font-size: 25px;
  font-weight: bold;
}

.PostCat{
  font-size: 10px;
}

li{
  background-color: green;
  
  padding: 5px;
  margin:5px;
}
</style>


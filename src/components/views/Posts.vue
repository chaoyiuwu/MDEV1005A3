<template>
  <div class="PostsContainer">
    <ol>
      <li v-for="post in posts" :key="post.id">
        <div class="PostTitle">{{ post.title }}</div>
        <div class="PostCat">Category: {{ post.category }}</div>
        <div>{{ post.content }}</div>
        <button id="show-modal" @click="showDetails(post)">Additional Info</button>
      </li>
    </ol>
    
    <Teleport to="body">
      <Modal :show="showModal" :post="selectedPost" @close="showModal = false" />
    </Teleport>
    
    <form @submit.prevent="submitPost">
      <input type="text" v-model="newPostTitle" placeholder="title" />
      <input type="text" v-model="newPostAuthor" placeholder="your name" />
      <textarea class="contentInput" v-model="newPostContent" placeholder="post content"></textarea>
      <button class="SubmitPostButton" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import Modal from './Modal.vue';
import { ref } from 'vue';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useCollection } from 'vuefire';
import { firebaseApp } from '@/firebaseApp';

export default {
  components: { Modal },
  setup() {
    const db = getFirestore(firebaseApp);
    const postsRef = collection(db, 'posts');
    const posts = useCollection(postsRef);

    const newPostTitle = ref('');
    const newPostAuthor = ref('');
    const newPostContent = ref('');
    const showModal = ref(false);
    const selectedPost = ref(null);

    const currentDate = () => {
      const current = new Date();
      return `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    };

    const showDetails = (post) => {
      selectedPost.value = post;
      showModal.value = true;
    };

    const submitPost = async () => {
      const newPost = {
        title: newPostTitle.value,
        category: 'misc',
        author: newPostAuthor.value,
        content: newPostContent.value,
        dateCreated: currentDate(),
      };

      const docRef = await addDoc(postsRef, newPost);
      console.log(`New post: ${JSON.stringify(newPost)}, Doc ID: ${docRef.id}`);

      newPostTitle.value = '';
      newPostAuthor.value = '';
      newPostContent.value = '';
    };

    return { posts, newPostTitle, newPostAuthor, newPostContent, showModal, selectedPost, showDetails, submitPost };
  }
};
</script>

<style scoped>
.PostsContainer {
  margin-top: 100px;
}

.SubmitPostButton {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.contentInput {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.PostTitle {
  font-size: 25px;
  font-weight: bold;
}

.PostCat {
  font-size: 10px;
}

li {
  background-color: #4CAF50;
  padding: 5px;
  margin: 5px;
  border-radius: 4px;
}
</style>


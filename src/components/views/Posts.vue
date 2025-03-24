<template>
    <div class='flex flex-col w-full pb-10'>
        <div class='PostsContainer'>
            <input type="text" v-model="searchQuery" placeholder="Search posts by Title or Content..." 
            class="searchInput" />
            <ol>
                <li v-for="post in posts" :key="post.postId"
                class='marginBottom bg-emerald-600 text-slate-900 rounded shadow p-5'>
                <div class="PostTitle" >{{ post.title }}</div>
                <div class="PostCat"> Category: {{ post.category }} </div>
                <div> {{ post.content }} </div>
                <button id="show-modal" @click="showDetails(post)"
                class='italic underline text-stone-700 hover:text-indigo-800'>
                Additional Info</button>
                </li>
            </ol>
            <Teleport to="body">
                <Modal :show="showModal" :post="selectedPost" @close="showModal = false" />
            </Teleport>
        </div>
  
      
            <form @submit.prevent="submitPost">
                <div class='FormContainer'>
                    <input 
                    class='marginBottom shadow border rounded w-full py-2 px-3 focus:shadow-outline'
                    type="text" v-model="newPostTitle" placeholder="title"/>
                    <input
                    class='marginBottom shadow border rounded w-full py-2 px-3 focus:shadow-outline'
                    type="text" v-model="newPostAuthor" placeholder="your name"/>
                    <input
                    class='marginBottom shadow border rounded w-full py-2 px-3 focus:shadow-outline'
                    type="text" v-model="newPostCat" placeholder="category"/>
                    <textarea rows="4"
                    class='marginBottom w-full bg-stone-50 text-black rounded-lg p-2.5'
                    type="text" v-model="newPostContent" placeholder="post content"/>
                    <div 
                    class="flex flex-row justify-around">
                        <button 
                        class='py-2 px-6 bg-emerald-900 hover:bg-emerald-800 rounded focus:shadow-outline focus:outline-none text-white text-sm' 
                        type="submit">Submit</button>
                        <button
                        class="py-2 px-3 bg-transparent hover:bg-zinc-800 rounded"
                        v-click="clearForm">Clear Form
                    </button>
                    </div>
                </div>
            </form>
        
        
    </div>
</template>

<script>
import Modal from './Modal.vue';
import { ref, computed } from 'vue';
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
    const newPostCat = ref('');
    const showModal = ref(false);
    const selectedPost = ref(null);
    const searchQuery = ref('');

    const currentDate = () => {
      const current = new Date();
      return `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    };

    const showDetails = (post) => {
      selectedPost.value = post;
      showModal.value = true;
    };

    const clearForm = () => {
      newPostTitle.value = '';
      newPostAuthor.value = '';
      newPostContent.value = '';
      newPostCat.value = '';
    };

    const submitPost = async () => {
      const newPost = {
        title: newPostTitle.value,
        category: newPostCat.value,
        author: newPostAuthor.value,
        content: newPostContent.value,
        dateCreated: currentDate(),
      };

      const docRef = await addDoc(postsRef, newPost);
      console.log(`New post: ${JSON.stringify(newPost)}, Doc ID: ${docRef.id}`);

      clearForm();
    };

    const filteredPosts = computed(() => {
      return posts.value.filter(post =>
        post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    return { posts, newPostTitle, newPostAuthor, newPostContent, showModal, selectedPost, showDetails, submitPost, searchQuery, filteredPosts };
  }
};
</script>

<style scoped>
.PostsContainer {
    width: 100%;
    margin-bottom: 10px;
}

.FormContainer {
    max-width: 60%;
    margin: auto;
}

.searchInput {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
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

.marginBottom {
  margin-bottom: 10px;
}
</style>


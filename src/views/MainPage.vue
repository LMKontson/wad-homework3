<template>
    <div class="main-container">
        <div class="posts-container">
            <UserPost v-for="post in allPosts" :key="post.id" :id="post.id" />
            <button @click="resetLikes" id="reset-button">
                Reset Likes
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UserPost from '@/components/UserPost.vue';

export default {
    components: { UserPost },
    computed: {
        ...mapGetters(['allPosts'])
    },
    methods: {
        ...mapActions(['resetLikes'])
    }
};
</script>

<style scoped>
body {
    padding: 0;
    margin: 0;
}

.main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}

.posts-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 66%;
    box-sizing: content-box;
    align-items: center;
    font-size: 25px;
    padding: 2% 0;
}

#reset-button {
    font-size: 0.7em;
    width: 110px;
    height: 35px;
}

@media screen and (max-width: 900px) {
    .posts-container {
        width: 100%;
        font-size: 20px;
    }

    .posts-container .post {
        width: 75%;
    }
}
</style>
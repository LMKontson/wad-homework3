<template>
    <div class="post">
        <div class="post-header-container">
            <div class="post-author-container">
                <img class="post-profile" :src="post.profileImage">
                <div class="post-author">{{ post.author }}</div>
            </div>
            <div class="post-time">{{ formattedTime }}</div>
        </div>
        <img class="post-image" v-if="post.image" :src="post.image">
        <div class="post-footer-container">
            <div class="post-message">{{ post.message }}</div>
            <button @click="likePost(post.id)" class="post-thumbsup">👍 {{ post.likes }}</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "UserPost",
    props: {
        id: Number
    },
    computed: {
        ...mapGetters(['allPosts']),
        post() {
            return this.allPosts.find(p => p.id == this.id);
        },

        formattedTime() {
            const date = new Date(this.post.time);

            return new Intl.DateTimeFormat("en-GB", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }).format(date);
        }
    },
    methods: {
        ...mapActions(['likePost'])
    }
};
</script>

<style scoped>
.post {
    margin-bottom: 3%;
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 1%;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0.75rem 1rem 1rem 1rem;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.post-header-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.post-header-container .post-profile {
    height: 30px;
    width: 30px;
    border: 0px solid;
    border-radius: 15px;
}

.post-image {
    margin: 2% 0;
    width: 100%;
    border-radius: 5px;
    object-fit: contain;
}

.post-footer-container {
    display: flex;
    flex-direction: column;
    width: 100%
}

.post-author-container {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
}

.post-thumbsup {
    font-size: 0.7em;
    width: 75px;
    height: 35px;
}

.post-message {
    text-align: left;
    margin: 1% 0;
}

.post-author {
    font-size: 0.7em;
    align-self: center;
    font-weight: bold;
    color: #333;
}

.post-time {
    font-size: 0.7em;
    color: #888;
    align-self: center;
}
</style>
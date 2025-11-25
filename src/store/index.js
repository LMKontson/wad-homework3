import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        author: "Alice Johnson",
        profileImage: "https://placehold.co/50x50",
        time: "2025-10-28T09:15:00Z",
        message: "Anyone knows in which room is the lab today?",
        image: "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg",
        likes: 0,
      },
      {
        id: 2,
        author: "Brian Smith",
        profileImage: "https://placehold.co/50x50",
        time: "2025-10-29T11:30:00Z",
        message: "Project meeting moved to 3 PM.",
        image: "",
        likes: 0,
      },
      {
        id: 3,
        author: "Charlie Lee",
        profileImage: "https://placehold.co/50x50",
        time: "2025-10-30T14:00:00Z",
        message: "New coffee machine in the break room!",
        image: "https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg",
        likes: 0,
      },
      {
        id: 4,
        author: "Diana Carter",
        profileImage: "https://placehold.co/50x50",
        time: "2025-10-30T17:00:00Z",
        message: "Reminder: Submit your weekly reports.",
        image: "",
        likes: 0,
      },
      {
        id: 5,
        author: "Evan Moore",
        profileImage: "https://placehold.co/50x50",
        time: "2025-10-31T08:45:00Z",
        message: "Halloween office photos uploaded!",
        image: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg",
        likes: 0,
      },
      {
        id: 6,
        author: "Fiona Blake",
        profileImage: "https://placehold.co/50x50",
        time: "2025-10-31T09:10:00Z",
        message: "Anyone up for lunch at noon?",
        image: "",
        likes: 0,
      },
      {
        id: 7,
        author: "George Miller",
        profileImage: "https://placehold.co/50x50",
        time: "2025-10-31T10:30:00Z",
        message: "Server maintenance tonight 10 PM.",
        image: "",
        likes: 0,
      },
    ]
  },

  mutations: {
    INCREMENT_LIKE(state, postId) {
      const post = state.posts.find(p => p.id === postId);
      if (post) post.likes++;
    },
    RESET_LIKES(state) {
      state.posts.forEach(p => p.likes = 0);
    }
  },

  actions: {
    likePost({ commit }, postId) {
      commit('INCREMENT_LIKE', postId);
    },
    resetLikes({ commit }) {
      commit('RESET_LIKES');
    }
  },

  getters: {
    allPosts: state => state.posts
  }

});
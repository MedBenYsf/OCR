<template>
  <div class="form-group">
    <button v-on:click="logOut()" id="logOut" name="logOut" class="btn btn-danger">Se déconnecter</button>
    <button
      v-on:click="redirection()"
      id="create"
      name="create"
      class="btn btn-primary"
    >Partager un post</button>
    <div class="content-post">
      <h1>Articles partagés par vos collègues</h1>
      <div class="posts">
        <div v-for="Post in Posts" :key="Post" class="post" v-on:click="article(Post.id)">
          <h3>{{Post.userPseudo}}</h3>
          <h3>{{Post.title}}</h3>
          <p>{{Post.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Posts: null
    };
  },
  mounted() {
    axios.defaults.headers["Authorization"] = "Bearer " + localStorage.getItem('authToken');
    axios
      .get("http://localhost:7070/api/posts", this.Posts)
      .then(response => {
        this.Posts = response.data;
        console.log(this.Posts);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  methods: {
    logOut() {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.clear();
      this.$router.push("/login");
    },
    redirection() {
      this.$router.push("/create");
    },
    article(postId) {
      this.$router.push(`/post/${postId}`);
    }
  }
};
</script>

<style scoped lang="scss">
.content-post {
  h1 {
    font-size: 3rem;
    color: #1f3150;
    text-decoration: underline #d1515a;
  }
  .posts {
    width: 60%;
    text-align: center;
    margin: auto;
  }
  .post {
    border: 2px solid #d1515a;
    border-radius: 1rem;
    margin: 4rem;
    h2 {
      text-decoration: underline;
    }
  }
}
</style>

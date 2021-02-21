<template>
  <div class="article">
    <button v-on:click="logOut()" id="logOut" name="logOut" class="btn btn-danger">Se déconnecter</button>
    <button
      v-on:click="redirection()"
      id="create"
      name="create"
      class="btn btn-primary"
    >Partager un post</button>
    <div class="postUnique">
      <h1>{{post.userPseudo}}</h1>
      <h1>{{post.title}}</h1>
      <p>{{post.content}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {}
    };
  },
  mounted() {
    axios.defaults.headers["Authorization"] = "Bearer " + localStorage.getItem('authToken');
    axios
      .get(`http://localhost:7070/api/posts/${this.$route.params.id}`)
      .then(response => {
        console.log('response ===>', response.data)
        this.post = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    logOut() {
      delete axios.defaults.headers.common["Authorization"];
      this.$router.push("/login");
    },
    redirection() {
      this.$router.push("/create");
    }
  }
};
</script>

<style scoped lang="scss">
</style>
<template>
    <div>
        <b-container fluid id="post-container">
            <b-row>
                <b-col v-for="(post, index) in posts" :key="post.id + '_' + index">
                    <div>
                        <b-card :title="post.title"
                                
                                img-alt="Image"
                                img-top
                                tag="article"
                                class="mb-2">
                            <p class="card-text">{{ post.content.substr(0, 25) }}</p>
                            <router-link :to="'/blog/' + post.id">
                                <b-button variant="primary">Read more</b-button>
                            </router-link>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Blog",
  data () {
      return {
          posts: []
      }
  },
  methods: {
      getPosts() {
        axios.get("https://www.googleapis.com/blogger/v3/blogs/3718528386733712897/posts?key=AIzaSyBo5pgRY0B9N2gcmTqy3fV6krrZJ5_qmTY")
            .then((res) => this.posts = res.data.items)
            .catch((err) => console.error(err))
      }
    },
    created() {
      this.getPosts()
    }
}
</script>

<style>
#post-container {
    margin-bottom: 100px;
}
</style>
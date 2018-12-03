<script>
  import axios from "axios"

    export default {
      name: 'BlogPost',
      data() {
        return {
          post: {
            title: ""
          }
        }
      },
      methods: {
        getPost() {
          axios.get(`https://www.googleapis.com/blogger/v3/blogs/3718528386733712897/posts/${this.$route.params.slug}?key=AIzaSyBo5pgRY0B9N2gcmTqy3fV6krrZJ5_qmTY`)
            .then((res) => {console.log(res); this.post = res.data})
            .catch((err) => console.error(err))
        }
      },
      watch: {
        $route(to, from) {
          this.getPost()
        }
      },
      created() {
        this.getPost()
      }
    }
</script>

<template>
  <div id="blog-post">
    <h1>{{ post.title }}</h1>
    <div v-html="post.content"></div>
  </div>
</template>
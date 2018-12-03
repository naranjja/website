<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <div v-for="(post, index) in posts" :key="post.slug + '_' + index">
        <router-link :to="'/blog/' + post.slug">
          <article class="media">
            <figure>
              <img v-if="post.featured_image" :src="post.featured_image" alt="">
              <img v-else src="http://via.placeholder.com/250x250" alt="">
            </figure>
            <h2>{{ post.title }}</h2>
            <p>{{ post.summary }}</p>
          </article>
        </router-link>
      </div>
  </div>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('3695e381969b2b89e271408c399f7f076b099e64');

export default {
  name: "Blog",
  data () {
      return {
          pageTitle: "Blog",
          posts: []
      }
  },
  methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then(res => {
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
    }
}
</script>

<style>
</style>
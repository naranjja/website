<template>
    <div>
        
        <b-container fluid id="post-container">
            <b-row>
                <b-col v-for="(post, index) in posts" :key="post.slug + '_' + index">
                    <div>
                        <b-card :title="post.title"
                                :img-src="post.featured_image"
                                img-alt="Image"
                                img-top
                                tag="article"
                                class="mb-2">
                            <p class="card-text">{{ post.summary }}</p>
                            <router-link :to="'/blog/' + post.slug">
                                <b-button variant="primary">Read more</b-button>
                            </router-link>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        
        <b-navbar fixed="bottom" type="dark" variant="dark">
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="https://buttercms.com">This blog was created using the wonderful <img src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo" width="140"></b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('3695e381969b2b89e271408c399f7f076b099e64');

export default {
  name: "Blog",
  data () {
      return {
          posts: []
      }
  },
  methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 5
        }).then(res => {
          this.posts = res.data.data
          console.log(res)
        })
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
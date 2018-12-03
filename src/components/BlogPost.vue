<script>
    import Butter from 'buttercms';
    const butter = Butter('3695e381969b2b89e271408c399f7f076b099e64');
    export default {
      name: 'BlogPost',
      data() {
        return {
          post: {
            data: {
              title: "",
            },
            meta: {
              previous_post: {
                slug: ""
              },
              next_post: {
                slug: ""
              },
            }
          }
        }
      },
      methods: {
        getPost() {
          butter.post.retrieve(this.$route.params.slug)
            .then(res => {
              this.post = res.data
            }).catch(res => {
              console.log(res)
            })
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
    <h1>{{ post.data.title }}</h1>
    <div v-html="post.data.body"></div>

    <router-link v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug" class="button">
      <span><< </span>{{ post.meta.previous_post.title }}
    </router-link>

    <router-link v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="button">
      {{ post.meta.next_post.title }}<span> >></span>
    </router-link>
  </div>
</template>
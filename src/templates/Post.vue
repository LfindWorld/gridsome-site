<template>
  <Layout bgUrl="/img/post-bg.jpg">
  <template v-slot:headerContent>
      <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="post-heading">
                  <h1>Man must explore, and this is exploration at its greatest</h1>
                  <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
                  <span class="meta">
                      Posted by
                      <a href="#!">Start Bootstrap</a>
                      on August 24, 2021
                  </span>
              </div>
          </div>
      </div>
    </template>
    <!-- Post Content-->
    <article class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <h1>{{ $page.post.title }}</h1>
                    <p>
                      <span class="tag" v-for="item in $page.post.tags" :key="item.id">
                        {{item.name}}
                      </span>
                    </p>
                    <img :src="$page.post.image.url" alt="">
                    <p>{{ $page.post.content }}</p>
                </div>
            </div>
        </div>
    </article>


  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: strapiPost(id: $id) {
    id
    title
    content
    tags {
      name
      id
    }
    image {
      url
    }
  }
}
</page-query>
<script>
export default {
  name: 'PostIndex',
};

</script>
<style scoped>
.tag {
  background-color: #ccc;
  margin-right: 20px;
}
</style>

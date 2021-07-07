<template>
  <Layout bgUrl="/img/home-bg.jpg">
    <template v-slot:headerContent>
      <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                  <h1>Clean Blog</h1>
                  <span class="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
          </div>
      </div>
    </template>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div v-for="item in $page.posts.edges" :key="item.node.id">
                  <!-- Post preview-->
                  <div class="post-preview">
                      <g-link :to="item.node.path">
                          <h2 class="post-title">{{item.node.title}}</h2>
                      </g-link>
                      <p class="post-meta">
                          Posted by
                          <span>{{item.node.created_at}}</span>
                      </p>
                  </div>
                  <hr class="my-4" />
                </div>
            </div>
        </div>
    </div>

  </Layout>
</template>


<page-query>
  query {
    posts: allStrapiPost {
      edges {
        node {
          id
          title
          created_at
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

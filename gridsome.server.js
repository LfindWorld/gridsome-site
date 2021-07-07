// gridsome.server.js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    // const collection = actions.addCollection('Post')

    // const { data } = await axios.get('http://42.240.132.119:1337/posts')

    // for (const item of data) {
    //   collection.addNode({
    //     id: item.id,
    //     title: item.title,
    //     content: item.content,
    //     image: item.image,
    //     tags: item.tags,
    //     created_at: item.created_at
    //   })
    // }
  })
}
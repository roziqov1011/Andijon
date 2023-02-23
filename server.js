const express = require('express');
const path = require('path');
const fs = require("fs");
const app = express();
const axios = require('axios')
const PORT = process.env.PORT || 5000;
const indexPath = path.resolve(__dirname, 'build', 'index.html');

// static resources should just be served as they are
app.use(express.static(
  path.resolve(__dirname, 'build'),
  { maxAge: '30d' },
));
// here we serve the index.html page
app.get('/v-governorship/messages-inner/:contentId', (req, res, next) => {
  fs.readFile(indexPath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end()
    }

    axios.get(`https://backend.digitalpark.uz/api/posts/${req.params.contentId}`).then(
      function (response) {
        // console.log(response.data.data);
        const post = response.data.data
        console.log(post);
        htmlData = htmlData.replace(
          "<title>Andijon Hokimligi</title>",
          `<title>${post.title_uz}</title>`
        )

          .replace('__TITLE__', 'Andijon Hokimlig')
          .replace('__META_OG_TITLE__N', post.title_uz)
          .replace('__META_DESCRIPTION__N', post.title_uz)
          .replace('__META_OG_DESCRIPTION__N', post.title_uz)
          .replace('__META_OG_IMAGE__N', `https://backend.digitalpark.uz/${post.image}`)
          .replace('__META_OG_TITLE__I', post.title_uz)
          .replace('__META_DESCRIPTION__I', post.title_uz)
          .replace('__META_OG_IMAGE__I', `https://backend.digitalpark.uz/${post.image}`)
          .replace('__META_OG_TITLE__P', post.title_uz)
          .replace('__META_OG_DESCRIPTION__P', post.title_uz)
          .replace('__META_OG_IMAGE__P', `https://backend.digitalpark.uz/${post.image}`)
          .replace('__META_OG_URL__P', `https://backend.digitalpark.uz/${post.image}`)
          .replace('__META_OG_TITLE__T', post.title_uz)
          .replace('__META_OG_DESCRIPTION__T', post.title_uz)
          .replace('__META_OG_IMAGE__T', `https://backend.digitalpark.uz/${post.image}`)
          .replace('__META_IMAGE__', `https://backend.digitalpark.uz/${post.image}`)
        res.send(htmlData);
      }).catch(function (response) {
        res.status(404).send("Post not found");
      });

  });
});

app.get('/', (req, res, next) => {
  fs.readFile(indexPath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end()
    }
    htmlData = htmlData.replace(
      "<title>Andijon Hokimligi</title>",
      `<title>__</title>`
    )
    htmlData = htmlData.replace(/__META_OG_TITLE__/g, "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace(/__META_OG_DESCRIPTION__/g, "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace('__META_DESCRIPTION__', "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace('__META_OG_IMAGE__', "")
      .replace('__META_OG_URL__', `https://backend.digitalpark.uz/${req.url}`)
      .replace('__META_OG_TITLE__N', "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace('__META_DESCRIPTION__N', "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace('__META_OG_DESCRIPTION__N', "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace('__META_OG_IMAGE__N', ``)
      .replace('__META_OG_TITLE__I', "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace('__META_DESCRIPTION__I', "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace('__META_OG_IMAGE__I', ``)
      .replace('__META_OG_TITLE__P', "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace('__META_OG_DESCRIPTION__P', "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace('__META_OG_IMAGE__P', ``)
      .replace('__META_OG_URL__P', `https://backend.digitalpark.uz/${req.url}`)
      .replace('__META_OG_TITLE__T', "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace('__META_OG_DESCRIPTION__T', "Аndijon viloyati hokimligi rasmiy portali - ANDIJON.UZ")
      .replace('__META_OG_IMAGE__T', ``)
      .replace('__META_IMAGE__', ``)
    return res.send(htmlData);
  });
});


// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log('Error during app startup', error);
  }
  console.log("listening on " + PORT + "...");
})
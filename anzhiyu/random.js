var posts=["2025/02/20/这是一篇新的博文/","2025/02/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
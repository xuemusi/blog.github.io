var posts=["2025/02/23/雪慕斯的频道/","2025/02/25/为什么要使用住宅IP？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
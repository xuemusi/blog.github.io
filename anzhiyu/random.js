var posts=["2025/02/23/雪慕斯的频道/","2025/02/23/PC住宅代理如何使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
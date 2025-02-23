var posts=["2025/02/23/全流程指南，免费部署超/","2025/02/23/PC住宅代理如何使用/","2025/02/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
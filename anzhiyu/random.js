var posts=["2025/02/23/雪慕斯的频道/","2025/02/26/Voice全攻略：注册、充值及避坑指南」/","2025/02/25/为什么要使用住宅IP？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
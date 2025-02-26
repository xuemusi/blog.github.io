var posts=["2025/02/23/雪慕斯的频道/","2025/02/26/2025最全美区AppleID注册教程，保姆级别教程/","2025/02/26/「超大容量9eSIM推荐：安卓用户最优选择，轻松管理多张eSIM」/","2025/02/26/Voice全攻略：注册、充值及避坑指南」/","2025/02/25/为什么要使用住宅IP？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
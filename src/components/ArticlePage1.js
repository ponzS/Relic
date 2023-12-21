import React from 'react';
import './ArticlePage.css'; // 导入样式文件

const ArticlePage1 = () => {
  return (
    <div className="article-page">
      <h1>有时间了更新</h1>
      <p>可以投稿你的内容，我会为你的内容制作一个链接</p>



      <video width="640" height="360" controls>
  <source src={require('../videos/ponz1.mp4')} type="video/mp4" />
  video
</video>
<p>此内容模块测试了 呼吸灯背景-视频-图片 的展示</p>
<p>呼吸灯背景已移除，原因是会失去使用夜间模式在内容模块阅读的意义</p>
      <img src={require('../images/ponz.jpg')} alt="image" />

    
      {/* 其他内容 */}
    </div>
  );
};

export default ArticlePage1;


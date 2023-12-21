
import React from 'react';

function Taskbar({ onToggleTheme }) {
  // 处理点击按钮的逻辑
  const handleButtonClick = () => {
    // 调用传入的回调函数，改变整个页面的主题
    onToggleTheme();
    // 切换页面背景颜色
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? '' : 'black';
  };

  return (
    <div className="taskbar" onClick={handleButtonClick}>touchbar ></div>
  );
}

export default Taskbar;


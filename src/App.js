import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Taskbar from './components/Taskbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import './App.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
 import PublicIcon from '@mui/icons-material/Public';


import ArticlePage from './components/ArticlePage1';
// 导入CountdownTimer组件
import CountdownTimer from './components/CountdownTimer';


function App() {
  // 使用 useState 来管理组件的状态
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [isMainButtonExpanded, setIsMainButtonExpanded] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [isArticle1Expanded, setIsArticle1Expanded] = useState(false);
  const [isArticle2Expanded, setIsArticle2Expanded] = useState(false);
  const [isArticle3Expanded, setIsArticle3Expanded] = useState(false);
  const [isArticle4Expanded, setIsArticle4Expanded] = useState(false);
  const [isArticle5Expanded, setIsArticle5Expanded] = useState(false);


  const toggleMainButton = () => {
    setIsMainButtonExpanded((prev) => !prev);
  };
  
  const handleButton1Click = () => {
    // 处理按钮1的点击逻辑
  };
  
  const handleButton2Click = () => {
    // 处理按钮2的点击逻辑
  };
  
  const handleButton3Click = () => {
    // 处理按钮3的点击逻辑
  };
  
 


  // 切换主题的函数
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };



  // 切换文章1状态的函数
  const toggleArticle1 = () => {
    setIsArticle1Expanded((prev) => !prev);
  };

  // 切换文章2状态的函数
  const toggleArticle2 = () => {
    setIsArticle2Expanded((prev) => !prev);
  };

  // 切换文章3状态的函数
  const toggleArticle3 = () => {
    setIsArticle3Expanded((prev) => !prev);
  };

  // 切换文章4状态的函数
  const toggleArticle4 = () => {
    setIsArticle4Expanded((prev) => !prev);
  };

  // 切换文章5状态的函数
  const toggleArticle5 = () => {
    setIsArticle5Expanded((prev) => !prev);
  };

  return (
    <Router>




      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`} style={{ position: 'relative' }}>
        {/* 顶部邮箱联系方式 */}
        <div className="contact-info">
          <p>ponzS blog Email: zhangguoai888@gmail.com</p>
        </div>

        <header>
          <h1>Relic</h1>
        </header>
        <main>
          {/* <Navigation /> */}

          {/* 文章模块模板1 */}
          <div className={`article-module ${isArticle1Expanded ? 'expanded' : ''}`} onClick={toggleArticle1}>
            <Link to="/article1">
              <h2>About Web</h2>
            </Link>
            {isArticle1Expanded && (
              <div className="article-description">
                <p>
                  <Link to="/ArticlePage1">
                    About JavaScript&html&css
                  </Link>
                  <Link to="/ArticlePage1">
                    About React
                  </Link>
                  <Link to="/ArticlePage1">
                    About VUE
                  </Link>
                  <Link to="/ArticlePage1">
                    About Spingboot&java
                  </Link>
                </p>
              </div>
            )}
            <p className="update-time">2023.12.21</p>
          </div>

          {/* 文章模块模板2 */}
          <div className={`article-module ${isArticle2Expanded ? 'expanded' : ''}`} onClick={toggleArticle2}>
            <Link to="/article2">
              <h2>About Unity</h2>
            </Link>
            {isArticle2Expanded && (
              <div className="article-description">
                <p>
                  <Link to="/ArticlePage1">
                    C#
                  </Link>
                  <Link to="/ArticlePage1">
                  Unity web&VR&XR&MR&AR
                  </Link>
                </p>
              </div>
            )}
            <p className="update-time">2023.12.21</p>
          </div>

          {/* 文章模块模板3 */}
          <div className={`article-module ${isArticle3Expanded ? 'expanded' : ''}`} onClick={toggleArticle3}>
            <Link to="/article3">
              <h2>Personal Project</h2>
            </Link>
            {isArticle3Expanded && (
              <div className="article-description">
                <p>
                  <Link to="/ArticlePage1">
                    Open World Games
                  </Link>
                  <Link to="/ArticlePage1">
                    App for AI
                  </Link>
                </p>
              </div>
            )}
            <p className="update-time">2023.12.21</p>
          </div>

          {/* 文章模块模板4 */}
          <div className={`article-module ${isArticle4Expanded ? 'expanded' : ''}`} onClick={toggleArticle4}>
            <Link to="/article4">
              <h2>Personal opinions</h2>
            </Link>
            {isArticle4Expanded && (
              <div className="article-description">
                <p>
                  <Link to="/ArticlePage1">
                    待更新
                  </Link>
                  
                </p>
              </div>
            )}
            <p className="update-time">2023.12.21</p>
          </div>
        

      
{/* 文章模块模板5 */}
<div className={`article-module ${isArticle5Expanded ? 'expanded' : ''}`} onClick={toggleArticle5}>
            <Link to="/article5">
              <h2>Other</h2>
            </Link>
            {isArticle5Expanded && (
              <div className="article-description">
                <p>
                  <Link to="/CountdownTimer">
                    倒计时
                  </Link>
                  
                </p>
              </div>
            )}
            <p className="update-time">2023.12.21</p>
          </div>



     

        </main>



 




        {/* 使用 Routes 包裹 Route 组件 */}
        <Routes>
          <Route path="/article1" element={<Article />} />
          <Route path="/article2" element={<Article />} />
          <Route path="/article3" element={<Article />} />
          <Route path="/article4" element={<Article />} />
          <Route path="/article5" element={<Article />} />
          <Route path="/ArticlePage1" element={<ArticlePage />} />
          <Route path="/CountdownTimer" element={<CountdownTimer />} />
        </Routes>

        <Taskbar onToggleTheme={toggleTheme} />
      </div>
    </Router>
  );
}

export default App;


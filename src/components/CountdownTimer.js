import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    // 每秒更新一次当前时间
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 清除定时器
    return () => clearInterval(intervalId);
  }, []); // 空数组表示只在组件挂载和卸载时执行

  // 计算距离下一周六凌晨1点的时间差
  const calculateCountdown = () => {
    const now = new Date();
    const nextSaturday = new Date(now);
    nextSaturday.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7));
    nextSaturday.setHours(1, 0, 0, 0);

    const difference = nextSaturday.getTime() - now.getTime();
    setCountdown(difference);
  };

  useEffect(() => {
    // 每秒更新一次倒计时
    const intervalId = setInterval(() => {
      calculateCountdown();
    }, 1000);

    // 清除定时器
    return () => clearInterval(intervalId);
  }, []); // 空数组表示只在组件挂载和卸载时执行

  // 将时间戳转换为 HH:mm:ss 格式的字符串
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h3>当前时间：{currentTime.toLocaleTimeString()}</h3>
      <h1>距离周末还有：{formatTime(countdown)}</h1>
    </div>
  );
};

export default CountdownTimer;

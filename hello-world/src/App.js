import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//appJs中主要写一些逻辑
//indexJs是项目入口
// XMl语法 标签不闭合 一种简写的js代码

function App() {
  return (
    <div className='header'>
      <Wugui/>
      <Judge/>
      <Tuzi/>
    </div>
  )
}

function Wugui() {
   return ( 
     <div>
       我是乌龟,用时：
     </div>
   )
}
function Tuzi() {
   return ( 
     <div>
      我是兔子,用时:
     </div>
   )
}
function Judge() {
   return ( 
     <div>
      裁判
     </div>
   )
}

export default App;

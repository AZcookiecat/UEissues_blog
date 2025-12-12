<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="nav-logo">UE Issues Blog</router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/articles" class="nav-link">文章列表</router-link>
        </div>
      </div>
    </nav>
    
    <router-view />
    
    <footer class="footer">
      <p>&copy; 2025 UE Issues Blog. 记录UE项目开发中遇到的问题与解决方案。</p>
    </footer>
  </div>
</template>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
}

/* 应用容器 */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 导航栏样式 */
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #42b883;
}

/* 页脚样式 */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  margin-top: auto;
}

.footer p {
  margin: 0;
  font-size: 0.9rem;
}

/* 通用按钮样式 */
button {
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

/* 通用链接样式 */
a {
  color: #42b883;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* 代码块样式 */
pre {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1rem 0;
}

code {
  font-family: 'Courier New', Courier, monospace;
  background-color: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9rem;
}

pre code {
  background-color: transparent;
  padding: 0;
}
</style>

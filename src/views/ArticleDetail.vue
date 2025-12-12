<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getArticleById } from '../articles/articles'

const route = useRoute()
const router = useRouter()
const article = ref(null)

onMounted(() => {
  const id = route.params.id
  article.value = getArticleById(id)
  
  if (!article.value) {
    // 如果文章不存在，重定向到文章列表
    router.push('/articles')
  }
})
</script>

<template>
  <div class="article-detail" v-if="article">
    <header class="header">
      <div class="nav-buttons">
        <button @click="router.push('/articles')" class="back-button">返回列表</button>
      </div>
      <h1>{{ article.title }}</h1>
      <div class="article-meta">
        <span class="date">{{ article.date }}</span>
        <span class="category">{{ article.category }}</span>
      </div>
    </header>
    
    <main class="main">
      <div class="article-content" v-html="article.content"></div>
    </main>
    
    <div class="nav-buttons-bottom">
      <button @click="router.push('/articles')" class="back-button">返回列表</button>
    </div>
  </div>
</template>

<style scoped>
.article-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0 20px;
  border-bottom: 1px solid #eee;
}

.nav-buttons {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.back-button {
  padding: 8px 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.back-button:hover {
  background-color: #e0e0e0;
}

.header h1 {
  font-size: 2.2rem;
  margin-bottom: 15px;
  color: #333;
}

.article-meta {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 0.9rem;
  color: #888;
}

.main {
  margin: 40px 0;
}

.article-content {
  line-height: 1.8;
  color: #444;
  max-width: 800px;
  margin: 0 auto;
}

.article-content h3 {
  font-size: 1.5rem;
  margin: 30px 0 15px;
  color: #333;
}

.article-content h4 {
  font-size: 1.3rem;
  margin: 25px 0 12px;
  color: #333;
}

.article-content p {
  margin: 15px 0;
}

.article-content ol,
.article-content ul {
  margin: 15px 0;
  padding-left: 25px;
}

.article-content li {
  margin: 8px 0;
}

.article-content pre {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 15px 0;
}

.article-content code {
  font-family: 'Courier New', Courier, monospace;
  background-color: #f0f0f0;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 0.9rem;
}

.article-content pre code {
  background-color: transparent;
  padding: 0;
}

.article-content b {
  font-weight: bold;
  color: #333;
}

.article-content a {
  color: #42b883;
  text-decoration: none;
  border-bottom: 1px solid #42b883;
  transition: border-bottom 0.2s;
}

.article-content a:hover {
  border-bottom: 2px solid #42b883;
}

.nav-buttons-bottom {
  max-width: 800px;
  margin: 40px auto 0;
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
</style>
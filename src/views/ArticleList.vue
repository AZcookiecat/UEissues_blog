<script setup>
import { ref, onMounted } from 'vue'
import { getArticlesList } from '../articles/articles'

const articles = ref([])

onMounted(() => {
  articles.value = getArticlesList()
})
</script>

<template>
  <div class="article-list">
    <header class="header">
      <h1>文章列表</h1>
      <p>所有文章分类浏览</p>
    </header>
    
    <main class="main">
      <div class="articles-container" v-if="articles.length > 0">
        <article v-for="article in articles" :key="article.id" class="article-item">
          <div class="article-info">
            <h2>{{ article.title }}</h2>
            <div class="article-meta">
              <span class="date">{{ article.date }}</span>
              <span class="category">{{ article.category }}</span>
            </div>
            <p class="summary">{{ article.summary }}</p>
          </div>
          <router-link :to="'/article/' + article.id" class="read-more">阅读更多</router-link>
        </article>
      </div>
      <div class="empty-state" v-else>
        <p>暂无文章，敬请期待！</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.article-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  padding: 40px 0;
  border-bottom: 1px solid #eee;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #333;
}

.header p {
  font-size: 1.2rem;
  color: #666;
}

.main {
  margin-top: 40px;
}

.articles-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.article-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.article-info {
  flex: 1;
  margin-right: 20px;
}

.article-info h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.article-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #888;
}

.summary {
  line-height: 1.5;
  color: #555;
  margin-bottom: 0;
}

.read-more {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.read-more:hover {
  background-color: #369e6f;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  color: #666;
  font-size: 1.1rem;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .article-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .read-more {
    margin-top: 15px;
  }
}
</style>
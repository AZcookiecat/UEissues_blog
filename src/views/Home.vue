<script setup>
import { ref, onMounted } from 'vue'
import { getRecentArticles } from '../articles/articles'

const recentArticles = ref([])

// 时间线数据
const timelineData = ref([
  {
    id: 1,
    date: '2025-12-11',
    title: '解决CarlaUE4.exe启动失败问题',
    category: 'UE4故障排除',
    description: '运行CarlaUE4.exe出现Out of video memory trying to allocate a rendering resource…报错，成功解决了CarlaUE4.exe启动时出现的显存分配错误。',
    articleId: 1
  },
  {
    id: 2,
    date: '2025-12-12',
    title: '解决HUTB Python客户端依赖安装问题',
    category: '客户端安装',
    description: '解决安装PythonAPI示例脚本依赖时遇到的invertedai依赖冲突问题，通过创建临时requirements.txt文件成功跳过冲突依赖',
    articleId: 2
  },
  {
    id: 3,
    date: '2025-12-14',
    title: '必要软件安装指南',
    category: '软件安装',
    description: '详细介绍7zip、Cmake和Make等必要软件的下载安装方法及相关教程链接',
    articleId: 3
  }
])

onMounted(() => {
  recentArticles.value = getRecentArticles()
  // 按时间倒序排序，最新的记录在最上面
  timelineData.value.sort((a, b) => new Date(b.date) - new Date(a.date))
})
</script>

<template>
  <div class="home">
    <header class="header">
      <h1>UE Issues Blog</h1>
      <p>记录UE项目开发中遇到的问题与解决方案</p>
    </header>
    
    <main class="main">
      <section class="intro">
        <h2>关于本博客</h2>
        <p>这是一个用于记录HUTB Unreal Engine项目开发过程中遇到的各种问题及其解决方案的博客。旨在分享经验，帮助更多开发者解决类似问题。</p>
      </section>
      
      <section class="timeline">
        <h2>学习时间线</h2>
        <div class="timeline-container">
          <div v-for="item in timelineData" :key="item.id" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-line"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-title">
                  {{ item.title }}
                  <router-link v-if="item.articleId" :to="'/article/' + item.articleId" class="timeline-link">
                    查看文章 →
                  </router-link>
                </h3>
                <div class="timeline-meta">
                  <span class="timeline-date">{{ item.date }}</span>
                  <span class="timeline-category">{{ item.category }}</span>
                </div>
              </div>
              <p class="timeline-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="recent-articles">
        <h2>最近文章</h2>
        <div class="articles-grid" v-if="recentArticles.length > 0">
          <article v-for="article in recentArticles" :key="article.id" class="article-card">
            <h3>{{ article.title }}</h3>
            <div class="article-meta">
              <span class="date">{{ article.date }}</span>
              <span class="category">{{ article.category }}</span>
            </div>
            <p class="summary">{{ article.summary }}</p>
            <router-link :to="'/article/' + article.id" class="read-more">阅读更多</router-link>
          </article>
        </div>
        <div class="empty-state" v-else>
          <p>暂无文章，敬请期待！</p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.home {
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

.intro {
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.intro h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #333;
}

.intro p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.recent-articles h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.article-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.article-card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #333;
}

.article-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: #888;
}

.summary {
  margin-bottom: 15px;
  line-height: 1.5;
  color: #555;
}

.read-more {
  display: inline-block;
  padding: 8px 15px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.2s;
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
  }

  /* 时间线样式 */
  .timeline {
    margin-bottom: 60px;
    padding: 0 20px;
  }

  .timeline h2 {
    font-size: 1.8rem;
    margin-bottom: 40px;
    color: #333;
    text-align: center;
  }

  .timeline-container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 40px;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 50px;
    display: flex;
    align-items: flex-start;
    transition: all 0.3s ease;
  }

  .timeline-dot {
    position: absolute;
    left: -40px;
    width: 18px;
    height: 18px;
    background-color: #42b883;
    border: 4px solid white;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(66, 184, 131, 0.3);
    z-index: 2;
    top: 8px;
    transition: all 0.3s ease;
  }

  .timeline-item:hover .timeline-dot {
    transform: scale(1.2);
    box-shadow: 0 0 0 6px rgba(66, 184, 131, 0.4);
  }

  .timeline-line {
    position: absolute;
    left: -36px;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, rgba(66, 184, 131, 0.6), rgba(66, 184, 131, 0.2));
    z-index: 1;
    top: 28px;
    transition: all 0.3s ease;
  }

  .timeline-item:hover .timeline-line {
    background: linear-gradient(to bottom, rgba(66, 184, 131, 0.8), rgba(66, 184, 131, 0.3));
  }

  .timeline-content {
    background-color: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    flex: 1;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .timeline-content::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: #42b883;
    transition: all 0.3s ease;
  }

  .timeline-content:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .timeline-title {
    font-size: 1.4rem;
    color: #333;
    margin: 0;
    flex: 1;
    font-weight: 600;
    line-height: 1.4;
  }

  .timeline-link {
    display: inline-block;
    font-size: 0.9rem;
    color: #42b883;
    text-decoration: none;
    margin-left: 15px;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .timeline-link:hover {
    text-decoration: underline;
    color: #369e6f;
    transform: translateX(3px);
  }

  .timeline-meta {
    display: flex;
    gap: 20px;
    font-size: 0.9rem;
    color: #666;
    margin-top: 8px;
    font-weight: 500;
  }

  .timeline-date {
    background-color: rgba(66, 184, 131, 0.1);
    padding: 4px 10px;
    border-radius: 12px;
    color: #42b883;
    font-size: 0.85rem;
  }

  .timeline-category {
    background-color: rgba(102, 126, 234, 0.1);
    padding: 4px 10px;
    border-radius: 12px;
    color: #667eea;
    font-size: 0.85rem;
  }

  .timeline-description {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #555;
    margin: 15px 0 0 0;
    padding: 0;
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .timeline {
      padding: 0 10px;
    }

    .timeline-container {
      padding-left: 35px;
    }

    .timeline-dot {
      left: -35px;
      width: 16px;
      height: 16px;
      box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.3);
      top: 6px;
    }

    .timeline-line {
      left: -32px;
      width: 2px;
    }

    .timeline-content {
      padding: 20px;
    }

    .timeline-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    .timeline-title {
      font-size: 1.25rem;
    }

    .timeline-link {
      margin-left: 0;
      margin-top: 5px;
    }

    .timeline-meta {
      margin-top: 12px;
      gap: 15px;
      flex-wrap: wrap;
    }

    .timeline-description {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .timeline-container {
      padding-left: 30px;
    }

    .timeline-dot {
      left: -30px;
      width: 14px;
      height: 14px;
      box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.3);
    }

    .timeline-line {
      left: -27px;
    }

    .timeline-content {
      padding: 18px;
    }

    .timeline-title {
      font-size: 1.2rem;
    }
  }
</style>
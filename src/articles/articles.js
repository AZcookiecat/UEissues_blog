// 博客文章数据管理

// 所有文章数据
export const articlesData = [
  {
    id: 1,
    title: "解决CarlaUE4.exe启动失败 - Out of video memory trying to allocate a rendering resource…",
    date: "2025-12-11",
    category: "UE4故障排除",
    summary: "解决CarlaUE4.exe启动时出现\"Out of video memory trying to allocate a rendering resource…\"错误的两种方法。",
    content: `
      <h3>问题描述</h3>
      <p>在启动CarlaUE4.exe时，出现以下错误信息：</p>
      <pre><code>Out of video memory trying to allocate a rendering resource...</code></pre>
      <p>同时按照社区文档提供的解决方案无法解决该问题。</p>
      <h3>解决方案</h3>
      
      <h4>方法一：使用DX11模式启动</h4>
      <p>在命令行中运行以下命令：</p>
      <pre><code>CarlaUE4 -dx11</code></pre>
      <p>这个命令会强制CarlaUE4使用DirectX 11模式启动，而不是默认的DirectX 12模式，这通常可以解决显存分配问题。</p>
      
      <h4>方法二：添加环境变量</h4>
      <p>如果方法一不起作用，可以尝试将CarlaUE4.exe所在文件夹添加到系统环境变量中：</p>
      <ol>
        <li>找到CarlaUE4.exe所在的文件夹路径</li>
        <li>右键点击"此电脑"，选择"属性"</li>
        <li>点击"高级系统设置"</li>
        <li>在"系统属性"窗口中，点击"环境变量"按钮</li>
        <li>在"系统变量"中找到"Path"变量，点击"编辑"</li>
        <li>点击"新建"，添加CarlaUE4.exe所在文件夹的完整路径</li>
        <li>点击"确定"保存所有更改</li>
        <li>重新启动命令行窗口，再次尝试运行CarlaUE4 -dx11</li>
      </ol>
      
      <h3>参考来源</h3>
      <p>该解决方案参考自GitHub上的Carla项目Issue：<a href="https://github.com/carla-simulator/carla/issues/4775" target="_blank">https://github.com/carla-simulator/carla/issues/4775</a></p>
    `
  },
  {
    id: 2,
    title: "解决HUTB Python客户端依赖安装问题",
    date: "2025-12-12",
    category: "客户端安装",
    summary: "解决安装PythonAPI示例脚本依赖时遇到的invertedai依赖冲突问题，通过创建临时temp_requirements.txt文件成功跳过冲突依赖。",
    content: `
      <h3>问题描述</h3>
      <p>在安装HUTB Python客户端依赖时，运行以下命令：</p>
      <pre><code>pip install -r PythonAPI\examples\requirements.txt</code></pre>
      <p>出现如下错误：</p>
      <img src="/imgs/0.png" alt="安装依赖错误信息" style="max-width: 100%; margin: 20px 0; border-radius: 8px;" />
      <pre><code>ERROR: Could not find a version that satisfies the requirement lanelet2<2.0.0,>=1.2.2 (from invertedai) (from versions: none)
ERROR: No matching distribution found for lanelet2<2.0.0,>=1.2.2</code></pre>
      
      <h3>解决方案</h3>
      <p>通过创建临时requirements.txt文件，跳过invertedai依赖，成功安装其他必要依赖：</p>
      
      <h4>步骤1：创建临时temp_requirements.txt文件</h4>
      <p>创建一个新的temp_requirements.txt文件，移除invertedai依赖，仅保留其他必要依赖：</p>
      <pre><code>future
numpy<2.0.0
networkx
Shapely
pygame
matplotlib
open3d
Pillow</code></pre>
      
      <h4>步骤2：安装临时依赖</h4>
      <p>使用临时文件安装依赖：</p>
      <pre><code>pip install -r temp_requirements.txt</code></pre>
      
      <h3>安装总结</h3>
      <h4>1. 安装PythonAPI/carla依赖</h4>
      <ul>
        <li>成功安装了 requirements.txt 中的所有依赖：auditwheel==5.1.0、distro==1.9.0、packaging、pyelftools、setuptools、wheel</li>
      </ul>
      
      <h4>2. 安装HUTB Python客户端库</h4>
      <ul>
        <li>从 PythonAPI/carla/dist 目录安装了对应Python 3.12版本的wheel文件：hutb-2.9.16-cp312-cp312-win_amd64.whl</li>
        <li>成功安装了 hutb==2.9.16</li>
      </ul>
      
      <h4>3. 安装Python客户端示例脚本依赖</h4>
      <ul>
        <li>由于 invertedai 依赖的 lanelet2<2.0.0,>=1.2.2 在当前环境无法找到，创建了临时 requirements.txt 跳过该依赖</li>
        <li>成功安装了其他必要依赖：future、numpy<2.0.0、networkx、Shapely、pygame、matplotlib、open3d、Pillow</li>
      </ul>
      
      <h3>最终结果</h3>
      <p>所有核心依赖已安装完成，HUTB客户端库可以正常使用。示例脚本的大部分依赖也已安装，仅缺少 invertedai 相关功能。</p>
    `
  }
];

// 获取所有文章列表
export const getArticlesList = () => {
  return articlesData.map(article => ({
    id: article.id,
    title: article.title,
    date: article.date,
    category: article.category,
    summary: article.summary
  }));
};

// 根据ID获取单篇文章
export const getArticleById = (id) => {
  return articlesData.find(article => article.id === parseInt(id));
};

// 获取最近文章（默认3篇）
export const getRecentArticles = (count = 3) => {
  return getArticlesList().sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, count);
};

// 获取文章分类列表
export const getCategories = () => {
  const categories = [...new Set(articlesData.map(article => article.category))];
  return categories.sort();
};

// 根据分类获取文章
export const getArticlesByCategory = (category) => {
  return getArticlesList().filter(article => article.category === category);
};

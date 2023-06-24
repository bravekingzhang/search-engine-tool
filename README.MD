# 开源搜索引擎API

因为OpenAI的横空出世，大家都习惯于使用OpenAI来问问题，但是OpenAI有一个致命的问题，就是只知道他训练的知识，而不知道新的知识，比如你问他今天深圳的天气如何，问他一些热点新闻，他是没有任何概念的。

### 解决办法

通常我们为了让大模型“感知“到新的知识，我们需要将新的知识材料提供给他大模型学习，因此基于软件开发第一定律，没有什么是做不到的，如果做不到，就加一层，如果还是做不到，就在加一层，咋们这个层就是一个通过搜索获取当前最新信息的层，将摘要给到大模型学习，然后大模型基于这些个新学习的知识来回答你的问题。

### 方案对比

为什么不直接使用 Google search API，而要自己造轮子，其原因就是一是因为巨硬们提供的API都是要付费的，免费计划也需要绑visa卡等，特别麻烦，因此还不如自己动手实现一个免费的。

### 原理

原理很简单，使用 无头浏览器 去访问 Google，bing 等搜索网站，分析网页内容，提取摘要。

## 已支持的搜索引擎

bing/google/duckduckgo/yahoo

## 使用方式

`npm i search-engine-tool`

```javascript
const searchEngineTool = require('search-engine-tool');
//import searchEngineTool from "search-engine-tool" // module

const query = '深圳市天气';
const engine = 'bing';

searchEngineTool(query, engine)
  .then(results => {
    console.log('搜索结果:');
    results.forEach(result => {
      console.log('标题:', result.title);
      console.log('链接:', result.href);
      console.log('摘要:', result.abstract);
      console.log('----------------------');
    });
  })
  .catch(error => {
    console.error('发生错误:', error);
  });

```

# 效果预览

<img src="https://github.com/bravekingzhang/search-engine-tool/blob/main/artificial/41687581160_.pic.jpg"  style="width: 50%;">

# 支持特性

- [x] Google
- [x] Bing
- [x] DuckDuckGo
- [x] yahoo

# 开源共建

让我们一起改进，把这个搜索API做得更加好用一些。

# 给我打 call

如果你觉得对你有用，就请我一杯咖啡。

<img src="https://github.com/bravekingzhang/utools-code2flow-official/blob/main/shoukuanma.png" alt="收款码" style="width: 40%;" />

# 加入群聊

<img src="https://github.com/bravekingzhang/flutter_chat_box/blob/main/artificial/qunliao.pic.jpg"  style="width: 50%;">

添加我，注明自己 github 账号名，入群的目的，加入群聊，一起学习。

# License: MIT

本项目采用 MIT 许可证授权。


// 主题配置，详见 https://doc.xugaoyi.com

import nav from "./nav";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";

export default <VdoingThemeConfig>{
  nav: nav, // 上方导航栏配置, 如需修改请修改 nav.ts
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: "/assets/img/logo1.png", // 导航栏Logo
  repo: "landashu?tab=repositories", // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
  docsDir: "docs", // 编辑的文件夹
  editLinks: false, // 启用编辑
  editLinkText: "编辑", // 编辑链接文字
  pageStyle: "line", // 接触首页下方介绍的边框
  defaultMode: 'auto',

  //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

  category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  // bodyBgImg: [
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
  // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
  // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
  // titleBadge: true, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '/favicon.ico',
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状
  rightMenuBar: true, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
  sidebar: { mode: "structuring", collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义

  extendFrontmatter: {
    article:false
  },

  updateBar: {
    // 最近更新栏
    showToArticle: false, // 显示到文章页底部，默认true
    moreArticle: "/archives", // “更多文章”跳转的页面，默认'/archives'
  },

  // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
  social: {
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: "icon-gitee",
        title: "gitee",
        link: "https://gitee.com/dashboard",
      },
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/landashu?tab=repositories",
      },
      // {
      //   iconClass: "icon-youjian",
      //   title: "发邮件",
      //   link: "mailto:875730567@qq.com",
      // },
    ],
  },
  footer: {
    // 页脚信息, 请根据实际情况修改, 删掉不需要的部分
    createYear: 2023, // 博客创建年份
    copyrightInfo: `
<!--      <a href='https://doc.xugaoyi.com/' target='_blank'>Theme by Vdoing</a> | <a href='http://doc.aizuda.com/' rel='external nofollow' target='_blank'>Copyright © 2022-2023 AiZuDa</a>-->
<!--      <br>-->
<!--      <a href="http://beian.miit.gov.cn/" target="_blank">鲁ICP备2021041554号-1</a>-->
    `, // 博客版权信息，支持a标签
  },
};

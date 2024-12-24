(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{554:function(s,t,n){"use strict";n.r(t);var a=n(41),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Jenkins 中自动构建项目的类型有很多，常用的有以下三种：")]),s._v(" "),n("ul",[n("li",[s._v("自由风格软件项目（FreeStyle Project）可以构建不同语言的项目")]),s._v(" "),n("li",[s._v("Maven 项目（Maven Project）专门准对 java 语言项目")]),s._v(" "),n("li",[s._v("流水线项目（Pipeline Project）灵活度高，用代码编写 jenkins 构建过程，如 k8s")])]),s._v(" "),n("p",[s._v("每种类型的构建其实都可以完成一样的构建过程与结果，只是在操作方式、灵活度等方面有所区别，在实际开发中可以根据自己的需求和习惯来选择。（PS：个人推荐使用流水线类型，因为灵活度非常高）")]),s._v(" "),n("h2",{attrs:{id:"自由风格项目构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自由风格项目构建"}},[s._v("#")]),s._v(" 自由风格项目构建")]),s._v(" "),n("p",[s._v("1. 创建自由风格项目")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_1.png",alt:""}})]),s._v(" "),n("p",[s._v("2. 配置 git")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_2.png",alt:""}})]),s._v(" "),n("p",[s._v("3. 构建")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_3.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_4.png",alt:""}})]),s._v(" "),n("p",[s._v("4. 编译打包")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始编译和打包"')]),s._v("\nmvn clean package\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"编译和打包结束"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_5.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_6.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_7.png",alt:""}})]),s._v(" "),n("p",[s._v("5. 部署到目标机"),n("br"),s._v("\n安装 Deploy to container 插件，这种插件适合发布 war 这种类型的项目，到 tomcat 等容器上去。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_8.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_9.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_10.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_11.png",alt:""}})]),s._v(" "),n("p",[s._v("tomcat 凭证需要自己百度去配置以下，当你配置成功后，可以访问到 tomcat 的 IP:8080/manager/html 页面，配置完后回到 jenkins，部署远程 tomcat 的时候需要这个凭证。")]),s._v(" "),n("h2",{attrs:{id:"maven-项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven-项目"}},[s._v("#")]),s._v(" maven 项目")]),s._v(" "),n("p",[s._v("1. 安装 Maven Integration 插件"),n("br"),s._v("\n 2. 构建 maven 项目")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_12.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_13.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_14.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"pipeline流水线项目构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pipeline流水线项目构建"}},[s._v("#")]),s._v(" Pipeline 流水线项目构建")]),s._v(" "),n("h3",{attrs:{id:"pipeline简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pipeline简介"}},[s._v("#")]),s._v(" Pipeline 简介")]),s._v(" "),n("p",[s._v("Pipeline，简单来说，就是一套运行在 Jenkins 上的工作流框架，将原来独立运行于单个或者多个节点的任务连接起来，实现单个任务难以完成的复杂流程编排和可视化的工作。")]),s._v(" "),n("p",[s._v("使用 Pipeline 有以下好处：")]),s._v(" "),n("ul",[n("li",[s._v("代码：Pipeline 以代码的形式实现，通常被检入源代码控制，使团队能够编辑，审查和迭代其传送流程。")]),s._v(" "),n("li",[s._v("持久：无论是计划内的还是计划外的服务器重启，Pipeline 都是可恢复的。")]),s._v(" "),n("li",[s._v("可停止：Pipeline 可接收交互式输入，以确定是否继续执行 Pipeline")]),s._v(" "),n("li",[s._v("多功能：Pipeline 支持现实世界中复杂的持续交付要求。它支持 fork/join、循环执行，并行执行任务的功能。")]),s._v(" "),n("li",[s._v("可扩展：Pipeline 插件支持其 DSL 的自定义扩展 ，以及与其他插件集成的多个选项。")])]),s._v(" "),n("p",[s._v("如何创建 Jenkins Pipeline：")]),s._v(" "),n("ul",[n("li",[s._v("Pipeline 脚本是由 Groovy 语言实现的，但是我们没必要单独去学习 Groovy")]),s._v(" "),n("li",[s._v("Pipeline 支持两种语法：Declarative (声明式) 和 Scripted Pipeline (脚本式) 语法，Scripted Pipeline 支持更多的 groovy 语言，不像前者受那么多的结构化限制。由于可以编写灵活的逻辑，可以认为是高级版的 pipeline，如果你想实现的逻辑比较灵活，比如有判断、分支，或者需要用 groovy 语言编写复杂的运行步骤，都应该选择使用 Scripted Pipeline。")]),s._v(" "),n("li",[s._v("Pipeline 也有两种创建方法：可以直接在 Jenkins 的 Web UI 界面中输入脚本；也可以通过创建一个 Jenkinsfile 脚本文件放入项目源码库中（一般我们都推荐在 Jenkins 中直接从源代码控制 (SCM) 中直接载入 Jenkinsfile Pipeline 这种方法）。")])]),s._v(" "),n("h3",{attrs:{id:"安装pipeline插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装pipeline插件"}},[s._v("#")]),s._v(" 安装 Pipeline 插件")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_15.png",alt:""}})]),s._v(" "),n("blockquote",[n("p",[s._v("安装完毕记得重启")])]),s._v(" "),n("p",[s._v("安装插件有很多依赖插件会安装失败，不用管，只要创建项目的时候多了 “流水线” 类型即可。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_16.png",alt:""}})]),s._v(" "),n("p",[s._v("你会在项目的配置中看到多了一个流水线，它就是取代了以上项目的构建和构建后的一些工作。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_17.png",alt:""}})]),s._v(" "),n("p",[s._v("以上是基于一个声明式 **（Declarative）的 Pipeline**，以 pipeline 开头的就是声明式的。"),n("br"),s._v("\nstages：代表整个流水线的所有执行阶段。通常 stages 只有 1 个，里面包含多个 stage"),n("br"),s._v("\nstage：代表流水线中的某个阶段，可能出现 n 个。一般分为拉取代码，编译构建，部署等阶段。"),n("br"),s._v("\nsteps：代表一个阶段内需要执行的逻辑 (步骤)。steps 里面是 shell 脚本，git 拉取代码，ssh 远程发布等任意内容。"),n("br"),s._v("\n模拟一段，然后执行看看效果")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pipeline "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent any\n\n    stages "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'拉取代码'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'拉取代码'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'编译构建'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'编译构建'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'项目部署'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'项目部署'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_18.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"scripted-pipeline脚本式-pipeline"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#scripted-pipeline脚本式-pipeline"}},[s._v("#")]),s._v(" Scripted Pipeline 脚本式 - Pipeline")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_19.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("Node：节点，一个 Node 就是一个 Jenkins 节点，Master 或者 Agent，是执行 Step 的具体运行环境，后续讲到 Jenkins 的 Master-Slave 架构的时候用到。")]),s._v(" "),n("li",[s._v("Stage：阶段，一个 Pipeline 可以划分为若干个 Stage，每个 Stage 代表一组操作，比如：Build、Test、Deploy，Stage 是一个逻辑分组的概念。")]),s._v(" "),n("li",[s._v("Step：步骤，Step 是最基本的操作单元，可以是打印一句话，也可以是构建一个 Docker 镜像，由各类 Jenkins 插件提供，比如命令：sh ‘make’，就相当于我们平时 shell 终端中执行 make 命令一样。")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    def mvnHome\n    stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'拉取代码'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" // "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" display purposes\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'拉取代码'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'编译构建'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'编译构建'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'项目部署'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'项目部署'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_20.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_21.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"编译打包部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译打包部署"}},[s._v("#")]),s._v(" 编译打包部署")]),s._v(" "),n("h3",{attrs:{id:"拉取代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拉取代码"}},[s._v("#")]),s._v(" 拉取代码")]),s._v(" "),n("p",[s._v("关于声明式的 code 编写，可以通过快捷的方式生成")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_22.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_23.png",alt:""}})]),s._v(" "),n("p",[s._v("在这里可以配置我们的 git 项目拉取地址")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_24.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_25.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_26.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"编译打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译打包"}},[s._v("#")]),s._v(" 编译打包")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_27.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_28.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_29.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_30.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"远程部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#远程部署"}},[s._v("#")]),s._v(" 远程部署")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_31.png",alt:""}})]),s._v(" "),n("p",[s._v("得到后依然编译执行。如果是 jar 包的，可以提前在服务器写好脚本执行，在 sh ' 执行你的脚本'")]),s._v(" "),n("h2",{attrs:{id:"把jenkins的pipeline脚本放到项目中执行-pipeline-script-from-scm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#把jenkins的pipeline脚本放到项目中执行-pipeline-script-from-scm"}},[s._v("#")]),s._v(" 把 jenkins 的 Pipeline 脚本放到项目中执行（Pipeline Script from SCM）")]),s._v(" "),n("p",[s._v("刚才我们都是直接在 Jenkins 的 UI 界面编写 Pipeline 代码，这样不方便脚本维护，建议把 Pipeline 脚本放在项目中（一起进行版本控制）")]),s._v(" "),n("p",[s._v("1. 在项目根目录建立 Jenkinsfile 文件，把内容复制到该文件中，并提交到 git 仓库")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_32.png",alt:""}})]),s._v(" "),n("p",[s._v("2. 在项目中引用该文件")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_33.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_34.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_35.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/jenkins/504/img_36.png",alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);
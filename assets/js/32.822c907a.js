(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{509:function(s,a,t){"use strict";t.r(a);var g=t(41),i=Object(g.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"服务器管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器管理"}},[s._v("#")]),s._v(" 服务器管理")]),s._v(" "),t("p",[s._v("服务器管理可以帮助你管理你现有的服务器，并提供 ssh 以及 sftp 支持，包括 windows 也可以，但需要自己打开支持。")]),s._v(" "),t("p",[s._v("首先我们先去配置一下 ' 服务器组 ', 可以在 ' 服务器设置 ' 中配置")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img.png",alt:""}})]),s._v(" "),t("p",[s._v("配置好后就可以在服务器管理里面添加自己的服务器")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("安利一个小功能点，如果大家用过等保的话知道，服务器的密码需要三个月一换，这里提供了快速批量更换功能，只需要在编辑对远程的 IP 后面添加多个就行，如："),t("br"),s._v("\n127.0.0.1;127.0.0.2;127.0.0.3;127.0.0.4"),t("br"),s._v("\n 这样就达到了批量修改账号密码，不会改其他信息")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_1.png",alt:"img.png"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_14.png",alt:"img.png"}})]),s._v(" "),t("p",[s._v("添加好服务器我们就可以开始远程连接")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_2.png",alt:"img.png"}})]),s._v(" "),t("p",[s._v("连接后可以在操作日志中查看你上次操作的内容")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_3.png",alt:"img.png"}})]),s._v(" "),t("h2",{attrs:{id:"监控管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监控管理"}},[s._v("#")]),s._v(" 监控管理")]),s._v(" "),t("p",[s._v("监控管理分为数据源管理，自定义监控，告警信息管理，需要使用以下功能首先需要配置数据源。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_4.png",alt:"img.png"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_5.png",alt:"img.png"}})]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("数据源地址可以是 Prometheus 的每一个 agent，也可以是你自己项目里提供的一个 json 接口，他会一定时间内访问你的接口并采集到你的数据")])]),s._v(" "),t("p",[s._v("当点击测试连接的时候，可以看下是否解析正确，解析正确最终会以 Json 数据格式展示")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_6.png",alt:"img.png"}})]),s._v(" "),t("p",[s._v("添加完数据源以后我们需要维护指标，指标就是我们需要监控 Json 里具体的那些指标，因为可能某些指标并不需要监控，或者像 Prometheus 提供的 metrics 指标太多，并还需要复杂的计算。")]),s._v(" "),t("p",[s._v("我们在添加指标的时候，可以为每个指标设置告警阈值以及连续次数，当采集到的数据连续几次超过这个阈值，则会为你进行告警。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_7.png",alt:"img.png"}})]),s._v(" "),t("p",[s._v("具体的指标维护在指标设置中，它为你展示了你当前 JSON 采集的数据格式。当我需要添加一个指标，只需要在右侧填写我的指标名称，以及表达式即可，（表达式就是对 JSON 里的数据进行运算得到我想要的监控数据，如果是项目自己暴漏的接口，一般不需要在进行计算，直接添加）当表达式描述完毕后，可以尝试运行，查看结果是否正确，正确则添加即可，当一切完毕后点击保存，指标维护则结束。")]),s._v(" "),t("p",[s._v("这里提示以下，你会看到指标在这里可以添加多个，这里面其中有一个组的概念，为了是比如我要添加磁盘指标，磁盘一般会有多个，且他的告警阈值一般也会是一样的，所以为了避免重复，我们多了一个组的概念。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_8.png",alt:"img.png"}})]),s._v(" "),t("p",[s._v("指标添加结束后接下来我们就可以自定义监控面板，相信聪明的你应该一玩就会，点击制作我们就开始进入自定义，自定义完成我们就可以监控了")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_9.png",alt:"img.png"}})]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("每种图形所表示的数据结构有所区别，但只要理解，构建自己的可视化轻而易举："),t("br"),s._v("\n折线图多用来表示时间轴的数据"),t("br"),s._v("\n柱状图多用来表示不同项目间共同项对比数据"),t("br"),s._v("\n饼状图多用来表示占比")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_10.png",alt:"img.png"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_11.png",alt:"img.png"}})]),s._v(" "),t("p",[s._v("当告警后会在告警信息中展示，我们可以去处理这条告警并留下记录，以免相同问题又要百度")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_12.png",alt:"img.png"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_13.png",alt:"img.png"}})]),s._v(" "),t("h2",{attrs:{id:"easy-manager-tool-ai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#easy-manager-tool-ai"}},[s._v("#")]),s._v(" Easy-Manager-Tool AI")]),s._v(" "),t("p",[s._v("在登陆系统后你就会发现右下角的小可爱，点击他就会展示我们的 AI 交互能力。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_15.png",alt:"img.png"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_16.png",alt:"img.png"}})]),s._v(" "),t("p",[s._v("但在进行交互前，先要确保你的 GPT 经过设置，你懂的，否则不能使用，我们可以在 AI 的左下角齿轮进行设置，目前我们只支持了 openAI，其他 AI 会陆续支持。")]),s._v(" "),t("p",[s._v("是否代理打开，会让你进行设置服务器代理的 IP 和 端口，如果你又国外服务器，可以安装一个代理工具保留 IP 和端口进行转发。")]),s._v(" "),t("p",[s._v("反向代理一般时 openAI 官网地址，但一些聪明的大佬能找到通过域名反向代理 openAI 官网，想了解可以咨询博主。接下来就是 key 这个 key 基本不花钱不可能。设置完城后就可以与 AI 进行交互了")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/easy-manager-tool/2201/img_17.png",alt:"img.png"}})])])}),[],!1,null,null,null);a.default=i.exports}}]);
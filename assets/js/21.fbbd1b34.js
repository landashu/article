(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{498:function(s,t,a){"use strict";a.r(t);var g=a(41),i=Object(g.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"服务器管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器管理"}},[s._v("#")]),s._v(" 服务器管理")]),s._v(" "),a("p",[s._v("服务器管理可以帮助你管理你先有的服务器，并提供 ssh 以及 sftp 支持，包括 windows 也可以，但需要自己打开支持。")]),s._v(" "),a("p",[s._v("首先我们先去配置一下 ' 服务器组 ', 可以在 ' 服务器设置 ' 中配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img.png",alt:""}})]),s._v(" "),a("p",[s._v("配置好后就可以在服务器管理里面添加自己的服务器")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_1.png",alt:"img.png"}})]),s._v(" "),a("p",[s._v("添加好服务器我们就可以开始远程连接")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_2.png",alt:"img.png"}})]),s._v(" "),a("p",[s._v("连接后可以在操作日志中查看你上次操作的内容")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_3.png",alt:"img.png"}})]),s._v(" "),a("h2",{attrs:{id:"监控管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控管理"}},[s._v("#")]),s._v(" 监控管理")]),s._v(" "),a("p",[s._v("监控管理分为数据源管理，自定义监控，告警信息管理，需要使用以下功能首先需要配置数据源。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_4.png",alt:"img.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_5.png",alt:"img.png"}})]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("数据源地址可以是 Prometheus 的每一个 agent，也可以是你自己项目里提供的一个 json 接口，他会一定时间内访问你的接口并采集到你的数据")])]),s._v(" "),a("p",[s._v("当点击测试连接的时候，可以看下是否解析正确，解析正确最终会以 Json 数据格式展示")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_6.png",alt:"img.png"}})]),s._v(" "),a("p",[s._v("添加完数据源以后我们需要维护指标，指标就是我们需要监控 Json 里具体的那些指标，因为可能某些指标并不需要监控，或者像 Prometheus 提供的 metrics 指标太多，并还需要复杂的计算。")]),s._v(" "),a("p",[s._v("我们在添加指标的时候，可以为每个指标设置告警阈值以及连续次数，当采集到的数据连续几次超过这个阈值，则会为你进行告警。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_7.png",alt:"img.png"}})]),s._v(" "),a("p",[s._v("具体的指标维护在指标设置中，它为你展示了你当前 JSON 采集的数据格式。当我需要添加一个指标，只需要在右侧填写我的指标名称，以及表达式即可，（表达式就是对 JSON 里的数据进行运算得到我想要的监控数据，如果是项目自己暴漏的接口，一般不需要在进行计算，直接添加）当表达式描述完毕后，可以尝试运行，查看结果是否正确，正确则添加即可，当一切完毕后点击保存，指标维护则结束。")]),s._v(" "),a("p",[s._v("这里提示以下，你会看到指标在这里可以添加多个，这里面其中有一个组的概念，为了是比如我要添加磁盘指标，磁盘一般会有多个，且他的告警阈值一般也会是一样的，所以为了避免重复，我们多了一个组的概念。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_8.png",alt:"img.png"}})]),s._v(" "),a("p",[s._v("指标添加结束后接下来我们就可以自定义监控面板，相信聪明的你应该一玩就会，点击制作我们就开始进入自定义，自定义完成我们就可以监控了")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_9.png",alt:"img.png"}})]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("每种图形所表示的数据结构有所区别，但只要理解，构建自己的可视化轻而易举："),a("br"),s._v("\n折线图多用来表示时间轴的数据"),a("br"),s._v("\n柱状图多用来表示不同项目间共同项对比数据"),a("br"),s._v("\n饼状图多用来表示占比")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_10.png",alt:"img.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_11.png",alt:"img.png"}})]),s._v(" "),a("p",[s._v("当告警后会在告警信息中展示，我们可以去处理这条告警并留下记录，以免相同问题又要百度")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_12.png",alt:"img.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/easy-manager-tool/img_13.png",alt:"img.png"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);
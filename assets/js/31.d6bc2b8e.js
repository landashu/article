(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{508:function(s,a,t){"use strict";t.r(a);var e=t(41),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("Easy-Manager-Tool 是一个程序员使用的开发管理工具，在日常开发中使用的工具在这里都可以找到并使用，通常我们在开发的时候既需要 ssh 连接工具，还需要 sftp 连接工具以及监控工具，数据库连接工具等，Easy-Manager-Tool 就是要把这些工具通过最简单的，最有效的方式集成到一起，并形成联动，为开发者减少工具的下载与管理工作")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("Easy-Manager-Tool 是一个免费，闭源的工具，目前只提供 Docker 进行下载和安装使用。后续会在一些高级功能中有收费项，目前所看到的保证都不收费。")])]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("我们提供了最简单的 docker 安装方式")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("这里端口目前只能是 8081 所以端口不需要改；"),t("br"),s._v("\nconfig.database.url 需要改成你自己的数据库连接地址，数据库以及表会自动创建；"),t("br"),s._v("\n--config.file.ip 这个地址需要改成你宿主机的 IP 地址")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# 拉取镜像\ndocker pull 875730567/easy-manager-tool:latest\n\n# 运行容器\ndocker run -d -p 8081:8081 \\\n--name easy-manager-tool \\\n-e JAVA_ARGS="--config.database.url=127.0.0.1:3306/easy-manager-tool\n--config.database.name=root\n--config.database.password=Dev@root2021\n--config.file.ip=127.0.0.1" \\\n875730567/easy-manager-tool\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("运行成功后访问需要在端口后面加 /easy 才能访问成功")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://127.0.0.1:8081/easy\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"交流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交流"}},[s._v("#")]),s._v(" 交流")]),s._v(" "),t("div",{staticClass:"center-container"},[t("br"),s._v(" "),t("img",{staticClass:"no-zoom",attrs:{src:"/assets/img/mecode.png",width:"100"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);
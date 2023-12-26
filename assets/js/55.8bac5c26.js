(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{533:function(s,a,t){"use strict";t.r(a);var n=t(41),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("第七章中部署方案存在的问题：")]),s._v(" "),t("ol",[t("li",[s._v("一次只能选择一个微服务部署")]),s._v(" "),t("li",[s._v("只有一台生产者部署服务器")]),s._v(" "),t("li",[s._v("每个微服务只有一个实例，容错率低")])]),s._v(" "),t("p",[s._v("优化方案：")]),s._v(" "),t("ol",[t("li",[s._v("在一个 Jenkins 工程中可以选择多个微服务同时发布")]),s._v(" "),t("li",[s._v("在一个 Jenkins 工程中可以选择多台生产服务器同时部署")]),s._v(" "),t("li",[s._v("每个微服务都是以集群高可用形式部署")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/jenkins/507/img.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"优化jenkins工程中可以选择多个微服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化jenkins工程中可以选择多个微服务"}},[s._v("#")]),s._v(" 优化 Jenkins 工程中可以选择多个微服务")]),s._v(" "),t("p",[s._v("安装 Extended Choice Parameter 插件，到项目配置中，可以看到选择参数多了一个选项")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/jenkins/507/img_1.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/jenkins/507/img_2.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/jenkins/507/img_3.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/jenkins/507/img_4.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/jenkins/507/img_5.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"优化jenkins工程中可以选择多台生产服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化jenkins工程中可以选择多台生产服务器"}},[s._v("#")]),s._v(" 优化 Jenkins 工程中可以选择多台生产服务器")]),s._v(" "),t("p",[s._v("1. 在 Manager Jenkins->Configure System->Publish over SSH-> 在添加服务器")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/jenkins/507/img_6.png",alt:""}})]),s._v(" "),t("p",[s._v("2. 在到项目配置中添加服务器选择，和工程中选择多个微服务是类似的")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/jenkins/507/img_7.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/jenkins/507/img_8.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/jenkins/507/img_9.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"脚本编写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本编写"}},[s._v("#")]),s._v(" 脚本编写")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("// 版本\ndef tag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),s._v("\n// 镜像仓库的地址\ndef harbor_url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.81.102:85"')]),s._v("\n// 镜像仓库的项目,这里建议项目名称和jenkins的item项目名称、以及harbor的项目名称保持一致，否则用一下脚本会出问题\ndef harbor_project "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    // 获取当前选择的项目名称\n    def selectDProjectName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${project_name}")]),s._v('"')]),s._v(".split"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    // 获取服务器列表\n    def selectDServers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${publish_server}")]),s._v('"')]),s._v(".split"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    // 拉取代码\n    stage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pull code'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        checkout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$class")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GitSCM'")]),s._v(", branches: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*/${branch}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", extensions: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", userRemoteConfigs: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("credentialsId: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'80dfe5c5-1684-47b1-a410-6f53ceb3c543'")]),s._v(", url: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.168.81.15:3000/biguncle/test.git'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    // 编译并推送镜像仓库\n    stage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'build project'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        for"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("selectDProjectName.length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i++"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n            def project "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" selectDProjectName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".split"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            def port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" selectDProjectName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".split"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            // 编译\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mvn -f '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${project}")]),s._v(' clean package dockerfile:build"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"把jar上传镜像仓库"')]),s._v("\n            def oldImageName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${project}")]),s._v(':latest"')]),s._v("\n            def newImageName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harbor_url}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harbor_project}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${project}")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${tag}")]),s._v('"')]),s._v("\n            // 改名称 做规范\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker tag '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${oldImageName}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${newImageName}")]),s._v('"')]),s._v("\n            // 删除之前的 镜像\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker rmi '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${oldImageName}")]),s._v('"')]),s._v("\n            // 推送到 dockers仓库\n            withCredentials"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("usernamePassword"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("credentialsId: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8a3d7ab1-4cd6-482c-86c9-a12aa6404d98'")]),s._v(", passwordVariable: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'harbor_password'")]),s._v(", usernameVariable: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'harbor_account'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                // 登录\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker login -u '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harbor_account}")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harbor_password}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harbor_url}")]),s._v('"')]),s._v("\n                // 上传\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker push '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${newImageName}")]),s._v('"')]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"镜像推送成功"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            for"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("k")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("k"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("selectDServers.length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("k++"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                // 获取服务器名称\n                def currentServerName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" selectDServers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"执行远程命令 /home/server/deploy.sh '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harbor_url}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harbor_project}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${project_name}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${tag}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${port}")]),s._v('"')]),s._v("\n                sshPublisher"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("publishers: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sshPublisherDesc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("configName: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${currentServerName}")]),s._v('"')]),s._v(", transfers: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sshTransfer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cleanRemote: false, excludes: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(", execCommand: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/server/deploy.sh '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harbor_url}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harbor_project}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${project_name}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${tag}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${port}")]),s._v('"')]),s._v(", execTimeout: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120000")]),s._v(", flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[, ]+'")]),s._v(", remoteDirectory: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(", remoteDirectorySDF: false, removePrefix: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(", sourceFiles: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
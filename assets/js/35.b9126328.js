(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{512:function(s,e,a){"use strict";a.r(e);var r=a(41),t=Object(r.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("正常来说我们使用别人的私有库就足够了，比如使用 Harbor，它可以帮我们很好的管理 docker，以及部署为私有或公有库给企业或其他人使用，如果想开发一套那么需要了解 docker 相关的 API，其中 dockerAPI 分为如下三部分：")]),s._v(" "),a("ul",[a("li",[s._v("Docker Engine API：Docker Engine API 是 Docker 引擎的 API 接口，用于与 Docker 引擎进行通信和管理。通过 Docker Engine API，可以管理容器、镜像、网络、卷等 Docker 相关资源。可以使用 Docker Engine API 创建、启动、停止和删除容器，构建和推送镜像，以及进行容器和镜像的管理和监控。")]),s._v(" "),a("li",[s._v("Docker Hub API：Docker Hub API 是与 Docker Hub 交互的 API 接口。Docker Hub 是一个公共的 Docker 镜像仓库，用于存储和分享 Docker 镜像。Docker Hub API 允许用户通过 API 接口与 Docker Hub 进行交互，可以搜索、下载、上传和删除镜像，管理仓库、标签和组织等")]),s._v(" "),a("li",[s._v("Registry API：Registry API 是与 Docker Registry 进行交互的 API 接口。Docker Registry 是一个私有的 Docker 镜像仓库，可以自己搭建和管理。Registry API 允许用户通过 API 接口与私有的 Docker Registry 进行交互，可以上传、下载和删除镜像，管理仓库和标签等")])]),s._v(" "),a("p",[s._v("没错，如果需要建立自己的 docker 私有库就要用到 Registry API。")]),s._v(" "),a("h2",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),a("p",[s._v("要在本地搭建私有的 Docker Registry，您可以按照以下步骤进行操作：")]),s._v(" "),a("ol",[a("li",[s._v("确保已经安装 Docker，若还没有，您可以从 Docker 官方网站（https://www.docker.com/）下载并安装适用于您的操作系统的 Docker 版本。")]),s._v(" "),a("li",[s._v("配置 Docker Registry：接下来，您需要创建并配置 Docker Registry。可以按照以下步骤进行配置：\n"),a("ul",[a("li",[s._v("创建一个存储 Registry 数据的目录。例如，您可以创建一个名为 /var/lib/registry 的目录。")]),s._v(" "),a("li",[s._v("创建一个名为 config.yml 的配置文件，并在其中指定 Registry 的配置选项。例如，您可以指定 Registry 监听在 5000 端口上，并允许匿名访问。（具体见下面 config 配置讲解）")])])]),s._v(" "),a("li",[s._v("为 Docker Registry API 提前配置"),a("br"),s._v("\n先进行配置，去  "),a("code",[s._v("/etc/docker/daemon.json")]),s._v("  添加如下一句，最好是宿主机的 IP， "),a("code",[s._v("不要使用 127.0.0.1")]),s._v(" ，我这里是方便测试，不使用宿主机 IP，会造成在使用 Docker Engine API 报 HTTPS 错误。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "insecure-registries": ["127.0.0.1:5000"]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("配置完成后需要重新启动 Docker")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo systemctl restart docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("启动 Registry 容器：使用以下命令在本地启动 Registry 容器，官方文档 https://docs.docker.com/registry/deploying/?_gl=1"),a("em",[s._v("1ytdheb")]),s._v("_ga"),a("em",[s._v("ODY2NTEyNi4xNjkyMDAxODU2")]),s._v("_ga_XJWPQMJYHQ*MTY5Mzk5NzEyNy4yNS4xLjE2OTM5OTcyMTAuNTMuMC4w#native-basic-auth")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -d -p 5000:5000 --restart=always --name registry -v /opt/software/dockerRegistry:/var/lib/registry -v /opt/software/dockerRegistry/config.yml:/etc/docker/registry/config.yml registry:2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个命令将在本地启动一个名为 registry 的容器，并将本地的 /var/lib/registry 目录挂载到容器的 /var/lib/registry 目录，以保存 Registry 的数据。"),a("br"),s._v("\n5. 测试 Registry：现在，您的私有 Docker Registry 应该已经在本地成功搭建。您可以使用以下命令来测试 Registry 是否正常工作：")]),s._v(" "),a("ul",[a("li",[s._v("从 Docker Hub 拉取一个镜像：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker pull ubuntu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("标记该镜像为私有 Registry 的地址：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker tag ubuntu 127.0.0.1:5000/my-ubuntu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("将标记的镜像推送到私有 Registry：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker push 127.0.0.1:5000/my-ubuntu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("从私有 Registry 拉取镜像：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker pull 127.0.0.1:5000/my-ubuntu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果上述步骤都成功执行，那么私有 Docker Registry 就已经搭建好了，并且可以通过 http://127.0.0.1:5000/v2/my-ubuntu/tags/list 进行访问。")]),s._v(" "),a("h3",{attrs:{id:"config-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-yml"}},[s._v("#")]),s._v(" config.yml")]),s._v(" "),a("p",[s._v("config 里面是一些配置信息，包括存储库位置，日志，安全认证等，首先要配置安全认证")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 安装 htpasswd 文件的工具\nyum install -y httpd-tools\n# 创建一个 htpasswd 文件，并添加用户名和密码\nhtpasswd -Bbn user1 password1 > /opt/software/dockerRegistry/htpasswd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("配置 config.xml")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 指定配置文件的版本。目前可用的版本为0.1。\nversion: 0.1                                                                                                                                                                           \nlog:                                                                                                                                                                                   \n  fields:                                                                                                                                                                              \n    service: registry                                                                                                                                                                  \nstorage:                                                                                                                                                                               \n  cache:                                                                                                                                                                               \n    blobdescriptor: inmemory                                                                                                                                                           \n  filesystem:         \n    # 指定存储镜像数据的目录路径。                                                                                                                                                                 \n    rootdirectory: /var/lib/registry\n  # 可执行删除操作，不能省                                                                                                                                                   \n  delete:                                                                                                                                                                              \n    enabled: true\n# 暴漏端口                                                                                                                                                                      \nhttp:                                                                                                                                                                                  \n  addr: :5000                                                                                                                                                                          \n  headers:                                                                                                                                                                             \n    X-Content-Type-Options: [nosniff]    \n# 心跳                                                                                                                                              \nhealth:                                                                                                                                                                                \n  storagedriver:                                                                                                                                                                       \n    enabled: true                                                                                                                                                                      \n    interval: 10s                                                                                                                                                                      \n    threshold: 3     \n# 基本认证(Basic Auth)，还可以使用Bearer Token认证、AWS认证、LDAP认证\nauth:\n  htpasswd: \n    realm: registry\n    path: /opt/software/dockerRegistry/htpasswd \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("如果已经启动容器，修改后需要重新启动容器")]),s._v(" "),a("h2",{attrs:{id:"使用-docker-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-registry"}},[s._v("#")]),s._v(" 使用 Docker Registry")]),s._v(" "),a("p",[s._v("接下来先登录我们的私有库，如果是本机，使用 127.0.0.1，如果没设置账号密码，则默认是宿主机本身 SSH 连接的账号密码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker login <registry_host>\n# 可以使用快捷命令\ndocker login 127.0.0.1:5000 --username=xxx --password=xxxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("登出")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker logout <registry_host>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("为需要推送的镜像打 tag（必须）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker tag my-image:latest 127.0.0.1:5000/my-image:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("推送镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker push localhost:5000/my-image:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"访问-registry-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-registry-api"}},[s._v("#")]),s._v(" 访问 Registry API")]),s._v(" "),a("p",[s._v("API 的访问输入你 docker 所在的 IP，加以上设置的端口就行，访问需要带版本号，目前 Docker 建议使用 v2 版本，所以请求路径需要带上，如： http://xx.xxx.xx.xx:5000/v2/_catalog")]),s._v(" "),a("ul",[a("li",[s._v("检查连接（一定要考虑兼容）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("GET /v2/\n返回 200 代表ok\n返回 401 代表需要身份验证\n返回 404 代表注册表未实现 /v2/，有可能就是 v1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("列出存储库：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 获取全部\nGET /v2/_catalog\n{\n  "repositories": [\n    <name>,\n    ...\n  ]\n}\n// 分页获取\nGET /v2/_catalog?n=<integer>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("列出镜像 tags")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/v2/<ImagesName>/tags/list \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);
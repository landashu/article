(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{557:function(s,a,n){"use strict";n.r(a);var t=n(41),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"nginx-允许访问其他目录下的文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-允许访问其他目录下的文件"}},[s._v("#")]),s._v(" nginx 允许访问其他目录下的文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('        location /log/ {\n            add_header Content-Type "text/plain;charset=UTF-8";\n            # 被访问日志 5s 会刷新一次，建议谷浏览器看日志,其他浏览器看日志 怕 刷新后会回到顶部\n            add_header Refresh 5;\n            alias /usr/local/dev/logs/;\n        }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("alias 指定的路径是 location 的别名，不管 location 的值怎么写，资源的 真实路径都是 alias 指定的路径")]),s._v(" "),n("p",[s._v("多前端项目部署方式有很多，这里只说同一个 server 下的部署。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    server {\n        listen       80;\n        server_name  localhost;\n        #access_log  logs/host.access.log  main;\n        location / {\n            root   html/giant;\n            index  index.html index.htm;\n        }\n        location /admin {\n            alias /home/nginx-1.18.0/html/admin/;\n            try_files $uri $uri/ /admin/index.html;\n        }\n        location /api {\n            rewrite  ^/api/(.*)$ /$1 break;\n            proxy_pass   http://192.168.200.67:8888;\n        }\n    }\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("这里我第一个前端项目是公司官网，第二个项目是 vue 项目。我的 vue 输出文件夹的名称为 admin，和 location /admin 保持一致，具体原因可以见 try_files 讲解，如果不保持一直，刷新会 404。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/nginx/2/img_1.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"root-和-alias的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#root-和-alias的区别"}},[s._v("#")]),s._v(" root 和 alias 的区别")]),s._v(" "),n("p",[s._v("在于 nginx 如何解释 location 后面的 uri，这会使两者分别以不同的方式将请求映射到服务器文件上。"),n("br"),s._v("\nroot 的处理结果是：root 路径 ＋ location 路径"),n("br"),s._v("\n alias 的处理结果是：使用 alias 路径替换 location 路径"),n("br"),s._v("\n alias 是一个目录别名的定义，root 则是最上层目录的定义。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 如果一个请求的URI是 http://127.0.0.1:8080/t/a.html 时，web服务器将会返回服务器上的 html/giant/t/a.html的文件。\nlocation /t {\n\troot html/giant;\n}\n\n# 如果一个请求的URI是 http://127.0.0.1:8080/t/a.html 时，web服务器将会返回服务器上的 /home/nginx-1.18.0/html/admin/a.html的文件。\n# 注意这里是 /admin/a.html，因为alias会把location后面配置的路径丢弃掉，把当前匹配到的目录指向到指定的目录。\nlocation ^~ /t/ {\n\talias /home/nginx-1.18.0/html/admin/;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"try-files-讲解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#try-files-讲解"}},[s._v("#")]),s._v(" try_files 讲解")]),s._v(" "),n("p",[s._v("try_files 的语法解释")]),s._v(" "),n("ul",[n("li",[s._v("按指定的 file 顺序查找存在的文件，并使用第一个找到的文件进行请求处理")]),s._v(" "),n("li",[s._v("查找路径是按照给定的 root 或 alias 为根路径来查找的")]),s._v(" "),n("li",[s._v("如果给出的 file 都没有匹配到，则重新请求最后一个参数给定的 uri，就是新的 location 匹配")]),s._v(" "),n("li",[s._v("如果是格式 2，如果最后一个参数是 = 404 ，若给出的 file 都没有匹配到，则最后返回 404 的响应码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("location / {\n    try_files $uri $uri/ /index.php?$query_string;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("当用户请求 http://localhost/example 时，这里的 $uri (第一个) 就是 /example。 \ntry_files 会到硬盘里尝试找这个文件。如果存在名为 /$root/example（其中 $root 是项目代码安装目录）的文件，就直接把这个文件的内容发送给用户。 \n显然，目录中没有叫 example 的文件。然后就看 $uri/，增加了一个 /，也就是看有没有名为 /$root/example/ 的目录。 \n又找不到，就会 fall back 到 try_files 的最后一个选项 /index.php，发起一个内部 “子请求”，也就是相当于 nginx 发起一个 HTTP 请求到 http://localhost/index.php。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"rewrite-详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rewrite-详解"}},[s._v("#")]),s._v(" rewrite 详解")]),s._v(" "),n("p",[s._v("为什么要使用 rewrite，因为在上面示例中，代理会带着 /api 一起发向 service 服务，导致调用 api 接口异常，所以我们要去掉 /api 这个前缀，如代理请求的是 http://127.0.0.1:8080/api/user/login，实际我们要的是 http://127.0.0.1:8080/user/login"),n("br"),s._v("\n 针对 rewrite 的方式还有更好的解决方案 "),n("a",{attrs:{href:"https://www.jianshu.com/p/82ed25e6862f",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx location 中 proxy_pass 末尾带 / 和 不带 /"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"nginx-location-中-proxy-pass-末尾带-和-不带"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-location-中-proxy-pass-末尾带-和-不带"}},[s._v("#")]),s._v(" nginx location 中 proxy_pass 末尾带 / 和 不带 /")]),s._v(" "),n("p",[s._v("今天在配置 nginx 中遇到一个问题，想要让前端以如下方式访问")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 想让前端访问的url\nhttp://ip:port/api/hyq/user/login\n# nginx 配置\nlocation /api/hyq/ {\n    proxy_pass   http://127.0.0.1:8302;\n    access_log  logs/hyq.log  main;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("理想的是想让 内部代理到 http://127.0.0.1:8302/user/login"),n("br"),s._v("\n 实际代理到了 http://127.0.0.1:8302/api/hyq/user/login")]),s._v(" "),n("p",[s._v("我在项目中打印出地址截取到的是")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("api/hyq/user/login\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("于是看到了一篇博客可以如下方式配置 nginx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("location /api/hyq/ {\n    proxy_pass   http://127.0.0.1:8302/;\n    access_log  logs/hyq.log  main;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("ok 搞定。"),n("br"),s._v("\n也就是说 proxy_pass 路径后不带 /，会连带 location 所匹配到的路径一起访问 (http://127.0.0.1:8302/api/hyq/user/login)，带 / 则会忽略 location 所匹配的路径访问 ( http://127.0.0.1:8302/user/login )。")]),s._v(" "),n("p",[s._v("上一张解决问题的图，感谢大佬分享")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/nginx/2/img.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"nginx-http-转-https-post请求变成get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-http-转-https-post请求变成get"}},[s._v("#")]),s._v(" nginx http 转 https post 请求变成 get")]),s._v(" "),n("p",[s._v("http 跳转")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    server {\n        listen 80;\n        server_name www.xxxxxx.cn xxxxxx.cn;   \n        return 307 https://$host$request_uri;\n    }\n\n把 rewrite ^(.*) https://$server_name$1 permanent; 这句换掉\n换成 return 307 https://$host$request_uri; 这句话就可以解决\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"nginx-启动80端口可以telnet通-却不显示页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-启动80端口可以telnet通-却不显示页面"}},[s._v("#")]),s._v(" nginx 启动 80 端口可以 telnet 通，却不显示页面")]),s._v(" "),n("p",[s._v("今天意外的情况，导致服务器重启，重启后启动 nginx 访问页面的时候，页面一直在 load。"),n("br"),s._v("\n查了很多原因，发现 nginx 里得 error.log 一直输出如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("2021/01/29 18:18:23 [alert] 1606#0: worker process 1852 exited on signal 11\nngx_http_fastdfs_process_init pid=1853\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("网上找到的解决办法输入如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/etc/init.d/fdfs_storaged start\n/etc/init.d/fdfs_trackerd start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("就是把 fdfs 相关服务进行启动。")])])}),[],!1,null,null,null);a.default=e.exports}}]);
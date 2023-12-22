(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{541:function(s,e,n){"use strict";n.r(e);var a=n(41),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"service介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#service介绍"}},[s._v("#")]),s._v(" Service 介绍")]),s._v(" "),n("p",[s._v("在 kubernetes 中，pod 是应用程序的载体，我们可以通过 pod 的 ip 来访问应用程序，但是 pod 的 ip 地址不是固定的，这也就意味着不方便直接采用 pod 的 ip 对服务进行访问。")]),s._v(" "),n("p",[s._v("为了解决这个问题，kubernetes 提供了 Service 资源，Service 会对提供同一个服务的多个 pod 进行聚合，并且提供一个统一的入口地址。通过访问 Service 的入口地址就能访问到后面的 pod 服务。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/608/img_.png",alt:""}})]),s._v(" "),n("p",[s._v("Service 在很多情况下只是一个概念，真正起作用的其实是 kube-proxy 服务进程，每个 Node 节点上都运行着一个 kube-proxy 服务进程。当创建 Service 的时候会通过 api-server 向 etcd 写入创建的 service 的信息，而 kube-proxy 会基于监听的机制发现这种 Service 的变动，然后"),n("strong",[s._v("它会将最新的 Service 信息转换成对应的访问规则")]),s._v("。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/608/img_1.png",alt:""}})]),s._v(" "),n("p",[s._v("规则有 iptables，ipvs 等，简单介绍下 ipvs 规则")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@node1 ~]# ipvsadm -Ln\nIP Virtual Server version 1.2.1 (size=4096)\nProt LocalAddress:Port Scheduler Flags\n  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn\nTCP  10.97.97.97:80 rr\n  -> 10.244.1.39:80               Masq    1      0          0\n  -> 10.244.1.40:80               Masq    1      0          0\n  -> 10.244.2.33:80               Masq    1      0          0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("10.97.97.97:80 是 service 提供的访问入口，当访问这个入口的时候，可以发现后面有三个 pod 的服务在等待调用，kube-proxy 会基于 rr（轮询）的策略，将请求分发到其中一个 pod 上去，这个规则会同时在集群内的所有节点上都生成，所以在任何一个节点上访问都可以。")]),s._v(" "),n("p",[s._v("kube-proxy 目前支持三种工作模式:"),n("br"),s._v(" "),n("strong",[s._v("userspace 模式")]),n("br"),s._v("\n userspace 模式下，kube-proxy 会为每一个 Service 创建一个监听端口，发向 Cluster IP 的请求被 Iptables 规则重定向到 kube-proxy 监听的端口上，kube-proxy 根据 LB 算法选择一个提供服务的 Pod 并和其建立链接，以将请求转发到 Pod 上。  该模式下，kube-proxy 充当了一个四层负责均衡器的角色。由于 kube-proxy 运行在 userspace 中，在进行转发处理时会增加内核和用户空间之间的数据拷贝，虽然比较稳定，但是效率比较低。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/608/img_2.png",alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("iptables 模式")]),n("br"),s._v("\n iptables 模式下，kube-proxy 为 service 后端的每个 Pod 创建对应的 iptables 规则，直接将发向 Cluster IP 的请求重定向到一个 Pod IP。  该模式下 kube-proxy 不承担四层负责均衡器的角色，只负责创建 iptables 规则。该模式的优点是较 userspace 模式效率更高，但不能提供灵活的 LB 策略，当后端 Pod 不可用时也无法进行重试。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/608/img_3.png",alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("ipvs 模式")]),n("br"),s._v("\n ipvs 模式和 iptables 类似，kube-proxy 监控 Pod 的变化并创建相应的 ipvs 规则。ipvs 相对 iptables 转发效率更高。除此以外，ipvs 支持更多的 LB 算法。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/608/img_4.png",alt:""}})]),s._v(" "),n("p",[s._v("此模式必须安装 ipvs 内核模块，否则会降级为 iptables，开启 ipvs")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[root@k8s-master01 ~]# kubectl edit cm kube-proxy -n kube-system\n# 修改mode: "ipvs"\n[root@k8s-master01 ~]# kubectl delete pod -l k8s-app=kube-proxy -n kube-system\n[root@node1 ~]# ipvsadm -Ln\nIP Virtual Server version 1.2.1 (size=4096)\nProt LocalAddress:Port Scheduler Flags\n  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn\nTCP  10.97.97.97:80 rr\n  -> 10.244.1.39:80               Masq    1      0          0\n  -> 10.244.1.40:80               Masq    1      0          0\n  -> 10.244.2.33:80               Masq    1      0          0\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"service类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#service类型"}},[s._v("#")]),s._v(" Service 类型")]),s._v(" "),n("p",[s._v("Service 的资源清单文件：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kind: Service  # 资源类型\napiVersion: v1  # 资源版本\nmetadata: # 元数据\n  name: service # 资源名称\n  namespace: dev # 命名空间\nspec: # 描述\n  selector: # 标签选择器，用于确定当前service代理哪些pod\n    app: nginx\n  type: # Service类型，指定service的访问方式\n  clusterIP:  # 虚拟服务的ip地址\n  sessionAffinity: # session亲和性，支持ClientIP、None两个选项，可以把同一个源的请求，发到一个具体的Pod上\n  ports: # 端口信息\n    - protocol: TCP \n      port: 3017  # service端口\n      targetPort: 5003 # pod端口\n      nodePort: 31122 # 主机端口\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("type：")]),s._v(" "),n("ul",[n("li",[s._v("ClusterIP：默认值，它是 Kubernetes 系统自动分配的虚拟 IP，只能在集群内部访问")]),s._v(" "),n("li",[s._v("NodePort：将 Service 通过指定的 Node 上的端口暴露给外部，通过此方法，就可以在集群外部访问服务")]),s._v(" "),n("li",[s._v("LoadBalancer：使用外接负载均衡器完成到服务的负载分发，注意此模式需要外部云环境支持")]),s._v(" "),n("li",[s._v("ExternalName： 把集群外部的服务引入集群内部，直接使用")])]),s._v(" "),n("h2",{attrs:{id:"service使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#service使用"}},[s._v("#")]),s._v(" Service 使用")]),s._v(" "),n("h3",{attrs:{id:"实验环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实验环境准备"}},[s._v("#")]),s._v(" 实验环境准备")]),s._v(" "),n("p",[s._v("在使用 service 之前，首先利用 Deployment 创建出 3 个 pod，注意要为 pod 设置 "),n("code",[s._v("app=nginx-pod")]),s._v("  的标签"),n("br"),s._v("\n创建 deployment.yaml，内容如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apiVersion: apps/v1\nkind: Deployment      \nmetadata:\n  name: pc-deployment\n  namespace: dev\nspec: \n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx-pod\n  template:\n    metadata:\n      labels:\n        app: nginx-pod\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.17.1\n        ports:\n        - containerPort: 80\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[root@k8s-master01 ~]# kubectl create -f deployment.yaml\ndeployment.apps/pc-deployment created\n\n# 查看pod详情\n[root@k8s-master01 ~]# kubectl get pods -n dev -o wide --show-labels\nNAME                             READY   STATUS     IP            NODE     LABELS\npc-deployment-66cb59b984-8p84h   1/1     Running    10.244.1.39   node1    app=nginx-pod\npc-deployment-66cb59b984-vx8vx   1/1     Running    10.244.2.33   node2    app=nginx-pod\npc-deployment-66cb59b984-wnncx   1/1     Running    10.244.1.40   node1    app=nginx-pod\n\n# 为了方便后面的测试，修改下三台nginx的index.html页面（三台修改的IP地址不一致）\n# kubectl exec -it pc-deployment-66cb59b984-8p84h -n dev /bin/sh\n# echo "10.244.1.39" > /usr/share/nginx/html/index.html\n\n#修改完毕之后，访问测试\n[root@k8s-master01 ~]# curl 10.244.1.39\n10.244.1.39\n[root@k8s-master01 ~]# curl 10.244.2.33\n10.244.2.33\n[root@k8s-master01 ~]# curl 10.244.1.40\n10.244.1.40\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"clusterip类型的service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clusterip类型的service"}},[s._v("#")]),s._v(" ClusterIP 类型的 Service")]),s._v(" "),n("p",[s._v("是集群内部地址，只能通过 Node 集群内部访问，创建 service-clusterip.yaml 文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: service-clusterip\n  namespace: dev\nspec:\n  selector:\n    app: nginx-pod\n  clusterIP: 10.97.97.97 # service的ip地址，如果不写，默认会生成一个\n  type: ClusterIP\n  ports:\n  - port: 80  # Service端口       \n    targetPort: 80 # pod端口\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 创建service\n[root@k8s-master01 ~]# kubectl create -f service-clusterip.yaml\nservice/service-clusterip created\n\n# 查看service\n[root@k8s-master01 ~]# kubectl get svc -n dev -o wide\nNAME                TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)   AGE   SELECTOR\nservice-clusterip   ClusterIP   10.97.97.97   <none>        80/TCP    13s   app=nginx-pod\n\n# 查看service的详细信息\n# 在这里有一个Endpoints列表，里面就是当前service可以负载到的服务入口\n[root@k8s-master01 ~]# kubectl describe svc service-clusterip -n dev\nName:              service-clusterip\nNamespace:         dev\nLabels:            <none>\nAnnotations:       <none>\nSelector:          app=nginx-pod\nType:              ClusterIP\nIP:                10.97.97.97\nPort:              <unset>  80/TCP\nTargetPort:        80/TCP\nEndpoints:         10.244.1.39:80,10.244.1.40:80,10.244.2.33:80\nSession Affinity:  None\nEvents:            <none>\n\n# 查看ipvs的映射规则\n[root@k8s-master01 ~]# ipvsadm -Ln\nTCP  10.97.97.97:80 rr\n  -> 10.244.1.39:80               Masq    1      0          0\n  -> 10.244.1.40:80               Masq    1      0          0\n  -> 10.244.2.33:80               Masq    1      0          0\n\n# 访问10.97.97.97:80观察效果\n[root@k8s-master01 ~]# curl 10.97.97.97:80\n10.244.2.33\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("p",[n("strong",[s._v("Endpoint")])]),s._v(" "),n("p",[s._v("Endpoint 是 kubernetes 中的一个资源对象，存储在 etcd 中，用来记录一个 service 对应的所有 pod 的访问地址，它是根据 service 配置文件中 selector 描述产生的。")]),s._v(" "),n("p",[s._v("一个 Service 由一组 Pod 组成，这些 Pod 通过 Endpoints 暴露出来，"),n("strong",[s._v("Endpoints 是实现实际服务的端点集合")]),s._v("。换句话说，service 和 pod 之间的联系是通过 endpoints 实现的。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/608/img_5.png",alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("负载分发策略")]),n("br"),s._v("\n对 Service 的访问被分发到了后端的 Pod 上去，目前 kubernetes 提供了两种负载分发策略：")]),s._v(" "),n("ul",[n("li",[s._v("如果不定义，默认使用 kube-proxy 的策略，比如随机、轮询")]),s._v(" "),n("li",[s._v("基于客户端地址的会话保持模式，即来自同一个客户端发起的所有请求都会转发到固定的一个 Pod 上"),n("br"),s._v("\n此模式可以使在 spec 中添加 "),n("code",[s._v("sessionAffinity:ClientIP")]),s._v("  选项")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# 查看ipvs的映射规则【rr 轮询】\n[root@k8s-master01 ~]# ipvsadm -Ln\nTCP  10.97.97.97:80 rr\n  -> 10.244.1.39:80               Masq    1      0          0\n  -> 10.244.1.40:80               Masq    1      0          0\n  -> 10.244.2.33:80               Masq    1      0          0\n\n# 循环访问测试\n[root@k8s-master01 ~]# while true;do curl 10.97.97.97:80; sleep 5; done;\n10.244.1.40\n10.244.1.39\n10.244.2.33\n10.244.1.40\n10.244.1.39\n10.244.2.33\n\n# 修改分发策略----sessionAffinity:ClientIP\n\n# 查看ipvs规则【persistent 代表持久】\n[root@k8s-master01 ~]# ipvsadm -Ln\nTCP  10.97.97.97:80 rr persistent 10800\n  -> 10.244.1.39:80               Masq    1      0          0\n  -> 10.244.1.40:80               Masq    1      0          0\n  -> 10.244.2.33:80               Masq    1      0          0\n\n# 循环访问测试\n[root@k8s-master01 ~]# while true;do curl 10.97.97.97; sleep 5; done;\n10.244.2.33\n10.244.2.33\n10.244.2.33\n  \n# 删除service\n[root@k8s-master01 ~]# kubectl delete -f service-clusterip.yaml\nservice "service-clusterip" deleted\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("h3",{attrs:{id:"headliness类型的service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#headliness类型的service"}},[s._v("#")]),s._v(" HeadLiness 类型的 Service")]),s._v(" "),n("p",[s._v("在某些场景中，开发人员可能不想使用 Service 提供的负载均衡功能，而希望自己来控制负载均衡策略，针对这种情况，kubernetes 提供了 HeadLiness Service，这类 Service 不会分配 Cluster IP，如果想要访问 service，只能通过 service 的域名进行查询。")]),s._v(" "),n("p",[s._v("创建 service-headliness.yaml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: service-headliness\n  namespace: dev\nspec:\n  selector:\n    app: nginx-pod\n  clusterIP: None # 将clusterIP设置为None，即可创建headliness Service\n  type: ClusterIP\n  ports:\n  - port: 80    \n    targetPort: 80\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 创建service\n[root@k8s-master01 ~]# kubectl create -f service-headliness.yaml\nservice/service-headliness created\n\n# 获取service， 发现CLUSTER-IP未分配\n[root@k8s-master01 ~]# kubectl get svc service-headliness -n dev -o wide\nNAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE   SELECTOR\nservice-headliness   ClusterIP   None         <none>        80/TCP    11s   app=nginx-pod\n\n# 查看service详情\n[root@k8s-master01 ~]# kubectl describe svc service-headliness  -n dev\nName:              service-headliness\nNamespace:         dev\nLabels:            <none>\nAnnotations:       <none>\nSelector:          app=nginx-pod\nType:              ClusterIP\nIP:                None\nPort:              <unset>  80/TCP\nTargetPort:        80/TCP\nEndpoints:         10.244.1.39:80,10.244.1.40:80,10.244.2.33:80\nSession Affinity:  None\nEvents:            <none>\n\n# 查看域名的解析情况\n[root@k8s-master01 ~]# kubectl exec -it pc-deployment-66cb59b984-8p84h -n dev /bin/sh\n/ # cat /etc/resolv.conf\nnameserver 10.96.0.10\nsearch dev.svc.cluster.local svc.cluster.local cluster.local\n\n[root@k8s-master01 ~]# dig @10.96.0.10 service-headliness.dev.svc.cluster.local\nservice-headliness.dev.svc.cluster.local. 30 IN A 10.244.1.40\nservice-headliness.dev.svc.cluster.local. 30 IN A 10.244.1.39\nservice-headliness.dev.svc.cluster.local. 30 IN A 10.244.2.33\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("h3",{attrs:{id:"nodeport类型的service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodeport类型的service"}},[s._v("#")]),s._v(" NodePort 类型的 Service")]),s._v(" "),n("p",[s._v("在之前的样例中，创建的 Service 的 ip 地址只有集群内部才可以访问，如果希望将 Service 暴露给集群外部使用，那么就要使用到另外一种类型的 Service，称为 NodePort 类型。NodePort 的工作原理其实就是"),n("strong",[s._v("将 service 的端口映射到 Node 的一个端口上")]),s._v("，然后就可以通过 "),n("code",[s._v("NodeIp:NodePort")]),s._v("  来访问 service 了。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/608/img_6.png",alt:""}})]),s._v(" "),n("p",[s._v("创建 service-nodeport.yaml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: service-nodeport\n  namespace: dev\nspec:\n  selector:\n    app: nginx-pod\n  type: NodePort # service类型\n  ports:\n  - port: 80\n    nodePort: 30002 # 指定绑定的node的端口(默认的取值范围是：30000-32767), 如果不指定，会默认分配\n    targetPort: 80\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 创建service\n[root@k8s-master01 ~]# kubectl create -f service-nodeport.yaml\nservice/service-nodeport created\n\n# 查看service\n[root@k8s-master01 ~]# kubectl get svc -n dev -o wide\nNAME               TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)       SELECTOR\nservice-nodeport   NodePort   10.105.64.191   <none>        80:30002/TCP  app=nginx-pod\n\n# 接下来可以通过电脑主机的浏览器去访问集群中任意一个nodeip的30002端口，即可访问到pod\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"loadbalancer类型的service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loadbalancer类型的service"}},[s._v("#")]),s._v(" LoadBalancer 类型的 Service")]),s._v(" "),n("p",[s._v("LoadBalancer 和 NodePort 很相似，目的都是向外部暴露一个端口，区别在于 LoadBalancer 会在集群的外部再来做一个负载均衡设备，而这个设备需要外部环境支持的，外部服务发送到这个设备上的请求，会被设备负载之后转发到集群中。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/608/img_7.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"externalname类型的service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#externalname类型的service"}},[s._v("#")]),s._v(" ExternalName 类型的 Service")]),s._v(" "),n("p",[s._v("ExternalName 类型的 Service 用于引入集群外部的服务，它通过 "),n("code",[s._v("externalName")]),s._v("  属性指定外部一个服务的地址，然后在集群内部访问此 service 就可以访问到外部的服务了。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/608/img_8.png",alt:""}})]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: service-externalname\n  namespace: dev\nspec:\n  type: ExternalName # service类型\n  externalName: www.baidu.com  #改成ip地址也可以\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 创建service\n[root@k8s-master01 ~]# kubectl  create -f service-externalname.yaml\nservice/service-externalname created\n\n# 域名解析\n[root@k8s-master01 ~]# dig @10.96.0.10 service-externalname.dev.svc.cluster.local\nservice-externalname.dev.svc.cluster.local. 30 IN CNAME www.baidu.com.\nwww.baidu.com.          30      IN      CNAME   www.a.shifen.com.\nwww.a.shifen.com.       30      IN      A       39.156.66.18\nwww.a.shifen.com.       30      IN      A       39.156.66.14\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);
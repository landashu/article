(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{544:function(s,a,n){"use strict";n.r(a);var e=n(41),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("之前在 kubernetes 中完成的所有操作都是通过命令行工具 kubectl 完成的。其实，为了提供更丰富的用户体验，kubernetes 还开发了一个基于 web 的用户界面（Dashboard）。用户可以使用 Dashboard 部署容器化的应用，还可以监控应用的状态，执行故障排查以及管理 kubernetes 中各种资源。")]),s._v(" "),n("h2",{attrs:{id:"部署dashboard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署dashboard"}},[s._v("#")]),s._v(" 部署 Dashboard")]),s._v(" "),n("p",[s._v("1. 下载 yaml，并运行 Dashboard")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载yaml")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget  https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改kubernetes-dashboard的Service类型")]),s._v("\nkind: Service\napiVersion: v1\nmetadata:\n  labels:\n    k8s-app: kubernetes-dashboard\n  name: kubernetes-dashboard\n  namespace: kubernetes-dashboard\nspec:\n  type: NodePort  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新增")]),s._v("\n  ports:\n    - port: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\n      targetPort: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v("\n      nodePort: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30009")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新增")]),s._v("\n  selector:\n    k8s-app: kubernetes-dashboard\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f recommended.yaml")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看namespace下的kubernetes-dashboard下的资源")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pod,svc -n kubernetes-dashboard")]),s._v("\nNAME                                            READY   STATUS    RESTARTS   AGE\npod/dashboard-metrics-scraper-c79c65bb7-zwfvw   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          111s\npod/kubernetes-dashboard-56484d4c5-z95z5        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          111s\n\nNAME                               TYPE       CLUSTER-IP      EXTERNAL-IP  PORT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         AGE\nservice/dashboard-metrics-scraper  ClusterIP  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".89.218    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("/TCP        111s\nservice/kubernetes-dashboard       NodePort   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.104")]),s._v(".178.171  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(":30009/TCP   111s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("p",[s._v("2. 创建访问账户，获取 token")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建账号")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01-1 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create serviceaccount dashboard-admin -n kubernetes-dashboard")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 授权")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01-1 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create clusterrolebinding dashboard-admin-rb --clusterrole=cluster-admin --serviceaccount=kubernetes-dashboard:dashboard-admin")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取账号token")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  kubectl get secrets -n kubernetes-dashboard | grep dashboard-admin")]),s._v("\ndashboard-admin-token-xbqhh        kubernetes.io/service-account-token   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("      2m35s\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl describe secrets dashboard-admin-token-xbqhh -n kubernetes-dashboard")]),s._v("\nName:         dashboard-admin-token-xbqhh\nNamespace:    kubernetes-dashboard\nLabels:       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nAnnotations:  kubernetes.io/service-account.name: dashboard-admin\n              kubernetes.io/service-account.uid: 95d84d80-be7a-4d10-a2e0-68f90222d039\n\nType:  kubernetes.io/service-account-token\n\nData\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\nnamespace:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" bytes\ntoken:      eyJhbGciOiJSUzI1NiIsImtpZCI6ImJrYkF4bW5XcDhWcmNGUGJtek5NODFuSXl1aWptMmU2M3o4LTY5a2FKS2cifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJkYXNoYm9hcmQtYWRtaW4tdG9rZW4teGJxaGgiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGFzaGJvYXJkLWFkbWluIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiOTVkODRkODAtYmU3YS00ZDEwLWEyZTAtNjhmOTAyMjJkMDM5Iiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmVybmV0ZXMtZGFzaGJvYXJkOmRhc2hib2FyZC1hZG1pbiJ9.NAl7e8ZfWWdDoPxkqzJzTB46sK9E8iuJYnUI9vnBaY3Jts7T1g1msjsBnbxzQSYgAG--cV0WYxjndzJY_UWCwaGPrQrt_GunxmOK9AUnzURqm55GR2RXIZtjsWVP2EBatsDgHRmuUbQvTFOvdJB4x3nXcYLN2opAaMqg3rnU2rr-A8zCrIuX_eca12wIp_QiuP3SF-tzpdLpsyRfegTJZl6YnSGyaVkC9id-cxZRb307qdCfXPfCHR_2rt5FVfxARgg_C0e3eFHaaYQO7CitxsnIoIXpOFNAR8aUrmopJyODQIPqBWUehb7FhlU1DCduHnIIXVC_UICZ-MKYewBDLw\nca.crt:     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1025")]),s._v(" bytes\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("3. 通过浏览器访问 Dashboard 的 UI"),n("br"),s._v("\n 在登录页面上输入上面的 token")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/612/img.png",alt:""}})]),s._v(" "),n("p",[s._v("出现下面的页面代表成功")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/612/img_1.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"使用dashboard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用dashboard"}},[s._v("#")]),s._v(" 使用 DashBoard")]),s._v(" "),n("p",[n("strong",[s._v("查看")]),n("br"),s._v("\n选择指定的命名空间 "),n("code",[s._v("dev")]),s._v(" ，然后点击 "),n("code",[s._v("Deployments")]),s._v(" ，查看 dev 空间下的所有 deployment")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/612/img_2.png",alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("扩缩容")]),n("br"),s._v("\n在 "),n("code",[s._v("Deployment")]),s._v("  上点击 "),n("code",[s._v("规模")]),s._v(" ，然后指定 "),n("code",[s._v("目标副本数量")]),s._v(" ，点击确定")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/612/img_3.png",alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("编辑")]),n("br"),s._v("\n在 "),n("code",[s._v("Deployment")]),s._v("  上点击 "),n("code",[s._v("编辑")]),s._v(" ，然后修改 "),n("code",[s._v("yaml文件")]),s._v(" ，点击确定")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/612/img_4.png",alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("查看 Pod")]),n("br"),s._v("\n 点击 "),n("code",[s._v("Pods")]),s._v(" , 查看 pods 列表")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/612/img_5.png",alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("操作 Pod")]),n("br"),s._v("\n 选中某个 Pod，可以对其执行日志（logs）、进入执行（exec）、编辑、删除操作")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/kubernetes/612/img_6.png",alt:""}})])])}),[],!1,null,null,null);a.default=t.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{492:function(s,a,n){"use strict";n.r(a);var t=n(41),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"模块机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块机制"}},[s._v("#")]),s._v(" 模块机制")]),s._v(" "),n("p",[s._v("当我们导入一个 jar 包做为依赖时（包括 JDK 官方库），实际上很多功能我们并不会用到，但是由于他们是属于同一个 jar 捆绑在一起，这样就会导致我们可能只用到一部分功能，但是需要引用一个完整的类库，实际上我们可以把用不到的类库排除掉，大大降低 jar 库的规模。")]),s._v(" "),n("p",[s._v("JAVA9 引入了模块机制来对这种情况进行优化，在之前我们的项目如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/1.jpg",alt:""}})]),s._v(" "),n("p",[s._v("引入模块机制之后，如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/2.jpg",alt:""}})]),s._v(" "),n("p",[s._v("可以看到，模块可以由一个或者多个在一起的 Java 包组成，通过江这些包分出不同的模块，我们就可以按照模块的方式进行管理了。这里我们创建一个新的项目，并在 src 目录下，搭建 module-info.java 文件表示此项目采用模块机制，我们可以在 idea 右键创建 module-info.java 文件")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/3.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/4.jpg",alt:""}})]),s._v(" "),n("p",[s._v("在 JAVA 9 如果不创建 module-info.java，则所有包都会被加载，若希望分的清楚，可以创建 module-info.java，一旦创建 module-info.java 则只会导入 JAVA9 的部分基础包，如 Logger 类，以前用的是 java.util.logging 的，但创建 module-info.java 后只有 java.lang.System 下的，我们可以在 module-info.java 导入我们想用的")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/5.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/6.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/7.jpg",alt:""}})]),s._v(" "),n("p",[s._v("如果加了 module-info.java 则需要清楚了解你需要使用的包位于哪里，如果使用反射的话，没有导入这样的包会报错，如下对 String 做反射报错结果")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/8.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/9.jpg",alt:""}})]),s._v(" "),n("p",[s._v("JAVA9 的反射 API 封装和安全性得到了改进，如果模块没有明确授权给其他模块使用反射的权限，那么其他模块是不允许使用反射进行修改的，看来 Unsafe 类是完不成了。对于模块的机制具有以下四中类型：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("系统模块")]),s._v("：来自 JDK 和 JRE 的模块（官方提供的模块，比如我们上面用的），我们也可以直接使用 java --list-modules 命令来列出所有的模块，不同的模块会导出不同的包供我们使用。")]),s._v(" "),n("li",[n("strong",[s._v("应用程序模块")]),s._v("：我们自己写的 JAVA 模块项目")]),s._v(" "),n("li",[n("strong",[s._v("自动模块")]),s._v("：可能有些库并不是 Java9 以上的模块项目，这种时候需要做兼容了，默认情况下是直接导出所有的包，可以访问所有其他模块提供类，不然之前版本的库就用不了了。")]),s._v(" "),n("li",[n("strong",[s._v("未命名的模块")]),s._v("：我们自己创建的一个 Java 项目，如果没有创建 module-info.java，那么会按照未命名模块进行处理，未命名模块同样可以访问所有其他模块提供的类，这样我们之前写的 java8 代码才能政策地在 java9 以及之后的版本下运行。不过，由于没有使用 java9 的模块新特性，未命名模块只能默认暴露给其他未命名的模块和自动模块，应用程序模块无法访问这些（实际上就是传统 java8 以下的变成模式，因为没有模块只需要导包就行）")])]),s._v(" "),n("p",[s._v("我们也可以自己写一些 jar 提供别人使用，在使用的时候使用 module-info.java 让控制哪些导入，哪些不导入")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/10.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/11.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/12.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/13.jpg",alt:""}})]),s._v(" "),n("p",[s._v("requires 还可以加 static 关键字，加了 static 之后，在编译的时候会依然有这个包，但是在运行的时候就会报找不到该包。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/14.jpg",alt:""}})]),s._v(" "),n("p",[s._v("除了 exports 可以跟 to 关键字，代表暴露给谁，指明哪些包可以使用我这个包")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/15.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/16.jpg",alt:""}})]),s._v(" "),n("p",[s._v("当 a 使用了某些包后，默认 b 是不能使用 a 所使用的包的，也就是没有传递性，我们所导入包 requires 后面加 transitive 关键字让其把依赖传递")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version//117.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/18.jpg",alt:""}})]),s._v(" "),n("p",[s._v("如果我们对 以上的 User 使用反射，也是不能直接使用的，会报错")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/19.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/20.jpg",alt:""}})]),s._v(" "),n("p",[s._v("需要使用 open 关键字对整个所需要反射的 module 进行描述，如果不想对 module 进行描述，也可以对 module 下的需要反射类所在的包进行 opens 描述")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/21.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/22.jpg",alt:""}})]),s._v(" "),n("p",[s._v("uses 语句使用服务接口的名字，当前模块就会发现它，使用 java.util.ServiceLoader 类进行加载，必须是本模块中的，不能是其他模块中的。其实现类可以由其他模块提供.")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/23.jpg",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/java/version/1/24.jpg",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"jshell交互式编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jshell交互式编程"}},[s._v("#")]),s._v(" JShell 交互式编程")]),s._v(" "),n("p",[s._v("java9 为我们提供了一种交互式变成工具 Jshell，你还别说，真有 Python 的味道")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("C:\\Users\\User>jshell\n|  欢迎使用 JShell -- 版本 17.0.3.1\n|  要大致了解该版本, 请键入: /help intro\n\njshell>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("环境配置完成后，我们只需要输入 jshell 命令即可开启交互式编程了，它支持我们一条一条命令进行操作。比如我们来做一个简单的计算：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("jshell> int a = 10\na ==> 10\n\njshell> int b = 10\nb ==> 10\n\njshell> int c = a/b\nc ==> 1\n\njshell>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("使用 /vars 可以看到我们定义的所有变量")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("jshell> /vars\n|    int a = 10\n|    int b = 10\n|    int c = 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("我们也可以创一个方法，并通过 /method 方法列出所有方法，并调用方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("jshell> public int max(int a,int b){\n   ...>     return a > b? a: b;\n   ...> }\n|  已创建 方法 max(int,int)\n\njshell> /method\n|    int max(int,int)\n\njshell> max(19,20)\n$5 ==> 20\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"接口中的private方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口中的private方法"}},[s._v("#")]),s._v(" 接口中的 private 方法")]),s._v(" "),n("p",[s._v("在 Java8 中，接口中的方法支持添加 default 关键字来添加默认实现；而在 java9 中，接口再次得到强化，提供接口中可以存在私有方法。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('package com.b;\n\npublic interface Test {\n\n    default void test(){\n        this.test1();\n        System.out.println("默认方法");\n    }\n\n    private void test1(){\n        System.out.println("私有方法");\n    }\n\n    static void test2(){\n        System.out.println("静态方法");\n    }\n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("package com.b;\n\npublic class MainB implements Test {\n\n    public static void main(String[] args){\n        MainB mainB = new MainB();\n        mainB.test();\n        Test.test2();\n    }\n\n}\n\n私有方法\n默认方法\n静态方法\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"集合类新增工厂方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集合类新增工厂方法"}},[s._v("#")]),s._v(" 集合类新增工厂方法")]),s._v(" "),n("p",[s._v("在之前，如果我们想要快速创建一个 Map 可以通过以下方式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    public static void main(String[] args){\n        Map<String,String> map = new HashMap(3);\n        map.put("key","value");\n        \n        map = new HashMap<String,String>(3){{\n            put("key","value");\n        }};    \n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("在 java9 之后，我们可以直接通过 of 方法来快速创建，但是这种方式就不能使用 put 方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Map<String, String> key = Map.of("key", "value");\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"改进的stream-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#改进的stream-api"}},[s._v("#")]),s._v(" 改进的 Stream API")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    public static void main(String[] args){\n        // java8 只能使用of，为null会报错\n        Stream.of(null).forEach(System.out::println);\n\n        // Java9 允许为null\n        Stream.ofNullable(null).forEach(System.out::println);\n\n        // java8 允许生成无限的数据，可以用limit限制\n        Stream.iterate(0,i -> i+1).limit(20).forEach(System.out::println);\n\n        // java9 变为使用表达式来限制 相当于 for (int i=0;i<20;i++)\n        Stream.iterate(0,i -> i < 20,i -> i + 1).forEach(System.out::println);\n\n        // java9 还增加了截断流, i < 10，生成 小于 10 的数据\n        Stream.iterate(0,i -> i < 20,i -> i + 1).takeWhile(i -> i>10).forEach(System.out::println);\n\n        // java9 还增加了删除流, i < 10，小于 10 的数据都被删掉，相当于值打印 i >= 10 的数据\n        Stream.iterate(0,i -> i < 20,i -> i + 1).dropWhile(i -> i>10).forEach(System.out::println);\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"其他小改动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他小改动"}},[s._v("#")]),s._v(" 其他小改动")]),s._v(" "),n("p",[s._v("java7 新增了 Try-with-resources（只有实现了 AutoCloseable 或 Closeable 接口的资源），JAVA9 有对 try 增强")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public void java8(){\n        try (InputStream stream = Files.newInputStream(Paths.get("pom.xml"))){\n                stream....\n        }catch(Exception e){\n            e.printStackTrace();\n        }\n    }\n\n    public void java9() throws IOException {\n        InputStream stream = Files.newInputStream(Paths.get("pom.xml"));\n        try (stream){\n            for (int i = 0; i < 100; i++) {\n                System.out.println(stream.read());\n            }\n        }catch(Exception e){\n            e.printStackTrace();\n        }\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("Optional 增强")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    public void java8(){\n        String s = null;\n        Optional.ofNullable(s).ifPresent(str -> System.out.println("str = " + str));\n    }\n\n    public void java9() throws IOException {\n        String s = null;\n        // 类似于 if else\n        Optional.ofNullable(s)\n                .ifPresentOrElse(str -> System.out.println("str = " + str),() -> System.out.println("MainB.java9"));\n    }\n\n    public void java9_1()  {\n        String s = null;\n        // 类似于 if else\n        Optional.ofNullable(s)\n                .ifPresentOrElse(str -> System.out.println("str = " + str),() -> System.out.println("MainB.java9"));\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
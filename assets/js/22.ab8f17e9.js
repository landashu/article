(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{499:function(a,s,e){"use strict";e.r(s);var r=e(41),n=Object(r.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("在早期的 Spring 中，我们都是使用 XML 来进行相应的 Bean 依赖描述和属性描述，但在 Spring Boot 中大多还是习惯使用注解的方式来实现，那这里我就来总结下在 Spring 生命周期中，有哪些类提供了扩展可以给我们实现，以及原先 xml 的方式和注解方式的两种实现方式。")]),a._v(" "),e("h2",{attrs:{id:"spring-ioc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc"}},[a._v("#")]),a._v(" Spring IOC")]),a._v(" "),e("h3",{attrs:{id:"bean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean"}},[a._v("#")]),a._v(" @Bean")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<bean id="student" class="com.xinhua.study.bean.Student" scope="prototype" init-method="init()" destroy-method="destroy()"/>\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"scope"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[a._v("#")]),a._v(" @Scope")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('scope="singleton/prototype"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"postconstruct"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postconstruct"}},[a._v("#")]),a._v(" @PostConstruct")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("init-method\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"predestroy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#predestroy"}},[a._v("#")]),a._v(" @PreDestroy")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("destroy-method\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"spring-di"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-di"}},[a._v("#")]),a._v(" Spring DI")]),a._v(" "),e("p",[a._v("Autowired+Qualifier=Resource 这就是他们三者的关系，Autowired 根据类型找实现类，一个接口有多个实现类时需要通过 Qualifier 来指明需要哪个实现类，这是就需要 Autowired+Qualifier 一起使用才可以。Resource 则是不声明名称时按照类型查找效果与 Autowired 相同，声明名称时就等于 Autowired+Qualifier 的组合")]),a._v(" "),e("h3",{attrs:{id:"autowired"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autowired"}},[a._v("#")]),a._v(" @Autowired")]),a._v(" "),e("p",[a._v("@Autowired 可以单独使用。如果单独使用，它将按类型装配。因此，如果在容器中声明了多个相同类型的 bean，则会出现问题，因为 @Autowired 不知道要使用哪个 bean 来注入。因此，使用 @Qualifier 与 @Autowired 一起，通过指定 bean 名称来阐明实际装配的 bean")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('ref="类型"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"qualifier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qualifier"}},[a._v("#")]),a._v(" @Qualifier")]),a._v(" "),e("p",[a._v('@Qualifier 默认按名称装配（这个注解是属于 spring 的），value 默认 @Qualifier (value = "") 空值。')]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('ref="类型"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"resource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resource"}},[a._v("#")]),a._v(" @Resource")]),a._v(" "),e("p",[a._v("@Resource（这个注解属于 J2EE 的），默认按照名称进行装配，名称可以通过 name 属性进行指定， 如果没有指定 name 属性，当注解写在字段上时，默认取字段名进行按照名称查找，如果注解写在 setter 方法上默认取属性名进行装配。 当找不到与名称匹配的 bean 时才按照类型进行装配。但是需要注意的是，如果 name 属性一旦指定，就只会按照名称进行装配。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('ref="类型"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[a._v("#")]),a._v(" @Value")]),a._v(" "),e("p",[a._v("给基本数据类型赋值")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('ref="基础数据类型"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"spring-aop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop"}},[a._v("#")]),a._v(" Spring AOP")]),a._v(" "),e("h3",{attrs:{id:"aspect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aspect"}},[a._v("#")]),a._v(" @Aspect")]),a._v(" "),e("p",[a._v("声明界面")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apo:aspect\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"before"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#before"}},[a._v("#")]),a._v(" @Before")]),a._v(" "),e("p",[a._v("前置通知")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apo:before\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"afterreturning"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#afterreturning"}},[a._v("#")]),a._v(" @AfterReturning")]),a._v(" "),e("p",[a._v("后置正常通知")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aop:after-returning\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"afterthrowing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#afterthrowing"}},[a._v("#")]),a._v(" @AfterThrowing")]),a._v(" "),e("p",[a._v("后置异常通知")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aop:after-throwing\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"after"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#after"}},[a._v("#")]),a._v(" @After")]),a._v(" "),e("p",[a._v("最终通知")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aop:after\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"around"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#around"}},[a._v("#")]),a._v(" @Around")]),a._v(" "),e("p",[a._v("环绕通知")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aop:around\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"其他注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他注解"}},[a._v("#")]),a._v(" 其他注解")]),a._v(" "),e("h3",{attrs:{id:"order"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[a._v("#")]),a._v(" @Order")]),a._v(" "),e("p",[a._v("最开始 Order 注解用于切面的优先级指定；在 4.0 之后对它的功能进行了增强，支持集合的注入时，指定集合中 bean 的顺序，并且特别指出了，它对于单实例的 bean 之间的顺序，没有任何影响。")]),a._v(" "),e("p",[a._v("注解 @Order 或者接口 Ordered 的作用是定义 Spring IOC 容器中 Bean 的执行顺序的优先级，而不是定义 Bean 的加载顺序，Bean 的加载顺序不受 @Order 或 Ordered 接口的影响；")]),a._v(" "),e("p",[a._v("@Order 注解不能指定 bean 的加载顺序，它适用于 AOP 的优先级，以及将多个 Bean 注入到集合时，这些 bean 在集合中的顺序")]),a._v(" "),e("h4",{attrs:{id:"错误使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误使用"}},[a._v("#")]),a._v(" 错误使用")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 错误使用方法 1\n@Component\n@Order(2)\npublic class OrderA {\n    public OrderA() {\n        System.out.println("************ A ************");\n    }\n}\n\n@Component\n@Order(1)\npublic class OrderB {\n    public OrderB() {\n        System.out.println("************ B ************");\n    }\n}\n// 错误使用方法 2\n@Configuration\npublic class OrderBeanConfig {\n \n    @Order(2)\n    @Bean\n    public OrderC orderC() {\n        return new OrderC();\n    }\n \n    @Order(1)\n    @Bean\n    public OrderD orderD() {\n        return new OrderD();\n    }\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br"),e("span",{staticClass:"line-number"},[a._v("31")]),e("br"),e("span",{staticClass:"line-number"},[a._v("32")]),e("br")])]),e("h4",{attrs:{id:"正确使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正确使用"}},[a._v("#")]),a._v(" 正确使用")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('@Component\n@Order(value = 3)\npublic class AnoBeanA implements IBean{\n    public AnoBeanA() {\n        System.out.println("************ AnoBean A ************");\n    }\n}\n\n@Component\n@Order(value = 2)\npublic class AnoBeanB implements IBean{\n \n    public AnoBeanB() {\n        System.out.println("************ AnoBean B ************");\n    }\n}\n\n@Component\npublic class AnoBean {\n    public AnoBean(List<IBean> anoBeanList) {\n        for (IBean bean : anoBeanList) {\n            System.out.println("in ano testBean: "+ bean.getClass())\n        }\n    }\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br")])]),e("h3",{attrs:{id:"autoconfigureorder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autoconfigureorder"}},[a._v("#")]),a._v(" @AutoConfigureOrder")]),a._v(" "),e("p",[a._v("@AutoConfigureOrder 指定外部依赖的 AutoConfig 的加载顺序（即定义在 / META-INF/spring.factories 文件中的配置 bean 优先级)，在当前工程中使用这个注解并没有什么用，同样的 @AutoConfigureBefore 和 @AutoConfigureAfter 这两个注解的适用范围和 @AutoConfigureOrder 一样")])])}),[],!1,null,null,null);s.default=n.exports}}]);
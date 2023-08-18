(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{495:function(n,e,s){"use strict";s.r(e);var a=s(41),t=Object(a.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("Spring 三级缓存是 Spring 框架中用于管理 Bean 对象的缓存机制。它由三个不同的缓存区域组成，分别是 singletonObjects、earlySingletonObjects 和 singletonFactories。")]),n._v(" "),s("ul",[s("li",[n._v("singletonObjects（一级缓存，成品对象）：单例对象缓存区域存储已经完全初始化后的单例对象。当第一次使用 getBean () 方法获取 bean 时，Spring 会尝试从这个缓存区获取对象，如果能够找到，则直接返回该对象实例。")]),n._v(" "),s("li",[n._v("earlySingletonObjects（二级缓存，代理对象，特殊的成品对象）：如果一个单例对象需要引用另一个单例对象，但后者尚未被完全初始化，那么容器将创建一个代理对象（Proxy Object），并将其放到 earlySingletonObjects 中。这个代理对象会暴露与实际对象相同的接口，并且能够对其进行一些基本操作，但是它还没有被完全初始化。")]),n._v(" "),s("li",[n._v("singletonFactories（三级缓存，半成品对象也是工厂对象）：单例工厂缓存区域存储创建 bean 实例的 ObjectFactory。在 Bean 依赖关系的创建过程中，如果 A 依赖 B，B 又依赖 A，那么在创建 A 和 B 的过程中就会出现循环依赖的问题。Spring 就是通过提前暴露一个未完成初始化的 Bean 来解决这个问题的。")])]),n._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[n._v("提示")]),n._v(" "),s("p",[n._v("对于 spring 设计没有完全理解的同学可能很难明白以上的话，还是需要用代码加一说明，以下文章会议代码的方式全程讲清楚")])]),n._v(" "),s("h2",{attrs:{id:"代码介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码介绍"}},[n._v("#")]),n._v(" 代码介绍")]),n._v(" "),s("p",[n._v("首先 Spring 在初始化的时候会先把所有 Bean 加载到 Beandefinition 的缓存中，后续所有对 Bean 的创建都是从 Beandefinition 中获取详细可以看 Spring 源码阅读（一） ，然后再进行 Bean 生命周期的过程，创建好 Bean 的实例放入到 singletonObjects 缓存中，但是代码的第一步都是从获取开始，只有获取不到我才创建")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("    public Object getBean(String name) throws BeansException {\n        return doGetBean(name, null);\n    }\n\n    public Object getBean(String name, Object... args) throws BeansException {\n        return doGetBean(name, args);\n    }\n\n    public <T> T getBean(String name, Class<T> requiredType) throws BeansException {\n        return (T) getBean(name);\n    }\n\n    protected <T> T doGetBean(final String name, final Object[] args) {\n        // 从缓存中获取实例\n        Object sharedInstance = getSingleton(name);\n        if (sharedInstance != null) {\n            // 如果实现了 FactoryBean，则需要调用 FactoryBean#getObject\n            return (T) getObjectForBeanInstance(sharedInstance, name);\n        }\n        // 从BeanDefinition列表中获取对象\n        BeanDefinition beanDefinition = getBeanDefinition(name);\n        // Bean实例的创建过程\n        Object bean = doCreateBean(name, beanDefinition, args);\n        // 如果实现了 FactoryBean，则需要调用 FactoryBean#getObject\n        return (T) getObjectForBeanInstance(bean, name);\n    }\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br")])]),s("p",[n._v("可以看到 getSingleton 方法就是获取单例，一旦有则直接返回，但第一次肯定是没有的，详细看下他的获取方式")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("    public Object getSingleton(String beanName) {\n        // 从一级缓存中获取\n        Object singletonObject = singletonObjects.get(beanName);\n        if (null == singletonObject) {\n            singletonObject = earlySingletonObjects.get(beanName);\n            // 判断二级缓存中是否有对象，这个对象就是代理对象，因为只有代理对象才会放到三级缓存中\n            if (null == singletonObject) {\n                ObjectFactory<?> singletonFactory = singletonFactories.get(beanName);\n                if (singletonFactory != null) {\n                    singletonObject = singletonFactory.getObject();\n                    // 把三级缓存中的代理对象中的真实对象获取出来，放入二级缓存中\n                    earlySingletonObjects.put(beanName, singletonObject);\n                    singletonFactories.remove(beanName);\n                }\n            }\n        }\n        return singletonObject;\n    }\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("p",[n._v("没有获取到实例则从 beanDefinition 中获取 Bean 的定义信息调用 doCreateBean 创建 Bean 的实例")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('    protected Object doCreateBean(String beanName, BeanDefinition beanDefinition, Object[] args) {\n        Object bean = null;\n        try {\n            // 实例化 Bean\n            bean = createBeanInstance(beanDefinition, beanName, args);\n            // 处理循环依赖，将实例化后的Bean对象提前放入缓存中暴露出来\n            if (beanDefinition.isSingleton()) {\n                Object finalBean = bean;\n                addSingletonFactory(beanName, () -> getEarlyBeanReference(beanName, beanDefinition, finalBean));\n            }\n            // 是否需要继续进行后续的属性填充\n            boolean continueWithPropertyPopulation = applyBeanPostProcessorsAfterInstantiation(beanName, bean);\n            if (!continueWithPropertyPopulation) {\n                return bean;\n            }\n            // 在设置 Bean 属性之前，允许 BeanPostProcessor 修改属性值（注解属性填充）\n            applyBeanPostProcessorsBeforeApplyingPropertyValues(beanName, bean, beanDefinition);\n            // 给 Bean 填充属性（xml属性填充）\n            applyPropertyValues(beanName, bean, beanDefinition);\n            // 执行 Bean 的初始化方法和 BeanPostProcessor 的前置和后置处理方法\n            bean = initializeBean(beanName, bean, beanDefinition);\n        } catch (Exception e) {\n            throw new BeansException("Instantiation of bean failed", e);\n        }\n        // 注册实现了 DisposableBean 接口的 Bean 对象\n        registerDisposableBeanIfNecessary(beanName, bean, beanDefinition);\n        // 判断 SCOPE_SINGLETON、SCOPE_PROTOTYPE\n        Object exposedObject = bean;\n        if (beanDefinition.isSingleton()) {\n            // 获取代理对象\n            exposedObject = getSingleton(beanName);\n            registerSingleton(beanName, exposedObject);\n        }\n        return exposedObject;\n    }\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br")])]),s("p",[n._v("其中 applyPropertyValues 这个方法，对要创建的实例进行属性填充的时候会进入循环依赖的问题，一旦遇到是 BeanReference 类型的，则会调用 getBean 方法去获取实例，该方法又会回到上面的方法。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('    protected void applyPropertyValues(String beanName, Object bean, BeanDefinition beanDefinition) {\n        try {\n            // 这里获取到  bean 信息里的属性有哪些，也就是一个对象有哪些属性，并循环赋值到所创建实例的属性中去\n            PropertyValues propertyValues = beanDefinition.getPropertyValues();\n            for (PropertyValue propertyValue : propertyValues.getPropertyValues()) {\n                String name = propertyValue.getName();\n                Object value = propertyValue.getValue();\n                if (value instanceof BeanReference) {\n                    // A 依赖 B，获取 B 的实例化\n                    BeanReference beanReference = (BeanReference) value;\n                    value = getBean(beanReference.getBeanName());\n                }\n                // 类型转换，不是侧重点可以不看\n                else {\n                    Class<?> sourceType = value.getClass();\n                    Class<?> targetType = (Class<?>) TypeUtil.getFieldType(bean.getClass(), name);\n                    ConversionService conversionService = getConversionService();\n                    if (conversionService != null) {\n                        if (conversionService.canConvert(sourceType, targetType)) {\n                            value = conversionService.convert(value, targetType);\n                        }\n                    }\n                }\n                // 反射设置属性填充\n                 BeanUtil.setFieldValue(bean, name, value);\n            }\n        } catch (Exception e) {\n            throw new BeansException("Error setting property values：" + beanName + " message：" + e);\n        }\n    }\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br")])]),s("p",[n._v("当一个实例的创建基本完成，他会把自己添加到一级缓存对象，做为一个成品提供给其他方法使用。如下方法就是添加到一级缓存的过程，其中 getSingleton 在获取三级缓存数据到二级缓存的时候会执行 singletonFactory.getObject (); 这是一个方法，会去执行 getEarlyBeanReference (beanName, beanDefinition, finalBean) 方法，该方法会得到工厂方法里面的一个代理对象。然后再把代理对象存到一级缓存。至此 Bean 的实例化到缓存的过程就结束。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// 判断 SCOPE_SINGLETON、SCOPE_PROTOTYPE\nObject exposedObject = bean;\nif (beanDefinition.isSingleton()) {\n    // 把三级缓存对象转换为二级缓存对象\n    exposedObject = getSingleton(beanName);\n    // 把二级缓存对象转换为一级缓存对象\n    registerSingleton(beanName, exposedObject);\n}\n\n// getSingleton 的部分代码实现\nObjectFactory<?> singletonFactory = singletonFactories.get(beanName);\nif (singletonFactory != null) {\n    // 获取代理对象\n    singletonObject = singletonFactory.getObject();\n    // 把三级缓存中的代理对象中的真实对象获取出来，放入二级缓存中\n    earlySingletonObjects.put(beanName, singletonObject);\n    singletonFactories.remove(beanName);\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("h2",{attrs:{id:"流程介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程介绍"}},[n._v("#")]),n._v(" 流程介绍")]),n._v(" "),s("p",[n._v("有了完整的概念后，我们可以考虑循环依赖的存在，当 A 依赖 B，B 又依赖 A，那么解决依赖的过程又是如何做的，可以看下图：")]),n._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/spring/203/img.png",alt:""}})]),n._v(" "),s("ol",[s("li",[n._v("会先在 getBean 方法里面找 A，通过一二三级缓存中寻找，如果找到则直接返回")]),n._v(" "),s("li",[n._v("没找到就去创建 A 并放入 singletonFactories 三级缓存，会对 A 的属性值进行填充，此时 A 的属性依赖了 B，就要调用 getBean 找 B")]),n._v(" "),s("li",[n._v("通过在 getBean 的 一二三级缓存查找，如果找到了直接返回")]),n._v(" "),s("li",[n._v("没找到就去创建 B 并放入 singletonFactories 三级缓存，会对 B 的属性值进行填充，此时 B 的属性依赖了 A，就要调用 getBean 找 A")]),n._v(" "),s("li",[n._v("此时的 A 已经在三级缓存，可以在三级缓存中找到，找到后会生成 A 代理对象 放入 earlySingletonObjects 二级缓存并返回这个代理对象")]),n._v(" "),s("li",[n._v("B 有了属性 A 的代理对象，此时 B 所有属性填充完毕后，就要把 B 添加到一级缓存，但此时的 B 在三级缓存，会先把三级缓存对象生成代理后放入到 earlySingletonObjects  二级缓存，再由二级缓存把对象放到 singletonObjects 一级缓存对象")]),n._v(" "),s("li",[n._v("此时的 B 已经放到一级缓存对象了，并结束了 B 的创建流程，所以会返回到第 2 步，A 就有了 B 的实例，A 的属性填充完毕后，就要把 A 添加到一级缓存，但此时的 A 已经在二级缓存，所以就可以直接放入到 singletonObjects  一级缓存")])]),n._v(" "),s("p",[n._v("现在我们知道，按照 Spring 框架的设计，用于解决循环依赖需要用到三个缓存，这三个缓存分别存放了 singletonObjects 成品对象、singletonFactories 半成品对象 (未填充属性值)、earlySingletonObjects 代理对象，分阶段存放对象内容，来解决循环依赖问题。")]),n._v(" "),s("p",[n._v("那么，这里我们需要知道一个核心的原理，就是用于解决循环依赖就必须是三级缓存呢，二级行吗？一级可以不？其实都能解决，只不过 Spring 框架的实现要保证几个事情，如只有一级缓存处理流程没法拆分，复杂度也会增加，同时半成品对象可能会有空指针异常。而将半成品与成品对象分开，处理起来也更加优雅、简单、易扩展。另外 Spring 的两大特性中不仅有 IOC 还有 AOP，也就是基于字节码增强后的方法，该存放到哪，而三级缓存最主要，要解决的循环依赖就是对 AOP 的处理，但如果把 AOP 代理对象的创建提前，那么二级缓存也一样可以解决。但是，这就违背了 Spring 创建对象的原则，Spring 更喜欢把所有的普通 Bean 都初始化完成，在处理代理对象的初始化。")]),n._v(" "),s("p",[n._v("一个单个缓存解决循环依赖的例子")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public class ForRelyOn {\n\n    static Map<String,Object> singletonObjects = new HashMap<>();\n\n    public static void main(String[] args) throws Exception {\n        System.out.println(getBean(A.class).getB());\n        System.out.println(getBean(B.class).getA());\n    }\n\n    private static <T> T getBean(Class<T> beanClass) throws Exception {\n        String beanName = beanClass.getSimpleName().toLowerCase();\n        if (singletonObjects.containsKey(beanName)) {\n            return (T) singletonObjects.get(beanName);\n        }\n        // 实例化对象入缓存0\n        Object obj = beanClass.newInstance();\n        singletonObjects.put(beanName, obj);\n        // 属性填充补全对象\n        Field[] fields = obj.getClass().getDeclaredFields();\n        for (Field field : fields) {\n            field.setAccessible(true);\n            Class<?> fieldClass = field.getType();\n            String fieldBeanName = fieldClass.getSimpleName().toLowerCase();\n            field.set(obj, singletonObjects.containsKey(fieldBeanName) ? singletonObjects.get(fieldBeanName) : getBean(fieldClass));\n            field.setAccessible(false);\n        }\n        return (T) obj;\n    }\n\n\n    static class A{\n        private B b;\n\n        public B getB() {\n            return b;\n        }\n\n        public void setB(B b) {\n            this.b = b;\n        }\n    }\n\n    static class B{\n        private A a;\n\n        public A getA() {\n            return a;\n        }\n\n        public void setA(A a) {\n            this.a = a;\n        }\n    }\n\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[n._v("提示")]),n._v(" "),s("p",[n._v("以上都是我们通过 单例的 set 注入方式来解决循环依赖，在 spring 中有多种多样的注入情况，那会带来什么样的情况呢？")])]),n._v(" "),s("h2",{attrs:{id:"不同的循环依赖问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同的循环依赖问题"}},[n._v("#")]),n._v(" 不同的循环依赖问题")]),n._v(" "),s("h3",{attrs:{id:"set-循环依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-循环依赖"}},[n._v("#")]),n._v(" set 循环依赖")]),n._v(" "),s("p",[n._v("在多例 set 的循环依赖中，只有多例和多例循环依赖会出现报错，报错信息如下：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("Error creating bean with name 'b': Injection of resource dependencies failed; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'a': Injection of resource dependencies failed; nested exception is org.springframework.beans.factory.BeanCurrentlyInCreationException: Error creating bean with name 'b': Requested bean is currently in creation: Is there an unresolvable circular reference?\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("多例和单例的循环依赖不会有问题，如下是一个单例和多例的循环依赖代码：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("@Component\npublic class A {\n    @Resource\n    private B b;\n    public void getb() {\n        System.out.println(b);\n    }\n}\n\n@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)\n@Component\npublic class B {\n    @Resource\n    private A a;\n    public void geta(){\n        System.out.println(a);\n    }\n}\n\npublic static void main(String[] args) {\n    ConfigurableApplicationContext run = SpringApplication.run(AdminApplication.class, args);\n    B b = run.getBean(B.class);\n    B b1 = run.getBean(B.class);\n    B b2 = run.getBean(B.class);\n    A a = run.getBean(A.class);\n    A a1 = run.getBean(A.class);\n    A a2 = run.getBean(A.class);\n    System.out.println(b);\n    System.out.println(b1);\n    System.out.println(b2);\n    a.getb();\n    a1.getb();\n    a2.getb();\n}\n\n// 结果\ncom.wt.admin.controller.B@1e5e2e06\ncom.wt.admin.controller.B@26c1f3eb\ncom.wt.admin.controller.B@79982bcc\ncom.wt.admin.controller.B@16b2d182\ncom.wt.admin.controller.B@16b2d182\ncom.wt.admin.controller.B@16b2d182\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br")])]),s("h3",{attrs:{id:"构造器-循环依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造器-循环依赖"}},[n._v("#")]),n._v(" 构造器 循环依赖")]),n._v(" "),s("p",[n._v("但在 构造器 循环依赖的注入中，因为在构造器注入方式下，需要先创建一个 Bean 对象，然后再将其他 Bean 注入该对象中。但是，如果两个 Bean 都互相依赖，那么就会出现无法创建任何一个 Bean 的情况。因此，Spring 在这种情况下会抛出异常以避免程序出现不可预测的错误。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("@Configuration\npublic class Config {\n    @Bean\n    public A a(B b){\n        return new A(b);\n    }\n    @Bean\n    public B b(A a){\n        return new B(a);\n    }\n}\n// 报错\nThe dependencies of some of the beans in the application context form a cycle:\n┌─────┐\n|  a defined in class path resource [com/wt/admin/controller/Config.class]\n↑     ↓\n|  b defined in class path resource [com/wt/admin/controller/Config.class]\n└─────┘\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("p",[n._v("解决这种问题，可以通过在方法中添加 @Lazy 注解，只能加到方法里，不能加到 @Bean 的上下位置，否则依然会报循环依赖；这种方式尽可能的被定义为 @Lazy 的 Bean 在第一次被使用的时候在去进行实例化。")]),n._v(" "),s("p",[n._v("构造器也存在多例和单例的问题，如果你是多例依赖循环，会报错，如下")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// 多例\n@Configuration\npublic class Config {\n    @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)\n    @Bean\n    public A a(B b){\n        return new A(b);\n    }\n    @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)\n    @Bean\n    public B b(A a){\n        return new B(a);\n    }\n}\n// 报错信息\nError creating bean with name 'b' defined in class path resource [com/wt/admin/controller/Config.class]: Unsatisfied dependency expressed through method 'b' parameter 0; nested exception is org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'a' defined in class path resource [com/wt/admin/controller/Config.class]: Unsatisfied dependency expressed through method 'a' parameter 0; nested exception is org.springframework.beans.factory.BeanCurrentlyInCreationException: Error creating bean with name 'b': Requested bean is currently in creation: Is there an unresolvable circular reference?\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br")])]),s("p",[n._v("如果你是多例和单例循环依赖，也会报错，但这里和我们使用注解进行多例和单例的循环依赖测试结果就有所不同了")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("@Configuration\npublic class Config {\n    @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)\n    @Bean\n    public A a(B b){\n        return new A(b);\n    }\n    @Bean\n    public B b(A a){\n        return new B(a);\n    }\n}\n// 报错信息\nThe dependencies of some of the beans in the application context form a cycle:\n┌─────┐\n|  b defined in class path resource [com/wt/admin/controller/Config.class]\n↑     ↓\n|  a defined in class path resource [com/wt/admin/controller/Config.class]\n└─────┘\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br")])]),s("p",[n._v("那么构造器和 set 注入的方式在多例和单例的结论如下：")]),n._v(" "),s("ul",[s("li",[n._v("单例循环依赖：构造器的方式会报错（可以用 @Lazy 解决），set 注入的方式不会报错")]),n._v(" "),s("li",[n._v("多例循环依赖：构造器的方式会报错，set 注入的方式会报错，两者都是调用对象时才报")]),n._v(" "),s("li",[n._v("单例和多例循环依赖：构造器的方式会报错（可以用 @Lazy 解决），set 注入的方式不会报错")])]),n._v(" "),s("h3",{attrs:{id:"dependson"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependson"}},[n._v("#")]),n._v(" @DependsOn")]),n._v(" "),s("p",[n._v("@DependsOn 注解可以定义在类和⽅法上，意思是我这个组件要依赖于另⼀个组件，也就是说被依赖的组件会⽐该组件先注册到 IOC 容器中。如下案例，因为两个都要先于，所以造成了循环依赖")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("@DependsOn(\"b\")\n@Component\npublic class A {\n    @Resource\n    private B b;\n    public void getb() {\n        System.out.println(b);\n    }\n}\n\n@DependsOn(\"a\")\n@Component\npublic class B {\n    @Resource\n    private A a;\n    public void geta(){\n        System.out.println(a);\n    }\n}\n// 报错\nError creating bean with name 'b' defined in file [D:\\workspace\\luckyDraw\\java\\target\\classes\\com\\wt\\admin\\controller\\B.class]: Circular depends-on relationship between 'b' and 'a'\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);
# 数据结构入门

# 剑指offer

## 24反转链表

感觉双指针得一前一后，不能叠在一起

## 35 复杂链表的复制

关键词：hash表，set和map

待看：官方解答****

## 53 - II. 0～n-1中缺失的数字

对于排好序的问题，大概率用分治算法

二分法：难点在于跳出的条件
跳出时，变量 i 和 j 分别指向 “右子数组的首位元素” 和 “左子数组的末位元素”

注意点：left和mid比较还是right和mid比较

## 04. 二维数组中的查找

O(m+n)的解法

# 大厂每日一题

## 001promise未完善

## 005promise.map todo

## 014、015二进制文件

## 016lodash.get未写

## 018深拷贝

[从深拷贝看JS中的循环引用 | Blog](https://underglaze-blue.github.io/blog/pages/831fd5/)

[分享 4 种 JS 深拷贝的方法 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2019581)

其他内置对象情况待写

## 023实现async/await

## 032裁剪头像

## 033 v8垃圾回收

# 数据结构基础

## 哈希表

# 字节跳动

## 国际化安全

### 22. 括号生成

动态规划：F(n)='('+F(n-i)+')'+F(i)

dfs:回溯+减枝

# 携程

## 43.字符串相乘

"123456789" "987654321"，不能全过，艹，麻烦死了

# 计网

https://segmentfault.com/a/1190000039691657

## 基础篇

### 2.2

#### 协议栈

 IP 中还包括 `ICMP` 协议和 `ARP` 协议

**URG**：(**URG**ent)紧急
**ACK**：(**ACK**nowledgment)确认
**PSH**：(**P**u**SH**)推送
**RST**：(**R**e**S**e**T**)复位
**SYN**：(**SYN**chronization) 同步
**FIN**:（**FIN**ish）终止

## tcp篇

### 4.1

#### 为什么是三次握手？不是两次、四次？

最重要的原因：三次握手才可以阻止重复历史连接的初始化

两次握手为什么可以建立两个连接？一个四元组不是可以确定一个连接吗

![](C:\Users\刘纪伟\AppData\Roaming\marktext\images\2023-04-09-01-16-27-image.png)

ISN：**初始化序列号（initial sequence number）**

MTU（Maximum Transmission Unit）

MSS（Maximum Segment Size）

# Vue

响应式原理：[面试官: 实现双向绑定Proxy比defineproperty优劣如何? - 掘金](https://juejin.cn/post/6844903601416978439#comment)

[林三心画了8张图，最通俗易懂的Vue3响应式核心原理解析 - 掘金](https://juejin.cn/post/7001999813344493581#heading-9)

diff:[15张图，20分钟吃透Diff算法核心原理，我说的！！！ - 掘金](https://juejin.cn/post/6994959998283907102)

插槽：[slot | Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/v2/extend/slot.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD)

## mini-vue阅读

### reactive

Reflect的好处： `receiver` 保留了对正确 `this` 的引用

依赖收集过程：拦截对象的get，set；在get中调用track(),收集effect（这里effect是如何收集的呢，使用了高阶函数，引入activeEffect变量）

```js
const effect = eff => {
  activeEffect = eff; // 1. 将 eff 函数赋值给 activeEffect
  activeEffect();     // 2. 执行 activeEffect
  activeEffect = null;// 3. 重置 activeEffect
}
```

在调用activeEffect()时，进入到依赖收集（即目标对象的某个key的get中），此时activeEffect == eff，将activeEffect收集到副作用当中(dep.add(activeEffect))

参考文章：[探索 Vue3 响应式原理-阿里云开发者社区](https://developer.aliyun.com/article/909951#slide-13)

  [vue3.0 响应式原理(超详细) - 掘金](https://juejin.cn/post/6858899262596448270#heading-24)

## Vue设计与实现

### reactive

P46:为什么对象级别用weakmap,而target中的key使用map（如果target[key]也是一个对象呢）

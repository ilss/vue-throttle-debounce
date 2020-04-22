<!--
 * @Author: Liang Liang
 * @Date: 2020-04-22 15:43:15
 * @Description: 
 -->
## 节流&防抖动函数
> 适用于 vue / uni-app

 * type: (debounce防抖模式/throttle节流模式),默认节流
 * immediate: 是否需要立即执行(true立即执行/false不立即执行),默认立即执行
 * key: 防抖的关键词(用于标记防抖的关键词,可以通过此关键词连链接任意的事件,比如用户点击立即付款,
 * 非常快的又点击了取消订单,两个方法传同样的 * key即可解决)
 * time: 防抖时间(多少时间内生效(防抖模式(默认300ms)/节流模式(默认不锁定,需要手动解锁))),

## 调试说明
```javascript
this.$tyDebounce({
  key: 'editPwdHandler',
  time: 3000,
  success: () => {
    //事件原本的处理放在这里
  }
})
```
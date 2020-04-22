/*
 * @Author: Liang Liang #skrjs.com
 * @Date: 2020-03-18 08:55:11
 * @Description: 防抖&节流
 * @type: (debounce防抖模式/throttle节流模式),默认节流
 * immediate:  是否需要立即执行(true立即执行/false不立即执行),默认立即执行
 * @key: 防抖的关键词(用于标记防抖的关键词,可以通过此关键词连链接任意的事件,比如用户点击立即付款,
 * 非常快的又点击了取消订单,两个方法传同样的 * key即可解决)
 * @time: 防抖时间(多少时间内生效(防抖模式(默认300ms)/节流模式(默认不锁定,需要手动解锁)))
 */

let arrKeys = {}

function unlockey(key) {
  delete arrKeys[key]
}

function lockKey(key) {
  arrKeys[key] = true
}

export default function(e = {}) {
  e.type = e.type || 'throttle';
  e.immediate = (e.immediate === undefined ? true : e.immediate);
  if (e.type === 'debounce') {
    if (e.immediate && !arrKeys[e.key]) {
      e.success && e.success();
    }
    clearInterval(arrKeys[e.key])
    arrKeys[e.key] = setTimeout(() => {
      e.success && e.success();
      unlockey(e.key)
    }, e.time || 300)
  } else if (e.type === 'throttle') {
    if (!arrKeys[e.key]) {
      if (e.immediate) {
        lockKey(e.key);
        e.success && e.success();
      } else {
        lockKey(e.key);
      }
      if (e.time) {
        let t = setTimeout(() => {
          if (!e.immediate) {
            e.success && e.success();
          }
          unlockey(e.key)
          clearInterval(t)
          t = null
        }, e.time)
      }
    } else {
      e.fail && e.fail()
    }
  }
  console.log(arrKeys);
}

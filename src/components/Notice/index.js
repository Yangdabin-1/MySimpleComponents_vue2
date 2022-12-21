import Vue from 'vue'
import Notice  from './index.vue'
// 创建Vue构造器
const NoticeConstructor = Vue.extend(Notice)
export default function(options){
  // 创建notice实例
  const instance = new NoticeConstructor({
    data:options
  })
  // 手动挂载notice实例
  instance.$mount()
  // 将实际挂载到真实的DOM节点上
  // 如果没有ul节点
  if(!document.getElementById('notice')){
    let notice = document.createElement('notice')
    notice.id = "notice"
    notice.style.listStyle = "none"
    document.body.appendChild(notice)
  }
  let notice = document.getElementById('notice')
  // 得到notice子元素的个数
  let count = notice.childNodes
  // 清除没用的注释节点 ， 避免对notice,child的判断
  let timer1 = setInterval(() => {
    count.forEach((item,index,arr) =>{
      if(item.nodeName == "#comment"){
        notice.removeChild(item)
      } 
    })
    //解决层叠问题 ： 每次添加节点前都要更新节点的top值
    count.forEach((item,index)=>{
      item.style.top = 10 + index * 90  +"px"
    })
  }, 1000);  
  notice.appendChild(instance.$el)
  setTimeout(()=>{
    // 每次添加后，延迟销毁计时器，判断条件是有无li
    if(notice.childNodes.length == 0){
      document.body.removeChild(notice)
      timer1 = null
    }
  },instance.showTime)
  
  return instance
}
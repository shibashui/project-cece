<script setup>
import { onMounted, getCurrentInstance, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {
  getRuntimeEnv,
  getSelection,
  timeCutStr,
  uuid,
  PriorityQueue,
  timeSub,
  dataDesensitization
} from 'xijs'

const env = getRuntimeEnv()
console.log(env, 'envenvenvenvenv9')
onMounted(() => {
  // getCurrentInstance
  const instance = getCurrentInstance()
  console.log(instance, 'instance22')
  // timeCutStr
  console.log(timeCutStr(new Date('2023/06/22')))

  // PriorityQueue
  const customCompare = (a, b) => {
    return a - b
  }

  const pq = new PriorityQueue(customCompare)

  pq.enqueue(5)
  pq.enqueue(3)
  pq.enqueue(8)
  pq.enqueue(6)
  pq.enqueue(1)
  console.log(pq, 'pqpqpqpqpq')
  // timeSub
  let start = new Date('2020-01-01 08:00:08')
  let end = new Date('2020-01-01 09:00:08')
  console.log('timeSub: ', timeSub(start, end))

  // dataDesensitization
  console.log('610222188709080909: ', dataDesensitization('idCard', '610222188709080909'))
  console.log('18396781187: ', dataDesensitization('phone', '18396781187'))
  console.log('18396781187: ', dataDesensitization('custom', '18396781187', 1, 8))
  console.log('深证市龙岗区五和: ', dataDesensitization('address', '深证市龙岗区五和'))
  console.log('1832291@qq.com: ', dataDesensitization('email', '1832291@qq.com'))
  console.log('小小西: ', dataDesensitization('username', '小小西'))
  console.log('小西: ', dataDesensitization('username', '小西'))
  console.log('小西小西: ', dataDesensitization('username', '小西小西'))
  console.log('012-1823293: ', dataDesensitization('fixPhone', '012-1823293'))
})
let str = ref('')
const btnClick = () => {
  str.value = getSelection()
  console.log(uuid(10))
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <p>{{ dataDesensitization('idCard', '610222188709080909') }}</p>
      <button @click="btnClick">点击</button>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

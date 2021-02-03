<template>
  <img src="/@/assets/logo.png" />
  <h1>{{ msg }}</h1>
  <el-button type="primary" @click="inCrement">count is:</el-button>
  <br />
  <el-tag closable>
    {{ count }}
  </el-tag>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'

  export default defineComponent({
    name: 'HelloWorld',
    setup() {
      const store = useStore(key)
      const count = computed(() => store.state.count)

      return {
        count,
        inCrement: () => store.commit('increment')
      }
    },
    data() {
      return {
        msg: 'HelloWorld'
      }
    }
  })
</script>

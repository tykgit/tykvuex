<template>
  <div>
    <p>{{getStr}}</p>
    <p>{{getterState}}</p>
    <button @click="changeState">改变state状态</button>
    <button @click="asyncState">异步改变state状态</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  computed:{
    getStr(){
      return this.$store.state.str
    },
    getterState() {
      return this.$store.getters.reverseNum
    }
  },
  methods: {
    changeState() {
      this.$store.commit('CHANGE_STR', '通过mutation改变的状态')
    },
    asyncState() {
      this.$store.dispatch('asyncChange')
    },
    login() {
      this.axios.get('https://api.myjson.com/bins/1gup8w').then((res) => {
        console.log(res.data)
      })
    }
  },
  created() {
    this.login()
  }
};
</script>
<style scoped>
</style>

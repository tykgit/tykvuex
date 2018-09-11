import fetch from '../fetch'

export default {
  asyncChange({commit}){
    fetch.get('https://api.myjson.com/bins/1gup8w').then((res) => {
        console.log(res.data)
        let name = res.data.name
        commit('CHANGE_STR',name)
    })
  }
}
import { createStore } from 'vuex'
//准备actions——用于响应组件中的动作
const actions = {}
//准备mutations——用于操作数据（state）
const mutations = {}
//准备state——用于存储数据
const state = {
    aplayer_state: false
}
//准备getters——用于将state中的数据进行加工
const getters = {}

//创建并暴露store
export default createStore({
    actions,
    mutations,
    state,
    getters,
})
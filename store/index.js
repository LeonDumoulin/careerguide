export const state = () => {
  return {
      id: null,
      name: null,
      des: null
  }
}
export const mutations = {
  setId(state, id) {
      state.id = id
  },  setName(state, name) {
    state.name = name
},  setDes(state, des) {
  state.des = des
}
}

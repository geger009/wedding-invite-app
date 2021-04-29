export const state = () => ({
  openStatus: false,
})

export const mutations = {
  updateOpenStatus(state, status) {
    state.openStatus = status
  }
}
const app = {
  state: {
    showAgreeModal: false
    // showAgreeModal: {
    //   get(){
    //     return this.showAgreeModal
    //   },
    //   set(v){
    //       this.showAgreeModal = v
    //   }
    // }
  },
  mutations: {
    SET_AGREE_MODAL(state, modal) {
      state.showAgreeModal = modal
    }
  }
}

export default app

<template>
  <div>
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank">CoreUI</a>
        <span class="ml-1">&copy; 2019 creativeLabs.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="https://coreui.io/vue" target="_blank">CoreUI for Vue</a>
      </div>
    </CFooter>
    <!-- 用户条款 -->
    <b-modal v-model="showModal" size="lg" title="《用户条款与隐私协议》" modal-class="agree-modal" @close="handleCloseModal">
      <p>Hello Large Modal!</p>
      <p>Hello Large Modal!</p>
      <p>Hello Large Modal!</p>
      <p>Hello Large Modal!</p>
      <p>Hello Large Modal!</p>
      <p>Hello Large Modal!</p>
      <p>Hello Large Modal!</p>
      <div slot="modal-footer">
        <b-button variant="outline-primary account-btn" @click="handleAgree">同意（10）</b-button>
        <b-button variant="outline-primary account-btn" @click="handleNotAgree">不同意</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheFooter',
  computed: {
     // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(['showModal'])
  },
  methods: {
    handleCloseModal() {
      console.log('关闭模态框')
      this.$store.commit('SET_AGREE_MODAL', false)
    },
    handleAgree() {
      this.$router.push({ name: 'CloudAccount' })
    },
    handleNotAgree() {
      this.$store.commit('SET_AGREE_MODAL', false)
    }
  }
}
</script>

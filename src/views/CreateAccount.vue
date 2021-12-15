<template>
  <div class="create account">
  <input placeholder="sisesta konto nr" v-model="accountNr"/>
  <input placeholder="sisesta kliendi ID" v-model="clientId"/><br>
  <button v-on:click="createAccount()">Loo konto</button>
    <button v-on:click="back()">Tagasi kontode lehele</button>
  <br>
  </div>
</template>

<script>
import router from "../router";

export default {data: function () {
    return {
      accountNr: '',
      clientId: '',
      createdAcc:''
    }
  },
  methods: {
    createAccount: function () {
      this.$http.post('/api/lesson4/account/' + this.accountNr + "/" + this.clientId)
          .then(response => {
            this.createdAcc = response.data
            router.push({name: 'BankAccounts'})
          })
    },
    back: function () {
      router.push({name: 'BankAccounts'})
    }
  },
  mounted() {}
}
</script>

<style scoped>
input {background: #a29b97
}
button {
  color-adjust: economy;
  color: #030303;
  background-color: #d7690f;
}
</style>
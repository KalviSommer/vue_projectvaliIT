<template>
  <div class="transactions">
    <h1>Kanna kontole | Võta välja</h1>
    <input placeholder="sisesta konto nr" v-model="accountNr"/>
    <input placeholder="sisesta summa" v-model="amount"/><br>
    <button v-on:click="depositMoney()">Raha peale</button><br>
    <button v-on:click="withdrawMoney()">Raha välja</button><br>
    {{ depositResponse }}<br>
    {{ withdrawResponse }}<br>
    <br>
    <h1>Ülekanne</h1>
    <input placeholder="sisesta saatja konto nr" v-model="fromAccountNr"/>
    <input placeholder="sisesta saaja konto nr" v-model="toAccountNr"/>
    <input placeholder="sisesta summa" v-model="transferAmount"/><br>
    <button v-on:click="transferMoney()">Tee ülekanne</button><br>
    {{transferResponse}}
    <br>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      amount: '',
      depositResponse: '',
      withdrawResponse: '',
      transferResponse: '',
      fromAccountNr: '',
      toAccountNr: '',
      transferAmount: '',
    }
  },
  methods: {
    depositMoney: function () {
      this.$http.put('/api/lesson4/account/' + this.accountNr + "/" + this.amount)
          .then(response => {
            alert("raha kontole kantud")
            this.withdrawResponse = ""
            this.depositResponse = response.data
          }).catch(error => {
        alert(error.response.data.message)
      })
    },
    withdrawMoney: function () {
      this.$http.put('/api/lesson4/account/withdraw/' + this.accountNr + "/" + this.amount)
          .then(response => {
            alert("raha välja kantud")
            this.depositResponse = ""
            this.withdrawResponse = response.data
          }).catch(error => {
        alert(error.response.data.message)
      })
    },
    transferMoney: function () {
      this.$http.put('/api/lesson4/account/transfer/' + this.fromAccountNr + "/" + this.transferAmount + "/" + this.toAccountNr)
          .then(response => {
            alert("ülekanne tehtud")

            this.transferResponse = response.data
          }).catch(error => {
        alert(error.response.data.message)
      })
    },
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
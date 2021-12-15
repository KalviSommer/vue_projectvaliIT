<template>
  <div class="bank account">
    <h1>KLIENDINIMISTU</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Nimi</th>
        <th>Aadress</th>
      </tr>
      <tr v-for="row in client">
        <td>{{ row.id }}</td>
        <td>{{ row.firstName }} {{ row.lastName }}</td>
        <td>{{ row.address }}</td>
      </tr>
    </table>
    <button v-on:click="addClient()">Lisa klient</button>
    <button v-on:click="edit()">Kuva kontod</button>
    <br>
    <br>
    <h1>Konto jääk</h1>
    <input placeholder="sisesta konto number" v-model="accountnr"/>
    <button v-on:click="getBalance()">Kuva konto jääk</button>
    <br>
    Konto jääk: {{ bankAccount }}<br>
    <br>
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
    <h1>Lukusta konto | Võta lukk maha</h1>
    <input placeholder="sisesta konto nr" v-model="accountlock"/>
    <button v-on:click="lockAccount()">Lukusta konto</button>
    <button v-on:click="unlockAccount()">Eemalda lukk</button><br>
    {{lockResponse}}
    <br>

    <h1>Konto info</h1>
    <input placeholder="sisesta konto number" v-model="accountnr1"/>
    <button v-on:click="getAccountInfo()">Kuva konto info</button>
    <br>
    Eesnimi: {{ bankAccountClient.firstName }}<br>
    Perenimi: {{ bankAccountClient.lastName }}<br>
    Konto nr: {{ bankAccountClient.accountNr }}<br>
    Konto jääk: {{ bankAccountClient.balance }}<br>
    Staatus: {{ bankAccountClient.status }}<br>
    Aadress: {{ bankAccountClient.address }}<br>
    Kliendi ID: {{ bankAccountClient.clientId }}<br>
    <br>
  </div>
</template>

<script>
import router from "../router";

export default {
  data: function () {
    return {
      accountnr: '',
      accountnr1: '',
      bankAccountClient: {},
      bankAccount: {},
      creationAcc: {},
      accountNr: '',
      clientId: '',
      balance: '',
      amount: '',
      depositResponse: '',
      withdrawResponse: '',
      transferResponse: '',
      fromAccountNr: '',
      toAccountNr: '',
      transferAmount: '',
      lockResponse:'',
      accountlock:'',
      client: {}
    }
  },
  methods: {
    edit: function () {
      router.push({name: 'BankAccounts'})
    },
    addClient: function (){
      router.push({name: 'AddClient'})
    },
    getBalance: function () {
      this.$http.get('/api/lesson4/account/' + this.accountnr)
          .then(response => {
            this.bankAccount = response.data
          })
    },
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
    lockAccount: function(){
      this.$http.put('/api/lesson4/lockAccount/' + this.accountlock)
          .then(response => {
            alert("konto lukus")

            this.lockResponse = response.data
          }).catch(error => {
        alert(error.response.data.message)
      })
    },
    unlockAccount: function(){
      this.$http.put('/api/lesson4/unlockAccount/' + this.accountlock)
          .then(response => {
            alert("konto lukust lahti")

            this.lockResponse = response.data
          }).catch(error => {
        alert(error.response.data.message)
      })
    },
    getAccountInfo: function () {
      this.$http.get('/api/lesson4/accountInfo/' + this.accountnr1)
          .then(response => {
            this.bankAccountClient = response.data
          })
    },
    getAllClients: function () {
      this.$http.get('/api/lesson4/clients')
          .then(response => {
            this.client = response.data
          })
    },
  },
  mounted() {
    this.getAllClients();
  }
}
</script>

<style>
input {
  background: #a29b97
}

table {
  text-decoration-color: #26e808;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}
button {
  color-adjust: economy;
  color: #030303;
  background-color: #d7690f;
}
button1 {
  color-adjust: economy;
  color: #050402;
  background-color: #aba8a3;
}

img {
  height: 250px;
  width: 500px;
}

td {
  color: #282626;
  background-color: darkkhaki;
  border: solid 1px #030303;
  size: 100px;
  text-align: center;
  text-align: justify-all;
}
</style>
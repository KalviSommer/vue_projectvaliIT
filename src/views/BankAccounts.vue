<template>
  <div class="bankAccounts">
    <table>
      <tr>
        <th>Konto nr</th>
        <th>Eesnimi</th>
        <th>Perenimi</th>
        <th>Aadress</th>
        <th>Konto jääk</th>
        <th>Staatus</th>
        <th>Kliendi ID</th>
      </tr>
      <tr v-for="row in bankAccountClient">
        <td>{{ row.accountNr }}</td>
        <td>{{ row.firstName }}</td>
        <td>{{ row.lastName }}</td>
        <td>{{ row.address }}</td>
        <td>{{ row.balance }}</td>
        <td>{{ row.status }}</td>
        <td>{{ row.clientId }}</td>
        <td><button v-on:click="transactions()">Tee tehinguid</button></td>
<!--        <button v-on:click="deleteEmployee(employee.id)">Kustuta</button></td>-->
      </tr>
    </table>
    <button v-on:click="createAccount()">Loo uus konto</button>
    <button v-on:click="back()">Tagasi klientide lehele</button>
  </div>
</template>

<script>
import router from "../router";

export default {
  data: function () {
    return {
      bankAccountClient: {},
      accountNr: '',
      clientId: '',
      createdAcc:''
    }
  },
  methods: {
    getAllAccounts: function () {
      this.$http.get('/api/lesson4/accounts')
          .then(response => {
            this.bankAccountClient = response.data
          })
    },
    createAccount: function () {
      router.push({name: 'CreateAccount'})
    },
    transactions: function () {
      router.push({name: 'Transactions'})
    },
    back: function () {
      router.push({name: 'Bank'})
    },
  },
  mounted() {
    this.getAllAccounts()
  }
}
</script>

<style scoped>
input {background: #a29b97
}
table {
  text-decoration-color: #26e808;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;

}
td{color: #282626;
  background-color: darkkhaki;
}
button {color-adjust: economy;
  color: #030303;
  background-color: #d7690f;}
img {margin-left: unset}
</style>
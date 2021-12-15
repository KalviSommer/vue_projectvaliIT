<template>
  <div class="register">
    <div v-if="token">
      <router-view/>
      <button v-on:click="logout">Logi välja</button>
      <button v-on:click="getData()">Get data</button>
    </div>
    <div v-if="!token">
   <div>
      <input placeholder="sisesta kasutajanimi" v-model="loginClient.clientName"/> <br>
      <input placeholder="sisesta parool" v-model="loginClient.password"/> <br>
      <button v-on:click="login()">Logi sisse</button>


      <br>
      {{ loggedClient }}
   </div>

    <input placeholder="enter your email" v-model="email"/>
    {{ email }}
    <button v-on:click="register()">Registreeri</button>
    <button v-on:click="getBalance()">Kuva konto jääk</button>
    <input placeholder="enter your account nr" v-model="accountnr"/>
    <button v-on:click="getAccountInfo()">Get Account Info</button>
    <br>
    Account nr: {{ bankAccount.accountNr }}<br>
    Balance: {{ bankAccount.balance }}<br>
    Status: {{ bankAccount.status }}<br>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: function () {
    return {
      email: '',
      accountnr: '',
      bankAccount: {},
      loginClient: {},
      loggedClient: {},
      token: ''
    }
  },
  methods: {
    login: function () {
      this.$http.post('/api/public/login/', this.loginClient)
          .then(response => {
            this.token = response.data
            localStorage.setItem("user-token", this.token)
            this.$http.defaults.headers.common["Authorization"] = "Bearer " + this.token
          })
    },
    getData() {
      this.$http.get('api/protected')
      .then (response => {
        alert("päring õnnestus " + response.data)
      })
      .catch(response => {
        alert("juhtus viga")
      })
    },
    logout() {
      this.token = '';
      localStorage.removeItem('user-token');
      alert("you have been logged out")
      location.reload();
    },
    register: function () {
      alert(this.email)
      this.email = "sisesta midagi muud"
    },
    getBalance: function () {
      this.$http.get('/api/lesson4/account/' + this.accountnr)
          .then(response => {

            this.bankAccount = {balance: response.data}
          })
    },
    getAccountInfo: function () {
      this.$http.get('/api/lesson4/accountInfo/' + this.accountnr)
          .then(response => {
            this.bankAccount = response.data
          })
    }
  }
}
</script>

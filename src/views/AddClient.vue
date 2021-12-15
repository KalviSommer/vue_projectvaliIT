<template>
  <div class="addClient">
    <input placeholder="sisesta eesnimi" v-model="creationCli.firstName"/>
    <input placeholder="sisesta perenimi" v-model="creationCli.lastName"/>
    <input placeholder="sisesta aadress" v-model="creationCli.address"/><br>
    <button v-on:click="createClient()">Lisa klient</button>
    <button v-on:click="back()">Tagasi</button>
    <br>
  </div>
</template>

<script>
import router from "../router";

export default {
  data: function () {
    return {
      creationCli: {},
      createdCli: {}
    }
  },
  methods: {
    createClient: function () {
      this.$http.post('/api/lesson4/createClient/', this.creationCli)
          .then(response => {
            this.createdCli = response.data
            router.push({name: 'Bank'})
          })
    },
    back: function () {
      router.push({name: 'Bank'})
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
input {
  background: #a29b97
}

button {
  color-adjust: economy;
  color: #030303;
  background-color: #d7690f;
}
</style>
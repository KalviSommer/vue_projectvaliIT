<template>
  <div class="addEmployee">
    Eesnimi <input v-model="newEmployee.firstName"> <br>
    Perekonnanimi <input v-model="newEmployee.lastName"> <br>
    Aadress <input v-model="newEmployee.address"> <br>
    Ametikoht <input v-model="newEmployee.position"> <br>
    <button v-on:click="saveEmployee()">Salvesta</button>
    <button v-on:click="back()">Tühista</button>
  </div>
</template>

<script>
import router from "../router";

export default {
  data: function () {
    return {
      newEmployee: {},
    }
  },
  methods: {
    saveEmployee: function () {
      this.$http.post('/api/employee', this.newEmployee)
          .then(response => {
            this.employees = response.data
            router.push({name: 'Employee'})
          })
    },
    back: function () {
      router.push({name: 'Employee'})
    }
  },
}
</script>

<style scoped>
input {background: #9d8803;
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
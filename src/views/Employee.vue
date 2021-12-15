<template>
  <div  class="employee">
    <input v-model="search">
    <button v-on:click="getAllEmployees">Otsi</button>
    <br>
    <br>
    <table>
      <tr>
        <th v-on:click="orderBy('id')">ID<button1>↧</button1></th>
        <th v-on:click="orderBy('first_name')">Eesnimi<button1>↧</button1></th>
        <th v-on:click="orderBy('last_name')">Perekonnanimi<button1>↧</button1></th>
        <th v-on:click="orderBy('address')">Aadress<button1>↧</button1></th>
        <th v-on:click="orderBy('position')">Ametikoht<button1>↧</button1></th>
        <th></th>
      </tr>
      <tr v-for="employee in employees">
        <td>{{ employee.id }}</td>
        <td>{{ employee.firstName }}</td>
        <td>{{ employee.lastName }}</td>
        <td>{{ employee.address }}</td>
        <td>{{ employee.position }}</td>
        <td>
          <button v-on:click="edit(employee.id)">Muuda</button>
          <button v-on:click="deleteEmployee(employee.id)">Kustuta</button>
        </td>
      </tr>
    </table>
    <br>
    <button v-on:click="addEmployee()">Lisa uus töötaja</button>
    <br>
    <br>
    <img alt="Success picture" src="../assets/naturepath.jpg">
  </div>
</template>

<script>
import router from "../router";

export default {
  data: function () {
    return {
      employees: [],
      search: '',
      message: '',
      orderByField: ''
    }
  },
  methods: {
    getAllEmployees: function () {
      this.$http.get('/api/employeelist', {
        params: {
          search: this.search,
          orderBy: this.orderByField
        }
      })
          .then(response => {
            this.employees = response.data
          })
    },
    deleteEmployee: function (id) {
      this.$http.delete('/api/deleteemployee/' + id)
          .then(response => {
            this.getAllEmployees()
          })
    },
    addEmployee: function () {
      router.push({name: 'AddEmployee'})
    },
    edit: function (id) {
      router.push({name: 'EditEmployee', params: {id: id}})
    },
    orderBy: function (field) {
      this.orderByField = field
      this.getAllEmployees()
    }
  },
  mounted() {
    this.getAllEmployees();
  }
}
</script>

<style scoped>
input {
  background: #a29b97
}

table {
  text-decoration-color: #26e808;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;

}

td {
  color: #282626;
  background-color: darkkhaki;
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
</style>
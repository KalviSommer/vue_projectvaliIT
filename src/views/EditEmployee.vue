<template>
  <div class="editEmployee">
    Eesnimi <input v-model="employee.firstName"> <br>
    Perekonnanimi <input v-model="employee.lastName"> <br>
    Aadress <input v-model="employee.address"> <br>
    Ametikoht <input v-model="employee.position"> <br>
    <button v-on:click="changeEmployee()">Salvesta</button>
    <button v-on:click="back()">Tühista</button>
  </div>
</template>

<script>
import router from "../router";

export default {
  data: function () {
    return {
      employee: {},
    }
  },
  methods: {
    changeEmployee: function () {
      this.$http.put('/api/changeEmployee/' + this.$route.params.id, this.employee)
          .then(response => {
            this.employees = response.data
            router.push({name: 'Employee'})
          })
    },
    back: function () {
      router.push({name: 'Employee'})
    }
  },
  mounted() {
    this.$http.get("/api/getEmployee/" + this.$route.params.id)
        .then(response => this.employee = response.data)
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
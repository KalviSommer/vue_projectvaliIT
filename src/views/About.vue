<template>
  <div class="functions">
<!--        <img alt="Success picture" src="../assets/sauna.jpg">-->
    <h1>FUNCTIONS</h1>
    <br>
    <input placeholder="1st number" v-model.number="a">
    <input placeholder="2nd number" v-model.number="b">
    <input placeholder="3rd number" v-model.number="c">
    <br>
    <br>
    <button v-on:click="min()">Min</button>
    Answer min: {{ minAnswer }} <br><br>
    <button v-on:click="max()">Max</button>
    Answer max: {{ maxAnswer }} <br><br>
    <button v-on:click="abs()">Abs</button>
    Answer abs: {{ absAnswer }} <br><br>
    <button v-on:click="isEven()">IsEven</button>
    Answer isEven: {{ isEvenAnswer }} <br><br>
    <button v-on:click="min3()">Min3</button>
    Answer min3: {{ min3Answer }} <br><br>
    <button v-on:click="max3()">Max3</button>
    Answer max3: {{ max3Answer }} <br><br>
    <br>
    <input placeholder="input number" v-model.number="arrayInput">
    <button v-on:click="generateArray()">GenerateArray</button>
    <button v-on:click="decreasingArray()">DecreasingArray</button>
    <button v-on:click="yl3Array()">Yl3Array</button>
    <button v-on:click="fibonacci()">Fibonacci</button>
    <table id="resultTable">
      <tr>
        <th>number</th>
      </tr>
      <tr v-for="row in arrayResponse">
        <td>{{ row }}</td>

      </tr>
    </table>
      <h1>Multiply Table</h1>
      <input v-model.number="multiplyerA" placeholder="a">
      <input v-model.number="multiplyerB" placeholder="b">
      <button v-on:click="generateMultiplyTable()">Multiply Table</button>
      <table>
        <tr v-for="row in multiplyTable">
          <td v-for="cell in row">{{cell}}</td>
        </tr>
      </table>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data: function () {
    return {
      a: "",
      b: "",
      c: "",
      minAnswer: "",
      maxAnswer: "",
      absAnswer: "",
      isEvenAnswer: "",
      min3Answer: "",
      max3Answer: "",
      arrayInput: "",
      multiplyerA: "",
      multiplyerB: "",
      arrayResponse: [],
      multiplyTable: [],
    }
  },
  methods: {
    min: function () {
      if (this.a < this.b) {
        this.minAnswer = this.a;
      } else {
        this.minAnswer = this.b;
      }
    },
    max: function () {
      if (this.a > this.b) {
        this.maxAnswer = this.a;
      } else {
        this.maxAnswer = this.b;
      }
    },
    abs: function () {
      if (this.a < 0) {
        this.absAnswer = 0 - this.a;
      } else
        this.absAnswer = this.a;
    },
    isEven: function () {
      let a = this.a % 2;
      if (a == 0) {
        this.isEvenAnswer = true;
      } else {
        this.isEvenAnswer = false;
      }
    },
    min3: function () {
      if ((this.a <= this.b) && (this.a <= this.c)) {
        this.min3Answer = this.a;
      } else if ((this.b <= this.a) && (this.b <= this.c)) {
        this.min3Answer = this.b;
      } else {
        this.min3Answer = this.c;
      }
    },
    max3: function () {
      if ((this.a >= this.b) && (this.a >= this.c)) {
        this.max3Answer = this.a;
      } else if ((this.b >= this.a) && (this.b >= this.c)) {
        this.max3Answer = this.b;
      } else {
        this.max3Answer = this.c;
      }
    },
    generateArray: function () {
      this.arrayResponse = []
      for (let i = 0; i < this.arrayInput; i++) {
        this.arrayResponse[i] = i + 1;
      }
    },
    decreasingArray: function () {
      this.arrayResponse = [];
      if (this.arrayInput >= 0) {
        for (let i = this.arrayInput; i >= 0; i--) {
          this.arrayResponse[i] = this.arrayInput - i;
        }
      } else {
        for (let i = 0; i <= -this.arrayInput; i++) {
          this.arrayResponse[i] = this.arrayInput + i;
        }
      }
    },
    yl3Array: function () {
      this.arrayResponse = [];
      for (let i = 0; i < this.arrayInput; i++) {
        this.arrayResponse[i] = 3;
      }
    },
    fibonacci: function () {
      this.arrayResponse = [];
      if (this.arrayInput > 0) {
        this.arrayResponse [0] = 0;
        this.arrayResponse [1] = 1;
        for (let i = 2; i <= this.arrayInput; i++) {
          this.arrayResponse [i] = this.arrayResponse [i-2] + this.arrayResponse [i-1];

        }
      }
    },
    generateMultiplyTable: function (){
      this.multiplyTable = [];
      for(let i = 1; i <= this.multiplyerA; i++) {
        this.multiplyTable [i-1] = [];
        for (let j = 1; j <= this.multiplyerB; j++) {
          this.multiplyTable [i-1] [j-1] = i * j;
        }
      }
    }
  }
}
</script>
<style>
td {
  background-color: #06f1ea;
  color: #050402;
  border: solid 1px #030303;
  size: 100px;
  text-align: center;
  text-align: justify-all;
}

h1 {
  color: blue;
  font-family: "Calibri";
}

h2 {
  color: darkred;
  font-size-adjust: inherit;
  font-family: "Calibri";
}

table {
  border: 3px solid #050402;
  margin-left: auto;
  margin-right: auto;
}

input {
  box-sizing: initial
}

button {
  break-inside: revert
}
</style>
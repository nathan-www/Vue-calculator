var app = new Vue({
  el: '#app',
  data: {

    operand1: 0,
    operand2: 0,
    usingOperand2: false,
    operator: null,

    theme_dark: true,

    displaySum: {
      display: false,
      operand1: 0,
      operand2: 0,
      operator: null
    },

    memory: "",

    scientific_mode: true,

    operator_method: null,

    operator_symbols: {
      "*": {
        "type": "ionicon",
        "name": "close"
      },
      "backspace": {
        "type": "ionicon",
        "name": "backspace"
      },
      "/": {
        "type": "character",
        "value": "&divide;"
      },
      "square": {
        "type": "character",
        "value": "<span><i>x</i><sup>2</sup></span>"
      },
      "cube": {
        "type": "character",
        "value": "<span><i>x</i><sup>3</sup></span>"
      },
      "pow": {
        "type": "character",
        "value": "<span><i>x</i><sup>y</sup></span>"
      },
      "10x": {
        "type": "character",
        "value": "<span><i>10</i><sup>x</sup></span>"
      },
      "reciprocal": {
        "type": "character",
        "value": "<span>1/<i>x</i></span>"
      },
      "sqrt": {
        "type": "character",
        "value": "<span><sup>2</sup>&radic;</span>"
      },
      "cuberoot": {
        "type": "character",
        "value": "<span><sup>3</sup>&radic;</span>"
      },
      "root": {
        "type": "character",
        "value": "<span><sup>x</sup>&radic;</span>"
      },
      "factorial": {
        "type": "character",
        "value": "<span>!<i>x</i></span>"
      },
      "pi": {
        "type": "character",
        "value": "&#960;"
      },
      "rand": {
        "type": "ionicon",
        "name": "dice"
      }
    },

    grid_w_basic: 4,
    grid_w_scientific: 4,

    scientific_buttons: [{
        type: "opfunction",
        symbol: "square",
        method: function(num) {
          return Math.pow(num, 2);
        }
      },
      {
        type: "opfunction",
        symbol: "cube",
        method: function(num) {
          return Math.pow(num, 3);
        }
      },
      {
        type: "operator",
        symbol: "pow",
        method: function(op1, op2) {
          return Math.pow(op1, op2);
        }
      },
      {
        type: "opfunction",
        symbol: "10x",
        method: function(num) {
          return Math.pow(10, num);
        }
      },
      {
        type: "opfunction",
        symbol: "reciprocal",
        method: function(num) {
          return 1 / num;
        }
      },
      {
        type: "opfunction",
        symbol: "sqrt",
        method: function(num) {
          return Math.sqrt(num);
        }
      },
      {
        type: "opfunction",
        symbol: "cuberoot",
        method: function(num) {
          return Math.pow(num, 1 / 3);
        }
      },
      {
        type: "operator",
        symbol: "root",
        method: function(op1, op2) {
          return Math.pow(op1, 1 / op2);
        }
      },
      {
        type: "opfunction",
        symbol: "factorial",
        method: function(num) {
          newnum = num;
          for (i = 1; i < num; i++) {
            newnum *= i
          }
          return newnum;
        }
      },
      {
        type: "opfunction",
        symbol: "sin",
        method: function(num) {
          return Math.sin(num);
        }
      },
      {
        type: "opfunction",
        symbol: "cos",
        method: function(num) {
          return Math.cos(num);
        }
      },
      {
        type: "opfunction",
        symbol: "tan",
        method: function(num) {
          return Math.tan(num);
        }
      },
      {
        type: "opfunction",
        symbol: "sinh",
        method: function(num) {
          return Math.sinh(num);
        }
      },
      {
        type: "opfunction",
        symbol: "cosh",
        method: function(num) {
          return Math.cosh(num);
        }
      },
      {
        type: "opfunction",
        symbol: "tanh",
        method: function(num) {
          return Math.tanh(num);
        }
      },

      {
        type: "opfunction",
        symbol: "+1",
        method: function(num) {
          return num + 1;
        }
      },

      {
        type: "number",
        symbol: "rand"
      },

      {
        type: "number",
        symbol: "pi"
      },
      {
        type: "function",
        symbol: "M+",
        method: function() {
          app.memory = +app.getNumber();
        }
      },
      {
        type: "number",
        symbol: "M"
      }


    ],

    basic_buttons: [{
        type: "function",
        symbol: "AC",
        method: function() {
          app.operator = null;
          app.operand1 = 0;
          app.operand2 = 0;
          app.usingOperand2 = false;
          app.displaySum.display = false;
        }
      },


      {
        type: "function",
        symbol: "+/-",
        method: function() {
          if (!app.usingOperand2) {
            if (app.operand1 < 0) {
              app.operand1 = Math.abs(app.operand1);
            } else {
              app.operand1 = 0 - app.operand1;
            }
          } else {
            if (app.operand2 < 0) {
              app.operand2 = Math.abs(app.operand2);
            } else {
              app.operand2 = 0 - app.operand2;
            }
          }
        }
      },

      {
        type: "operator",
        symbol: "%",
        method: function(op1, op2) {
          return op1 % op2;
        }
      },

      {
        type: "operator",
        symbol: "/",
        method: function(op1, op2) {
          return op1 / op2;
        }
      },

      {
        type: "number",
        symbol: 7
      },

      {
        type: "number",
        symbol: 8
      },

      {
        type: "number",
        symbol: 9
      },

      {
        type: "operator",
        symbol: "*",
        method: function(op1, op2) {
          return op1 * op2;
        }
      },

      {
        type: "number",
        symbol: 4
      },

      {
        type: "number",
        symbol: 5
      },

      {
        type: "number",
        symbol: 6
      },

      {
        type: "operator",
        symbol: "-",
        method: function(op1, op2) {
          return op1 - op2;
        }
      },

      {
        type: "number",
        symbol: 1
      },

      {
        type: "number",
        symbol: 2
      },

      {
        type: "number",
        symbol: 3
      },

      {
        type: "operator",
        symbol: "+",
        method: function(op1, op2) {
          return op1 + op2;
        }
      },

      {
        type: "function",
        symbol: "backspace",
        method: function() {
          if (!app.usingOperand2) {

            if (("" + app.operand1).length < 2) {
              app.operand1 = 0;
            } else {
              app.operand1 = +("" + app.operand1).slice(0, -1);
            }
          } else {
            if (("" + app.operand2).length < 2) {
              app.operand2 = 0;
            } else {
              app.operand2 = +("" + app.operand2).slice(0, -1);
            }
          }
        }
      },

      {
        type: "number",
        symbol: "."
      },

      {
        type: "number",
        symbol: "0"
      },

      {
        type: "function",
        symbol: "=",
        method: function() {
          if (app.usingOperand2) {
            app.showResult();
          }
        }
      },
    ]

  },

  methods: {

    showResult: function() {
      this.displaySum.operator = this.operator;
      this.displaySum.operand1 = this.operand1;
      this.displaySum.operand2 = this.operand2;
      this.displaySum.display = true;

      this.operand1 = this['operator_method'](+this.operand1, +this.operand2);
      this.operand2 = 0;
      this.operator = null;
      this.usingOperand2 = false;
    },

    getNumber: function() {
      if (!this.usingOperand2) {
        return this.operand1;
      } else {
        return this.operand2;
      }
    },

    clickButton: function(btn) {


      if (btn.type == "number") {

        symbol = btn.symbol;

        if (symbol == "pi") {
          symbol = Math.PI;
        }
        if (symbol == "rand") {
          symbol = Math.random();
        }
        if (symbol == "M") {
          if (this.memory == "") {
            symbol = 0;
          } else {
            symbol = this.memory;
          }
        }

        if (!app.usingOperand2 && this.operator !== null) {
          app.usingOperand2 = true;
        }

        if (!app.usingOperand2) {
          this.operand1 = (this.operand1 + "" + symbol);
          if (((this.operand1 + "")[0] == "0") && ((this.operand1 + "").length == 0 || (this.operand1 + "")[1] !== ".")) {
            this.operand1 = this.operand1.slice(1);
          }
          if ((this.operand1 + "").split(".").length - 1 == 2) {
            this.operand1 = this.operand1.slice(0, -1);
          }
        } else {
          this.operand2 = (this.operand2 + "" + symbol);
          if (((this.operand2 + "")[0] == "0") && ((this.operand2 + "").length == 0 || (this.operand2 + "")[1] !== ".")) {
            this.operand2 = this.operand2.slice(1);
          }
          if ((this.operand2 + "").split(".").length - 1 == 2) {
            this.operand2 = this.operand2.slice(0, -1);
          }
        }
      } else if (btn.type == "function") {
        btn['method']();
      } else if (btn.type == "operator") {
        if (!this.usingOperand2) {
          this.operator_method = btn['method'];
          this.operator = btn['symbol'];
        } else {
          this.showResult();
          this.operator_method = btn['method'];
          this.operator = btn['symbol'];
          this.operand2 = 0;
          this.usingOperand2 = false;
        }
      } else if (btn.type = "opfunction") {
        if (!this.usingOperand2) {
          this.operand1 = btn['method'](+this.operand1);
        } else {
          this.operand2 = btn['method'](+this.operand2);
        }
      }

    },

    operator_symbol: function(name) {
      if (this.operator_symbols.hasOwnProperty(name)) {
        symbol = this.operator_symbols[name];
        if (symbol.type == "ionicon") {
          return '<ion-icon name="' + symbol.name + '"></ion-icon>';
        } else {
          return symbol.value;
        }
      } else {
        return name;
      }
    },

    get_buttons: function(grid_w, buttons) {

      var rows = [
        []
      ];

      buttons.forEach(function(b) {

        if (rows[rows.length - 1].length >= grid_w) {
          rows.push([]);
        }

        rows[rows.length - 1].push(b);

      });

      return rows;

    }
  }
})

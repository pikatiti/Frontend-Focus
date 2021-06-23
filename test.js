var birth = 1000
var obj = {
  birth: 1990,
  getAge: function () {
      var b = this.birth; // 1990
      console.log(b)
      var fn = function () {
          return this.birth
      };
      return fn();
  }
};

obj.getAge()


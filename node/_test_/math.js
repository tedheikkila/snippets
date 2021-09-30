function MathFcn(number = 10) {
  this.number = number;
}

MathFcn.prototype.plus = function(num = 0) {
  const newNumber = this.number + num;

  return new MathFcn(newNumber);
};

MathFcn.prototype.minus = function(num = 0) {
  const newNumber = this.number - num;

  return new MathFcn(newNumber);
};

MathFcn.prototype.value = function() {
  return this.number;
};

module.exports = MathFcn;

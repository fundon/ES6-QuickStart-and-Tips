var CalculatorMixin = Base => class extends Base {
    calc() { }
};

var RandomizerMixin = Base => class extends Base {
    randomize() { }
};

class Foo { }
class Bar extends CalculatorMixin(RandomizerMixin(Foo)) { }

console.log(Bar.prototype.calc)
console.log(Bar.prototype.randomize)

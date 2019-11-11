var digits = {
    a: 1,
    b: 2,
    sum: function(event)
    {
        return this.a + this.b;
    }
};

var strings = {
    a: 'my ',
    b: 'name '
};

strings.sum = digits.sum.bind(strings);
console.log(strings.sum());
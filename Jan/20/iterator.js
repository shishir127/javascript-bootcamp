function Iterator(array){
  this.array = array;
  this.each = function(fn){
    for (var i = 0; i < this.array.length; ++i)
    {
      fn(this.array[i]);
    }
  };
};

var test = [1, 2, 3, 4];

var iterator = new Iterator(test);
iterator.each(function(value) {
                  console.log((value % 2) === 0);
                }
);
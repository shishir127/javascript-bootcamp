console.log(this);

function foo()
{
  console.log(this);
};

foo();

var test = {
  output: function(){
    console.log(this);
  };
};

function bar(f)
{ 
  f();
};
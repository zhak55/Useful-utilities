Function.prototype.bind = 
  Function.prototype.bind || function( context ){
    var  func = typeof this === 'function' ? this : 0
        , sliced = Array.prototype.slice
        , args   = sliced.call( arguments, 1 );
        
     if( !func ) throw new TypeError("Must be a function");
	return function() {
 	  return func.apply( context, args.concat( sliced.call( arguments )));
      }
    }

// e.g.

function sum(a, b){
    return a + b + this.c;
};

var test = sum.bind({c: 5});

  console.log(test(1,3)); // =>9

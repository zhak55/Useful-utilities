Function.prototype.bind = Function.prototype.bind || function( context ){
	var  func   = typeof this === 'function' ? this : 0
	   , sliced = Array.prototype.slice
	   , args   = sliced.call( arguments, 1 );

	 if( func ) {
	 	return function() {
	 		return func.apply( context, args.concat( sliced.call( arguments )));
	 	}
	 }else {
	 	throw new TypeError("Must be a function");
	 }
}

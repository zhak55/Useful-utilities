
//  Executes a provided function once per array or object element
//  @param {Object|Array}
//  @param {Function}
//  @param {Object}

function $forEach( object, callback, context ) {
  var keys   = Object.keys( object )
    , length = keys["length"]
    , index  = length - 1
    , temp;
    
    while( length-- ) callback
      .call( context || this, index - length, object[(temp = keys[length])], temp );
  };
  
  // e.g.
  
 $forEach({ name: 'Roman', age: 20, from: null }, function(/* index, value, key */) {
   console.log.apply( console, arguments ); 
   // => 0 null "from"
   // => 1 20 "age"
   // => 2 "Roman" "name"
 });
 
 $forEach(["Roman", 20, null], function( index, value ) {
   console.log( index, value );
 });
 

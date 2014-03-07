// This method returns an array of a given object's own enumerable properties.
// Also you can find out the length of the given object.
// Of course, we need to delegate to ECMAScript 5's native Object.keys method if it is possible.

Object.keys = Object.keys || function( obj ) {
   var array = [];
     for( var key in obj ) 
        obj.hasOwnProperty
          .call(obj, key) && array.push( key );                 
    return array;
};

// e.g.:

 var object = { name: 'Roman', age: 20, from: null };
 
   Object.keys( object )        // => ["name", "age", "from"]
   Object.keys( object ).length // => 3
 
  

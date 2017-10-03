    var data = Stats();

        data.frame({
          id  : [1, 2, 3, 4, 5, 6, 7],
          age : [15, 21, 25, 57, 13, 9, 14],
          sex : ['F', 'F', 'M', 'F', 'M', 'M', 'M']
        }).
          as('id:number').
          as('age:number').
          as('sex:factor', {
            levels: ['F', 'M']
          })
            .define('id');

          data.add({age: 17, sex: 'F'});

    var data = Stats();

        data.frame({
          id  : [1, 2, 3, 4, 5, 6, 7],
          age : [15, 21, 25, 57, 13, 9, 14],
          sex : ['F', 'F', 'M', 'F', 'M', 'M', 'M']
        }).
          as('id:number').
          as('age:number').
          as('sex:factor', {
            levels: ['F', 'M'],
            ordered: true // means F>M
          })
            .define('id')
            .on('before:add', data => {
              data.age < 18; 
            })

          data.add({age: 17, sex: 'F'});

          data.mutate('age^2') // as regexp
          data.mutate('age', Math.sqrt)

          data.model('lm', {
            specs: 'salary ~ age + sex + educ'
          })
          
          var save = data.forecast({old: true}).forecast({new: /* new data */}).getLast();
          
          
         // data manipulation
         data.sl('5, '); // get 5 rows
         data.sl('age:sex') // get these 2 cols

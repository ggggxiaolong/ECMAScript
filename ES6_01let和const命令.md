#### ES6  笔记

##### let变量

* let  声明的是局部变量， var 声明的是全局变量

  ```javascript
  {
      let a = 10;
    	var b = 1;
  }
  a //referenceError: a is not defined.
  b // 1
  ```

* for 循环 参数部分是父作用域 循环体是自作用域

  ```javascript
  for (let i = 0; i < 3; i++) {
      let i = "abc";
    	console.log(i);
  }
  // abc
  // abc
  // abc
  ```

* let声明的变量不存在变量升级

  ```javascript
  console.log(foo); // 输出undefined
  var foo = 2;

  console.log(bar); //报错ReferenceError
  let bar = 2;
  ```

* 暂时性死区（只要块级作用域内存在`let`命令，它所声明的变量就绑定这个区域，不再受外部的影响）

  ```javascript
  var tmp = 123;

  if (true) {
      tmp = 'abc';
      let tmp;
  }

  var x = x; // 不报错
  let x = x; // 报错 ReferenceError： x is not defined
  ```

* let 变量不允许重复声明

* let变量拥有块级作用域


##### 变量的解构赋值

*  从数组和对象中提取值，对变量进行赋值

  ```javascript
  let [a, b, c] = [1, 2, 3]​
  ```


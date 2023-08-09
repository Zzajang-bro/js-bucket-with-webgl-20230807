/*
20230809
rat( a, b, c, ... ) => do something

function foo(x, ...args) {
  console.log(x, args, ...args, arguments);
}

foo('a', 'b', 'c', z='d')

=>

a
Array(3) [ "b", "c", "d" ]
b c d
Arguments
​    0: "a"
    ​1: "b"
    ​2: "c"
    ​3: "d"
    ​length: 4
*/

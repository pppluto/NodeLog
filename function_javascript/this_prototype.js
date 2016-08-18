function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
        //foo.call(foo,i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count );
//Nan because undefined ++  -->  NaN;
console.log( global.count );

function foo1(){
  // 'use strict'  --> error
  console.log('foo1',this.a);
  bar1()
}

function bar1(){
  console.log('bar1', this.a);
  boo1();
}
function boo1(){
  console.log('boo1', this.a);
}
a = 10;
// foo1()
// (function(){
//   'use strict'; //--> 10
//   foo1()
// })()

function foo2() {
    console.log( this.a ,this.b);
}

var obj2 = {
    a: 42,
    foo: foo2
};

var obj1 = {
    a: 2,
    b: 4,
    obj2: obj2,
    foo: obj2.foo, // changed reference to obj1.
};

var bar = obj1.foo; // change reference to global
a = 'global';
b = 'opps';
bar();  // global opps
obj1.obj2.foo(); // 42  undefined.
obj1.foo();  // 2 , 4

//explict binding
//XXX:If you pass a simple primitive value (of type string, boolean, or number)
//as the this binding, the primitive value is wrapped in its object-form (new String(..), new Boolean(..), or new Number(..), respectively).
function zoo(){
  console.log('zoo',this.a);
}
var tiger = {
  a: 'tiger'
}
zoo();
zoo.call(tiger)

//new binding
function too(a){
  this.a = a
}
// new 生成一个新对象并把too的this绑定到该对象。
var rose = new too(2);
console.log('rose',rose.a);

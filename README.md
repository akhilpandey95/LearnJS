# LearnJS

##### Ok, so what is this ?

> `LearnJs` is an attempt to portray the best parts of Javasript that are
pretty tough and hard to find. It is to be noted that this is not a book/guide
in any form, but a congregation of best practices, language constructs, and other
simple yet effective snippets that gives us an essence of how we can harness
the best out of the language.

------------------

##### So what are all covered in the cheatsheet ?

- [Intro]()
- [Arrays]()
- [Strings]()
- [Objects]()
- [Functions]()
- [Conventions]()
- [Closures]()
- [Currying]()
- [Tails Calls]()

------------------

##### 1. Intro:

`1.1 Declarations`:

```javascript

// bad
var arr = new Array();
var str = new String();
var num = new Number();
var boo = new Boolean();
var obj = new Object();
var reg = new RegExp();
var fun = new function();

// good
var arr = [],
    str = "",
    num = 0,
    boo = false,
    obj = {},
    reg = /()/,
    fun = function(){};
```

We have to understand the fact that in Javascript everything is an object,
so for suppose if we declare a string using the `String` object and compare
it with `var a = ""` then the outcome of the comparision would be false. This
is simply because if we declare a string using the `bad` way and compare it
with a string declared using the `good` way then fundamentally we are comparing
a string with an Object(String).

`Semicolons`:

```javascript

// Snippet one
var foo = {}

foo.code = "this is javascript empire"
foo.engine = "node 0.12.7"
foo.author = "akhil pandey"
foo.version = 0.1

// Snippet two
var bar = {};

bar.name = "akhil pandey";
bar.url = "www.akhilhector.com";
bar.github = "AkhilHector";
bar.age = 20;

if(typeof(bar) == typeof(foo)) {
        console.log("Semicolons donot matter at all")
}

```

Code Snippet one and two are the same. but the fundamental difference
between both the code samples is that one uses semicolons in the lang-
-uage semantics but whereas the other doesnot. Basically we are taught
to use semicolons in languages such as C, C++, Java etc since lines of
code are terminated using ';' but in Javascript the entire scenario is
different. There is absolutely no difference in execution of code with
or without semicolons.

------------------

##### 2. Arrays:

Methods part of Javascript **Array** Object:

- **Array**.push(),
- **Array**.pop(),
- **Array**.indexOf(),
- **Array**.lastindexOf(),
- **Array**.concat(),
- **Array**.splice(),
- **Array**.shift(),
- **Array**.unshift(),
- **Array**.reverse(),
- **Array**.sort(),
- **Array**.map(),
- **Array**.filter(),
- **Array**.some(),
- **Array**.reduce(),
- **Array**.reduceRight(),
- **Array**.join(),
- **Array**.toString()

------------------
**2.1 Array**.push() :
```javascript
var arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
console.log(arr1); // it prints [1,2,3,4,5,6]
```
**Array**.push() is just a mutator function for adding elements to the array. So
  we can simply mention the element as an argument to the function Array.push()
  and the mentioned element would be added as the last element in the array.

------------------
**2.8 Array**.unshift() :
```javascript
var arr1 = [1, 2, 3, 4, 5];
str = "akhil pandey";
arr1.unshift(str);
console.log(arr1); // it prints ["akhil pandey", 1, 2, 3, 4, 5];
```

  **Array**.unshift() falls into the same category as that of Array.push(), Since
  both of them are used as mutator functions for adding elements into an array.
  The only difference between both the methods is that if we pass an argument
  to Array.unshift() then the element would be added as the first element of
  the array.
  If we observe the above snippet we can see that the index of the element
  '1' is shifted to the next place and "akhil pandey" is added as the first
  element of the array. So unlike Array.push() this method should not be
  misunderstood only for adding elements since it adds elements to the start
  of the Array.
------------------



------------------

`TIPS[Arrays] :`

- With the available list of the Array methods we can generally perform most of the operations, but if we require special methods or custom methods that must be part of the already existing Array Object then we define the method with by taking the concept of **Object.prototype**.

------------------


##### 3. Strings:

Methods which are part of Javascript **String** Object:

- **String**.indexOf("stringname");
- **String**.lastIndexOf("stringname");
- **String**.search("stringname");
- **String**.slice(begin, end);
- **String**.substring(begin, end);
- **String**.substr(begin, end);

`TIPS[Strings]:`

- **string.slice()** : The method **string.slice()** essentially extracts part of a string and returns the new string which is sliced. The general notation for using the string.slice method is string.slice(pos1, pos2) where in pos1 is the position of the starting index and pos2 is the position of ending index. The point to be noted here is if we use the string.slice() method by passing negative parameters then it ends up counting and extracting the string from the end to the start. And if we donot pass the second parameter the method extracts the rest of the string.

- **string.substring()** : The method **string.slice()** and **string.substring()** fall into the same category of methods that can be used for extracting part or parts of string from the source string. The difference in both is that we cannot use negative indexes when using the method string.substring(). For example if we pass on a negative index to the method like string.substring(-7,-1) then it essentially doesnot pipe out any error indicating the mistake made for using negative index but displays the string as a whole

------------------

##### 4. Objects:

In Javascript:

| Types                          | Can be Objects | Are Always Objects|
|--------------------------------|:--------------:|:-----------------:|
| **Booleans** | ✔ |  |
| **Numbers** | ✔ |  |
| **Strings** | ✔ |  |
| **Dates** | | ✔ |
| **Maths** | | ✔ |
| **Regular Expressions** | | ✔ |
| **Arrays** | | ✔ |
| **Functions** | | ✔ |

So basically except the primitive values all are objects in Javascript

**4.1** `Objects can be created using three methods`:

- **4.1.1** : "Define and create an object using an Object literal."
```javascript
// creating an oject using an Object literal
var staff = {
	name : "somename",
	branch : "somebranch",
	salary : "somesalary",
	age : 20
};
```
- **4.1.2** : "Define and create an object using an keyword new."
```javascript
// creating an object using new keyword
var admin = new Object();
admin.name = "somename";
admin.department = "somedept";
admin.userid = 123;
admin.age = 20;
```
- **4.1.3** : "Define an object constructor and then create objects of its type."
```javascript
// creating an object using the object constructor
function student(name, github_nick, url, age) {
	this.name = name;
	this.github = "https://github.com/" + github_nick;
	this.url = url;
	this.age = age;
}
```

**4.2** `Using the constructor for the above defined Object` :
```javascript
var akhil = new student("Akhil Pandey", "AkhilHector", "https://www.akhilhector.com", "20");
```

**4.3** `Accessing object methods` :
```javascript
console.log(akhil.github);
console.log(akhil.url);
```

**4.4** `Using the prototype property` :
```javascript
student.prototype.show = function() {
	return this.name + " " + this.github + " " + this.age;
}
```

**4.5** `Adding methods to the prototype` :
```javascript
function student(name, github_nick, url, age) {
	this.name = name;
	this.github = "https://github.com/" + github_nick;
	this.url = url;
	this.age = age;
	this.show = function() {
		return this.name + " " + this.github + " " + this.age;
	}
}
```

`NOTE`: Javasctipt objects are mutable which means that they are referenced by address and not value. For instance if 'master' is an object and 'master-backup' is also another object then if we pass the objects then changing one might result in changing the other object also.
```javascript
{
 var master = {foo : "foo"};
 var master-backup = master;
 master.backup.bar = "bar"; // this changes master.bar and master-backup.bar
}

Object.access.property = {
"Option1" : "we can use objectName.propertyName",
"Option2" : "Either we can write objectName[propertyName]"
}
```

------------------

##### 7. Closures:

Function Closures in Javascript is all about how are the variables being treated and referred to in the local or global scope. In Js variables can be given :

- 'local scope'
- 'global scope'

There is no inbuilt concept for something called private variables, so when there is a requirement for such a scenario Closures are written in Js in order to make scope for variables that are private in scope.

------------------

##### 9. Tail Calls:

Tail calls are nothing but essentially replacing the concept of recursive
functions with loop. In a way this can not only save time but also saves
space i.e better time complexity and space complexity.

```javascript
// snippet one
function f(n) {
	if(n == 0) {
		return 1;
	}
	else {
		return n * f(n-1);
	}
}

// snippet two
function f1(n) {
	function r(n, m) {
		if(n == 0) {
			return m;
		}
		else {
			return r(n-1, n*m);
		}
	}
	return r(n, 1);
}
```

Observing both the algorithms above written for factorial we can understand
that f() is the traditional recursive method used for finding the factorial,
but f1() is the tail call optimized algorithm which is better and fast.

------------------

##### Oh snoop, that piece of code isn't right !

Although the best of efforts have been put in to make sure the
entire documentation is error free there might be small instances where mistakes
might have occurred. In such cases please raise an issue and help me make this
cheat sheet better.

------------------

##### [Akhil Pandey](https://github.com/AkhilHector)
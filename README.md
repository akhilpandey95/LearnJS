# LearnJS

##### Ok, so what is this ?

> `LearnJs` is an attempt to portray the best parts of Javasript that are
pretty tough and hard to find. It is to be noted that this is not a book/guide
in any form, but a congregation of best practices, language constructs, and other
simple yet effective snippets that gives us an essence of how we can harness
the best out of the language.

------------------

##### So what are all covered in the cheatsheet ?

- Intro
- Arrays
- Strings
- Objects
- Functions
- Conventions
- Closures
- Currying

------------------

##### 1. Intro:

`Declarations`:

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
bar.github = "AkhilHector"
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
| Booleans | ✔ |  |
| Numbers | ✔ |  |
| Strings | ✔ |  |
| Dates | | ✔ |
| Maths | | ✔ |
| Regular Expressions | | ✔ |
| Arrays | | ✔ |
| Functions | | ✔ |
| Objects | | ✔ |


------------------

##### Oh snoop, that piece of code isn't right !

Although the best of efforts have been put in to make sure the
entire documentation is error free there might be small instances where mistakes
might have occurred. In such cases please raise an issue and help me make this
cheat sheet better.

------------------

##### [Akhil Pandey](https://github.com/AkhilHector)
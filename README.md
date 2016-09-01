# enjoy-core

Minimal version of the enjoy.js library. Contains probably all of the stuff to meet your daily functional programming needs. Treats arrays and objects in the same way whenever possible. Shuns the dreaded `this`. Makes composition and partial application as easy as it gets. And yes, it also has object-less versions of commonly used methods and turns most operators into functions.

## Installation

    npm install --save enjoy-core

## Fun with functions

### apply(fn, args)

Calls `fn` using the values of `args` as arguments. No `this`.

### auto(fn)

Wraps `fn` so that if it gets called with only one argument and that argument is a function, a
partial application of `fn` is returned instead of calling `fn`.

### bind(fn, arg1, ..., argN)

Binds any number of arguments to `fn`. No `this`.

### call(fn, arg1, ..., argN)

Calls `fn` using the other arguments supplied to `call`.

### flip(fn)

Reverses `fn`'s order of arguments.

### free(method)

Frees a method from the shackles of object-orientation by making it a free function where
the first argument is an object compatible with the method's original object.

### partial(fn, arg1, ..., argN)

Binds all of the other non-`undefined` arguments to `fn`:

```javascript
var forEachInCollection = partial(each, undefined, myCollection);
```

### pipe(value, fn1, ..., fnN)

Calls `fn1` with `value`, then `fn2` with the resulting value, then does the same for all of
the supplied functions and returns the result.

```javascript
pipe([3, 1, 2], sort, reverse); // [3, 2, 1]
```

### compose(fn1, ..., fnN)

Composes all of the supplied functions so that if you call the resulting function with a value
it does the same thing as `pipe`.

## Repeating stuff

### loop(fn)

Calls `fn` again and again until it returns `false`.

### repeat(fn, n) [auto]

Calls `fn` `n` times. If called with only `fn`, a partial application is returned.

## Working with collections (arrays, array-likes, objects)

### at(collection, key)

Retrieves the value at `key` from a `collection`.

### contains(collection, item)

Checks whether `item` is contained in `collection`.

### each(fn, collection) [auto]

Calls `fn` with each item in `collection`. The `fn` callback has this signature:

    fn(item, key, collection)

### expose(collection, key)

Turns an array of objects into an object where the keys are the
values of a property of the objects contained within the original array.

Example:

    [{name: "foo"},{name: "bar"}] => {foo: {name: "foo"}, bar: {name: "bar"}}

### every(fn, collection) [auto]

Returns `true` if `fn` returns a truthy value for each item in `collection`. The execution is cut short when `fn` returns a falsy value for an item in the collection.

### filter(fn, collection) [auto]

Returns an array containing only those items from `collection` that pass the test function `fn`.

### find(fn, collection) [auto]

Returns the first item in `collection` that passes the test function `fn`.

### getter(collection)

Creates a getter function that returns an item from `collection` given its key.

### has(collection, key)

Checks if `collection` contains an item for key `key`.

### join(collection[, glue])

Creates a string containing every item in `collection`, separated by `glue`. If no `glue` is supplied, an empty string is used.

### keys(collection)

Returns an array containing `collection`'s keys.

### map(fn, collection) [auto]

Returns an array where every item from `collection` has been modified using `fn`.

### picker(key)

Creates a function that returns the item at `key` from a given collection.

    any -> (collection -> any)

### pluck(collection, key)

Returns an array containing all the items at `key` for every collection in `collection`.

    collection -> string -> [any]

```javascript
pluck([["foo", "bar"], [1, 2]], 1); // ["bar", 2]
pluck([{"foo": "bar"}, {"foo": "baz"}], "foo"); // ["bar", "baz"]
```

### privatize(collection, key)

Turns an object into an array by putting its keys into the objects contained within the array.

Example:

    {foo: {}, bar: {}} => [{name: "foo"},{name: "bar"}]

### put(collection, key, value)

Sets `collection`'s value of `key` to `value` or adds it if the key doesn't exist yet.

### putter(key)

Creates a function that sets the value at `key` for a given collection and value:

    any -> (collection -> any -> undefined)

### reduce(fn, collection[, initialValue]) [auto]

Reduces `collection` to a single value using the `fn` function. Function `fn` has this signature:

    fn(previousValue, currentValue, key, collection);

If no initial value is supplied, `fn` gets first called for the second item in the collection and the previous value is the value of the first item as-is.

### some(fn, collection)

Returns `true` if at least one item in `collection` satisfies the testing function `fn`. Execution is cut short at the first item for which `fn` returns a truthy value.

### setter(collection)

Creates a setter function for a collection that sets the value at some key or adds it. The returned function has this signature:

    fn(key, value);

### values(collection)

Returns an array containing all of `collection`'s items.

## Working with ordered collections (arrays, array-likes)

### reverse(collection)

Reverses the order of items in the collection. Does **not** mutate the original like `Array.prototype.reverse`!

### sort(collection[, fn])

Sorts `collection` using `fn` or, if no `fn` is supplied, the built-in sort function of `Array.prototype.sort`. Does **not** mutate the original!

## String functions

### split(s, separator)

Splits `s` into an array at each occurrence of `separator`.

## Functionalized operators

### add(n1, ..., nLast)

Adds all of its arguments together.

### divide(n1, ..., nLast)

Divides any number of arguments from left to right.

### mod(n1, ..., nLast)

Reduces the arguments by applying the modulo ("%") operator to each and the next.

### multiply(n1, ..., nLast)

Multiplies its arguments.

### not(a)

Applies the not operator ("!") to `a`.

### subtract(n1, ..., nLast)

Subtracts one or more numbers from `n1`.

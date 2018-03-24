# array-to-object-template

This library is for a specific use case. It goes something like this.

You hand this function an object like this.

```javascript
[ 'date',
  { student: [ 'name', 'cert_number' ] },
  { instructor: [ 'name', 'cert_number', 'cert_expiration', { foo: ['a','b'] } ] },
  { aircraft: [ 'make', 'model' ] } ]
```

And it returns a template based on that object, assuming everything should be a
key... like this.

```javascript
{
  date: null,
  student: {
    name: null,
    cert_number: null
  },
  instructor: {
    name: null,
    cert_number: null,
    cert_expiration_date: null,
    foo: {
      a: null,
      b: null
    }
  },
  aircraft: {
    make: null,
    model: null
  }
}
```

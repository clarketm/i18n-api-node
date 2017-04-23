# Internationalization (I18n) API - Node

### Installation
```bash
$ npm install
```

### Configuration
```js
/* config.json */
{
  "restApiRoot": "/v1",   // api root
  "host": "0.0.0.0",      // host
  "port": 3000,           // port
  ...
}
```
```js
/* datasources.json */
{
  // in-memory database (default)
  "db": {
    "name": "db",
    "connector": "memory"
  },
  // MongoDB database
  "locale": {
    "host": "localhost",
    "port": 27017,
    "database": "locale",
    "connector": "mongodb"
  }
}
```

### Model
```js
// Locale
{
 "language": {
  "type": "string",
  "required": true,
  "default": "en"
},
"partner": {
  "type": "string",
  "required": true,
  "default": "common"
},
"component": {
  "type": "string",
  "required": true
},
"strings": {
  "type": "object",
  "required": true
}
```

### Running
```bash
$ npm start

Web server listening at: http://0.0.0.0:3000
Browse your REST API at http://0.0.0.0:3000/explorer
```

### Usage
```bash
/////////////
// POST /////
/////////////
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \ 
  "language": "en", \ 
  "partner": "common", \ 
  "component": "string", \ 
  "strings": { \ 
    "header" : "I am a header", \ 
    "body" : "I am a body", \ 
    "footer" : "I am a footer" \ 
  } \ 
}' 'http://0.0.0.0:3000/v1/Locales'

// Response Code: 200
{
  "language": "en",
  "partner": "common",
  "component": "string",
  "strings": {
    "header": "I am a header",
    "body": "I am a body",
    "footer": "I am a footer"
  },
  "id": 1
}
```

```bash
/////////////
// GET //////
/////////////
curl -X GET --header 'Accept: application/json' \ 
  'http://0.0.0.0:3000/v1/locales/en/common/app'

// Response Code: 200
{
  "strings": {
    "header": "I am a header",
    "body": "I am a body",
    "footer": "I am a footer"
  },
  "id": 1
}
```

### :star: Credits
Special thanks the the following: 
* [Loopback](https://loopback.io/) - IBM


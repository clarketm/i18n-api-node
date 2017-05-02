# Internationalization (I18n) API - Node

## Installation
```bash
$ npm install
```

## Configuration
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
  //////////////////////////////////
  // in-memory database (default) //
  //////////////////////////////////
  "db": {
    "name": "db",
    "connector": "memory"
  },
  //////////////////////////
  // MongoDB database //////
  ///////////////////////////////////////////////////////
  // [1] install and run mongodb 
  // [2] change "db" => "locale" in `model-config.json`
  ///////////////////////////////////////////////////////
  "locale": {
    "host": "localhost",
    "port": 27017,
    "database": "locale",
    "connector": "mongodb"
  }
}
```

## Running
```bash
$ npm start

Web server listening at: http://0.0.0.0:3000
Browse your REST API at http://0.0.0.0:3000/explorer
```

## Model

### Locale
|  Property   |  Type  | Required | Default |
|-------------|--------|----------|---------|
|  language   | string |   true   |   en    |
|  component  | string |   true   |         |   
|  strings    | object |   true   |         | 
```js
/////////////
// Locale ///
/////////////
{
 "language": {
  "type": "string",
  "required": true,
  "default": "en"
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
## Operations
![operations screenshot](https://github.com/clarketm/i18n-api-node/blob/master/screenshot.png)

## Usage
```bash
#############
## POST #####
#############
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \ 
  "language": "en", \ 
  "component": "string", \ 
  "strings": { \ 
    "header" : "I am a header", \ 
    "body" : "I am a body", \ 
    "footer" : "I am a footer" \ 
  } \ 
}' 'http://0.0.0.0:3000/v1/locales'

// Response Code: 200
{
  "language": "en",
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
#############
## GET ######
#############
curl -X GET --header 'Accept: application/json' \ 
  'http://0.0.0.0:3000/v1/locales/en/app'  # OR 'http://0.0.0.0:3000/v1/locales/en' to get all components 

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

## :star: Credits
Special thanks to the following: 
* [Loopback](https://loopback.io/) - StrongLoop


'use strict';

module.exports = function (Locale) {

  const handleResponse = (err, cb, locale) => {
    if (err) {
      return cb(err);
    }
    if (!locale) {
      err = new Error('Locale not found');
      err.statusCode = 404;
      err.code = 'LOCALE_NOT_FOUND';
      return cb(err);
    }
    cb(null, locale.strings, locale.id);
  };

  Locale.get = function (language, component, cb) {
    if (component === '{component}') {
      Locale.find({where: {language: language}}, function (err, locale) {
        return handleResponse(err, cb, locale);
      });
    } else {
      Locale.findOne({where: {language: language, component: component}}, function (err, locale) {
        return handleResponse(err, cb, locale);
      });
    }
  };

  Locale.remoteMethod(
    'get', {
      description: "Get strings",
      http: {
        path: '/:language/:component',
        verb: 'get'
      },
      accepts: [
        {
          arg: 'language',
          type: 'string',
          required: true,
          default: "en"
        },
        {
          arg: 'component',
          type: 'string',
          default: "App"
        }
      ],
      returns: [
        {
          arg: 'strings',
          type: 'object'
        },
        {
          arg: 'id',
          type: 'number'
        }
      ]
    }
  );
}
;

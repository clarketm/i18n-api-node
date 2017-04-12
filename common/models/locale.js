'use strict';

module.exports = function (Locale) {

  Locale.strings_get = function (language, partner, component, cb) {
    Locale.findOne({where: {language: language, partner: partner, component: component}}, function (err, locale) {
      cb(null, locale.strings);
    });
  };

  Locale.remoteMethod(
    'strings_get', {
      description: "Get strings",
      http: {
        path: '/:language/:partner/:component',
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
          arg: 'partner',
          type: 'string',
          required: true,
          default: "common"
        },
        {
          arg: 'component',
          type: 'string',
          default: "App"
        }
      ],
      returns: {
        arg: 'strings',
        type: 'object'
      }
    }
  );
};

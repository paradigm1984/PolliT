function hbsHelpers(hbs) {
  return hbs.create({
    helpers: { // This was missing
      isTemplateOne: function(value, options) {

        if(value.TypeId== 1) {

            return options.fn(this);
          } else {
            return options.inverse(this);
          }
      }
      ,
      isTemplateTwo: function(value, options) {

        if(value.TypeId== 2) {

            return options.fn(this);
          } else {
            return options.inverse(this);
          }

      },
      isTemplateThree: function(value, options) {

        if(value.TypeId== 3) {

            return options.fn(this);
          } else {
            return options.inverse(this);
          }
      }

      // More helpers...
    },
    defaultLayout: 'layout'

  });
}

module.exports = hbsHelpers;
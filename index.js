var rsvp = require('rsvp');
var sha256 = require('sha256');
var qz = require("qz-tray");

exports.qzPrinty = function() {
	var defaults = {
    printer: 'Zebra-Technologies-ZTC-ZT230-200dpi-ZP'
  };

  if (arguments[0] && typeof arguments[0] === "object") {
    this.options = extendDefaults(defaults, arguments[0]);
  } else {
    this.options = defaults;
  }

  qz.api.setSha256Type(function(data) {
    return sha256(data)
  });

  var config = qz.configs.create(this.options.printer, { margins: 2 });
  var connected;

  qzPrinty.prototype.print = function(html) {
    var data = [{
      type: 'html',
      format: 'plain',
      data: html
    }]; 

    if (!connected) {
      connected = qz.websocket.connect().then(function() { 
        this.print(html);
      }).catch(function(err) { console.log(err); });
    } else {
      qz.print(config, data).catch(function(e) {
        console.error(e);
      });
    }
  }

  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }
}

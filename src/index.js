import RSVP from 'rsvp';
import sha256 from 'sha256';
import qz from 'qz-tray';

window.RSVP = RSVP;

const defaults = {
  printer: 'Zebra-Technologies-ZTC-ZT230-200dpi-ZP'
};

export default class qzPrinty {
	constructor(options) {
		this.options = Object.assign({}, defaults, options);
		this.init();

    return {
      print: this.print.bind(this)
    }
	}
	init() {
		qz.api.setSha256Type(function(data) {
	    return sha256(data);
	  });

	  this.config = qz.configs.create(this.options.printer, { margins: 2 });
  	this.connected = null;
	}
	print(html) {
		let self = this;

    let data = [{
      type: 'html',
      format: 'plain',
      data: html
    }]; 

    if (!self.connected) {
      self.connected = qz.websocket.connect().then(function() { 
        self.print(html);
      }).catch(function(err) { console.log(err); });
    } else {
      qz.print(this.config, data).catch(function(e) {
        console.error(e);
      });
    }
  }
}
 
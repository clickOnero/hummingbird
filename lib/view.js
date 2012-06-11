var sys = require('sys');

var View = function(env) {
  if(!this instanceof View) {
    return new View(env);
  }

  this.env = env;
  this.dealId = this.env.deal_id;
  this.uid = this.env.uid;
  this.href = this.env.href;
if(this.env.events == "scAdd") {
    this.env.type = "cart_add";
  }
 //console.log(env);

}

View.prototype = {
  event: function() {
    if(this.env.events) {
      if(this.env.events.match(/scAdd/)) {
        this._event = "cart_add";
      } else if(this.env.events === "purchase") {
        this._event = "purchase";
      }
    }


    this.event = function() { return this._event; }
    return this._event;
  }
};

exports.View = View;

/*!
 *  jQuery Reach Sroll - v0.1.1
 *
 *  Last release at 11/06/2014
 *  MIT License - http://dhyegofernando.mit-license.org/
 */
;(function(window) {

function reachScroll(el, config) {
  var that = this;

  this.$el = $(el);
  this.config = {
    binder: $(window),
    pause: false,
    pauseIfOccurs: false,
    extraScrollPx: 0,
    onReached: null
  };

  if (typeof config === "object") {
    $.extend(this.config, config);
  }

  this.config.binder = $(this.config.binder);
  this.registerInterests();

  return {
    on: that.on.bind(that),
    off: that.off.bind(that),
    pause: that.pause.bind(that),
    resume: that.resume.bind(that)
  };
}

reachScroll.prototype.on = function() {
  this.$el.on.apply(this.$el, arguments);
};

reachScroll.prototype.off = function() {
  this.$el.off.apply(this.$el, arguments);
};

reachScroll.prototype.pause = function() {
  this.config.pause = true;
};

reachScroll.prototype.resume = function() {
  this.config.pause = false;
};

reachScroll.prototype.destroy = function() {
  this.config.binder.off("scroll", this.events.onScroll);
  this.$el.removeData("reachScroll");
};

reachScroll.prototype.registerInterests = function() {
  this.config.binder.on("scroll", this.events.onScroll.bind(this));
};

reachScroll.prototype.events = {
  onScroll: function(e) {
    if (this.config.pause === true) {
      return;
    }

    var contentHeight, offsetTop;

    if (this.config.binder.get(0) === window || this.config.binder.get(0) === document) {
      contentHeight = $(document).height();
    } else {
      contentHeight = this.config.binder.prop("scrollHeight");
    }

    offsetTop = (this.config.binder.height() + this.config.binder.scrollTop()) + parseInt(this.config.extraScrollPx);

    if (offsetTop >= contentHeight) {
      if (this.config.pauseIfOccurs === true) {
        this.pause();
      }

      this.$el.trigger("scrollreached");

      if (typeof this.config.onReached === "function") {
        this.config.onReached.apply(this.$el[0]);
      }
    }
  }
};

function defineReachScroll($) {
  $.fn.reachScroll = function(arg) {
    var $this = $(this),
      config = {},
      instance;

    if ($this.data("reachScroll") === void 0) {
      if (typeof arg === "object") {
        config = arg;
      }

      instance = new reachScroll(this, config);
      $this.data("reachScroll", instance);
    } else {
      instance = $this.data("reachScroll");
    }

    if (typeof arg === "string") {
      switch (arg) {
        case "pause":
          instance.pause();
          break;
        case "resume":
          instance.resume();
          break;
        case "destroy":
          instance.destroy();
      }
    }

    return instance;
  };
}

/**
 * Polyfill for old browsers
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Compatibility
 */
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // Closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () {},
      fBound = function () {
      return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
        aArgs.concat(Array.prototype.slice.call(arguments)));
      };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

if (typeof define === "function" && define.amd) {
  define(["jquery"], defineReachScroll);
} else {
  defineReachScroll(window.jQuery);
}

}(window));

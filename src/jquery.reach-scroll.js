;(function(window) {
  function ReachScroll(el, config) {
    var that = this;

    this.el = $(el);
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

  ReachScroll.prototype.on = function() {
    this.el.on.apply(this.el, arguments);
  };

  ReachScroll.prototype.off = function() {
    this.el.off.apply(this.el, arguments);
  };

  ReachScroll.prototype.pause = function() {
    this.config.pause = true;
  };

  ReachScroll.prototype.resume = function() {
    this.config.pause = false;
  };

  ReachScroll.prototype.destroy = function() {
    this.config.binder.off("scroll", this.events.onScroll);
    this.el.removeData("reachScroll");
  };

  ReachScroll.prototype.registerInterests = function() {
    this.config.binder.on("scroll", this.events.onScroll.bind(this));
  };

  ReachScroll.prototype.events = {
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

        this.el.trigger("scrollreached");

        if (typeof this.config.onReached === "function") {
          this.config.onReached.apply(this.el[0]);
        }
      }
    }
  };

  function defineReachScroll($) {
    $.fn.reachScroll = function(arg) {
      var that = $(this),
        config = {},
        instance;

      if (that.data("reachScroll") === void 0) {
        if (typeof arg === "object") {
          config = arg;
        }

        instance = new ReachScroll(this, config);
        that.data("reachScroll", instance);
      } else {
        instance = that.data("reachScroll");
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

  if (typeof define === "function" && define.amd) {
    define(["jquery"], defineReachScroll);
  } else {
    defineReachScroll(window.jQuery);
  }
}(window));

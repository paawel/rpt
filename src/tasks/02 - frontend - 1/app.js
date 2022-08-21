(function (context) {
  'use strict';

  function appModule() {
    function init() {};

    var dragAPI = {
      dropAreaElement: document.getElementById('drop-area'),
      dragItemElement: document.getElementById('drag-item'),

      drop: function (event) {
        event.preventDefault();

        // таймаут НЕ убирать
        window.setTimeout(function () {
          this.dropAreaElement.innerHTML = '';
          this.dropAreaElement.appendChild(this.dragItemElement);
        });
      }
    }

    function startCounting() {
      var el = document.getElementById('counter');
      var startCountingButton = document.getElementById('start-counting-button');
      var counter = 0;

      var counterInterval = setInterval(function () {
        if (counter < 101) {

        } else {
          clearInterval(counterInterval)
        }
      }, 10);
    }

    return {
      init: init,
      startCounting: startCounting,
      dragAPI: dragAPI,
    }
  }

  context.AppModule = appModule();

})(window);

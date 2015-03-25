(function ($) {

  'use strict'

  function Synctext(elem) {
    this.elem = elem
    this.$elem = $(elem)
    this.target = this.$elem.data('target')
    this.$target = $(this.target)
    this.defaultText = this.$target.text()
  }

  Synctext.prototype.init = function () {
    this.sync()
    this.$elem.on('input', $.proxy(this.onInput, this))
  }

  Synctext.prototype.onInput = function (event) {
    if (event.which === 13) {
      $(event.currentTarget).blur()
      event.preventDefault() // prevent break line
    }
    this.sync()
  }

  Synctext.prototype.sync = function () {
    var input = this.$elem.text()
    if (input.length === 0) input = this.defaultText
    this.$target.text(input)
  }


  $.fn.synctext = function () {
    $(this).each(function (index, elem) {
      new Synctext(elem).init()
    })
  }

  $('[data-sync="text"]').synctext()

})(jQuery)

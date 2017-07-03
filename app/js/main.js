/**
 * Created by Mike on 28.06.2017.
 */

'use strict';

$(function() {
  // Highlight label onfocus input
  $('.city__input-text, .place__input-text').focus(function() {
    $(this).siblings('label').css('color', 'rgb(0, 0, 0)');
  });

  $('.city__input-text, .place__input-text').focusout(function(){
    $(this).siblings('label').css('color', 'rgb(148, 148, 148)');
  });

  // Show or hide reset-btn
  $('.city__input-text, .place__input-text').keyup(function() {
    if ($(this).val()) {
      $(this).siblings('button').css('visibility', 'visible');
    }

    if (!$(this).val()) {
      $(this).siblings('button').css('visibility', 'hidden');
    }
  });

  // Reset input value
  $('.button-reset').click(function() {
    $(this).siblings('input').val('');
    $(this).css('visibility', 'hidden');
  });

  // Datepicker
  $('#occupancy, #leave').datepicker();

  // Mask for calendar
  $('#occupancy, #leave').mask("99.99.9999");

  // Range-slider
  /*$( '.price__range-slider' ).slider({
    range: true,
    min: 898,
    max: 5000,
    values: [898, 2678]
  });*/

  var tooltipMin = $('<div id="tooltip" />').css({
    position: 'absolute',
    top: -25,
    left: -10
  });

  var tooltipMax = $('<div id="tooltip" />').css({
    position: 'absolute',
    top: -25,
    left: -10
  });

  var sliderItem = $('.price__range-slider').slider({
    range: true,
    min: 898,
    max: 7000,
    values: [898, 2678],
    slide: function(event, ui) {
      tooltipMin.text(ui.values[0]);
      tooltipMax.text(ui.values[1]);
    },
    change: function(event, ui) {
      tooltipMin.text(ui.values[0]);
      tooltipMax.text(ui.values[1]);
    }
  });

  sliderItem
    .find(".ui-slider-handle")
    .first()
    .append(tooltipMin)
    /*.hover(function() {
      tooltipMin.show();
      tooltipMax.show();
    }, function() {
      tooltipmin.hide();
      tooltipmax.hide();
    })*/;

  sliderItem
    .find(".ui-slider-handle")
    .last()
    .append(tooltipMax)
    /*.hover(function() {
      tooltipMin.show();
      tooltipMax.show();
    }, function() {
      tooltipmin.hide();
      tooltipmax.hide();
    })*/;
});
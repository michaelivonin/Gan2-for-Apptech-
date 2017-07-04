/**
 * Created by Mike on 28.06.2017.
 */

'use strict';

$(function() {
  // Highlight label onfocus input
  $('.city__input-text, .place__input-text, .occupancy__input-date, .leave__input-date').focus(function() {
    $(this).siblings('label').css('color', 'rgb(0, 0, 0)');
  });

  $('.city__input-text, .place__input-text, .occupancy__input-date, .leave__input-date').focusout(function(){
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
  var rouble1 = $('<span />').css({
    fontFamily: "ALSRubl, sans-serif",
    fontWeight: 400
  }).text('a');

  var rouble2 = $('<span />').css({
    fontFamily: "ALSRubl, sans-serif",
    fontWeight: 400
  }).text('a');

  var tooltipMin = $('<div class="range-slider__tooltip" />').css({
    position: 'absolute',
    top: -25,
    color: 'rgb(44, 44, 44)',
    fontSize: '0.938rem',
    fontWeight: 700
  }).text('898').append(rouble1);

  var tooltipMax = $('<div class="range-slider__tooltip" />').css({
    position: 'absolute',
    top: -25,
    color: 'rgb(44, 44, 44)',
    fontSize: '0.938rem',
    fontWeight: 700
  }).text('2678').append(rouble2);

  var sliderItem = $('.price__range-slider').slider({
    range: true,
    min: 898,
    max: 5000,
    values: [898, 2678],
    slide: function(event, ui) {
      tooltipMin.text(ui.values[0]).append(rouble1);
      tooltipMax.text(ui.values[1]).append(rouble2);
    },
    change: function(event, ui) {
      tooltipMin.text(ui.values[0]).append(rouble1);
      tooltipMax.text(ui.values[1]).append(rouble2);
    }
  });

  sliderItem.find(".ui-slider-handle").first().append(tooltipMin);
  sliderItem.find(".ui-slider-handle").last().append(tooltipMax);
});
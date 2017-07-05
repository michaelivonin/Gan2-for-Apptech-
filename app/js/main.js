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

  // Show or hide calculator
  var calcCount = 0;
  $('.calculator__button').click(function() {
    if (calcCount === 0) {
      $('.calculator__indicator').addClass('calculator__indicator_visible');
      $(this).children('i').addClass('button-icon_grey');
      ++calcCount;
    } else if (calcCount !== 0) {
      $('.calculator__indicator').removeClass('calculator__indicator_visible');
      $(this).children('i').removeClass('button-icon_grey');
      --calcCount;
    }
  });

  // Show or hide filters
  $('.filters__button').click(function() {
    $('.calculator, .filters').addClass('hide-elem');
    $(this).parent().siblings('.trip').addClass('trip_visible');
    $('.search-form, .settings__button-hide').addClass('show_elem');
  });

  $('.settings__button-hide').click(function() {
    $('.settings__button-hide, .search-form').removeClass('show_elem');
    $(this).siblings('.trip').removeClass('trip_visible');
    $('.calculator, .filters').removeClass('hide-elem');
  });
});
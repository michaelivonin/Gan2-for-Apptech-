/**
 * Created by Mike on 28.06.2017.
 */

'use strict';

$(function() {
  // Rotate icon-down
  var loginCount = 0;
  $('.entrance__button, .heading__link').click(function() {
    if (loginCount === 0) {
      $(this).children('i').addClass('rotate-icon');
      ++loginCount;
    } else {
      $(this).children('i').removeClass('rotate-icon');
      --loginCount;
    }
  });

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
      $('.calc-content, .calc-content__button, .calc-content__line').addClass('show-elem');
      $('.calc-content').children('.text, .input, .calculation').addClass('show-elem_inline');

      ++calcCount;

    } else {

      $('.calc-content').children('.text, .input, .calculation').removeClass('show-elem_inline');
      $('.calc-content, .calc-content__button, .calc-content__line').removeClass('show-elem');
      $(this).children('i').removeClass('button-icon_grey');
      $('.calculator__indicator').removeClass('calculator__indicator_visible');

      --calcCount;

    }
  });

  // Show or hide filters
  $('.filters__button').click(function() {
    $('.calculator, .filters').addClass('hide-elem');
    $(this).parent().parent().addClass('settings_padding');
    $(this).parent().siblings('.trip').addClass('trip_visible');
    $('.search-form, .settings__button-hide').addClass('show-elem');
  });

  $('.settings__button-hide').click(function() {
    $('.settings__button-hide, .search-form').removeClass('show-elem');
    $(this).siblings('.trip').removeClass('trip_visible');
    $(this).parent().removeClass('settings_padding');
    $('.calculator, .filters').removeClass('hide-elem');
  });

  // Show or hide calculator
  $('.calc-content__button').click(function() {
    if ( /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent) && $(window).width() <= (1182 + 17) ) {

      calcCount = 1;
      $('.calculator__button').click();

    } else if ($(window).width() <= 1182) {

      calcCount = 1;
      $('.calculator__button').click();

    } else {

      $(this).siblings().not('.btn-show').addClass('calc-content_hide-elem');
      $(this).addClass('calc-content_hide-elem');
      $('.btn-show').addClass('calc-content_show-elem');

    }
  });

  $('.btn-show').click(function() {
    $(this).removeClass('calc-content_show-elem');
    $(this).siblings().removeClass('calc-content_hide-elem');
  });

  // Calculate
  $('.input__sum').keypress(function(e) {
    if ( e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
    } else {

      $(this).keyup(function() {
        var inputSum = +($('.input__sum').val()),
            sale = +($('.calculation__item').text()).replace(/\D/g, ''),
            result = $('.calculation__result');

        if (inputSum >= sale) {
          var dif = String(inputSum - sale);
          result.text(dif.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
      });

    }
  });

  // Likes
  var likeCount = 0;
  $('.like-button').click(function() {
    if (!$(this).hasClass('like-button_checked')) {

      $(this).addClass('like-button_checked');
      ++likeCount;
      $('.heart__button').children('.button__number').text(likeCount).addClass('button__number_visible');

    } else {
      $(this).removeClass('like-button_checked');
      --likeCount;

      if (likeCount === 0) {
        $('.heart__button').children('.button__number').removeClass('button__number_visible');
      } else {
        $('.heart__button').children('.button__number').text(likeCount);
      }
    }
  });
});
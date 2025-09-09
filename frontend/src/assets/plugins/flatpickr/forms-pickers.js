/**
 * Form Picker
 */

'use strict';

(function () {
  // Flat Picker
  // --------------------------------------------------------------------
  const flatpickrDate = document.querySelector('#flatpickr-date'),
    flatpickrTime = document.querySelector('#flatpickr-time'),
    flatpickrDateTime = document.querySelectorAll('.flatpickr-datetime'),
    flatpickrMulti = document.querySelector('#flatpickr-multi'),
    flatpickrRange = document.querySelector('#flatpickr-range'),
    flatpickrInline = document.querySelector('#flatpickr-inline'),
    flatpickrFriendly = document.querySelector('#flatpickr-human-friendly'),
    flatpickrDisabledRange = document.querySelector('#flatpickr-disabled-range');

  // Date
  if (flatpickrDate) {
    flatpickrDate.flatpickr({
      monthSelectorType: 'static'
    });
  }

  // Time
  if (flatpickrTime) {
    flatpickrTime.flatpickr({
      enableTime: true,
      noCalendar: true
    });
  }

  // Datetime
  if (flatpickrDateTime) {
    flatpickrDateTime.flatpickr({
      enableTime: true,
      dateFormat: 'Y-m-d H:i'
    });
  }

  // Multi Date Select
  if (flatpickrMulti) {
    flatpickrMulti.flatpickr({
      weekNumbers: true,
      enableTime: true,
      mode: 'multiple',
      minDate: 'today'
    });
  }


  // Inline
  if (flatpickrInline) {
    flatpickrInline.flatpickr({
      inline: true,
      allowInput: false,
      monthSelectorType: 'static'
    });
  }

  // Human Friendly
  if (flatpickrFriendly) {
    flatpickrFriendly.flatpickr({
      altInput: true,
      altFormat: 'F j, Y',
      dateFormat: 'Y-m-d'
    });
  }

  // Disabled Date Range
  if (flatpickrDisabledRange) {
    const fromDate = new Date(Date.now() - 3600 * 1000 * 48);
    const toDate = new Date(Date.now() + 3600 * 1000 * 48);

    flatpickrDisabledRange.flatpickr({
      dateFormat: 'Y-m-d',
      disable: [
        {
          from: fromDate.toISOString().split('T')[0],
          to: toDate.toISOString().split('T')[0]
        }
      ]
    });
  }
})();

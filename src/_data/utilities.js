const { DateTime } = require('luxon');

const sentenceCase = function (str) {
  if (typeof str !== 'string' || !str.length) {
    return str;
  }
  str = str.replace(/-/g, ' ');
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const humanizeDate = function (datetime, date) {
  const dt = DateTime.fromISO(datetime || date);
  if (datetime) {
    return dt.toLocaleString(DateTime.DATETIME_FULL);
  }
  return dt.toLocaleString(DateTime.DATE_FULL);
};

const isWrappedInParagraphTags = function (html) {
  if (typeof html !== 'string') {
    return false;
  }
  return html.substring(0, 3) === '<p>';
};

module.exports = {
  sentenceCase,
  humanizeDate,
  isWrappedInParagraphTags,
};

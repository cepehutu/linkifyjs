var w = null;
QUnit.config.autostart = false;

require([
      'linkify',
      'linkify-element',
      'linkify-html',
      'linkify-string'
], function (linkify, linkifyElement, linkifyHtml, linkifyStr) {
	w = {
		linkify: linkify,
		linkifyElement: linkifyElement,
		linkifyHtml: linkifyHtml,
		linkifyStr: linkifyStr
	};
	QUnit.start();
});

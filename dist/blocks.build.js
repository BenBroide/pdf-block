/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    PlainText = _wp$editor.PlainText;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar Button = wp.components.Button;\n\n// Import our CSS files\n\n\n\n\nvar pdfThumb = function pdfThumb(pdfUrl) {\n\treturn pdfUrl.replace('.pdf', '-pdf.jpg');\n};\n\nregisterBlockType('card-block/main', {\n\ttitle: 'Card',\n\ticon: 'heart',\n\tcategory: 'common',\n\tattributes: {\n\t\ttitle: {\n\t\t\tsource: 'text',\n\t\t\tselector: '.card__title'\n\t\t},\n\t\tbody: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.card__body'\n\t\t},\n\t\timageAlt: {\n\t\t\tattribute: 'alt',\n\t\t\tselector: '.card__image'\n\t\t},\n\t\timageUrl: {\n\t\t\tattribute: 'src',\n\t\t\tselector: '.card__image'\n\t\t}\n\t},\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes;\n\n\n\t\tvar getImageButton = function getImageButton(openEvent) {\n\t\t\tif (attributes.imageUrl) {\n\t\t\t\treturn wp.element.createElement('img', {\n\t\t\t\t\tsrc: pdfThumb(attributes.imageUrl),\n\t\t\t\t\tonClick: openEvent,\n\t\t\t\t\tstyle: { width: '40px' },\n\t\t\t\t\tclassName: 'image'\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'button-container' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tButton,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tonClick: openEvent,\n\t\t\t\t\t\t\tclassName: 'button button-large'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t'Pick an image'\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'container' },\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: function onSelect(media) {\n\t\t\t\t\tsetAttributes({ imageAlt: media.alt, imageUrl: media.url });\n\t\t\t\t},\n\t\t\t\ttype: 'pdf',\n\t\t\t\tvalue: attributes.imageUrl,\n\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\treturn getImageButton(open);\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(PlainText, {\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ title: content });\n\t\t\t\t},\n\t\t\t\tvalue: attributes.imageUrl,\n\t\t\t\tplaceholder: 'Your card title',\n\t\t\t\tclassName: 'heading'\n\t\t\t}),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ body: content });\n\t\t\t\t},\n\t\t\t\tvalue: attributes.body,\n\t\t\t\tmultiline: 'p',\n\t\t\t\tplaceholder: 'Your card text',\n\t\t\t\tformattingControls: ['bold', 'italic', 'underline'],\n\t\t\t\tisSelected: attributes.isSelected\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(_ref3) {\n\t\tvar attributes = _ref3.attributes;\n\n\n\t\tvar cardImage = function cardImage(src, alt) {\n\t\t\tif (!src) return null;\n\n\t\t\tif (alt) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\tclassName: 'card__image',\n\t\t\t\t\t\tsrc: pdfThumb(src),\n\t\t\t\t\t\talt: alt,\n\t\t\t\t\t\tstyle: { width: '30px' }\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ href: src },\n\t\t\t\t\t\t'Download file'\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\n\t\t\t// No alt set, so let's hide it from screen readers\n\t\t\treturn wp.element.createElement('img', {\n\t\t\t\tclassName: 'card__image',\n\t\t\t\tsrc: pdfThumb(src),\n\t\t\t\talt: '',\n\t\t\t\t'aria-hidden': 'true'\n\t\t\t});\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'card' },\n\t\t\tcardImage(attributes.imageUrl, attributes.imageAlt),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'card__content' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\t{ className: 'card__title' },\n\t\t\t\t\tattributes.title\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'card__body' },\n\t\t\t\t\tattributes.body\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQsXG4gICAgUGxhaW5UZXh0ID0gX3dwJGVkaXRvci5QbGFpblRleHQ7XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgQnV0dG9uID0gd3AuY29tcG9uZW50cy5CdXR0b247XG5cbi8vIEltcG9ydCBvdXIgQ1NTIGZpbGVzXG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBwZGZUaHVtYiA9IGZ1bmN0aW9uIHBkZlRodW1iKHBkZlVybCkge1xuXHRyZXR1cm4gcGRmVXJsLnJlcGxhY2UoJy5wZGYnLCAnLXBkZi5qcGcnKTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjYXJkLWJsb2NrL21haW4nLCB7XG5cdHRpdGxlOiAnQ2FyZCcsXG5cdGljb246ICdoZWFydCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHRzb3VyY2U6ICd0ZXh0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLmNhcmRfX3RpdGxlJ1xuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdHNvdXJjZTogJ2NoaWxkcmVuJyxcblx0XHRcdHNlbGVjdG9yOiAnLmNhcmRfX2JvZHknXG5cdFx0fSxcblx0XHRpbWFnZUFsdDoge1xuXHRcdFx0YXR0cmlidXRlOiAnYWx0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLmNhcmRfX2ltYWdlJ1xuXHRcdH0sXG5cdFx0aW1hZ2VVcmw6IHtcblx0XHRcdGF0dHJpYnV0ZTogJ3NyYycsXG5cdFx0XHRzZWxlY3RvcjogJy5jYXJkX19pbWFnZSdcblx0XHR9XG5cdH0sXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXG5cdFx0dmFyIGdldEltYWdlQnV0dG9uID0gZnVuY3Rpb24gZ2V0SW1hZ2VCdXR0b24ob3BlbkV2ZW50KSB7XG5cdFx0XHRpZiAoYXR0cmlidXRlcy5pbWFnZVVybCkge1xuXHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG5cdFx0XHRcdFx0c3JjOiBwZGZUaHVtYihhdHRyaWJ1dGVzLmltYWdlVXJsKSxcblx0XHRcdFx0XHRvbkNsaWNrOiBvcGVuRXZlbnQsXG5cdFx0XHRcdFx0c3R5bGU6IHsgd2lkdGg6ICc0MHB4JyB9LFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ2ltYWdlJ1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdidXR0b24tY29udGFpbmVyJyB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0b25DbGljazogb3BlbkV2ZW50LFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLWxhcmdlJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdQaWNrIGFuIGltYWdlJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdjb250YWluZXInIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0b25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGltYWdlQWx0OiBtZWRpYS5hbHQsIGltYWdlVXJsOiBtZWRpYS51cmwgfSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHR5cGU6ICdwZGYnLFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5pbWFnZVVybCxcblx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZjIpIHtcblx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG5cdFx0XHRcdFx0cmV0dXJuIGdldEltYWdlQnV0dG9uKG9wZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQbGFpblRleHQsIHtcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNvbnRlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5pbWFnZVVybCxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdZb3VyIGNhcmQgdGl0bGUnLFxuXHRcdFx0XHRjbGFzc05hbWU6ICdoZWFkaW5nJ1xuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNvbnRlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGJvZHk6IGNvbnRlbnQgfSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmJvZHksXG5cdFx0XHRcdG11bHRpbGluZTogJ3AnLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ1lvdXIgY2FyZCB0ZXh0Jyxcblx0XHRcdFx0Zm9ybWF0dGluZ0NvbnRyb2xzOiBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddLFxuXHRcdFx0XHRpc1NlbGVjdGVkOiBhdHRyaWJ1dGVzLmlzU2VsZWN0ZWRcblx0XHRcdH0pXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMykge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZjMuYXR0cmlidXRlcztcblxuXG5cdFx0dmFyIGNhcmRJbWFnZSA9IGZ1bmN0aW9uIGNhcmRJbWFnZShzcmMsIGFsdCkge1xuXHRcdFx0aWYgKCFzcmMpIHJldHVybiBudWxsO1xuXG5cdFx0XHRpZiAoYWx0KSB7XG5cdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2NhcmRfX2ltYWdlJyxcblx0XHRcdFx0XHRcdHNyYzogcGRmVGh1bWIoc3JjKSxcblx0XHRcdFx0XHRcdGFsdDogYWx0LFxuXHRcdFx0XHRcdFx0c3R5bGU6IHsgd2lkdGg6ICczMHB4JyB9XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2EnLFxuXHRcdFx0XHRcdFx0eyBocmVmOiBzcmMgfSxcblx0XHRcdFx0XHRcdCdEb3dubG9hZCBmaWxlJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTm8gYWx0IHNldCwgc28gbGV0J3MgaGlkZSBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG5cdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogJ2NhcmRfX2ltYWdlJyxcblx0XHRcdFx0c3JjOiBwZGZUaHVtYihzcmMpLFxuXHRcdFx0XHRhbHQ6ICcnLFxuXHRcdFx0XHQnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ2NhcmQnIH0sXG5cdFx0XHRjYXJkSW1hZ2UoYXR0cmlidXRlcy5pbWFnZVVybCwgYXR0cmlidXRlcy5pbWFnZUFsdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NhcmRfX2NvbnRlbnQnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnaDMnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2FyZF9fdGl0bGUnIH0sXG5cdFx0XHRcdFx0YXR0cmlidXRlcy50aXRsZVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdjYXJkX19ib2R5JyB9LFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuYm9keVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);
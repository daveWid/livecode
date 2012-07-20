/**
 * jQuery plugin to allow for live coding!
 *
 * @author   Dave Widmer <dwidmer@bgsu.edu>
 * @version  0.1.0
 * @license  http://opensource.org/licenses/MIT MIT
 */
(function($){
	/**
	 * @var object  The configuration
	 */
	var config = {
		'callback': null
	},

	/**
	 * Initilization, the jQuery gateway
	 *
	 * @param opts object   Configuration options
	 * @return jQueryObject  [for chaining]
	 */
	init = function(opts){
		config = $.extend({}, config, opts);

		$(this.selector).on('blur', function(e){
			update(e.target);
		});

		return this.each(function(){
			this.contentEditable = true;
			update(this);
		});
	},

	/**
	 * Updates the target with the new code.
	 *
	 * @param ele DOMElement  The DOM element that needs updated
	 */
	update = function(ele){
		var selector = ele.dataset.target;
		$(selector).html($(ele).text());

		if (config.callback !== null) {
			config.callback(ele);
		}
	};

	// Add the plugin to the jQuery chain
	$.fn.livecode = init;
})(jQuery);

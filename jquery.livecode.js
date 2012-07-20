/**
 * jQuery plugin to allow for live coding!
 *
 * @author   Dave Widmer <dwidmer@bgsu.edu>
 * @version  0.1.1
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

		$("[data-live-code]").each(function(){
			this.contentEditable = true;

			$(this).on('blur', function(e){
				update(e.target, e.target.dataset.liveCode);
			});

			$(this).trigger('blur');
		});

		return this;
	},

	/**
	 * Updates the target with the new code.
	 *
	 * @param ele      DOMElement  The DOM element that needs updated
	 * @param selector string      The com selector
	 */
	update = function(ele, selector){
		$(selector).html($(ele).text());

		if (config.callback !== null) {
			config.callback(ele);
		}
	};

	// Add the plugin to the jQuery chain
	$.extend({
		livecode: init
	});
	//$.fn.livecode = init;
})(jQuery);

/**
 * Flagity
 *
 * Custom binding to switch the visivility of the DOM with binary flags
 *
 * Copyright(c) 2013 Delmo Carrozzo <dcardev@gmail.com>
 * MIT Licensed
 *
 * git project on https://github.com/delmosaurio/experimental/flagity
 *
 */

(function($, ko, undefined){

	var unwrap = ko.unwrap,
		attrFlag = 'flags';

	ko.bindingHandlers.flagity = {
		update: function(element, valueAccessor, allBindingsAccessor) {
			var value = unwrap(valueAccessor());
			var flags = $(element).data(attrFlag);
			var match =  (flags & value) == flags;
			
			console.log('[update]', 'value:', value, 'flags:', flags, 'match:', match);

			$(element).toggle(match);
		}
	};

})(jQuery, ko)
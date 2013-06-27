(function($){
	$.entwine('ss', function($){
		$('.ss-togglestate').entwine({
			onadd: function() {
				var state = this.loadToggleState();
				this.accordion({
					collapsible: true,
					active: state
				});
				this._super();
			},
			onremove: function() {
				this.saveToggleState();
				this.accordion('destroy');
			},
			
			onaccordionactivate: function() {
				this.saveToggleState();
			},
			
			getTabSet: function() {
				return this.closest(".ss-tabset");
			},

			fromTabSet: {
				ontabsshow: function() {
					this.accordion("resize");
				}
			},
			
			saveToggleState: function() {
				var state = this.accordion('option','active');
				var value = (state === 0)? 'open': 'closed';
				var key   = this.getSessionKey();
				try {
					window.sessionStorage.setItem(key, value);
				} catch(err) {
					if (err.code === DOMException.QUOTA_EXCEEDED_ERR && window.sessionStorage.length === 0) {
						// If this fails we ignore the error as the only issue is that it 
						// does not remember the tab state.
						// This is a Safari bug which happens when private browsing is enabled.
						return;
					} else {
						throw err;
					}
				}
			},
			
			loadToggleState: function() {
				var key   = this.getSessionKey();
				var state = false;
				var hasSessionStorage = (typeof(window.sessionStorage)!=="undefined" && window.sessionStorage);
				var value = (hasSessionStorage) ? window.sessionStorage.getItem(key) : false;
				
				if (value == 'open') {
					state = 0;
				}
				else {
					if (value == 'closed') {
						state = false;
					}
					else {
						state = (this.hasClass("ss-togglestate-start-closed")) ? false : 0;
					}
				}
				return state;
			},
			
			getSessionKey: function() {
				var id = $(this).attr('id');
				var url = History.getState()
					.url.replace(/\?.*/, '')
					.replace(/#.*/, '')
					.replace($('base').attr('href'), '');
				return url+id;				
			}
		});
	});
})(jQuery);



'use strict';

define('admin/plugins/composer-anonymous', ['settings', 'alerts'], function (Settings, alerts) {
	let ACP = {};

	ACP.init = function () {
		Settings.load('composer-anonymous', $('.composer-anonymous-settings'));

		$('#save').on('click', function () {
			Settings.save('composer-anonymous', $('.composer-anonymous-settings'), function () {
				alerts.alert({
					type: 'success',
					alert_id: 'composer-anonymous-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function () {
						socket.emit('admin.reload');
					},
				});
			});
		});
	};

	return ACP;
});

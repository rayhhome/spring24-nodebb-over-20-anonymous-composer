'use strict';

const Controllers = {};

Controllers.renderAdminPage = function (req, res) {
	res.render('admin/plugins/composer-anonymous', {});
};

module.exports = Controllers;

exports.index = function(req, res, next) {
	console.log('hellow world');
 	res.render('index', { title: 'Express' });
}
exports.get_landing = function(req, res, next) {
	console.log('hellow world');
 	res.render('landing', { title: 'Express' });
}
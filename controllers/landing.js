exports.get_landing = function(req, res, next) {
	console.log('hellow world');
 	res.render('landing', { title: 'Express' });
}
exports.submit_lead = function(req, res, next) {
	console.log("emial variable: " + req.body.lead_email);
 	res.redirect('/');
}
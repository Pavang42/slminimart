var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest : 'images/uploads/'});

var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res) {
 // res.render('index', { title: 'Express' });
});

router.post('/imagedetails', upload.any(),function(req, res,next) {
	console.log("Inside file uploader....");
	console.log(req.files);

	/*console.log('Inside upload images');
	req.files.forEach(function(file){
		console.log(file);	

		var filename = (new Date).valueOf()+'-'+file.originalname;
		fs.rename(file.path, 'images/uploads/'+filename, function(err){
			if(err) throw err;

			console.log('file uploaded...');
		});
	})*/
	
});


module.exports = router;

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	res.json({
		myApp: 'testingroutes'
	});
});

module.exports=router;
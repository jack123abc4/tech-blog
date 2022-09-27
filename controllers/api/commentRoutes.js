const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    console.log("\n\nRoute hit\n\n", req.body);
    
    const comment = await Comment.create({
        ...req.body
        });
    return res.status(200).json(comment);
    
    
})



module.exports = router;
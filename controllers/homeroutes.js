// home routes
const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async(req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain : true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } 
    catch(err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],
        });
        console.log(postData);

        const post = postData.get({ plain: true });
        console.log(post);

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in,

        });
    }
    catch (err) {
        res.status(500).json(err);
    }
})





module.exports = router;
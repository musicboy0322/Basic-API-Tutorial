const express = require('express');
const router = express.Router();
const Data = require('./Data');


router.get('/', async (req, res) => {
    try {
        const find = await Data.find();
        res.json(find);
    } catch (error) {
        res.json({ message: error });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const find = await Data.findById(req.params.id);
        res.json(find);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/', async (req, res) => {
    const post = new Data({
        starsign: req.body.starsign,
        property: req.body.property,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error });
    }

});

router.put('/:id', async (req, res) => {
    try {
        const updateData = await Data.updateOne({ _id: req.params.id }, { $set: { property: req.body.property } });
        res.json(updateData);
    } catch (error) {
        res.json({ message: error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updateData = await Data.updateOne({ _id: req.params.id }, { $set: { property: req.body.property } });
        res.json(updateData);
    } catch (error) {
        res.json({ message: error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteData = await Data.remove({ _id: req.params.id });
        res.json(deleteData);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;
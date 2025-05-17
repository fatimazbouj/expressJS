const express = require('express');
const Task=require('../models/task.model');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

const {body,validationResult}=require('express-validator');

router.use(authMiddleware);

router.get('/', async (req,res)=>{
    const tasks = await Task.find();
    res.status(200).json(tasks);
});

router.get('/:id', async (req,res)=>{
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
})

router.post('/', async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title } = req.body;

    const task = new Task({ title });
    await task.save();
    res.status(201).json(task);
})

router.put('/:id', async (req,res)=>{
    const {title, completed} = req.body;
    try{
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });

        if (title !== undefined) task.title = title;
        if (completed !== undefined) task.completed = completed;
        await task.save();

        res.json(task);

    }catch (err){
        res.status(400).json({ error: 'ID invalide' });
    }

})


router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: 'ID invalide' });
    }
});

module.exports = router;
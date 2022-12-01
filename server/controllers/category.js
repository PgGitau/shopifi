import Category from '../models/category.js';
import slugify from 'slugify';


export const create = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name.trim()) {
            return res.json({error: "Name is required"})
        }

        // check if there's an existing category
        const existingCategory = await Category.findOne({ name }); //same as {name: name}
        if (existingCategory) {
            return res.json({error: "Category already exists"})
        }

        const category = await new Category({ name, slug: slugify(name) });
        category.save();
        res.json(category);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
};

//update (first find cat thro' catId then update it)
export const update = async (req, res) => {
    try {
        const { name } = req.body;
        const { categoryId } = req.params;
        const category = await Category.findByIdAndUpdate(
            categoryId,
            {
                name,
                slug: slugify(name)
            },
            {
                new: true // used to save the update
            }
        );
        res.json(category);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
}

//to delete (find cat thro' catId and delete it)
export const remove = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const removed = await Category.findByIdAndDelete(categoryId);
        res.json(removed);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
}

// to list categories (use .find to get all Cats)
export const list = async (req, res) => {
    try {
        const all = await Category.find({});
        res.json(all);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
}

// to list single category(based on slug that we'll receive
// from router.get('/category/:slug', read);)
export const read = async (req, res) => {
    try {
        const category = await Category.findOne({slug: req.params.slug}); 
        res.json(category);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
}
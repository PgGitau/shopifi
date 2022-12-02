import Product from '../models/product.js';
import fs from 'fs';
import slugify from 'slugify';

export const create = async (req, res) => {
    try {
        const { name, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;

        // validation
        switch (true) {
          case !name.trim():
            return res.json({ error: "Name is required" });

          case !description.trim():
            return res.json({ error: "Description is required" });

          case !price.trim():
            return res.json({ error: "Price is required" });

          case !category.trim():
            return res.json({ error: "Category is required" });

          case !quantity.trim():
            return res.json({ error: "Quantity is required" });

          case !shipping.trim():
            return res.json({ error: "Shipping is required" });

          case photo && photo.size > 1000000:
            return res.json({ error: "Image should be less than 1mb in size" });
        }

        // create a product
        const product = new Product({ ...req.fields, slug: slugify(name) });
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }
        await product.save();
        res.json(product);

    } catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
};

// get a list of all products
export const list = async (req, res) => {
    try {
        // select all products and populate the cat info
        // no  photo to be shown when listing all
        // and limit number of products to 12
        const products = await Product.find({})
          .populate("category") // provides info abt the category(catId, catName, slug etc)
          .select("-photo")
          .limit(12)
          .sort({ createdAt: -1 });

        res.json(products);

    } catch (err) {
        console.log(err);

    }
}

// get a single product
export const read = async (req, res) => {
    try {
        // list a single product except its photo
        // and populate its category(give info abt category)
        const product = await Product.findOne({ slug: req.params.slug })
          .select("-photo")
          .populate("category");

        res.json(product);

    } catch (err) {
        console.log(err);

    }
};

// get photo
export const photo = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId).select("photo");
        if (product.photo.data) {
            res.set("Content-Type", product.photo.contentType);
            return res.send(product.photo.data);
        }
    } catch (err) {
        console.log(err);        
    }
}

// remove product
export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.productId).select("-photo");
        res.json(product);
    } catch (err) {
        console.log(err);        
    }
}

// updating product
export const update = async (req, res) => {
    try {
        const { name, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;

        // validation
        switch (true) {
          case !name.trim():
            return res.json({ error: "Name is required" });

          case !description.trim():
            return res.json({ error: "Description is required" });

          case !price.trim():
            return res.json({ error: "Price is required" });

          case !category.trim():
            return res.json({ error: "Category is required" });

          case !quantity.trim():
            return res.json({ error: "Quantity is required" });

          case !shipping.trim():
            return res.json({ error: "Shipping is required" });

          case photo && photo.size > 1000000:
            return res.json({ error: "Image should be less than 1mb in size" });
        }

        // update a product
        const product = await Product.findByIdAndUpdate(
          req.params.productId,
          {
            ...req.fields,
            slug: slugify(name),
          },
          { new: true }
        );

        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }
        
        await product.save();
        res.json(product);

    } catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
};



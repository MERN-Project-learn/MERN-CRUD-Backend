const Product = require('../productModel/productModel')


exports.createproduct = async(req,res)=>{
    const products = await Product.create(req.body);
       console.log(req.body)
    res.status(201).json({
        success:true,
        products
    })
}

exports.getProduct = async(req, res) => {
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })
}

exports.UpdateProduct= async(req, res) => {
    
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"})
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,
    useFindAndModify:true,
runValidators:true})

    res.status(200).json({
        success: true,
        product
    })
}

exports.DeleteProduct = async(req, res)=>{

    let product = await Product.findById(req.params.id)

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"})
    }

    await product.remove()

    res.status(200).json({success: true,message: 'Product deleted successfully'})
}
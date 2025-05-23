
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, categories } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { toast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }
  
  const category = categories.find(c => c.id === product.category);
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
    
  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="text-gray-500 hover:text-primary">Products</Link>
          {category && (
            <>
              <span className="mx-2">/</span>
              <Link to={`/products/${category.slug}`} className="text-gray-500 hover:text-primary">
                {category.name}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            {product.isNew && (
              <div className="inline-block bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                New
              </div>
            )}
            
            <p className="text-2xl font-bold text-primary mb-6">
              ${product.price.toFixed(2)}
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Description:</h3>
              <p className="text-gray-700">
                {product.description}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category:</h3>
              <p className="text-gray-700">
                {category?.name}
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button size="lg" onClick={addToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

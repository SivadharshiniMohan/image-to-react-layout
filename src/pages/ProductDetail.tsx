import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { toast } from '@/components/ui/use-toast';
import { p1 } from '@/data/mockData';

const ProductDetail = () => {
  const { name } = useParams(); // expecting product name as param

  // Find product and category by exact name match
  let product = null;
  let categoryName = '';

  for (const [category, items] of Object.entries(p1)) {
    const found = items.find(item => item.name === name);
    if (found) {
      product = found;
      categoryName = category;
      break;
    }
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Firework Not Found</h1>
        <p className="mb-6">The firework you're looking for doesn't exist or has been removed from our collection.</p>
        <Button asChild>
          <Link to="/products">Browse Fireworks</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = p1[categoryName]
    .filter(p => p.name !== name)
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
          <Link to="/products" className="text-gray-500 hover:text-primary">Fireworks</Link>
          {categoryName && (
            <>
              <span className="mx-2">/</span>
              <Link to={`/products/${categoryName}`} className="text-gray-500 hover:text-primary">
                {categoryName}
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

            <p className="text-2xl font-bold text-primary mb-6">
              ${product.discountPrice.toFixed(2)}
            </p>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Description:</h3>
              <p className="text-gray-700">
                Description not available.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category:</h3>
              <p className="text-gray-700">{categoryName}</p>
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
            <h2 className="text-2xl font-bold mb-6">Similar Fireworks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

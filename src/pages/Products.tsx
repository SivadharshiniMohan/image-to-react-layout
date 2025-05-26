
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { newMockData, categories } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';
import PriceListButton from '@/components/ui/PriceListButton';

interface ProductItem {
  name: string;
  actualPrice: number;
  discountPrice: number;
  image: string;
}

const Products = () => {
  const { categorySlug } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categorySlug 
      ? [Object.keys(newMockData).find(key => key.toLowerCase().replace(/\s+/g, '-') === categorySlug) || ''].filter(cat => cat !== '')
      : []
  );

  // Get all products with their categories
  const allProducts: { product: ProductItem; category: string }[] = [];
  Object.entries(newMockData).forEach(([category, products]) => {
    products.forEach(product => {
      allProducts.push({ product, category });
    });
  });

  const filteredProducts = allProducts.filter(({ product, category }) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || 
                           selectedCategories.includes(category);
    
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Fireworks Collection</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h3 className="font-semibold text-lg mb-4">Search Fireworks</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search fireworks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-4">Filter by Category</h3>
              <div className="space-y-2">
                {Object.keys(newMockData).map(category => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <Label htmlFor={`category-${category}`} className="cursor-pointer">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length > 0 ? (
              <div>
                {Object.entries(
                  filteredProducts.reduce((acc, { product, category }) => {
                    if (!acc[category]) acc[category] = [];
                    acc[category].push(product);
                    return acc;
                  }, {} as Record<string, ProductItem[]>)
                ).map(([category, categoryProducts]) => (
                  <div key={category} className="mb-8">
                    <div className="bg-primary text-white py-3 px-4 rounded-t-lg mb-4">
                      <h2 className="text-xl font-bold text-center">{category}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryProducts.map((product, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop";
                            }}
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-2xl font-bold text-primary">₹{product.actualPrice}</span>
                                {product.discountPrice !== product.actualPrice && (
                                  <span className="text-sm text-gray-500 line-through ml-2">₹{product.discountPrice}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-lg text-gray-500">No fireworks found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Price List Button */}
      <PriceListButton />
    </div>
  );
};

export default Products;

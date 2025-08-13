import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { products, reviews } from '../data/products';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === id);
  const productReviews = reviews[id || ''] || [];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link to="/products" className="text-emerald-600 hover:text-emerald-700">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-emerald-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-emerald-600">Products</Link>
          <span>/</span>
          <Link to={`/products/${product.category}`} className="hover:text-emerald-600 capitalize">
            {product.category.replace('-', ' ')}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img
              src={product.images[selectedImage] || product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-emerald-600' : 'border-gray-200'
                }`}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <span className="text-emerald-600 font-medium uppercase tracking-wide text-sm">
              {product.category.replace('-', ' ')}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
              </div>
              <span className="text-emerald-600 font-medium">{product.brand}</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            <p className="text-gray-600 text-lg">{product.description}</p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <label className="font-medium">Quantity:</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center space-x-2 text-sm">
              <Truck className="w-5 h-5 text-emerald-600" />
              <span>Free shipping over $75</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>Quality guaranteed</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <RotateCcw className="w-5 h-5 text-emerald-600" />
              <span>30-day returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {['description', 'nutrition', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'nutrition' ? 'Nutritional Facts' : tab}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === 'description' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Usage Instructions</h3>
              <p className="text-gray-600 mb-6">{product.usage}</p>
              <h3 className="text-xl font-semibold mb-4">Warnings</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {product.warnings.map((warning, index) => (
                  <li key={index}>• {warning}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'nutrition' && product.nutritionalFacts && (
          <div className="max-w-2xl">
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Nutritional Facts</h3>
              <div className="border-b border-gray-300 pb-2 mb-4">
                <p><strong>Serving Size:</strong> {product.nutritionalFacts.servingSize}</p>
                <p><strong>Servings Per Container:</strong> {product.nutritionalFacts.servingsPerContainer}</p>
                {product.nutritionalFacts.calories && (
                  <p><strong>Calories:</strong> {product.nutritionalFacts.calories}</p>
                )}
              </div>
              <div className="space-y-2">
                {product.nutritionalFacts.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex justify-between border-b border-gray-200 pb-1">
                    <span>{ingredient.name}</span>
                    <div className="text-right">
                      <span className="font-medium">{ingredient.amount}</span>
                      {ingredient.dailyValue && (
                        <span className="text-sm text-gray-600 ml-2">{ingredient.dailyValue}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold">{product.rating}</span>
                <span className="text-gray-600">({product.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {productReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{review.userName}</span>
                      {review.verified && (
                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <h4 className="font-medium mb-2">{review.title}</h4>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
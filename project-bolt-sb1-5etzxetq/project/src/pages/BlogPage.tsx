import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Search } from 'lucide-react';
import { blogPosts } from '../data/blog';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Health & Fitness Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Expert advice on nutrition, supplements, and fitness to help you achieve your health goals
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={filteredPosts[0].image}
                  alt={filteredPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {filteredPosts[0].category}
                  </span>
                </div>
                <Link to={`/blog/${filteredPosts[0].id}`}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {filteredPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {filteredPosts[0].readTime} min read
                    </div>
                  </div>
                  <Link
                    to={`/blog/${filteredPosts[0].id}`}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.slice(1).map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <Link to={`/blog/${post.id}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <Link to={`/blog/${post.id}`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-emerald-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime} min
                  </div>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
            }}
            className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="mt-16 bg-emerald-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
          Get the latest articles on health, nutrition, and fitness delivered straight to your inbox
        </p>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
          />
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-r-lg font-semibold transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
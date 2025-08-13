import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blog';

const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-emerald-600 hover:text-emerald-700">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        to="/blog"
        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500">{post.date}</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">Share:</span>
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
            {post.excerpt}
          </div>
          
          <div 
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />
        </div>

        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
              <p className="text-gray-600 mb-4">
                Health and fitness expert with over 10 years of experience in nutrition and supplement research. 
                Passionate about helping people achieve their wellness goals through evidence-based advice.
              </p>
              <div className="flex space-x-3">
                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Link to={`/blog/${relatedPost.id}`}>
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                        {relatedPost.category}
                      </span>
                      <span className="text-sm text-gray-500">{relatedPost.date}</span>
                    </div>
                    <Link to={`/blog/${relatedPost.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-emerald-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedPost.readTime} min
                      </div>
                      <Link
                        to={`/blog/${relatedPost.id}`}
                        className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Newsletter CTA */}
      <div className="mt-16 bg-emerald-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Never Miss an Article</h2>
        <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest health and fitness insights
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

export default BlogPostPage;
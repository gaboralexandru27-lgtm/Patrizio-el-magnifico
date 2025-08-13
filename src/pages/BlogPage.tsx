@@ .. @@
     const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));

              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags && post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
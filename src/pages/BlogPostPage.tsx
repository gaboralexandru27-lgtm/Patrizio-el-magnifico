@@ .. @@
        
        <div 
          className="text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6}\s/g, '') }}
        />
      </div>

      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags && post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
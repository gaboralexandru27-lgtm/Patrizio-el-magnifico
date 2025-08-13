@@ .. @@
          <div className="mb-4">
            <img
              src={(product.images && product.images[selectedImage]) || product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {product.images && product.images.map((image, index) => (
              <button
              </div>
              <div className="space-y-2">
                {product.nutritionalFacts.ingredients && product.nutritionalFacts.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex justify-between border-b border-gray-200 pb-1">
                    <span>{ingredient.name}</span>
                    <div className="text-right">
@@ .. @@
           <div className="mb-4">
             <img
-              src={product.images[selectedImage] || product.image}
+              src={(product.images && product.images[selectedImage]) || product.image}
               alt={product.name}
               className="w-full h-96 object-cover rounded-lg shadow-lg"
             />
           </div>
           <div className="flex space-x-2 overflow-x-auto">
-            {product.images.map((image, index) => (
           )
           )
           }
+            {product.images && product.images.map((image, index) => (
               <button
)
)
}
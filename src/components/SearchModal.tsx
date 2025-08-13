@@ .. @@
   useEffect(() => {
     if (searchTerm.trim()) {
       const filtered = products.filter(product =>
         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
         product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
-        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
+        (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
       );
       setSearchResults(filtered.slice(0, 8));
     } else {
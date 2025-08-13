@@ .. @@
   const hasRestrictedProducts = items.some(item => 
     item.category === 'performance-enhancers' || 
-    item.tags.includes('restricted')
+    (item.tags && item.tags.includes('restricted'))
   );
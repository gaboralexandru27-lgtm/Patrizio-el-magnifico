@@ .. @@
     // Filter by goals
     if (selectedGoals.length > 0) {
       filtered = filtered.filter(product => 
         product.goals && product.goals.some(goal => selectedGoals.includes(goal))
       );
     }

@@ .. @@
   const brands = [...new Set(products.map(p => p.brand))];
   const goals = [...new Set(products.flatMap(p => p.goals || []))];
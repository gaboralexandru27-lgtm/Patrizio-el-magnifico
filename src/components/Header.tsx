@@ .. @@
 const Header: React.FC = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
-  const { cartItems } = useCart();
+  const { items } = useCart();
   const { user, logout } = useAuth();
   const navigate = useNavigate();
 
-  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
+  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);
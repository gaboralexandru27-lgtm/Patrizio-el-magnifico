import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, Truck, RotateCcw, Phone, Mail, MapPin, HelpCircle } from 'lucide-react';

const LegalPage: React.FC = () => {
  const { page } = useParams();

  const renderContent = () => {
    switch (page) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'disclaimers':
        return <Disclaimers />;
      case 'shipping':
        return <ShippingInfo />;
      case 'returns':
        return <ReturnsExchanges />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <ContactUs />;
      case 'track-order':
        return <TrackOrder />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      
      <div className="max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

const PrivacyPolicy: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
    
    <div className="prose max-w-none">
      <p className="text-gray-600 mb-6">
        <strong>Last updated:</strong> January 1, 2024
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
      <p className="text-gray-700 mb-6">
        We collect information you provide directly to us, such as when you create an account, 
        make a purchase, or contact us for support. This may include your name, email address, 
        phone number, shipping address, and payment information.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Process and fulfill your orders</li>
        <li>Communicate with you about your account and orders</li>
        <li>Send you marketing communications (with your consent)</li>
        <li>Improve our products and services</li>
        <li>Comply with legal obligations</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
      <p className="text-gray-700 mb-6">
        We do not sell, trade, or otherwise transfer your personal information to third parties 
        without your consent, except as described in this policy or as required by law.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
      <p className="text-gray-700 mb-6">
        We implement appropriate security measures to protect your personal information against 
        unauthorized access, alteration, disclosure, or destruction.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about this Privacy Policy, please contact us at 
        <a href="mailto:privacy@peaksupps.com" className="text-emerald-600 hover:text-emerald-700"> privacy@peaksupps.com</a>.
      </p>
    </div>
  </div>
);

const TermsOfService: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
    
    <div className="prose max-w-none">
      <p className="text-gray-600 mb-6">
        <strong>Last updated:</strong> January 1, 2024
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
      <p className="text-gray-700 mb-6">
        By accessing and using this website, you accept and agree to be bound by the terms 
        and provision of this agreement.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
      <p className="text-gray-700 mb-6">
        Permission is granted to temporarily download one copy of the materials on PeakSupps' 
        website for personal, non-commercial transitory viewing only.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Information</h2>
      <p className="text-gray-700 mb-6">
        We strive to provide accurate product information, but we do not warrant that product 
        descriptions or other content is accurate, complete, reliable, current, or error-free.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Age Restrictions</h2>
      <p className="text-gray-700 mb-6">
        Certain products may have age restrictions. By purchasing these products, you confirm 
        that you meet the minimum age requirements.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
      <p className="text-gray-700 mb-6">
        In no event shall PeakSupps or its suppliers be liable for any damages arising out of 
        the use or inability to use the materials on this website.
      </p>
    </div>
  </div>
);

const Disclaimers: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Health Disclaimers</h1>
    
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-orange-800 mb-4">Important Health Notice</h2>
      <p className="text-orange-700">
        The information and products on this website are not intended to diagnose, treat, cure, 
        or prevent any disease. Always consult with a healthcare professional before starting 
        any supplement regimen.
      </p>
    </div>
    
    <div className="prose max-w-none">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">FDA Statement</h2>
      <p className="text-gray-700 mb-6">
        These statements have not been evaluated by the Food and Drug Administration. 
        This product is not intended to diagnose, treat, cure, or prevent any disease.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supplement Safety</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Consult your physician before use if you are pregnant or nursing</li>
        <li>Do not exceed recommended dosage</li>
        <li>Keep out of reach of children</li>
        <li>Store in a cool, dry place</li>
        <li>Discontinue use if adverse reactions occur</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Age Verification</h2>
      <p className="text-gray-700 mb-6">
        Some products are restricted to individuals 18 years or older. By purchasing these 
        products, you confirm that you meet the age requirements and understand the associated risks.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Individual Results</h2>
      <p className="text-gray-700 mb-6">
        Results may vary from person to person. Individual results are not guaranteed and may 
        depend on various factors including diet, exercise, and individual health conditions.
      </p>
    </div>
  </div>
);

const ShippingInfo: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
      <Truck className="w-8 h-8 mr-3 text-emerald-600" />
      Shipping Information
    </h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-emerald-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-emerald-800 mb-3">Free Shipping</h3>
        <p className="text-emerald-700">
          Free standard shipping on all orders over $75 within the United States.
        </p>
      </div>
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">Fast Processing</h3>
        <p className="text-blue-700">
          Orders placed before 2 PM EST ship the same business day.
        </p>
      </div>
    </div>
    
    <div className="prose max-w-none">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-2 text-left">Shipping Method</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Delivery Time</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Standard Shipping</td>
              <td className="border border-gray-300 px-4 py-2">5-7 business days</td>
              <td className="border border-gray-300 px-4 py-2">$9.99 (Free over $75)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Express Shipping</td>
              <td className="border border-gray-300 px-4 py-2">2-3 business days</td>
              <td className="border border-gray-300 px-4 py-2">$19.99</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Overnight Shipping</td>
              <td className="border border-gray-300 px-4 py-2">1 business day</td>
              <td className="border border-gray-300 px-4 py-2">$39.99</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Shipping</h2>
      <p className="text-gray-700 mb-6">
        We currently ship to Canada and select international destinations. 
        International shipping rates and delivery times vary by location.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Tracking</h2>
      <p className="text-gray-700">
        Once your order ships, you'll receive a tracking number via email. 
        You can track your package on our website or the carrier's website.
      </p>
    </div>
  </div>
);

const ReturnsExchanges: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
      <RotateCcw className="w-8 h-8 mr-3 text-emerald-600" />
      Returns & Exchanges
    </h1>
    
    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-emerald-800 mb-4">30-Day Return Policy</h2>
      <p className="text-emerald-700">
        We offer a 30-day return policy on all unopened products. Your satisfaction is our priority.
      </p>
    </div>
    
    <div className="prose max-w-none">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Return Conditions</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Products must be unopened and in original packaging</li>
        <li>Returns must be initiated within 30 days of delivery</li>
        <li>Original receipt or order number required</li>
        <li>Customer is responsible for return shipping costs</li>
        <li>Refunds processed within 5-7 business days</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Return</h2>
      <ol className="list-decimal pl-6 text-gray-700 mb-6">
        <li>Contact our customer service team</li>
        <li>Receive return authorization and instructions</li>
        <li>Package items securely with original packaging</li>
        <li>Ship to our returns center using provided label</li>
        <li>Receive refund confirmation once processed</li>
      </ol>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exchanges</h2>
      <p className="text-gray-700 mb-6">
        We're happy to exchange products for different sizes or flavors. 
        Contact us to arrange an exchange - we'll cover shipping costs for our error.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Damaged or Defective Items</h2>
      <p className="text-gray-700">
        If you receive a damaged or defective product, contact us immediately. 
        We'll provide a prepaid return label and full refund or replacement.
      </p>
    </div>
  </div>
);

const FAQ: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
      <HelpCircle className="w-8 h-8 mr-3 text-emerald-600" />
      Frequently Asked Questions
    </h1>
    
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          How long does shipping take?
        </h3>
        <p className="text-gray-700">
          Standard shipping takes 5-7 business days. Express shipping (2-3 days) and 
          overnight shipping are also available for faster delivery.
        </p>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Are your products third-party tested?
        </h3>
        <p className="text-gray-700">
          Yes, all our products undergo rigorous third-party testing for purity, 
          potency, and safety to ensure the highest quality standards.
        </p>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Can I change or cancel my order?
        </h3>
        <p className="text-gray-700">
          Orders can be modified or cancelled within 1 hour of placement. 
          After that, orders enter our fulfillment process and cannot be changed.
        </p>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Do you offer subscriptions?
        </h3>
        <p className="text-gray-700">
          Yes, we offer subscription services with 15% savings and free shipping. 
          You can modify or cancel your subscription anytime.
        </p>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          What payment methods do you accept?
        </h3>
        <p className="text-gray-700">
          We accept all major credit cards (Visa, MasterCard, American Express, Discover), 
          PayPal, and Apple Pay for secure checkout.
        </p>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Are there age restrictions on products?
        </h3>
        <p className="text-gray-700">
          Some performance enhancer products are restricted to individuals 18 years or older. 
          Age verification is required during checkout for these items.
        </p>
      </div>
    </div>
  </div>
);

const ContactUs: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-emerald-600" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">1-800-PEAK-SUP (1-800-732-5787)</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-emerald-600" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">support@peaksupps.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-emerald-600" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-gray-600">123 Fitness Ave<br />Health City, HC 12345</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold mb-2">Business Hours</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Monday - Friday: 8:00 AM - 8:00 PM EST</p>
            <p>Saturday: 9:00 AM - 6:00 PM EST</p>
            <p>Sunday: 10:00 AM - 4:00 PM EST</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>General Inquiry</option>
              <option>Order Support</option>
              <option>Product Question</option>
              <option>Return/Exchange</option>
              <option>Technical Issue</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

const TrackOrder: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Track Your Order</h1>
    
    <div className="max-w-md mx-auto mb-8">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Order Number or Tracking Number
          </label>
          <input
            type="text"
            placeholder="Enter your order/tracking number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
          Track Order
        </button>
      </div>
    </div>
    
    <div className="text-center text-gray-600">
      <p className="mb-4">
        Need help? Contact our customer service team at{' '}
        <a href="tel:1-800-732-5787" className="text-emerald-600 hover:text-emerald-700">
          1-800-PEAK-SUP
        </a>
      </p>
      <p>
        You can also track your order by logging into your{' '}
        <Link to="/account" className="text-emerald-600 hover:text-emerald-700">
          account
        </Link>
      </p>
    </div>
  </div>
);

export default LegalPage;
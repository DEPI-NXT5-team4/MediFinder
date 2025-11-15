import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Package, CheckCircle, Clock, Truck, MapPin } from 'lucide-react';
import { useFav } from '../../context/useFav';

const OrderTracking = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const { user } = useFav();

  useEffect(() => {
    if (!user) return;

    // Simulate API call
    setTimeout(() => {
      // نجيب الأوردرز من localStorage أو من API
      const userOrders = JSON.parse(localStorage.getItem(`user_${user.id}_orders`)) || [];
      
      let foundOrder;
      
      if (orderId) {
        // لو في orderId في URL نبحث عنه
        foundOrder = userOrders.find(order => order.id === orderId);
      }
      
      // لو ملقناهوش أو مفيش orderId، نأخذ أول أوردر
      if (!foundOrder && userOrders.length > 0) {
        foundOrder = userOrders[0];
      }
      
      // لو ملقناش أي أوردر، نعمل mock data
      if (!foundOrder) {
        foundOrder = {
          id: orderId || "ORD-789123",
          status: "shipped",
          estimatedDelivery: "2024-01-20T18:00:00",
          customerName: user.fullName,
          customerEmail: user.email,
          customerPhone: user.phone,
          items: [
            { id: 1, name: "Panadol Extra", quantity: 2, price: 45.00, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { id: 2, name: "Vitamin C", quantity: 1, price: 75.00, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
          ],
          total: 165.00,
          shippingAddress: {
            name: user.fullName,
            street: "123 Main Street",
            city: "Cairo",
            phone: user.phone
          },
          tracking: [
            { status: "ordered", description: "Order placed", timestamp: "2024-01-15T10:30:00", completed: true },
            { status: "confirmed", description: "Order confirmed", timestamp: "2024-01-15T11:15:00", completed: true },
            { status: "prepared", description: "Items prepared", timestamp: "2024-01-16T09:45:00", completed: true },
            { status: "shipped", description: "Out for delivery", timestamp: "2024-01-17T14:20:00", completed: true },
            { status: "delivered", description: "Delivered", timestamp: null, completed: false }
          ]
        };
      }
      
      setOrder(foundOrder);
      setLoading(false);
    }, 1000);
  }, [user, orderId]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to track your orders.</p>
          <Link 
            to="/login" 
            className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors font-medium"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-600">Loading order details...</div>
          </div>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'ordered': return <Package className="w-5 h-5" />;
      case 'confirmed': return <CheckCircle className="w-5 h-5" />;
      case 'prepared': return <Package className="w-5 h-5" />;
      case 'shipped': return <Truck className="w-5 h-5" />;
      case 'delivered': return <CheckCircle className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Tracking</h1>
          <p className="text-gray-600">Track your order in real-time</p>
          <div className="mt-2 text-sm text-gray-500">
            Tracking order for: <span className="font-semibold">{user.fullName}</span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Order #{order.id}
              </h2>
              <p className="text-gray-600">
                Estimated delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                Customer: {order.customerName}
              </p>
            </div>
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="relative">
            {order.tracking.map((step, index) => (
              <div key={step.status} className="flex items-start gap-4 mb-8 last:mb-0">
                {/* Icon */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {getStatusIcon(step.status)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`font-semibold ${
                    step.completed ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.description}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {step.timestamp ? new Date(step.timestamp).toLocaleString() : 'Pending'}
                  </p>
                </div>

                {/* Connector Line */}
                {index < order.tracking.length - 1 && (
                  <div className={`absolute left-5 top-10 w-0.5 h-8 ${
                    step.completed ? 'bg-green-500' : 'bg-gray-200'
                  }`} style={{ marginLeft: '20px' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Items */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
            <div className="space-y-4">
              {order.items.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{item.price} EGP</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between items-center font-semibold text-gray-900">
                <span>Total</span>
                <span>{order.total} EGP</span>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Shipping Address
            </h3>
            <div className="space-y-2 text-gray-600">
              <p className="font-medium text-gray-900">{order.shippingAddress.name}</p>
              <p>{order.shippingAddress.street}</p>
              <p>{order.shippingAddress.city}</p>
              <p>{order.shippingAddress.phone}</p>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-600">
            <div>
              <p className="font-medium text-gray-900">Name</p>
              <p>{order.customerName}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p>{order.customerEmail}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p>{order.customerPhone}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Order ID</p>
              <p className="font-mono">{order.id}</p>
            </div>
          </div>
        </div>

        {/* Support CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Need help with your order?</p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
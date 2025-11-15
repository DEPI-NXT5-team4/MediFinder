import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Package, CheckCircle, Clock, Eye } from 'lucide-react';
import { useFav } from '../../context/useFav';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useFav();

  useEffect(() => {
    if (!user) return;

    // Simulate API call - في الواقع هتبقى API call حقيقية
    setTimeout(() => {
      // نجيب الأوردرز من localStorage أو من API
      const userOrders = JSON.parse(localStorage.getItem(`user_${user.id}_orders`)) || [
        {
          id: "ORD-789123",
          date: "2024-01-15",
          status: "delivered",
          items: 3,
          total: 245.00,
          customerName: user.fullName,
          customerEmail: user.email,
          tracking: [
            { status: "ordered", completed: true },
            { status: "confirmed", completed: true },
            { status: "prepared", completed: true },
            { status: "shipped", completed: true },
            { status: "delivered", completed: true }
          ]
        },
        {
          id: "ORD-456789",
          date: "2024-01-10",
          status: "shipped",
          items: 2,
          total: 165.00,
          customerName: user.fullName,
          customerEmail: user.email,
          tracking: [
            { status: "ordered", completed: true },
            { status: "confirmed", completed: true },
            { status: "prepared", completed: true },
            { status: "shipped", completed: true },
            { status: "delivered", completed: false }
          ]
        }
      ];
      
      setOrders(userOrders);
      setLoading(false);
    }, 1000);
  }, [user]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-700';
      case 'shipped': return 'bg-blue-100 text-blue-700';
      case 'prepared': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view your order history.</p>
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
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-600">Loading your order history...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order History</h1>
          <p className="text-gray-600">View your past orders and track current ones</p>
          <div className="mt-4 text-sm text-gray-500">
            Welcome back, <span className="font-semibold">{user.fullName}</span>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Order Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <Package className="w-8 h-8 text-gray-400" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Order #{order.id}
                      </h3>
                      <p className="text-gray-600">
                        {new Date(order.date).toLocaleDateString()} • {order.items} items
                      </p>
                      <p className="text-sm text-gray-500">
                        For: {order.customerName}
                      </p>
                    </div>
                  </div>

                  {/* Tracking Progress */}
                  <div className="flex items-center gap-2">
                    {order.tracking.map((step, index) => (
                      <React.Fragment key={step.status}>
                        <div className={`w-3 h-3 rounded-full ${
                          step.completed ? 'bg-green-500' : 'bg-gray-200'
                        }`}></div>
                        {index < order.tracking.length - 1 && (
                          <div className={`flex-1 h-0.5 ${
                            step.completed ? 'bg-green-500' : 'bg-gray-200'
                          }`}></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Order Details */}
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{order.total} EGP</p>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/OrderTracking?orderId=${order.id}`}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      Track
                    </Link>
                    <button className="text-gray-600 hover:text-gray-700 text-sm">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders yet</h3>
            <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
            <Link
              to="/explore"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
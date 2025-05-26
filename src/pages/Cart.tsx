
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Trash2 } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  offerPrice?: number;
  image: string;
  quantity: number;
}

interface CustomerDetails {
  name: string;
  email: string;
  mobile: string;
  whatsapp: string;
  city: string;
  address: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showOrderPreview, setShowOrderPreview] = useState(false);
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails | null>(null);
  
  const form = useForm<CustomerDetails>({
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      whatsapp: '',
      city: '',
      address: ''
    }
  });

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(items);
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }

    const updatedItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    
    // Update global cart count
    const totalCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
    if ((window as any).updateCartCount) {
      (window as any).updateCartCount = () => {};
      setTimeout(() => {
        if ((window as any).updateCartCount) {
          const currentCount = JSON.parse(localStorage.getItem('cartItems') || '[]')
            .reduce((sum: number, item: any) => sum + item.quantity, 0);
          (window as any).setCartCount?.(currentCount);
        }
      }, 100);
    }
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = item.offerPrice || item.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const onSubmit = (data: CustomerDetails) => {
    setCustomerDetails(data);
    setShowOrderPreview(true);
  };

  if (showOrderPreview && customerDetails) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Order Preview</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><strong>Name:</strong> {customerDetails.name}</div>
              <div><strong>Email:</strong> {customerDetails.email}</div>
              <div><strong>Mobile:</strong> +91 {customerDetails.mobile}</div>
              <div><strong>WhatsApp:</strong> +91 {customerDetails.whatsapp}</div>
              <div><strong>City:</strong> {customerDetails.city}</div>
              <div className="md:col-span-2"><strong>Address:</strong> {customerDetails.address}</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{((item.offerPrice || item.price) * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total: ₹{getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="bg-primary hover:bg-red-700 px-8 py-3 text-lg"
              onClick={() => {
                alert('Order confirmed! We will contact you soon.');
                localStorage.removeItem('cartItems');
                window.location.href = '/';
              }}
            >
              Confirm Order
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <Button onClick={() => window.location.href = '/'}>Continue Shopping</Button>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 py-4 border-b">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-primary font-semibold">
                      ₹{(item.offerPrice || item.price).toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0"
                    >
                      -
                    </Button>
                    <span className="font-semibold min-w-[2rem] text-center">{item.quantity}</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0"
                    >
                      +
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive" 
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 p-0 ml-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total: ₹{getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Customer Details Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobile"
                    rules={{ 
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid mobile number"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                              +91
                            </span>
                            <Input 
                              placeholder="Enter mobile number" 
                              className="rounded-l-none" 
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    rules={{ 
                      required: "WhatsApp number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid WhatsApp number"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp Number</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                              +91
                            </span>
                            <Input 
                              placeholder="Enter WhatsApp number" 
                              className="rounded-l-none" 
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    rules={{ required: "City is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your city" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    rules={{ required: "Address is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter your full address" 
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-red-700">
                    Proceed to Order Preview
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

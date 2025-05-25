
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Services</h1><p>Our comprehensive fireworks services page coming soon.</p></div>} />
            <Route path="/safety-tips" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Safety Tips</h1><p>Important safety guidelines for fireworks usage coming soon.</p></div>} />
            <Route path="/payment-info" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Payment Information</h1><p>Payment methods and policies coming soon.</p></div>} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:categorySlug" element={<Products />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

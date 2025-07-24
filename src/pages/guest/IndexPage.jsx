import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronRight, Users, TrendingUp, DollarSign, 
  Target, Zap, BarChart3, Shield, Rocket, Brain, Gift,
  Play, CheckCircle, Star, ArrowRight, Globe, Sparkles,
  Facebook, Twitter, Linkedin, Github, Mail, Crown,
  Coins, Award, Gamepad2, Smartphone, Monitor, Eye,
  MousePointer, Layers, Infinity, Coffee, Heart,
  Clock, Wallet, Trophy, ChevronDown, Plus, Minus,
  Calendar, Map, Headphones, Lock, AlertCircle,
  Download, Share, Bookmark, Filter, Search,
  Bell, Settings, Verified, Flame, Lightbulb,
  PieChart, Activity, Briefcase, Megaphone, Building,
  LineChart, BarChart, TrendingDown, Package, CreditCard,
  MessageCircle, HelpCircle, FileText, ExternalLink
} from 'lucide-react';

// Animated Money Icons
const FloatingMoney = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 animate-bounce delay-100">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">$</div>
      </div>
      <div className="absolute top-32 right-16 animate-bounce delay-300">
        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">€</div>
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce delay-500">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">£</div>
      </div>
      <div className="absolute bottom-20 right-24 animate-bounce delay-700">
        <Coins className="w-8 h-8 text-orange-500" />
      </div>
      <div className="absolute top-1/2 right-8 animate-pulse delay-200">
        <Gift className="w-6 h-6 text-purple-500" />
      </div>
      <div className="absolute top-1/3 left-16 animate-pulse delay-600">
        <Trophy className="w-7 h-7 text-yellow-600" />
      </div>
    </div>
  );
};

// Stats Counter Component
const StatsCounter = ({ end, suffix = "", duration = 2000, prefix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-2 h-2 text-white" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                OfferWall
              </span>
              <div className="text-xs text-gray-500 -mt-1">Earn Money Online</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#earn" className="text-gray-600 hover:text-green-600 transition-colors font-medium relative group">
              How to Earn
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#offers" className="text-gray-600 hover:text-green-600 transition-colors font-medium relative group">
              Available Offers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#payouts" className="text-gray-600 hover:text-green-600 transition-colors font-medium relative group">
              Payouts
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-green-600 transition-colors font-medium relative group">
              Success Stories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Login
            </button>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Earning $5 Bonus
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100 rounded-b-2xl">
            <div className="p-6 space-y-4">
              <a href="#earn" className="block text-gray-600 hover:text-green-600 transition-colors py-2">How to Earn</a>
              <a href="#offers" className="block text-gray-600 hover:text-green-600 transition-colors py-2">Available Offers</a>
              <a href="#payouts" className="block text-gray-600 hover:text-green-600 transition-colors py-2">Payouts</a>
              <a href="#reviews" className="block text-gray-600 hover:text-green-600 transition-colors py-2">Success Stories</a>
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="block w-full text-left text-gray-600 py-2">Login</button>
                <button className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold">
                  Start Earning $5 Bonus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-green-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                OfferWall
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              The most trusted platform to earn money online. Complete simple tasks and get paid instantly.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-blue-600" />
              </div>
              <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center hover:bg-sky-200 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-sky-600" />
              </div>
              <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5 text-pink-600" />
              </div>
            </div>
          </div>

          {/* Earn Money */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6 flex items-center">
              <Coins className="w-4 h-4 mr-2 text-green-500" />
              Earn Money
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Paid Surveys
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Play Games
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Watch Videos
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Cashback Shopping
              </a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6 flex items-center">
              <HelpCircle className="w-4 h-4 mr-2 text-blue-500" />
              Support
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Help Center
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Contact Us
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                FAQ
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Live Chat
              </a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6 flex items-center">
              <FileText className="w-4 h-4 mr-2 text-purple-500" />
              Legal
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Privacy Policy
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Terms of Service
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Cookie Policy
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Compliance
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">© 2024 OfferWall. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-green-50 rounded-lg px-3 py-1 border border-green-100">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-green-600 text-sm font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 rounded-lg px-3 py-1 border border-blue-100">
                <Verified className="w-4 h-4 text-blue-500" />
                <span className="text-blue-600 text-sm font-medium">Verified Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeEarningMethod, setActiveEarningMethod] = useState(0);
  const [liveEarnings, setLiveEarnings] = useState(47382);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "College Student",
      quote: "I've made over $850 this month just completing surveys during my free time! OfferWall changed my financial situation completely.",
      avatar: "👩‍🎓",
      earnings: "$2,847",
      timeFrame: "Last 3 months",
      location: "California, USA"
    },
    {
      name: "Ahmed Hassan", 
      role: "Part-time Worker",
      quote: "The gaming offers are amazing! I earned $120 just by playing my favorite mobile games. It's like getting paid to have fun!",
      avatar: "🎮",
      earnings: "$1,956",
      timeFrame: "Last 2 months",
      location: "Dubai, UAE"
    },
    {
      name: "Maria Rodriguez",
      role: "Stay-at-home Mom",
      quote: "Perfect for earning extra income during my baby's nap time. The cashback shopping feature alone saved me $300 this month!",
      avatar: "👩‍👧",
      earnings: "$3,294",
      timeFrame: "Last 4 months",
      location: "Madrid, Spain"
    }
  ];

  const earningMethods = [
    {
      title: "Complete Surveys",
      description: "Share your opinions and get paid $1-$15 per survey",
      icon: BarChart3,
      color: "blue",
      earnings: "$5-15 per survey",
      time: "5-20 minutes",
      difficulty: "Easy"
    },
    {
      title: "Play Mobile Games",
      description: "Download games, reach levels, earn rewards",
      icon: Gamepad2,
      color: "purple",
      earnings: "$10-50 per game",
      time: "1-7 days",
      difficulty: "Fun"
    },
    {
      title: "Watch Videos",
      description: "Watch ads and entertaining content passively",
      icon: Play,
      color: "pink",
      earnings: "$0.05-0.50 per video",
      time: "30 seconds-5 minutes",
      difficulty: "Very Easy"
    },
    {
      title: "Shop & Earn Cashback",
      description: "Get up to 25% cashback from 1000+ stores",
      icon: Coins,
      color: "green",
      earnings: "Up to 25% cashback",
      time: "Normal shopping",
      difficulty: "Automatic"
    }
  ];

  const paymentMethods = [
    { name: "PayPal", icon: "💳", min: "$1", time: "Instant" },
    { name: "Bitcoin", icon: "₿", min: "$5", time: "Within 1 hour" },
    { name: "Amazon Gift Card", icon: "🎁", min: "$1", time: "Instant" },
    { name: "Visa Gift Card", icon: "💳", min: "$5", time: "Within 24 hours" },
    { name: "Bank Transfer", icon: "🏦", min: "$10", time: "1-3 business days" },
    { name: "Google Play", icon: "📱", min: "$1", time: "Instant" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Simulate live earnings update
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveEarnings(prev => prev + Math.floor(Math.random() * 50) + 10);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <FloatingMoney />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 pt-16">
            {/* Live Earnings Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-6 py-3 rounded-full shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-700">LIVE:</span>
              </div>
              <div className="text-sm text-gray-700">
                $<StatsCounter end={liveEarnings} /> earned by users today
              </div>
              <Flame className="w-4 h-4 text-orange-500" />
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Earn Money Online
                <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  From Your Couch
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Complete simple tasks in your spare time and get paid instantly. Join over 
                <span className="font-bold text-green-600"> 3.2 million users</span> who've earned 
                <span className="font-bold text-green-600"> $12M+ in real money!</span>
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto py-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">$1</div>
                <div className="text-sm text-gray-600">Minimum Payout</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Instant</div>
                <div className="text-sm text-gray-600">Payments</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">3.2M+</div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">4.8/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Wallet className="w-5 h-5" />
                </div>
                <span>Start Earning $5 Bonus</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group flex items-center space-x-3 text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-2xl font-semibold hover:border-green-300 hover:text-green-600 hover:bg-green-50 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-green-600" />
                </div>
                <span>See How It Works</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Verified className="w-4 h-4 text-blue-500" />
                <span>Verified Platform</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-orange-500" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real People, Real 
              <span className="text-green-600"> Earnings</span>
            </h2>
            <p className="text-lg text-gray-600">Live statistics updated every second</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <StatsCounter end={3247892} />
              </div>
              <div className="text-gray-600 mb-2">Total Users</div>
              <div className="text-sm text-green-600 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <StatsCounter end={12847} /> online now
              </div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $<StatsCounter end={12847382} />
              </div>
              <div className="text-gray-600 mb-2">Total Paid Out</div>
              <div className="text-sm text-blue-600 flex items-center justify-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                $<StatsCounter end={47382} /> today
              </div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <StatsCounter end={98765} suffix="+" />
              </div>
              <div className="text-gray-600 mb-2">Available Offers</div>
              <div className="text-sm text-purple-600 flex items-center justify-center">
                <Sparkles className="w-3 h-3 mr-1" />
                <StatsCounter end={1247} /> completed today
              </div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.8/5</div>
              <div className="text-gray-600 mb-2">User Satisfaction</div>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Earn Section */}
      <section id="earn" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Multiple Ways to Earn</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Turn Your Free Time Into 
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Real Money</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from hundreds of earning opportunities that fit your schedule and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {earningMethods.map((method, index) => {
              const IconComponent = method.icon;
              const colorClasses = {
                blue: { bg: 'from-blue-500 to-indigo-500', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-400' },
                purple: { bg: 'from-purple-500 to-pink-500', text: 'text-purple-600', border: 'border-purple-200', hover: 'hover:border-purple-400' },
                pink: { bg: 'from-pink-500 to-rose-500', text: 'text-pink-600', border: 'border-pink-200', hover: 'hover:border-pink-400' },
                green: { bg: 'from-green-500 to-emerald-500', text: 'text-green-600', border: 'border-green-200', hover: 'hover:border-green-400' }
              };

              return (
                <div 
                  key={index}
                  className={`bg-white rounded-3xl p-8 shadow-lg border ${colorClasses[method.color].border} ${colorClasses[method.color].hover} transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer group`}
                  onMouseEnter={() => setActiveEarningMethod(index)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[method.color].bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{method.title}</h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">{method.description}</p>
                  
                  <div className="space-y-3">
                    <div className={`flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 ${colorClasses[method.color].text}`}>
                      <span className="text-sm font-medium">Earnings:</span>
                      <span className="text-sm font-bold">{method.earnings}</span>
                    </div>
                    <div className={`flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 ${colorClasses[method.color].text}`}>
                      <span className="text-sm font-medium">Time:</span>
                      <span className="text-sm font-bold">{method.time}</span>
                    </div>
                    <div className={`flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 ${colorClasses[method.color].text}`}>
                      <span className="text-sm font-medium">Difficulty:</span>
                      <span className="text-sm font-bold">{method.difficulty}</span>
                    </div>
                  </div>
                  
                  <button className={`w-full mt-6 bg-gradient-to-r ${colorClasses[method.color].bg} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                    Start Earning
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Simple 3-Step Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Start Earning in 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">3 Easy Steps</span>
            </h2>
            <p className="text-xl text-gray-600">
              It takes less than 2 minutes to start making money
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-200 via-pink-200 to-green-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="relative inline-block mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-all duration-300">
                    <span className="text-white text-3xl font-bold">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sign Up Free</h3>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">Enter Email</div>
                        <div className="text-sm text-gray-500">Quick & secure signup</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">Verify Account</div>
                        <div className="text-sm text-gray-500">One-click verification</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Gift className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">Get $5 Bonus</div>
                        <div className="text-sm text-gray-500">Welcome reward</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-purple-600 font-semibold text-sm">
                    ⚡ Takes only 30 seconds
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="relative inline-block mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-all duration-300">
                    <span className="text-white text-3xl font-bold">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse delay-100">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Tasks</h3>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 rounded-xl p-4 text-center hover:bg-blue-100 transition-colors cursor-pointer">
                      <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-blue-900">Surveys</div>
                      <div className="text-xs text-blue-600">$1-15</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 text-center hover:bg-purple-100 transition-colors cursor-pointer">
                      <Gamepad2 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-purple-900">Games</div>
                      <div className="text-xs text-purple-600">$10-50</div>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-4 text-center hover:bg-pink-100 transition-colors cursor-pointer">
                      <Play className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-pink-900">Videos</div>
                      <div className="text-xs text-pink-600">$0.05-0.50</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 text-center hover:bg-green-100 transition-colors cursor-pointer">
                      <Coins className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-green-900">Shopping</div>
                      <div className="text-xs text-green-600">25% back</div>
                    </div>
                  </div>
                  <div className="text-center text-blue-600 font-semibold text-sm">
                    🎯 1000+ offers available daily
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="relative inline-block mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-all duration-300">
                    <span className="text-white text-3xl font-bold">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center animate-pulse delay-200">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Paid Instantly</h3>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-3 hover:bg-green-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">P</span>
                        </div>
                        <span className="font-medium text-gray-900">PayPal</span>
                      </div>
                      <span className="text-green-600 font-semibold text-sm">$1 min</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-3 hover:bg-green-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">₿</span>
                        </div>
                        <span className="font-medium text-gray-900">Bitcoin</span>
                      </div>
                      <span className="text-green-600 font-semibold text-sm">$5 min</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-3 hover:bg-green-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Gift className="w-8 h-8 text-red-500" />
                        <span className="font-medium text-gray-900">Gift Cards</span>
                      </div>
                      <span className="text-green-600 font-semibold text-sm">$1 min</span>
                    </div>
                  </div>
                  <div className="text-center text-green-600 font-semibold text-sm">
                    💳 Instant withdrawals available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section id="payouts" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full mb-6">
              <CreditCard className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">Multiple Payment Options</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Paid Your 
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Preferred Way</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from multiple secure payment methods with low minimums and fast processing times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center text-2xl">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{method.name}</h3>
                    <p className="text-sm text-gray-500">Secure & Fast</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Minimum:</span>
                    <span className="font-semibold text-green-600">{method.min}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Processing:</span>
                    <span className="font-semibold text-gray-900">{method.time}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  Select Payment
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-6 bg-green-50 border border-green-200 rounded-2xl px-8 py-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-green-700 font-medium">256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-green-600" />
                <span className="text-green-700 font-medium">PCI DSS Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Verified className="w-5 h-5 text-green-600" />
                <span className="text-green-700 font-medium">Verified Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-600 fill-current" />
              <span className="text-sm font-medium text-yellow-700">Real Success Stories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our 
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Earners Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real people, real earnings, real stories of financial success</p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 text-center overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
              
              <div className="flex justify-center mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-8 h-8 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${star * 0.1}s`}} />
                ))}
              </div>
              
              <blockquote className="text-2xl lg:text-3xl text-gray-700 mb-8 italic leading-relaxed max-w-4xl mx-auto font-light">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-8">
                <div className="text-6xl animate-bounce">{testimonials[currentTestimonial].avatar}</div>
                <div className="text-left space-y-2">
                  <div className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                      Earned: {testimonials[currentTestimonial].earnings}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].timeFrame}
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm flex items-center">
                    <Globe className="w-3 h-3 mr-1" />
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full">
              <Flame className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-medium">Limited Time: Double Welcome Bonus</span>
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Ready to Start
                <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                  Making Money?
                </span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Join millions of users worldwide who are already earning real money in their spare time.
                <span className="block text-yellow-300 font-bold mt-4 text-2xl">
                  🎁 Get $10 Welcome Bonus (Limited Time!)
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <button className="group relative overflow-hidden bg-white text-green-600 px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-green-600" />
                </div>
                <span>Claim $10 Bonus Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <div className="text-center text-white/80">
                <div className="text-sm mb-1">⚡ Setup takes 30 seconds</div>
                <div className="text-sm">🔒 No credit card required</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🚀</div>
                <div className="font-bold text-white text-lg">Start Immediately</div>
                <div className="text-white/80 text-sm">Begin earning within minutes of signup</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">💰</div>
                <div className="font-bold text-white text-lg">Real Money</div>
                <div className="text-white/80 text-sm">Actual cash, not points or credits</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🌍</div>
                <div className="font-bold text-white text-lg">Global Platform</div>
                <div className="text-white/80 text-sm">Available in 180+ countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
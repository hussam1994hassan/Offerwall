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
  PieChart, Activity, Briefcase, Megaphone
} from 'lucide-react';

// Enhanced Canvas Background with geometric shapes
const GeometricBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const shapes = [];
    const shapeCount = 15;

    class GeometricShape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 50;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.1 + 0.05;
        this.type = Math.floor(Math.random() * 4); // 0: circle, 1: square, 2: triangle, 3: hexagon
        this.color = `hsl(${220 + Math.random() * 40}, 70%, 60%)`;
      }

      update() {
        this.rotation += this.rotationSpeed;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;

        switch(this.type) {
          case 0: // Circle
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.stroke();
            break;
          case 1: // Square
            ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
            break;
          case 2: // Triangle
            ctx.beginPath();
            ctx.moveTo(0, -this.size / 2);
            ctx.lineTo(-this.size / 2, this.size / 2);
            ctx.lineTo(this.size / 2, this.size / 2);
            ctx.closePath();
            ctx.stroke();
            break;
          case 3: // Hexagon
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (i * Math.PI) / 3;
              const x = Math.cos(angle) * (this.size / 2);
              const y = Math.sin(angle) * (this.size / 2);
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
            break;
        }
        ctx.restore();
      }
    }

    const init = () => {
      resizeCanvas();
      for (let i = 0; i < shapeCount; i++) {
        shapes.push(new GeometricShape());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

// Floating 2D Illustrations Component
const FloatingElements = () => {
  return (
    <>
      {/* Coins */}
      <div className="absolute top-20 left-10 animate-bounce duration-3000">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
          <DollarSign className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <div className="absolute top-32 right-16 animate-bounce duration-4000 delay-1000">
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
          <Coins className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute bottom-20 left-20 animate-pulse duration-2000">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 transform rotate-45 rounded-lg opacity-20"></div>
      </div>

      <div className="absolute top-40 right-32 animate-spin duration-20000">
        <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-30"></div>
      </div>

      {/* Stars */}
      <div className="absolute top-24 left-1/4 animate-pulse duration-1500">
        <Star className="w-6 h-6 text-yellow-400 fill-current opacity-40" />
      </div>

      <div className="absolute bottom-32 right-1/4 animate-pulse duration-2500 delay-500">
        <Sparkles className="w-8 h-8 text-indigo-400 opacity-30" />
      </div>

      {/* Trophy */}
      <div className="absolute top-16 right-10 animate-bounce duration-3500 delay-700">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-6">
          <Trophy className="w-5 h-5 text-white" />
        </div>
      </div>
    </>
  );
};

// Stats Counter Component
const StatsCounter = ({ end, suffix = "", duration = 2000 }) => {
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

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// Progress Ring Component
const ProgressRing = ({ progress, size = 80, strokeWidth = 8, color = "indigo" }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const colorClasses = {
    indigo: "stroke-indigo-500",
    green: "stroke-green-500",
    yellow: "stroke-yellow-500",
    purple: "stroke-purple-500"
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`${colorClasses[color]} transition-all duration-1000`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-gray-900">{progress}%</span>
      </div>
    </div>
  );
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-white/60 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                OfferWall
              </span>
              <div className="text-xs text-gray-500 -mt-1">Premium Rewards</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#offers" className="text-gray-600 hover:text-indigo-600 transition-all duration-300 relative group font-medium">
              Offers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#rewards" className="text-gray-600 hover:text-indigo-600 transition-all duration-300 relative group font-medium">
              Rewards
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-all duration-300 relative group font-medium">
              How it Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#leaderboard" className="text-gray-600 hover:text-indigo-600 transition-all duration-300 relative group font-medium">
              Leaderboard
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Enhanced CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium">
              Sign In
            </button>
            <button className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl rounded-b-2xl">
            <div className="p-6 space-y-4">
              <a href="#offers" className="block text-gray-600 hover:text-indigo-600 transition-colors py-2">Offers</a>
              <a href="#rewards" className="block text-gray-600 hover:text-indigo-600 transition-colors py-2">Rewards</a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-indigo-600 transition-colors py-2">How it Works</a>
              <a href="#leaderboard" className="block text-gray-600 hover:text-indigo-600 transition-colors py-2">Leaderboard</a>
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="block w-full text-left text-gray-600 py-2">Sign In</button>
                <button className="block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium">
                  Get Started
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
    <footer className="bg-gradient-to-br from-gray-50 to-indigo-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Enhanced Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                OfferWall
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              The premium rewards platform where your time creates real value. Join millions earning daily rewards.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-blue-600" />
              </div>
              <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center hover:bg-sky-200 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4 text-sky-600" />
              </div>
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center hover:bg-indigo-200 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Github className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6 flex items-center">
              <Layers className="w-4 h-4 mr-2 text-indigo-500" />
              Platform
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                How it Works
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Earn Points
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Redeem Rewards
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Mobile App
              </a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6 flex items-center">
              <Headphones className="w-4 h-4 mr-2 text-green-500" />
              Support
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Help Center
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Contact Us
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Community
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center">
                <ChevronRight className="w-3 h-3 mr-2" />
                Live Chat
              </a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6 flex items-center">
              <Briefcase className="w-4 h-4 mr-2 text-purple-500" />
              Resources
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
                Security
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">© 2024 OfferWall. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-1 shadow-sm border border-gray-100">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 text-sm">English</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </div>
              <div className="flex items-center space-x-2 bg-green-50 rounded-lg px-3 py-1 border border-green-100">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-green-600 text-sm font-medium">SSL Secured</span>
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
  const [faqOpen, setFaqOpen] = useState(null);
  const [liveStats, setLiveStats] = useState({
    usersOnline: 12847,
    todayEarnings: 47382,
    completedOffers: 8923
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "College Student",
      quote: "I've earned over $450 this month just by completing surveys and playing games during breaks. It's incredible!",
      avatar: "👩‍🎓",
      rating: 5,
      earnings: "$1,847",
      joinDate: "6 months ago"
    },
    {
      name: "Mike Chen", 
      role: "Part-time Worker",
      quote: "The platform is super user-friendly and payments are always instant. I love the variety of offers available!",
      avatar: "👨‍💻",
      rating: 5,
      earnings: "$2,156",
      joinDate: "1 year ago"
    },
    {
      name: "Emily Rodriguez",
      role: "Freelancer",
      quote: "Perfect side income source! The cashback shopping feature alone has saved me hundreds of dollars.",
      avatar: "👩‍💼",
      rating: 5,
      earnings: "$3,294",
      joinDate: "8 months ago"
    }
  ];

  const faqData = [
    {
      question: "How quickly can I start earning?",
      answer: "You can start earning immediately after signing up! Most users complete their first offer within minutes and see their first rewards within the same day."
    },
    {
      question: "What's the minimum payout amount?",
      answer: "Our minimum payout is just $1, making it one of the lowest in the industry. You can cash out via PayPal, gift cards, or cryptocurrency."
    },
    {
      question: "Are there any fees for withdrawals?",
      answer: "No! We don't charge any fees for withdrawals. You keep 100% of what you earn, and all transaction fees are covered by us."
    },
    {
      question: "How do I maximize my earnings?",
      answer: "Complete your daily check-ins, participate in bonus events, refer friends, and try different types of offers to maximize your earning potential."
    },
    {
      question: "Is my personal information safe?",
      answer: "Absolutely! We use bank-level encryption and never share your personal information with third parties without your consent."
    }
  ];

  const leaderboardData = [
    { rank: 1, name: "CryptoKing", earnings: "$2,847", avatar: "👑" },
    { rank: 2, name: "SurveyMaster", earnings: "$2,156", avatar: "🏆" },
    { rank: 3, name: "GameChamp", earnings: "$1,923", avatar: "🎮" },
    { rank: 4, name: "ShopSmart", earnings: "$1,687", avatar: "🛍️" },
    { rank: 5, name: "OfferHunter", earnings: "$1,452", avatar: "🎯" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Simulate live stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        usersOnline: prev.usersOnline + Math.floor(Math.random() * 10) - 5,
        todayEarnings: prev.todayEarnings + Math.floor(Math.random() * 100),
        completedOffers: prev.completedOffers + Math.floor(Math.random() * 5)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <GeometricBackground />
      <FloatingElements />
      <Header />

      {/* Enhanced Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 pt-16">
            {/* Live Stats Badge */}
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-6 py-3 rounded-full">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">Live:</span>
              </div>
              <div className="text-sm text-gray-600">
                <StatsCounter end={liveStats.usersOnline} /> users earning now
              </div>
            </div>

            {/* Enhanced Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Transform Your 
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  Spare Time
                </span>
                Into Real Money
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Complete simple tasks, play engaging games, and earn instant rewards. Join over 
                <span className="font-bold text-indigo-600"> 2.5 million users</span> who've earned 
                <span className="font-bold text-green-600"> $8M+ in rewards!</span>
              </p>
            </div>

            {/* Enhanced Trust Indicators with Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-900">100% Secure</span>
                <span className="text-xs text-gray-600">Bank-level security</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-900">Instant Payouts</span>
                <span className="text-xs text-gray-600">$1 minimum</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-900">2.5M+ Users</span>
                <span className="text-xs text-gray-600">Trusted globally</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-sm font-semibold text-gray-900">4.9/5 Rating</span>
                <span className="text-xs text-gray-600">50K+ reviews</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Rocket className="w-4 h-4" />
                </div>
                <span>Start Earning $5 Bonus</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group flex items-center space-x-3 text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-2xl font-semibold hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-indigo-600" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Enhanced Hero Visual Dashboard */}
            <div className="relative max-w-5xl mx-auto mt-16">
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 transform hover:scale-105 transition-all duration-500">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Earnings Dashboard</h3>
                      <p className="text-sm text-gray-500">Real-time overview</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-50 rounded-lg px-3 py-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-600">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Today's Earnings */}
                  <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">$47.32</div>
                    <div className="text-sm text-gray-600 mb-2">Today's Earnings</div>
                    <div className="text-xs text-green-600 flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +23% from yesterday
                    </div>
                  </div>
                  
                  {/* Points Balance */}
                  <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Coins className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">2,847</div>
                    <div className="text-sm text-gray-600 mb-2">Points Balance</div>
                    <div className="text-xs text-blue-600 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Ready to redeem
                    </div>
                  </div>
                  
                  {/* Streak Counter */}
                  <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Flame className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">12 Days</div>
                    <div className="text-sm text-gray-600 mb-2">Active Streak</div>
                    <div className="text-xs text-purple-600 flex items-center justify-center">
                      <Crown className="w-3 h-3 mr-1" />
                      Keep it up!
                    </div>
                  </div>
                  
                  {/* Level Progress */}
                  <div className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">Level 15</div>
                    <div className="text-sm text-gray-600 mb-2">Gold Member</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-400 to-yellow-500 h-2 rounded-full animate-pulse" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="mt-8 p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Weekly Performance</h4>
                    <div className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +15% this week
                    </div>
                  </div>
                  <div className="flex items-end justify-between h-16 space-x-1">
                    {[40, 65, 45, 80, 35, 95, 70].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-indigo-400 to-purple-500 rounded-t hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 cursor-pointer" style={{height: `${height}%`}}></div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Live Platform 
              <span className="text-indigo-600">Activity</span>
            </h2>
            <p className="text-gray-600">Real-time stats updating every few seconds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <StatsCounter end={2847362} suffix="" />
              </div>
              <div className="text-gray-600 mb-2">Total Users</div>
              <div className="text-sm text-green-600 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <StatsCounter end={liveStats.usersOnline} /> online now
              </div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $<StatsCounter end={8247382} suffix="" />
              </div>
              <div className="text-gray-600 mb-2">Total Paid Out</div>
              <div className="text-sm text-green-600 flex items-center justify-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                $<StatsCounter end={liveStats.todayEarnings} /> today
              </div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <StatsCounter end={94736} suffix="+" />
              </div>
              <div className="text-gray-600 mb-2">Available Offers</div>
              <div className="text-sm text-blue-600 flex items-center justify-center">
                <Sparkles className="w-3 h-3 mr-1" />
                <StatsCounter end={liveStats.completedOffers} /> completed today
              </div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600 mb-2">User Rating</div>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with More Visual Elements */}
      <section id="offers" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 px-4 py-2 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium text-indigo-600">Multiple Earning Methods</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Endless Ways to 
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Earn Money</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from various earning opportunities that perfectly match your lifestyle and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gaming Enhanced */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full transform translate-x-8 -translate-y-8 opacity-50"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Gaming</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Play fun mobile games and reach specific levels to earn rewards. From casual puzzles to strategy games.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-purple-600 bg-purple-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    $5-$50 per game completion
                  </div>
                  <div className="flex items-center text-sm text-purple-600 bg-purple-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Daily gaming challenges
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Difficulty: Easy</span>
                  <div className="flex">
                    <ProgressRing progress={85} size={40} strokeWidth={4} color="purple" />
                  </div>
                </div>
              </div>
            </div>

            {/* Surveys Enhanced */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full transform translate-x-8 -translate-y-8 opacity-50"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Paid Surveys</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Share your opinions on products, services, and brands. Get matched with surveys that fit your profile.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-blue-600 bg-blue-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    $1-$15 per survey
                  </div>
                  <div className="flex items-center text-sm text-blue-600 bg-blue-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Smart matching system
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Difficulty: Medium</span>
                  <ProgressRing progress={72} size={40} strokeWidth={4} color="indigo" />
                </div>
              </div>
            </div>

            {/* Shopping Enhanced */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full transform translate-x-8 -translate-y-8 opacity-50"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Coins className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cashback Shopping</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Shop at your favorite stores and earn cashback. Over 1000 popular retailers included.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-green-600 bg-green-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Up to 25% cashback
                  </div>
                  <div className="flex items-center text-sm text-green-600 bg-green-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    1000+ partner stores
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Difficulty: Easy</span>
                  <ProgressRing progress={95} size={40} strokeWidth={4} color="green" />
                </div>
              </div>
            </div>

            {/* App Downloads Enhanced */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full transform translate-x-8 -translate-y-8 opacity-50"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">App Testing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Download and try new apps for a few minutes. Quick and easy way to earn rewards.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-orange-600 bg-orange-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    $0.50-$8 per app
                  </div>
                  <div className="flex items-center text-sm text-orange-600 bg-orange-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Instant tracking
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Difficulty: Easy</span>
                  <ProgressRing progress={90} size={40} strokeWidth={4} color="yellow" />
                </div>
              </div>
            </div>

            {/* Video Watching Enhanced */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-pink-200 transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full transform translate-x-8 -translate-y-8 opacity-50"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Watch & Earn</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Watch entertaining videos, ads, and content. Perfect for passive earning while relaxing.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-pink-600 bg-pink-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    $0.02-$0.50 per video
                  </div>
                  <div className="flex items-center text-sm text-pink-600 bg-pink-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Auto-play available
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Difficulty: Very Easy</span>
                  <ProgressRing progress={100} size={40} strokeWidth={4} color="purple" />
                </div>
              </div>
            </div>

            {/* Referrals Enhanced */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-yellow-200 transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full transform translate-x-8 -translate-y-8 opacity-50"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Refer Friends</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Invite your friends and earn a percentage of their lifetime earnings. Build passive income.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-yellow-600 bg-yellow-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    15% lifetime commission
                  </div>
                  <div className="flex items-center text-sm text-yellow-600 bg-yellow-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    $3 signup bonus
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Difficulty: Easy</span>
                  <ProgressRing progress={88} size={40} strokeWidth={4} color="yellow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-700">Top Earners This Month</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Top Performer 
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Leaderboard</span>
            </h2>
            <p className="text-xl text-gray-600">
              See how you stack up against our top earners
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Monthly Champions</h3>
                <p className="text-yellow-100">Updated in real-time</p>
              </div>
              
              <div className="p-6 space-y-4">
                {leaderboardData.map((user, index) => (
                  <div key={user.rank} className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    index === 0 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200' :
                    index === 1 ? 'bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200' :
                    index === 2 ? 'bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200' :
                    'bg-gray-50 border border-gray-100'
                  }`}>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                      index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
                      index === 2 ? 'bg-gradient-to-br from-orange-400 to-red-500' :
                      'bg-gradient-to-br from-indigo-400 to-purple-500'
                    }`}>
                      {index < 3 ? (
                        index === 0 ? <Crown className="w-6 h-6" /> :
                        index === 1 ? <Award className="w-6 h-6" /> :
                        <Trophy className="w-6 h-6" />
                      ) : user.rank}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{user.avatar}</span>
                        <span className="font-semibold text-gray-900">{user.name}</span>
                        {index === 0 && <Verified className="w-4 h-4 text-blue-500" />}
                      </div>
                      <div className="text-sm text-gray-500">Rank #{user.rank}</div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{user.earnings}</div>
                      <div className="text-xs text-gray-500">This month</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                  Join the Competition
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Enhanced Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Simple Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It 
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Works</span>
            </h2>
            <p className="text-xl text-gray-600">
              Start earning in just three simple steps - it takes less than 2 minutes!
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-green-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Step 1 Enhanced */}
              <div className="text-center relative">
                <div className="relative inline-block mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform hover:scale-110 transition-all duration-300">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h3>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-gray-600">Enter your email</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Lock className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-gray-600">Create password</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-600">Verify account</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-indigo-600 font-medium">
                    ⚡ Takes only 30 seconds
                  </div>
                </div>
              </div>

              {/* Step 2 Enhanced */}
              <div className="text-center relative">
                <div className="relative inline-block mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform hover:scale-110 transition-all duration-300">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse delay-100"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose & Complete</h3>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <Gamepad2 className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                      <span className="text-xs text-purple-600">Games</span>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <BarChart3 className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <span className="text-xs text-blue-600">Surveys</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <Coins className="w-6 h-6 text-green-600 mx-auto mb-1" />
                      <span className="text-xs text-green-600">Shopping</span>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3 text-center">
                      <Smartphone className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                      <span className="text-xs text-orange-600">Apps</span>
                    </div>
                  </div>
                  <div className="text-sm text-purple-600 font-medium">
                    🎯 1000+ offers available
                  </div>
                </div>
              </div>

              {/* Step 3 Enhanced */}
              <div className="text-center relative">
                <div className="relative inline-block mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform hover:scale-110 transition-all duration-300">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full animate-pulse delay-200"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Paid Instantly</h3>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">P</span>
                        </div>
                        <span className="text-sm font-medium">PayPal</span>
                      </div>
                      <span className="text-green-600 text-sm">$1 min</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Gift className="w-6 h-6 text-red-500" />
                        <span className="text-sm font-medium">Gift Cards</span>
                      </div>
                      <span className="text-green-600 text-sm">$1 min</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-green-600 font-medium">
                    💳 Instant withdrawals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-600 fill-current" />
              <span className="text-sm font-medium text-yellow-700">Real Success Stories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our 
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Success Stories</span> Say
            </h2>
            <p className="text-xl text-gray-600">Real reviews from real earners who transformed their free time into income</p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 text-center overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
              
              <div className="flex justify-center mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="relative">
                    <Star className="w-8 h-8 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${star * 0.1}s`}} />
                    {star <= testimonials[currentTestimonial].rating && (
                      <div className="absolute inset-0">
                        <Star className="w-8 h-8 text-yellow-500 fill-current" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <blockquote className="text-2xl lg:text-3xl text-gray-700 mb-8 italic leading-relaxed max-w-4xl mx-auto font-light">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="text-6xl animate-bounce">{testimonials[currentTestimonial].avatar}</div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600 mb-1">{testimonials[currentTestimonial].role}</div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Total Earned: {testimonials[currentTestimonial].earnings}
                    </div>
                    <div className="text-gray-500 text-sm">
                      Member for {testimonials[currentTestimonial].joinDate}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-5000" style={{width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`}}></div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-6">
              <AlertCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Got 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to the most common questions about our platform
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center transition-all duration-300 ${faqOpen === index ? 'rotate-180 bg-indigo-500' : ''}`}>
                    {faqOpen === index ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-indigo-600" />
                    )}
                  </div>
                </button>
                {faqOpen === index && (
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-medium">Limited Time: $10 Welcome Bonus</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Ready to Start Your
                <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                  Earning Journey?
                </span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Join over 2.5 million users worldwide and transform your spare time into real income.
                <span className="block text-yellow-300 font-bold mt-4 text-2xl">
                  🎁 Get $10 instantly when you sign up today!
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <button className="group relative overflow-hidden bg-white text-indigo-600 px-12 py-5 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-indigo-600" />
                </div>
                <span>Claim $10 Bonus Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group flex items-center space-x-3 text-white border-2 border-white/30 px-8 py-5 rounded-2xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                <Play className="w-6 h-6" />
                <span>Watch Success Stories</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">⚡</div>
                <div className="font-bold text-white text-lg">Instant Setup</div>
                <div className="text-white/80 text-sm">Start earning in under 60 seconds</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">💎</div>
                <div className="font-bold text-white text-lg">Premium Platform</div>
                <div className="text-white/80 text-sm">Industry-leading rewards & features</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🔐</div>
                <div className="font-bold text-white text-lg">100% Secure</div>
                <div className="text-white/80 text-sm">Bank-level security & encryption</div>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="inline-flex items-center space-x-3 bg-green-500/20 border border-green-400/30 px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 text-green-300" />
              <span className="text-green-100 font-medium">30-Day Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
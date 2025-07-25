import React, { useState, useRef, useEffect } from 'react';
import { 
  Eye, EyeOff, Mail, Lock, ArrowRight, Gift, 
  Star, Sparkles, CheckCircle, AlertCircle,
  Facebook, Twitter, Github, 
  Shield, Zap, Crown, Heart, DollarSign, Globe
} from 'lucide-react';

// Enhanced Canvas Background with geometric shapes (reused from main page)
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
    const shapeCount = 12;

    class GeometricShape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 80 + 40;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.08 + 0.03;
        this.type = Math.floor(Math.random() * 4);
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
          case 0:
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.stroke();
            break;
          case 1:
            ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
            break;
          case 2:
            ctx.beginPath();
            ctx.moveTo(0, -this.size / 2);
            ctx.lineTo(-this.size / 2, this.size / 2);
            ctx.lineTo(this.size / 2, this.size / 2);
            ctx.closePath();
            ctx.stroke();
            break;
          case 3:
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

// Floating Elements Component
const FloatingElements = () => {
  return (
    <>
      <div className="absolute top-20 left-10 animate-bounce duration-3000">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
          <DollarSign className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <div className="absolute top-32 right-16 animate-bounce duration-4000 delay-1000">
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
          <Crown className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="absolute bottom-20 left-20 animate-pulse duration-2000">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 transform rotate-45 rounded-lg opacity-20"></div>
      </div>

      <div className="absolute top-40 right-32 animate-spin duration-20000">
        <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-30"></div>
      </div>

      <div className="absolute top-24 left-1/4 animate-pulse duration-1500">
        <Star className="w-6 h-6 text-yellow-400 fill-current opacity-40" />
      </div>

      <div className="absolute bottom-32 right-1/4 animate-pulse duration-2500 delay-500">
        <Sparkles className="w-8 h-8 text-indigo-400 opacity-30" />
      </div>
    </>
  );
};

// Login Page Component
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    
    // Basic validation
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful login here
      console.log('Login successful', { email, password, rememberMe });
    }, 2000);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center p-4">
      <GeometricBackground />
      <FloatingElements />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Sign in to continue earning rewards
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8">
          {/* Success Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
              <div className="text-2xl font-bold text-green-600">$8M+</div>
              <div className="text-xs text-gray-600">Total Paid</div>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
              <div className="text-2xl font-bold text-blue-600">2.5M+</div>
              <div className="text-xs text-gray-600">Active Users</div>
            </div>
          </div>

          <div onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 border rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 ${
                    errors.email ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <div className="flex items-center mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-12 pr-12 py-4 border rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 ${
                    errors.password ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.password}
                </div>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-8">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                  rememberMe 
                    ? 'bg-indigo-500 border-indigo-500' 
                    : 'border-gray-300 hover:border-indigo-300'
                }`}>
                  {rememberMe && <CheckCircle className="w-3 h-3 text-white" />}
                </div>
                <span className="ml-3 text-sm text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none group"
            >
              <div className="flex items-center justify-center space-x-3">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    <span>Sign In to Dashboard</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center space-x-3 border border-gray-200 py-3 px-4 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-5 h-5 text-red-500" />
                <span className="text-gray-600 font-medium">Google</span>
              </button>
              
              <button
                type="button"
                onClick={() => handleSocialLogin('Facebook')}
                className="flex items-center justify-center space-x-3 border border-gray-200 py-3 px-4 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105"
              >
                <Facebook className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600 font-medium">Facebook</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Shield className="w-4 h-4 text-green-500" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Trusted by 2.5M+</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <button
                type="button"
                className="text-indigo-600 hover:text-indigo-500 font-semibold transition-colors"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700 font-medium">
              Join 2.5M+ users earning daily rewards
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
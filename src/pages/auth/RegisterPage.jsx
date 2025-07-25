import React, { useState, useRef, useEffect } from "react";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    ArrowRight,
    Gift,
    Star,
    Sparkles,
    CheckCircle,
    AlertCircle,
    User,
    Facebook,
    Twitter,
    Github,
    Globe,
    Shield,
    Zap,
    Crown,
    Heart,
    DollarSign,
    Coins,
    Target,
    Trophy,
    Rocket,
    Calendar,
    Phone,
} from "lucide-react";
import { Link } from "react-router";
import PagesURL from "../../constants/PagesURL";

// Enhanced Canvas Background with geometric shapes (reused from main page)
const GeometricBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
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

                switch (this.type) {
                    case 0:
                        ctx.beginPath();
                        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                        ctx.stroke();
                        break;
                    case 1:
                        ctx.strokeRect(
                            -this.size / 2,
                            -this.size / 2,
                            this.size,
                            this.size
                        );
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

            shapes.forEach((shape) => {
                shape.update();
                shape.draw();
            });

            animationId = requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
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

            <div className="absolute top-16 right-10 animate-bounce duration-3500 delay-700">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-6">
                    <Trophy className="w-5 h-5 text-white" />
                </div>
            </div>
        </>
    );
};

// Sign Up Page Component
const SignUpPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        dateOfBirth: "",
        phone: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [agreeToMarketing, setAgreeToMarketing] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [currentStep, setCurrentStep] = useState(1);

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: null }));
        }
    };

    const validateStep1 = () => {
        const newErrors = {};
        if (!formData.firstName.trim())
            newErrors.firstName = "First name is required";
        if (!formData.lastName.trim())
            newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Email is invalid";

        return newErrors;
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (!formData.password) newErrors.password = "Password is required";
        if (formData.password && formData.password.length < 8)
            newErrors.password = "Password must be at least 8 characters";
        if (!formData.confirmPassword)
            newErrors.confirmPassword = "Please confirm your password";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        if (!formData.dateOfBirth)
            newErrors.dateOfBirth = "Date of birth is required";
        if (!agreeToTerms)
            newErrors.terms = "You must agree to the terms and conditions";

        return newErrors;
    };

    const handleNextStep = () => {
        const stepErrors =
            currentStep === 1 ? validateStep1() : validateStep2();

        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }

        setErrors({});
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        setIsLoading(true);

        // Simulate sign up process
        setTimeout(() => {
            setIsLoading(false);
            // Handle successful signup here
            console.log("Signup successful", formData);
        }, 2000);
    };

    const handleSocialSignUp = (provider) => {
        console.log(`Sign up with ${provider}`);
    };

    const renderStep1 = () => (
        <>
            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) =>
                                handleInputChange("firstName", e.target.value)
                            }
                            className={`w-full pl-12 pr-4 py-4 border rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 ${
                                errors.firstName
                                    ? "border-red-300 bg-red-50/50"
                                    : "border-gray-200 hover:border-gray-300"
                            }`}
                            placeholder="First name"
                        />
                    </div>
                    {errors.firstName && (
                        <div className="flex items-center mt-2 text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.firstName}
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) =>
                                handleInputChange("lastName", e.target.value)
                            }
                            className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 ${
                                errors.lastName
                                    ? "border-red-300 bg-red-50/50"
                                    : "border-gray-200 hover:border-gray-300"
                            }`}
                            placeholder="Last name"
                        />
                    </div>
                    {errors.lastName && (
                        <div className="flex items-center mt-2 text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.lastName}
                        </div>
                    )}
                </div>
            </div>

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
                        value={formData.email}
                        onChange={(e) =>
                            handleInputChange("email", e.target.value)
                        }
                        className={`w-full pl-12 pr-4 py-4 border rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 ${
                            errors.email
                                ? "border-red-300 bg-red-50/50"
                                : "border-gray-200 hover:border-gray-300"
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

            {/* Phone Field (Optional) */}
            <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number{" "}
                    <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                        }
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:border-gray-300"
                        placeholder="Enter your phone number"
                    />
                </div>
            </div>
        </>
    );

    const renderStep2 = () => (
        <>
            {/* Password Fields */}
            <div className="grid grid-cols-1 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={(e) =>
                                handleInputChange("password", e.target.value)
                            }
                            className={`w-full pl-12 pr-12 py-4 border rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 ${
                                errors.password
                                    ? "border-red-300 bg-red-50/50"
                                    : "border-gray-200 hover:border-gray-300"
                            }`}
                            placeholder="Create a strong password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <div className="flex items-center mt-2 text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.password}
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={(e) =>
                                handleInputChange(
                                    "confirmPassword",
                                    e.target.value
                                )
                            }
                            className={`w-full pl-12 pr-12 py-4 border rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 ${
                                errors.confirmPassword
                                    ? "border-red-300 bg-red-50/50"
                                    : "border-gray-200 hover:border-gray-300"
                            }`}
                            placeholder="Confirm your password"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {showConfirmPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <div className="flex items-center mt-2 text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.confirmPassword}
                        </div>
                    )}
                </div>
            </div>

            {/* Date of Birth */}
            <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                            handleInputChange("dateOfBirth", e.target.value)
                        }
                        className={`w-full pl-12 pr-4 py-4 border rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 ${
                            errors.dateOfBirth
                                ? "border-red-300 bg-red-50/50"
                                : "border-gray-200 hover:border-gray-300"
                        }`}
                    />
                </div>
                {errors.dateOfBirth && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.dateOfBirth}
                    </div>
                )}
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4 mb-8">
                <label className="flex items-start cursor-pointer">
                    <input
                        type="checkbox"
                        checked={agreeToTerms}
                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                        className="sr-only"
                    />
                    <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 transition-all duration-300 ${
                            agreeToTerms
                                ? "bg-indigo-500 border-indigo-500"
                                : "border-gray-300 hover:border-indigo-300"
                        }`}
                    >
                        {agreeToTerms && (
                            <CheckCircle className="w-3 h-3 text-white" />
                        )}
                    </div>
                    <div className="ml-3 text-sm text-gray-600 leading-relaxed">
                        I agree to the{" "}
                        <button
                            type="button"
                            className="text-indigo-600 hover:text-indigo-500 font-medium"
                        >
                            Terms of Service
                        </button>{" "}
                        and{" "}
                        <button
                            type="button"
                            className="text-indigo-600 hover:text-indigo-500 font-medium"
                        >
                            Privacy Policy
                        </button>
                    </div>
                </label>
                {errors.terms && (
                    <div className="flex items-center text-red-600 text-sm ml-8">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.terms}
                    </div>
                )}

                <label className="flex items-start cursor-pointer">
                    <input
                        type="checkbox"
                        checked={agreeToMarketing}
                        onChange={(e) => setAgreeToMarketing(e.target.checked)}
                        className="sr-only"
                    />
                    <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 transition-all duration-300 ${
                            agreeToMarketing
                                ? "bg-green-500 border-green-500"
                                : "border-gray-300 hover:border-green-300"
                        }`}
                    >
                        {agreeToMarketing && (
                            <CheckCircle className="w-3 h-3 text-white" />
                        )}
                    </div>
                    <div className="ml-3 text-sm text-gray-600 leading-relaxed">
                        I'd like to receive promotional emails about new offers
                        and bonuses{" "}
                        <span className="text-gray-400">
                            (Recommended for max earnings)
                        </span>
                    </div>
                </label>
            </div>
        </>
    );

    return (
        <div className="bg-transparent h-auto w-auto min-w-xl relative flex items-center justify-center p-4">
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
                        Join OfferWall
                    </h1>
                    <p className="text-gray-600">
                        Start earning rewards in minutes
                    </p>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center space-x-4">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                currentStep >= 1
                                    ? "bg-indigo-500 text-white"
                                    : "bg-gray-200 text-gray-400"
                            }`}
                        >
                            1
                        </div>
                        <div
                            className={`w-8 h-1 rounded-full transition-all duration-300 ${
                                currentStep >= 2
                                    ? "bg-indigo-500"
                                    : "bg-gray-200"
                            }`}
                        ></div>
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                currentStep >= 2
                                    ? "bg-indigo-500 text-white"
                                    : "bg-gray-200 text-gray-400"
                            }`}
                        >
                            2
                        </div>
                    </div>
                </div>

                {/* Sign Up Form */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8">
                    {/* Bonus Banner */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-8 text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <Gift className="w-5 h-5 text-green-600" />
                            <span className="text-green-700 font-bold">
                                $10 Welcome Bonus
                            </span>
                        </div>
                        <p className="text-green-600 text-sm">
                            Sign up today and get $10 credited to your account!
                        </p>
                    </div>

                    <div>
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {currentStep === 1
                                    ? "Personal Information"
                                    : "Account Security"}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {currentStep === 1
                                    ? "Tell us a bit about yourself to get started"
                                    : "Create a secure password and agree to our terms"}
                            </p>
                        </div>

                        {currentStep === 1 ? renderStep1() : renderStep2()}

                        {/* Navigation Buttons */}
                        <div className="flex space-x-4 mb-5">
                            {currentStep > 1 && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        setCurrentStep(currentStep - 1)
                                    }
                                    className="flex-1 border border-gray-200 text-gray-600 cursor-pointer py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300"
                                >
                                    Back
                                </button>
                            )}

                            <button
                                type="button"
                                onClick={handleNextStep}
                                disabled={isLoading}
                                className="flex-1 relative overflow-hidden bg-gradient-to-r hover:bg-gradient-to-l cursor-pointer from-indigo-500 to-purple-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                <div className="flex items-center justify-center space-x-3 px-2 box-border">
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            <span>Creating Account...</span>
                                        </>
                                    ) : (
                                        <>
                                            {currentStep === 1 ? (
                                                <Target className="w-5 h-5" />
                                            ) : (
                                                <Rocket className="w-5 h-5" />
                                            )}
                                            <span className="text-sm">
                                                {currentStep === 1
                                                    ? "Continue"
                                                    : "Create Account"}
                                            </span>
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </div>
                            </button>
                        </div>

                        {/* Social Sign Up - Only show on step 1 */}
                        {currentStep === 1 && (
                            <>
                                <div className="relative my-8">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-white text-gray-500">
                                            Or sign up with
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSocialSignUp("Google")
                                        }
                                        className="flex items-center justify-center space-x-3 border border-gray-200 py-3 px-4 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105"
                                    >
                                        <Globe className="w-5 h-5 text-red-500" />
                                        <span className="text-gray-600 font-medium">
                                            Google
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSocialSignUp("Facebook")
                                        }
                                        className="flex items-center justify-center space-x-3 border border-gray-200 py-3 px-4 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105"
                                    >
                                        <Facebook className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-600 font-medium">
                                            Facebook
                                        </span>
                                    </button>
                                </div>
                            </>
                        )}

                        {/* Trust Indicators */}
                        <div className="flex items-center justify-center space-x-6 mb-6">
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <Shield className="w-4 h-4 text-green-500" />
                                <span>256-bit SSL</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <Heart className="w-4 h-4 text-red-500" />
                                <span>2.5M+ Members</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <Coins className="w-4 h-4 text-yellow-500" />
                                <span>$8M+ Paid</span>
                            </div>
                        </div>

                        {/* Sign In Link */}
                        <div className="text-center">
                            <span className="text-gray-600">
                                Already have an account?{" "}
                            </span>
                            <Link
                                to={PagesURL.LOGIN.URL}
                                className="text-indigo-600 hover:text-indigo-500 font-semibold transition-colors"
                            >
                                Sign in here
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Badge */}
                <div className="text-center mt-8">
                    <div className="inline-flex items-center space-x-2 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full">
                        <Trophy className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm text-yellow-700 font-medium">
                            🎁 Get $10 bonus instantly upon signup!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;

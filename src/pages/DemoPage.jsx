import React, { useState, useRef, useEffect } from "react";
import {
    Search,
    Filter,
    SlidersHorizontal,
    Star,
    Clock,
    Users,
    TrendingUp,
    DollarSign,
    Target,
    Zap,
    Gift,
    Crown,
    Coins,
    Trophy,
    CheckCircle,
    ArrowRight,
    Gamepad2,
    BarChart3,
    Smartphone,
    Play,
    ShoppingBag,
    Eye,
    MousePointer,
    Heart,
    Download,
    Calendar,
    AlertCircle,
    Flame,
    Sparkles,
    Award,
    Menu,
    X,
    ChevronDown,
    Plus,
    Minus,
    Bookmark,
    Share,
    Bell,
    Settings,
    ChevronRight,
    Layers,
    Headphones,
} from "lucide-react";
import LogoApp from "../components/LogoApp";

// Enhanced Canvas Background
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
        const shapeCount = 10;

        class GeometricShape {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 60 + 30;
                this.rotation = 0;
                this.rotationSpeed = (Math.random() - 0.5) * 0.015;
                this.opacity = Math.random() * 0.05 + 0.02;
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

// Header Component
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="z-50 bg-white fixed top-0 left-0 w-full h-auto border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <LogoApp />
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

// Offers Page Component
const DemoPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("featured");
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [difficulty, setDifficulty] = useState("all");
    const [minPayout, setMinPayout] = useState("");

    // Sample offers data
    const offers = [
        {
            id: 1,
            title: "RAID: Shadow Legends",
            description:
                "Play this epic RPG and reach level 25 to earn rewards",
            category: "gaming",
            type: "Mobile Game",
            payout: "$25.00",
            points: 2500,
            difficulty: "medium",
            timeRequired: "3-5 days",
            rating: 4.8,
            completions: 12847,
            featured: true,
            urgent: false,
            icon: "🎮",
            requirements: [
                "Download game",
                "Reach level 25",
                "Play for 7 days",
            ],
            steps: 3,
        },
        {
            id: 2,
            title: "Consumer Opinion Survey",
            description: "Share your thoughts on shopping habits - 15 minutes",
            category: "surveys",
            type: "Market Research",
            payout: "$3.50",
            points: 350,
            difficulty: "easy",
            timeRequired: "15 mins",
            rating: 4.6,
            completions: 8934,
            featured: true,
            urgent: true,
            icon: "📊",
            requirements: ["Age 18+", "Complete survey", "Provide valid info"],
            steps: 1,
        },
        {
            id: 3,
            title: "Amazon Shopping Cashback",
            description: "Shop on Amazon through our link and get 5% cashback",
            category: "shopping",
            type: "Cashback",
            payout: "Up to $50",
            points: 500,
            difficulty: "easy",
            timeRequired: "Instant",
            rating: 4.9,
            completions: 25678,
            featured: false,
            urgent: false,
            icon: "🛍️",
            requirements: ["Make purchase", "Use our link", "Order $20+"],
            steps: 2,
        },
        {
            id: 4,
            title: "Spotify Premium Trial",
            description: "Sign up for Spotify Premium 30-day free trial",
            category: "apps",
            type: "App Trial",
            payout: "$8.00",
            points: 800,
            difficulty: "easy",
            timeRequired: "5 mins",
            rating: 4.7,
            completions: 15432,
            featured: false,
            urgent: true,
            icon: "🎵",
            requirements: ["Sign up", "Verify email", "Keep active 7 days"],
            steps: 2,
        },
        {
            id: 5,
            title: "Watch Product Videos",
            description: "Watch 10 short product demo videos",
            category: "videos",
            type: "Video Watching",
            payout: "$1.20",
            points: 120,
            difficulty: "easy",
            timeRequired: "20 mins",
            rating: 4.4,
            completions: 6789,
            featured: false,
            urgent: false,
            icon: "📹",
            requirements: [
                "Watch full videos",
                "No skipping",
                "Rate each video",
            ],
            steps: 1,
        },
        {
            id: 6,
            title: "King of Avalon",
            description: "Build your kingdom and reach Stronghold level 18",
            category: "gaming",
            type: "Strategy Game",
            payout: "$45.00",
            points: 4500,
            difficulty: "hard",
            timeRequired: "7-10 days",
            rating: 4.5,
            completions: 5432,
            featured: true,
            urgent: false,
            icon: "🏰",
            requirements: ["Download game", "Reach level 18", "Stay active"],
            steps: 3,
        },
        {
            id: 7,
            title: "Health & Wellness Survey",
            description: "20-minute survey about lifestyle and health habits",
            category: "surveys",
            type: "Health Survey",
            payout: "$5.00",
            points: 500,
            difficulty: "easy",
            timeRequired: "20 mins",
            rating: 4.3,
            completions: 3456,
            featured: false,
            urgent: false,
            icon: "🏥",
            requirements: [
                "Age 25+",
                "Complete all questions",
                "Honest responses",
            ],
            steps: 1,
        },
        {
            id: 8,
            title: "Coinbase Sign Up",
            description: "Create Coinbase account and verify identity",
            category: "finance",
            type: "Account Creation",
            payout: "$15.00",
            points: 1500,
            difficulty: "medium",
            timeRequired: "30 mins",
            rating: 4.6,
            completions: 9876,
            featured: true,
            urgent: true,
            icon: "₿",
            requirements: [
                "ID verification",
                "Link bank account",
                "First deposit $25",
            ],
            steps: 3,
        },
    ];

    const categories = [
        { id: "all", name: "All Offers", icon: Target, count: offers.length },
        {
            id: "gaming",
            name: "Mobile Games",
            icon: Gamepad2,
            count: offers.filter((o) => o.category === "gaming").length,
        },
        {
            id: "surveys",
            name: "Surveys",
            icon: BarChart3,
            count: offers.filter((o) => o.category === "surveys").length,
        },
        {
            id: "shopping",
            name: "Shopping",
            icon: ShoppingBag,
            count: offers.filter((o) => o.category === "shopping").length,
        },
        {
            id: "apps",
            name: "App Trials",
            icon: Smartphone,
            count: offers.filter((o) => o.category === "apps").length,
        },
        {
            id: "videos",
            name: "Videos",
            icon: Play,
            count: offers.filter((o) => o.category === "videos").length,
        },
        {
            id: "finance",
            name: "Finance",
            icon: DollarSign,
            count: offers.filter((o) => o.category === "finance").length,
        },
    ];

    const filteredOffers = offers.filter((offer) => {
        const matchesCategory =
            selectedCategory === "all" || offer.category === selectedCategory;
        const matchesSearch =
            offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            offer.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDifficulty =
            difficulty === "all" || offer.difficulty === difficulty;
        const matchesPayout =
            !minPayout ||
            parseFloat(offer.payout.replace(/[^0-9.]/g, "")) >=
                parseFloat(minPayout);

        return (
            matchesCategory &&
            matchesSearch &&
            matchesDifficulty &&
            matchesPayout
        );
    });

    const sortedOffers = [...filteredOffers].sort((a, b) => {
        switch (sortBy) {
            case "featured":
                return b.featured - a.featured || b.points - a.points;
            case "highest":
                return b.points - a.points;
            case "lowest":
                return a.points - b.points;
            case "newest":
                return b.id - a.id;
            case "popular":
                return b.completions - a.completions;
            case "rating":
                return b.rating - a.rating;
            default:
                return 0;
        }
    });

    const getDifficultyColor = (diff) => {
        switch (diff) {
            case "easy":
                return "text-green-600 bg-green-50 border-green-200";
            case "medium":
                return "text-yellow-600 bg-yellow-50 border-yellow-200";
            case "hard":
                return "text-red-600 bg-red-50 border-red-200";
            default:
                return "text-gray-600 bg-gray-50 border-gray-200";
        }
    };

    const getDifficultyIcon = (diff) => {
        switch (diff) {
            case "easy":
                return CheckCircle;
            case "medium":
                return Clock;
            case "hard":
                return Target;
            default:
                return AlertCircle;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden">
            <GeometricBackground />
            <Header />

            {/* Main Content */}
            <div className="pt-20 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Header */}
                    <div className="mb-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                                    Available
                                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        {" "}
                                        Offers
                                    </span>
                                </h1>
                                <p className="text-gray-600">
                                    Choose from {offers.length} earning
                                    opportunities and start making money today!
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <Flame className="w-5 h-5 text-orange-500" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">
                                                {
                                                    offers.filter(
                                                        (o) => o.urgent
                                                    ).length
                                                }{" "}
                                                Urgent
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Limited time
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <Crown className="w-5 h-5 text-yellow-500" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">
                                                {
                                                    offers.filter(
                                                        (o) => o.featured
                                                    ).length
                                                }{" "}
                                                Featured
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                High rewards
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search and Filters */}
                    <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 mb-8">
                        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
                            {/* Search Bar */}
                            <div className="flex-1">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search offers..."
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50/50"
                                    />
                                </div>
                            </div>

                            {/* Sort Dropdown */}
                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="appearance-none bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 cursor-pointer"
                                >
                                    <option value="featured">
                                        Featured First
                                    </option>
                                    <option value="highest">
                                        Highest Payout
                                    </option>
                                    <option value="lowest">
                                        Lowest Payout
                                    </option>
                                    <option value="newest">Newest</option>
                                    <option value="popular">
                                        Most Popular
                                    </option>
                                    <option value="rating">
                                        Highest Rated
                                    </option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>

                            {/* Filter Toggle */}
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`flex items-center space-x-2 px-4 py-3 rounded-xl border transition-all duration-300 ${
                                    showFilters
                                        ? "bg-indigo-50 border-indigo-200 text-indigo-600"
                                        : "bg-gray-50/50 border-gray-200 text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                                <SlidersHorizontal className="w-4 h-4" />
                                <span className="font-medium">Filters</span>
                            </button>
                        </div>

                        {/* Advanced Filters */}
                        {showFilters && (
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Difficulty
                                        </label>
                                        <select
                                            value={difficulty}
                                            onChange={(e) =>
                                                setDifficulty(e.target.value)
                                            }
                                            className="w-full appearance-none bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        >
                                            <option value="all">
                                                All Levels
                                            </option>
                                            <option value="easy">Easy</option>
                                            <option value="medium">
                                                Medium
                                            </option>
                                            <option value="hard">Hard</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Min Payout ($)
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            value={minPayout}
                                            onChange={(e) =>
                                                setMinPayout(e.target.value)
                                            }
                                            className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div className="flex items-end">
                                        <button
                                            onClick={() => {
                                                setDifficulty("all");
                                                setMinPayout("");
                                                setSearchQuery("");
                                            }}
                                            className="w-full bg-gray-100 text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                                        >
                                            Clear Filters
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
                        {/* Categories Sidebar */}
                        <div className="w-full lg:w-64 flex-shrink-0">
                            <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6">
                                <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                                    <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                                    Categories
                                </h2>

                                <div className="space-y-2">
                                    {categories.map((category) => {
                                        const IconComponent = category.icon;
                                        return (
                                            <button
                                                key={category.id}
                                                onClick={() =>
                                                    setSelectedCategory(
                                                        category.id
                                                    )
                                                }
                                                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 text-left ${
                                                    selectedCategory ===
                                                    category.id
                                                        ? "bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-indigo-700"
                                                        : "hover:bg-gray-50 text-gray-600"
                                                }`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <IconComponent className="w-4 h-4" />
                                                    <span className="font-medium">
                                                        {category.name}
                                                    </span>
                                                </div>
                                                <span
                                                    className={`text-xs px-2 py-1 rounded-full ${
                                                        selectedCategory ===
                                                        category.id
                                                            ? "bg-indigo-100 text-indigo-600"
                                                            : "bg-gray-100 text-gray-500"
                                                    }`}
                                                >
                                                    {category.count}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Offers Grid */}
                        <div className="flex-1">
                            {sortedOffers.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Search className="w-8 h-8 text-gray-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        No offers found
                                    </h3>
                                    <p className="text-gray-600">
                                        Try adjusting your search or filters
                                    </p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {sortedOffers.map((offer) => {
                                        const DifficultyIcon =
                                            getDifficultyIcon(offer.difficulty);

                                        return (
                                            <div
                                                key={offer.id}
                                                className="group relative bg-white rounded-3xl shadow-md transition-all duration-300 overflow-hidden
"
                                            >
                                                {/* Badges Container */}
                                                <div className="absolute top-4 left-4 right-4 z-10 flex justify-between">
                                                    {/* Featured Badge */}
                                                    {offer.featured && (
                                                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-md">
                                                            <Crown className="w-3 h-3" />
                                                            <span>
                                                                FEATURED
                                                            </span>
                                                        </div>
                                                    )}

                                                    {/* Spacer if no featured badge */}
                                                    {!offer.featured && (
                                                        <div></div>
                                                    )}

                                                    {/* Urgent Badge */}
                                                    {offer.urgent && (
                                                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse shadow-md">
                                                            <Flame className="w-3 h-3" />
                                                            <span>URGENT</span>
                                                        </div>
                                                    )}
                                                </div>

                                                <div
                                                    className={`p-6 ${
                                                        offer.featured ||
                                                        offer.urgent
                                                            ? "pt-16"
                                                            : "pt-6"
                                                    }`}
                                                >
                                                    {/* Offer Header */}
                                                    <div className="flex items-start space-x-4 mb-4">
                                                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                                                            {offer.icon}
                                                        </div>

                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                                                                {offer.title}
                                                            </h3>
                                                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                                                {
                                                                    offer.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Offer Stats */}
                                                    <div className="flex items-center space-x-4 mb-4">
                                                        <div className="flex items-center space-x-1">
                                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                            <span className="text-sm font-medium text-gray-700">
                                                                {offer.rating}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center space-x-1">
                                                            <Users className="w-4 h-4 text-blue-500" />
                                                            <span className="text-sm text-gray-600">
                                                                {offer.completions.toLocaleString()}
                                                            </span>
                                                        </div>

                                                        <div
                                                            className={`flex items-center space-x-1 px-2 py-1 rounded-full border text-xs font-medium ${getDifficultyColor(
                                                                offer.difficulty
                                                            )}`}
                                                        >
                                                            <DifficultyIcon className="w-3 h-3" />
                                                            <span className="capitalize">
                                                                {
                                                                    offer.difficulty
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Requirements Preview */}
                                                    <div className="mb-4">
                                                        <div className="text-xs text-gray-500 mb-2">
                                                            Requirements (
                                                            {offer.steps}{" "}
                                                            steps):
                                                        </div>
                                                        <div className="space-y-1">
                                                            {offer.requirements
                                                                .slice(0, 2)
                                                                .map(
                                                                    (
                                                                        req,
                                                                        index
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="flex items-center space-x-2 text-xs text-gray-600"
                                                                        >
                                                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                                                            <span>
                                                                                {
                                                                                    req
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    )
                                                                )}
                                                            {offer.requirements
                                                                .length > 2 && (
                                                                <div className="text-xs text-indigo-600 font-medium">
                                                                    +
                                                                    {offer
                                                                        .requirements
                                                                        .length -
                                                                        2}{" "}
                                                                    more
                                                                    requirements
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Payout and Action */}
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="text-2xl font-bold text-green-600 mb-1">
                                                                {offer.payout}
                                                            </div>
                                                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                                <Coins className="w-4 h-4 text-yellow-500" />
                                                                <span>
                                                                    {offer.points.toLocaleString()}{" "}
                                                                    points
                                                                </span>
                                                                <span>•</span>
                                                                <Clock className="w-4 h-4" />
                                                                <span>
                                                                    {
                                                                        offer.timeRequired
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <button className="group/btn relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer flex items-center space-x-2">
                                                            <span>
                                                                Start Offer
                                                            </span>
                                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoPage;

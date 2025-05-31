import React, { useState } from 'react';
import { BarChart3, Users, TrendingUp, Eye, Instagram, Facebook, Twitter, MessageCircle, ChevronDown, Menu, X, Star, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Pricing', 'Portfolio'];
  
  const services = [
    {
      icon: <Eye className="w-12 h-12 text-purple-600" />,
      title: "Social Media Monitoring",
      description: "Cum sociis natoque penatibus et dis magnis dis parturient montes.",
      image: "/api/placeholder/300/200"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Audience Analysis", 
      description: "Cum sociis natoque penatibus et dis magnis dis parturient montes.",
      image: "/api/placeholder/300/200"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "Performance Analytics",
      description: "Cum sociis natoque penatibus et dis magnis dis parturient montes.",
      image: "/api/placeholder/300/200"
    }
  ];

  const brands = ['Rise', 'Vertigo', 'Minty', 'Glossy', 'Rise', 'waveless'];

  const stats = [
    { label: 'POSTS', value: '259' },
    { label: 'FOLLOWERS', value: '2,648' },
    { label: 'FOLLOWING', value: '786' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Analyx</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    index === 0 ? 'text-purple-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                  {item === 'Page' && <ChevronDown className="inline w-4 h-4 ml-1" />}
                </a>
              ))}
            </nav>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-100">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium w-fit">
                  Contact Us
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span>Welcome to Analyx</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Social Media{' '}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Manager
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Gain deeper social insights. Unlock growth opportunities, optimize strategies & connect with your audience like never before.
              </p>
              
              <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              {/* Main Dashboard */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Insights Overview</span>
                </div>

                {/* Profile Section */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SM</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Social Media</h3>
                    <p className="text-sm text-gray-500">Marketing Agency</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Performance */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Best performance</span>
                  <span className="text-green-600 font-semibold">+9.3%</span>
                </div>

                {/* Chart Placeholder */}
                <div className="h-24 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-end justify-center space-x-2 p-4">
                  {[40, 60, 35, 80, 45, 70, 55].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-sm"
                      style={{ height: `${height}%`, width: '12px' }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 z-20">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Followers</div>
                    <div className="font-bold">2,648</div>
                    <div className="text-xs text-green-600">+4.3%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20">
                <div className="text-xs text-gray-500 mb-2">Post Insight</div>
                <div className="flex space-x-1">
                  {[30, 50, 40, 70, 35, 60].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm w-2"
                      style={{ height: `${height / 2}px` }}
                    ></div>
                  ))}
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <Twitter className="w-4 h-4 text-blue-400" />
                  <MessageCircle className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600">Trusted by world's leading brands</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {brands.map((brand, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Empowering social media{' '}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                insights
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Duis fermentum consequat tellus sollicitudin porta justo elit rutrum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-purple-100 rounded-2xl p-6 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg h-32 flex items-center justify-center">
                  <div className="text-purple-600 font-semibold">Service Preview</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Our History</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Unleash social{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              potential
            </span>
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Suspendisse quis ipsum lorem velit eleifend massa lorem, consectetur rutis, ultriciam nibh orci consectetur tellus mattis ante forma sit ante ipsum prompts sit Facebook. Vivit sit pulvinar risus, sit blancs.
          </p>
          <button className="group inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Analyx</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Analyx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
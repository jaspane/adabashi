import React from 'react';
import { Home, TrendingUp, Key, Users, FileText, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-amber-500" />,
      title: "Luxury Home Sales",
      description: "Expert guidance through every step of buying or selling luxury properties in Las Vegas's most exclusive neighborhoods.",
      features: ["Market Analysis", "Professional Photography", "Staging Services"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
      title: "Investment Consulting",
      description: "Strategic investment advice for high-net-worth individuals looking to build wealth through luxury real estate.",
      features: ["ROI Analysis", "Market Trends", "Portfolio Strategy"]
    },
    {
      icon: <Key className="w-8 h-8 text-amber-500" />,
      title: "Relocation Services",
      description: "Comprehensive relocation assistance for executives and families moving to Las Vegas from around the world.",
      features: ["Area Tours", "School Districts", "Community Integration"]
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "Client Concierge",
      description: "White-glove concierge services to handle all aspects of your real estate transaction and beyond.",
      features: ["24/7 Support", "Vendor Network", "Personal Assistant"]
    },
    {
      icon: <FileText className="w-8 h-8 text-amber-500" />,
      title: "Market Reports",
      description: "Detailed market analysis and reports to keep you informed about luxury real estate trends and opportunities.",
      features: ["Monthly Reports", "Custom Analysis", "Investment Insights"]
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      title: "Transaction Management",
      description: "Meticulous transaction management ensuring smooth closings and protecting your interests throughout the process.",
      features: ["Legal Coordination", "Due Diligence", "Closing Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Comprehensive <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From initial consultation to closing and beyond, I provide a full suite of services 
            designed to exceed the expectations of luxury real estate clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-xl font-bold text-slate-800 ml-3 group-hover:text-amber-600 transition-colors duration-200">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full text-center py-3 border-2 border-slate-200 rounded-lg hover:border-amber-500 hover:text-amber-600 transition-all duration-200 font-semibold">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Luxury Service?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your real estate goals and how I can help you achieve them with personalized, 
            white-glove service that sets the standard in luxury real estate.
          </p>
          <button className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
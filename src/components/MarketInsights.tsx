import React from 'react';
import { BarChart3, MapPin, Calendar, Award } from 'lucide-react';

const MarketInsights = () => {
  const marketData = [
    {
      icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
      label: "Median Home Price",
      value: "$2.1M",
      change: "+12.5%",
      positive: true
    },
    {
      icon: <Calendar className="w-6 h-6 text-amber-500" />,
      label: "Days on Market",
      value: "28",
      change: "-8 days",
      positive: true
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      label: "Luxury Inventory",
      value: "342",
      change: "+5.2%",
      positive: true
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-500" />,
      label: "Active Listings",
      value: "156",
      change: "-3.1%",
      positive: false
    }
  ];

  const neighborhoods = [
    {
      name: "Summerlin",
      avgPrice: "$2.4M",
      growth: "+15.2%",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Henderson",
      avgPrice: "$1.9M",
      growth: "+11.8%",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "The Strip",
      avgPrice: "$3.2M",
      growth: "+8.4%",
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="market" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Las Vegas Luxury <span className="text-amber-500">Market Insights</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed with the latest trends and data from Las Vegas's luxury real estate market, 
            updated monthly to help you make informed decisions.
          </p>
        </div>

        {/* Market Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketData.map((stat, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {stat.icon}
                <span className="text-sm font-medium text-slate-600 ml-2">{stat.label}</span>
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from last quarter
              </div>
            </div>
          ))}
        </div>

        {/* Neighborhood Spotlight */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Neighborhood Spotlight</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{neighborhood.name}</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-slate-600">Average Price</div>
                      <div className="text-lg font-bold text-amber-600">{neighborhood.avgPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-600">YoY Growth</div>
                      <div className="text-lg font-bold text-green-600">{neighborhood.growth}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Report CTA */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Get Your Personalized Market Report</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Receive detailed market analysis tailored to your specific interests and investment goals, 
            including neighborhood trends, pricing forecasts, and exclusive opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Download Free Report
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300">
              Schedule Market Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
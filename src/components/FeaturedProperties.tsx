import React from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Desert Oasis",
      location: "Summerlin, Las Vegas",
      price: "$2,850,000",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Pool", "Smart Home", "3-Car Garage"]
    },
    {
      id: 2,
      title: "Las Vegas Strip Penthouse",
      location: "The Strip, Las Vegas",
      price: "$4,250,000",
      beds: 3,
      baths: 3,
      sqft: "3,800",
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["City Views", "Concierge", "Rooftop Access"]
    },
    {
      id: 3,
      title: "Golf Course Villa",
      location: "Spanish Hills, Las Vegas",
      price: "$1,950,000",
      beds: 4,
      baths: 3,
      sqft: "3,500",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Golf Views", "Wine Cellar", "Guest House"]
    },
    {
      id: 4,
      title: "Contemporary Masterpiece",
      location: "Henderson, Nevada",
      price: "$3,100,000",
      beds: 6,
      baths: 5,
      sqft: "5,200",
      image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Mountain Views", "Home Theater", "Chef's Kitchen"]
    }
  ];

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Featured <span className="text-amber-500">Properties</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover exceptional luxury homes in Las Vegas's most prestigious neighborhoods, 
            carefully selected for discerning buyers seeking the finest in desert living.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {properties.map((property) => (
            <div key={property.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                  <Heart className="w-5 h-5 text-slate-600 hover:text-red-500" />
                </button>
                <div className="absolute bottom-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors duration-200">
                    {property.title}
                  </h3>
                  <span className="text-2xl font-bold text-amber-600">{property.price}</span>
                </div>

                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4 text-slate-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.map((feature) => (
                    <span key={feature} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors duration-200 font-semibold">
                  Schedule Viewing
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      location: "Summerlin Purchase",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Alex's expertise in the luxury market is unmatched. He helped us find our dream home in Summerlin and negotiated an incredible deal. His attention to detail and personalized service exceeded all our expectations.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      location: "Henderson Investment",
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Working with Alex on our investment portfolio has been outstanding. His market insights and strategic advice have helped us acquire three luxury properties that have already appreciated significantly.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      location: "Strip Penthouse Sale",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Selling our penthouse required a sophisticated marketing approach, and Alex delivered brilliantly. The professional photography, staging, and targeted marketing resulted in multiple offers above asking price.",
      rating: 5
    },
    {
      name: "Robert & Lisa Thompson",
      location: "Relocation Specialists",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Relocating from New York to Las Vegas was seamless thanks to Alex. He understood our lifestyle needs perfectly and found us the perfect luxury home. His concierge service made the transition effortless.",
      rating: 5
    },
    {
      name: "Mark Stevens",
      location: "Golf Course Estate",
      image: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Alex's knowledge of golf course properties in Las Vegas is incredible. He found us a stunning estate with mountain and course views that we never would have discovered on our own. True professional.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      location: "First-Time Luxury Buyer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "As a first-time luxury home buyer, Alex guided me through every step with patience and expertise. His educational approach helped me make confident decisions, and I couldn't be happier with my new home.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Client <span className="text-amber-500">Success Stories</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Discover why discerning clients choose Alex Adabashi for their luxury real estate needs. 
            These testimonials reflect a commitment to excellence and personalized service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-amber-500 opacity-20" />
              
              <div className="flex items-center mb-4 sm:mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-600">{testimonial.result}</p>
                </div>
              </div>

              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-amber-500" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed italic text-sm sm:text-base">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg inline-block w-full max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-4 sm:mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">4.9/5</div>
                <div className="text-sm text-slate-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">500+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-500">200+</div>
                <div className="text-xs sm:text-sm text-slate-600">Happy Investors</div>
                <div className="text-xs sm:text-sm text-slate-600">Success Rate</div>
              </div>
            <p className="text-slate-600 max-w-md text-sm sm:text-base">
                <div className="text-2xl sm:text-3xl font-bold text-amber-500">$50M+</div>
                <div className="text-xs sm:text-sm text-slate-600">Client Returns</div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
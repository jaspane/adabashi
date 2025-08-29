import React from 'react';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: "Top 1% Agent",
      description: "Consistently ranked in the top 1% of Las Vegas real estate agents"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "500+ Clients",
      description: "Successfully guided over 500 families to their dream homes"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
      title: "$2.5B+ Sales",
      description: "Over $2.5 billion in luxury real estate transactions"
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      title: "15+ Years",
      description: "Deep expertise in Nevada's luxury real estate market"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Your Trusted Partner in
              <span className="text-amber-500"> Luxury Real Estate</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With over 15 years of dedicated service in Las Vegas's luxury real estate market, 
              I've built my reputation on delivering exceptional results and personalized service 
              to discerning clients seeking the finest properties Nevada has to offer.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              My deep understanding of market trends, combined with an extensive network of 
              industry professionals, ensures that whether you're buying or selling, you'll 
              receive the highest level of expertise and attention to detail.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Specializations:</h3>
              <div className="flex flex-wrap gap-3">
                {['Luxury Homes', 'High-Rise Condos', 'Golf Course Properties', 'Investment Properties', 'New Construction'].map((spec) => (
                  <span key={spec} className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
                        <iframe
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              src="https://www.youtube.com/embed/9VJ02qgwWLQ"
              title="Alex Adabashi"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">Alex Adabashi</div>
                <div className="text-amber-600 font-medium">Luxury Real Estate Specialist</div>
                <div className="text-sm text-slate-600 mt-1">Licensed in Nevada</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {achievement.icon}
                <h3 className="text-lg font-semibold text-slate-800 ml-3">{achievement.title}</h3>
              </div>
              <p className="text-slate-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
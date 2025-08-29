import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-amber-500" />,
      title: "Phone",
      details: "(702) 555-1234",
      action: "tel:+17025551234"
    },
    {
      icon: <Mail className="w-6 h-6 text-amber-500" />,
      title: "Email",
      details: "alex@adabashi.com",
      action: "mailto:alex@adabashi.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-500" />,
      title: "Office",
      details: "1234 Luxury Lane, Las Vegas, NV 89101",
      action: null
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Hours",
      details: "Mon-Sun: 7AM-9PM",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Let's Start Your <span className="text-amber-500">Luxury Journey</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to buy or sell luxury real estate in Las Vegas? Contact me today for a personalized 
            consultation and discover the difference that expertise and dedication can make.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-amber-50 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{info.title}</h4>
                    {info.action ? (
                      <a 
                        href={info.action}
                        className="text-slate-600 hover:text-amber-600 transition-colors duration-200"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-slate-600">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-slate-100 rounded-2xl p-8 text-center">
              <MapPin className="w-16 h-16 text-amber-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-800 mb-2">Visit Our Office</h4>
              <p className="text-slate-600">
                Located in the heart of Las Vegas, our office provides a comfortable setting 
                to discuss your luxury real estate needs.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                <p className="text-slate-600">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select Subject</option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="consultation">Market Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell me about your real estate goals..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience Luxury Service?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a private consultation to discuss your luxury real estate goals and discover 
            how personalized service can make all the difference.
          </p>
          <button className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Schedule Private Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
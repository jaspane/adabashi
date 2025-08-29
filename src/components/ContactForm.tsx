@@ .. @@
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div className="text-center mb-12">
-          <h2 className="text-4xl font-bold text-slate-800 mb-4">
+        <div className="text-center mb-8 sm:mb-12">
+          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
             Get Your <span className="text-amber-500">Free Strategy Session</span>
           </h2>
-          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
+          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
             Schedule a complimentary consultation to discuss your investment goals and 
             discover personalized strategies for building wealth through real estate.
           </p>
@@ .. @@
         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
-          <div className="grid lg:grid-cols-2">
+          <div className="grid grid-cols-1 lg:grid-cols-2">
             {/* Form Section */}
-            <div className="p-8 lg:p-12">
-              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
+            <div className="p-6 sm:p-8 lg:p-12">
+              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
               
               {isSubmitted ? (
-                <div className="text-center py-12">
-                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
-                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h4>
-                  <p className="text-slate-600">
+                <div className="text-center py-8 sm:py-12">
+                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
+                  <h4 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Thank You!</h4>
+                  <p className="text-sm sm:text-base text-slate-600">
                     We'll contact you within 24 hours to schedule your strategy session.
                   </p>
                 </div>
               ) : (
-                <form onSubmit={handleSubmit} className="space-y-6">
-                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
+                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
+                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                     <input
                       type="text"
                       name="firstName"
@@ -1,6 +1,6 @@
                       value={formData.firstName}
                       onChange={handleChange}
                       required
-                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
+                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                     />
                     <input
@@ .. @@
                       value={formData.lastName}
                       onChange={handleChange}
                       required
-                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
+                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                     />
                   </div>
 
@@ .. @@
                     value={formData.email}
                     onChange={handleChange}
                     required
-                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
+                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                   />
 
@@ .. @@
                     value={formData.phone}
                     onChange={handleChange}
                     required
-                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
+                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                   />
 
@@ .. @@
                     value={formData.investmentGoal}
                     onChange={handleChange}
                     required
-                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
+                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                   >
@@ .. @@
                     rows={4}
-                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
+                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                   />
 
                   <button
                     type="submit"
-                    className="w-full bg-amber-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
+                    className="w-full bg-amber-500 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                   >
-                    <Send className="w-5 h-5" />
+                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                     <span>Get My Free Strategy Session</span>
                   </button>
@@ .. @@
             {/* Benefits Section */}
-            <div className="bg-slate-50 p-8 lg:p-12">
-              <h3 className="text-2xl font-bold text-slate-800 mb-6">What You'll Discover</h3>
+            <div className="bg-slate-50 p-6 sm:p-8 lg:p-12">
+              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">What You'll Discover</h3>
               
-              <div className="space-y-6">
+              <div className="space-y-4 sm:space-y-6">
                 {sessionBenefits.map((benefit, index) => (
                   <div key={index} className="flex items-start">
-                    <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-4">
-                      <span className="text-white font-bold text-sm">{index + 1}</span>
+                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1">
+                      <span className="text-white font-bold text-xs sm:text-sm">{index + 1}</span>
                     </div>
                     <div>
-                      <h4 className="font-semibold text-slate-800 mb-2">{benefit.title}</h4>
-                      <p className="text-slate-600">{benefit.description}</p>
+                      <h4 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">{benefit.title}</h4>
+                      <p className="text-slate-600 text-sm sm:text-base">{benefit.description}</p>
                     </div>
                   </div>
                 ))}
@@ .. @@
               
               {/* Trust Indicators */}
-              <div className="mt-8 pt-8 border-t border-slate-200">
-                <div className="grid grid-cols-3 gap-4 text-center">
+              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200">
+                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                   <div>
-                    <div className="text-2xl font-bold text-amber-600">500+</div>
-                    <div className="text-sm text-slate-600">Clients Served</div>
+                    <div className="text-xl sm:text-2xl font-bold text-amber-600">500+</div>
+                    <div className="text-xs sm:text-sm text-slate-600">Clients Served</div>
                   </div>
                   <div>
-                    <div className="text-2xl font-bold text-amber-600">$2.5B+</div>
-                    <div className="text-sm text-slate-600">In Sales</div>
+                    <div className="text-xl sm:text-2xl font-bold text-amber-600">$2.5B+</div>
+                    <div className="text-xs sm:text-sm text-slate-600">In Sales</div>
                   </div>
                   <div>
-                    <div className="text-2xl font-bold text-amber-600">15+</div>
-                    <div className="text-sm text-slate-600">Years Experience</div>
+                    <div className="text-xl sm:text-2xl font-bold text-amber-600">15+</div>
+                    <div className="text-xs sm:text-sm text-slate-600">Years Experience</div>
                   </div>
                 </div>
               </div>
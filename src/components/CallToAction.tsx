@@ .. @@
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
-        <h2 className="text-4xl font-bold text-white mb-6">
+        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
           Ready to Build <span className="text-amber-400">Generational Wealth?</span>
         </h2>
-        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
+        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
           Don't let another opportunity pass by. Schedule your complimentary strategy session 
           today and discover how to accelerate your wealth-building journey.
         </p>
         
-        <div className="flex flex-col sm:flex-row gap-4 justify-center">
+        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
           <button 
             onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
-            className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
+            className="bg-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-amber-600 transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
           >
             Schedule Free Consultation
           </button>
           <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
-            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
+            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
           >
             Get Free Report
           </button>
@@ .. @@
         
         {/* Urgency Indicator */}
-        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
-          <div className="flex items-center justify-center space-x-4 text-white">
-            <Clock className="w-6 h-6 text-amber-400" />
-            <span className="text-lg font-semibold">Limited Time: Free Strategy Sessions Available</span>
+        <div className="mt-6 sm:mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
+          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-white">
+            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
+            <span className="text-base sm:text-lg font-semibold text-center">
+              <span className="hidden sm:inline">Limited Time: Free Strategy Sessions Available</span>
+              <span className="sm:hidden">Free Strategy Sessions Available</span>
+            </span>
           </div>
         </div>
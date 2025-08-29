@@ .. @@
       {/* Hero Section */}
-      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
+      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
         {/* Background */}
         <div className="absolute inset-0">
           <img
@@ -1,6 +1,6 @@
             alt="Luxury Real Estate Investment"
-            className="w-full h-full object-cover"
+            className="w-full h-full object-cover object-center"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
         </div>
 
         {/* Content */}
-        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
-          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
+        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6">
+          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
             Build Wealth Through
             <span className="text-amber-400 block">Strategic Real Estate</span>
           </h1>
-          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
+          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
             Discover the proven investment strategies that have generated over $50M in returns 
             for our clients. Watch the exclusive presentation below.
           </p>
-          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
+          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
             <button 
               onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
-              className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
+              className="bg-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-amber-600 transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
             >
               Watch Free Presentation
             </button>
             <button 
               onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
-              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
+              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
             >
               Schedule Consultation
             </button>
@@ .. @@
         {/* Stats Bar */}
         <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
-          <div className="max-w-7xl mx-auto px-4 py-6">
-            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
+          <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
+            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-center text-white">
               <div>
-                <div className="text-2xl font-bold text-amber-400">$50M+</div>
-                <div className="text-sm">Client Returns</div>
+                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-400">$50M+</div>
+                <div className="text-xs sm:text-sm">Client Returns</div>
               </div>
               <div>
-                <div className="text-2xl font-bold text-amber-400">200+</div>
-                <div className="text-sm">Successful Deals</div>
+                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-400">200+</div>
+                <div className="text-xs sm:text-sm">Successful Deals</div>
               </div>
-              <div>
-                <div className="text-2xl font-bold text-amber-400">15+</div>
-                <div className="text-sm">Years Experience</div>
+              <div className="col-span-2 lg:col-span-1">
+                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-400">15+</div>
+                <div className="text-xs sm:text-sm">Years Experience</div>
               </div>
-              <div>
-                <div className="text-2xl font-bold text-amber-400">98%</div>
-                <div className="text-sm">Client Satisfaction</div>
+              <div className="col-span-2 lg:col-span-1">
+                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-400">98%</div>
+                <div className="text-xs sm:text-sm">Client Satisfaction</div>
               </div>
             </div>
           </div>
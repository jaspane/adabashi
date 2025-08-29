@@ .. @@
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div className="grid lg:grid-cols-2 gap-12 items-center">
+        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
           {/* Video Content */}
-          <div className="order-2 lg:order-1">
+          <div className="order-2 lg:order-1 space-y-6">
-            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
+            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
               Discover the <span className="text-amber-400">Secret Strategy</span> 
               <br />Top Investors Use
             </h2>
-            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
+            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
               Watch this exclusive presentation to learn how savvy investors are building 
               generational wealth through strategic real estate investments in today's market.
             </p>
             
-            <div className="space-y-4 mb-8">
+            <div className="space-y-3 sm:space-y-4">
               {benefits.map((benefit, index) => (
)
)
}
-                <div key={index} className="flex items-center">
+                <div key={index} className="flex items-start sm:items-center">
                   <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
-                  <span className="text-gray-200">{benefit}</span>
+                  <span className="text-sm sm:text-base text-gray-200">{benefit}</span>
                 </div>
               ))}
             </div>
@@ .. @@
           {/* Video Player */}
-          <div className="order-1 lg:order-2 relative">
+          <div className="order-1 lg:order-2 relative w-full">
             <div className="relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
               <div className="aspect-video relative">
                 {!isPlaying ? (
                   <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
-                    <img
)
}
-                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
-                      alt="Video Thumbnail"
-                      className="w-full h-full object-cover opacity-50"
-                    />
+                    <div className="w-full h-full relative">
+                      <img
+                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
+                        alt="Video Thumbnail"
+                        className="w-full h-full object-cover opacity-50"
+                      />
+                    </div>
                     <button
                       onClick={() => setIsPlaying(true)}
-                      className="absolute inset-0 flex items-center justify-center group"
+                      className="absolute inset-0 flex items-center justify-center group z-10"
                     >
-                      <div className="bg-amber-500 rounded-full p-6 group-hover:bg-amber-400 transition-colors duration-300 shadow-2xl">
-                        <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
+                      <div className="bg-amber-500 rounded-full p-4 sm:p-6 group-hover:bg-amber-400 transition-colors duration-300 shadow-2xl">
+                        <Play className="w-8 h-8 sm:w-12 sm:h-12 text-white ml-1" fill="currentColor" />
                       </div>
                     </button>
-                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
+                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">
                       ▶ 23:45 - Exclusive Investment Strategy
                     </div>
                   </div>
@@ .. @@
                     <iframe
                       src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                       title="Investment Strategy Video"
-                      className="w-full h-full"
+                      className="w-full h-full border-0"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
@@ .. @@
               </div>
               
               {/* Video Controls */}
-              <div className="p-4 bg-slate-800 flex items-center justify-between">
-                <div className="text-white text-sm">
+              <div className="p-3 sm:p-4 bg-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
+                <div className="text-white text-xs sm:text-sm">
                   🔴 LIVE: Exclusive Investment Masterclass
                 </div>
-                <div className="text-amber-400 text-sm font-semibold">
-                  147 watching now
+                <div className="text-amber-400 text-xs sm:text-sm font-semibold">
+                  <span className="hidden sm:inline">147 watching now</span>
+                  <span className="sm:hidden">147 viewers</span>
                 </div>
               </div>
             </div>
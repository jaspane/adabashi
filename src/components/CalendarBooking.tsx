@@ .. @@
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div className="text-center mb-12">
-          <h2 className="text-4xl font-bold text-slate-800 mb-4">
+        <div className="text-center mb-8 sm:mb-12">
+          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
             Schedule Your <span className="text-amber-500">Strategy Session</span>
           </h2>
-          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
+          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
             Choose a convenient time for your complimentary 30-minute consultation. 
             We'll discuss your goals and create a personalized investment strategy.
           </p>
@@ .. @@
         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
-          <div className="grid lg:grid-cols-2">
+          <div className="grid grid-cols-1 lg:grid-cols-2">
             {/* Calendar Section */}
-            <div className="p-8 border-r border-slate-200">
-              <h3 className="text-xl font-bold text-slate-800 mb-6">Select Date & Time</h3>
+            <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-200">
+              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6">Select Date & Time</h3>
               
               {/* Calendar */}
-              <div className="mb-6">
-                <div className="flex items-center justify-between mb-4">
-                  <h4 className="font-semibold text-slate-700">December 2024</h4>
-                  <div className="flex space-x-2">
+              <div className="mb-4 sm:mb-6">
+                <div className="flex items-center justify-between mb-3 sm:mb-4">
+                  <h4 className="font-semibold text-slate-700 text-sm sm:text-base">December 2024</h4>
+                  <div className="flex space-x-1 sm:space-x-2">
                     <button className="p-2 hover:bg-slate-100 rounded">
-                      <ChevronLeft className="w-4 h-4" />
+                      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                     </button>
                     <button className="p-2 hover:bg-slate-100 rounded">
-                      <ChevronRight className="w-4 h-4" />
+                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                     </button>
                   </div>
                 </div>
                 
-                <div className="grid grid-cols-7 gap-1 mb-2">
+                <div className="grid grid-cols-7 gap-1 mb-2 text-xs sm:text-sm">
                   {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
-                    <div key={day} className="text-center text-sm font-medium text-slate-600 py-2">
+                    <div key={day} className="text-center font-medium text-slate-600 py-1 sm:py-2">
                       {day}
                     </div>
                   ))}
@@ .. @@
                 <div className="grid grid-cols-7 gap-1">
                   {Array.from({ length: 35 }, (_, i) => {
                     const day = i - 6; // Start from previous month
                     const isCurrentMonth = day > 0 && day <= 31;
                     const isSelected = selectedDate === day;
                     const isAvailable = day > 0 && day <= 31 && ![1, 7, 8, 14, 15, 21, 22, 28, 29].includes(day);
                     
                     return (
                       <button
                         key={i}
                         onClick={() => isAvailable && setSelectedDate(day)}
-                        className={`aspect-square text-sm rounded-lg transition-colors duration-200 ${
+                        className={`aspect-square text-xs sm:text-sm rounded-lg transition-colors duration-200 ${
                           !isCurrentMonth 
                             ? 'text-slate-300 cursor-not-allowed' 
                             : isSelected
@@ .. @@
               
               {/* Time Slots */}
               {selectedDate && (
-                <div>
-                  <h4 className="font-semibold text-slate-700 mb-4">Available Times</h4>
-                  <div className="grid grid-cols-2 gap-3">
+                <div className="mt-4 sm:mt-6">
+                  <h4 className="font-semibold text-slate-700 mb-3 sm:mb-4 text-sm sm:text-base">Available Times</h4>
+                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                     {timeSlots.map((time) => (
                       <button
                         key={time}
                         onClick={() => setSelectedTime(time)}
-                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
+                        className={`py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 ${
                           selectedTime === time
                             ? 'bg-amber-500 text-white'
                             : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
@@ .. @@
             {/* Confirmation Section */}
-            <div className="p-8 bg-slate-50">
-              <h3 className="text-xl font-bold text-slate-800 mb-6">Session Details</h3>
+            <div className="p-6 sm:p-8 bg-slate-50">
+              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6">Session Details</h3>
               
-              <div className="space-y-4 mb-8">
+              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                 <div className="flex items-center">
-                  <Calendar className="w-5 h-5 text-amber-500 mr-3" />
-                  <span className="text-slate-700">
+                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mr-2 sm:mr-3" />
+                  <span className="text-slate-700 text-sm sm:text-base">
                     {selectedDate ? `December ${selectedDate}, 2024` : 'Select a date'}
                   </span>
                 </div>
                 <div className="flex items-center">
-                  <Clock className="w-5 h-5 text-amber-500 mr-3" />
-                  <span className="text-slate-700">
+                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mr-2 sm:mr-3" />
+                  <span className="text-slate-700 text-sm sm:text-base">
                     {selectedTime || 'Select a time'}
                   </span>
                 </div>
                 <div className="flex items-center">
-                  <User className="w-5 h-5 text-amber-500 mr-3" />
-                  <span className="text-slate-700">30-minute consultation</span>
+                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mr-2 sm:mr-3" />
+                  <span className="text-slate-700 text-sm sm:text-base">30-minute consultation</span>
                 </div>
               </div>
 
-              <div className="bg-white p-6 rounded-xl mb-6">
-                <h4 className="font-semibold text-slate-800 mb-3">What to Expect:</h4>
-                <ul className="space-y-2 text-slate-600">
+              <div className="bg-white p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
+                <h4 className="font-semibold text-slate-800 mb-3 text-sm sm:text-base">What to Expect:</h4>
+                <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
                   <li className="flex items-start">
-                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
+                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                     Portfolio analysis and goal assessment
                   </li>
                   <li className="flex items-start">
-                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
+                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                     Personalized investment strategy
                   </li>
                   <li className="flex items-start">
-                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
+                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                     Market opportunity identification
                   </li>
                   <li className="flex items-start">
-                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
+                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                     Next steps and action plan
                   </li>
                 </ul>
@@ .. @@
               <button
                 onClick={handleBooking}
                 disabled={!selectedDate || !selectedTime}
-                className="w-full bg-slate-800 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
+                className="w-full bg-slate-800 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-amber-600 transition-colors duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
               >
                 Confirm Appointment
               </button>
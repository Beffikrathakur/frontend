"use client";
import React from 'react';

export default function UttarPradesh() {
  const stateGoals = [
    {
      title: "📢 युवा पंचायत एवं नेतृत्व विकास",
      desc: "उत्तर प्रदेश के प्रत्येक जिले और ब्लॉक स्तर पर 'युवा पंचायतों' का आयोजन करना, ताकि ग्रामीण पृष्ठभूमि के युवा अपनी समस्याओं को सीधे नीति-निर्माताओं तक पहुंचा सकें।"
    },
    {
      title: "💼 रोजगार अधिकार और पारदर्शी भर्ती मुहीम",
      desc: "राज्य में निकलने वाली सभी सरकारी नौकरियों की परीक्षाओं में पूरी पारदर्शिता, समय पर परिणाम और ग्रामीण छात्रों के लिए मुफ्त कोचिंग सेंटर्स की व्यवस्था के लिए प्रयास।"
    },
    {
      title: "🌾 कृषि-उद्यमिता (Agri-Tech) का विस्तार",
      desc: "यूपी के पारंपरिक किसानों के बच्चों को आधुनिक खेती, ड्रोन टेक्नोलॉजी, जैविक खेती और डायरेक्ट मार्केट लिंकेज सिखाकर उन्हें कृषि-उद्यमी बनाना।"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* भव्य स्टेट बैनर */}
      <section className="max-w-6xl mx-auto bg-gradient-to-br from-red-950 via-amber-900 to-red-950 text-white rounded-2xl p-8 sm:p-12 shadow-xl mb-12 border-b-4 border-amber-500 relative">
        <div className="max-w-3xl space-y-4">
          <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            🏛️ राज्य स्तरीय संकल्प • युवा शक्ति यूपी
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif leading-tight text-amber-400">
            उत्तर प्रदेश युवा नेटवर्क
          </h1>
          <p className="text-sm sm:text-base text-gray-200 font-medium">
            "जब उत्तर प्रदेश का युवा बढ़ेगा आगे, तभी बदलेगा उत्तम प्रदेश का भाग्य"
          </p>
          <p className="text-xs sm:text-sm text-gray-350 leading-relaxed pt-2">
            मनवेंद्र भैया का विज़न केवल एक क्षेत्र तक सीमित नहीं है। उत्तर प्रदेश भारत का हृदय है, और यहाँ की असीमित युवा ऊर्जा को सही दिशा देकर हम एक मजबूत, कुशल और आत्मनिर्भर समाज का निर्माण कर सकते हैं। ज़ीरो लेवल से ब्लॉक स्तर तक युवाओं को जोड़ना ही हमारा मिशन है।
          </p>
        </div>
      </section>

      {/* मुख्य कंटेंट */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* बायाँ कॉलम: यूपी विजन की कहानी */}
        <div className="lg:col-span-7 bg-white rounded-xl shadow-md border border-slate-200 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-red-950 font-serif border-b border-amber-500/20 pb-3">
            📖 प्रदेश के कोने-कोने से युवाओं को एकजुट करने का विज़न
          </h2>
          
          <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
            <p>
              उत्तर प्रदेश की धरती क्रांति और ज्ञान की जननी रही है। पश्चिम में मथुरा-मेरठ से लेकर पूर्व में बलिया-वाराणसी तक, हमारे राज्य का युवा आज हर क्षेत्र में अपनी प्रतिभा साबित कर रहा है। लेकिन आज भी ग्रामीण अंचलों में उचित मार्गदर्शन और डिजिटल संसाधनों की भारी कमी है।
            </p>
            <p className="border-l-4 border-amber-500 pl-4 bg-slate-50 py-3 italic font-medium text-slate-800">
              "राजनीति का असली मतलब केवल चुनाव जीतना नहीं, बल्कि प्रदेश के करोड़ों युवाओं के हाथों में हुनर (Skills) देकर उनके भविष्य को सुरक्षित करना होना चाहिए।" 
              <span className="block text-right text-xs text-amber-600 font-bold mt-1.5">— मनवेंद्र भैया</span>
            </p>
            <p>
              हम एक ऐसा राज्य स्तरीय मंच तैयार कर रहे हैं जहाँ पश्चिमी यूपी के किसान का बेटा और पूर्वी यूपी का कोडर छात्र एक साथ मिलकर विचारों का आदान-प्रदान कर सकें। हम हर जिले में कौशल विकास शिविर और युवा संवाद चौपालों के जरिए युवाओं की एक नई, ईमानदार और कर्मठ फौज तैयार कर रहे हैं।
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-base font-bold text-slate-850 font-serif mb-4">📸 प्रदेश स्तरीय सामाजिक गतिविधियों की झलक</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src="https://unsplash.com" 
                  alt="State Conference" 
                  className="w-full h-40 object-cover"
                />
                <p className="bg-black/60 text-white text-[10px] p-2 text-center absolute bottom-0 w-full">युवा नीति एवं रोज़गार गोलमेज बैठक</p>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src="https://unsplash.com" 
                  alt="UP Youth Drive" 
                  className="w-full h-40 object-cover"
                />
                <p className="bg-black/60 text-white text-[10px] p-2 text-center absolute bottom-0 w-full">प्रदेश के विभिन्न जिलों के वालंटियर्स का समागम</p>
              </div>
            </div>
          </div>
        </div>

        {/* दायाँ कॉलम: राज्य स्तरीय लक्ष्य */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-red-950 font-serif border-b border-amber-500/20 pb-3 mb-4">
              🎯 प्रदेश स्तर के मुख्य संकल्प
            </h3>
            
            <div className="space-y-4">
              {stateGoals.map((goal, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-sm text-slate-800 font-serif mb-1">{goal.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{goal.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-black rounded-xl p-6 shadow-md text-center space-y-3">
            <h4 className="font-bold font-serif text-lg">🤝 क्या आप भी उत्तर प्रदेश से हैं?</h4>
            <p className="text-xs font-medium leading-relaxed">
              अपने जिले या ब्लॉक में मनवेंद्र भैया के इस युवा सशक्तिकरण आंदोलन का नेतृत्व करने और वालंटियर बनने के लिए हमसे जुड़ें।
            </p>
            <a href="/sampark" className="inline-block w-full bg-black text-white font-bold text-xs py-3 rounded-lg shadow hover:bg-slate-800 transition-colors">
              यूपी कोर टीम ज्वाइन करें ➔
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}

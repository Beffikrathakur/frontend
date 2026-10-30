"use client";
import React from 'react';

export default function Mathura() {
  const initiatives = [
    {
      title: "🚩 ब्रज संस्कृति एवं घाट संरक्षण",
      desc: "यमुना जी के प्राचीन घाटों की स्वच्छता, ब्रज के पारंपरिक त्योहारों का संरक्षण और स्थानीय लोक कलाकारों को एक बड़ा डिजिटल मंच प्रदान करना।"
    },
    {
      title: "🚌 ग्रामीण ट्रांसपोर्ट एवं कनेक्टिविटी",
      desc: "मथुरा के दूर-दराज के गांवों से मुख्य शहर, शिक्षण संस्थानों और अस्पतालों तक बेहतर बस व सड़क कनेक्टिविटी के लिए लगातार जन-आंदोलन।"
    },
    {
      title: "🥛 डेयरी और पशुधन उद्यमिता शिविर",
      desc: "ब्रज की मुख्य ताकत हमारे पशुधन और दूध उत्पादन में है। पशुपालकों को आधुनिक तकनीकों से जोड़कर डेयरी उद्योग में मुनाफ़ा दोगुना करने की मुहीम।"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* भव्य बैनर */}
      <section className="max-w-6xl mx-auto bg-gradient-to-br from-amber-600 via-amber-800 to-red-950 text-white rounded-2xl p-8 sm:p-12 shadow-xl mb-12 border-b-4 border-amber-500 relative">
        <div className="max-w-3xl space-y-4">
          <span className="bg-black/30 border border-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            🙏 जय श्री कृष्णा • ब्रजभूमि कल्याण
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif leading-tight text-amber-400">
            आपका मथुरा जिला
          </h1>
          <p className="text-sm sm:text-base text-gray-200 font-medium">
            "ब्रज की पावन माटी का सम्मान, युवाओं को रोजगार और हर नागरिक का कल्याण"
          </p>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2">
            मथुरा केवल एक जिला नहीं, बल्कि पूरी दुनिया की आस्था का केंद्र है। मनवेंद्र भैया का लक्ष्य यहाँ के प्राचीन सांस्कृतिक मूल्यों को संजोए रखते हुए, ब्रज के ग्रामीण युवाओं को आधुनिक कौशल (Digital Skills) प्रदान कर वैश्विक स्तर पर खड़ा करना है।
          </p>
        </div>
      </section>

      {/* मुख्य कंटेंट */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* बायाँ कॉलम: मथुरा का विजन */}
        <div className="lg:col-span-7 bg-white rounded-xl shadow-md border border-slate-200 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-red-950 font-serif border-b border-amber-500/20 pb-3">
            📖 ब्रजभूमि का गौरव और हमारी सामाजिक मुहीम
          </h2>
          
          <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
            <p>
              मथुरा, वृंदावन, गोवर्धन और हमारे ग्रामीण अंचल हमेशा से प्रेम और समृद्धि के प्रतीक रहे हैं। लेकिन आधुनिक समय में, यहाँ के युवाओं को बेहतर शिक्षा और तकनीकी ट्रेनिंग के लिए बड़े शहरों की ओर पलायन करना पड़ता है। हमारा संकल्प इस पलायन को रोकना है।
            </p>
            <p className="border-l-4 border-amber-500 pl-4 bg-slate-50 py-3 italic font-medium text-slate-800">
              "ब्रज का विकास तभी संभव है जब हमारे गांवों के अंतिम घर का युवा भी स्वाभिमानी और आर्थिक रूप से पूरी तरह स्वतंत्र हो।" 
              <span className="block text-right text-xs text-amber-600 font-bold mt-1.5">— मनvendra भैया</span>
            </p>
            <p>
              पिछले 2 सालों में पूरे मथुरा जिले के विभिन्न ब्लॉकों में जाकर हमने युवाओं की चौपालें आयोजित की हैं। धार्मिक पर्यटन (Religious Tourism) का लाभ सीधे स्थानीय दुकानदारों, गाइडों और हस्तशिल्पकारों को दिलाने के लिए हमने एक विशेष कार्ययोजना तैयार की है।
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-base font-bold text-slate-850 font-serif mb-4">📸 मथुरा क्षेत्र में किए गए जन-कल्याण कार्य</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src="https://unsplash.com" 
                  alt="Mathura Chaupal" 
                  className="w-full h-40 object-cover"
                />
                <p className="bg-black/60 text-white text-[10px] p-2 text-center absolute bottom-0 w-full">युवा रोज़गार संवाद, मथुरा</p>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src="https://unsplash.com" 
                  alt="Cultural Drive" 
                  className="w-full h-40 object-cover"
                />
                <p className="bg-black/60 text-white text-[10px] p-2 text-center absolute bottom-0 w-full">प्राचीन धरोहर एवं घाट स्वच्छता अभियान</p>
              </div>
            </div>
          </div>
        </div>

        {/* दायाँ कॉलम: सक्रिय अभियान */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-red-950 font-serif border-b border-amber-500/20 pb-3 mb-4">
              🚀 जिला स्तरीय मुख्य प्राथमिकताएं
            </h3>
            
            <div className="space-y-4">
              {initiatives.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-sm text-slate-800 font-serif mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-950 text-amber-400 rounded-xl p-6 shadow-md text-center space-y-3">
            <h4 className="font-bold font-serif text-lg text-white">🤝 मथुरा युवा संगठन से जुड़ें</h4>
            <p className="text-xs text-gray-200 font-normal leading-relaxed">
              यदि आप मथुरा जिले के किसी भी ब्लॉक या गांव से हैं और इस सामाजिक-सांस्कृतिक बदलाव का हिस्सा बनना चाहते हैं, तो हमसे आज ही संपर्क करें।
            </p>
            <a href="/sampark" className="inline-block w-full bg-amber-500 text-black font-bold text-xs py-3 rounded-lg shadow hover:bg-amber-600 transition-colors">
              सदस्यता फॉर्म भरें ➔
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}

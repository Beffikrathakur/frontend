"use client";
import React from 'react';

export default function GramTarauli() {
  // ग्राम तरौली के विकास के मुख्य स्तंभ (Core Pillars)
  const developmentPillars = [
    {
      title: "🏫 डिजिटल शिक्षा और आधुनिक पुस्तकालय",
      desc: "गांव के बच्चों के लिए मुफ्त कंप्यूटर लैब और एक विश्वस्तरीय डिजिटल लाइब्रेरी की स्थापना, ताकि कोई भी बच्चा शिक्षा की दौड़ में पीछे न छूटे।"
    },
    {
      title: "💧 पक्की जल निकासी एवं स्वच्छ पेयजल",
      desc: "रास्तों पर जलभराव की समस्या को हमेशा के लिए खत्म करने के लिए नालियों का सही पक्का निर्माण और हर घर तक शुद्ध पेयजल पहुंचाना।"
    },
    {
      title: "🌐 फ्री ग्राम वाई-फाई नेटवर्क",
      desc: "पूरे गांव को हाई-स्पीड इंटरनेट कनेक्टिविटी से जोड़ना, जिससे युवा घर बैठे ऑनलाइन पढ़ाई, सरकारी फॉर्म और डिजिटल स्किल्स सीख सकें।"
    },
    {
      title: "🏥 चौबीस घंटे प्राथमिक स्वास्थ्य सहायता",
      desc: "आपातकालीन स्थिति में प्राथमिक चिकित्सा और एम्बुलेंस की त्वरित व्यवस्था के लिए स्थानीय स्तर पर एक मजबूत वालंटियर नेटवर्क।"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* 1. तरौली भव्य हेडर सेक्शन */}
      <section className="max-w-6xl mx-auto bg-gradient-to-br from-red-950 via-amber-950 to-red-950 text-white rounded-2xl p-8 sm:p-12 shadow-xl mb-12 border-b-4 border-amber-500 relative">
        <div className="max-w-3xl space-y-4">
          <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            🏡 हमारा गांव • हमारी शान
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif leading-tight text-amber-400">
            आपका ग्राम तरौली
          </h1>
          <p className="text-sm sm:text-base text-gray-200 font-medium">
            "मिट्टी से जुड़े संकल्प, जो तरौली को बनाएंगे एक आदर्श और आत्मनिर्भर स्मार्ट विलेज"
          </p>
          <p className="text-xs sm:text-sm text-gray-350 leading-relaxed pt-2">
            ग्राम तरौली सिर्फ एक भौगोलिक क्षेत्र नहीं है, बल्कि यह मनवेंद्र भैया की कर्मभूमि और दिल की धड़कन है। ज़ीरो लेवल से लेकर समाज के अंतिम छोर पर बैठे व्यक्ति को विकास की मुख्यधारा से जोड़ना ही हमारा एकमात्र लक्ष्य है।
          </p>
        </div>
      </section>

      {/* 2. मुख्य कंटेंट: कहानी के रूप में विकास का सफर और रोडमैप */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* बायाँ कॉलम (7 ग्रिड्स): तरौली की कहानी (Narrative Story) */}
        <div className="lg:col-span-7 bg-white rounded-xl shadow-md border border-slate-200 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-red-950 font-serif border-b border-amber-500/20 pb-3">
            📖 ग्राम तरौली की माटी और हमारा संकल्प
          </h2>
          
          <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
            <p>
              गांव की गलियों से उठने वाली धूल और वहां के खेतों की खुशबू ही भारत की असली पहचान है। लेकिन आज भी हमारे प्यारे ग्राम तरौली में युवाओं के लिए बेहतर रोजगार मार्गदर्शन, आधुनिक शिक्षा की कमी और वर्षा के दिनों में जलभराव जैसी बुनियादी समस्याएं एक बड़ी चुनौती बनी हुई हैं।
            </p>
            <p className="border-l-4 border-amber-500 pl-4 bg-slate-50 py-3 italic font-medium text-slate-800">
              "सच्ची राजनीति और समाज सेवा एसी होनी चाहिए जो वादों के बंद कमरों से निकलकर सीधे गांव की कच्ची पगडंडियों पर काम करके दिखाए।" 
              <span className="block text-right text-xs text-amber-600 font-bold mt-1.5">— मनवेंद्र भैया</span>
            </p>
            <p>
              पिछले 2 सालों में हमने तरौली के हर वर्ग के साथ बैठकर उनकी समस्याओं को बेहद करीब से समझा है। हमने सिर्फ शिकायतें नहीं कीं, बल्कि युवाओं की टोली बनाकर खुद फावड़ा उठाकर नालियों की सफाई से लेकर, रात के अंधेरे में सुरक्षा के लिए लाइटें लगवाने तक के काम जमीनी स्तर पर पूरे किए हैं।
            </p>
            <p>
              हमारा विज़न बहुत स्पष्ट है: हमें तरौली को एक ऐसा **'नेक्स्ट लेवल स्मार्ट विलेज'** बनाना है जहां शहर जैसी सुविधाएं हों, लेकिन गांव जैसी शुद्धता और अपनत्व बरकरार रहे।
            </p>
          </div>

          {/* फोटो गैलरी स्लॉट (तरौली के कार्यों की तस्वीरें लगाने की जगह) */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-slate-850 font-serif mb-4">📸 तरौली में जमीनी बदलाव की कुछ झलकियां</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src="https://unsplash.com" 
                  alt="Gram Tarauli Camp" 
                  className="w-full h-40 object-cover"
                />
                <p className="bg-black/60 text-white text-[10px] p-2 text-center absolute bottom-0 w-full">तरौली में जन-सुनवाई एवं सहायता शिविर</p>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src="https://unsplash.com" 
                  alt="Rural Cleaning Drive" 
                  className="w-full h-40 object-cover"
                />
                <p className="bg-black/60 text-white text-[10px] p-2 text-center absolute bottom-0 w-full">युवाओं के साथ श्रमदान एवं स्वच्छता अभियान</p>
              </div>
            </div>
          </div>
        </div>

        {/* दायाँ कॉलम (5 ग्रिड्स): स्मार्ट विलेज रोडमैप के मुख्य स्तंभ */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-red-950 font-serif border-b border-amber-500/20 pb-3 mb-4">
              🚀 ज़ीरो से नेक्स्ट लेवल रोडमैप
            </h3>
            
            <div className="space-y-4">
              {developmentPillars.map((pillar, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-500/30 transition-colors">
                  <h4 className="font-bold text-sm text-slate-800 font-serif mb-1">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* डायरेक्ट एक्शन कॉल */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-black rounded-xl p-6 shadow-md text-center space-y-3">
            <h4 className="font-bold font-serif text-lg">🤝 क्या आप भी तरौली से हैं?</h4>
            <p className="text-xs font-medium leading-relaxed">
              अपने गांव को बदलने के इस महा-अभियान में मनवेंद्र भैया का हाथ मजबूत करें। अपनी समस्याएं या सुझाव सीधे हम तक पहुंचाएं।
            </p>
            <a href="/sampark" className="inline-block w-full bg-black text-white font-bold text-xs py-3 rounded-lg shadow hover:bg-slate-800 transition-colors">
              भैया की कोर टीम से जुड़ें ➔
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}

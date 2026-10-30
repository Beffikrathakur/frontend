"use client";
import React from 'react';

export default function ApnaBharat() {
  const nationalPillars = [
    {
      title: "🇮🇳 सशक्त ग्राम से आत्मनिर्भर भारत",
      desc: "जब तक हमारे देश के गांव पूरी तरह आत्मनिर्भर और डिजिटल नहीं होंगे, तब तक भारत एक महाशक्ति नहीं बन सकता। ग्राम स्वराज ही राष्ट्र निर्माण की असली नींव है।"
    },
    {
      title: "⚖️ जागरूक नागरिक और मौलिक कर्तव्य",
      desc: "अधिकारों के साथ-साथ नागरिकों को उनके कर्तव्यों के प्रति सचेत करना। स्वच्छता, पर्यावरण संरक्षण और लोकतांत्रिक प्रक्रियाओं में 100% भागीदारी को बढ़ावा देना।"
    },
    {
      title: "🧩 स्वदेशी तकनीक और स्थानीय कुटीर उद्योग",
      desc: "स्थानीय हुनर को आधुनिक ई-कॉमर्स और तकनीक से जोड़कर 'लोकल फॉर वोकल' को धरातल पर सच साबित करना, ताकि ग्रामीण अर्थव्यवस्था मजबूत हो सके।"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* भव्य नेशनल बैनर */}
      <section className="max-w-6xl mx-auto bg-gradient-to-br from-red-950 via-amber-950 to-red-950 text-white rounded-2xl p-8 sm:p-12 shadow-xl mb-12 border-b-4 border-amber-500 relative">
        <div className="max-w-3xl space-y-4">
          <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            🇮🇳 राष्ट्र प्रथम • अखंड भारत विज़न
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif leading-tight text-amber-400">
            अपना भारत
          </h1>
          <p className="text-sm sm:text-base text-gray-200 font-medium">
            "जड़ें हमारी ग्रामीण माटी में, सोच हमारी वैश्विक मंच पर"
          </p>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2">
            मनvendra भैया का अटूट विश्वास है कि भारत की आत्मा उसके गांवों में बसती है। राष्ट्र का वास्तविक पुनरुत्थान तभी संभव है जब हमारे देश का हर किसान समृद्ध हो, हर बेटी सुरक्षित हो और हर युवा के हाथ में आधुनिक युग का हुनर हो।
          </p>
        </div>
      </section>

      {/* मुख्य कंटेंट */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* बायाँ कॉलम: राष्ट्र निर्माण पर विचार */}
        <div className="lg:col-span-7 bg-white rounded-xl shadow-md border border-slate-200 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-red-950 font-serif border-b border-amber-500/20 pb-3">
            📖 राष्ट्र निर्माण में एक सजग नागरिक की भूमिका
          </h2>
          
          <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
            <p>
              भारत दुनिया का सबसे युवा देश है। हमारी यह जनसांख्यिकीय लाभांश (Demographic Dividend) हमारी सबसे बड़ी ताकत है। यदि हम अपने देश के युवाओं को सही कौशल और नैतिक मूल्य प्रदान कर सकें, तो हमें दुनिया की सबसे बड़ी महाशक्ति बनने से कोई नहीं रोक सकता।
            </p>
            <p className="border-l-4 border-amber-500 pl-4 bg-slate-50 py-3 italic font-medium text-slate-800">
              "सच्ची राष्ट्रभक्ति केवल नारों में नहीं, बल्कि अपने आस-पास के समाज को बेहतर बनाने, गरीबों की मदद करने और देश के विकास में अपना शत-प्रतिशत योगदान देने में है।" 
              <span className="block text-right text-xs text-amber-600 font-bold mt-1.5">— मनवेंद्र भैया</span>
            </p>
            <p>
              हमारा 'अपना भारत' विज़न हर एक नागरिक को इस बात के लिए प्रेरित करता है कि वे सरकार पर निर्भर रहने के बजाय खुद बदलाव के अग्रदूत बनें। चाहे वह डिजिटल साक्षरता का प्रसार हो, पानी बचाना हो या समाज में समरसता फैलाना हो—हर छोटा कदम देश को आगे ले जाता है।
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-base font-bold text-slate-850 font-serif mb-4">📸 राष्ट्र निर्माण के प्रति हमारी सामूहिक पहल</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src="https://unsplash.com" 
                  alt="National Integration" 
                  className="w-full h-40 object-cover"
                />
                <p className="bg-black/60 text-white text-[10px] p-2 text-center absolute bottom-0 w-full">लोकतांत्रिक जागरूकता एवं नागरिक शपथ शिविर</p>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src="https://unsplash.com" 
                  alt="Rural Economy Drive" 
                  className="w-full h-40 object-cover"
                />
                <p className="bg-black/60 text-white text-[10px] p-2 text-center absolute bottom-0 w-full">स्वदेशी कुटीर उद्योग एवं महिला स्वयं सहायता समूह बैठक</p>
              </div>
            </div>
          </div>
        </div>

        {/* दायाँ कॉलम: राष्ट्रीय स्तंभ */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-red-950 font-serif border-b border-amber-500/20 pb-3 mb-4">
              🚀 राष्ट्र निर्माण के मुख्य स्तंभ
            </h3>
            
            <div className="space-y-4">
              {nationalPillars.map((pillar, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-sm text-slate-800 font-serif mb-1">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-black rounded-xl p-6 shadow-md text-center space-y-2">
            <h4 className="font-bold font-serif text-sm uppercase tracking-wider">🤝 एक भारत • श्रेष्ठ भारत</h4>
            <p className="text-[11px] font-medium leading-relaxed">
              आइए, जाति और धर्म के बंधनों से ऊपर उठकर राष्ट्र निर्माण के इस महायज्ञ में अपनी आहुति दें। ग्राम विकास से ही देश का स्वर्णिम कल सुनिश्चित होगा।
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

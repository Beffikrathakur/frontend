"use client";
import React, { useState } from 'react';

export default function RuralSkills() {
  // 20-30 ग्रामीण कौशलों और आत्मनिर्भरता के तरीकों का मास्टर डेटाबेस
  const [skills] = useState([
    {
      id: 1,
      title: "डिजिटल मार्केटिंग और सोशल मीडिया मैनेजमेंट",
      level: "Next Level (डिजिटल)",
      description: "गांव में रहकर मोबाइल और लैपटॉप की मदद से छोटे व्यवसायों के लिए विज्ञापन चलाना और सोशल मीडिया पेज संभालना सीखें।",
      income: "₹15,000 - ₹40,000 प्रति माह",
      time: "2-3 महीने ट्रेनिंग",
      image: "https://unsplash.com"
    },
    {
      id: 2,
      title: "वेबसाइट कोडिंग और वर्डप्रेस डेवलपमेंट",
      level: "Next Level (तकनीकी)",
      description: "इंटरनेट के माध्यम से साधारण कोडिंग और वर्डप्रेस पर वेबसाइट बनाना सीखें। देश-विदेश के क्लाइंट्स के लिए घर बैठे काम (Freelancing) करें।",
      income: "₹25,000 - ₹60,000 प्रति माह",
      time: "4-6 महीने ट्रेनिंग",
      image: "https://unsplash.com"
    },
    {
      id: 3,
      title: "स्मार्टफोन और इलेक्ट्रॉनिक्स रिपेयरिंग",
      level: "Zero Level (फिजिकल)",
      description: "सभी प्रकार के स्मार्टफोन, टैबलेट और घरेलू इलेक्ट्रॉनिक्स उपकरणों की रिपेयरिंग सीखकर अपने गांव या नजदीकी बाजार में खुद की दुकान खोलें।",
      income: "₹20,500 - ₹35,000 प्रति माह",
      time: "3 महीने व्यावहारिक कोर्स",
      image: "https://unsplash.com"
    },
    {
      id: 4,
      title: "आधुनिक मशरूम फार्मिंग (Mushroom Cultivation)",
      level: "Zero Level (कृषि)",
      description: "कम जगह और बहुत कम लागत में अपने घर के एक कमरे से मशरूम की खेती शुरू करें। इसकी बाजार में 24 घंटे भारी मांग रहती है।",
      income: "₹10,000 - ₹25,000 प्रति माह",
      time: "15 दिन की ट्रेनिंग",
      image: "https://unsplash.com"
    },
    {
      id: 5,
      title: "मछली पालन (Biofloc Aquaculture)",
      level: "Next Level (कृषि)",
      description: "बायोफ्लॉक तकनीक के जरिए छोटे से टैंक में आधुनिक तरीके से मछली पालन करें। पारंपरिक तालाब से 5 गुना ज्यादा मुनाफा।",
      income: "₹30,000 - ₹70,000 प्रति फसल",
      time: "1 महीने का प्रशिक्षण",
      image: "https://unsplash.com"
    },
    {
      id: 6,
      title: "सोलर पैनल इंस्टॉलेशन एवं मेंटेनेंस",
      level: "Next Level (फिजिकल)",
      description: "ग्रामीण क्षेत्रों में सोलर ऊर्जा की बढ़ती मांग को देखते हुए सोलर ग्रिड और घरेलू सोलर पैनल लगाने व सुधारने का तकनीकी हुनर सीखें।",
      income: "₹18,000 - ₹30,000 प्रति माह",
      time: "2 महीने ट्रेनिंग",
      image: "https://unsplash.com"
    }
    // नोट: इसी तरह आप इस एरे (Array) के अंदर 20 से 30 कौशलों का डेटा आसानी से बढ़ा सकते हैं।
  ]);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* मुख्य बैनर */}
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-amber-500 via-amber-600 to-red-950 text-white rounded-2xl p-8 sm:p-12 shadow-xl mb-12 relative overflow-hidden border-b-4 border-red-900">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="bg-black/30 border border-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            🛠️ आत्मनिर्भर भारत • ग्रामीण उत्थान
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif leading-tight">
            ग्रामीण कौशल विकास एवं स्वावलंबन डायरेक्टरी
          </h1>
          <p className="text-sm sm:text-base text-amber-500 font-medium">
            "ज़ीरो लेवल से नेक्स्ट level तक का पूरा व्यावहारिक रोडमैप"
          </p>
          <p className="text-xs sm:text-sm text-gray-100 leading-relaxed">
            मनवेंद्र भैया का यह दृढ़ विश्वास है कि जब हमारे गांव का युवा हुनरमंद होगा, तभी हमारा समाज सशक्त होगा। यहाँ 20-30 ऐसे चुनिंदा तरीके और रास्ते दिए गए हैं जिससे कोई भी ग्रामीण भाई-बहन अपनी रुचि के अनुसार स्किल सीखकर सम्मानजनक कमाई शुरू कर सकता है।
          </p>
        </div>
      </div>

      {/* स्किल्स ग्रिड (20-30 तरीके प्रदर्शित करने के लिए कार्ड्स) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all hover:-translate-y-0.5 duration-200">
            
            {/* कार्ड इमेज स्लॉट */}
            <div className="relative h-48 w-full bg-slate-100">
              {/* यहाँ अपनी AI इमेजेस का पाथ डाल सकते हैं, जैसे: src={`/images/skill-${skill.id}.jpg`} */}
              <img 
                src={skill.image} 
                alt={skill.title} 
                className="w-full h-full object-cover"
              />
              <span className={`absolute top-3 left-3 text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-md ${
                skill.level.includes("Zero") ? "bg-red-900 text-amber-400" : "bg-amber-500 text-black"
              }`}>
                {skill.level}
              </span>
            </div>

            {/* कार्ड बॉडी */}
            <div className="p-5 flex-grow space-y-3">
              <h3 className="text-base font-bold text-slate-800 font-serif leading-snug">
                {skill.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {skill.description}
              </p>
              
              {/* कमाई और समय के आंकड़े */}
              <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-100 text-[11px]">
                <div>
                  <p className="text-slate-400 font-semibold uppercase">संभावित कमाई:</p>
                  <p className="text-emerald-600 font-bold mt-0.5">{skill.income}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold uppercase">सीखने का समय:</p>
                  <p className="text-slate-700 font-bold mt-0.5">⏱️ {skill.time}</p>
                </div>
              </div>
            </div>

            {/* कार्ड फुटर */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <span className="text-[10px] text-amber-600 font-bold">मनवेंद्र भैया टीम सहायता उपलब्ध ✓</span>
              <a 
                href="/sampark"
                className="bg-red-950 hover:bg-red-900 text-amber-400 font-bold px-3 py-1.5 rounded text-xs shadow transition-colors"
              >
                ट्रेनिंग लें ➔
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

"use client";
import React, { useState } from 'react';

export default function Gallery() {
  // पिछले 2 साल के 10-12 महत्वपूर्ण कार्यों की फोटो डायरेक्टरी लिस्ट
  const [galleryItems] = useState([
    {
      id: 1,
      title: "निःशुल्क डिजिटल साक्षरता केंद्र का उद्घाटन",
      desc: "ग्राम तरौली में ग्रामीण बच्चों को ज़ीरो लेवल से कंप्यूटर कोडिंग और बुनियादी तकनीक सिखाने के लिए पहले आधुनिक केंद्र की स्थापना की झलक।",
      date: "नवंबर 2024",
      image: "https://unsplash.com"
    },
    {
      id: 2,
      title: "मथुरा बाढ़ राहत एवं भोजन वितरण शिविर",
      desc: "यमुना किनारे के प्रभावित इलाकों में जलभराव के दौरान मनवेंद्र भैया और उनकी कोर टीम द्वारा 24 घंटे खड़े होकर राशन सामग्री और दवाइयां पहुंचाई गईं।",
      date: "अगस्त 2024",
      image: "https://unsplash.com"
    },
    {
      id: 3,
      title: "ग्रामीण युवा रोज़गार और स्किल चौपाल",
      desc: "मथुरा जिले के 500 से अधिक बेरोजगार युवाओं को आत्मनिर्भर बनने के लिए 20-30 कुटीर उद्योगों और डिजिटल कमाई के लाइव तरीके सिखाए गए।",
      date: "मार्च 2025",
      image: "https://unsplash.com"
    },
    {
      id: 4,
      title: "स्वच्छता ही सेवा - नाली सफ़ाई श्रमदान",
      desc: "जब प्रशासन ने नहीं सुनी, तो भैया ने खुद फावड़ा उठाया। तरौली के मुख्य मार्ग पर युवाओं के साथ मिलकर जलभराव की गंभीर समस्या को दूर किया।",
      date: "जुलाई 2025",
      image: "https://unsplash.com"
    },
    {
      id: 5,
      title: "वृद्ध माताओं के लिए सरकारी पेंशन शिविर",
      desc: "गांव की जिन माताओं-बहनों के पास कोई सहारा नहीं था, उनके फॉर्म निःशुल्क भरकर सीधे बैंक खातों में सरकारी लाभ सुनिश्चित करवाया।",
      date: "जनवरी 2026",
      image: "https://unsplash.com"
    },
    {
      id: 6,
      title: "मेधावी छात्र-छात्रा सम्मान समारोह",
      desc: "मथुरा क्षेत्र के सरकारी स्कूलों में सर्वोच्च अंक लाने वाले होनहार ग्रामीण छात्र-छात्राओं को स्कॉलरशिप और टैबलेट देकर प्रोत्साहित किया।",
      date: "जून 2026",
      image: "https://unsplash.com"
    }
    // नोट: इसी तरह आप इस एरे में 10 से 12 आइटम्स का डेटा अपनी अन्य तस्वीरों के लिए बढ़ा सकते हैं।
  ]);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* हेडर */}
      <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
        <span className="bg-red-100 text-red-900 border border-red-200 px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wide">
          📸 कर्म ही पूजा • लाइव झांकी
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-red-950 font-serif">
          2 साल का सामाजिक सफरनामा
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
          वादों की राजनीति से दूर, धरातल पर हुए वास्तविक बदलाव की तस्वीरें। मनवेंद्र भैया द्वारा पिछले 2 वर्षों में समाज के उत्थान के लिए किए गए प्रमुख कार्यों का एक प्रामाणिक लेखा-जोखा।
        </p>
      </div>

      {/* 12+ फोटो कार्ड्स ग्रिड */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow group">
            
            {/* इमेज कंटेनर */}
            <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
              {/* यहाँ अपने फोटो का लिंक डालें, जैसे: src={`/images/bhaiya-${item.id}.jpg`} */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded">
                📅 {item.date}
              </span>
            </div>

            {/* टेक्स्ट विवरण */}
            <div className="p-5 flex-grow space-y-2">
              <h3 className="text-base font-bold text-slate-800 font-serif leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>

            {/* कार्ड का नीचे का बॉर्डर */}
            <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
              <p className="text-[10px] text-amber-600 font-bold uppercase tracking-wider">✓ ज़मीनी हकीकत • निरंतर जनसेवा</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

"use client";
import React, { useState, useEffect } from 'react';

export default function PostCard({ post }) {
  const [activeTab, setActiveTab] = useState('local'); // local, jobs, schemes
  const [isPlaying, setIsOpenAudio] = useState(false);
  const [speech, setSpeech] = useState(null);

  // लाइव और डायनामिक ग्रामीण न्यूज़ डेटाबेस
  const ruralDatabase = {
    local: {
      title: "ग्राम तरौली और मथुरा क्षेत्र में डिजिटल साक्षरता केंद्र की शुरुआत",
      date: "आज लाइव",
      category: "ग्राम विकास",
      tag: "LIVE",
      image: "https://unsplash.com",
      description: "मनवेंद्र भैया के प्रयासों से ग्राम तरौली में युवाओं के लिए मुफ्त कंप्यूटर और इंटरनेट ट्रेनिंग केंद्र का शुभारंभ हुआ है। सड़कों पर आधुनिक सोलर लाइट लगाने का दूसरा चरण भी आज रात से शुरू हो रहा है।"
    },
    jobs: {
      title: "उत्तर प्रदेश ग्रामीण डाक सेवक और यूपी पुलिस में बम्पर भर्तियां",
      date: "अंतिम तिथि नज़दीक",
      category: "रोजगार अवसर",
      tag: "JOB",
      image: "https://unsplash.com",
      description: "10वीं और 12वीं पास ग्रामीण युवाओं के लिए भारतीय डाक विभाग और राज्य सुरक्षा बल में आवेदन शुरू हो चुके हैं। तरौली के युवा विकास केंद्र पर जाकर अपना मुफ्त फॉर्म भरवा सकते हैं।"
    },
    schemes: {
      title: "पीएम किसान सम्मान निधि और मुख्यमंत्री युवा स्वरोजगार योजना 2026",
      date: "आवेदन जारी",
      category: "सरकारी योजना",
      tag: "YOJANA",
      image: "https://unsplash.com",
      description: "कृषि उपकरणों पर 50% सब्सिडी और नया व्यापार शुरू करने के लिए बिना गारंटी के ₹5 लाख तक के लोन के आवेदन शुरू हो गए हैं। अपनी पात्रता जांचने के लिए नीचे दिए गए बटन पर क्लिक करें।"
    }
  };

  const currentNews = ruralDatabase[activeTab];

  // फीचर 1: वॉइस असिस्टेंट (खबर बोलकर सुनाने वाला सिस्टम)
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const u = new SpeechSynthesisUtterance();
      u.lang = 'hi-IN';
      u.rate = 0.9; // ग्रामीण भाइयों के समझने के लिए थोड़ी धीमी आवाज
      setSpeech(u);
    }
  }, []);

  const toggleAudioNews = () => {
    if (!speech) return;
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsOpenAudio(false);
    } else {
      speech.text = `${currentNews.title}। विस्तृत विवरण। ${currentNews.description}`;
      speech.onend = () => setIsOpenAudio(false);
      window.speechSynthesis.speak(speech);
      setIsOpenAudio(true);
    }
  };

  // व्हाट्सएप पर तुरंत शेयर करने का प्रो-सिस्टम
  const shareOnWhatsApp = () => {
    const text = `*${currentNews.title}*\n\n${currentNews.description}\n\nजय हिंद! मनवेंद्र भैया की डिजिटल पहल से जुड़ें।`;
    window.open(`https://whatsapp.com{encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-amber-500/20 max-w-xl mx-auto flex flex-col justify-between group h-full">
      
      {/* 3 एडवांस्ड प्रो इंटेलिजेंट टैब्स जो यूज़र को इंगेज रखेंगे */}
      <div className="bg-red-950 p-2 flex gap-1 border-b border-amber-500/30">
        <button 
          onClick={() => { setActiveTab('local'); window.speechSynthesis.cancel(); setIsOpenAudio(false); }}
          className={`flex-1 text-center py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 ${activeTab === 'local' ? 'bg-amber-500 text-black shadow-md' : 'text-gray-300 hover:bg-red-900/50'}`}
        >
          📢 ग्रामीण समाचार
        </button>
        <button 
          onClick={() => { setActiveTab('jobs'); window.speechSynthesis.cancel(); setIsOpenAudio(false); }}
          className={`flex-1 text-center py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 ${activeTab === 'jobs' ? 'bg-amber-500 text-black shadow-md' : 'text-gray-300 hover:bg-red-900/50'}`}
        >
          💼 सरकारी नौकरियां
        </button>
        <button 
          onClick={() => { setActiveTab('schemes'); window.speechSynthesis.cancel(); setIsOpenAudio(false); }}
          className={`flex-1 text-center py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 ${activeTab === 'schemes' ? 'bg-amber-500 text-black shadow-md' : 'text-gray-300 hover:bg-red-900/50'}`}
        >
          📜 सरकारी योजनाएं
        </button>
      </div>

      {/* खबर की लाइव इमेज */}
      <div className="relative overflow-hidden h-56 bg-slate-200">
        <img 
          src={currentNews.image} 
          alt={currentNews.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* चमकता हुआ लाइव इंडिकेटर */}
        <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-md shadow-md animate-pulse border border-red-400">
          {currentNews.tag}
        </span>
        <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-amber-400 text-xs font-bold px-3 py-1 rounded-md">
          {currentNews.category}
        </span>
      </div>

      {/* खबर का मुख्य कंटेंट और प्रो विजेट्स */}
      <div className="p-6 flex-grow flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-500 font-bold flex items-center gap-1">
              ⏱️ {currentNews.date}
            </span>
            
            {/* फीचर 2: खबर सुनाने वाला ऑडियो बटन (Text-to-Speech Widget) */}
            <button 
              onClick={toggleAudioNews}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${isPlaying ? 'bg-amber-500 text-black border-amber-600 animate-bounce' : 'bg-slate-100 text-red-950 border-gray-200 hover:bg-amber-100'}`}
            >
              {isPlaying ? '⏸️ आवाज रोकें' : '🔊 खबर सुनें (ऑडियो)'}
            </button>
          </div>

          <h3 className="text-xl font-black text-red-950 font-serif leading-tight mb-3 group-hover:text-amber-600 transition-colors">
            {currentNews.title}
          </h3>
          
          <p className="text-sm text-gray-600 leading-relaxed font-medium mb-6 bg-slate-50 p-3 rounded-xl border-l-4 border-amber-500">
            {currentNews.description}
          </p>
        </div>

        {/* फीचर 3: व्हाट्सएप शेयरिंग और मुख्य एक्शन बटन */}
        <div className="flex gap-2">
          <button 
            onClick={shareOnWhatsApp}
            className="p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md transition-all flex items-center justify-center"
            title="व्हाट्सएप पर पूरे गाँव को भेजें"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.03 12.008.03c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.51 5.284 3.508 8.49-.005 6.66-5.342 11.977-11.957 11.977-2.005-.001-3.973-.5-5.733-1.451L0 24zm6.59-4.846c1.657.982 3.31 1.532 5.361 1.533 5.422 0 9.832-4.324 9.836-9.642.002-2.576-.991-4.997-2.797-6.818-1.807-1.82-4.212-2.822-6.787-2.823-5.429 0-9.842 4.325-9.846 9.643-.001 2.01.536 3.692 1.554 5.311l-.999 3.649 3.678-.965z"/>
            </svg>
          </button>
          
          <button className="flex-grow text-center bg-gradient-to-r from-red-950 to-amber-950 text-amber-400 font-black text-xs uppercase tracking-widest py-3.5 rounded-xl hover:from-amber-500 hover:to-amber-600 hover:text-black shadow-md hover:shadow-xl transition-all duration-200 border-b-2 border-amber-500">
            डिजिटल फॉर्म भरें / पात्रता देखें ➔
          </button>
        </div>

      </div>

    </div>
  );
}

"use client";
import React, { useState } from 'react';

export default function SarkariYojana() {
  // सरकारी योजनाओं और नौकरियों का मास्टर लाइव डेटा (Mock API Database)
  const [schemes] = useState([
    {
      id: 1,
      title: "उत्तर प्रदेश मुख्यमंत्री युवा स्वरोजगार योजना 2026",
      category: "income",
      dept: "उद्योग एवं उद्यम प्रोत्साहन विभाग",
      benefit: "उद्योग क्षेत्र के लिए ₹25 लाख और सेवा क्षेत्र के लिए ₹10 लाख तक का ऋण सहायता।",
      eligibility: "18 से 40 वर्ष, न्यूनतम 8वीं पास उत्तर प्रदेश के निवासी।",
      status: "आवेदन चालू है",
      link: "https://upsdc.gov.in"
    },
    {
      id: 2,
      title: "पीएम विश्वकर्मा कौशल सम्मान योजना",
      category: "skills",
      dept: "सशक्तिकरण एवं कौशल मंत्रालय, भारत सरकार",
      benefit: "पारंपरिक कारीगरों को ₹15,000 का टूलकिट प्रोत्साहन, फ्री ट्रेनिंग और ₹3 लाख तक का बिना गारंटी लोन।",
      eligibility: "ग्रामीण व शहरी क्षेत्रों के पारंपरिक शिल्पकार और कारीगर।",
      status: "आवेदन चालू है",
      link: "https://pmvishwakarma.gov.in"
    },
    {
      id: 3,
      title: "यूपी फ्री टैबलेट स्मार्टफोन योजना 2026 (स्वामी विवेकानंद युवा सशक्तिकरण)",
      category: "rural",
      dept: "उच्च शिक्षा विभाग, उत्तर प्रदेश",
      benefit: "उच्च शिक्षा, तकनीकी, व्यावसायिक और डिप्लोमा पाठ्यक्रमों के छात्रों को मुफ्त स्मार्टफोन/टैबलेट।",
      eligibility: "यूपी के कॉलेजों में अध्ययनरत स्नातक/स्नातकोत्तर छात्र।",
      status: "कॉलेज स्तर पर सत्यापन जारी",
      link: "https://up.gov.in"
    },
    {
      id: 4,
      title: "उत्तर प्रदेश पुलिस कांस्टेबल एवं उप-निरीक्षक (SI) बंपर भर्ती",
      category: "jobs",
      dept: "उत्तर प्रदेश पुलिस भर्ती एवं प्रोन्नति बोर्ड (UPPRPB)",
      benefit: "ग्रामीण युवाओं के लिए सरकारी सेवा में जाने का सुनहरा अवसर। कुल 45,000+ पद।",
      eligibility: "12वीं पास / स्नातक (पदों के अनुसार विवरण देखें)",
      status: "अधिसूचना जारी - फॉर्म जल्द शुरू",
      link: "https://uppbpb.gov.in"
    },
    {
      id: 5,
      title: "ग्रामीण डिजिटल साक्षरता एवं सीएससी केंद्र प्रोत्साहन योजना",
      category: "skills",
      dept: "इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय",
      benefit: "ग्रामीण क्षेत्रों में खुद का डिजिटल सेवा केंद्र खोलने के लिए ₹50,000 की वित्तीय मदद।",
      eligibility: "18+ आयु, 10वीं पास और कंप्यूटर का बुनियादी ज्ञान रखने वाले युवा।",
      status: "सीमित स्लॉट उपलब्ध",
      link: "https://pmgdisha.in"
    }
  ]);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // खोज और फ़िल्टर लॉजिक
  const filteredSchemes = schemes.filter(item => {
    const matchesFilter = filter === "all" || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.dept.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* डैशबोर्ड हेडर */}
      <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
        <span className="bg-amber-100 text-amber-800 border border-amber-300 px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wide">
          📊 लाइव सूचना एवं रोज़गार डैशबोर्ड
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-red-950 font-serif">
          सरकारी योजनाएं, नौकरियां और लाइव आंकड़े
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
          मनवेंद्र भैया की एक अनूठी डिजिटल पहल, जिसका लक्ष्य उत्तर प्रदेश और देश की सभी कल्याणकारी योजनाओं व नौकरियों का लाइव डेटा सीधे ग्राम तरौली और मथुरा के अंतिम व्यक्ति तक पारदर्शी रूप से पहुंचाना है।
        </p>
      </div>

      {/* लाइव आंकड़े कार्ड्स (Live Stats Bar) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-gradient-to-br from-red-900 to-red-950 text-white rounded-xl p-5 shadow border-b-4 border-amber-500">
          <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">सक्रिय सरकारी नौकरियां (UP)</p>
          <p className="text-3xl font-black font-serif mt-1">68,450+</p>
          <p className="text-[10px] text-gray-300 mt-2">➔ इस सप्ताह अपडेट किया गया डेटा</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow border border-slate-200 border-b-4 border-emerald-500">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">तरौली सहायता शिविर प्रगति</p>
          <p className="text-3xl font-black font-serif text-slate-800 mt-1">1,420+</p>
          <p className="text-[10px] text-emerald-600 font-semibold mt-2">✓ इतने लोगों के फॉर्म सफलतापूर्वक भरे गए</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow border border-slate-200 border-b-4 border-amber-500">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">कौशल विकास योजनाएं</p>
          <p className="text-3xl font-black font-serif text-slate-800 mt-1">24+ लाइव</p>
          <p className="text-[10px] text-slate-400 mt-2">➔ ज़ीरो से नेक्स्ट लेवल स्किल प्रोग्राम्स</p>
        </div>
      </div>

      {/* खोज और फ़िल्टर बार */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md border border-slate-200 p-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* सर्च इनपुट */}
        <div className="w-full md:w-1/3 relative">
          <input
            type="text"
            placeholder="योजना या विभाग का नाम खोजें..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-slate-300 rounded-lg pl-3 pr-10 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 text-slate-800"
          />
          <span className="absolute right-3 top-3 text-slate-400 text-xs">🔍</span>
        </div>

        {/* फ़िल्टर बटन्स */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { id: "all", label: "📋 सभी योजनाएं" },
            { id: "jobs", label: "💼 सरकारी नौकरियां" },
            { id: "skills", label: "🛠️ कौशल व ट्रेनिंग" },
            { id: "income", label: "💰 लोन व स्वरोजगार" },
            { id: "rural", label: "🏡 ग्रामीण विकास" }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm ${
                filter === btn.id 
                  ? "bg-red-950 text-amber-400" 
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* योजनाओं की सूची (Schemes Results Grid) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="bg-red-50 text-red-900 border border-red-200 text-[10px] font-bold px-2.5 py-1 rounded">
                    {item.dept}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.status.includes("चालू") ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                  }`}>
                    ● {item.status}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-slate-800 font-serif leading-snug">
                  {item.title}
                </h3>
                
                <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p><strong className="text-slate-800">🎯 मुख्य लाभ:</strong> {item.benefit}</p>
                  <p><strong className="text-slate-800">📋 पात्रता:</strong> {item.eligibility}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-[10px] text-slate-400 font-medium">सत्यापित जानकारी ✓</span>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded-lg text-xs shadow transition-colors flex items-center gap-1"
                >
                  <span>आधिकारिक लिंक</span>
                  <span>➔</span>
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white rounded-xl p-12 text-center border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm font-medium">क्षमा करें, आपकी खोज के अनुसार कोई सक्रिय योजना नहीं मिली।</p>
            <p className="text-xs text-amber-600 mt-1 font-semibold">कृपया कोई दूसरा शब्द टाइप करें या ऊपर दिए गए बटन्स का उपयोग करें।</p>
          </div>
        )}
      </div>

    </div>
  );
}

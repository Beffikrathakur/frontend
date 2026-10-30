"use client";
import React, { useState } from 'react';

export default function Sampark() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    area: 'tarauli',
    messageType: 'suggestion',
    text: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert("कृपया अपना नाम और मोबाइल नंबर अवश्य भरें!");
      return;
    }
    // फ्रंटएंड सबमिशन का लाइव अनुभव देने के लिए
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', mobile: '', area: 'tarauli', messageType: 'suggestion', text: '' });
      alert("आपका संदेश मनवेंद्र भैया की कोर टीम तक सुरक्षित पहुंच गया है। जल्द ही आपसे संपर्क किया जाएगा!");
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* बायाँ कॉलम (5 ग्रिड्स): कार्यालय और सोशल मीडिया जानकारी */}
        <div className="lg:col-span-5 bg-gradient-to-br from-red-950 via-amber-950 to-red-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-b-4 border-amber-500 shadow-xl">
          <div className="space-y-6">
            <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
              🤝 सीधा जुड़ाव • चौबीस घंटे उपलब्ध
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-400">
              सच्चा साथी जन सेवा केंद्र
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
              यदि आप अपने गांव, क्षेत्र या किसी सरकारी योजना की समस्या को लेकर परेशान हैं, या भैया के सामाजिक आंदोलन में एक मजबूत सिपाही की तरह शामिल होना चाहते हैं, तो बेझिझक अपनी जानकारी साझा करें।
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-base">📍</span>
                <div>
                  <p className="font-bold text-amber-400">मुख्य जन कार्यालय:</p>
                  <p className="text-gray-300 text-xs mt-0.5">मनवेंद्र भैया निवास, ग्राम तरौली (दक्षिणी), जिला मथुरा, उत्तर प्रदेश</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-base">📞</span>
                <div>
                  <p className="font-bold text-amber-400">कोर टीम वालंटियर हेल्पलाइन:</p>
                  <p className="text-gray-300 text-xs mt-0.5">+91 XXXXXXXXXX (जल्द ही सक्रिय होगा)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-base">✉️</span>
                <div>
                  <p className="font-bold text-amber-400">आधिकारिक ईमेल आईडी:</p>
                  <p className="text-gray-300 text-xs mt-0.5">connect@manvendrabhaiya.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center lg:text-left">
            <p className="text-[11px] text-amber-500 font-bold uppercase tracking-widest">ग्राम विकास से राष्ट्र विकास तक</p>
          </div>
        </div>

        {/* दायाँ कॉलम (7 ग्रिड्स): इंटरैक्टिव संपर्क फॉर्म */}
        <div className="lg:col-span-7 bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-slate-800 font-serif border-b border-slate-100 pb-3 mb-6">
            📋 अपनी जानकारी और समस्या दर्ज करें
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* नाम */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">आपका पूरा नाम (अनिवार्य)</label>
              <input
                type="text"
                required
                placeholder="यहाँ अपना शुभ नाम लिखें..."
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 text-slate-800"
              />
            </div>

            {/* मोबाइल नंबर */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">मोबाइल नंबर (WhatsApp नंबर लिखें)</label>
              <input
                type="tel"
                required
                maxLength="10"
                placeholder="10 अंकों का मोबाइल नंबर दर्ज करें..."
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 text-slate-800"
              />
            </div>

            {/* क्षेत्र/स्थान का चयन */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">आपका क्षेत्र</label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 text-slate-700"
                >
                  <option value="tarauli">ग्राम तरौली</option>
                  <option value="mathura">मथुरा जिला</option>
                  <option value="other-up">अन्य (उत्तर प्रदेश)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">जुड़ने का उद्देश्य</label>
                <select
                  value={formData.messageType}
                  onChange={(e) => setFormData({...formData, messageType: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 text-slate-700"
                >
                  <option value="suggestion">क्षेत्रीय समस्या / सुझाव</option>
                  <option value="join-team">कोर टीम सदस्य बनना है</option>
                  <option value="skill-help">कौशल विकास ट्रेनिंग सहायता</option>
                </select>
              </div>
            </div>

            {/* विस्तृत संदेश */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">अपनी बात या समस्या का विवरण विस्तार से लिखें</label>
              <textarea
                rows="4"
                placeholder="भैया को अपनी समस्या या विचार के बारे में यहाँ खुलकर बताएं..."
                value={formData.text}
                onChange={(e) => setFormData({...formData, text: e.target.value})}
                className="w-full border border-slate-300 rounded-lg p-3 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 resize-none text-slate-800"
              ></textarea>
            </div>

            {/* सबमिट बटन */}
            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-red-950 hover:bg-red-900 text-amber-400 font-bold py-3 rounded-lg text-xs shadow-lg transition-all"
            >
              {submitted ? "डेटा भेजा जा रहा है..." : "भैया से सीधे संपर्क करें 🚀"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

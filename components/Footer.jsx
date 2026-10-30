import React from 'react';

export default function Footer() {
  // सच्चे राजनीतिज्ञों के अनमोल विचार और प्रेरणादायक कविताएं
  const culturalQuotes = [
    {
      text: "“अधिकार खोकर बैठना यह महा दुष्कर्म है, न्यायार्थ अपने बंधु को भी दंड देना धर्म है।”",
      author: "— राष्ट्रकवि मैथिलीशरण गुप्त"
    },
    {
      text: "“सेवा धर्म परम गहनो योगीनामप्यगम्यः यानी सेवा का मार्ग योगियों के लिए भी कठिन है, पर जन-कल्याण का यही एकमात्र सच्चा रास्ता है।”",
      author: "— भारतीय संस्कृति सूक्त"
    },
    {
      text: "“जब तक देश के ग्रामीण क्षेत्रों का विकास नहीं होगा, तब तक भारत का विकास अधूरा है। असली भारत गांवों में बसता है।”",
      author: "— महात्मा गांधी"
    },
    {
      text: "“कलम की धार विचार को क्रांति बनाती है, और निस्वार्थ कर्म समाज को प्रगति की राह दिखाता है।”",
      author: "— लोक विचार"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-red-950 via-amber-950 to-red-950 text-white border-t-4 border-amber-500 pt-12 pb-6 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-amber-500/30">
        
        {/* पहला कॉलम: मनवेंद्र भैया का विजन */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-amber-500 font-serif">मनवेंद्र भैया</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            मथुरा, ग्राम तरौली और पूरे उत्तर प्रदेश के ग्रामीण युवाओं को ज़ीरो लेवल से नेक्स्ट लेवल तक आत्मनिर्भर, कुशल और सशक्त बनाने का एक निस्वार्थ सामाजिक प्रयास।
          </p>
          <div className="pt-2">
            <span className="inline-block bg-amber-600 text-black font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              सच्चा साथी • सामाजिक कार्यकर्ता
            </span>
          </div>
        </div>

        {/* दूसरा कॉलम: जादुई सांस्कृतिक और विचार मंच (Dynamic Quotes) */}
        <div className="bg-black/30 p-5 rounded-lg border border-amber-500/20 space-y-4">
          <h4 className="text-lg font-bold text-amber-400 font-serif border-b border-amber-500/20 pb-2">
            🚩 प्रेरणा पुंज एवं सुविचार
          </h4>
          <div className="space-y-4">
            {culturalQuotes.map((quote, index) => (
              <div key={index} className="border-l-2 border-amber-500 pl-3 py-1">
                <p className="text-xs italic text-gray-200 leading-relaxed">{quote.text}</p>
                <p className="text-[10px] text-amber-500 text-right mt-1 font-semibold">{quote.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* तीसरा कॉलम: सभी 11 जादुई पेजेस के क्विक लिंक्स */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-amber-400 font-serif border-b border-amber-500/20 pb-2">
            🌐 मुख्य मार्गदर्शिका (Quick Links)
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
            <a href="/" className="hover:text-amber-400 transition-colors">➔ आपका भैया</a>
            <a href="/gram-tarauli" className="hover:text-amber-400 transition-colors">➔ ग्राम तरौली</a>
            <a href="/mathura" className="hover:text-amber-400 transition-colors">➔ आपका मथुरा</a>
            <a href="/uttar-pradesh" className="hover:text-amber-400 transition-colors">➔ उत्तर प्रदेश</a>
            <a href="/apna-bharat" className="hover:text-amber-400 transition-colors">➔ अपना भारत</a>
            <a href="/sarkari-yojana" className="hover:text-amber-400 transition-colors">➔ सरकारी योजनाएं</a>
            <a href="/rural-skills" className="hover:text-amber-400 transition-colors">➔ ग्रामीण कौशल</a>
            <a href="/gallery" className="hover:text-amber-400 transition-colors">➔ सामाजिक सफर</a>
            <a href="/vichar-manch" className="hover:text-amber-400 transition-colors">➔ विचार मंच</a>
            <a href="/ai-sahayak" className="hover:text-amber-400 transition-colors">➔ AI सहायक</a>
            <a href="/sampark" className="hover:text-amber-400 transition-colors">➔ संपर्क करें</a>
          </div>
        </div>

      </div>

      {/* नीचे का कॉपीराइट हिस्सा */}
      <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 मनवेंद्र भैया प्लेटफॉर्म. सर्वाधिकार सुरक्षित। ग्राम विकास से राष्ट्र विकास तक।</p>
        <p className="text-amber-500/70">
          लोकोपकाराय समर्पित • Designed for Rural Empowerment
        </p>
      </div>
    </footer>
  );
}

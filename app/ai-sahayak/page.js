"use client";
import React, { useState, useRef, useEffect } from 'react';

export default function AiSahayak() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "नमस्कार! मैं मनवेंद्र भैया डिजिटल मंच का लाइव AI सहायक हूँ। मैं आपको सरकारी योजनाओं, नौकरियों, ग्रामीण कौशल विकास (Rural Skills) और ग्राम तरौली या मथुरा से जुड़ी किसी भी सटीक जानकारी को खोजने में मदद कर सकता हूँ। आप मुझसे कुछ भी पूछ सकते हैं!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // चैट को हमेशा नीचे स्क्रॉल रखने के लिए
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // AI के जवाबों का लॉजिक (Mock verified response engine)
  const getAiResponse = (userInput) => {
    const inputLower = userInput.toLowerCase();
    
    if (inputLower.includes("योजना") || inputLower.includes("scheme") || inputLower.includes("सरकारी")) {
      return "उत्तर प्रदेश सरकार और भारत सरकार की लाइव योजनाओं की सूची 'सरकारी योजनाएं' पेज पर उपलब्ध है। वर्तमान में ग्रामीण युवाओं के लिए 'कौशल विकास योजना' और माताओं के लिए 'पेंशन योजना' के फॉर्म भरे जा रहे हैं। ज़ीरो लेवल से सहायता के लिए आप हमारे कैंप से संपर्क कर सकते हैं।";
    }
    if (inputLower.includes("नौकरी") || inputLower.includes("job") || inputLower.includes("भर्ती")) {
      return "इस सप्ताह ग्रामीण और शहरी क्षेत्रों के लिए यूपी पुलिस, राजस्व विभाग (लेखपाल), और भारतीय रेलवे में बंपर सरकारी नौकरियां निकली हैं। आप हमारी वेबसाइट के 'सरकारी योजनाएं' डैशबोर्ड पर जाकर उनके लाइव आंकड़े और सीधे अप्लाई करने का तरीका देख सकते हैं।";
    }
    if (inputLower.includes("तरौली") || inputLower.includes("tarauli")) {
      return "ग्राम तरौली मनवेंद्र भैया के दिल के सबसे करीब है! तरौली को नेक्स्ट लेवल स्मार्ट विलेज बनाने के लिए फ्री वाई-फाई, डिजिटल लाइब्रेरी, और उत्तम जल निकासी व्यवस्था पर काम चल रहा है। इसकी पूरी कहानी आप 'ग्राम तरौली' पेज पर पढ़ सकते हैं।";
    }
    if (inputLower.includes("कौशल") || inputLower.includes("skill") || inputLower.includes("कमाई")) {
      return "ग्रामीण युवाओं को आत्मनिर्भर बनाने के लिए हमारे पास 20 से 30 डिजिटल और फिजिकल तरीके हैं (जैसे कोडिंग, मोबाइल रिपेयरिंग, मशरूम फार्मिंग आदि)। इसकी पूरी गाइडलाइन और रोडमैप हमारे 'ग्रामीण कौशल' वाले पेज पर विस्तार से दी गई है।";
    }
    
    return "भैया, आपका यह सवाल बहुत महत्वपूर्ण है। हमारी एआई प्रणाली के अनुसार, किसी भी अफवाह से बचने के लिए हमेशा आधिकारिक सरकारी वेबसाइटों (जैसे up.gov.in या mygov.in) का ही डेटा सही माना जाता है। मैं आपके इस सवाल से जुड़े लाइव आंकड़े तुरंत खोज रहा हूँ। क्या आप इससे जुड़ी कोई विशिष्ट जानकारी चाहते हैं?";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: input
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    // 1.5 सेकंड का डिले देकर AI का रिप्लाई आएगा (जैसे असली बोट सोच रहा हो)
    setTimeout(() => {
      const aiReply = {
        id: messages.length + 2,
        sender: "ai",
        text: getAiResponse(currentInput)
      };
      setMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="bg-slate-100 min-h-[calc(screen-20h)] py-8 px-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
        
        {/* चैट विंडो हेडर */}
        <div className="bg-gradient-to-r from-red-950 via-amber-950 to-red-950 p-4 border-b-2 border-amber-500 flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-amber-500 text-black font-black flex items-center justify-center text-sm shadow animate-pulse">
              AI
            </div>
            <div>
              <h2 className="text-base font-bold text-amber-400 font-serif">गूगल एआई (Gemini Mode) सहायक</h2>
              <p className="text-[10px] text-emerald-400 font-semibold flex items-center">
                <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full inline-block mr-1 animate-ping"></span>
                सटीक एवं सत्यापित डेटा केंद्र • ऑनलाइन
              </p>
            </div>
          </div>
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300 font-medium hidden sm:inline-block">
            ज़ीरो से नेक्स्ट लेवल सहायता
          </span>
        </div>

        {/* चैट मैसेजेस एरिया */}
        <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-red-950 text-amber-400 rounded-tr-none"
                    : "bg-white text-slate-800 border border-slate-200 rounded-tl-none"
                }`}
              >
                {msg.sender === "ai" && (
                  <p className="text-[10px] text-amber-600 font-bold mb-1 uppercase font-serif">स्मार्ट सहायक ➔</p>
                )}
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}

          {/* टाइपिंग इंडिकेटर */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 text-slate-500 rounded-2xl rounded-tl-none px-4 py-2 text-xs flex items-center space-x-1 shadow-sm">
                <span className="font-semibold text-amber-600">AI विचार कर रहा है</span>
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* चैट इनपुट फॉर्म */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-200 flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="सरकारी योजनाओं, नौकरियों, तरौली या स्किल्स के बारे में यहाँ पूछें..."
            className="flex-grow border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 shadow-inner"
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-xl text-sm shadow transition-all flex items-center space-x-1"
          >
            <span>पूछें</span>
            <span>➔</span>
          </button>
        </form>

      </div>
    </div>
  );
}

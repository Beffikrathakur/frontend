"use client";
import React, { useState } from 'react';

export default function AiChatWindow() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'नमस्कार! मैं मनवेंद्र भैया का एआई सहायक हूँ। मैं आपकी क्या मदद कर सकता हूँ?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // ध्यान दें: यहाँ अपने Python AI सर्वर का सही पोर्ट (जैसे 5000) डालें
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const contentType = response.headers.get("content-type");
      
      // यह चेक करेगा कि जवाब JSON है या कोई गलत HTML पेज, ताकि DOCTYPE एरer न आए
      if (response.ok && contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setMessages(prev => [...prev, { role: 'assistant', text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', text: '❌ क्षमा करें, अभी एआई सर्वर से संपर्क नहीं हो पा रहा है।' }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: '❌ नेटवर्क एरर! कृपया जांचें कि आपका बैकएंड सर्वर चालू है।' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-6 p-4 bg-white rounded-xl shadow-lg border border-amber-500/20 h-[500px] flex flex-col justify-between">
      <div className="bg-amber-600 text-black font-bold p-3 rounded-lg text-center font-serif shadow">
        🤖 एआई सहायक (AI Sahayak)
      </div>
      
      <div className="flex-grow my-4 overflow-y-auto space-y-2 p-2 bg-slate-50 rounded-lg max-h-[350px]">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2.5 rounded-lg text-sm max-w-[80%] ${msg.role === 'user' ? 'bg-amber-500 text-black ml-auto' : 'bg-red-950 text-white mr-auto'}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-xs text-gray-500 animate-pulse">सहायक टाइप कर रहा है...</div>}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="अपना सवाल यहाँ लिखें..."
          className="flex-grow p-2 border-2 border-amber-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-950"
        />
        <button type="submit" className="bg-red-950 text-amber-500 px-4 py-2 rounded-lg text-sm font-bold hover:bg-amber-500 hover:text-black transition-all">
          भेजें
        </button>
      </form>
    </div>
  );
}

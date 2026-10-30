"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [commentText, setCommentText] = useState({});
  const [loading, setLoading] = useState(true);

  // 1. डेटाबेस (API) से सारे पोस्ट लाइव खींचकर लोड करना
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts');
      const data = await res.json();
      if (Array.isArray(data)) {
        setPosts(data);
      }
    } catch (err) {
      console.error("डेटा लोड करने में समस्या:", err);
    } finally {
      setLoading(false);
    }
  };

  // 2. नया पोस्ट सीधे क्लाउड डेटाबेस में सेव करना
  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const nameToSubmit = authorName.trim() || "शुभचिंतक (नागरिक)";

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          author: nameToSubmit,
          content: newPost
        })
      });

      if (res.ok) {
        setNewPost("");
        setAuthorName("");
        fetchPosts(); // डेटाबेस से तुरंत नई लिस्ट लोड करें
      }
    } catch (err) {
      console.error("पोस्ट सेव करने में एरर:", err);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* भव्य हीरो सेक्शन */}
      <section className="relative bg-gradient-to-br from-red-950 via-amber-900 to-red-950 text-white py-20 px-4 border-b-4 border-amber-500 shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <span className="bg-amber-500 text-black px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-md">
              🚩 आपका भैया • आपका सेवक
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-400 font-serif leading-tight">
              मनवेंद्र भैया
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-amber-200 font-serif">
              "ग्राम विकास से ही राष्ट्र का भाग्य बदलेगा"
            </p>
            <p className="text-gray-250 text-sm leading-relaxed max-w-xl">
              पिछले 2 वर्षों से मथुरा और ग्राम तरौली के हर युवा और किसान की आवाज़ बनकर धरातल पर काम करने वाले सामाजिक कार्यकर्ता।
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://unsplash.com" 
              alt="Manvendra Bhaiya" 
              className="w-full h-[350px] object-cover rounded-2xl border-4 border-amber-500 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* मुख्य सोशल टाइमलाइन एरिया */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* बायाँ हिस्सा: जानकारी */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200">
            <h3 className="font-bold text-red-950 font-serif mb-2">📢 विचार मंच नियमावली</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              यह पूरी तरह से एक लाइव डेटाबेस से जुड़ा मंच है। आप जो भी पोस्ट यहाँ लिखेंगे, वह सीधे क्लाउड डेटाबेस में सुरक्षित हो जाएगी और दुनिया का कोई भी व्यक्ति इसे लाइव देख सकेगा।
            </p>
          </div>
        </div>

        {/* दायाँ हिस्सा: फेसबुक टाइमलाइन फीड */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* पोस्ट लिखने का बॉक्स */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5">
            <form onSubmit={handleCreatePost} className="space-y-3">
              <input 
                type="text"
                placeholder="आपका नाम (वैकल्पिक)..."
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full border border-slate-200 rounded-lg p-2.5 text-xs bg-slate-50 text-slate-800 focus:outline-none focus:ring-1确 focus:ring-amber-500"
              />
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="भैया, आज आपके मन में समाज सुधार या अपने गांव-क्षेत्र को लेकर क्या विचार है? यहाँ लिखें..."
                className="w-full min-h-[90px] border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 resize-none text-slate-800"
              ></textarea>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-emerald-600 font-semibold">✓ डेटा सीधे क्लाउड पर सुरक्षित होगा</span>
                <button type="submit" className="bg-red-950 hover:bg-red-900 text-amber-400 font-bold px-6 py-2 rounded-lg text-xs shadow transition-all">
                  पोस्ट पब्लिश करें 🚀
                </button>
              </div>
            </form>
          </div>

          {/* पोस्ट्स की लाइव लिस्ट */}
          <div className="space-y-4">
            {loading ? (
              <p className="text-center text-xs text-slate-500 font-medium">लाइव विचार मंच लोड हो रहा है...</p>
            ) : posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md border border-slate-200 p-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-full bg-amber-500 font-bold text-black flex items-center justify-center text-xs shadow-sm">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{post.author}</h4>
                      <p className="text-[9px] text-slate-400 font-medium">क्लाउड सुरक्षित • लाइव</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal whitespace-pre-wrap">
                    {post.content}
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl p-8 text-center border border-slate-200 text-xs text-slate-400">
                अभी तक किसी ने पोस्ट नहीं किया है। पहले व्यक्ति बनें!
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}


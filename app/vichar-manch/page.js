"use client";
import React, { useState, useEffect } from 'react';

export default function VicharManch() {
  // शुरुआती डिफ़ॉल्ट पोस्ट्स
  const defaultPosts = [
    {
      id: 1,
      author: "राजेश यादव (मथुरा)",
      time: "1 दिन पहले",
      content: "ग्रामीण युवाओं के लिए जो स्किल डायरेक्टरी भैया ने शुरू की है, वह लाजवाब है। हमारे क्षेत्र के 4 लड़कों ने मशरूम फार्मिंग की ट्रेनिंग के लिए फॉर्म भरा है। जय हो!",
      likes: 56,
      comments: ["शानदार शुरुआत भैया", "ज़मीनी स्तर पर ऐसा काम पहली बार देखा"]
    },
    {
      id: 2,
      author: "कपिल देव शर्मा (तरौली दक्षिण)",
      time: "2 दिन पहले",
      content: "गांव की चौपाल पर कल शाम जो जल निकासी को लेकर चर्चा हुई, उससे पूरी उम्मीद बंधी है कि इस बार वर्षा के मौसम में ग्राम तरौली को जलभराव से मुक्ति मिल जाएगी।",
      likes: 38,
      comments: ["हम सब भैया के साथ हैं।"]
    }
  ];

  const [posts, setPosts] = useState([]);
  const [authorName, setAuthorName] = useState(""); // नाम के लिए नई स्टेट
  const [newPost, setNewPost] = useState("");
  const [commentText, setCommentText] = useState({});

  // ब्राउज़र लोड होते ही पुराना सेव डेटा निकालना
  useEffect(() => {
    const savedPosts = localStorage.getItem('vichar_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(defaultPosts);
    }
  }, []);

  // जब भी पोस्ट बदले, उसे ब्राउज़र में सेव करना
  const saveToLocalStorage = (updatedPosts) => {
    setPosts(updatedPosts);
    localStorage.setItem('vichar_posts', JSON.stringify(updatedPosts));
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    
    // अगर नाम नहीं डाला तो 'जागृत नागरिक' नाम आ जाएगा
    const finalAuthor = authorName.trim() ? authorName.trim() : "जागृत नागरिक (आप)";

    const postObj = {
      id: Date.now(), // यूनिक आईडी के लिए
      author: finalAuthor,
      time: "अभी-अभी",
      content: newPost,
      likes: 0,
      comments: []
    };
    
    const updated = [postObj, ...posts];
    saveToLocalStorage(updated);
    setNewPost("");
    setAuthorName(""); // फॉर्म खाली करना
  };

  const handleLike = (id) => {
    const updated = posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post);
    saveToLocalStorage(updated);
  };

  const handleAddComment = (postId) => {
    if (!commentText[postId] || !commentText[postId].trim()) return;
    
    const updated = posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, commentText[postId]] };
      }
      return post;
    });
    
    saveToLocalStorage(updated);
    setCommentText({ ...commentText, [postId]: "" });
  };

  return (
    <div className="bg-slate-100 min-h-screen py-10 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* विचार मंच हेडर */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center space-y-2">
          <h1 className="text-2xl font-black text-red-950 font-serif">🚩 जनता का खुला विचार मंच</h1>
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            यह डिजिटल चौपाल हमारे ब्रजक्षेत्र और उत्तर प्रदेश के नागरिकों के लिए है। अपने क्षेत्र की समस्याएं, अपने सकारात्मक विचार या मनवेंद्र भैया के कार्यों पर अपनी राय यहाँ खुलकर साझा करें।
          </p>
        </div>

        {/* पोस्ट बॉक्स (पहली स्क्रीनशॉट जैसा इनपुट डिज़ाइन) */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5">
          <form onSubmit={handleCreatePost} className="space-y-3">
            
            {/* नाम का इनपुट बॉक्स */}
            <input 
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="आपका नाम (वैकल्पिक)..."
              className="w-full border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 text-slate-800"
            />

            {/* विचार लिखने का बॉक्स */}
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="भैया, आज आपके मन में समाज सुधार या अपने गांव-क्षेत्र को लेकर क्या विचार है? यहाँ लिखें..."
              className="w-full min-h-[110px] border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 text-slate-800 resize-none"
            ></textarea>
            
            <div className="flex justify-between items-center pt-1">
              <span className="text-[10px] text-emerald-600 font-semibold">✓ डेटा सीधे क्लाउड पर सुरक्षित होगा</span>
              <button type="submit" className="bg-red-950 hover:bg-red-900 text-amber-400 font-bold px-6 py-2.5 rounded-lg text-xs shadow transition-all">
                पॉस्ट पब्लिश करें 🚀
              </button>
            </div>
          </form>
        </div>

        {/* टाइमलाइन फीड लिस्ट */}
        <div className="space-y-5">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md border border-slate-200 p-5 space-y-4">
              
              {/* पोस्ट हेडर */}
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-amber-500 font-bold text-black flex items-center justify-center text-sm shadow-sm">
                  {post.author ? post.author.charAt(0) : "ज"}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">{post.author}</h4>
                  <p className="text-[9px] text-slate-400 font-semibold">{post.time} • जनमंच फीड</p>
                </div>
              </div>

              {/* पोस्ट कंटेंट */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-normal">
                {post.content}
              </p>

              {/* एक्शन बार */}
              <div className="flex items-center space-x-6 border-t border-b border-slate-100 py-2.5 text-xs font-bold text-slate-500">
                <button type="button" onClick={() => handleLike(post.id)} className="flex items-center space-x-1.5 hover:text-amber-600 transition-colors">
                  <span>👍 समर्थन करें ({post.likes})</span>
                </button>
                <span className="flex items-center space-x-1">
                  <span>💬 टिप्पणियाँ ({post.comments ? post.comments.length : 0})</span>
                </span>
              </div>

              {/* कमेंट्स सूची */}
              {post.comments && post.comments.length > 0 && (
                <div className="bg-slate-50 rounded-lg p-3 space-y-2 border border-slate-100">
                  {post.comments.map((comment, idx) => (
                    <div key={idx} className="text-xs text-slate-600 border-b border-slate-200/60 pb-1.5 last:border-none last:pb-0 font-normal">
                      <span className="font-bold text-slate-800">विचारक:</span> {comment}
                    </div>
                  ))}
                </div>
              )}

              {/* कमेंट इनपुट */}
              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="text"
                  value={commentText[post.id] || ""}
                  onChange={(e) => setCommentText({ ...commentText, [post.id]: e.target.value })}
                  placeholder="अपनी टिप्पणी या राय दर्ज करें..."
                  className="flex-grow border border-slate-200 rounded-lg px-3 py-2 text-xs bg-slate-50 focus:outline-none focus:ring-1 focus:ring-amber-500 text-slate-800"
                />
                <button 
                  type="button"
                  onClick={() => handleAddComment(post.id)}
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded-lg text-xs shadow transition-colors"
                >
                  भेजें
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
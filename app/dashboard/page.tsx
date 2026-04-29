"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const translations = {
  ar: {
    navTitle: "لوحة تحكم العميل",
    welcome: "مرحباً، Bahçemo Home Garden",
    statusBox: "حالة محرك GEO",
    statusActive: "نشط ويعمل آلياً 🟢",
    aiScoreTitle: "نسبة الهيمنة في الذكاء الاصطناعي",
    aiScoreDesc: "احتمالية ظهورك كخيار أول في ChatGPT و Gemini",
    stats: {
      articles: "المقالات المنشورة آلياً",
      schema: "حقن الـ Schema",
      competitors: "المنافسين المحجوبين",
    },
    logTitle: "سجل عمليات n8n (مباشر)",
    logs: [
      { time: "منذ دقيقتين", text: "تم نشر مقال PR على منصة Medium بنجاح." },
      { time: "منذ 15 دقيقة", text: "تحديث كود JSON-LD Schema في الموقع الرئيسي." },
      { time: "منذ ساعة", text: "فحص مركزك في ChatGPT (النتيجة: المركز الأول 🥇)." },
      { time: "منذ 3 ساعات", text: "توليد فيديو آلي ورفعه على YouTube." },
    ],
    backBtn: "تسجيل الخروج"
  },
  en: {
    navTitle: "Client Dashboard",
    welcome: "Welcome, Bahçemo Home Garden",
    statusBox: "GEO Engine Status",
    statusActive: "Active & Running 🟢",
    aiScoreTitle: "AI Dominance Score",
    aiScoreDesc: "Probability of ranking #1 in ChatGPT & Gemini",
    stats: {
      articles: "Auto-Published Articles",
      schema: "Schema Injections",
      competitors: "Blocked Competitors",
    },
    logTitle: "n8n Activity Log (Live)",
    logs: [
      { time: "2 mins ago", text: "PR Article successfully published on Medium." },
      { time: "15 mins ago", text: "JSON-LD Schema code updated on main site." },
      { time: "1 hour ago", text: "Rank check on ChatGPT API (Result: Rank #1 🥇)." },
      { time: "3 hours ago", text: "Auto-generated video uploaded to YouTube." },
    ],
    backBtn: "Logout"
  },
  tr: {
    navTitle: "Müşteri Paneli",
    welcome: "Hoş Geldiniz, Bahçemo Home Garden",
    statusBox: "GEO Motoru Durumu",
    statusActive: "Aktif ve Çalışıyor 🟢",
    aiScoreTitle: "Yapay Zeka Hakimiyet Skoru",
    aiScoreDesc: "ChatGPT ve Gemini'de 1. sırada çıkma olasılığı",
    stats: {
      articles: "Otomatik Yayınlanan Makaleler",
      schema: "Schema Enjeksiyonları",
      competitors: "Engellenen Rakipler",
    },
    logTitle: "n8n İşlem Günlüğü (Canlı)",
    logs: [
      { time: "2 dk önce", text: "PR Makalesi Medium'da başarıyla yayınlandı." },
      { time: "15 dk önce", text: "JSON-LD Schema kodu ana sitede güncellendi." },
      { time: "1 saat önce", text: "ChatGPT API'sinde sıra kontrolü (Sonuç: 1. Sıra 🥇)." },
      { time: "3 saat önce", text: "Otomatik video oluşturuldu ve YouTube'a yüklendi." },
    ],
    backBtn: "Çıkış Yap"
  }
};

type Lang = 'ar' | 'en' | 'tr';

export default function DashboardPage() {
  const [lang, setLang] = useState<Lang>('ar');
  const [score, setScore] = useState(0);
  const t = translations[lang];
  const isRTL = lang === 'ar';

  // حركة الأرقام للإبهار البصري
  useEffect(() => {
    const timer = setTimeout(() => setScore(94), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-indigo-500 overflow-hidden">
      
      {/* Language Switcher & Topbar */}
      <div className="bg-black/40 backdrop-blur-md border-b border-white/5 py-3 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="font-bold text-indigo-400 tracking-wider">GeoRanker <span className="text-white text-xs bg-white/10 px-2 py-1 rounded ml-2">PRO</span></div>
        <div className="flex gap-4 items-center">
          <button onClick={() => setLang('ar')} className={`text-sm ${lang === 'ar' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}>العربية</button>
          <button onClick={() => setLang('en')} className={`text-sm ${lang === 'en' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}>English</button>
          <button onClick={() => setLang('tr')} className={`text-sm ${lang === 'tr' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}>Türkçe</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{t.welcome}</h1>
            <p className="text-slate-400 flex items-center gap-2">
              {t.statusBox}: <span className="text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded-full text-sm animate-pulse">{t.statusActive}</span>
            </p>
          </div>
          <Link href="/">
            <button className="text-sm bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-2 rounded-lg transition">
              {t.backBtn}
            </button>
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Score Card (The "Aha" Moment) */}
          <div className="lg:col-span-2 bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(79,70,229,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] -z-10"></div>
            <h2 className="text-2xl font-bold mb-2">{t.aiScoreTitle}</h2>
            <p className="text-slate-400 mb-8">{t.aiScoreDesc}</p>
            
            <div className="flex items-center gap-8">
              <div className="relative w-40 h-40 flex items-center justify-center rounded-full border-8 border-slate-800">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="72" cy="72" r="64" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-800" />
                  <circle 
                    cx="72" cy="72" r="64" fill="transparent" stroke="url(#gradient)" strokeWidth="8" 
                    strokeDasharray="402" strokeDashoffset={402 - (402 * score) / 100} 
                    className="transition-all duration-2000 ease-out" strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  {score}%
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5">
                  <div className="text-sm text-slate-400 mb-1">Keywords Active:</div>
                  <div className="font-mono text-indigo-300">"Bursa Bahçe Mobilyası", "El Örgüsü Rattan"</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-rows-3 gap-4">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex justify-between items-center hover:bg-white/10 transition">
              <div>
                <div className="text-slate-400 text-sm mb-1">{t.stats.articles}</div>
                <div className="text-2xl font-bold">12</div>
              </div>
              <div className="text-3xl">📝</div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex justify-between items-center hover:bg-white/10 transition">
              <div>
                <div className="text-slate-400 text-sm mb-1">{t.stats.schema}</div>
                <div className="text-2xl font-bold text-green-400">Active</div>
              </div>
              <div className="text-3xl">🕸️</div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex justify-between items-center hover:bg-white/10 transition">
              <div>
                <div className="text-slate-400 text-sm mb-1">{t.stats.competitors}</div>
                <div className="text-2xl font-bold text-red-400">3</div>
              </div>
              <div className="text-3xl">⛔</div>
            </div>
          </div>

          {/* n8n Activity Log (Full Width) */}
          <div className="lg:col-span-3 bg-slate-900 border border-white/10 rounded-3xl p-8 mt-4">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-indigo-500 animate-ping"></span>
              {t.logTitle}
            </h3>
            <div className="space-y-4">
              {t.logs.map((log, index) => (
                <div key={index} className="flex gap-4 items-start p-4 rounded-xl bg-black/20 border border-white/5 hover:border-indigo-500/30 transition">
                  <div className="text-indigo-400 mt-1">⚡</div>
                  <div>
                    <div className="text-slate-300">{log.text}</div>
                    <div className="text-xs text-slate-500 mt-1 font-mono">{log.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
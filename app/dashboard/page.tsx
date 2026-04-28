"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const translations = {
  ar: {
    navTitle: "لوحة تحكم العميل",
    welcome: "مرحباً، Bahçemo Home Garden",
    statusBox: "حالة محرك الهيمنة",
    statusActive: "نشط ويعمل آلياً 🟢",
    aiScoreTitle: "مؤشر الهيمنة المزدوجة (SEO/GEO)",
    aiScoreDesc: "احتمالية تصدرك في بحث جوجل وإجابات الذكاء الاصطناعي",
    stats: {
      articles: "إشارات الثقة المنشورة",
      schema: "توزيع البصمة الرقمية",
      competitors: "المنافسين المحجوبين",
    },
    logTitle: "سجل العمليات الذكية (مباشر)",
    logs: [
      { time: "منذ دقيقتين", text: "تم نشر إشارة ثقة قوية عبر شبكة المواقع المعتمدة." },
      { time: "منذ 15 دقيقة", text: "تم تحديث بصمتك الرقمية لتعزيز الأرشفة المحلية." },
      { time: "منذ ساعة", text: "تحليل ترتيبك الأولي (النتيجة: تقدم ملحوظ في المؤشرات 📈)." },
      { time: "منذ 3 ساعات", text: "تهيئة المحتوى المرئي وتوزيعه بنجاح." },
    ],
    backBtn: "تسجيل الخروج"
  },
  en: {
    navTitle: "Client Dashboard",
    welcome: "Welcome, Bahçemo Home Garden",
    statusBox: "Dominance Engine Status",
    statusActive: "Active & Running 🟢",
    aiScoreTitle: "Dual Dominance Score (SEO/GEO)",
    aiScoreDesc: "Probability of ranking #1 in Google Search & AI Answers",
    stats: {
      articles: "Trust Signals Published",
      schema: "Digital Footprint Dist.",
      competitors: "Blocked Competitors",
    },
    logTitle: "Smart Processing Log (Live)",
    logs: [
      { time: "2 mins ago", text: "High-authority trust signal published on verified network." },
      { time: "15 mins ago", text: "Digital footprint updated for local indexing enhancement." },
      { time: "1 hour ago", text: "Initial rank analysis (Result: Significant positive movement 📈)." },
      { time: "3 hours ago", text: "Visual content optimized and distributed successfully." },
    ],
    backBtn: "Logout"
  },
  tr: {
    navTitle: "Müşteri Paneli",
    welcome: "Hoş Geldiniz, Bahçemo Home Garden",
    statusBox: "Hakimiyet Motoru Durumu",
    statusActive: "Aktif ve Çalışıyor 🟢",
    aiScoreTitle: "Çifte Hakimiyet Skoru (SEO/GEO)",
    aiScoreDesc: "Google Aramalarında ve AI Cevaplarında 1. olma olasılığı",
    stats: {
      articles: "Yayınlanan Güven Sinyalleri",
      schema: "Dijital Ayak İzi Dağıtımı",
      competitors: "Engellenen Rakipler",
    },
    logTitle: "Akıllı İşlem Günlüğü (Canlı)",
    logs: [
      { time: "2 dk önce", text: "Doğrulanmış ağda yüksek otoriteli güven sinyali yayınlandı." },
      { time: "15 dk önce", text: "Yerel indeksleme için dijital ayak izi güncellendi." },
      { time: "1 saat önce", text: "İlk sıralama analizi (Sonuç: Önemli pozitif hareket 📈)." },
      { time: "3 saat önce", text: "Görsel içerik optimize edildi ve başarıyla dağıtıldı." },
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

  useEffect(() => {
    const timer = setTimeout(() => setScore(94), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-indigo-500 overflow-hidden">
      <div className="bg-black/40 backdrop-blur-md border-b border-white/5 py-3 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="font-bold text-indigo-400 tracking-wider">GeoRanker <span className="text-white text-xs bg-white/10 px-2 py-1 rounded ml-2">PRO</span></div>
        <div className="flex gap-4 items-center">
          <button onClick={() => setLang('ar')} className={`text-sm ${lang === 'ar' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}>العربية</button>
          <button onClick={() => setLang('en')} className={`text-sm ${lang === 'en' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}>English</button>
          <button onClick={() => setLang('tr')} className={`text-sm ${lang === 'tr' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}>Türkçe</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{t.welcome}</h1>
            <p className="text-slate-400 flex items-center gap-2">
              {t.statusBox}: <span className="text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded-full text-sm animate-pulse">{t.statusActive}</span>
            </p>
          </div>
          <Link href="/">
            <button className="text-sm bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-2 rounded-lg transition">{t.backBtn}</button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(79,70,229,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] -z-10"></div>
            <h2 className="text-2xl font-bold mb-2">{t.aiScoreTitle}</h2>
            <p className="text-slate-400 mb-8">{t.aiScoreDesc}</p>
            
            <div className="flex items-center gap-8">
              <div className="relative w-40 h-40 flex items-center justify-center rounded-full border-8 border-slate-800">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="72" cy="72" r="64" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-800" />
                  <circle cx="72" cy="72" r="64" fill="transparent" stroke="url(#gradient)" strokeWidth="8" strokeDasharray="402" strokeDashoffset={402 - (402 * score) / 100} className="transition-all duration-2000 ease-out" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{score}%</div>
              </div>
              <div className="flex-1">
                <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5">
                  <div className="text-sm text-slate-400 mb-1">Keywords Active:</div>
                  <div className="font-mono text-indigo-300">"Bursa Bahçe Mobilyası", "El Örgüsü Rattan"</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-3 gap-4">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex justify-between items-center hover:bg-white/10 transition">
              <div>
                <div className="text-slate-400 text-sm mb-1">{t.stats.articles}</div>
                <div className="text-2xl font-bold">12</div>
              </div>
              <div className="text-3xl">📡</div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex justify-between items-center hover:bg-white/10 transition">
              <div>
                <div className="text-slate-400 text-sm mb-1">{t.stats.schema}</div>
                <div className="text-2xl font-bold text-green-400">Active</div>
              </div>
              <div className="text-3xl">🛡️</div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex justify-between items-center hover:bg-white/10 transition">
              <div>
                <div className="text-slate-400 text-sm mb-1">{t.stats.competitors}</div>
                <div className="text-2xl font-bold text-red-400">3</div>
              </div>
              <div className="text-3xl">⛔</div>
            </div>
          </div>

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
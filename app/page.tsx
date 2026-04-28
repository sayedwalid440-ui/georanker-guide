"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const content = {
  ar: {
    navPricing: "الباقات والأسعار",
    navLogin: "دخول لوحة التحكم",
    badge: "🚀 أول منصة تدمج SEO مع GEO عالمياً",
    title1: "احتكار مزدوج: ",
    titleHighlight: "جوجل والذكاء الاصطناعي",
    subtitle: "لا تكتفِ بالظهور في محركات البحث التقليدية. نحن نضمن تصدرك في Google، لنجبر خوارزميات ChatGPT و Gemini على اختيارك كـ 'الخيار الأول والوحيد'.",
    btnPrimary: "احجز منطقتك الحصرية",
    btnSecondary: "كيف تعمل المنصة؟",
    section2Title: "لماذا تكتفي بنصف الحلول؟",
    feat1Title: "السيطرة على البحث (SEO)",
    feat1Desc: "نطبق بروتوكولاتنا الخاصة لضمان سيطرتك المطلقة على نتائج البحث المحلية لاصطياد الباحثين التقليديين.",
    feat2Title: "الهيمنة على الذكاء الاصطناعي (GEO)",
    feat2Desc: "نستخدم تصدرك كدليل ثقة رقمي، لنجبر ChatGPT على ترشيحك فوراً للعملاء ذوي القوة الشرائية العالية.",
    feat3Title: "حصرية تامة (مقعد واحد)",
    feat3Desc: "سواء في جوجل أو الذكاء الاصطناعي، نحن نقبل عميلاً واحداً لكل تخصص في الحي. منافسوك خارج اللعبة.",
    stepsTitle: "مسار الهيمنة: كيف نحتكر السوق لك؟",
    step1: { title: "1. إعداد الحملة", desc: "أدخل بيانات نشاطك والكلمات المفتاحية عبر نموذجنا الذكي." },
    step2: { title: "2. المعالجة السحرية", desc: "محركنا الذكي يبدأ في حقن هويتك الرقمية وبناء بصمتك في الشبكة آلياً." },
    step3: { title: "3. تصدر جوجل", desc: "خلال أسابيع، تسيطر علامتك التجارية على نتائج البحث المحلية (SEO)." },
    step4: { title: "4. اختراق AI", desc: "يبدأ ChatGPT في قراءة إشاراتنا الرقمية، ويضعك كخيار أول في إجاباته." },
    step5: { title: "5. المراقبة", desc: "تابع أرقامك ونسبة هيمنتك مباشرة عبر لوحة تحكم حية." },
    pricingTitle: "استثمار لا يقبل المنافسة",
    pricingDesc: "نظام تسعير مصمم لحماية مكانتك وتدمير فرص منافسيك في البحث والذكاء الاصطناعي.",
    packName: "باقة الهيمنة الشاملة (SEO + GEO)",
    packDesc: "عميل واحد فقط لكل منطقة جغرافية.",
    priceSetup: "رسوم التأسيس",
    priceMonthly: "شهرياً للحفاظ على القمة",
    featCheck1: "تصدر دائم في Google و Bing.",
    featCheck2: "ظهور حصري في إجابات ChatGPT و Gemini.",
    featCheck3: "لوحة تحكم حية لمتابعة النتائج.",
    featWarn: "تنبيه: الإلغاء يعطي مكانك لمنافسك المباشر.",
    btnPricing: "ابدأ الهيمنة الآن",
    footer: "© 2026 GeoRankerGuide. المنصة الرائدة في SEO & GEO."
  },
  en: {
    navPricing: "Pricing",
    navLogin: "Dashboard Login",
    badge: "🚀 The 1st Global Platform Combining SEO & GEO",
    title1: "Double Monopoly: ",
    titleHighlight: "Google & AI Minds",
    subtitle: "Don't settle for traditional search. We ensure your #1 ranking on Google, forcing ChatGPT & Gemini to pick you as the 'Only Choice'.",
    btnPrimary: "Claim Your Exclusive Zone",
    btnSecondary: "How It Works?",
    section2Title: "Why settle for half solutions?",
    feat1Title: "Search Engine Dominance (SEO)",
    feat1Desc: "We apply our proprietary protocols to ensure your absolute dominance in local search results.",
    feat2Title: "AI Optimization (GEO)",
    feat2Desc: "We use your ranking as a digital trust signal to force ChatGPT to recommend you.",
    feat3Title: "Total Exclusivity (One Seat)",
    feat3Desc: "Only one client per niche per area. Your competitors are locked out of both Google and AI.",
    stepsTitle: "The Path to Domination: How it works?",
    step1: { title: "1. Setup", desc: "Enter your business details via our smart onboarding form." },
    step2: { title: "2. Magic Processing", desc: "Our engine injects your digital identity and builds your footprint automatically." },
    step3: { title: "3. Google Ranking", desc: "Within weeks, your brand dominates local SEO results." },
    step4: { title: "4. AI Hacking", desc: "ChatGPT reads our digital signals and places you as the top answer." },
    step5: { title: "5. Live Tracking", desc: "Monitor your dominance score directly from your dashboard." },
    pricingTitle: "Unbeatable Investment",
    pricingDesc: "Pricing designed to protect your status in both Search and AI.",
    packName: "Total Dominance Package",
    packDesc: "Only one client per area.",
    priceSetup: "Setup Fee",
    priceMonthly: "Monthly to keep #1",
    featCheck1: "Permanent ranking on Google & Bing.",
    featCheck2: "Exclusive visibility in ChatGPT & Gemini.",
    featCheck3: "Live dashboard to track results.",
    featWarn: "Warning: Canceling gives your spot to competitors.",
    btnPricing: "Start Dominating Now",
    footer: "© 2026 GeoRankerGuide. SEO & GEO Leaders."
  },
  tr: {
    navPricing: "Fiyatlandırma",
    navLogin: "Panele Giriş",
    badge: "🚀 SEO ve GEO'yu Birleştiren İlk Platform",
    title1: "Çifte Tekel: ",
    titleHighlight: "Google ve Yapay Zeka",
    subtitle: "Geleneksel aramayla yetinmeyin. Google'da 1. sıraya yerleşmenizi sağlayarak ChatGPT'yi sizi seçmeye zorluyoruz.",
    btnPrimary: "Bölgenizi Ayırtın",
    btnSecondary: "Sistem Nasıl Çalışır?",
    section2Title: "Neden yarım çözümlerle yetinesiniz?",
    feat1Title: "Arama Motoru Hakimiyeti (SEO)",
    feat1Desc: "Yerel arama sonuçlarında mutlak hakimiyetinizi sağlamak için tescilli protokollerimizi uyguluyoruz.",
    feat2Title: "Yapay Zeka Optimizasyonu (GEO)",
    feat2Desc: "Sıralamanızı dijital bir güven sinyali olarak kullanarak ChatGPT'nin sizi önermesini sağlıyoruz.",
    feat3Title: "Tam Ayrıcalık (Tek Kontenjan)",
    feat3Desc: "Her bölge için tek müşteri. Rakipleriniz hem Google'dan hem de AI'dan dışlanır.",
    stepsTitle: "Hakimiyet Yolu: Nasıl Çalışır?",
    step1: { title: "1. Kurulum", desc: "Akıllı formumuz aracılığıyla işletme bilgilerinizi girin." },
    step2: { title: "2. Sihirli İşleme", desc: "Motorumuz dijital kimliğinizi enjekte eder ve ayak izinizi otomatik olarak oluşturur." },
    step3: { title: "3. Google Sıralaması", desc: "Haftalar içinde markanız yerel SEO sonuçlarını domine eder." },
    step4: { title: "4. AI Hackleme", desc: "ChatGPT dijital sinyallerimizi okur ve sizi en iyi cevap olarak sunar." },
    step5: { title: "5. Canlı Takip", desc: "Hakimiyet skorunuzu canlı panelden takip edin." },
    pricingTitle: "Rakipsiz Yatırım",
    pricingDesc: "Arama ve AI'daki konumunuzu korumak için tasarlandı.",
    packName: "Tam Hakimiyet Paketi",
    packDesc: "Bölge başı sadece bir müşteri.",
    priceSetup: "Kurulum Ücreti",
    priceMonthly: "Aylık 1. sırayı koruma",
    featCheck1: "Google ve Bing'de kalıcı sıralama.",
    featCheck2: "ChatGPT ve Gemini'de özel görünürlük.",
    featCheck3: "Sonuçları izlemek için canlı panel.",
    featWarn: "Uyarı: İptal etmek yerinizi rakiplerinize verir.",
    btnPricing: "Hemen Hakimiyete Başla",
    footer: "© 2026 GeoRankerGuide. Lider SEO & GEO Platformu."
  }
};

type Lang = 'ar' | 'en' | 'tr';

export default function SaaSLandingPage() {
  const [lang, setLang] = useState<Lang>('ar');
  const t = content[lang];
  const isRTL = lang === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-indigo-500 selection:text-white overflow-x-hidden scroll-smooth">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse duration-1000"></div>

      {/* Language Switcher */}
      <div className="bg-black/50 backdrop-blur-md text-slate-300 text-sm py-2 px-6 flex justify-end gap-3 border-b border-white/5 sticky top-0 z-50">
        <span className="opacity-70 mx-2">🌐</span>
        <button onClick={() => setLang('ar')} className={`hover:text-indigo-400 transition ${lang === 'ar' ? 'font-bold text-indigo-400' : ''}`}>العربية</button>
        <button onClick={() => setLang('en')} className={`hover:text-indigo-400 transition ${lang === 'en' ? 'font-bold text-indigo-400' : ''}`}>English</button>
        <button onClick={() => setLang('tr')} className={`hover:text-indigo-400 transition ${lang === 'tr' ? 'font-bold text-indigo-400' : ''}`}>Türkçe</button>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto z-40 relative">
        <div className="text-3xl font-extrabold tracking-tighter" dir="ltr">
          <span className="text-white">GeoRanker</span><span className="text-indigo-500">Guide</span>
        </div>
        <div className={`flex items-center gap-6 ${isRTL ? 'space-x-reverse' : ''}`}>
          <Link href="#pricing" className="text-slate-300 hover:text-white font-medium hidden md:block transition">
            {t.navPricing}
          </Link>
          <Link href="/dashboard">
            <button className="bg-white/10 border border-white/20 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
              {t.navLogin}
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center pt-24 pb-20 px-4 max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 mb-8 shadow-[0_0_20px_rgba(79,70,229,0.2)]">
          {t.badge}
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-tight drop-shadow-2xl">
          {t.title1} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            {t.titleHighlight}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/onboarding">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-300 w-full sm:w-auto">
              {t.btnPrimary}
            </button>
          </Link>
          <Link href="#how-it-works">
            <button className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
              {t.btnSecondary}
            </button>
          </Link>
        </div>
      </header>

      {/* Value Prop Section */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.section2Title}</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/20 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">{t.feat1Title}</h3>
              <p className="text-slate-400">{t.feat1Desc}</p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">{t.feat2Title}</h3>
              <p className="text-slate-400">{t.feat2Desc}</p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-b from-pink-900/20 to-transparent border border-pink-500/20 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">👑</div>
              <h3 className="text-xl font-bold mb-4 text-pink-300">{t.feat3Title}</h3>
              <p className="text-slate-400">{t.feat3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 relative z-10 border-y border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.stepsTitle}</h2>
          
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-10 right-10 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-full"></div>

            {[
              { icon: "📝", data: t.step1, link: "/onboarding" },
              { icon: "⚙️", data: t.step2, link: null },
              { icon: "📈", data: t.step3, link: null },
              { icon: "🤖", data: t.step4, link: null },
              { icon: "📊", data: t.step5, link: "/dashboard" },
            ].map((step, i) => (
              <div key={i} className="relative bg-slate-900 border border-white/10 p-6 rounded-2xl hover:border-indigo-500/50 transition-colors z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-950 border border-indigo-500/30 rounded-full flex items-center justify-center text-3xl mb-4 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">{step.data.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{step.data.desc}</p>
                {step.link && (
                  <Link href={step.link}>
                    <span className="text-xs font-bold text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full hover:bg-indigo-400/20 cursor-pointer transition">
                      معاينة الخطوة
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">{t.pricingTitle}</h2>
          <p className="text-slate-400 mb-16 text-lg">{t.pricingDesc}</p>
          
          <div className="bg-slate-900 rounded-3xl shadow-2xl border border-indigo-500/30 overflow-hidden max-w-lg mx-auto transition-transform hover:scale-105 duration-300 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="p-8 bg-indigo-600/10 border-b border-indigo-500/20">
              <h3 className="text-2xl font-bold mb-2 text-indigo-300">{t.packName}</h3>
              <p className="text-slate-400">{t.packDesc}</p>
            </div>
            <div className="p-8 relative z-10">
              <div className="mb-6 flex flex-wrap justify-center items-center gap-2">
                <span className="text-slate-500 line-through">15,000 ₺</span>
                <span className="text-4xl font-extrabold text-white">5,000 ₺</span>
                <span className="text-slate-400 font-medium whitespace-nowrap"> / {t.priceSetup}</span>
              </div>
              <div className="mb-8 pb-8 border-b border-white/10 flex flex-wrap justify-center items-center gap-2">
                <span className="text-2xl font-bold text-white">2,000 ₺</span>
                <span className="text-slate-400 whitespace-nowrap"> / {t.priceMonthly}</span>
              </div>
              <ul className={`space-y-4 mb-8 text-slate-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                <li className="flex items-start gap-3"><span className="text-indigo-400">✅</span> <span>{t.featCheck1}</span></li>
                <li className="flex items-start gap-3"><span className="text-indigo-400">✅</span> <span>{t.featCheck2}</span></li>
                <li className="flex items-start gap-3"><span className="text-indigo-400">✅</span> <span>{t.featCheck3}</span></li>
                <li className="flex items-start gap-3 text-red-400 font-bold mt-6 pt-6 border-t border-white/5"><span>⚠️</span> <span>{t.featWarn}</span></li>
              </ul>
              <Link href="/onboarding" className="block w-full">
                <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-500 transition shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                  {t.btnPricing}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 text-slate-500 py-10 text-center relative z-10">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
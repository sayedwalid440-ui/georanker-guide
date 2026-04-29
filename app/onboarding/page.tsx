"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const translations = {
  ar: {
    title: "إعداد حملة الهيمنة الرقمية",
    subtitle: "أدخل بيانات نشاطك لتبدأ خوارزمياتنا في بناء بصمتك الرقمية المزدوجة (SEO + GEO)",
    bizName: "اسم الشركة / النشاط التجاري",
    bizPlaceholder: "مثلاً: عيادة نيلوفر لزراعة الأسنان",
    category: "التخصص أو الكلمات المفتاحية",
    catPlaceholder: "مثلاً: زراعة أسنان، تبييض، هوليود سمايل",
    city: "المدينة المستهدفة",
    cityPlaceholder: "بورصة، إسطنبول، لندن...",
    website: "رابط موقعك (إن وجد)",
    submitBtn: "تأكيد وبدء المعالجة الذكية 🚀",
    note: "بمجرد الضغط، سيبدأ محركنا في حقن هويتك الرقمية عبر شبكاتنا الموثوقة.",
    step: "خطوة 1 من 2: تهيئة البيانات",
    aiDetected: "✨ تم استنتاج التخصص بذكاء اصطناعي"
  },
  en: {
    title: "Set Up Your Dominance Campaign",
    subtitle: "Enter your business details to let our algorithms build your double digital footprint (SEO + GEO)",
    bizName: "Business Name",
    bizPlaceholder: "e.g., Nilüfer Dental Clinic",
    category: "Niche / Keywords",
    catPlaceholder: "e.g., Dental Implants, Teeth Whitening",
    city: "Target City",
    cityPlaceholder: "Bursa, Istanbul, London...",
    website: "Website URL (Optional)",
    submitBtn: "Confirm & Start Smart Processing 🚀",
    note: "Upon clicking, our engine will inject your digital identity across our trusted networks.",
    step: "Step 1 of 2: Data Configuration",
    aiDetected: "✨ Niche auto-detected by AI"
  },
  tr: {
    title: "Hakimiyet Kampanyanızı Kurun",
    subtitle: "Algoritmalarımızın çifte dijital ayak izinizi (SEO + GEO) oluşturması için bilgilerinizi girin",
    bizName: "İşletme Adı",
    bizPlaceholder: "Örn: Nilüfer Diş Kliniği",
    category: "Uzmanlık / Anahtar Kelimeler",
    catPlaceholder: "Örn: Diş İmplantı, Gülüş Tasarımı",
    city: "Hedef Şehir",
    cityPlaceholder: "Bursa, İstanbul, Ankara...",
    website: "Web Sitesi (Opsiyonel)",
    submitBtn: "Onayla ve Akıllı İşlemeyi Başlat 🚀",
    note: "Tıkladığınızda motorumuz dijital kimliğinizi güvenilir ağlarımıza enjekte edecektir.",
    step: "Adım 1 / 2: Veri Yapılandırması",
    aiDetected: "✨ Uzmanlık AI ile otomatik algılandı"
  }
};

type Lang = 'ar' | 'en' | 'tr';

export default function OnboardingPage() {
  const [lang, setLang] = useState<Lang>('ar');
  const [loading, setLoading] = useState(false);
  
  const [bizName, setBizName] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [website, setWebsite] = useState('');
  const [isAiFilled, setIsAiFilled] = useState(false);
  
  const router = useRouter();
  const t = translations[lang];

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setBizName(val);
    const lowerVal = val.toLowerCase();
    let detectedCategory = "";

    if (/(bahçe|garden|mobilya|أثاث|حدائق|home)/i.test(lowerVal)) {
      detectedCategory = lang === 'ar' ? 'أثاث خارجي، راتان محيك يدوياً، ديكور حدائق' :
                         lang === 'en' ? 'Outdoor Furniture, Handwoven Rattan, Garden Decor' :
                                         'Dış Mekan Mobilyaları, El Örgüsü Rattan, Bahçe Dekoru';
    } else if (/(diş|dental|أسنان|عيادة|clinic)/i.test(lowerVal)) {
      detectedCategory = lang === 'ar' ? 'زراعة أسنان، تبييض الأسنان، ابتسامة هوليود' :
                         lang === 'en' ? 'Dental Implants, Teeth Whitening, Hollywood Smile' :
                                         'Diş İmplantı, Diş Beyazlatma, Gülüş Tasarımı';
    }

    if (detectedCategory) {
      setCategory(detectedCategory);
      setIsAiFilled(true);
    } else if (isAiFilled) {
      setCategory("");
      setIsAiFilled(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const clientData = {
      businessName: bizName,
      niche: category,
      targetCity: city,
      clientWebsite: website
    };

    try {
      // تم وضع الرابط الصحيح لخادمك هنا
      const webhookUrl = "http://104.248.45.135:5678/webhook/georanker-onboarding";
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      });

      router.push('/dashboard');
    } catch (error) {
      console.error("Error triggering AI Engine:", error);
      router.push('/dashboard'); 
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500">
      <div className="bg-black/40 backdrop-blur-md py-2 px-6 flex justify-end gap-3 border-b border-white/5">
        <button onClick={() => setLang('ar')} className={`text-sm transition-colors ${lang === 'ar' ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}>العربية</button>
        <button onClick={() => setLang('en')} className={`text-sm transition-colors ${lang === 'en' ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}>English</button>
        <button onClick={() => setLang('tr')} className={`text-sm transition-colors ${lang === 'tr' ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}>Türkçe</button>
      </div>

      <div className="max-w-2xl mx-auto pt-16 pb-20 px-6">
        <div className="text-center mb-10">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">{t.step}</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">{t.title}</h1>
          <p className="text-slate-400">{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-300">{t.bizName}</label>
              <input required type="text" value={bizName} onChange={handleNameChange} placeholder={t.bizPlaceholder} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
            </div>

            <div className="relative">
              <div className="flex justify-between items-end mb-2">
                <label className="block text-sm font-medium text-indigo-300">{t.category}</label>
                {isAiFilled && <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded animate-pulse">{t.aiDetected}</span>}
              </div>
              <input required type="text" value={category} onChange={(e) => { setCategory(e.target.value); setIsAiFilled(false); }} placeholder={t.catPlaceholder} className={`w-full bg-slate-900/50 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${isAiFilled ? 'border-green-500/50 text-green-100 shadow-[0_0_15px_rgba(74,222,128,0.1)]' : 'border-white/10'}`} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-300">{t.city}</label>
              <input required type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder={t.cityPlaceholder} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-300">{t.website}</label>
              <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://..." className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
            </div>

            <button type="submit" disabled={loading} className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg ${loading ? 'bg-slate-700 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] hover:shadow-indigo-500/40'}`}>
              {loading ? "Processing Digital Injection..." : t.submitBtn}
            </button>
            <p className="text-center text-xs text-slate-500 mt-4 leading-relaxed italic">{t.note}</p>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30"></div>
    </div>
  );
}
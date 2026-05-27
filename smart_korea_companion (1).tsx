import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ShoppingBag, 
  Truck, 
  MessageSquare, 
  CreditCard, 
  ChevronRight, 
  Volume2, 
  Copy, 
  Search, 
  Compass, 
  AlertCircle, 
  Sparkles, 
  Check, 
  CornerDownRight, 
  Smartphone, 
  ArrowRight, 
  HelpCircle,
  X,
  Menu,
  Languages,
  ArrowLeftRight,
  User,
  MapPin,
  PlusCircle,
  ShieldCheck,
  Coins,
  Ticket,
  ExternalLink,
  CheckSquare,
  Lock,
  MessageCircle,
  Info,
  Settings,
  HelpCircle as QuestionIcon,
  Navigation
} from 'lucide-react';

// --- CONFIG & APP DATA ---
const apiKey = ""; // Runtime automatically injects the key

const APP_CATEGORIES = {
  DELIVERY: 'Food Delivery',
  SHOPPING: 'General Shopping',
  FASHION: 'Fashion & Style',
  USED: 'Second-hand Market',
  MOBILITY: 'Mobility & Taxi',
  PAYMENT: 'Fintech & Pay'
};

// Direct links to App Store, Google Play Store, and Official Web Pages
const APP_LINKS = {
  baemin: {
    ios: "https://apps.apple.com/kr/app/id378061811",
    android: "https://play.google.com/store/apps/details?id=com.smartdom.baemin",
    web: "https://www.baemin.com"
  },
  coupang: {
    ios: "https://apps.apple.com/kr/app/id415427503",
    android: "https://play.google.com/store/apps/details?id=com.coupang.mobile",
    web: "https://www.coupang.com"
  },
  karrot: {
    ios: "https://apps.apple.com/kr/app/id1018769042",
    android: "https://play.google.com/store/apps/details?id=com.towngentle.karrot",
    web: "https://www.daangn.com"
  },
  bunjang: {
    ios: "https://apps.apple.com/kr/app/id424391694",
    android: "https://play.google.com/store/apps/details?id=com.bunjang.app",
    web: "https://m.bunjang.co.kr"
  },
  ably: {
    ios: "https://apps.apple.com/kr/app/id1359556157",
    android: "https://play.google.com/store/apps/details?id=kr.co.ably.ably",
    web: "https://a-bly.com"
  },
  zigzag: {
    ios: "https://apps.apple.com/kr/app/id1004243763",
    android: "https://play.google.com/store/apps/details?id=com.croquis.zigzag",
    web: "https://apk.chwiderstand.com"
  },
  kakaoT: {
    ios: "https://apps.apple.com/kr/app/id987487890",
    android: "https://play.google.com/store/apps/details?id=com.kakao.taxi",
    web: "https://www.kakaomobility.com"
  },
  kakaoPay: {
    ios: "https://apps.apple.com/kr/app/id1455209774",
    android: "https://play.google.com/store/apps/details?id=com.kakaopay.app",
    web: "https://kakaopay.tistory.com/25"
  },
  deliveredKorea: {
    web: "https://www.delivered.co.kr"
  }
};

const APP_DIRECTORY = [
  {
    id: 'baemin',
    name: 'Baemin (배달의민족)',
    category: APP_CATEGORIES.DELIVERY,
    desc: 'The most popular food delivery app in Korea. Allows ordering from local restaurants, convenience stores, and grocery delivery (B-Mart).',
    howToUse: [
      'Download and sign up (social login like Kakao is easiest).',
      'Set your delivery address in English or Korean (search using postal code).',
      'Select a category (e.g., Chicken, Pizza, Korean) and choose a restaurant.',
      'Add items to your cart and proceed to checkout.',
      'Select payment method (Foreign credit cards can be used under "Other payment methods" -> "Foreign Card", or use Kakao Pay/Toss).'
    ],
    tips: 'Watch out for "Minimum Order Amount" (최소주문금액) and "Delivery Fee" (배달팁). Many shops offer discount coupons!'
  },
  {
    id: 'coupang',
    name: 'Coupang (쿠팡)',
    category: APP_CATEGORIES.SHOPPING,
    desc: 'The Amazon of Korea. Offers "Rocket Delivery" (로켓배송) which arrives the next morning or even the same day.',
    howToUse: [
      'Register an account (requires identity verification with foreign registration card/phone number for Rocket Wow membership).',
      'Add a shipping address (ensure the name matches your domestic phone registration).',
      'Search for products. Look for the "Rocket" icon for ultra-fast delivery.',
      'Register your card for "Coupay" simple payment to check out with a single click.'
    ],
    tips: 'Rocket Wow membership is highly recommended for free shipping/returns and access to Coupang Play (streaming service).'
  },
  {
    id: 'karrot',
    name: 'Karrot (당근마켓)',
    category: APP_CATEGORIES.USED,
    desc: 'Hyper-local secondhand marketplace. You can buy and sell items with neighbors within a few kilometers range.',
    howToUse: [
      'Set your location (requires GPS verification to prove you are in the neighborhood).',
      'Search for secondhand items or free giveaways (나눔).',
      'Chat with the seller to negotiate or agree on a meeting place/time.',
      'Meet in person (직거래) at a public, safe place (like a subway exit) and pay via cash or bank transfer.'
    ],
    tips: 'Check the seller’s "Manner Temperature" (매너온도). 36.5°C is the starting point; higher means a more trustworthy trader.'
  },
  {
    id: 'bunjang',
    name: 'Bunjang (번개장터)',
    category: APP_CATEGORIES.USED,
    desc: 'Nationwide secondhand market, great for K-pop goods, electronics, and fashion items with shipping support.',
    howToUse: [
      'Search nationwide for specific collector items or brands.',
      'Use "Bunjang Talk" (번개톡) to chat with sellers.',
      'Utilize "Bunke Pay" (번개페이) secure transaction service if you want to prevent scams.'
    ],
    tips: 'You can request convenience store delivery (반값택배 - half-price shipping) to pick up items at a nearby GS25 or CU.'
  },
  {
    id: 'ably',
    name: 'Ably (에이블리)',
    category: APP_CATEGORIES.FASHION,
    desc: 'Ultra-popular fashion app with free shipping on every single item. Highly favored by university students.',
    howToUse: [
      'Browse daily trending coordinates and fashion items.',
      'Apply various coupons distributed weekly.',
      'Pay simply using Kakao Pay or your local bank transfer.'
    ],
    tips: 'Use the "Inquiry" tab on product pages to ask about restocking or sizes. See the phrasebook section below for copy-paste templates!'
  },
  {
    id: 'zigzag',
    name: 'Zigzag (지그재그)',
    category: APP_CATEGORIES.FASHION,
    desc: 'An aggregator of thousands of Korean online fashion malls. Compiles items based on your personal style preference.',
    howToUse: [
      'Follow stores that match your aesthetic.',
      'Add items from different stores to a single shopping cart using "Z- 결제" (Z-Payment).'
    ],
    tips: 'Use the filtering tool to select your height and weight to see reviews from buyers with similar body types.'
  },
  {
    id: 'kakaoT',
    name: 'Kakao T (카카오 T)',
    category: APP_CATEGORIES.MOBILITY,
    desc: 'The primary mobility app in Korea. Used for hailing taxis, renting bikes, checking parking spots, and looking up transit routing.',
    howToUse: [
      'Download Kakao T and log in via your KakaoTalk credentials.',
      'Tap Taxi, specify your pickup and destination locations.',
      'Select a taxi type and choose your preferred payment gateway.',
      'If you have no domestic Korean bank card, select "Pay to Driver" to pay with physical cash or your foreign card directly in the cab.'
    ],
    tips: 'Double check the vehicle license plate before stepping inside, especially in crowded station areas!'
  }
];

const PHRASEBOOK = [
  {
    category: 'Shopping Apps',
    phrases: [
      { kr: "이거 할인 중인가요?", en: "Is this on sale?", useCase: "Asking about discounts in a store inquiry." },
      { kr: "배송 언제 와요?", en: "When will it arrive?", useCase: "Asking about shipping updates." },
      { kr: "무료배송이에요?", en: "Is shipping free?", useCase: "Confirming if there are delivery charges." },
      { kr: "환불 가능한가요?", en: "Can I get a refund?", useCase: "Inquiring about refund policies." }
    ]
  },
  {
    category: 'Second-hand Trading (당근/번개장터)',
    phrases: [
      { kr: "아직 판매 중인가요?", en: "Is this still available?", useCase: "First message to send to a seller." },
      { kr: "가격 네고 가능할까요?", en: "Can you lower the price?", useCase: "Politely asking for a discount." },
      { kr: "직거래 가능하세요?", en: "Can we do an in-person transaction?", useCase: "Proposing a safe face-to-face meet." },
      { kr: "택배 거래도 되나요?", en: "Is shipping available?", useCase: "Asking to ship the item instead of meeting." },
      { kr: "상태 어떤가요?", en: "What condition is it in?", useCase: "Asking for details about wear and tear." },
      { kr: "거래 완료됐어요.", en: "The item has been sold.", useCase: "Informing others the listing is closed." },
      { kr: "채팅 보내드렸어요.", en: "I sent you a message.", useCase: "Alerting seller about your DM." }
    ]
  },
  {
    category: 'Delivery Apps (배달의민족)',
    phrases: [
      { kr: "배달 얼마나 걸려요?", en: "How long will delivery take?", useCase: "Checking estimated delivery time." },
      { kr: "최소주문금액이 있네요.", en: "There is a minimum order amount.", useCase: "Noticing checkout restrictions." },
      { kr: "배달비 얼마예요?", en: "How much is the delivery fee?", useCase: "Confirming delivery price." },
      { kr: "포장 주문할게요.", en: "I’ll order for pickup.", useCase: "Letting restaurant know you will pick it up on foot." },
      { kr: "문 앞에 놓아주세요.", en: "Please leave it at the door.", useCase: "Classic contactless drop-off note." },
      { kr: "요청사항에 적어둘게요.", en: "I’ll write it in the delivery notes.", useCase: "Telling rider or store you left a memo." },
      { kr: "재주문할 정도로 맛있었어요.", en: "It was good enough to order again.", useCase: "Leaving a pleasant positive review." }
    ]
  },
  {
    category: 'Payment & Identity Verification',
    phrases: [
      { kr: "송금해드릴게요.", en: "I’ll transfer the money.", useCase: "When paying a secondhand seller via direct wire." },
      { kr: "계좌번호 보내주세요.", en: "Please send me your bank account number.", useCase: "Asking for payment bank details." },
      { kr: "잔액이 부족해요.", en: "I don’t have enough balance.", useCase: "Noticing low funds on checking account." },
      { kr: "본인인증이 필요하네요.", en: "Identity verification is required.", useCase: "Faced with SMS/ARC validation prompts." },
      { kr: "간편결제로 할게요.", en: "I’ll use easy payment.", useCase: "Paying quickly using Kakao Pay, Toss, or Coupay." }
    ]
  }
];

const KAKAO_PAY_STEPS = [
  {
    step: 1,
    title: "Download KakaoTalk & Access Pay Hub",
    desc: "Download KakaoTalk and create an account. Tap the 'More' (더보기 - bottom right three dots) tab inside the app and select 'Kakaopay'. Click the grey rectangular bar directly underneath your profile photo to open your brand new Kakao Pay account."
  },
  {
    step: 2,
    title: "Agree to Guidelines & Terms",
    desc: "Follow the on-screen prompts to accept the essential terms and conditions. Authorize permissions for SMS, contacts, and notifications to ensure a seamless setup."
  },
  {
    step: 3,
    title: "Add Bank Information (계정 추가)",
    desc: "Your initial Kakao Pay balance will display '0 won'. Click on the linking tab directly below your balance: '[연결된 은행 계좌가 없습니다]' (There is no connected bank account) or select '[계정 추가]' (Add account) to connect your local Korean bank account. Choose your corresponding bank brand logo and enter your checking account number."
  },
  {
    step: 4,
    title: "Deposit Verification (1-Won Test)",
    desc: "Kakao Pay will deposit 1 KRW to your selected bank account. Check your banking application's transaction history, look for the 1 KRW deposit, and type the specific 4-letter sender name (e.g. '푸른바다') in the Kakao Pay verification dialog box."
  },
  {
    step: 5,
    title: "ARS Voice Phone Verification",
    desc: "Verify your cellular phone carrier. Note the 2-digit verification number displayed on your Kakao Pay registration screen, then click 'ARS'. You will receive an automated phone call in Korean within a few seconds. Type the 2-digit number on your keypad when prompted, and the call will end automatically."
  },
  {
    step: 6,
    title: "Set Security Credentials",
    desc: "Set up your custom 6-digit payment password PIN code. We strongly recommend configuring biometric authentication (Face ID or Fingerprint) for extreme convenience on daily transactions."
  },
  {
    step: 7,
    title: "Completed & Ready to Go!",
    desc: "Congratulations! You are officially ready to wire money simply, pay local utility bills, or checkout on Coupang, Ably, Baemin, and in physical stores across South Korea."
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [copyStatus, setCopyStatus] = useState(null);
  
  // Pay Stepper State
  const [currentStep, setCurrentStep] = useState(0);

  // Secondhand Navigation State
  const [secondhandPlatform, setSecondhandPlatform] = useState('karrot'); // 'karrot' or 'bunjang'
  const [karrotRegStep, setKarrotRegStep] = useState(0);
  const [sellingChecklist, setSellingChecklist] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false
  });

  // Dedicated Active Guide App (For detailed interactive UI)
  const [selectedGuideApp, setSelectedGuideApp] = useState('baemin');

  // Delivered Korea Sub-Option State
  const [dkOption, setDkOption] = useState('we-buy');

  // AI Helper State
  const [aiInput, setAiInput] = useState('');
  const [aiOutput, setAiOutput] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  // Toast status
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const handleCopy = (text, id) => {
    try {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopyStatus(id);
      showToast('Copied to clipboard!');
      setTimeout(() => setCopyStatus(null), 1500);
    } catch (err) {
      showToast('Failed to copy.');
    }
  };

  const handleSpeak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.9; 
      window.speechSynthesis.speak(utterance);
    } else {
      showToast('Text-to-speech is not supported in this browser.');
    }
  };

  // call Gemini API with retry logic and exponential backoff
  const callGeminiAI = async (inputMsg) => {
    if (!inputMsg.trim()) return;
    setAiLoading(true);
    setAiError('');
    setAiOutput(null);

    const systemPrompt = `You are "K-App Companion", a helpful assistant for international students living in South Korea. 
The user will input either:
1. A message/alert they received from a Korean delivery driver, Karrot Market (당근) seller, or shopping app.
2. An English explanation of what they want to say to a Korean seller/driver.

Provide the response strictly in JSON format matching this schema:
{
  "summary": "Brief 1-sentence summary of the user's issue or received message in English.",
  "analysis": "A detailed explanation in English of what the Korean message means, what action is expected, and culturally relevant tips.",
  "translations": [
    {
      "korean": "An natural, polite, and perfect Korean sentence the student can send as a reply.",
      "english": "English translation of this Korean sentence.",
      "context": "When to use this specific reply option."
    }
  ]
}
Ensure the Korean replies are extremely natural, using polite honorifics (존댓말) suitable for dealing with delivery workers or secondhand sellers. Provide 2 to 3 alternative reply options depending on different user scenarios.`;

    const payload = {
      contents: [{ parts: [{ text: `User request/received message: "${inputMsg}"` }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            summary: { type: "STRING" },
            analysis: { type: "STRING" },
            translations: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  korean: { type: "STRING" },
                  english: { type: "STRING" },
                  context: { type: "STRING" }
                },
                required: ["korean", "english", "context"]
              }
            }
          },
          required: ["summary", "analysis", "translations"]
        }
      }
    };

    let retries = 5;
    let delay = 1000; 

    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          }
        );

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (jsonText) {
          const parsedResult = JSON.parse(jsonText);
          setAiOutput(parsedResult);
          setAiLoading(false);
          return;
        } else {
          throw new Error("Empty response received from the model.");
        }
      } catch (err) {
        if (i === retries - 1) {
          setAiError("Sorry, we couldn't connect to the translation service. Please check your internet or try again later.");
          setAiLoading(false);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
  };

  const toggleChecklist = (key) => {
    setSellingChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Filter app directory
  const filteredApps = APP_DIRECTORY.filter(app => {
    const matchesCategory = selectedCategory === 'ALL' || app.category === selectedCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-indigo-500 selection:text-white animate-fadeIn text-sm">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-sm px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 z-50 animate-bounce">
          <Check size={16} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-800 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-1/2 w-60 h-60 bg-indigo-500/20 rounded-full blur-2xl -ml-30 -mb-20"></div>

        <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-indigo-500/30 text-indigo-100 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-400/20">
                <Sparkles size={12} />
                International Student Guide System
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Smart Korea</h1>
              <p className="text-indigo-200 mt-1 max-w-xl text-xs md:text-sm leading-relaxed">
                Bypass linguistic hurdles completely. Master food delivery, online fashion, and localized secondhand marketplaces like a true native.
              </p>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab('ai-helper')} 
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-950/20 text-xs"
              >
                <Languages size={18} />
                AI Translate Companion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content & Sidebar */}
      <main className="max-w-6xl w-full mx-auto px-4 flex-1 py-8 flex flex-col md:flex-row gap-6">
        
        {/* Navigation Sidebar */}
        <aside className="w-full md:w-64 shrink-0 flex flex-col gap-2">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider px-3 mb-3">Navigation</h3>
            <nav className="flex flex-col gap-1">
              <button 
                onClick={() => setActiveTab('home')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'home' 
                    ? 'bg-indigo-50 text-indigo-700 font-bold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Compass size={18} />
                Overview & Guidelines
              </button>
              <button 
                onClick={() => { setActiveTab('apps'); setSelectedGuideApp('baemin'); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'apps' 
                    ? 'bg-indigo-50 text-indigo-700 font-bold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <ShoppingBag size={18} />
                Essential App Guides
              </button>
              
              {/* Secondhand Mastery Tab */}
              <button 
                onClick={() => setActiveTab('secondhand')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'secondhand' 
                    ? 'bg-orange-50 text-orange-700 border border-orange-100 font-bold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <ArrowLeftRight size={18} className={activeTab === 'secondhand' ? 'text-orange-600' : 'text-slate-500'} />
                Secondhand Mastery
              </button>

              <button 
                onClick={() => setActiveTab('pay-guide')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'pay-guide' 
                    ? 'bg-indigo-50 text-indigo-700 font-bold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <CreditCard size={18} />
                Kakao Pay Setup Guide
              </button>
              <button 
                onClick={() => setActiveTab('phrasebook')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'phrasebook' 
                    ? 'bg-indigo-50 text-indigo-700 font-bold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <BookOpen size={18} />
                Survival Korean Phrases
              </button>
              <button 
                onClick={() => setActiveTab('ai-helper')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'ai-helper' 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Languages size={18} className={activeTab === 'ai-helper' ? 'text-emerald-600' : 'text-slate-500'} />
                AI Assistant Translate
              </button>
            </nav>
          </div>

          {/* Quick Tip Card */}
          <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-5 border border-indigo-100 shadow-sm">
            <h4 className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
              <AlertCircle size={16} className="text-indigo-600" />
              Pro Student Tip
            </h4>
            <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
              When ordering on Baemin or Coupang, avoid using your nickname. Ensure the name registered under your shipping details matches your mobile carrier subscription details exactly to avoid verification failures!
            </p>
          </div>
        </aside>

        {/* Dynamic Content Window */}
        <section className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 min-h-[500px]">
          
          {/* TAB 1: OVERVIEW & HOME */}
          {activeTab === 'home' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800 font-sans">Welcome to Smart Korea! 🇰🇷</h2>
                <p className="text-slate-500 text-xs mt-1">Your ultimate digitized manual to master local applications without language boundaries.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 tracking-wide uppercase bg-indigo-50 px-2 py-1 rounded">Shopping & Food</span>
                    <h3 className="font-bold text-slate-800 mt-2 text-base">Essential App Manuals</h3>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      Detailed step-by-step interactive instructions on using Baemin, Coupang, Ably, Zigzag, and Kakao T in English. Master the NICEPAY global payment flows.
                    </p>
                  </div>
                  <button 
                    onClick={() => { setActiveTab('apps'); setSelectedGuideApp('baemin'); }}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 group w-fit"
                  >
                    View Manuals 
                    <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between border-l-4 border-l-orange-500">
                  <div>
                    <span className="text-[10px] font-bold text-orange-600 tracking-wide uppercase bg-orange-50 px-2 py-1 rounded">Secondhand Economy</span>
                    <h3 className="font-bold text-slate-800 mt-2 text-base">Karrot & Bunjang Mastery</h3>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      Learn how to register, authenticate locations via GPS, negotiate pricing politely, receive points/coupons, and avoid scams.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('secondhand')}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 group w-fit"
                  >
                    Master Secondhand Markets
                    <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="bg-indigo-900 text-white rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                  <Languages size={240} />
                </div>
                <div className="max-w-lg relative z-10">
                  <h3 className="text-base font-bold flex items-center gap-2">
                    <Sparkles className="text-emerald-400" size={20} />
                    AI Chat Translator & Replier
                  </h3>
                  <p className="text-indigo-200 text-xs mt-2 leading-relaxed">
                    Struggling to text a seller or delivery worker? Simply paste the Korean text or type your context in English. Our custom Gemini 2.5 API generates perfect, polite Korean replies with audio pronunciations.
                  </p>
                  <button 
                    onClick={() => setActiveTab('ai-helper')}
                    className="mt-4 bg-white text-indigo-900 font-bold px-4 py-2 rounded-xl text-xs hover:bg-indigo-50 transition-colors shadow-md"
                  >
                    Launch AI Translator Now
                  </button>
                </div>
              </div>

              {/* General Hurdles Checklist */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="font-bold text-slate-850 text-sm mb-3">Top 3 Golden Rules for App Registration in Korea</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-emerald-50 text-emerald-600 p-1 rounded-full text-xs shrink-0 mt-0.5 font-bold w-5 h-5 flex items-center justify-center">1</span>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Your registered Phone Carrier Name must be PERFECT.</p>
                      <p className="text-xs text-slate-500">If your Alien Registration Card says "DOE JOHN FITZGERALD", your carrier subscription name must be exact. If you use a nickname or make a typo, registration verifications will fail immediately.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-emerald-50 text-emerald-600 p-1 rounded-full text-xs shrink-0 mt-0.5 font-bold w-5 h-5 flex items-center justify-center">2</span>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Set Up Native Local Payments for Full Convenience.</p>
                      <p className="text-xs text-slate-500">Most local checkouts require domestic accounts. Connect your Korean bank card, or activate Kakao Pay as demonstrated in our step-by-step helper.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-emerald-50 text-emerald-600 p-1 rounded-full text-xs shrink-0 mt-0.5 font-bold w-5 h-5 flex items-center justify-center">3</span>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Address format: Always use Street Name (도로명주소).</p>
                      <p className="text-xs text-slate-500">When entering delivery addresses, use the modern street name format. Combine with a front door password so couriers can place packages outside your door safely.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          )}

          {/* TAB 2: ESSENTIAL APP GUIDES & COMPREHENSIVE PLATFORMS */}
          {activeTab === 'apps' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">Korea's Essential Apps Manual</h2>
                <p className="text-slate-500 text-xs mt-1">Detailed English guides, checkout flows, and configurations for Korea's top commerce platforms.</p>
              </div>

              {/* Guide Tabs for Major Platforms */}
              <div className="flex bg-slate-100 p-1.5 rounded-2xl overflow-x-auto gap-1">
                <button 
                  onClick={() => setSelectedGuideApp('baemin')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedGuideApp === 'baemin' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-600 hover:bg-white/50'
                  }`}
                >
                  <Truck size={14} className="text-emerald-500" />
                  배달의민족 (Baemin)
                </button>
                <button 
                  onClick={() => setSelectedGuideApp('coupang')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedGuideApp === 'coupang' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:bg-white/50'
                  }`}
                >
                  <ShoppingBag size={14} className="text-indigo-500" />
                  쿠팡 (Coupang)
                </button>
                <button 
                  onClick={() => setSelectedGuideApp('ably')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedGuideApp === 'ably' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-600 hover:bg-white/50'
                  }`}
                >
                  <Ticket size={14} className="text-rose-500" />
                  에이블리 (Ably)
                </button>
                <button 
                  onClick={() => setSelectedGuideApp('zigzag')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedGuideApp === 'zigzag' ? 'bg-white text-fuchsia-600 shadow-sm' : 'text-slate-600 hover:bg-white/50'
                  }`}
                >
                  <ArrowLeftRight size={14} className="text-fuchsia-500" />
                  지그재그 (Zigzag)
                </button>
                <button 
                  onClick={() => setSelectedGuideApp('kakao-t')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedGuideApp === 'kakao-t' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:bg-white/50'
                  }`}
                >
                  <Navigation size={14} className="text-blue-500" />
                  카카오 T (Kakao T)
                </button>
                <button 
                  onClick={() => setSelectedGuideApp('delivered-korea')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedGuideApp === 'delivered-korea' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-600 hover:bg-white/50'
                  }`}
                >
                  <ExternalLink size={14} className="text-amber-500" />
                  Delivered Korea (Partner)
                </button>
              </div>

              {/* VIEW: BAEMIN (배달의민족) DETAILED NEW MANUAL */}
              {selectedGuideApp === 'baemin' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Callout box */}
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-950 flex gap-3 items-start">
                    <Info size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-sm mb-1">Baemin (배달의민족) English Mode & Global Payment</h4>
                      Ordering food in Korea is incredibly easy. Baemin now officially supports **global credit card payments via NICEPAY** and a phone system **English setting toggle**!
                    </div>
                  </div>

                  {/* App Links & Download */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <strong className="text-xs text-slate-800 block">Download Baemin App</strong>
                      <span className="text-[11px] text-slate-500">Get the official application for iOS or Android.</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={APP_LINKS.baemin.ios} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        App Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.baemin.android} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Play Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.baemin.web} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Official Site <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Step 1 & 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50">
                      <h3 className="font-bold text-xs text-slate-800 flex items-center gap-2 mb-3">
                        <Smartphone size={16} className="text-emerald-600" />
                        Step 1: Switch App to English & Verify
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        Baemin will not automatically switch to English from inside the app interface. You need to activate it through your phone's native operating settings:
                      </p>
                      <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 font-semibold mb-3">
                        📌 iOS / Android Setting Path:<br/>
                        <span className="text-slate-500 text-[11px] font-normal">
                          Go to phone's System Settings → Find & tap the Baemin app → Change the default Language parameter to "English".
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        After modifying, open the app. You must complete your identity verification by receiving a 6-digit verification code over domestic SMS.
                      </p>
                    </div>

                    <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-xs text-slate-800 flex items-center gap-2 mb-3">
                          <MapPin size={16} className="text-emerald-600" />
                          Step 2: Entering Your Korean Address (Copy Hack)
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          Even though the app is translated to English, always input your delivery destination address in Korean text to prevent courier confusion. Follow this copy-paste hack:
                        </p>
                        <ol className="list-decimal pl-4 text-xs text-slate-500 space-y-1">
                          <li>Open Naver Map or KakaoMap (which both fully support English searches).</li>
                          <li>Search for your target building, hotel, or apartment.</li>
                          <li>Copy the Korean text address (도로명주소) provided on the screen.</li>
                          <li>Paste it directly into Baemin's address search bar.</li>
                          <li>Manually append your exact room or apartment number (e.g., <strong className="text-slate-800">301호</strong>).</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: NICEPAY Foreign Card Checkout */}
                  <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-6">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-2">Checkout Game Changer</h4>
                    <h3 className="text-base font-bold flex items-center gap-2">
                      <CreditCard size={18} />
                      The 3-Step NICEPAY Foreign Card Checkout Process
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      You no longer need to pay in person or use a Korean card. Baemin processes international cards smoothly via the integrated NICEPAY gateway.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-xs">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <strong className="text-white block mb-1">1. Select "Foreign Card"</strong>
                        On the final order screen (<span className="text-slate-300 select-all">주문하기</span>), scroll to Payment Method (<span className="text-slate-300">결제수단</span>). Tap "Other Payment Methods" (<span className="text-emerald-300 font-semibold">기타 결제수단</span>) and select the <strong className="text-emerald-400 font-extrabold">[ Foreign Card ]</strong> button.
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <strong className="text-white block mb-1">2. Choose Card Brand</strong>
                        An English NICEPAY overlay will appear on your mobile screen. Select from major global networks: **Visa, MasterCard, JCB, or UnionPay**, then click NEXT.
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <strong className="text-white block mb-1">3. Enter Details & Pay</strong>
                        Type in your card details: Number, Expiration date, Cardholder Name (exact format), and Email address. Check the terms verification box and click the big blue **Pay** button!
                      </div>
                    </div>
                  </div>

                  {/* Complete Official Navigation & Settings Flow */}
                  <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/20">
                    <h3 className="font-bold text-xs text-slate-800 mb-3 uppercase tracking-wider">Official In-App Flow & Settings Guide</h3>
                    <div className="space-y-3 text-xs text-slate-600">
                      <div className="p-3 bg-white rounded-xl border border-slate-100 flex gap-2 items-start">
                        <span className="bg-emerald-100 text-emerald-700 font-extrabold rounded-full px-2 py-0.5 text-[10px]">Settings Path</span>
                        <p>Go to **My Baemin (마이배민)** → Click the **Settings Gear (톱니바퀴) Icon** on the top right corner → Select **Language Configuration (언어변경)** to swap details to your home country's native language.</p>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-100">
                        <span className="font-bold block text-slate-800 mb-2">🛒 Select Food Delivery Type (한집/알뜰/가게배달/픽업):</span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[11px]">
                          <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/30">
                            <span className="font-bold text-emerald-800 block">한집배달 (Single Express)</span>
                            Delivers directly from the kitchen to your room. Fast but slightly higher delivery fees.
                          </div>
                          <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/30">
                            <span className="font-bold text-emerald-800 block">알뜰배달 (Saver Bundled)</span>
                            Saves costs by bundling neighbor deliveries together. Friendly budget options.
                          </div>
                          <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/30">
                            <span className="font-bold text-emerald-800 block">가게배달 (Direct Store)</span>
                            Delivery handled strictly by the store's in-house riders. Check fees beforehand.
                          </div>
                          <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/30">
                            <span className="font-bold text-emerald-800 block">포장/픽업 (Pickup Order)</span>
                            Place your order on Baemin beforehand and pick it up on foot to bypass shipping fees entirely.
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-100">
                        <span className="font-bold block text-slate-800 mb-1">Cancel Policy:</span>
                        You are free to cancel your order directly from the order details screen <strong className="text-rose-600">anytime BEFORE the restaurant accepts the request</strong> (주문 받기 전까지만 즉각 취소 가능). Once accepted, you must contact customer service.
                      </div>
                    </div>
                  </div>

                  {/* Review Writing Method */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wider mb-2">📝 How to Write a Review & Secure Service Gifts</h3>
                    <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                      Many local restaurants host **"Review Events" (리뷰 이벤트)**. If you mention your intent to write a review in the store request memo, they will deliver free side dishes, beverages, or cheese toppings!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-slate-250">
                        <span className="text-[10px] font-extrabold text-indigo-500 uppercase block mb-1">Step 1</span>
                        Go to **Order History** (주문내역) in your profile.
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-250">
                        <span className="text-[10px] font-extrabold text-indigo-500 uppercase block mb-1">Step 2</span>
                        Rate the restaurant using the **Star Icons** (별 개수 점수 매기기).
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-250">
                        <span className="text-[10px] font-extrabold text-indigo-500 uppercase block mb-1">Step 3</span>
                        Attach real photos of the food and leave comments.
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-250">
                        <span className="text-[10px] font-extrabold text-indigo-500 uppercase block mb-1">Step 4</span>
                        Toggle the **"Visible Only to Store Owner"** (사장님에게만 보이기) option if you prefer privacy.
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-250">
                        <span className="text-[10px] font-extrabold text-indigo-500 uppercase block mb-1">Step 5</span>
                        Opt to hide/reveal your specific ordered menu items and tap **Done** (완료).
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* VIEW: COUPANG SPECIAL DETAILED MANUAL */}
              {selectedGuideApp === 'coupang' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Banner */}
                  <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-950 flex gap-3 items-start">
                    <Info size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-sm mb-1">Coupang: The Ultimate Convenience Marketplace</h4>
                      Coupang can be found on the Apple App Store or Google Play Store. It is widely famous for **"Rocket Delivery" (로켓배송)** which promises delivery in **1 day or less** for products with the blue rocket graphic.
                    </div>
                  </div>

                  {/* App Links & Download */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <strong className="text-xs text-slate-800 block">Download Coupang App</strong>
                      <span className="text-[11px] text-slate-500">Get the official application for iOS or Android.</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={APP_LINKS.coupang.ios} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        App Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.coupang.android} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Play Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.coupang.web} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Official Site <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* App Download and Sign Up Flow */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50">
                      <h3 className="font-bold text-xs text-slate-800 flex items-center gap-2 mb-3">
                        <Smartphone size={16} className="text-indigo-600" />
                        Step 1: Coupang Sign Up Flow
                      </h3>
                      <ol className="space-y-3 text-xs text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px]">1</span>
                          <div>
                            <span className="font-bold text-slate-800">Download the App:</span> Search 'Coupang' or '쿠팡' in Google Play/Apple App Store.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px]">2</span>
                          <div>
                            <span className="font-bold text-slate-800">Sign Up (회원가입):</span> The first page that opens when you first start the app is a login page. Click on the bottom option <strong className="text-indigo-600 bg-indigo-50 px-1 rounded font-extrabold">"회원가입" (Sign Up)</strong>.
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px]">3</span>
                          <div>
                            <span className="font-bold text-slate-800">Fill in details:</span> Input your personal details (Email, password, name, phone carrier number).
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px]">4</span>
                          <div>
                            <span className="font-bold text-slate-800">SMS Verification:</span> You will then need to verify your phone number. Click on **SMS** and verify it through a text message verification code. That’s it!
                          </div>
                        </li>
                      </ol>
                    </div>

                    <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-xs text-slate-800 flex items-center gap-2 mb-3">
                          <Search size={16} className="text-indigo-600" />
                          Step 2: Searching for Deals
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          Although Coupang is a Korean app, you can use **English in the search bar** and find bedding, cleaning supplies, home gadgets, toiletries, cosmetics, and much more with zero issues!
                        </p>
                        <div className="bg-white p-3 rounded-xl border border-slate-100 text-xs">
                          <span className="font-extrabold text-blue-600 flex items-center gap-1">
                            🚀 Rocket Delivery (로켓배송)
                          </span>
                          <p className="text-slate-500 text-[11px] mt-1">
                            Look for the blue rocket graphic on item pages. These items will arrive at your door within 1 day or less!
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 block italic border-t border-slate-100 pt-2 mt-3">Tip: Rocket Wow members receive free shipping on rocket items.</span>
                    </div>
                  </div>

                  {/* Coupang Address Input Instructions */}
                  <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white rounded-3xl p-6 relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-5">
                      <Truck size={180} />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-base font-extrabold text-emerald-400 flex items-center gap-1.5">
                        <MapPin size={18} />
                        Address Input & Secure Building Password Guide
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Setting your domestic address correctly with correct front door guidelines is extremely critical for reliable drop-offs.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                          <strong className="text-white block mb-1">💡 Address Papago Tip</strong>
                          If you don't know how to read or write your Korean address, simply type in your home address on <span className="text-indigo-300 font-bold">Papago Translator</span> and it will automatically translate/standardize it to Korean for you!
                        </div>

                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                          <strong className="text-white block mb-1">🔑 Building Password Requirement</strong>
                          Most Korean buildings/studios (원룸/오피스텔) have a secure front door with a password to enter. If this is the case, you **must add the front door password** into the delivery instructions so that the courier can place your item safely in front of your room.
                        </div>
                      </div>

                      {/* Address Fields Mapping Visualizer */}
                      <div className="mt-5 bg-black/30 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] text-indigo-300 font-extrabold block uppercase tracking-wider mb-2">Required Fields on Address Input Screen:</span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
                          <div className="border-l-2 border-indigo-400 pl-2">
                            <span className="text-slate-400 block">수취인 이름</span>
                            <span className="font-bold text-slate-200">Receiver's Name</span>
                          </div>
                          <div className="border-l-2 border-indigo-400 pl-2">
                            <span className="text-slate-400 block">휴대폰 번호</span>
                            <span className="font-bold text-slate-200">Phone Number</span>
                          </div>
                          <div className="border-l-2 border-indigo-400 pl-2">
                            <span className="text-slate-400 block">배송지 주소</span>
                            <span className="font-bold text-slate-200">Korean Address</span>
                          </div>
                          <div className="border-l-2 border-indigo-400 pl-2">
                            <span className="text-slate-400 block">배송 시 요청사항</span>
                            <span className="font-bold text-emerald-300">Front Door Password / Delivery Instructions</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between items-center text-xs text-indigo-200 border-t border-white/10 pt-4">
                        <span>Ready? Just hit the big, blue purchase button at the bottom of the screen!</span>
                        <strong className="text-white bg-indigo-600 px-3 py-1 rounded">결제하기</strong>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* VIEW: ABLY SPECIAL DETAILED MANUAL */}
              {selectedGuideApp === 'ably' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Intro Callout */}
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 text-xs text-rose-950">
                    <h4 className="font-extrabold text-sm mb-1">🎀 Ably (에이블리): Free Shipping Fashion App</h4>
                    Ably is extremely popular for free shipping on all products. Follow these instructions to register, use your points, and manage options properly.
                  </div>

                  {/* App Links & Download */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <strong className="text-xs text-slate-800 block">Download Ably App</strong>
                      <span className="text-[11px] text-slate-500">Get the official application for iOS or Android.</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={APP_LINKS.ably.ios} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        App Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.ably.android} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Play Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.ably.web} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Official Site <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Standard Ably Guide (4 steps) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50 space-y-4">
                      <h3 className="font-bold text-xs text-slate-850 flex items-center gap-2">
                        <Smartphone className="text-rose-600" size={16} />
                        Ably User Guide (Step-by-Step)
                      </h3>

                      <div className="space-y-3 text-xs text-slate-600">
                        <div>
                          <span className="font-extrabold text-rose-700 block">1. Install and Login</span>
                          Download and set up your account. Social sign-ups are supported for easier access.
                        </div>
                        <div>
                          <span className="font-extrabold text-rose-700 block">2. Search Items & Shopping Cart</span>
                          Click the product you like, specify size, color, or style options.
                          <div className="mt-1.5 p-2 bg-white rounded-lg border border-slate-100 flex gap-4 text-[11px] font-bold">
                            <span className="text-slate-500">장바구니 = Shopping Basket</span>
                            <span className="text-rose-600">구매하기 = Purchasing</span>
                          </div>
                        </div>
                        <div>
                          <span className="font-extrabold text-rose-700 block">3. Register Coupon Codes</span>
                          Navigate to **'My Page' → 'Coupons' → 'Register Coupon'** to input coupon codes.
                        </div>
                        <div>
                          <span className="font-extrabold text-rose-700 block">4. Point Usage Limits</span>
                          You can apply your accumulated points to discount up to <strong className="text-rose-600">10% of the total product payment</strong> during the final checkout screen.
                        </div>
                      </div>
                    </div>

                    {/* Ably Points & Coupons Policy Details */}
                    <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-xs text-slate-850 flex items-center gap-2 mb-3">
                          <Coins className="text-amber-500" size={16} />
                          Benefit Conditions & Policies
                        </h3>

                        <div className="space-y-2 text-xs text-slate-600">
                          <div className="p-3 bg-white rounded-xl border border-slate-100">
                            <strong className="text-slate-800 block mb-1">📅 Points Expiry Rules</strong>
                            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-500">
                              <li>Purchase confirmation points: <strong className="text-slate-700">Valid for 1 year</strong></li>
                              <li>Product review points: <strong className="text-slate-700">Valid for 6 months</strong></li>
                            </ul>
                          </div>

                          <div className="p-3 bg-white rounded-xl border border-slate-100">
                            <strong className="text-rose-700 block mb-1">⚠️ Coupon Terms & Restrictions</strong>
                            <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-500">
                              <li>Coupons must be used within their specified expiry dates.</li>
                              <li>Certain stores or promotional items might restrict coupon application.</li>
                              <li>Coupons **cannot be combined** together in a single order.</li>
                              <li>In case of a refund, the discounted/coupon amount is deducted and not refunded.</li>
                              <li>For percentage-based coupons, discounts under **10 KRW** are automatically rounded down.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3 p-2 bg-rose-50 text-rose-800 rounded-lg text-xs font-semibold text-center">
                        Benefits status can be viewed in: [할인 혜택] Section
                      </div>
                    </div>
                  </div>

                  {/* Ably Shopping Vocabulary & Dictionary */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <h3 className="font-bold text-xs text-slate-800 flex items-center gap-1.5 mb-3">
                      <BookOpen size={16} className="text-rose-600" />
                      Essential Ably Korean Vocabulary
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        { kr: "장바구니", en: "Shopping Basket" },
                        { kr: "구매하기", en: "Purchasing / Checkout" },
                        { kr: "배송지", en: "Delivery Address" },
                        { kr: "배송 시 요청사항을 선택해 주세요", en: "Please select delivery instructions" },
                        { kr: "쿠폰", en: "Coupon" },
                        { kr: "포인트", en: "Points" }
                      ].map((v, i) => (
                        <div key={i} className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col justify-between">
                          <span className="font-extrabold text-xs text-rose-600">{v.kr}</span>
                          <span className="text-[10px] text-slate-500 mt-1">{v.en}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ably Seller Settings Manual (환경설정) */}
                  <div className="border border-dashed border-rose-200 bg-rose-50/10 rounded-2xl p-5">
                    <h3 className="font-bold text-xs text-slate-800 flex items-center gap-2">
                      <Settings className="text-rose-600" size={16} />
                      Ably Merchant Seller API Setup Guide
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      If you operate as a merchant or seller on Ably, follow these UOS setup procedures carefully to bind your system tokens.
                    </p>
                    <div className="mt-3 bg-white p-4 rounded-xl border border-rose-150 text-xs space-y-1 text-slate-600 leading-relaxed">
                      <p><strong>1. Navigate to UOS:</strong> In the Ably Seller System, navigate to **[Seller Info] → [Basic Info] → [Account Credentials]**.</p>
                      <p><strong>2. Account Setup:</strong> Enter your registered store **Nickname, ID, and Password**.</p>
                      <p><strong>3. Input API Token:</strong> Copy your specific **API KEY (Ably Seller Center API Token)** into the API field to link your store inventory system.</p>
                    </div>
                  </div>

                </div>
              )}

              {/* VIEW: ZIGZAG SPECIAL DETAILED MANUAL */}
              {selectedGuideApp === 'zigzag' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Intro Callout */}
                  <div className="p-4 rounded-2xl bg-fuchsia-50 border border-fuchsia-100 text-xs text-fuchsia-950">
                    <h4 className="font-extrabold text-sm mb-1">⚡ Zigzag (지그재그): Brand & Mall Curator</h4>
                    Zigzag aggregates thousands of popular local online fashion malls. You can explore styles, check out from different stores at once, and track logistics seamlessly.
                  </div>

                  {/* App Links & Download */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <strong className="text-xs text-slate-800 block">Download Zigzag App / PC</strong>
                      <span className="text-[11px] text-slate-500">Get the official app or use PC Web Portal.</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={APP_LINKS.zigzag.ios} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        App Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.zigzag.android} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Play Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.zigzag.web} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        PC Domain (apk.chwiderstand.com) <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Guide steps */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <div className="border border-slate-100 rounded-2xl p-4 bg-slate-50/50">
                      <h4 className="font-extrabold text-xs text-slate-800 flex items-center gap-1.5 mb-2">
                        <Smartphone size={14} className="text-fuchsia-600" />
                        1. Access & Download
                      </h4>
                      <ul className="text-[11px] text-slate-600 space-y-1.5 leading-relaxed">
                        <li>**Mobile Devices:** Search 'ZIGZAG' in standard App Stores and install.</li>
                        <li>**PC Web Access:** Access through the official web domain to browse and buy on a wider screen layout.</li>
                      </ul>
                    </div>

                    <div className="border border-slate-100 rounded-2xl p-4 bg-slate-50/50">
                      <h4 className="font-extrabold text-xs text-slate-800 flex items-center gap-1.5 mb-2">
                        <Search size={14} className="text-fuchsia-600" />
                        2. Search & Order
                      </h4>
                      <ul className="text-[11px] text-slate-600 space-y-1.5 leading-relaxed">
                        <li>Search keywords or browse categorizations to find fashion trends.</li>
                        <li>Review parameters like sizes, colors, price levels, and user photos. Add items to your **Shopping Basket (장바구니)**.</li>
                        <li>Confirm the final accumulated total and checkout simply.</li>
                      </ul>
                    </div>

                    <div className="border border-slate-100 rounded-2xl p-4 bg-slate-50/50">
                      <h4 className="font-extrabold text-xs text-slate-800 flex items-center gap-1.5 mb-2">
                        <Truck size={14} className="text-fuchsia-600" />
                        3. Logistics & Customer Support
                      </h4>
                      <ul className="text-[11px] text-slate-600 space-y-1.5 leading-relaxed">
                        <li>**Track Packages:** Check the status under **My Page → Order Details** anytime.</li>
                        <li>**Returns/Exchanges:** File requests directly with client support if sizes do not fit.</li>
                      </ul>
                    </div>

                  </div>

                </div>
              )}

              {/* VIEW: KAKAO T DETAILED NEW MANUAL */}
              {selectedGuideApp === 'kakao-t' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Callout Box */}
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-blue-950 flex gap-3 items-start">
                    <Info size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-sm mb-1">Kakao T (카카오 T): Transit & Taxi Hailing</h4>
                      Hailing taxis in Korea is completely digitized. Kakao T lets you select your start and destination, see real-time price estimation, and choose physical card/cash payment when you don't have Korean banking cards linked!
                    </div>
                  </div>

                  {/* App Links & Download */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <strong className="text-xs text-slate-800 block">Download Kakao T App</strong>
                      <span className="text-[11px] text-slate-500">Hail taxis easily on iOS and Android.</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={APP_LINKS.kakaoT.ios} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        App Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.kakaoT.android} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Play Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.kakaoT.web} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Official Site <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Kakao T 6-Step Guide */}
                  <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50">
                    <h3 className="font-bold text-xs text-slate-800 flex items-center gap-2 mb-4">
                      <Navigation size={16} className="text-blue-600" />
                      How to Call Taxi on Kakao T (6-Step Manual)
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                        <div>
                          <strong className="text-blue-700 block mb-1">Step 1: Download & Location</strong>
                          Install the app. Make sure to **allow location access permissions** on your device to ensure drivers can pinpoint your exact pick-up location.
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                        <div>
                          <strong className="text-blue-700 block mb-1">Step 2: Choose Taxi Option</strong>
                          On the primary home dashboard, tap the **"Taxi"** icon. (You will also find alternate options like bike rentals, navigation maps, or airport parking).
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                        <div>
                          <strong className="text-blue-700 block mb-1">Step 3: Enter Addresses</strong>
                          Tap the address input field. Input your starting point and final destination. Suggestions will appear in English, or you can paste Korean address strings.
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                        <div>
                          <strong className="text-blue-700 block mb-1">Step 4: Select Vehicle Type</strong>
                          Configure taxi types:
                          <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px] text-slate-500">
                            <li>**General Taxi:** Standard, cost-effective</li>
                            <li>**Deluxe or Black Taxi:** Luxury vehicle services</li>
                            <li>**Smart Call:** Prioritized matching with added surcharge fee</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                        <div>
                          <strong className="text-blue-700 block mb-1">Step 5: Swipe Payment Option</strong>
                          **Crucial Hack:** Swiping left/right lets you toggle payment methods.
                          <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px] text-slate-500">
                            <li>💳 **Online Payment:** Requires Korean card</li>
                            <li>💵 **Pay to Driver (직접 결제):** Pay with physical cash, Toss, or international credit card inside the cab. Select **"Pay to driver"** and tap Apply.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                        <div>
                          <strong className="text-blue-700 block mb-1">Step 6: Request Taxi</strong>
                          Tap "Request Taxi". Once matched, check:
                          <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px] text-slate-500">
                            <li>🚘 Car model & License plate</li>
                            <li>👤 Driver's name & ETA info</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Taxi ride tips */}
                  <div className="bg-slate-900 text-white rounded-2xl p-5 text-xs">
                    <h4 className="font-extrabold text-amber-400 flex items-center gap-1.5 mb-2">
                      <AlertCircle size={16} />
                      Useful Tips for Hailing Taxis in Korea
                    </h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>🚙 **Taxi Base Fare:** Starts around **3,800 KRW** for daytime rides, and goes up to **4,600 KRW** for late-night rides (After 11:00 PM).</li>
                      <li>⚖️ **Fare Rounding System:** Prices are rounded up or down to the nearest 100 KRW. 4,040 KRW → You pay 4,000 KRW; 4,050 KRW → You pay 4,100 KRW.</li>
                      <li>❌ **No Tipping:** Tipping is not expected or customary in Korean taxis.</li>
                      <li>🎒 **Lost belongings:** Keep track of your driver details! If you leave items inside, having the driver license plate makes retrieval much simpler.</li>
                    </ul>
                  </div>

                </div>
              )}

              {/* VIEW: DELIVERED KOREA PARTNERSHIP GUIDE */}
              {selectedGuideApp === 'delivered-korea' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Partner Section */}
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex gap-3 items-start">
                    <Sparkles size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-sm mb-1">Delivered Korea (딜리버드 코리아) Official Partnership</h4>
                      Delivered Korea runs a special partner page allowing international customers to shop and ship items directly from popular domestic stores like **Bunjang, Olive Young, and Zigzag** easily! It handles shopping, warehousing, and worldwide delivery.
                    </div>
                  </div>

                  {/* App Links & Download */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <strong className="text-xs text-slate-800 block">Access Delivered Korea Platform</strong>
                      <span className="text-[11px] text-slate-500">Calculate fees or start shipping directly.</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={APP_LINKS.deliveredKorea.web} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Official Site <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Switch between We Buy and You Buy */}
                  <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
                    <button 
                      onClick={() => setDkOption('we-buy')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        dkOption === 'we-buy' ? 'bg-white text-amber-700 shadow-sm' : 'text-slate-600'
                      }`}
                    >
                      Option 1: We Buy & Ship (Zero Hassle)
                    </button>
                    <button 
                      onClick={() => setDkOption('you-buy')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        dkOption === 'you-buy' ? 'bg-white text-amber-700 shadow-sm' : 'text-slate-600'
                      }`}
                    >
                      Option 2: Package Forwarding (Full Control)
                    </button>
                  </div>

                  {/* OPTION 1: WE BUY & SHIP */}
                  {dkOption === 'we-buy' && (
                    <div className="space-y-4 animate-fadeIn text-xs text-slate-600">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <strong className="text-slate-800 text-sm block mb-1">How We Buy & Ship Works (6 Steps):</strong>
                        We take care of the entire purchasing process on your behalf.
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <strong className="text-amber-700 block mb-1">Step 1: Browse ZIGZAG like normal</strong>
                          Find the clothes, accessories, or shoes you want in the Zigzag app or website.
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <strong className="text-amber-700 block mb-1">Step 2: Copy the product link</strong>
                          Just copy the standard product item URL of the accessory or outfit you want to buy.
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <strong className="text-amber-700 block mb-1">Step 3: Paste link on our platform</strong>
                          Submit the link on Delivered Korea's website. Select the quantity, size, and color. We will cross-verify the details if you are unsure!
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <strong className="text-amber-700 block mb-1">Step 4: We purchase the item for you</strong>
                          Pay for the order on our site. Our expert personal shoppers will buy the ZIGZAG items directly from the sellers on your behalf.
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <strong className="text-amber-700 block mb-1">Step 5: Items arrive at our warehouse</strong>
                          Once the package arrives at our secure warehouse, you get:
                          <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px] text-slate-500">
                            <li>A real photo of your package</li>
                            <li>Precise package weight & dimensions</li>
                            <li>Notes on defects or missing items</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <strong className="text-amber-700 block mb-1">Step 6: Ship internationally</strong>
                          Choose your preferred international courier, consolidate multiple orders together to save costs, and ship straight to your door worldwide!
                        </div>
                      </div>
                    </div>
                  )}

                  {/* OPTION 2: PACKAGE FORWARDING */}
                  {dkOption === 'you-buy' && (
                    <div className="space-y-4 animate-fadeIn text-xs text-slate-600">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <strong className="text-slate-800 text-sm block mb-1">How You Buy, We Ship Works (6 Steps):</strong>
                        Perfect for shoppers who want full control over coupons and sales.
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <span className="bg-slate-100 text-slate-700 font-bold px-1.5 py-0.5 rounded text-[9px] block w-fit mb-1">Step 1</span>
                          <strong>Get Free Korean Address:</strong> Sign up on Delivered Korea and instantly receive your personal warehouse address with a unique suite number.
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <span className="bg-slate-100 text-slate-700 font-bold px-1.5 py-0.5 rounded text-[9px] block w-fit mb-1">Step 2</span>
                          <strong>Ship Order to Address:</strong> Checkout directly on ZIGZAG yourself. Put our warehouse address as your shipping address in the checkout form.
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <span className="bg-slate-100 text-slate-700 font-bold px-1.5 py-0.5 rounded text-[9px] block w-fit mb-1">Step 3</span>
                          <strong>Arrive at Warehouse:</strong> When your box arrives, we upload real-time photos, weights, and transparent measurements directly to your dashboard.
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <span className="bg-slate-100 text-slate-700 font-bold px-1.5 py-0.5 rounded text-[9px] block w-fit mb-1">Step 4</span>
                          <strong>Combine Packages:</strong> Ordered from several shops? Combine all items into one single box to save up to 80% on international courier fees!
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <span className="bg-slate-100 text-slate-700 font-bold px-1.5 py-0.5 rounded text-[9px] block w-fit mb-1">Step 5</span>
                          <strong>Choose Courier Method:</strong> Pick your preferred courier speed and shipping carrier. We'll pack everything securely and prepare customs forms for you.
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-150">
                          <span className="bg-slate-100 text-slate-700 font-bold px-1.5 py-0.5 rounded text-[9px] block w-fit mb-1">Step 6</span>
                          <strong>Receive Your Haul:</strong> Track your shipment all the way home. Your era of easy Korean shopping has officially begun!
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Calculator & Comparison */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                    <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">Comparison: Which Option is Best for You?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="bg-white p-4 rounded-xl border border-slate-150">
                        <span className="text-emerald-700 font-extrabold block mb-1">We Buy & Ship</span>
                        Ideal if you want zero hassle. Perfect if you don't have verified Korean payment accounts or struggle with checkout.
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-150">
                        <span className="text-blue-700 font-extrabold block mb-1">You Buy, We Ship (Forwarding)</span>
                        Ideal if you want full control. Perfect if you want to stack Zigzag coupons, enjoy membership benefits, and pay shops directly.
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <a 
                        href="https://www.delivered.co.kr/en/calculator" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 text-xs text-indigo-600 font-bold hover:underline"
                      >
                        Check shipping rates using the Delivered Korea Calculator <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* TAB: SECONDHAND MASTERY (당근마켓 & 번개장터) */}
          {activeTab === 'secondhand' && (
            <div className="space-y-6 animate-fadeIn text-slate-800">
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-slate-800">Secondhand Market Master Guide</h2>
                  <span className="bg-orange-100 text-orange-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    당근마켓 & 번개장터
                  </span>
                </div>
                <p className="text-slate-500 text-xs mt-1">
                  Learn registration flows, selling checklists, points/coupons mechanics, and safe-trading protocols based on domestic guidelines.
                </p>
              </div>

              {/* Platform Selector Toggles */}
              <div className="flex bg-slate-100 p-1.5 rounded-2xl w-full sm:w-fit">
                <button 
                  onClick={() => setSecondhandPlatform('karrot')}
                  className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    secondhandPlatform === 'karrot' 
                      ? 'bg-white text-orange-600 shadow-sm' 
                      : 'text-slate-600 hover:bg-white/40'
                  }`}
                >
                  <MapPin size={16} />
                  당근마켓 (Karrot)
                </button>
                <button 
                  onClick={() => setSecondhandPlatform('bunjang')}
                  className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    secondhandPlatform === 'bunjang' 
                      ? 'bg-white text-rose-600 shadow-sm' 
                      : 'text-slate-600 hover:bg-white/40'
                  }`}
                >
                  <ArrowLeftRight size={16} />
                  번개장터 (Bunjang)
                </button>
              </div>

              {/* PLATFORM 1: KARROT MARKET (당근마켓) */}
              {secondhandPlatform === 'karrot' && (
                <div className="space-y-8 animate-fadeIn">
                  
                  {/* Summary Callout */}
                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100 text-xs text-orange-950 leading-relaxed">
                    <h4 className="font-extrabold text-xs mb-1">💡 Karrot Market Summary:</h4>
                    How to use Karrot: Install the app, verify your phone number, set your neighborhood to find items near you. Tap the '+' write button to post listings, and chat directly with sellers to arrange safe face-to-face transactions.
                  </div>

                  {/* App Links & Download */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <strong className="text-xs text-slate-800 block">Download Karrot App</strong>
                      <span className="text-[11px] text-slate-500">Find local secondhand trade deals nearby.</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={APP_LINKS.karrot.ios} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        App Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.karrot.android} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Play Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.karrot.web} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Official Site <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* 5-Step Registration Simulator */}
                  <div className="border border-slate-100 rounded-3xl p-6 bg-slate-50/50">
                    <h3 className="text-sm font-bold text-slate-850 flex items-center gap-2">
                      <Smartphone className="text-orange-500" size={18} />
                      Registration Milestone Steps 1 to 5
                    </h3>
                    <p className="text-slate-400 text-[11px] mt-0.5">Click each step button to read requirements in English.</p>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 mt-4">
                      {[
                        { title: "Step 1", subtitle: "Install App" },
                        { title: "Step 2", subtitle: "OTP Verify" },
                        { title: "Step 3", subtitle: "Nickname Rules" },
                        { title: "Step 4", subtitle: "GPS Auth" },
                        { title: "Step 5", subtitle: "Alerts & Photo" }
                      ].map((stp, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setKarrotRegStep(idx)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            karrotRegStep === idx 
                              ? 'bg-white border-orange-500 shadow-sm ring-2 ring-orange-500/10' 
                              : 'bg-white/60 border-slate-200 hover:bg-white'
                          }`}
                        >
                          <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
                            karrotRegStep === idx ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {stp.title}
                          </span>
                          <h4 className="font-extrabold text-xs text-slate-800 mt-1">{stp.subtitle}</h4>
                        </button>
                      ))}
                    </div>

                    {/* Step Details Drawer */}
                    <div className="mt-4 bg-white p-5 rounded-2xl border border-orange-150 shadow-sm leading-relaxed text-xs">
                      {karrotRegStep === 0 && (
                        <div>
                          <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
                            <span className="bg-orange-100 px-2 py-0.5 rounded text-xs">Step 1</span>
                            <h4>Install the Karrot App</h4>
                          </div>
                          <p className="text-xs text-slate-600 mt-2.5">
                            Search for **'Karrot'** or **'당근마켓'** in the App Store (iOS) or Play Store (Android) and install it. Upon opening, you will see the primary signup options.
                          </p>
                        </div>
                      )}

                      {karrotRegStep === 1 && (
                        <div>
                          <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
                            <span className="bg-orange-100 px-2 py-0.5 rounded text-xs">Step 2</span>
                            <h4>Verification via Phone Carrier OTP</h4>
                          </div>
                          <p className="text-xs text-slate-600 mt-2.5">
                            Karrot allows direct signup through your Korean domestic phone number:
                          </p>
                          <div className="mt-3 bg-slate-50 p-3 rounded-xl border border-slate-150 space-y-1.5 text-xs text-slate-600">
                            <li>Open the app and click **"Get Started"** (시작하기).</li>
                            <li>Input your domestic Korean phone number.</li>
                            <li>Receive and enter the 6-digit SMS verification code.</li>
                            <li>Once verified, you will slide automatically to the next setup step.</li>
                          </div>
                          <p className="text-rose-600 font-semibold mt-2">※ Note: Duplicate registrations using the exact same mobile number are strictly prohibited.</p>
                        </div>
                      )}

                      {karrotRegStep === 2 && (
                        <div>
                          <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
                            <span className="bg-orange-100 px-2 py-0.5 rounded text-xs">Step 3</span>
                            <h4>Choosing a Trustworthy Nickname</h4>
                          </div>
                          <p className="text-xs text-slate-600 mt-2.5">
                            Nicknames establish peer trust. Refrain from promotional words, slang, or catfishing. Select a pleasant name like:
                          </p>
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs text-center">
                              "상도동 친절한이웃"<br/>
                              (Kind neighbor of Sangdo-dong)
                            </div>
                            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs text-center">
                              "잠실 엄마의 중고창고"<br/>
                              (Mom's closet in Jamsil)
                            </div>
                            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs text-center">
                              "꼼꼼거래러"<br/>
                              (Meticulous Trader)
                            </div>
                          </div>
                        </div>
                      )}

                      {karrotRegStep === 3 && (
                        <div>
                          <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
                            <span className="bg-orange-100 px-2 py-0.5 rounded text-xs">Step 4</span>
                            <h4>Town Authentication (GPS setting)</h4>
                          </div>
                          <p className="text-xs text-slate-600 mt-2.5">
                            You only display products and trade with neighbors who are physically situated in your region.
                          </p>
                          <ul className="list-disc pl-5 text-xs text-slate-500 mt-2 space-y-1">
                            <li>Tap "Find My Location" on the Map settings screen.</li>
                            <li>You can register up to 2 towns (such as your school neighborhood and dorm neighborhood).</li>
                          </ul>
                          <p className="text-amber-700 font-semibold mt-2">📌 System Rule: To keep your status, you must re-verify your physical location using GPS at least twice a month.</p>
                        </div>
                      )}

                      {karrotRegStep === 4 && (
                        <div>
                          <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
                            <span className="bg-orange-100 px-2 py-0.5 rounded text-xs">Step 5</span>
                            <h4>Enabling Notifications & Profile Photo</h4>
                          </div>
                          <p className="text-xs text-slate-600 mt-2.5">
                            Enable push notifications for incoming chat DMs, price reductions, and local neighborhood notices. Upload a friendly avatar or illustration to receive higher response rates!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Interactive Karrot Selling Steps Checklist */}
                  <div className="border border-slate-100 rounded-3xl p-6 bg-slate-50/20 text-xs">
                    <h3 className="text-sm font-bold text-slate-850 flex items-center gap-2 mb-3">
                      <PlusCircle className="text-orange-600" size={18} />
                      How to List & Sell Items on Karrot Market
                    </h3>

                    <div className="space-y-2.5">
                      {[
                        { 
                          key: 'step1', 
                          title: "1. Click '+ Write' (+글쓰기) at the bottom", 
                          desc: "Open Karrot app, navigate to the bottom menu and tap the prominent '+' button." 
                        },
                        { 
                          key: 'step2', 
                          title: "2. Select 'Sell my item' (내 물건 팔기)", 
                          desc: "Select 'Sell my item' from the prompt options to start drafting your listing." 
                        },
                        { 
                          key: 'step3', 
                          title: "3. Complete GPS Town Authentication (동네인증)", 
                          desc: "You can only list items near your physical location. GPS authentication is verified monthly." 
                        },
                        { 
                          key: 'step4', 
                          title: "4. Upload clean photos & descriptive information", 
                          desc: "Capture accurate condition photos. Detail sizing, minor flaws, and length of ownership clearly." 
                        },
                        { 
                          key: 'step5', 
                          title: "5. Tap 'Done' (작성 완료) to publish", 
                          desc: "Once published, interested local neighbors will contact you directly via 1:1 Karrot Chat." 
                        }
                      ].map((chk) => (
                        <div 
                          key={chk.key}
                          onClick={() => toggleChecklist(chk.key)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 text-left ${
                            sellingChecklist[chk.key] 
                              ? 'bg-emerald-50/50 border-emerald-300' 
                              : 'bg-white border-slate-150 hover:border-slate-300'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            sellingChecklist[chk.key] ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-slate-50'
                          }`}>
                            {sellingChecklist[chk.key] && <Check size={14} />}
                          </div>
                          <div>
                            <h4 className={`text-xs font-bold ${sellingChecklist[chk.key] ? 'text-emerald-900 line-through' : 'text-slate-800'}`}>
                              {chk.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{chk.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* PLATFORM 2: BUNJANG (번개장터) */}
              {secondhandPlatform === 'bunjang' && (
                <div className="space-y-8 animate-fadeIn text-xs text-slate-600">
                  
                  {/* Summary Callout */}
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 text-xs text-rose-950 leading-relaxed">
                    <h4 className="font-extrabold text-xs mb-1">💡 Bunjang Market Summary:</h4>
                    Bunjang enables nationwide shipping. Find items using category and price filters. Chat with sellers via **"Bunjang Talk" (번개톡)**, buy safely using the **"Bunke Pay" (번개페이)** escrow, and apply discount points/coupons during checkout.
                  </div>

                  {/* App Links & Download */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <strong className="text-xs text-slate-800 block">Download Bunjang App</strong>
                      <span className="text-[11px] text-slate-500">Shop K-Pop merchandise and limited fashion nationwide.</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={APP_LINKS.bunjang.ios} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        App Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.bunjang.android} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Play Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.bunjang.web} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Official Site <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Step-by-Step Bunjang Core Flow Cards */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-850 flex items-center gap-2 mb-3 uppercase tracking-wider">
                      Bunjang Marketplace 6-Step Guide
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          idx: "1",
                          title: "Access Platform",
                          desc: "Install the Bunjang mobile app or visit the mobile web domain to sign up.",
                          link: "https://m.bunjang.co.kr/"
                        },
                        {
                          idx: "2",
                          title: "Find Products",
                          desc: "Search keywords, configure categories, or apply price range filters to find specific items."
                        },
                        {
                          idx: "3",
                          title: "Check Seller Info",
                          desc: "Review merchant ratings, trade history, and previous buyer reviews to ensure trustworthiness."
                        },
                        {
                          idx: "4",
                          title: "Secure Purchase",
                          desc: "Tap the Buy button. Apply your accumulated Bunjang points or discount coupons to reduce costs."
                        },
                        {
                          idx: "5",
                          title: "Register Listings",
                          desc: "Upload item pictures, input clear descriptions, set pricing, and publish your items to sell."
                        },
                        {
                          idx: "6",
                          title: "Communicate via Talk",
                          desc: "Use the built-in 'Bunjang Talk' (번개톡) to answer questions. Always prioritize secure payment methods."
                        }
                      ].map((flow) => (
                        <div key={flow.idx} className="bg-white border border-slate-150 p-4 rounded-2xl shadow-sm hover:border-slate-350 transition-colors flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-rose-100 text-rose-700 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{flow.idx}</span>
                              <h4 className="font-extrabold text-xs text-slate-800">{flow.title}</h4>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed">{flow.desc}</p>
                          </div>
                          {flow.link && (
                            <a 
                              href={flow.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="mt-3 text-[10px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-0.5 border-t border-slate-100 pt-2 w-fit"
                            >
                              Go to Web Link <ExternalLink size={10} />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Point & Coupon Mechanics with MY Menu */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200">
                      <h4 className="text-xs font-bold text-amber-950 flex items-center gap-2">
                        <Coins className="text-amber-600" size={16} />
                        How to Earn & Use Bunjang Points
                      </h4>
                      <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                        Points act exactly like digital cash during in-app checkout. You can earn points via:
                      </p>
                      <ul className="list-disc pl-5 text-[11px] text-slate-500 mt-2 space-y-1">
                        <li>**Exploration rewards:** Earn points by exploring targeted directories on the app.</li>
                        <li>**Daily Missions:** Participate in the daily check-in roulette to receive rewards.</li>
                        <li>**Friend Invitation:** Share your referral code with friends to secure bonus credits.</li>
                        <li>**Safe Checkout:** Earn cashback points by completing valid Bunke Pay transactions.</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-rose-950 flex items-center gap-2">
                          <Ticket className="text-rose-600" size={16} />
                          Discount Coupons
                        </h4>
                        <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                          Auto-apply coupons at checkout or manually select them to decrease final payments.
                        </p>
                        <ul className="list-disc pl-5 text-[11px] text-slate-500 mt-2 space-y-1">
                          <li>Secure limited coupons by tapping promotional banners in the app.</li>
                          <li>Win discount coupons by successfully completing trivia events.</li>
                          <li>Download exclusive coupons during themed brand exhibitions.</li>
                        </ul>
                      </div>
                      <div className="mt-4 p-2 bg-white rounded-xl border border-rose-100 text-[11px] text-slate-500 flex items-center justify-between">
                        <span>Check coupon and point balances in:</span>
                        <span className="font-extrabold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">The [MY] Menu</span>
                      </div>
                    </div>

                  </div>

                  {/* Deep Safety Hub (안전 거래 팁 & 제한 사항) */}
                  <div className="bg-slate-900 text-white rounded-3xl p-6 relative overflow-hidden shadow-lg border border-slate-850">
                    <div className="absolute right-0 top-0 opacity-5">
                      <ShieldCheck size={200} />
                    </div>
                    
                    <h3 className="text-sm font-extrabold flex items-center gap-2 text-emerald-400">
                      <ShieldCheck size={20} />
                      Bunjang Safety Guidelines
                    </h3>
                    <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">
                      Follow these safety guidelines strictly to protect your wallet and maintain a clean account.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
                      
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-left">
                        <span className="text-xs text-emerald-400 font-extrabold block mb-1">1. Seller & Item Validation</span>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          Avoid buying cheap electronics from brand-new accounts with no trade history. When selling, disclose minor scratches or damage honestly to prevent customer disputes.
                        </p>
                      </div>

                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-left">
                        <span className="text-xs text-emerald-400 font-extrabold block mb-1">2. Prioritize Bunke Pay (번개페이)</span>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          Always use 'Bunke Pay' secure checkout. This escrow system holds funds until you confirm delivery. Keep chat records and screenshots as transaction evidence.
                        </p>
                      </div>

                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-left">
                        <span className="text-xs text-emerald-400 font-extrabold block mb-1">3. Avoid Restricted Items</span>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          Listing prohibited items (tobacco, alcohol, medicine, prescription glasses, counterfeit items) will result in immediate suspension, blocking your Bunjang Talk (번개톡 제한) access.
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* TAB 3: KAKAO PAY REGISTRATION STEPPER */}
          {activeTab === 'pay-guide' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">Kakao Pay Mobile Setup</h2>
                <p className="text-slate-500 text-xs mt-1">
                  Connect your Korean phone number, Alien Registration Card (ARC), and bank accounts safely.
                </p>
              </div>

              {/* App Links & Download */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <strong className="text-xs text-slate-800 block">Download Kakao Pay standalone App</strong>
                  <span className="text-[11px] text-slate-500">Pay bills, make simple transfers and scan barcodes.</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a href={APP_LINKS.kakaoPay.ios} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                    App Store <ExternalLink size={12} />
                  </a>
                  <a href={APP_LINKS.kakaoPay.android} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                    Play Store <ExternalLink size={12} />
                  </a>
                  <a href={APP_LINKS.kakaoPay.web} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                    Tistory Setup Info <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-xs font-bold text-slate-500">
                  Step {currentStep + 1} of {KAKAO_PAY_STEPS.length}
                </span>
                <div className="flex gap-1">
                  {KAKAO_PAY_STEPS.map((_, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setCurrentStep(idx)}
                      className={`h-2 w-6 rounded-full cursor-pointer transition-all ${
                        idx === currentStep ? 'bg-indigo-600' : idx < currentStep ? 'bg-indigo-300' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Stepper Content Card */}
              <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-violet-950 text-white rounded-3xl p-6 md:p-8 relative min-h-[220px] flex flex-col justify-between overflow-hidden shadow-xl animate-fadeIn">
                <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
                <div className="absolute left-1/3 bottom-0 w-24 h-24 bg-violet-500/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="text-indigo-300 font-extrabold text-xs tracking-wider uppercase bg-white/10 px-2.5 py-1 rounded-md w-fit mb-4">
                    Stage {KAKAO_PAY_STEPS[currentStep].step}: Authentication
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">{KAKAO_PAY_STEPS[currentStep].title}</h3>
                  <p className="text-slate-300 text-xs mt-3 leading-relaxed max-w-2xl">
                    {KAKAO_PAY_STEPS[currentStep].desc}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-8 pt-4 border-t border-white/10 relative z-10">
                  <button 
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="text-xs font-bold text-slate-300 hover:text-white disabled:opacity-35 disabled:cursor-not-allowed flex items-center gap-1"
                  >
                    Previous
                  </button>
                  
                  {currentStep < KAKAO_PAY_STEPS.length - 1 ? (
                    <button 
                      onClick={() => setCurrentStep(prev => prev + 1)}
                      className="bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 shadow-lg"
                    >
                      Next Step
                      <ChevronRight size={14} />
                    </button>
                  ) : (
                    <span className="text-xs bg-emerald-500 text-white font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Check size={14} /> Setup Completed!
                    </span>
                  )}
                </div>
              </div>

              {/* Troubleshooting Alert */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                <h4 className="font-bold text-amber-800 text-xs flex items-center gap-1.5">
                  <AlertCircle size={16} className="text-amber-700" />
                  Stuck on ARS Call Verification? (Step 5)
                </h4>
                <p className="text-xs text-amber-700/90 mt-1 leading-relaxed">
                  When you receive the phone call, it's completely in Korean. You do not need to speak back. All you need to do is look at the 2-digit number shown on your Kakao Pay registration screen, type it into your mobile calling dial pad, and wait for the automated voice call to drop on its own.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: SURVIVAL KOREAN PHRASEBOOK */}
          {activeTab === 'phrasebook' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">Survival Korean Dictionary</h2>
                <p className="text-slate-500 text-xs mt-1">
                  Copy-paste handy phrases into Coupang, Karrot, or Baemin to communicate like a native Korean.
                </p>
              </div>

              <div className="space-y-8">
                {PHRASEBOOK.map((section, sectIdx) => (
                  <div key={sectIdx} className="space-y-3">
                    <h3 className="text-xs font-bold text-indigo-600 bg-indigo-50/50 px-3 py-1.5 rounded-lg w-fit border border-indigo-100/40">
                      {section.category}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.phrases.map((phrase, phraseIdx) => {
                        const uniqueId = `phrase-${sectIdx}-${phraseIdx}`;
                        return (
                          <div key={phraseIdx} className="border border-slate-100 rounded-xl p-4 bg-slate-50/30 flex flex-col justify-between hover:bg-slate-50 hover:border-slate-200 transition-colors">
                            <div>
                              <div className="flex justify-between items-start gap-2">
                                <span className="text-xs font-extrabold text-slate-900 select-all block">
                                  {phrase.kr}
                                </span>
                                
                                <div className="flex gap-1 shrink-0">
                                  <button 
                                    onClick={() => handleSpeak(phrase.kr)}
                                    title="Listen to Korean pronunciation"
                                    className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                  >
                                    <Volume2 size={16} />
                                  </button>
                                  <button 
                                    onClick={() => handleCopy(phrase.kr, uniqueId)}
                                    title="Copy to clipboard"
                                    className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                  >
                                    <Copy size={16} />
                                  </button>
                                </div>
                              </div>
                              <p className="text-xs text-indigo-700 font-semibold mt-1.5">{phrase.en}</p>
                            </div>
                            <div className="mt-3 text-[11px] text-slate-400 border-t border-slate-100/80 pt-2 italic">
                              Used for: {phrase.useCase}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: AI COMPANION TRANSLATOR */}
          {activeTab === 'ai-helper' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-slate-800">K-App Chat Companion</h2>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Powered by Gemini 2.5
                  </span>
                </div>
                <p className="text-slate-500 text-xs mt-1">
                  Translate texts from Korean delivery drivers or second-hand marketplace sellers, and generate polite replies instantly.
                </p>
              </div>

              {/* AI Workspace Container */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs">
                
                {/* Input Panel */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                      What did you receive or want to say?
                    </label>
                    <textarea 
                      rows={6}
                      value={aiInput}
                      onChange={(e) => setAiInput(e.target.value)}
                      placeholder="Example: '문 앞에 두고 벨 눌러 달라는 문자 받았는데 답장 어떻게 해요?' OR paste Korean driver text like: '배달이 완료되었습니다. 감사합니다.'"
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
                    />
                    
                    {/* Fast Presets */}
                    <div className="mt-3">
                      <span className="text-[10px] font-bold text-slate-400 block mb-1.5">Or click a typical scenario preset:</span>
                      <div className="flex flex-wrap gap-1.5">
                        <button 
                          onClick={() => setAiInput("배달원 기사님이 '문 앞이 아니라 경비실에 보관해 달라고 하셨나요?' 라고 문자 왔을때 답변")}
                          className="bg-white hover:bg-slate-100 text-[9px] text-slate-600 px-2 py-1 rounded border border-slate-200"
                        >
                          Delivery Guard Room Check
                        </button>
                        <button 
                          onClick={() => setAiInput("당근마켓에서 '혹시 5000원 깎아주실 수 있나요?' 라고 구매자가 물어봤는데 단호하고 정중하게 거절하는 답변")}
                          className="bg-white hover:bg-slate-100 text-[9px] text-slate-600 px-2 py-1 rounded border border-slate-200"
                        >
                          Polite Price Negociation Decline
                        </button>
                        <button 
                          onClick={() => setAiInput("Coupang seller said: '상품 재고가 소진되어 배송이 3일 지연됩니다. 죄송합니다.' What does this mean?")}
                          className="bg-white hover:bg-slate-100 text-[9px] text-slate-600 px-2 py-1 rounded border border-slate-200"
                        >
                          Coupang Shipping Delay Alert
                        </button>
                      </div>
                    </div>

                    <button 
                      onClick={() => callGeminiAI(aiInput)}
                      disabled={aiLoading || !aiInput.trim()}
                      className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/10"
                    >
                      {aiLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                          Processing Language Context...
                        </>
                      ) : (
                        <>
                          <Sparkles size={16} />
                          Analyze & Get Replies
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Output Panel */}
                <div className="lg:col-span-7">
                  {aiLoading ? (
                    <div className="border border-dashed border-emerald-200 bg-emerald-50/20 rounded-2xl p-12 text-center flex flex-col justify-center items-center h-full min-h-[300px]">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-600 animate-spin"></div>
                        <Sparkles className="text-emerald-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" size={18} />
                      </div>
                      <h4 className="font-bold text-slate-700 mt-4 text-xs">Decoding Cultural Nuance...</h4>
                      <p className="text-slate-400 text-[11px] mt-1 max-w-xs leading-relaxed">
                        Generating highly polite honorific structures suited for Korean delivery agents or sellers.
                      </p>
                    </div>
                  ) : aiError ? (
                    <div className="border border-red-100 bg-red-50/50 rounded-2xl p-6 text-center h-full min-h-[300px] flex flex-col justify-center items-center">
                      <AlertCircle className="text-red-500 mb-2" size={32} />
                      <h4 className="font-bold text-red-800 text-sm">An Error Occurred</h4>
                      <p className="text-red-600 text-[11px] mt-1 max-w-sm">{aiError}</p>
                    </div>
                  ) : aiOutput ? (
                    <div className="space-y-4">
                      {/* Summary & Analysis Header */}
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Context Summary</span>
                        <h4 className="font-bold text-slate-800 text-xs mt-1">{aiOutput.summary}</h4>
                        <p className="text-[11px] text-slate-600 mt-2 leading-relaxed bg-white p-3 rounded-lg border border-slate-100">
                          {aiOutput.analysis}
                        </p>
                      </div>

                      {/* Translations suggestions list */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Polite Korean Reply Suggestions</span>
                        {aiOutput.translations.map((trans, idx) => (
                          <div key={idx} className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 flex gap-3 relative overflow-hidden group">
                            {/* Accent border */}
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"></div>
                            
                            <div className="flex-1 space-y-1 ml-1">
                              <div className="flex items-center gap-1.5">
                                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Option {idx + 1}</span>
                                <span className="text-[11px] text-slate-400 italic font-medium">{trans.context}</span>
                              </div>
                              <p className="text-xs font-extrabold text-slate-800 select-all pt-1 leading-relaxed">
                                {trans.korean}
                              </p>
                              <p className="text-[11px] text-slate-500 pt-0.5 flex items-center gap-1">
                                <ArrowLeftRight size={10} className="text-slate-400 shrink-0" />
                                {trans.english}
                              </p>
                            </div>

                            <div className="flex flex-col gap-1 shrink-0 self-center">
                              <button 
                                onClick={() => handleSpeak(trans.korean)}
                                className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                title="Listen to Korean"
                              >
                                <Volume2 size={16} />
                              </button>
                              <button 
                                onClick={() => handleCopy(trans.korean, `ai-copy-${idx}`)}
                                className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                title="Copy response text"
                              >
                                <Copy size={16} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="border border-dashed border-slate-200 rounded-2xl p-12 text-center h-full min-h-[300px] flex flex-col justify-center items-center">
                      <Sparkles className="text-slate-300 mb-3" size={40} />
                      <h4 className="font-bold text-slate-500 text-xs">Awaiting Your Input</h4>
                      <p className="text-slate-400 text-[11px] mt-1 max-w-xs leading-relaxed">
                        Input a Korean text message you received, or specify what you want to send. Our AI parses and generates responses.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800 shrink-0">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-slate-300">Smart Korea — International Student Guide</p>
            <p className="mt-1 text-[11px] text-slate-500">Helping global residents navigate and utilize South Korea's daily applications.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => setActiveTab('apps')} className="hover:text-white transition-colors">App Directory</button>
            <button onClick={() => setActiveTab('secondhand')} className="hover:text-white transition-colors">Secondhand Guide</button>
            <button onClick={() => setActiveTab('phrasebook')} className="hover:text-white transition-colors">Phrasebook</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
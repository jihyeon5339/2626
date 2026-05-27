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
  Navigation,
  ThumbsUp,
  Map,
  Layers,
  ChevronDown
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
  naverMap: {
    ios: "https://apps.apple.com/kr/app/id311868728",
    android: "https://play.google.com/store/apps/details?id=com.nhn.android.nmap",
    web: "https://map.naver.com"
  },
  deliveredKorea: {
    web: "https://www.delivered.co.kr"
  }
};

const APP_DIRECTORY = [
  {
    id: 'naverMap',
    name: 'NAVER Map (네이버 지도)',
    category: APP_CATEGORIES.MOBILITY,
    typeExplainKr: '대한민국 대표 지도 및 길찾기/내비게이션 어플리케이션',
    typeExplainEn: 'The absolute essential navigation and local mapping app in South Korea.',
    desc: 'The gold standard navigation tool for Korea. Provides superior walking, transit, subway exit routing, and thousands of real local restaurant reviews.',
    howToUse: [
      'Download pre-arrival to bypass airport chaos.',
      'Go to settings and instantly switch to English mode.',
      'Check detailed subway exit numbers to prevent extra walking.',
      'Search via local place names or copy-paste actual Korean addresses.'
    ],
    tips: 'Use the 5-digit bus stop ID to match physical stops in real life, and trust Naver Local reviews for highly updated community recommendations.'
  },
  {
    id: 'baemin',
    name: 'Baemin (배달의민족)',
    category: APP_CATEGORIES.DELIVERY,
    typeExplainKr: '대한민국 1등 실시간 음식 배달 및 마트 직배송 서비스',
    typeExplainEn: 'Korea’s #1 online food delivery, grocery, and quick-commerce platform.',
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
    typeExplainKr: '다음날 새벽 배달이 완료되는 초고속 로켓배송 생필품/종합 쇼핑몰',
    typeExplainEn: 'The legendary "Amazon of Korea" famous for ultra-fast Rocket Delivery.',
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
    typeExplainKr: '실제 GPS 기반 동네 주민들과 소통하는 따뜻한 지역 밀착형 중고거래 플랫폼',
    typeExplainEn: 'Hyper-local secondhand market and community platform based on real physical locations.',
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
    typeExplainKr: '덕질 용품, 패션, 한정판 전문 전국구 안전결제 특화 중고거래 플랫폼',
    typeExplainEn: 'Nationwide secondhand market specializing in K-pop goods, limited sneakers, and fashion.',
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
    typeExplainKr: '모든 상품이 금액 제한 없이 무조건 무료 배송되는 대학생 선호도 1위 패션 쇼핑몰',
    typeExplainEn: 'Trendy youth fashion and style application offering unconditional free shipping on all items.',
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
    typeExplainKr: '수천 개의 소호 디자인 온라인 쇼핑몰을 단 하나의 장바구니에 모아 결제하는 허브 플랫폼',
    typeExplainEn: 'A centralized fashion hub that consolidates thousands of online shopping malls into one checkout.',
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
    typeExplainKr: '택시 호출, 바이크 대여, 대중교통 경로를 한 번에 해결하는 통합 이동 플랫폼',
    typeExplainEn: 'The dominant, all-in-one domestic travel, navigation, and taxi hailing mobility app.',
    desc: 'The primary mobility app in Korea. Used for hailing taxis, renting bikes, checking parking spots, and looking up transit routing.',
    howToUse: [
      'Download Kakao T and log in via your KakaoTalk credentials.',
      'Tap Taxi, specify your pickup and destination locations.',
      'Select a taxi type and choose your preferred payment gateway.',
      'If you have no domestic Korean bank card, select "Pay to Driver" to pay with physical cash or your foreign card directly in the cab.'
    ],
    tips: 'Double check the vehicle license plate before stepping inside, especially in crowded station areas!'
  },
  {
    id: 'kakaoPay',
    name: 'Kakao Pay (카카오페이)',
    category: APP_CATEGORIES.PAYMENT,
    typeExplainKr: '계좌 송금, 오프라인 QR 결제 및 모바일 공과금 납부를 처리하는 필수 금융 솔루션',
    typeExplainEn: 'The central digital wallet for easy money transfers, QR codes, and quick billing in Korea.',
    desc: 'Connects your domestic checking account directly to send quick transfers and finish store checkouts.',
    howToUse: [
      'Download the app or access Kakaopay inside KakaoTalk.',
      'Link your domestic Korean bank checkings account.',
      'Complete ARS phone audio call authorization.',
      'Set your secure 6-digit payment password PIN.'
    ],
    tips: 'Biometric authorization saves serious time when confirming transfers or checkout pages.'
  },
  {
    id: 'deliveredKorea',
    name: 'Delivered Korea (딜리버드 코리아)',
    category: APP_CATEGORIES.SHOPPING,
    typeExplainKr: '인증 및 현지 결제 제한 없이 한국 상품을 구매해서 해외로 발송해주는 물류 파트너',
    typeExplainEn: 'A proxy-buying and international package forwarding shipping companion.',
    desc: 'Enables international residents to order and ship native Korean products globally without local payment verification barriers.',
    howToUse: [
      'Get a free virtual Korean warehouse delivery address.',
      'Place order on Zigzag, Ably, or Bunjang using this warehouse address.',
      'Consolidate multiple packages into one box to save up to 80% on international shipping.'
    ],
    tips: 'Use the official built-in shipping calculator to estimate custom fees beforehand.'
  }
];

// Phrasebook enriched with Korean Romanized Pronunciations
const PHRASEBOOK = [
  {
    category: 'Shopping Apps (쇼핑 앱)',
    phrases: [
      { kr: "이거 할인 중인가요?", pron: "I-geo hal-in jung-in-ga-yo?", en: "Is this on sale?", useCase: "Asking about discounts in a store inquiry." },
      { kr: "배송 언제 와요?", pron: "Bae-song eon-je wa-yo?", en: "When will it arrive?", useCase: "Asking about shipping updates." },
      { kr: "무료배송이에요?", pron: "Mu-ryeo bae-song-i-e-yo?", en: "Is shipping free?", useCase: "Confirming if there are delivery charges." },
      { kr: "환불 가능한가요?", pron: "Hwan-bul ga-neung-han-ga-yo?", en: "Can I get a refund?", useCase: "Inquiring about refund policies." }
    ]
  },
  {
    category: 'Second-hand Trading (중고거래 앱)',
    phrases: [
      { kr: "아직 판매 중인가요?", pron: "A-jik pan-mae jung-in-ga-yo?", en: "Is this still available?", useCase: "First message to send to a seller." },
      { kr: "가격 네고 가능할까요?", pron: "Ga-gyeok ne-go ga-neung-hal-kka-yo?", en: "Can you lower the price?", useCase: "Politely asking for a discount." },
      { kr: "직거래 가능하세요?", pron: "Jik-geo-rae ga-neung-ha-se-yo?", en: "Can we do an in-person transaction?", useCase: "Proposing a safe face-to-face meet." },
      { kr: "택배 거래도 되나요?", pron: "Taek-bae geo-rae-do doe-na-yo?", en: "Is shipping available?", useCase: "Asking to ship the item instead of meeting." },
      { kr: "상태 어떤가요?", pron: "Sang-tae eo-tteon-ga-yo?", en: "What condition is it in?", useCase: "Asking for details about wear and tear." },
      { kr: "거래 완료됐어요.", pron: "Geo-rae wan-ryo-dwaet-seo-yo.", en: "The item has been sold.", useCase: "Informing others the listing is closed." },
      { kr: "채팅 보내드렸어요.", pron: "Chae-ting bo-nae-deuryeot-seo-yo.", en: "I sent you a message.", useCase: "Alerting seller about your DM." }
    ]
  },
  {
    category: 'Delivery Apps (배달 앱)',
    phrases: [
      { kr: "배달 얼마나 걸려요?", pron: "Bae-dal eol-ma-na geol-ryeo-yo?", en: "How long will delivery take?", useCase: "Checking estimated delivery time." },
      { kr: "최소주문금액이 있네요.", pron: "Choe-so ju-mun-geum-aek-i in-nae-yo.", en: "There’s a minimum order amount.", useCase: "Noticing checkout restrictions." },
      { kr: "배달비 얼마예요?", pron: "Bae-dal-bi eol-ma-ye-yo?", en: "How much is the delivery fee?", useCase: "Confirming delivery price." },
      { kr: "포장 주문할게요.", pron: "Po-jang ju-mun-hal-ge-yo.", en: "I’ll order for pickup.", useCase: "Letting restaurant know you will pick it up on foot." },
      { kr: "문 앞에 놓아주세요.", pron: "Mun ap-e no-a-ju-se-yo.", en: "Please leave it at the door.", useCase: "Classic contactless drop-off note." },
      { kr: "요청사항에 적어둘게요.", pron: "Yo-cheong-sa-hang-e jeok-eo-dul-ge-yo.", en: "I’ll write it in the delivery notes.", useCase: "Telling rider or store you left a memo." },
      { kr: "재주문할 정도로 맛있었어요.", pron: "Jae-ju-mun-hal jeong-do-ro ma-sit-seot-seo-yo.", en: "It was good enough to order again.", useCase: "Leaving a pleasant positive review." }
    ]
  },
  {
    category: 'Payment & Identity (결제 표현)',
    phrases: [
      { kr: "송금해드릴게요.", pron: "Song-geum-hae-deu-ril-ge-yo.", en: "I’ll transfer the money.", useCase: "When paying a secondhand seller via direct wire." },
      { kr: "계좌번호 보내주세요.", pron: "Gye-jwa-beon-ho bo-nae-ju-se-yo.", en: "Please send me your bank account number.", useCase: "Asking for payment bank details." },
      { kr: "잔액이 부족해요.", pron: "Jan-aek-i bu-jok-hae-yo.", en: "I don’t have enough balance.", useCase: "Noticing low funds on checking account." },
      { kr: "본인인증이 필요하네요.", pron: "Bon-in-in-jeung-i pil-yo-ha-ne-yo.", en: "Identity verification is required.", useCase: "Faced with SMS/ARC validation prompts." },
      { kr: "간편결제로 할게요.", pron: "Gan-pyeon-gyeol-je-ro hal-ge-yo.", en: "I’ll use easy payment.", useCase: "Paying quickly using Kakao Pay, Toss, or Coupay." }
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

  // NAVER Map Interactive Explorer Active Step
  const [naverActiveStep, setNaverActiveStep] = useState(0);

  // Common Mistakes Checklist for NAVER Map
  const [mistakesChecklist, setMistakesChecklist] = useState({
    mistake1: false,
    mistake2: false,
    mistake3: false,
    mistake4: false,
    mistake5: false,
    mistake6: false
  });

  // Dedicated Active Guide App (For detailed interactive UI)
  const [selectedGuideApp, setSelectedGuideApp] = useState('naver-map');

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

  const toggleMistake = (key) => {
    setMistakesChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Get active selected app directory info
  const activeAppDetail = APP_DIRECTORY.find(app => {
    if (selectedGuideApp === 'naver-map') return app.id === 'naverMap';
    if (selectedGuideApp === 'baemin') return app.id === 'baemin';
    if (selectedGuideApp === 'coupang') return app.id === 'coupang';
    if (selectedGuideApp === 'ably') return app.id === 'ably';
    if (selectedGuideApp === 'zigzag') return app.id === 'zigzag';
    if (selectedGuideApp === 'kakao-t') return app.id === 'kakaoT';
    if (selectedGuideApp === 'delivered-korea') return app.id === 'deliveredKorea';
    return null;
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
                Bypass linguistic hurdles completely. Master food delivery, maps & navigation, online fashion, and localized secondhand marketplaces like a true native.
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
                onClick={() => { setActiveTab('apps'); setSelectedGuideApp('naver-map'); }}
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

              {/* Comprehensive Directory with Simple Explanations */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <ShoppingBag size={16} className="text-indigo-650" />
                  At a Glance: Essential Apps (어플리케이션 개요)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {APP_DIRECTORY.map((app) => (
                    <div key={app.id} className="p-4 rounded-xl border border-slate-150 bg-slate-50/50 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <strong className="text-xs text-slate-900">{app.name}</strong>
                          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">{app.category}</span>
                        </div>
                        <p className="text-xs text-indigo-650 font-bold mb-1">{app.typeExplainKr}</p>
                        <p className="text-[11px] text-slate-500 italic mb-2">{app.typeExplainEn}</p>
                        <p className="text-[11px] text-slate-600 line-clamp-2">{app.desc}</p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-200/60 flex justify-between items-center">
                        <span className="text-[10px] text-slate-450">Tips: {app.tips.substring(0, 45)}...</span>
                        <button 
                          onClick={() => {
                            setActiveTab('apps');
                            if (app.id === 'naverMap') setSelectedGuideApp('naver-map');
                            else if (app.id === 'baemin') setSelectedGuideApp('baemin');
                            else if (app.id === 'coupang') setSelectedGuideApp('coupang');
                            else if (app.id === 'ably') setSelectedGuideApp('ably');
                            else if (app.id === 'zigzag') setSelectedGuideApp('zigzag');
                            else if (app.id === 'kakaoT') setSelectedGuideApp('kakao-t');
                            else if (app.id === 'kakaoPay') setActiveTab('pay-guide');
                            else if (app.id === 'deliveredKorea') setSelectedGuideApp('delivered-korea');
                          }}
                          className="text-[11px] text-indigo-600 font-bold flex items-center gap-0.5 hover:underline"
                        >
                          Guide <ChevronRight size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 tracking-wide uppercase bg-indigo-50 px-2 py-1 rounded">Shopping & Food</span>
                    <h3 className="font-bold text-slate-800 mt-2 text-base">Essential App Manuals</h3>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      Detailed step-by-step interactive instructions on using NAVER Map, Baemin, Coupang, Ably, Zigzag, and Kakao T in English. Master the NICEPAY global payment flows.
                    </p>
                  </div>
                  <button 
                    onClick={() => { setActiveTab('apps'); setSelectedGuideApp('naver-map'); }}
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
              <div className="flex bg-slate-100 p-1.5 rounded-2xl overflow-x-auto gap-1 scrollbar-none">
                <button 
                  onClick={() => setSelectedGuideApp('naver-map')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedGuideApp === 'naver-map' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-white/50'
                  }`}
                >
                  <Map size={14} className="text-indigo-600" />
                  네이버 지도 (NAVER Map)
                </button>
                <button 
                  onClick={() => setSelectedGuideApp('baemin')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedGuideApp === 'baemin' ? 'bg-white text-emerald-650 shadow-sm' : 'text-slate-600 hover:bg-white/50'
                  }`}
                >
                  <Truck size={14} className="text-emerald-550" />
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

              {/* Dynamic App Explanation Box (각 앱에 대한 설명 추가) */}
              {activeAppDetail && (
                <div className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100/50 rounded-2xl border border-indigo-150 animate-fadeIn text-xs">
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="text-[10px] uppercase font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">What App is this? (앱 성격 소개)</span>
                    <span className="font-extrabold text-indigo-900 text-[11px]">{activeAppDetail.category}</span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-sm mb-1">{activeAppDetail.name}</h3>
                  <p className="text-indigo-950 font-bold mb-1">{activeAppDetail.typeExplainKr}</p>
                  <p className="text-slate-600 italic mb-2">{activeAppDetail.typeExplainEn}</p>
                  <p className="text-slate-550 leading-relaxed font-normal">{activeAppDetail.desc}</p>
                </div>
              )}

              {/* VIEW: NAVER MAP DETAILED 13-STEP MANUAL */}
              {selectedGuideApp === 'naver-map' && (
                <div className="space-y-6 animate-fadeIn text-slate-700">
                  
                  {/* Map Header Jumbotron (Google Maps mentioned deleted) */}
                  <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-150 text-xs text-indigo-950 flex gap-3 items-start">
                    <Map className="text-indigo-600 shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-extrabold text-sm mb-1">NAVER Map (네이버 지도): The Foreigner's Ultimate Navigation System</h4>
                      Provides superior walking, current bus/transit tracking, exact building boundaries, and detailed exit numbers across South Korea under secure Domestic Mapping rules.
                    </div>
                  </div>

                  {/* App Download Links */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <strong className="text-xs text-slate-800 block">Download NAVER Map App</strong>
                      <span className="text-[11px] text-slate-500">Configure language before flying to bypass airport arrival chaos!</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={APP_LINKS.naverMap.ios} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        App Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.naverMap.android} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Play Store <ExternalLink size={12} />
                      </a>
                      <a href={APP_LINKS.naverMap.web} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
                        Web Map <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* 13-Step Interactive Navigator */}
                  <div className="border border-slate-100 rounded-3xl p-5 bg-slate-50/40">
                    <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-4">
                      <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles size={16} className="text-indigo-600" />
                        13-Step Comprehensive Manual Explorer
                      </h3>
                      <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Step {naverActiveStep + 1} of 13
                      </span>
                    </div>

                    {/* Step selection dots/scroll */}
                    <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-none">
                      {Array.from({ length: 13 }).map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setNaverActiveStep(idx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all ${
                            naverActiveStep === idx 
                              ? 'bg-indigo-600 text-white shadow-sm' 
                              : 'bg-white text-slate-600 border border-slate-100 hover:bg-slate-100'
                          }`}
                        >
                          Step {idx + 1}
                        </button>
                      ))}
                    </div>

                    {/* Active Step Panel */}
                    <div className="mt-4 bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm leading-relaxed text-xs">
                      
                      {/* STEP 1 */}
                      {naverActiveStep === 0 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 1: Download NAVER Map Pre-Departure</h4>
                          <p className="text-slate-600">
                            Before arriving in Korea, it’s best to install the app in advance. Airport arrival is chaotic with immigration queues, luggage retrievals, SIM/eSIM setups, currency exchanges, and hotel navigation. Configuring a map while tired is frustrating. Install it ahead of your flight!
                          </p>
                          <div className="p-3 bg-indigo-50/50 rounded-xl text-indigo-950 font-semibold text-[11px] border border-indigo-100/40">
                            💡 search for "NAVER Map" on Apple App Store or Google Play Store.
                          </div>
                        </div>
                      )}

                      {/* STEP 2 */}
                      {naverActiveStep === 1 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 2: Change NAVER Map to English Mode</h4>
                          <p className="text-slate-600">
                            NAVER Map supports fully-localized English translation profiles. Changing the default interface language to English is simple:
                          </p>
                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-150 font-semibold space-y-1">
                            <p>1. Open NAVER Map and tap your <strong className="text-slate-800">Profile Menu</strong>.</p>
                            <p>2. Navigate to <strong className="text-slate-800">Settings (설정)</strong>.</p>
                            <p>3. Tap <strong className="text-slate-800">Language (언어)</strong>.</p>
                            <p>4. Select <strong className="text-indigo-600">English</strong> and save settings.</p>
                          </div>
                          <p className="text-[11px] text-slate-500">
                            Once switched, major destinations like Myeongdong, Hongdae, Gangnam, COEX, Incheon Airport, and Gyeongbokgung Palace instantly map in English!
                          </p>
                        </div>
                      )}

                      {/* STEP 3 */}
                      {naverActiveStep === 2 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 3: Understanding the Home Screen</h4>
                          <p className="text-slate-600">
                            You only need to master three core buttons which account for 80% of your experience:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
                            <div className="p-3 rounded-xl border border-slate-150 bg-slate-50/50">
                              <span className="font-bold text-slate-800 block">1. Search (검색)</span>
                              Used for finding places, tourist attractions, specific local addresses or shop titles.
                            </div>
                            <div className="p-3 rounded-xl border border-slate-150 bg-slate-50/50">
                              <span className="font-bold text-slate-800 block">2. Directions (길찾기)</span>
                              Used for detailed subway, transit bus, taxi, walking, or driving routes.
                            </div>
                            <div className="p-3 rounded-xl border border-slate-150 bg-slate-50/50">
                              <span className="font-bold text-slate-800 block">3. Current Location (내위치)</span>
                              Instantly recenters the map grid directly over your physical GPS point.
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 4 */}
                      {naverActiveStep === 4 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 4: Search Like a Local (Hacks)</h4>
                          <p className="text-slate-600">
                            English searches work perfectly for main attractions (e.g. Olive Young, Starbucks, Lotte World). However, local neighborhood diners or hidden cafes can fail or show up differently in Romanized English.
                          </p>
                          <div className="p-3 bg-amber-50 rounded-xl border border-amber-150 space-y-1 text-slate-700">
                            <span className="font-bold block text-amber-900">💡 Local Search Tips:</span>
                            <li>If Kyochon Chicken doesn't show up, search for the Korean name: <strong className="select-all bg-white px-1 py-0.5 rounded border">교촌치킨</strong>.</li>
                            <li>Copy Korean names from Instagram or translate them using Papago.</li>
                            <li>Avoid typing Korean addresses in English (e.g. "202jangchung-dong2-ga") because romanized maps can fail. Search the business or hotel name directly, or paste the Korean address instead!</li>
                          </div>
                        </div>
                      )}

                      {/* STEP 5 */}
                      {naverActiveStep === 4 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 5: Public Transit Navigation (Transit Routing)</h4>
                          <p className="text-slate-600">
                            Korea's public transit system is excellent. NAVER Map aggregates live subway and bus telemetry data to provide highly precise directions.
                          </p>
                          <div className="p-3.5 bg-indigo-900 text-white rounded-xl space-y-2">
                            <span className="font-bold text-emerald-400 block text-[11px] uppercase tracking-wider">How to route:</span>
                            <p>Search destination → Tap "Directions" (길찾기) → Select "Public Transit" (대중교통) icon.</p>
                            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-200">
                              <div className="border-l border-indigo-400 pl-2">
                                <strong>Travel stats shown:</strong> Total travel duration, estimated arrival times, and fares.
                              </div>
                              <div className="border-l border-indigo-400 pl-2">
                                <strong>Transfers shown:</strong> Transfer stations, walking transit times, and specific exit numbers.
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 6 */}
                      {naverActiveStep === 5 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 6: Subway Directions & Exit Strategy</h4>
                          <p className="text-slate-600">
                            Subway routes show details: line number, transfers, arrival estimates, transit durations, fares, and exits.
                          </p>
                          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-150 text-emerald-950">
                            <strong className="block mb-1">🔑 Why Exit Numbers Matter:</strong>
                            Seoul subway stations are huge, with dozens of exits spanning long distances. Choosing the wrong exit can mean crossing major multi-lane roads unnecessarily, walking an extra 15 minutes, or getting completely lost. Always exit exactly where NAVER Map specifies (e.g., <strong className="text-emerald-800 bg-white px-1 rounded border">Exit 10</strong>)! This precise orientation makes NAVER Map extremely vital.
                          </div>
                        </div>
                      )}

                      {/* STEP 7 */}
                      {naverActiveStep === 6 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 7: Using Korean Buses Without Getting Lost</h4>
                          <p className="text-slate-600">
                            Buses can be confusing because stops look identical and routes run in both directions nearby. Don't check *just* the bus number (e.g. Bus 143) as you might board going the wrong way!
                          </p>
                          <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-250 space-y-2 text-slate-800">
                            <strong className="text-amber-950 block flex items-center gap-1.5">
                              <AlertCircle size={14} className="text-amber-700" />
                              The 5-Digit Bus Stop ID Hack
                            </strong>
                            Each Korean bus stop has a unique 5-digit number printed on the physical sign and mapped on NAVER Map (e.g. <strong className="bg-white px-1.5 py-0.5 rounded border border-amber-300">14061</strong>). Match this ID before boarding to confirm you are at the correct stop!
                          </div>
                        </div>
                      )}

                      {/* STEP 8 */}
                      {naverActiveStep === 7 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 8: Walking Navigation for Alleys</h4>
                          <p className="text-slate-600">
                            Walking in historic or highly crowded Korean cities can be tricky due to complex underground networks, giant stations, and narrow lanes. NAVER Map’s walking navigation provides exceptionally precise pathfinding, showing exact crosswalk positions, pedestrian overpasses, and narrow pedestrian lanes in districts like Seongsu, Hongdae, and Myeongdong.
                          </p>
                        </div>
                      )}

                      {/* STEP 9 */}
                      {naverActiveStep === 8 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 9: Indoor Maps for Shopping Complexes</h4>
                          <p className="text-slate-600">
                            NAVER Map provides detailed multi-level indoor maps for large locations like COEX, Starfield malls, Seoul Station, and major department stores. 
                          </p>
                          <p className="text-slate-500 font-semibold">
                            This is incredibly helpful for finding hidden restaurants, locating Olive Young, or navigating train platforms where GPS signals can be weak or unreliable.
                          </p>
                        </div>
                      )}

                      {/* STEP 10 */}
                      {naverActiveStep === 9 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 10: Local Reviews Advantage</h4>
                          <p className="text-slate-600">
                            In Korea, local review culture is highly active. Unlike standard global directories that lack deep local tracking, NAVER Map is backed by a highly active domestic community.
                          </p>
                          <div className="grid grid-cols-2 gap-4 my-2 text-center">
                            <div className="p-3 bg-red-50 text-red-950 border border-red-150 rounded-xl">
                              <span className="block font-extrabold text-sm text-red-700">Other Basic Maps</span>
                              ~50 reviews
                            </div>
                            <div className="p-3 bg-emerald-50 text-emerald-950 border border-emerald-150 rounded-xl">
                              <span className="block font-extrabold text-sm text-emerald-700 font-sans">NAVER Map</span>
                              2,000+ rich reviews
                            </div>
                          </div>
                          <p className="text-slate-500">
                            Reviews include real photos, menus, exact pricing, waiting times, and helpful remarks. Translate reviews directly using Papago or in-browser extensions!
                          </p>
                        </div>
                      )}

                      {/* STEP 11 */}
                      {naverActiveStep === 10 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 11: Save Places for Trip Planning</h4>
                          <p className="text-slate-600">
                            Pre-save locations in lists to plan your itineraries. Mark your hotel, airport terminals, favorite restaurants, cafes, and attractions to easily access them during your travels.
                          </p>
                          <div className="p-3 bg-slate-50 rounded-xl text-slate-500 text-[11px]">
                            ※ Basic search functions work without logging in, but saving places requires setting up a free NAVER account.
                          </div>
                        </div>
                      )}

                      {/* STEP 12 (Google Maps Column Deleted) */}
                      {naverActiveStep === 11 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 12: Map Comparison Matrix</h4>
                          <p className="text-slate-550 mb-2">Detailed comparison showing why NAVER Map is the superior choice for local travel.</p>
                          
                          {/* Comparative Table */}
                          <div className="overflow-x-auto border border-slate-200 rounded-xl">
                            <table className="w-full text-[11px] text-left border-collapse">
                              <thead>
                                <tr className="bg-slate-150 text-slate-800 uppercase font-bold text-[9px] border-b border-slate-250">
                                  <th className="p-2 border-r border-slate-200">Feature</th>
                                  <th className="p-2 border-r border-slate-200 text-indigo-700">NAVER Map</th>
                                  <th className="p-2 text-slate-600">Kakao Map</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                <tr>
                                  <td className="p-2 font-bold border-r border-slate-200 bg-slate-50">English Support</td>
                                  <td className="p-2 border-r border-slate-200 text-emerald-700 font-semibold">Good</td>
                                  <td className="p-2 text-amber-700">Fair</td>
                                </tr>
                                <tr>
                                  <td className="p-2 font-bold border-r border-slate-200 bg-slate-50">English Search</td>
                                  <td className="p-2 border-r border-slate-200 text-emerald-750 font-semibold">Good</td>
                                  <td className="p-2 text-amber-700">Fair</td>
                                </tr>
                                <tr>
                                  <td className="p-2 font-bold border-r border-slate-200 bg-slate-50">Local Info</td>
                                  <td className="p-2 border-r border-slate-200 text-emerald-750 font-bold">Excellent</td>
                                  <td className="p-2 text-slate-700 font-semibold">Strong</td>
                                </tr>
                                <tr>
                                  <td className="p-2 font-bold border-r border-slate-200 bg-slate-50">Subway Route</td>
                                  <td className="p-2 border-r border-slate-200 text-emerald-750 font-bold">Excellent</td>
                                  <td className="p-2 text-slate-700 font-semibold">Good</td>
                                </tr>
                                <tr>
                                  <td className="p-2 font-bold border-r border-slate-200 bg-slate-50">Bus Navigation</td>
                                  <td className="p-2 border-r border-slate-200 text-emerald-750 font-bold">Excellent</td>
                                  <td className="p-2 text-slate-700 font-semibold">Good</td>
                                </tr>
                                <tr>
                                  <td className="p-2 font-bold border-r border-slate-200 bg-slate-50">Walking Paths</td>
                                  <td className="p-2 border-r border-slate-200 text-slate-700 font-semibold">Strong</td>
                                  <td className="p-2 text-slate-700 font-semibold">Strong</td>
                                </tr>
                                <tr>
                                  <td className="p-2 font-bold border-r border-slate-200 bg-slate-50">Local Reviews</td>
                                  <td className="p-2 border-r border-slate-200 text-emerald-750 font-bold">Excellent</td>
                                  <td className="p-2 text-slate-500">Moderate</td>
                                </tr>
                                <tr>
                                  <td className="p-2 font-bold border-r border-slate-200 bg-slate-50">Indoor Mapping</td>
                                  <td className="p-2 border-r border-slate-200 text-slate-750 font-semibold">Available</td>
                                  <td className="p-2 text-rose-650">Limited</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* STEP 13 (Mentions of Google Maps removed) */}
                      {naverActiveStep === 12 && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-sm text-indigo-700">Step 13: Avoid Common Tourist Mistakes</h4>
                          <p className="text-slate-650 mb-3">Check each block to confirm you've mastered these tourist mistakes:</p>
                          
                          <div className="space-y-2">
                            {[
                              { key: 'mistake1', t: "Mistake 1: Relying on international maps without local updates", d: "Standard global maps are fine for initial travel planning, but lack detailed pedestrian walking paths, real-time domestic bus routes, and local neighborhood listings in South Korea." },
                              { key: 'mistake2', t: "Mistake 2: Boarding a bus based only on the line number", d: "Always cross-verify the Stop ID, stop name, and the route direction before boarding to prevent going the wrong way." },
                              { key: 'mistake3', t: "Mistake 3: Ignoring subway exit numbers", d: "Wrong subway exits lead to massive detours, crossing giant junctions, or walking an extra 15 minutes." },
                              { key: 'mistake4', t: "Mistake 4: Disregarding local reviews", d: "Local diners might look closed or empty on generic maps but have 2,000+ detailed photos and reviews on Naver." },
                              { key: 'mistake5', t: "Mistake 5: Searching Korean addresses in English", d: "English romanizations often fail. Search by place name directly or paste the Korean address characters instead." },
                              { key: 'mistake6', t: "Mistake 6: Forgetting Indoor Maps in complex malls", d: "COEX or department store layouts can be incredibly confusing. Indoor maps save massive planning time." }
                            ].map(mstk => (
                              <div 
                                key={mstk.key}
                                onClick={() => toggleMistake(mstk.key)}
                                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                                  mistakesChecklist[mstk.key] 
                                    ? 'bg-indigo-50 border-indigo-300' 
                                    : 'bg-slate-50/50 border-slate-150 hover:border-slate-350'
                                }`}
                              >
                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                                  mistakesChecklist[mstk.key] ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300 bg-white'
                                }`}>
                                  {mistakesChecklist[mstk.key] && <Check size={12} />}
                                </div>
                                <div>
                                  <span className={`font-bold block ${mistakesChecklist[mstk.key] ? 'text-indigo-900 line-through' : 'text-slate-800'}`}>{mstk.t}</span>
                                  <p className="text-[11px] text-slate-500 mt-0.5">{mstk.d}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Simple Next/Prev Buttons inside Step Explorer */}
                    <div className="flex justify-between items-center mt-4">
                      <button 
                        disabled={naverActiveStep === 0}
                        onClick={() => setNaverActiveStep(prev => prev - 1)}
                        className="text-xs font-bold text-slate-500 hover:text-indigo-600 disabled:opacity-40"
                      >
                        Previous Step
                      </button>
                      <button 
                        disabled={naverActiveStep === 12}
                        onClick={() => setNaverActiveStep(prev => prev + 1)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 shadow-sm disabled:opacity-40"
                      >
                        Next Step
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                </div>
              )}

              {/* VIEW: BAEMIN (배달의민족) DETAILED NEW MANUAL */}
              {selectedGuideApp === 'baemin' && (
                <div className="space-y-6 animate-fadeIn text-slate-700">
                  
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

                </div>
              )}

              {/* VIEW: COUPANG SPECIAL DETAILED MANUAL */}
              {selectedGuideApp === 'coupang' && (
                <div className="space-y-6 animate-fadeIn text-slate-750">
                  
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

                </div>
              )}

              {/* VIEW: ABLY SPECIAL DETAILED MANUAL */}
              {selectedGuideApp === 'ably' && (
                <div className="space-y-6 animate-fadeIn text-slate-750">
                  
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

                </div>
              )}

              {/* VIEW: ZIGZAG SPECIAL DETAILED MANUAL */}
              {selectedGuideApp === 'zigzag' && (
                <div className="space-y-6 animate-fadeIn text-slate-750">
                  
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

                </div>
              )}

              {/* VIEW: KAKAO T DETAILED NEW MANUAL */}
              {selectedGuideApp === 'kakao-t' && (
                <div className="space-y-6 animate-fadeIn text-slate-750">
                  
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

                </div>
              )}

              {/* VIEW: DELIVERED KOREA PARTNERSHIP GUIDE */}
              {selectedGuideApp === 'delivered-korea' && (
                <div className="space-y-6 animate-fadeIn text-slate-750">
                  
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

              {/* Dynamic App Explanation Box (각 앱에 대한 설명 추가) */}
              {secondhandPlatform === 'karrot' ? (
                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100/40 rounded-2xl border border-orange-150 animate-fadeIn text-xs">
                  <span className="text-[10px] uppercase font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md block w-fit mb-1.5">What App is this? (앱 성격 소개)</span>
                  <h3 className="font-extrabold text-slate-900 text-sm mb-1">Karrot (당근마켓)</h3>
                  <p className="text-orange-950 font-bold mb-1">실제 GPS 기반 동네 주민들과 소통하는 따뜻한 지역 밀착형 중고거래 플랫폼</p>
                  <p className="text-slate-600 italic mb-2">Hyper-local secondhand market and community platform based on real physical locations.</p>
                  <p className="text-slate-550 leading-relaxed font-normal">Hyper-local secondhand marketplace. You can buy and sell items with neighbors within a few kilometers range.</p>
                </div>
              ) : (
                <div className="p-4 bg-gradient-to-r from-rose-50 to-rose-100/40 rounded-2xl border border-rose-150 animate-fadeIn text-xs">
                  <span className="text-[10px] uppercase font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md block w-fit mb-1.5">What App is this? (앱 성격 소개)</span>
                  <h3 className="font-extrabold text-slate-900 text-sm mb-1">Bunjang (번개장터)</h3>
                  <p className="text-rose-950 font-bold mb-1">덕질 용품, 패션, 한정판 전문 전국구 안전결제 특화 중고거래 플랫폼</p>
                  <p className="text-slate-600 italic mb-2">Nationwide secondhand market specializing in K-pop goods, limited sneakers, and fashion.</p>
                  <p className="text-slate-550 leading-relaxed font-normal">Nationwide secondhand market, great for K-pop goods, electronics, and fashion items with shipping support.</p>
                </div>
              )}

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

                </div>
              )}

              {/* PLATFORM 2: BUNJANG (번개장터) */}
              {secondhandPlatform === 'bunjang' && (
                <div className="space-y-8 animate-fadeIn text-xs text-slate-650">
                  
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

                </div>
              )}

            </div>
          )}

          {/* TAB 3: KAKAO PAY REGISTRATION STEPPER */}
          {activeTab === 'pay-guide' && (
            <div className="space-y-6 animate-fadeIn text-slate-700">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">Kakao Pay Mobile Setup</h2>
                <p className="text-slate-500 text-xs mt-1">
                  Connect your Korean phone number, Alien Registration Card (ARC), and bank accounts safely.
                </p>
              </div>

              {/* App Explanation Block */}
              <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100/40 rounded-2xl border border-amber-150 animate-fadeIn text-xs">
                <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md block w-fit mb-1.5">What App is this? (앱 성격 소개)</span>
                <h3 className="font-extrabold text-slate-900 text-sm mb-1">Kakao Pay (카카오페이)</h3>
                <p className="text-amber-950 font-bold mb-1">계좌 송금, 오프라인 QR 결제 및 모바일 공과금 납부를 처리하는 필수 금융 솔루션</p>
                <p className="text-slate-600 italic mb-2">The central digital wallet for easy money transfers, QR codes, and quick billing in Korea.</p>
                <p className="text-slate-550 leading-relaxed font-normal">Connects your domestic checking account directly to send quick transfers and finish store checkouts.</p>
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
            <div className="space-y-6 animate-fadeIn text-slate-700">
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
                                <div className="space-y-1">
                                  {/* Korean characters */}
                                  <span className="text-sm font-extrabold text-slate-900 select-all block">
                                    {phrase.kr}
                                  </span>
                                  {/* English Phonetic Pronunciation String right beneath */}
                                  <span className="text-[11px] font-semibold text-slate-450 block italic bg-slate-100/80 px-2 py-0.5 rounded border border-slate-200/40 w-fit">
                                    🗣️ "{phrase.pron}"
                                  </span>
                                </div>
                                
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
                              <p className="text-xs text-indigo-700 font-semibold mt-2">{phrase.en}</p>
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
                      <h4 className="font-bold text-red-800 text-xs">An Error Occurred</h4>
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
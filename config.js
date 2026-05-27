/**
 * Modern Minimal Wedding Invitation Configuration
 */
const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,
  // ── 메인 (히어로) ──
  groom: {
    name: "정호민",
    nameEn: "정 호 민",
    father: "정진균",
    mother: "최선미",
    fatherDeceased: false,
    motherDeceased: false
  },
  bride: {
    name: "박찬미",
    nameEn: "박 찬 미",
    father: "박종운",
    mother: "",
    fatherDeceased: false,
    motherDeceased: false
  },
  wedding: {
    date: "2026-09-05",
    time: "12:00",
    venue: "근화원",
    hall: "",
    address: "서울특별시 광진구 광나루로 441",
    tel: "0507-1328-6489",
    mapLinks: {
      kakao: "https://kko.to/IPKncYPdvT",
      naver: "https://naver.me/5uxiAHeF"
    }
  },
  // ── STAGE 1. COVENANT (현재 화면에 표시되지 않음) ──
  invitation: {
    title: "COVENANT",
    message: ""
  },
  // ── STAGE 2. INVITATION ──
  story: {
    title: "초청 (招請)",
    content: "나의 생애는\n모든 지름길을 돌아서\n네게로 난 단 하나의 에움길이었다.\n<나희덕, 푸른 밤>\n\n모든 지름길을 돌아\n마침내 평생을 함께할 사람을 만났습니다.\n서로의 울타리가 되어,\n기쁨도 슬픔도 함께 나누며\n평생을 걸어가겠습니다.\n귀한 걸음으로 축복해 주시면 감사하겠습니다."
  },
  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "정호민", bank: "신한은행", number: "110-413-844501" },
      { role: "아버지", name: "정진균", bank: "하나은행", number: "627-910270-66207" }
    ],
    bride: [
      { role: "신부", name: "박찬미", bank: "카카오뱅크", number: "3333-01-3372382" },
      { role: "아버지", name: "박종운", bank: "신한은행", number: "110-149-610083" }
    ]
  },
  kakaoShare: {
    jsKey: "",
    title: "정호민 · 박찬미 결혼합니다",
    description: "2026년 9월 5일 정오, 근화원"
  }
};

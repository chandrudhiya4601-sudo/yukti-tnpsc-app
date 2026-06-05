export const SUBJECTS = [
  { id: "history", name: "History", tamil: "வரலாறு", icon: "🏛️" },
  { id: "polity", name: "Polity", tamil: "அரசியல்", icon: "⚖️" },
  { id: "geography", name: "Geography", tamil: "புவியியல்", icon: "🌏" },
  { id: "science", name: "Science", tamil: "அறிவியல்", icon: "🔬" },
  { id: "economy", name: "Economy", tamil: "பொருளாதாரம்", icon: "📊" },
  { id: "tamil", name: "Tamil", tamil: "தமிழ்", icon: "📜" },
  { id: "current", name: "Current Affairs", tamil: "நடப்பு நிகழ்வுகள்", icon: "📰" },
];

export const QUESTION_BANK = {
  history: [
    { q: "Who founded the Maurya Empire?\nமௌரிய பேரரசை நிறுவியவர் யார்?", options: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Kanishka"], ans: 0, exp: "Chandragupta Maurya founded the Maurya Empire in 322 BCE.\nகி.மு. 322-ல் சந்திரகுப்த மௌரியர் நிறுவினார்." },
    { q: "The Battle of Plassey was fought in?\nபிளாசி போர் எந்த ஆண்டு?", options: ["1757", "1764", "1775", "1799"], ans: 0, exp: "Battle of Plassey (1757) - British East India Company vs Nawab of Bengal." },
    { q: "Who gave the slogan 'Do or Die'?\n'செய் அல்லது மடி' கொடுத்தவர்?", options: ["Nehru", "Bose", "Gandhi", "Tilak"], ans: 2, exp: "Mahatma Gandhi gave 'Do or Die' during Quit India Movement 1942." },
    { q: "Indus Valley Civilization discovered in?\nசிந்து வெளி நாகரிகம் கண்டுபிடிக்கப்பட்ட ஆண்டு?", options: ["1901", "1921", "1935", "1942"], ans: 1, exp: "Discovered in 1921 by Daya Ram Sahni at Harappa." },
    { q: "First Governor General of independent India?\nசுதந்திர இந்தியாவின் முதல் கவர்னர் ஜெனரல்?", options: ["Rajendra Prasad", "C. Rajagopalachari", "Lord Mountbatten", "Sardar Patel"], ans: 2, exp: "Lord Mountbatten was the first Governor General (1947–1948)." },
  ],
  polity: [
    { q: "Indian Constitution came into effect on?\nஇந்திய அரசியலமைப்பு நடைமுறைக்கு வந்த நாள்?", options: ["Jan 26, 1950", "Aug 15, 1947", "Nov 26, 1949", "Jan 26, 1948"], ans: 0, exp: "The Constitution came into effect on January 26, 1950 - Republic Day." },
    { q: "How many schedules in Indian Constitution?\nஇந்திய அரசியலமைப்பில் எத்தனை அட்டவணைகள்?", options: ["10", "12", "14", "16"], ans: 1, exp: "There are 12 schedules. Originally 8, later increased to 12." },
    { q: "Father of Indian Constitution?\nஇந்திய அரசியலமைப்பின் தந்தை யார்?", options: ["Gandhi", "Nehru", "Dr. B.R. Ambedkar", "Patel"], ans: 2, exp: "Dr. B.R. Ambedkar is the Father of Indian Constitution." },
    { q: "Article 370 related to which state?\n370வது சட்டப்பிரிவு எந்த மாநிலம்?", options: ["Punjab", "J&K", "Himachal Pradesh", "Sikkim"], ans: 1, exp: "Article 370 gave special status to Jammu & Kashmir. Abrogated in 2019." },
    { q: "Preamble begins with?\nமுகவுரை எதுடன் தொடங்குகிறது?", options: ["We the Citizens", "We the People of India", "In the name of God", "We the Representatives"], ans: 1, exp: "Preamble begins with 'WE, THE PEOPLE OF INDIA'." },
  ],
  geography: [
    { q: "Longest river in India?\nஇந்தியாவின் மிக நீண்ட ஆறு?", options: ["Yamuna", "Ganga", "Godavari", "Brahmaputra"], ans: 1, exp: "Ganga (2,525 km) is the longest river in India." },
    { q: "Highest peak in Tamil Nadu?\nதமிழ்நாட்டின் உயரமான சிகரம்?", options: ["Kodaikanal", "Doddabetta", "Anaimudi", "Mahendragiri"], ans: 1, exp: "Doddabetta (2,637m) is the highest peak in Tamil Nadu." },
    { q: "Palk Strait separates India from?\nபாக் நீரிணை இந்தியாவை எந்த நாட்டிலிருந்து பிரிக்கிறது?", options: ["Maldives", "Bangladesh", "Sri Lanka", "Myanmar"], ans: 2, exp: "Palk Strait separates India (Tamil Nadu) from Sri Lanka." },
    { q: "'Dakshina Ganga' river?\n'தட்சிண கங்கை' என்று அழைக்கப்படும் ஆறு?", options: ["Cauvery", "Godavari", "Krishna", "Narmada"], ans: 1, exp: "Godavari is called 'Dakshina Ganga'." },
    { q: "Nilgiri Hills located in?\nநீலகிரி மலைகள் எந்த மாநிலத்தில்?", options: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"], ans: 2, exp: "Nilgiri Hills are located in Tamil Nadu." },
  ],
  science: [
    { q: "Chemical formula of water?\nநீரின் வேதியியல் சூத்திரம்?", options: ["H2O2", "H2O", "HO2", "H3O"], ans: 1, exp: "Water = H2O (2 Hydrogen + 1 Oxygen atoms)." },
    { q: "Which planet is the Red Planet?\nசிவப்பு கோள் எது?", options: ["Venus", "Jupiter", "Mars", "Saturn"], ans: 2, exp: "Mars is the Red Planet due to iron oxide on its surface." },
    { q: "Speed of light?\nஒளியின் வேகம்?", options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"], ans: 0, exp: "Speed of light ≈ 3×10⁸ m/s (300,000 km/s)." },
    { q: "DNA stands for?\nDNA விரிவாக்கம்?", options: ["Deoxyribose Nucleic Acid", "Deoxyribonucleic Acid", "Diribonucleic Acid", "Deoxyribose Nuclear Acid"], ans: 1, exp: "DNA = Deoxyribonucleic Acid. Carries genetic information." },
    { q: "Vitamin produced by sunlight?\nசூரிய ஒளியில் உற்பத்தியாகும் வைட்டமின்?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], ans: 3, exp: "Vitamin D is produced when skin is exposed to sunlight." },
  ],
  economy: [
    { q: "GDP stands for?\nGDP விரிவாக்கம்?", options: ["Gross Domestic Product", "General Domestic Product", "Gross Development Product", "General Development Product"], ans: 0, exp: "GDP = Gross Domestic Product. Total value of goods & services." },
    { q: "'Bank of Banks' in India?\nஇந்தியாவில் 'வங்கிகளின் வங்கி'?", options: ["SBI", "RBI", "NABARD", "PNB"], ans: 1, exp: "RBI (Reserve Bank of India) is the Bank of Banks." },
    { q: "Five Year Plans modeled after?\nபஞ்சவர்ஷ திட்டம் எந்த நாட்டை மாதிரியாக?", options: ["USA", "UK", "USSR", "China"], ans: 2, exp: "India's Five Year Plans were modeled after USSR's planning model." },
    { q: "SEBI regulates?\nSEBI எந்த துறையை ஒழுங்குபடுத்துகிறது?", options: ["Banking", "Insurance", "Securities Markets", "Agriculture"], ans: 2, exp: "SEBI = Securities and Exchange Board of India. Regulates capital markets." },
    { q: "Father of Green Revolution in India?\nஇந்தியாவில் பசுமைப் புரட்சியின் தந்தை?", options: ["M.S. Swaminathan", "Verghese Kurien", "Norman Borlaug", "C. Subramaniam"], ans: 0, exp: "M.S. Swaminathan is the Father of Green Revolution in India." },
  ],
  tamil: [
    { q: "ஐம்பெருங்காப்பியங்கள் எத்தனை?", options: ["3", "5", "7", "8"], ans: 1, exp: "ஐம்பெருங்காப்பியங்கள் 5: சிலப்பதிகாரம், மணிமேகலை, சீவகசிந்தாமணி, வளையாபதி, குண்டலகேசி." },
    { q: "திருக்குறளை இயற்றியவர்?", options: ["இளங்கோ அடிகள்", "திருவள்ளுவர்", "கம்பர்", "அவ்வையார்"], ans: 1, exp: "திருக்குறளை திருவள்ளுவர் இயற்றினார். 1330 குறள்கள் கொண்டது." },
    { q: "சிலப்பதிகாரத்தின் ஆசிரியர்?", options: ["சீத்தலைச் சாத்தனார்", "இளங்கோ அடிகள்", "திருவள்ளுவர்", "நக்கீரர்"], ans: 1, exp: "சிலப்பதிகாரம் இளங்கோ அடிகளால் இயற்றப்பட்டது." },
    { q: "தொல்காப்பியம் என்ன வகை நூல்?", options: ["காப்பியம்", "இலக்கண நூல்", "நீதி நூல்", "அகப்பாடல்"], ans: 1, exp: "தொல்காப்பியம் தமிழின் மிகப் பழைமையான இலக்கண நூல்." },
    { q: "புறநானூறு எந்த இலக்கியம்?", options: ["சங்க இலக்கியம்", "மத்திய கால இலக்கியம்", "பக்தி இலக்கியம்", "நவீன இலக்கியம்"], ans: 0, exp: "புறநானூறு சங்க இலக்கியத்தில் ஒன்று. புறப்பொருள் பாடல்களின் தொகுப்பு." },
  ],
  current: [
    { q: "India's first indigenous aircraft carrier?\nஇந்தியாவின் முதல் தேசீய விமானம் தாங்கி கப்பல்?", options: ["INS Vikrant", "INS Vikramaditya", "INS Viraat", "INS Vishal"], ans: 0, exp: "INS Vikrant — India's first indigenously built aircraft carrier, commissioned 2022." },
    { q: "G20 Summit 2023 hosted by?\nG20 உச்சி மாநாடு 2023 எங்கு?", options: ["China", "USA", "India", "Brazil"], ans: 2, exp: "India hosted G20 Summit 2023 in New Delhi. Theme: 'Vasudhaiva Kutumbakam'." },
    { q: "Operation Ganga — evacuation from?\nஆபரேஷன் கங்கா — எந்த நாட்டிலிருந்து?", options: ["Afghanistan", "Ukraine", "Sudan", "Yemen"], ans: 1, exp: "Operation Ganga (2022) — evacuated Indian nationals from Ukraine." },
    { q: "Chess Olympiad 2022 hosted by?\nசெஸ் ஒலிம்பியாட் 2022 நடந்த இந்திய நகரம்?", options: ["Mumbai", "Delhi", "Chennai", "Kolkata"], ans: 2, exp: "Chennai hosted the 44th Chess Olympiad 2022." },
    { q: "Chandrayaan-3 Moon landing year?\nசந்திரயான்-3 சந்திரனில் தரையிறங்கிய ஆண்டு?", options: ["2022", "2023", "2024", "2021"], ans: 1, exp: "Chandrayaan-3 landed on Moon's south pole on August 23, 2023." },
  ],
};

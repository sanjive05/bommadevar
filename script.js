'use strict';

/* ==============================
   TRANSLATIONS
   ============================== */
const translations = {
  en: {
    pageTitle: "Bommadevar Transport – Chicken Manure Supplier | Namakkal",
    logoSub: "Transport & Lorry Service",
    navAbout: "About", navBenefits: "Benefits", navGallery: "Gallery", navAreas: "Service Areas", navContact: "Contact",
    headerCta: "Order Now",
    heroBadge: "🚛 Farm to Field — Our Own Lorries",
    heroLine1: "Premium Chicken", heroLine2: "Manure Fertilizer",
    heroDesc: "We buy directly from poultry farms and deliver to your field using our own transport lorries — fresh, fast, and affordable. Serving Tamil Nadu, Kerala & Karnataka from Namakkal.",
    statFarmers: "Happy Farmers", statStates: "States Covered", statLorries: "Lorry Fleet",
    btnWhatsapp: "Chat on WhatsApp", btnCall: "Call Now",
    floatCard1: "Own Lorry Fleet", floatCard2: "100% Organic", scrollHint: "Scroll to explore",
    aboutLabel: "WHO WE ARE",
    aboutTitle: "Bommadevar Transport & Lorry Service",
    aboutBadge: "Own Lorries",
    aboutP1: "We are <strong>பொம்மதேவர் Transport</strong>, based in <strong>Namakkal, Tamil Nadu</strong> — proudly operating our own fleet of transport lorries. We purchase fresh chicken manure directly from licensed poultry farms and deliver it straight to farmers across Tamil Nadu, Kerala, and Karnataka.",
    aboutP2: "Because we own our lorries, we eliminate middlemen — giving you the freshest quality manure at the lowest price, with reliable and timely delivery on every single order.",
    addrLabel: "Our Base Location", phoneLabel: "Phone & WhatsApp", emailLabel: "Email",
    feat1: "We own our transport lorries", feat2: "Buy direct from poultry farms",
    feat3: "Sell direct to farmers — no middlemen", feat4: "Based in Namakkal, Tamil Nadu",
    howLabel: "HOW IT WORKS", howTitle: "Farm to Field — Directly by Us",
    howDesc: "No brokers, no delays. Our lorries handle the whole journey.",
    step1Title: "Buy from Farm", step1Desc: "We purchase fresh, high-quality chicken manure directly from trusted poultry farms in the region.",
    step2Title: "Load Our Lorries", step2Desc: "We load and transport using our own fleet of lorries from Namakkal — ensuring freshness every time.",
    step3Title: "Deliver to Farmer", step3Desc: "Your order arrives straight to your farm gate — fresh, affordable, and ready for a better harvest.",
    benefitsLabel: "WHY CHOOSE US", benefitsTitle: "Nature's Most Powerful Fertilizer",
    benefitsDesc: "Chicken manure is 3x richer in nutrients than cattle manure — and we bring it fresh from farm to field using our own lorries.",
    b1Title: "Own Lorry Fleet", b1Desc: "We own and operate our own transport lorries — no third-party delays, lower cost, faster delivery for you.",
    b2Title: "Rich in Nitrogen", b2Desc: "High nitrogen content promotes lush green growth, stronger stems, and faster vegetative development in all crops.",
    b3Title: "Improves Soil Health", b3Desc: "Enhances soil structure, moisture retention, and microbial activity for long-term fertile farmland.",
    b4Title: "Boosts Yield", b4Desc: "Farmers report up to 40% increase in crop yield after switching to our premium chicken manure fertilizer.",
    b5Title: "Best Prices", b5Desc: "Direct from farm, transported by us — no middlemen means the most competitive prices in South India.",
    b6Title: "Eco-Friendly", b6Desc: "Zero chemicals. Zero synthetic additives. 100% natural and safe for soil, water, and future generations.",
    galleryLabel: "OUR FARM & TRANSPORT", galleryTitle: "See What We Offer",
    galleryDesc: "From poultry farms to your fields — loaded in our lorries and delivered fresh.",
    filterAll: "All", filterFarm: "Farm", filterProduct: "Product", filterDelivery: "Delivery",
    galt1: "Poultry Farm Source", galt2: "Processed Manure", galt3: "Treated Fields", galt4: "Our Lorry Delivery",
    galt5: "Healthy Poultry", galt6: "Rich Farmland", galt7: "Packed & Ready", galt8: "Thriving Crops",
    areasLabel: "WHERE WE DELIVER", areasTitle: "Our Delivery Areas",
    areasDesc: "Our lorries cover three states from our Namakkal base — delivering to your doorstep.",
    area1Name: "Tamil Nadu", area1Desc: "Our home base — Namakkal. We deliver across Coimbatore, Salem, Madurai, Thanjavur, Trichy, Tirunelveli and all major farming districts.",
    area2Name: "Kerala", area2Desc: "Serving farms across Thrissur, Palakkad, Ernakulam, Kozhikode, and all major agricultural belts of God's Own Country.",
    area3Name: "Karnataka", area3Desc: "Delivering to Bengaluru Rural, Tumkur, Hassan, Mysuru, Dharwad, Belagavi and major farming communities statewide.",
    crop1:"🌾 Paddy", crop2:"🥜 Groundnut", crop3:"🌿 Vegetables",
    crop4:"🥥 Coconut", crop5:"🍌 Banana", crop6:"🌶️ Spices",
    crop7:"🌻 Sunflower", crop8:"🌽 Maize", crop9:"🫘 Pulses",
    testiLabel: "HAPPY CUSTOMERS", testiTitle: "What Farmers Say",
    testi1: '"பொம்மதேவர் லாரி சேவை மூலம் உரம் வாங்கியதால் நேரத்தில் வந்தது. தரமும் சிறந்தது. விலையும் மிகவும் குறைவு!"',
    testi2: '"ഞങ്ങളുടെ തെങ്ങ് തോട്ടത്തിലേക്ക് നേരിട്ട് ലോറിയിൽ ഡെലിവറി ചെയ്തു. ഗുണനിലവാരം മികച്ചത്!"',
    testi3: '"ಈ ಕೋಳಿ ಗೊಬ್ಬರ ನಮ್ಮ ಜಮೀನಿಗೆ ತುಂಬಾ ಉಪಯೋಗಕರ. ಲಾರಿಯಲ್ಲಿ ನೇರ ಡೆಲಿವರಿ ಬಂತು. ಧನ್ಯವಾದ!"',
    testi4: '"நம்மக்கல்லில் இருந்து நேரடியாக எங்கள் வயலுக்கு உரம் கொண்டு வந்தனர். தரம் அருமை, விலை மலிவு!"',
    testi5: '"Best organic fertilizer supplier. They own their lorries so delivery is always on time and prices are unbeatable!"',
    contactLabel: "GET IN TOUCH", contactTitle: "Order Today & Grow Tomorrow",
    contactDesc: "Call, WhatsApp, or email us. Based in Namakkal — we respond within hours!",
    ctaWhatsappTitle: "WhatsApp Us", ctaWhatsappDesc: "Fastest way to get a quote & place your order",
    ctaPhoneTitle: "Call Us", ctaPhoneDesc: "Talk directly for bulk orders & pricing",
    ctaEmailTitle: "Email Us", ctaEmailDesc: "Send your farm details and requirements",
    ctaAddrTitle: "Our Location", ctaAddrDesc: "Come visit or enquire from our base",
    formTitle: "Send us a Message", formName: "Your Name", formPhone: "Phone Number",
    formState: "State", formStatePlaceholder: "Select your state",
    formTN: "Tamil Nadu", formKL: "Kerala", formKA: "Karnataka",
    formQty: "Quantity Required", formQtyPlaceholder: "Select quantity",
    formQty1: "1–10 bags (50 kg each)", formQty2: "10–50 bags", formQty3: "Bulk / Full Lorry Load",
    formMsg: "Message (optional)", formSubmit: "Send Enquiry",
    footerTagline: "Farm to Field — Powered by Our Own Lorries. Serving South India's Farmers.",
    footerNav: "Quick Links", footerStates: "States We Deliver", footerContact: "Contact Info",
    footerCopy: "© 2024 பொம்மதேவர் Transport & Lorry Service, Namakkal. All rights reserved. | Made with ❤️ for South Indian Farmers",
    toastMsg: "Enquiry sent! We'll contact you soon.",
  },

  ta: {
    pageTitle: "பொம்மதேவர் டிரான்ஸ்போர்ட் – கோழி உர சப்ளையர் | நாமக்கல்",
    logoSub: "டிரான்ஸ்போர்ட் & லாரி சேவை",
    navAbout: "எங்களை பற்றி", navBenefits: "நன்மைகள்", navGallery: "படங்கள்",
    navAreas: "சேவை பகுதிகள்", navContact: "தொடர்பு",
    headerCta: "இப்போதே ஆர்டர் செய்யுங்கள்",
    heroBadge: "🚛 பண்ணையிலிருந்து வயல் வரை — நம் சொந்த லாரிகள்",
    heroLine1: "சிறந்த கோழி", heroLine2: "உர உரம்",
    heroDesc: "நாங்கள் நேரடியாக கோழிப் பண்ணைகளிலிருந்து வாங்கி, நம் சொந்த டிரான்ஸ்போர்ட் லாரிகள் மூலம் உங்கள் வயலுக்கே கொண்டு வருகிறோம் — புதுமை, விரைவு, மலிவு. நாமக்கல்லிலிருந்து தமிழ்நாடு, கேரளா & கர்நாடகா சேவை.",
    statFarmers: "மகிழ்ச்சியான விவசாயிகள்", statStates: "மாநிலங்கள்", statLorries: "சொந்த லாரிகள்",
    btnWhatsapp: "வாட்ஸ்ஆப்பில் பேசுங்கள்", btnCall: "இப்போது அழைக்கவும்",
    floatCard1: "சொந்த லாரி கொள்ளளவு", floatCard2: "100% இயற்கை", scrollHint: "கீழே உருட்டுங்கள்",
    aboutLabel: "நாங்கள் யார்",
    aboutTitle: "பொம்மதேவர் டிரான்ஸ்போர்ட் & லாரி சேவை",
    aboutBadge: "சொந்த லாரிகள்",
    aboutP1: "நாங்கள் <strong>பொம்மதேவர் டிரான்ஸ்போர்ட்</strong>, <strong>நாமக்கல், தமிழ்நாடு</strong> ஆகிய இடத்தில் அமைந்திருக்கிறோம் — நம் சொந்த டிரான்ஸ்போர்ட் லாரி கொள்ளளவை பெருமையுடன் இயக்குகிறோம். உரிமம் பெற்ற கோழிப் பண்ணைகளிலிருந்து நேரடியாக புதிய கோழி உரத்தை வாங்கி, தமிழ்நாடு, கேரளா மற்றும் கர்நாடகாவில் உள்ள விவசாயிகளுக்கு நேரடியாக வழங்குகிறோம்.",
    aboutP2: "நாங்கள் லாரிகளை சொந்தமாக வைத்திருப்பதால், நடுத்தரகர்களை நீக்குகிறோம் — மிகக் குறைந்த விலையில் சிறந்த தரமான உரத்தை, ஒவ்வொரு ஆர்டரிலும் நம்பகமான மற்றும் சரியான நேரத்தில் டெலிவரி செய்கிறோம்.",
    addrLabel: "எங்கள் இருப்பிடம்", phoneLabel: "தொலைபேசி & வாட்ஸ்ஆப்", emailLabel: "மின்னஞ்சல்",
    feat1: "நாங்கள் டிரான்ஸ்போர்ட் லாரிகளை சொந்தமாக வைத்திருக்கிறோம்",
    feat2: "கோழிப் பண்ணைகளிலிருந்து நேரடியாக வாங்குகிறோம்",
    feat3: "விவசாயிகளுக்கு நேரடியாக விற்கிறோம் — நடுத்தரகர் இல்லை",
    feat4: "நாமக்கல், தமிழ்நாட்டில் உள்ளோம்",
    howLabel: "எப்படி செயல்படுகிறது", howTitle: "பண்ணையிலிருந்து வயல்வரை — நேரடியாக நாங்களே",
    howDesc: "தரகர்கள் இல்லை, தாமதமில்லை. எங்கள் லாரிகள் முழு பயணத்தையும் கவனித்துக்கொள்கின்றன.",
    step1Title: "பண்ணையிலிருந்து வாங்குகிறோம்", step1Desc: "நம்பகமான கோழிப் பண்ணைகளிலிருந்து புதிய, உயர்தரமான கோழி உரத்தை நேரடியாக வாங்குகிறோம்.",
    step2Title: "எங்கள் லாரிகளில் ஏற்றுகிறோம்", step2Desc: "நாமக்கல்லிலிருந்து எங்கள் சொந்த லாரிகளைப் பயன்படுத்தி ஏற்றி கொண்டு செல்கிறோம் — புத்துணர்வை உறுதி செய்கிறோம்.",
    step3Title: "விவசாயிக்கு டெலிவரி செய்கிறோம்", step3Desc: "உங்கள் ஆர்டர் நேரடியாக உங்கள் பண்ணை வாசலுக்கு வருகிறது — புதுமை, மலிவு, சிறந்த அறுவடைக்கு தயார்.",
    benefitsLabel: "ஏன் நம்மை தேர்வு செய்ய வேண்டும்",
    benefitsTitle: "இயற்கையின் மிகவும் சக்திவாய்ந்த உரம்",
    benefitsDesc: "கோழி உரம் மாட்டு சாணத்தை விட 3 மடங்கு அதிக ஊட்டச்சத்து கொண்டது — நாங்கள் நம் சொந்த லாரிகளில் பண்ணையிலிருந்து வயல் வரை கொண்டு செல்கிறோம்.",
    b1Title: "சொந்த லாரி கொள்ளளவு", b1Desc: "நாங்கள் சொந்தமாக டிரான்ஸ்போர்ட் லாரிகளை இயக்குகிறோம் — மூன்றாம் தரப்பு தாமதமில்லை, குறைந்த செலவு, வேகமான டெலிவரி.",
    b2Title: "நைட்ரஜன் நிறைந்தது", b2Desc: "அதிக நைட்ரஜன் சத்து பசுமையான வளர்ச்சி, வலுவான தண்டுகள் மற்றும் வேகமான வளர்ச்சியை ஊக்குவிக்கிறது.",
    b3Title: "மண் ஆரோக்கியத்தை மேம்படுத்துகிறது", b3Desc: "மண் அமைப்பு, ஈரப்பதம் மற்றும் நுண்ணுயிர் செயல்பாட்டை மேம்படுத்துகிறது.",
    b4Title: "விளைச்சலை அதிகரிக்கும்", b4Desc: "விவசாயிகள் எங்கள் உரத்தை பயன்படுத்திய பின் 40% வரை விளைச்சல் அதிகரிப்பை தெரிவிக்கின்றனர்.",
    b5Title: "சிறந்த விலைகள்", b5Desc: "நேரடியாக பண்ணையிலிருந்து, நாங்களே கொண்டு வருகிறோம் — நடுத்தரகர்கள் இல்லை என்பதால் தென் இந்தியாவில் மிகவும் போட்டியிடும் விலைகள்.",
    b6Title: "சுற்றுச்சூழல் நட்பு", b6Desc: "எந்த இரசாயனமும் இல்லை. 100% இயற்கை மற்றும் மண், நீர் மற்றும் எதிர்கால தலைமுறைகளுக்கு பாதுகாப்பானது.",
    galleryLabel: "எங்கள் பண்ணை & டிரான்ஸ்போர்ட்", galleryTitle: "நாங்கள் என்ன வழங்குகிறோம்",
    galleryDesc: "கோழிப் பண்ணைகளிலிருந்து உங்கள் வயல்வரை — எங்கள் லாரிகளில் ஏற்றி புதிதாக டெலிவரி செய்யப்படுகிறது.",
    filterAll: "அனைத்தும்", filterFarm: "பண்ணை", filterProduct: "தயாரிப்பு", filterDelivery: "டெலிவரி",
    galt1: "கோழிப் பண்ணை மூலம்", galt2: "செயலாக்கப்பட்ட உரம்", galt3: "உரமிடப்பட்ட வயல்கள்",
    galt4: "எங்கள் லாரி டெலிவரி", galt5: "ஆரோக்கியமான கோழி",
    galt6: "வளமான நிலம்", galt7: "பேக் செய்து தயார்", galt8: "செழிப்பான பயிர்கள்",
    areasLabel: "நாங்கள் எங்கே டெலிவரி செய்கிறோம்", areasTitle: "எங்கள் டெலிவரி பகுதிகள்",
    areasDesc: "எங்கள் லாரிகள் நாமக்கல் தளத்திலிருந்து மூன்று மாநிலங்களை உள்ளடக்கியது.",
    area1Name: "தமிழ்நாடு", area1Desc: "எங்கள் தாயகம் — நாமக்கல். கோயம்புத்தூர், சேலம், மதுரை, தஞ்சாவூர், திருச்சி, திருநெல்வேலி மற்றும் அனைத்து முக்கிய விவசாய மாவட்டங்களிலும் டெலிவரி செய்கிறோம்.",
    area2Name: "கேரளா", area2Desc: "திருச்சூர், பாலக்காடு, எர்ணாகுளம், கோழிக்கோடு மற்றும் கேரளாவின் அனைத்து முக்கிய விவசாய பகுதிகளிலும் சேவை செய்கிறோம்.",
    area3Name: "கர்நாடகா", area3Desc: "பெங்களூர் கிராமப்புறம், தும்கூர், ஹாசன், மைசூர், தர்வாட், பெலகாவி மற்றும் மாநிலம் முழுவதும் டெலிவரி.",
    crop1:"🌾 நெல்", crop2:"🥜 நிலக்கடலை", crop3:"🌿 காய்கறிகள்",
    crop4:"🥥 தேங்காய்", crop5:"🍌 வாழை", crop6:"🌶️ மசாலா",
    crop7:"🌻 சூரியகாந்தி", crop8:"🌽 மக்காச்சோளம்", crop9:"🫘 பருப்பு வகைகள்",
    testiLabel: "மகிழ்ச்சியான வாடிக்கையாளர்கள்", testiTitle: "விவசாயிகள் என்ன சொல்கிறார்கள்",
    testi1: '"பொம்மதேவர் லாரி சேவை மூலம் உரம் வாங்கியதால் நேரத்தில் வந்தது. தரமும் சிறந்தது. விலையும் மிகவும் குறைவு!"',
    testi2: '"ഞങ്ങളുടെ തെങ്ങ് തോട്ടത്തിലേക്ക് നേരിട്ട് ലോറിയിൽ ഡെലിവറി ചെയ്തു. ഗുണനിലവാരം മികച്ചത്!"',
    testi3: '"ಈ ಕೋಳಿ ಗೊಬ್ಬರ ನಮ್ಮ ಜಮೀನಿಗೆ ತುಂಬಾ ಉಪಯೋಗಕರ. ಲಾರಿಯಲ್ಲಿ ನೇರ ಡೆಲಿವರಿ ಬಂತು. ಧನ್ಯವಾದ!"',
    testi4: '"நம்மக்கல்லில் இருந்து நேரடியாக எங்கள் வயலுக்கு உரம் கொண்டு வந்தனர். தரம் அருமை, விலை மலிவு!"',
    testi5: '"Best organic fertilizer supplier. They own their lorries so delivery is always on time and prices are unbeatable!"',
    contactLabel: "தொடர்பு கொள்ளுங்கள்", contactTitle: "இன்று ஆர்டர் செய்து நாளை வளருங்கள்",
    contactDesc: "அழைக்கவும், வாட்ஸ்ஆப் அல்லது மின்னஞ்சல் அனுப்பவும். நாமக்கல்லில் இருக்கிறோம் — சில மணி நேரத்தில் பதிலளிப்போம்!",
    ctaWhatsappTitle: "வாட்ஸ்ஆப்பில் அனுப்புங்கள்", ctaWhatsappDesc: "விலை மேற்கோள் மற்றும் ஆர்டர் செய்ய வேகமான வழி",
    ctaPhoneTitle: "அழைக்கவும்", ctaPhoneDesc: "மொத்த ஆர்டர் விசாரணைகளுக்கு நேரடியாக பேசுங்கள்",
    ctaEmailTitle: "மின்னஞ்சல் அனுப்புங்கள்", ctaEmailDesc: "உங்கள் பண்ணை விவரங்கள் அனுப்புங்கள்",
    ctaAddrTitle: "எங்கள் இருப்பிடம்", ctaAddrDesc: "நாமக்கலில் எங்களை நேரில் சந்திக்கவும்",
    formTitle: "எங்களுக்கு செய்தி அனுப்புங்கள்", formName: "உங்கள் பெயர்",
    formPhone: "தொலைபேசி எண்", formState: "மாநிலம்",
    formStatePlaceholder: "மாநிலத்தை தேர்ந்தெடுக்கவும்",
    formTN: "தமிழ்நாடு", formKL: "கேரளா", formKA: "கர்நாடகா",
    formQty: "தேவையான அளவு", formQtyPlaceholder: "அளவை தேர்ந்தெடுக்கவும்",
    formQty1: "1–10 பைகள் (50 கிலோ ஒவ்வொன்றும்)", formQty2: "10–50 பைகள்", formQty3: "மொத்த / முழு லாரி சுமை",
    formMsg: "செய்தி (விரும்பினால்)", formSubmit: "விசாரணை அனுப்பு",
    footerTagline: "பண்ணையிலிருந்து வயல்வரை — நம் சொந்த லாரிகளால். தென் இந்திய விவசாயிகளுக்கு சேவை.",
    footerNav: "விரைவு இணைப்புகள்", footerStates: "நாங்கள் டெலிவரி செய்யும் மாநிலங்கள்",
    footerContact: "தொடர்பு தகவல்",
    footerCopy: "© 2024 பொம்மதேவர் டிரான்ஸ்போர்ட் & லாரி சேவை, நாமக்கல். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. | தென் இந்திய விவசாயிகளுக்காக ❤️",
    toastMsg: "விசாரணை அனுப்பப்பட்டது! நாங்கள் விரைவில் தொடர்புகொள்வோம்.",
  },

  ml: {
    pageTitle: "ബൊമ്മദേവർ ട്രാൻസ്പോർട്ട് – കോഴി വളം വിതരണക്കാരൻ | നാമക്കൽ",
    logoSub: "ട്രാൻസ്പോർട്ട് & ലോറി സർവീസ്",
    navAbout: "ഞങ്ങളെക്കുറിച്ച്", navBenefits: "ഗുണങ്ങൾ", navGallery: "ഗാലറി",
    navAreas: "സേവന മേഖലകൾ", navContact: "ബന്ധപ്പെടുക",
    headerCta: "ഇപ്പോൾ ഓർഡർ ചെയ്യൂ",
    heroBadge: "🚛 ഫാമിൽ നിന്ന് വയലിലേക്ക് — സ്വന്തം ലോറികൾ",
    heroLine1: "പ്രീമിയം കോഴി", heroLine2: "വളം",
    heroDesc: "ഞങ്ങൾ നേരിട്ട് കോഴിഫാമുകളിൽ നിന്ന് വാങ്ങി, സ്വന്തം ട്രാൻസ്പോർട്ട് ലോറികളിൽ നിങ്ങളുടെ വയലിലേക്ക് എത്തിക്കുന്നു — പുതിയത്, വേഗത്തിൽ, താങ്ങാനാകുന്ന വിലയിൽ. നാമക്കലിൽ നിന്ന് കേരളം, തമിഴ്‌നാട്, കർണാടക സേവനം.",
    statFarmers: "സന്തുഷ്ടരായ കർഷകർ", statStates: "സംസ്ഥാനങ്ങൾ", statLorries: "സ്വന്തം ലോറി",
    btnWhatsapp: "വാട്ട്സ്ആപ്പിൽ ചാറ്റ് ചെയ്യൂ", btnCall: "ഇപ്പോൾ വിളിക്കൂ",
    floatCard1: "സ്വന്തം ലോറി ഫ്ലീറ്റ്", floatCard2: "100% ഓർഗാനിക്", scrollHint: "ചുരുട്ടി കാണൂ",
    aboutLabel: "ഞങ്ങൾ ആരാണ്",
    aboutTitle: "ബൊമ്മദേവർ ട്രാൻസ്പോർട്ട് & ലോറി സർവീസ്",
    aboutBadge: "സ്വന്തം ലോറികൾ",
    aboutP1: "ഞങ്ങൾ <strong>பொம்மதேவர் Transport</strong>, <strong>നാമക്കൽ, തമിഴ്‌നാട്</strong> ആസ്ഥാനമാക്കി — സ്വന്തം ട്രാൻസ്പോർട്ട് ലോറി ഫ്ലീറ്റ് അഭിമാനത്തോടെ പ്രവർത്തിപ്പിക്കുന്നു. ലൈസൻസ്ഡ് കോഴിഫാമുകളിൽ നിന്ന് നേരിട്ട് പുതിയ കോഴി വളം വാങ്ങി തമിഴ്‌നാട്, കേരളം, കർണാടക എന്നിവിടങ്ങളിലെ കർഷകർക്ക് ഡെലിവർ ചെയ്യുന്നു.",
    aboutP2: "ഞങ്ങളുടെ ലോറികൾ സ്വന്തം ആണ് — ഇടനിലക്കാരെ ഒഴിവാക്കി ഏറ്റവും കുറഞ്ഞ വിലയിൽ ഏറ്റവും നല്ല ഗുണനിലവാരമുള്ള വളം, ഓരോ ഓർഡറിലും വിശ്വസനീയവും സമയബദ്ധവുമായ ഡെലിവറി.",
    addrLabel: "ഞങ്ങളുടെ ഇടം", phoneLabel: "ഫോൺ & വാട്ട്സ്ആപ്പ്", emailLabel: "ഇ-മെയിൽ",
    feat1: "ഞങ്ങൾ ട്രാൻസ്പോർട്ട് ലോറികൾ സ്വന്തമായി ഉടമസ്ഥരാണ്",
    feat2: "കോഴിഫാമുകളിൽ നിന്ന് നേരിട്ട് വാങ്ങുന്നു",
    feat3: "കർഷകർക്ക് നേരിട്ട് വിൽക്കുന്നു — ഇടനിലക്കാർ ഇല്ല",
    feat4: "നാമക്കൽ, തമിഴ്‌നാട്ടിൽ സ്ഥിതി ചെയ്യുന്നു",
    howLabel: "എങ്ങനെ പ്രവർത്തിക്കുന്നു", howTitle: "ഫാമിൽ നിന്ന് വയലിലേക്ക് — ഞങ്ങൾ നേരിട്ട്",
    howDesc: "ഇടനിലക്കാർ ഇല്ല, കാലതാമസം ഇല്ല. ഞങ്ങളുടെ ലോറികൾ മുഴുവൻ യാത്രയും കൈകാര്യം ചെയ്യുന്നു.",
    step1Title: "ഫാമിൽ നിന്ന് വാങ്ങുന്നു", step1Desc: "വിശ്വസ്ത കോഴിഫാമുകളിൽ നിന്ന് നേരിട്ട് പുതിയ ഉയർന്ന ഗുണമേന്മയുള്ള കോഴി വളം വാങ്ങുന്നു.",
    step2Title: "ഞങ്ങളുടെ ലോറികളിൽ കയറ്റുന്നു", step2Desc: "നാമക്കലിൽ നിന്ന് സ്വന്തം ലോറി ഫ്ലീറ്റ് ഉപയോഗിച്ച് ലോഡ് ചെയ്ത് കൊണ്ടുപോകുന്നു — എല്ലായ്‌പ്പോഴും പുതുമ ഉറപ്പ്.",
    step3Title: "കർഷകന് ഡെലിവർ ചെയ്യുന്നു", step3Desc: "നിങ്ങളുടെ ഓർഡർ നേരിട്ട് ഫാം ഗേറ്റിൽ എത്തുന്നു — പുതിയത്, താങ്ങാനാകുന്നത്, നല്ല വിളവ് ലഭിക്കാൻ.",
    benefitsLabel: "ഞങ്ങളെ തിരഞ്ഞെടുക്കാൻ", benefitsTitle: "പ്രകൃതിയുടെ ഏറ്റവും ശക്തമായ വളം",
    benefitsDesc: "കോഴി വളത്തിൽ കന്നുകാലി ചാണകത്തേക്കാൾ 3 മടങ്ങ് കൂടുതൽ പോഷകങ്ങൾ — ഞങ്ങൾ ഫാം മുതൽ വയൽ വരെ സ്വന്തം ലോറിയിൽ കൊണ്ടുവരുന്നു.",
    b1Title: "സ്വന്തം ലോറി ഫ്ലീറ്റ്", b1Desc: "ഞങ്ങൾ സ്വന്തം ട്രാൻസ്പോർട്ട് ലോറികൾ ഉടമസ്ഥരായി പ്രവർത്തിക്കുന്നു — മൂന്നാം കക്ഷി കാലതാമസം ഇല്ല, ചെലവ് കുറവ്, ഡെലിവറി വേഗം.",
    b2Title: "നൈട്രജൻ സമ്പന്നം", b2Desc: "ഉയർന്ന നൈട്രജൻ ഉള്ളടക്കം ഹരിതാഭ വളർച്ച, ശക്തമായ തണ്ടുകൾ, വേഗമേറിയ സസ്യ വികസനം പ്രോത്സാഹിപ്പിക്കുന്നു.",
    b3Title: "മണ്ണ് ആരോഗ്യം മെച്ചപ്പെടുത്തുന്നു", b3Desc: "ദീർഘകാലം ഫലഭൂയിഷ്ഠമായ കൃഷിഭൂമിക്കായി മണ്ണ് ഘടന, ഈർപ്പ, സൂക്ഷ്മജീവ പ്രവർത്തനം മെച്ചപ്പെടുത്തുന്നു.",
    b4Title: "വിളവ് വർദ്ധിപ്പിക്കുന്നു", b4Desc: "ഞങ്ങളുടെ വളം ഉപയോഗിച്ചതിന് ശേഷം 40% വരെ വിളവ് വർദ്ധനവ് കർഷകർ റിപ്പോർട്ട് ചെയ്തിരിക്കുന്നു.",
    b5Title: "ഏറ്റവും കുറഞ്ഞ വില", b5Desc: "ഫാർമിൽ നിന്ന് നേരിട്ട്, ഞങ്ങൾ തന്നെ കൊണ്ടുവരുന്നു — ഇടനിലക്കാർ ഇല്ല, ദക്ഷിണേന്ത്യയിലെ ഏറ്റവും മത്സരാധിഷ്ഠിത വില.",
    b6Title: "പരിസ്ഥിതി സൗഹൃദം", b6Desc: "രാസവസ്തുക്കൾ ഇല്ല. 100% പ്രകൃതിദത്തം, മണ്ണ്, ജലം, ഭാവി തലമുറകൾക്ക് സുരക്ഷിതം.",
    galleryLabel: "ഞങ്ങളുടെ ഫാം & ട്രാൻസ്പോർട്ട്", galleryTitle: "ഞങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നത് കാണൂ",
    galleryDesc: "കോഴിഫാമുകളിൽ നിന്ന് നിങ്ങളുടെ വയലിലേക്ക് — ഞങ്ങളുടെ ലോറിയിൽ ലോഡ് ചെയ്ത് പുതിയതായി ഡെലിവർ ചെയ്യുന്നു.",
    filterAll: "എല്ലാം", filterFarm: "ഫാം", filterProduct: "ഉൽപ്പന്നം", filterDelivery: "ഡെലിവറി",
    galt1: "കോഴിഫാം സ്രോതസ്സ്", galt2: "സംസ്കരിച്ച വളം", galt3: "ചികിത്സിച്ച വയലുകൾ",
    galt4: "ഞങ്ങളുടെ ലോറി ഡെലിവറി", galt5: "ആരോഗ്യകരമായ കോഴി",
    galt6: "ഫലഭൂയിഷ്ഠമായ ഭൂമി", galt7: "പ്യൂർ & ഫ്രഷ്", galt8: "തഴച്ചുവളരുന്ന വിളകൾ",
    areasLabel: "ഞങ്ങൾ ഡെലിവർ ചെയ്യുന്നിടം", areasTitle: "ഞങ്ങളുടെ ഡെലിവറി മേഖലകൾ",
    areasDesc: "ഞങ്ങളുടെ ലോറികൾ നാമക്കൽ ബേസിൽ നിന്ന് മൂന്ന് സംസ്ഥാനങ്ങൾ ഉൾക്കൊള്ളുന്നു.",
    area1Name: "തമിഴ്‌നാട്", area1Desc: "ഞങ്ങളുടെ ആസ്ഥാനം — നാമക്കൽ. കോയമ്പത്തൂർ, സേലം, മധുര, തഞ്ചാവൂർ, ട്രിച്ചി, തിരുനൽവേലി ഉൾപ്പെടെ.",
    area2Name: "കേരളം", area2Desc: "തൃശ്ശൂർ, പാലക്കാട്, എറണാകുളം, കോഴിക്കോട്, ദൈവത്തിന്റെ സ്വന്തം നാടിലെ എല്ലാ കൃഷിഭൂമികളും.",
    area3Name: "കർണാടക", area3Desc: "ബെംഗളൂരു ഗ്രാമം, തുംകൂർ, ഹാസൻ, മൈസൂരു, ധാർവാഡ്, ബേലഗാവി, സംസ്ഥാനത്തുടനീളം.",
    crop1:"🌾 നെല്ല്", crop2:"🥜 നിലക്കടല", crop3:"🌿 പച്ചക്കറി",
    crop4:"🥥 തേങ്ങ", crop5:"🍌 വാഴ", crop6:"🌶️ സുഗന്ധദ്രവ്യം",
    crop7:"🌻 സൂര്യകാന്തി", crop8:"🌽 ചോളം", crop9:"🫘 പയർ",
    testiLabel: "സന്തുഷ്ടരായ ഉപഭോക്താക്കൾ", testiTitle: "കർഷകർ പറയുന്നത്",
    testi1: '"பொம்மதேவர் லாரி சேவை மூலம் உரம் வாங்கியதால் நேரத்தில் வந்தது. தரமும் சிறந்தது!"',
    testi2: '"ഞങ്ങളുടെ തെങ്ങ് തോട്ടത്തിലേക്ക് നേരിട്ട് ലോറിയിൽ ഡെലിവറി ചെയ്തു. ഗുണനിലവാരം മികച്ചത്!"',
    testi3: '"ಈ ಕೋಳಿ ಗೊಬ್ಬರ ನಮ್ಮ ಜಮೀನಿಗೆ ತುಂಬಾ ಉಪಯೋಗಕರ. ಲಾರಿಯಲ್ಲಿ ನೇರ ಡೆಲಿವರಿ ಬಂತು. ಧನ್ಯವಾದ!"',
    testi4: '"ദൈവത്തിന്റെ സ്വന്തം നാട്ടിൽ ഏറ്റവും വേഗത്തിൽ ഡെലിവറി. നാമക്കലിൽ നിന്ന് ഞങ്ങളുടെ ഫാർമിലേക്ക് കൃത്യ സമയത്ത്!"',
    testi5: '"Best organic fertilizer supplier. Own lorries means fastest delivery and best price. Highly recommended!"',
    contactLabel: "ബന്ധപ്പെടുക", contactTitle: "ഇന്ന് ഓർഡർ ചെയ്ത് നാളെ വളരൂ",
    contactDesc: "വിളിക്കൂ, വാട്ട്സ്ആപ്പ് ചെയ്യൂ, ഇ-മെയിൽ ചെയ്യൂ. നാമക്കലിൽ ആണ് ഞങ്ങൾ — ഏതാനും മണിക്കൂറുകൾക്കുള്ളിൽ!",
    ctaWhatsappTitle: "വാട്ട്സ്ആപ്പ് ചെയ്യൂ", ctaWhatsappDesc: "ക്വോട്ടേഷൻ ലഭിക്കാൻ ഏറ്റവും വേഗം",
    ctaPhoneTitle: "വിളിക്കൂ", ctaPhoneDesc: "ബൾക്ക് ഓർഡറുകൾക്ക് നേരിട്ട് സംസാരിക്കൂ",
    ctaEmailTitle: "ഇ-മെയിൽ ചെയ്യൂ", ctaEmailDesc: "ഫാം വിവരങ്ങൾ അയക്കൂ",
    ctaAddrTitle: "ഞങ്ങളുടെ ഇടം", ctaAddrDesc: "നാമക്കലിൽ ഞങ്ങളെ സന്ദർശിക്കൂ",
    formTitle: "ഞങ്ങൾക്ക് ഒരു സന്ദേശം അയക്കൂ", formName: "നിങ്ങളുടെ പേര്",
    formPhone: "ഫോൺ നമ്പർ", formState: "സംസ്ഥാനം",
    formStatePlaceholder: "സംസ്ഥാനം തിരഞ്ഞെടുക്കൂ",
    formTN: "തമിഴ്‌നാട്", formKL: "കേരളം", formKA: "കർണാടക",
    formQty: "ആവശ്യമുള്ള അളവ്", formQtyPlaceholder: "അളവ് തിരഞ്ഞെടുക്കൂ",
    formQty1: "1–10 ബേഗ് (50 കിലോ)", formQty2: "10–50 ബേഗ്", formQty3: "ബൾക്ക് / ഫുൾ ലോറി ലോഡ്",
    formMsg: "സന്ദേശം (ഐഛികം)", formSubmit: "അന്വേഷണം അയക്കൂ",
    footerTagline: "ഫാമിൽ നിന്ന് വയലിലേക്ക് — സ്വന്തം ലോറികൾ. ദക്ഷിണേന്ത്യൻ കർഷകർക്ക് സേവനം.",
    footerNav: "ദ്രുത ലിങ്കുകൾ", footerStates: "ഞങ്ങൾ ഡെലിവർ ചെയ്യുന്ന സംസ്ഥാനങ്ങൾ",
    footerContact: "ബന്ധപ്പെടൽ വിവരം",
    footerCopy: "© 2024 பொம்மதேவர் Transport & Lorry Service, Namakkal. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം. | ❤️",
    toastMsg: "അന്വേഷണം അയച്ചു! ഞങ്ങൾ ഉടൻ ബന്ധപ്പെടും.",
  },

  kn: {
    pageTitle: "ಬೊಮ್ಮದೇವರ್ ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ – ಕೋಳಿ ಗೊಬ್ಬರ | ನಾಮಕ್ಕಲ್",
    logoSub: "ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ & ಲಾರಿ ಸೇವೆ",
    navAbout: "ನಮ್ಮ ಬಗ್ಗೆ", navBenefits: "ಪ್ರಯೋಜನಗಳು", navGallery: "ಗ್ಯಾಲರಿ",
    navAreas: "ಸೇವಾ ಪ್ರದೇಶಗಳು", navContact: "ಸಂಪರ್ಕ",
    headerCta: "ಈಗಲೇ ಆರ್ಡರ್ ಮಾಡಿ",
    heroBadge: "🚛 ಫಾರ್ಮ್‌ನಿಂದ ಜಮೀನಿಗೆ — ಸ್ವಂತ ಲಾರಿಗಳು",
    heroLine1: "ಪ್ರೀಮಿಯಂ ಕೋಳಿ", heroLine2: "ಗೊಬ್ಬರ",
    heroDesc: "ನಾವು ನೇರವಾಗಿ ಕೋಳಿ ಫಾರ್ಮ್‌ಗಳಿಂದ ಖರೀದಿಸಿ, ನಮ್ಮ ಸ್ವಂತ ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ ಲಾರಿಗಳಲ್ಲಿ ನಿಮ್ಮ ಜಮೀನಿಗೆ ತಲುಪಿಸುತ್ತೇವೆ — ತಾಜಾ, ವೇಗ, ಕಡಿಮೆ ಬೆಲೆ. ನಾಮಕ್ಕಲ್ ಮೂಲ.",
    statFarmers: "ಸಂತುಷ್ಟ ರೈತರು", statStates: "ರಾಜ್ಯಗಳು", statLorries: "ಸ್ವಂತ ಲಾರಿ",
    btnWhatsapp: "ವಾಟ್ಸ್‌ಆಪ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ", btnCall: "ಈಗ ಕರೆ ಮಾಡಿ",
    floatCard1: "ಸ್ವಂತ ಲಾರಿ ಫ್ಲೀಟ್", floatCard2: "100% ಆರ್ಗಾನಿಕ್", scrollHint: "ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ",
    aboutLabel: "ನಾವು ಯಾರು",
    aboutTitle: "ಬೊಮ್ಮದೇವರ್ ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ & ಲಾರಿ ಸೇವೆ",
    aboutBadge: "ಸ್ವಂತ ಲಾರಿಗಳು",
    aboutP1: "ನಾವು <strong>பொம்மதேவர் Transport</strong>, <strong>ನಾಮಕ್ಕಲ್, ತಮಿಳುನಾಡು</strong> ಮೂಲ — ಸ್ವಂತ ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ ಲಾರಿ ಫ್ಲೀಟ್ ನಡೆಸುತ್ತೇವೆ. ಲೈಸೆನ್ಸ್ ಪಡೆದ ಕೋಳಿ ಫಾರ್ಮ್‌ಗಳಿಂದ ನೇರವಾಗಿ ತಾಜಾ ಕೋಳಿ ಗೊಬ್ಬರ ಖರೀದಿಸಿ ತಮಿಳುನಾಡು, ಕೇರಳ, ಕರ್ನಾಟಕದ ರೈತರಿಗೆ ತಲುಪಿಸುತ್ತೇವೆ.",
    aboutP2: "ಲಾರಿಗಳು ನಮ್ಮದೇ ಆದ್ದರಿಂದ ದಲ್ಲಾಳಿಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಅತ್ಯಂತ ಕಡಿಮೆ ಬೆಲೆಯಲ್ಲಿ ಉತ್ತಮ ಗೊಬ್ಬರ ಒದಗಿಸುತ್ತೇವೆ.",
    addrLabel: "ನಮ್ಮ ಸ್ಥಳ", phoneLabel: "ಫೋನ್ & ವಾಟ್ಸ್‌ಆಪ್", emailLabel: "ಇ-ಮೇಲ್",
    feat1: "ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ ಲಾರಿಗಳು ನಮ್ಮದೇ",
    feat2: "ಕೋಳಿ ಫಾರ್ಮ್‌ಗಳಿಂದ ನೇರ ಖರೀದಿ",
    feat3: "ರೈತರಿಗೆ ನೇರ ಮಾರಾಟ — ದಲ್ಲಾಳಿ ಇಲ್ಲ",
    feat4: "ನಾಮಕ್ಕಲ್, ತಮಿಳುನಾಡಿನಲ್ಲಿದ್ದೇವೆ",
    howLabel: "ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತೇವೆ", howTitle: "ಫಾರ್ಮ್‌ನಿಂದ ಜಮೀನಿಗೆ — ನೇರವಾಗಿ ನಾವೇ",
    howDesc: "ದಲ್ಲಾಳಿಗಳಿಲ್ಲ, ವಿಳಂಬವಿಲ್ಲ. ನಮ್ಮ ಲಾರಿಗಳು ಸಂಪೂರ್ಣ ಪ್ರಯಾಣ ನಿರ್ವಹಿಸುತ್ತವೆ.",
    step1Title: "ಫಾರ್ಮ್‌ನಿಂದ ಖರೀದಿ", step1Desc: "ವಿಶ್ವಾಸಾರ್ಹ ಕೋಳಿ ಫಾರ್ಮ್‌ಗಳಿಂದ ನೇರವಾಗಿ ತಾಜಾ ಗೊಬ್ಬರ ಖರೀದಿಸುತ್ತೇವೆ.",
    step2Title: "ಲಾರಿಗಳಲ್ಲಿ ಲೋಡ್ ಮಾಡುತ್ತೇವೆ", step2Desc: "ನಾಮಕ್ಕಲ್‌ನಿಂದ ಸ್ವಂತ ಲಾರಿ ಫ್ಲೀಟ್ ಬಳಸಿ ಸಾಗಿಸುತ್ತೇವೆ — ತಾಜಾತನ ಖಾತ್ರಿ.",
    step3Title: "ರೈತರಿಗೆ ತಲುಪಿಸುತ್ತೇವೆ", step3Desc: "ನಿಮ್ಮ ಆರ್ಡರ್ ನೇರವಾಗಿ ಜಮೀನಿನ ಗೇಟಿಗೆ — ತಾಜಾ, ಕಡಿಮೆ ಬೆಲೆ, ಉತ್ತಮ ಬೆಳೆಗೆ ಸಿದ್ಧ.",
    benefitsLabel: "ನಮ್ಮನ್ನು ಏಕೆ ಆರಿಸಬೇಕು", benefitsTitle: "ನಿಸರ್ಗದ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಗೊಬ್ಬರ",
    benefitsDesc: "ಕೋಳಿ ಗೊಬ್ಬರ ದನದ ಸಗಣಿಗಿಂತ 3 ಪಟ್ಟು ಹೆಚ್ಚು ಪೋಷಕ — ನಾವು ಸ್ವಂತ ಲಾರಿಯಲ್ಲಿ ಫಾರ್ಮ್‌ನಿಂದ ಜಮೀನಿಗೆ ತರುತ್ತೇವೆ.",
    b1Title: "ಸ್ವಂತ ಲಾರಿ ಫ್ಲೀಟ್", b1Desc: "ಸ್ವಂತ ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ ಲಾರಿಗಳಿವೆ — ಮೂರನೇ ಪಕ್ಷದ ವಿಳಂಬ ಇಲ್ಲ, ಕಡಿಮೆ ವೆಚ್ಚ, ವೇಗದ ಡೆಲಿವರಿ.",
    b2Title: "ಸಾರಜನಕ ಸಮೃದ್ಧ", b2Desc: "ಹೆಚ್ಚಿನ ಸಾರಜನಕ ಅಂಶ ಹಸಿರು ಬೆಳವಣಿಗೆ, ಗಟ್ಟಿ ಕಾಂಡ, ವೇಗದ ಸಸ್ಯ ಅಭಿವೃದ್ಧಿ.",
    b3Title: "ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಸುಧಾರಿಸುತ್ತದೆ", b3Desc: "ಮಣ್ಣಿನ ರಚನೆ, ತೇವಾಂಶ ಮತ್ತು ಸೂಕ್ಷ್ಮಾಣುಜೀವಿ ಚಟುವಟಿಕೆ ಸುಧಾರಿಸುತ್ತದೆ.",
    b4Title: "ಇಳುವರಿ ಹೆಚ್ಚಿಸುತ್ತದೆ", b4Desc: "ನಮ್ಮ ಗೊಬ್ಬರ ಬಳಸಿದ ನಂತರ 40% ವರೆಗೆ ಬೆಳೆ ಇಳುವರಿ ಹೆಚ್ಚಾಗಿದೆ.",
    b5Title: "ಅತ್ಯುತ್ತಮ ಬೆಲೆ", b5Desc: "ಫಾರ್ಮ್‌ನಿಂದ ನೇರ, ನಾವೇ ಸಾಗಿಸುತ್ತೇವೆ — ದಲ್ಲಾಳಿಗಳಿಲ್ಲ, ಅತ್ಯಂತ ಸ್ಪರ್ಧಾತ್ಮಕ ಬೆಲೆ.",
    b6Title: "ಪರಿಸರ ಸ್ನೇಹಿ", b6Desc: "ಯಾವ ರಾಸಾಯನಿಕ ಇಲ್ಲ. 100% ನೈಸರ್ಗಿಕ, ಸುರಕ್ಷಿತ.",
    galleryLabel: "ನಮ್ಮ ಫಾರ್ಮ್ & ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್", galleryTitle: "ನಾವು ಏನು ನೀಡುತ್ತೇವೆ",
    galleryDesc: "ಕೋಳಿ ಫಾರ್ಮ್‌ಗಳಿಂದ ನಿಮ್ಮ ಜಮೀನಿಗೆ — ಲಾರಿಯಲ್ಲಿ ಲೋಡ್ ಮಾಡಿ ತಾಜಾ ಡೆಲಿವರಿ.",
    filterAll: "ಎಲ್ಲ", filterFarm: "ಫಾರ್ಮ್", filterProduct: "ಉತ್ಪನ್ನ", filterDelivery: "ಡೆಲಿವರಿ",
    galt1: "ಕೋಳಿ ಫಾರ್ಮ್ ಮೂಲ", galt2: "ಸಂಸ್ಕರಿಸಿದ ಗೊಬ್ಬರ", galt3: "ಚಿಕಿತ್ಸಿಸಿದ ಜಮೀನು",
    galt4: "ನಮ್ಮ ಲಾರಿ ಡೆಲಿವರಿ", galt5: "ಆರೋಗ್ಯಕರ ಕೋಳಿ",
    galt6: "ಫಲವತ್ತಾದ ಭೂಮಿ", galt7: "ಪ್ಯಾಕ್ & ರೆಡಿ", galt8: "ಚೆನ್ನಾಗಿ ಬೆಳೆದ ಫಸಲು",
    areasLabel: "ನಾವು ಡೆಲಿವರಿ ಮಾಡುವೆಡೆ", areasTitle: "ನಮ್ಮ ಡೆಲಿವರಿ ಪ್ರದೇಶಗಳು",
    areasDesc: "ನಮ್ಮ ಲಾರಿಗಳು ನಾಮಕ್ಕಲ್ ಬೇಸ್‌ನಿಂದ ಮೂರು ರಾಜ್ಯಗಳನ್ನು ಒಳಗೊಳ್ಳುತ್ತವೆ.",
    area1Name: "ತಮಿಳುನಾಡು", area1Desc: "ನಮ್ಮ ಮನೆ — ನಾಮಕ್ಕಲ್. ಕೋಯಮತ್ತೂರು, ಸೇಲಂ, ಮಧುರೈ, ತಂಜಾವೂರು, ಟ್ರಿಚಿ ಎಲ್ಲೆಡೆ.",
    area2Name: "ಕೇರಳ", area2Desc: "ತ್ರಿಶ್ಶೂರ್, ಪಾಲಕ್ಕಾಡ್, ಎರ್ನಾಕುಳಂ, ಕೋಜಿಕ್ಕೋಡ್ ಮತ್ತು ದೇವರ ಸ್ವಂತ ನಾಡಿನ ಕೃಷಿ ಪ್ರದೇಶಗಳು.",
    area3Name: "ಕರ್ನಾಟಕ", area3Desc: "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ, ತುಮಕೂರು, ಹಾಸನ, ಮೈಸೂರು, ಧಾರವಾಡ, ಬೆಳಗಾವಿ ರಾಜ್ಯಾದ್ಯಂತ.",
    crop1:"🌾 ಭತ್ತ", crop2:"🥜 ಕಡಲೆ", crop3:"🌿 ತರಕಾರಿ",
    crop4:"🥥 ತೆಂಗಿನಕಾಯಿ", crop5:"🍌 ಬಾಳೆ", crop6:"🌶️ ಮಸಾಲೆ",
    crop7:"🌻 ಸೂರ್ಯಕಾಂತಿ", crop8:"🌽 ಮೆಕ್ಕೆಜೋಳ", crop9:"🫘 ಬೇಳೆಕಾಳು",
    testiLabel: "ಸಂತುಷ್ಟ ಗ್ರಾಹಕರು", testiTitle: "ರೈತರು ಏನು ಹೇಳುತ್ತಾರೆ",
    testi1: '"பொம்மதேவர் லாரி சேவை மூலம் உரம் வாங்கியதால் நேரத்தில் வந்தது. தரமும் சிறந்தது!"',
    testi2: '"ഞങ്ങളുടെ ഫാർമിലേക്ക് ലോറിയിൽ ഡെലിവറി. ഗുണനിലവാരം മികച്ചത്!"',
    testi3: '"ಈ ಕೋಳಿ ಗೊಬ್ಬರ ನಮ್ಮ ಜಮೀನಿಗೆ ತುಂಬಾ ಉಪಯೋಗಕರ. ಲಾರಿಯಲ್ಲಿ ನೇರ ಡೆಲಿವರಿ ಬಂತು. ಧನ್ಯವಾದ!"',
    testi4: '"ನಾಮಕ್ಕಲ್‌ನಿಂದ ನೇರ ಡೆಲಿವರಿ ನಮ್ಮ ತೋಟಕ್ಕೆ. ಬೆಲೆ ಕಡಿಮೆ, ತಾಜಾ ಗೊಬ್ಬರ. ತುಂಬ ಧನ್ಯವಾದ!"',
    testi5: '"ದಕ್ಷಿಣ ಭಾರತದ ಅತ್ಯುತ್ತಮ ಆರ್ಗಾನಿಕ್ ಗೊಬ್ಬರ. ಸ್ವಂತ ಲಾರಿ ಇರುವುದರಿಂದ ಯಾವಾಗಲೂ ಸಮಯಕ್ಕೆ!"',
    contactLabel: "ಸಂಪರ್ಕಿಸಿ", contactTitle: "ಇಂದು ಆರ್ಡರ್ ಮಾಡಿ, ನಾಳೆ ಬೆಳೆಯಿರಿ",
    contactDesc: "ಕರೆ, ವಾಟ್ಸ್‌ಆಪ್ ಅಥವಾ ಇ-ಮೇಲ್ ಮಾಡಿ. ನಾಮಕ್ಕಲ್ ಆಧಾರಿತ — ಕೆಲ ಗಂಟೆಗಳಲ್ಲಿ ಪ್ರತಿಕ್ರಿಯೆ!",
    ctaWhatsappTitle: "ವಾಟ್ಸ್‌ಆಪ್ ಮಾಡಿ", ctaWhatsappDesc: "ಬೆಲೆ ಪಡೆಯಲು ಮತ್ತು ಆರ್ಡರ್ ಮಾಡಲು ವೇಗದ ಮಾರ್ಗ",
    ctaPhoneTitle: "ಕರೆ ಮಾಡಿ", ctaPhoneDesc: "ಬೃಹತ್ ಆರ್ಡರ್‌ಗಾಗಿ ನೇರ ಮಾತುಕತೆ",
    ctaEmailTitle: "ಇ-ಮೇಲ್ ಮಾಡಿ", ctaEmailDesc: "ಫಾರ್ಮ್ ವಿವರ ಕಳುಹಿಸಿ",
    ctaAddrTitle: "ನಮ್ಮ ಇರುವ ಸ್ಥಳ", ctaAddrDesc: "ನಾಮಕ್ಕಲ್‌ನಲ್ಲಿ ಭೇಟಿ ನೀಡಿ",
    formTitle: "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ", formName: "ನಿಮ್ಮ ಹೆಸರು",
    formPhone: "ಫೋನ್ ಸಂಖ್ಯೆ", formState: "ರಾಜ್ಯ",
    formStatePlaceholder: "ರಾಜ್ಯ ಆಯ್ಕೆಮಾಡಿ",
    formTN: "ತಮಿಳುನಾಡು", formKL: "ಕೇರಳ", formKA: "ಕರ್ನಾಟಕ",
    formQty: "ಬೇಕಾದ ಪ್ರಮಾಣ", formQtyPlaceholder: "ಪ್ರಮಾಣ ಆಯ್ಕೆಮಾಡಿ",
    formQty1: "1–10 ಚೀಲ (50 ಕೆಜಿ)", formQty2: "10–50 ಚೀಲ", formQty3: "ಬೃಹತ್ / ಫುಲ್ ಲಾರಿ ಲೋಡ್",
    formMsg: "ಸಂದೇಶ (ಐಚ್ಛಿಕ)", formSubmit: "ವಿಚಾರಣೆ ಕಳುಹಿಸಿ",
    footerTagline: "ಫಾರ್ಮ್‌ನಿಂದ ಜಮೀನಿಗೆ — ಸ್ವಂತ ಲಾರಿ. ದಕ್ಷಿಣ ಭಾರತದ ರೈತರ ಸೇವೆ.",
    footerNav: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು", footerStates: "ನಾವು ಡೆಲಿವರಿ ಮಾಡುವ ರಾಜ್ಯಗಳು",
    footerContact: "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    footerCopy: "© 2024 பொம்மதேவர் Transport & Lorry Service, Namakkal. ಎಲ್ಲ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. | ❤️",
    toastMsg: "ವಿಚಾರಣೆ ಕಳುಹಿಸಲಾಗಿದೆ! ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
  }
};

/* ==============================
   STATE
   ============================== */
let currentLang = 'en';
const langLabels = { en: 'EN', ta: 'தமிழ்', ml: 'മലയ', kn: 'ಕನ್ನಡ' };

/* ==============================
   APPLY TRANSLATIONS
   ============================== */
function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  if (t.pageTitle) document.title = t.pageTitle;
  const langLabel = document.getElementById('langCurrentText');
  if (langLabel) langLabel.textContent = langLabels[lang] || lang.toUpperCase();
  localStorage.setItem('bom-lang', lang);
}

/* ==============================
   LANGUAGE MODAL
   ============================== */
function initLangModal() {
  const modal = document.getElementById('langModal');
  const saved = localStorage.getItem('bom-lang');
  const browserLang = navigator.language || '';
  let detected = 'ta'; // Default to Tamil since based in Tamil Nadu
  if (browserLang.startsWith('ml')) detected = 'ml';
  else if (browserLang.startsWith('kn')) detected = 'kn';
  else if (browserLang.startsWith('en')) detected = 'en';

  if (saved) {
    modal.style.display = 'none';
    applyLang(saved);
    return;
  }

  document.querySelectorAll('.lang-opt-btn').forEach(btn => {
    if (btn.dataset.lang === detected) btn.style.borderColor = 'var(--green-mid)';
    btn.addEventListener('click', () => {
      modal.style.opacity = '0';
      modal.style.transition = 'all 0.3s ease';
      setTimeout(() => { modal.style.display = 'none'; }, 320);
      applyLang(btn.dataset.lang);
    });
  });
}

/* ==============================
   HEADER
   ============================== */
function initHeader() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  const langCurrentBtn = document.getElementById('langCurrentBtn');
  const langDropdown = document.getElementById('langDropdown');
  langCurrentBtn.addEventListener('click', e => { e.stopPropagation(); langDropdown.classList.toggle('open'); });
  document.addEventListener('click', () => langDropdown.classList.remove('open'));
  langDropdown.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); applyLang(btn.dataset.lang); langDropdown.classList.remove('open'); });
  });
}

/* ==============================
   SCROLL REVEAL
   ============================== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.dataset.delay = (i % 4) * 100;
    observer.observe(el);
  });
}

/* ==============================
   GALLERY
   ============================== */
function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  let visibleItems = [], currentIndex = 0;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.cat === filter) {
          item.removeAttribute('data-hidden'); item.style.display = '';
        } else {
          item.setAttribute('data-hidden', 'true'); item.style.display = 'none';
        }
      });
    });
  });

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.gallery-overlay span');
      if (!img) return;
      visibleItems = [...document.querySelectorAll('.gallery-item:not([data-hidden])')];
      currentIndex = visibleItems.indexOf(item);
      lightboxImg.src = img.src;
      lightboxCaption.textContent = caption ? caption.textContent : '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function navigate(dir) {
    currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
    const item = visibleItems[currentIndex];
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = item.querySelector('img').src;
      const cap = item.querySelector('.gallery-overlay span');
      lightboxCaption.textContent = cap ? cap.textContent : '';
      lightboxImg.style.opacity = '1';
    }, 180);
    lightboxImg.style.transition = 'opacity 0.18s';
  }

  document.getElementById('lightboxPrev').addEventListener('click', () => navigate(-1));
  document.getElementById('lightboxNext').addEventListener('click', () => navigate(1));
  document.getElementById('lightboxClose').addEventListener('click', () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; });
  lightbox.addEventListener('click', e => { if (e.target === lightbox) { lightbox.classList.remove('open'); document.body.style.overflow = ''; } });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'Escape') { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
  });
}

/* ==============================
   TESTIMONIALS
   ============================== */
function initTestimonials() {
  const track = document.getElementById('testiTrack');
  const dotsContainer = document.getElementById('testiDots');
  if (!track) return;
  const cards = track.querySelectorAll('.testi-card');
  let current = 0;
  const total = cards.length;
  const getVC = () => window.innerWidth < 768 ? 1 : 3;
  const totalSlides = () => Math.max(1, total - getVC() + 1);

  for (let i = 0; i < totalSlides(); i++) {
    const dot = document.createElement('button');
    dot.classList.add('testi-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  function goTo(index) {
    const vc = getVC();
    const cw = cards[0].offsetWidth + 24;
    current = Math.max(0, Math.min(index, total - vc));
    track.style.transform = `translateX(-${current * cw}px)`;
    document.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  let ap = setInterval(() => { goTo(current >= total - getVC() ? 0 : current + 1); }, 4500);
  const wrap = track.closest('.testi-track-wrap');
  wrap.addEventListener('mouseenter', () => clearInterval(ap));
  wrap.addEventListener('mouseleave', () => { ap = setInterval(() => goTo(current >= total - getVC() ? 0 : current + 1), 4500); });

  let sx = 0;
  track.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const d = sx - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) goTo(d > 0 ? Math.min(current + 1, total - getVC()) : Math.max(0, current - 1));
  });
}

/* ==============================
   FORM SUBMIT
   ============================== */
function handleFormSubmit(e) {
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
  e.target.reset();
  return false;
}

/* ==============================
   FLOAT WA
   ============================== */
function initFloatWA() {
  const btn = document.getElementById('floatWhatsapp');
  if (!btn) return;
  btn.style.cssText = 'opacity:0;transform:scale(0);transition:all 0.5s cubic-bezier(0.22,1,0.36,1)';
  setTimeout(() => { btn.style.opacity = '1'; btn.style.transform = 'scale(1)'; }, 2000);
}

/* ==============================
   SMOOTH SCROLL
   ============================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
    });
  });
}

/* ==============================
   PARALLAX
   ============================== */
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const o = window.scrollY;
    hero.querySelectorAll('.shape').forEach((s, i) => { s.style.transform = `translateY(${o * (0.05 + i * 0.03)}px)`; });
  }, { passive: true });
}

/* ==============================
   INIT
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  initLangModal();
  initHeader();
  initScrollReveal();
  initGallery();
  initTestimonials();
  initFloatWA();
  initSmoothScroll();
  initParallax();
});

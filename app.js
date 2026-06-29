// ==========================================================================
// TRANSLATION DICTIONARIES (8 LANGUAGES - CHANEL LUXURY & ADMIN UPGRADE)
// ==========================================================================

const defaultI18n = {
  en: {
    enter_btn: "Enter the Fragrance Journey",
    slogan_title: "Not selling perfume, but selling the memory of a place.",
    slogan_desc: "Every bottle is a premium fragrance journey. Take the essence of Thailand home with you.",
    map_instruction: "Select a province to explore its fragrance",
    postcard_label: "Travel Card",
    flip_prompt: "Click card to flip & read story",
    rec_temple: "Recommended Temple",
    rec_cafe: "Recommended Cafe",
    rec_season: "Best Season",
    ambient_toggle: "Play Ambient Sound",
    ambient_toggle_active: "Mute Ambient Sound",
    qr_caption: "Scan to watch video",
    format_diffuser: "Diffuser",
    format_spray: "Spray",
    format_candle: "Candle",
    add_to_cart: "Add Scent to Cart",
    cart_title: "Your Fragrance Bag",
    empty_cart: "Your bag is currently empty.",
    subtotal: "Subtotal",
    checkout: "Secure Checkout",
    checkout_note: "Worldwide premium shipping calculated at checkout.",
    back_flip_btn: "Flip to Front",
    added_toast: "Added to fragrance bag!",
    
    // Chanel Upgrades
    brand_category: "LES VOYAGES OLFACTIFS",
    nav_collections: "Collections",
    nav_map: "Scent Map",
    discover_travel_card: "Discover Scent Postcard",
    postcard_modal_title: "THE TRAVEL POSTCARD",
    quick_buy: "Add to Bag",
    item_diffuser: "Reed Diffuser",
    item_spray: "Room Spray",
    item_candle: "Scented Candle",
    footer_terms: "Terms & Conditions",
    footer_privacy: "Privacy Policy",
    
    // Checkout Upgrades
    checkout_header: "Shipping Details",
    contact_info_title: "Contact Information",
    shipping_address_title: "Delivery Address",
    field_email: "Email Address",
    field_phone: "Phone Number",
    field_firstname: "First Name",
    field_lastname: "Last Name",
    field_address: "Street Address",
    field_city: "City",
    field_postal: "Postal/Zip Code",
    field_country: "Country / Region",
    shipping_method_title: "Shipping Method",
    ship_std_name: "Standard Worldwide Delivery",
    ship_std_time: "7 - 14 Business Days",
    ship_free: "Free",
    ship_exp_name: "DHL Express Luxury Shipping",
    ship_exp_time: "2 - 4 Business Days",
    payment_title: "Payment Method",
    payment_sim_note: "Simulated secure checkout via Credit Card / Apple Pay / PayPal.",
    total_to_pay: "Total",
    place_order: "Place Fragrance Order",
    success_title: "THANK YOU",
    success_subtitle: "Your SANÉH fragrance journey has begun.",
    success_desc: "A piece of Thailand is being bottled and prepared for shipment. A confirmation email with tracking details will be sent shortly.",
    continue_shopping: "Continue Shopping",
    footer_shipping_title: "SHIPPING & DELIVERY",
    footer_shipping_desc: "Complimentary standard worldwide shipping on orders over $150. Curated deliveries dispatched via DHL Express & FedEx from Bangkok.",
    footer_contact_title: "CONTACT US",

    // Collection Names
    coll_origins: "Origins of Thailand",
    coll_northern: "Northern Tales",
    coll_island: "Island Stories",
    coll_royal: "Royal Heritage",

    // Admin Panel Translations
    admin_title: "Product Manager",
    admin_helper: "Select a product to update its luxury photography and metadata details.",
    admin_reset_btn: "Reset to Default Catalog",
    admin_col_img: "Image",
    admin_col_name: "Product",
    admin_col_action: "Action",
    admin_edit_title: "Edit Product",
    admin_sec_branding: "Product Details",
    admin_field_pname: "Product Name (Display)",
    admin_field_price: "Price ($ USD)",
    admin_sec_imagery: "Luxury Imagery",
    admin_choose_file: "Choose Photo",
    admin_upload_tip: "PNG or JPG. Recommended aspect ratio 1:1.2",
    admin_sec_scent: "Scent Journey Metadata",
    admin_field_tagline: "Scent Tagline",
    admin_field_desc: "Scent Description",
    admin_sec_recommendations: "Local Recommendations",
    admin_save_changes: "Save Changes",
    
    // --- SCENT DATABASE (ENGLISH) ---
    // 1. Origins of Thailand
    rain_on_earth: {
      name: "Rain on Earth", tagline: "Earthy ozone & petrichor",
      scent_title: "Rain on Earth", scent_desc: "Capturing the therapeutic aroma of dry summer soil accepting the first drops of monsoon rain. Rich notes of petrichor, moss, and warm ozone.",
      temple: "Wat Saket (Golden Mount)", cafe: "Earthy Brews Bangkok", season: "First Rain (May-Jun)", music: "Bangkok Rain Lofi"
    },
    siam_jasmine: {
      name: "Siam Jasmine", tagline: "Sweet royal grandiflorum",
      scent_title: "Siam Jasmine", scent_desc: "An opulent fragrance of freshly picked jasmine buds blooming under warm tropical moonlight. Traditionally styled, comforting, and deeply elegant.",
      temple: "Wat Phra Kaew", cafe: "Floral Cafe at Napasorn", season: "Summer (Mar-May)", music: "Siam Royal Harp"
    },
    thai_rice: {
      name: "Thai Rice", tagline: "Steamed jasmine rice & pandan",
      scent_title: "Thai Rice", scent_desc: "A warm, comforting scent of freshly steamed Thai Jasmine Rice infused with crushed pandan leaves. Subtle, sweet, and uniquely inviting.",
      temple: "Wat Arun", cafe: "Pandan & Rice Lab", season: "Harvest Season (Nov-Jan)", music: "Siam Acoustic Guitar"
    },
    temple_incense: {
      name: "Temple Incense", tagline: "Sandalwood & temple smoke",
      scent_title: "Temple Incense", scent_desc: "A sacred blend of burning sandalwood, aged agarwood, and temple flower offerings. Evokes quiet contemplation and spiritual stillness.",
      temple: "Wat Pho", cafe: "Peace Oriental Teahouse", season: "Cool Season (Nov-Feb)", music: "Buddhist Chants Ambient"
    },
    // 2. Northern Tales
    chiangmai: {
      name: "Chiang Mai", tagline: "Rain after Tea",
      scent_title: "Rain after Tea", scent_desc: "The fresh aroma of rain droplets falling onto lush green tea leaves on the misty highlands of Chiang Mai. Capturing the feeling of a calm morning walk near Wat Doi Suthep.",
      temple: "Wat Phra That Doi Suthep", cafe: "Gokotta Tea Shokudo", season: "Monsoon / Rainy (Jul-Oct)", music: "Northern Mist Lofi"
    },
    nan: {
      name: "Nan", tagline: "Nan Forest Whisper",
      scent_title: "Nan Forest Whisper", scent_desc: "The crisp, woody aroma of ancient pine trees and wild ferns damp with morning dew. Bring the peaceful serenity of Nan's valleys into your room.",
      temple: "Wat Phumin", cafe: "Nan Valleys Coffee", season: "Winter Mist (Dec-Jan)", music: "Nan Valley Acoustic"
    },
    chiangrai: {
      name: "Chiang Rai", tagline: "Highland Oolong",
      scent_title: "Highland Oolong", scent_desc: "Roasted tea leaves, green orchid petals, and cool mountain air. Reminiscent of a sunrise look-out over the golden triangle mountain ranges.",
      temple: "Wat Rong Khun (White Temple)", cafe: "Choui Fong Tea Cafe", season: "Cool Winds (Nov-Jan)", music: "Highland Flute"
    },
    maehongson: {
      name: "Mae Hong Son", tagline: "Mist of Three Seasons",
      scent_title: "Mist of Three Seasons", scent_desc: "Fresh pine needles, wet moss, eucalyptus, and misty mountain pine forests. Highly therapeutic, cooling, and crisp.",
      temple: "Wat Phra That Doi Kong Mu", cafe: "Coffee in Love Pai", season: "Mist Season (Oct-Feb)", music: "Pai Acoustic Sunset"
    },
    // 3. Island Stories
    phuket: {
      name: "Phuket", tagline: "Sea Salt & Coconut",
      scent_title: "Sea Salt & Coconut", scent_desc: "The bracing touch of sea salt winds meeting warm sweet coconut oil and light sun cream. Capturing the precise memory of a warm ocean breeze just before sunset at Promthep Cape.",
      temple: "Wat Chalong (Chaithararam)", cafe: "Refresh Tropical Cafe", season: "Sunny / Dry (Nov-Apr)", music: "Andaman Sunset Chill"
    },
    krabi: {
      name: "Krabi", tagline: "Emerald Caves",
      scent_title: "Emerald Caves", scent_desc: "Salty aquatic ocean waves colliding with damp limestone cave walls, wild ginger, and tropical shoreline flora. Fresh, mineral, and adventurous.",
      temple: "Wat Tham Suea (Tiger Cave)", cafe: "Hub Cafe Krabi", season: "Ocean Winds (Dec-Mar)", music: "Emerald Bay Waves"
    },
    samui: {
      name: "Samui", tagline: "Coconut Grove",
      scent_title: "Coconut Grove", scent_desc: "Sweet toasted coconut, coconut milk, absolute vanilla, and fragrant yellow frangipani blossoms. A warm, gourmand tropical paradise scent.",
      temple: "Wat Plai Laem", cafe: "Coco Tam's", season: "Sunny Season (Feb-Jun)", music: "Island Reggae Chill"
    },
    similan: {
      name: "Similan", tagline: "Turquoise Sea",
      scent_title: "Turquoise Sea", scent_desc: "Bright ozonic notes, lime peel, drift wood, and clear white amber. Capturing the crisp feeling of diving into crystal clear tropical ocean waters.",
      temple: "Wat Suwan Kuha", cafe: "Sea Glass Cafe", season: "Sailing Season (Nov-May)", music: "Deep Blue Ambient"
    },
    // 4. Royal Heritage
    ayutthaya: {
      name: "Ayutthaya", tagline: "Temple of Time",
      scent_title: "Temple of Time", scent_desc: "A spiritual and grounding blend of ancient agarwood, temple incense smoke, and lotus blossoms blooming in quiet waters. Capturing the feeling of frozen time among red-brick ruins.",
      temple: "Wat Yai Chaimongkol", cafe: "Tatha Cafe", season: "Cool Breeze (Nov-Feb)", music: "Siam Ancient Chimes"
    },
    bangkok: {
      name: "Bangkok", tagline: "Midnight Jasmine",
      scent_title: "Midnight Jasmine", scent_desc: "Night-blooming jasmine grandiflorum, rich patchouli, and warm golden amber. Capturing the electric, mysterious nights of old Bangkok.",
      temple: "Wat Saket", cafe: "Chata Specialty Coffee", season: "Cool Nights (Nov-Jan)", music: "Bangkok Jazz Lofi"
    },
    sukhothai: {
      name: "Sukhothai", tagline: "Dawn of Happiness",
      scent_title: "Dawn of Happiness", scent_desc: "Pink sacred lotus flowers, ancient stone pond water, and a touch of light golden musk. Deeply peaceful and historic.",
      temple: "Wat Mahathat", cafe: "Sukhothai Heritage Cafe", season: "Loi Krathong (Nov)", music: "Siam Traditional Ranat"
    }
  },
  
  th: {
    enter_btn: "เข้าสู่การเดินทางแห่งกลิ่นหอม",
    slogan_title: "ไม่ได้ขายน้ำหอม แต่ขายความทรงจำของสถานที่",
    slogan_desc: "ทุกกล่องคือโปสการ์ดจากประเทศไทย บรรจุเรื่องราวผ่านกลิ่นอายพรีเมียมเพื่อให้คุณพกพากลับบ้านได้",
    map_instruction: "เลือกจังหวัดเพื่อเริ่มเดินทางและสัมผัสกลิ่นอาย",
    postcard_label: "ทราเวลการ์ด",
    flip_prompt: "คลิกเพื่อพลิกดูเรื่องราวและข้อมูลท้องถิ่น",
    rec_temple: "วัดที่แนะนำให้ไปเยือน",
    rec_cafe: "คาเฟ่ลับแนะนำ",
    rec_season: "ฤดูกาลที่ดีที่สุด",
    ambient_toggle: "เปิดเสียงบรรยากาศสถานที่",
    ambient_toggle_active: "ปิดเสียงบรรยากาศสถานที่",
    qr_caption: "สแกนเพื่อรับชมวิดีโอ",
    format_diffuser: "ก้านหอม",
    format_spray: "สเปรย์หอม",
    format_candle: "เทียนหอม",
    add_to_cart: "เพิ่มกลิ่นนี้ลงตะกร้า",
    cart_title: "ถุงเครื่องหอมของคุณ",
    empty_cart: "ยังไม่มีสินค้าในตะกร้าของคุณ",
    subtotal: "ยอดรวม",
    checkout: "ชำระเงินอย่างปลอดภัย",
    checkout_note: "ค่าจัดส่งพรีเมียมไปต่างประเทศจะคำนวณในขั้นตอนชำระเงิน",
    back_flip_btn: "กลับไปด้านหน้า",
    added_toast: "เพิ่มสินค้าลงในตะกร้าแล้ว!",
    
    // Chanel Upgrades
    brand_category: "การเดินทางผ่านกลิ่นอายแห่งสยาม",
    nav_collections: "คอลเลกชัน",
    nav_map: "แผนที่กลิ่นหอม",
    discover_travel_card: "ค้นพบการ์ดบันทึกเดินทาง",
    postcard_modal_title: "ทราเวลการ์ดบันทึกการเดินทาง",
    quick_buy: "ใส่ถุงสินค้า",
    item_diffuser: "ก้านไม้หอมกระจายกลิ่น",
    item_spray: "สเปรย์ปรับอากาศห้อง",
    item_candle: "เทียนหอมอโรมา",
    footer_terms: "ข้อตกลงและเงื่อนไข",
    footer_privacy: "นโยบายความเป็นส่วนตัว",
    
    // Checkout Upgrades
    checkout_header: "ข้อมูลการจัดส่ง",
    contact_info_title: "ข้อมูลการติดต่อ",
    shipping_address_title: "ที่อยู่จัดส่งสินค้า",
    field_email: "อีเมลแอดเดรส",
    field_phone: "เบอร์โทรศัพท์",
    field_firstname: "ชื่อ",
    field_lastname: "นามสกุล",
    field_address: "ที่อยู่ (ถนน, ซอย, เลขที่)",
    field_city: "จังหวัด / อำเภอ",
    field_postal: "รหัสไปรษณีย์",
    field_country: "ประเทศ / ภูมิภาค",
    shipping_method_title: "วิธีการจัดส่ง",
    ship_std_name: "จัดส่งแบบมาตรฐานทั่วโลก",
    ship_std_time: "7 - 14 วันทำการ",
    ship_free: "ฟรี",
    ship_exp_name: "จัดส่งด่วนพิเศษ DHL Express",
    ship_exp_time: "2 - 4 วันทำการ",
    payment_title: "วิธีการชำระเงิน",
    payment_sim_note: "ระบบจำลองการชำระเงินด้วย บัตรเครดิต / Apple Pay / PayPal อย่างปลอดภัย",
    total_to_pay: "ยอดชำระเงินรวม",
    place_order: "ยืนยันสั่งซื้อสินค้า",
    success_title: "ขอบคุณสำหรับการสั่งซื้อ",
    success_subtitle: "การเดินทางแห่งกลิ่นหอมของ SANÉH เริ่มต้นขึ้นแล้ว",
    success_desc: "เสน่ห์แห่งเมืองไทยกำลังได้รับการบรรจุขวดและจัดเตรียมแพ็คเกจอย่างประณีตเพื่อส่งให้คุณ เราจะส่งอีเมลยืนยันพร้อมเลขพัสดุให้คุณในไม่ช้า",
    continue_shopping: "เลือกซื้อสินค้าต่อ",
    footer_shipping_title: "การจัดส่งและการส่งมอบ",
    footer_shipping_desc: "จัดส่งมาตรฐานฟรีทั่วโลกเมื่อยอดสั่งซื้อเกิน $150 คัดสรรบริการและส่งตรงผ่าน DHL Express และ FedEx จากกรุงเทพฯ",
    footer_contact_title: "ช่องทางการติดต่อ",

    // Collection Names
    coll_origins: "กลิ่นต้นกำเนิดไทย",
    coll_northern: "ตำนานภาคเหนือ",
    coll_island: "เรื่องราวแห่งเกาะใต้",
    coll_royal: "มรดกราชธานี",

    // Admin Panel Translations
    admin_title: "แผงควบคุมสินค้า",
    admin_helper: "เลือกสินค้าเพื่ออัปเดตรูปภาพการถ่ายภาพระดับลักชัวรีและข้อมูลสินค้า",
    admin_reset_btn: "รีเซ็ตเป็นแค็ตตาล็อกเริ่มต้น",
    admin_col_img: "รูปภาพ",
    admin_col_name: "สินค้า",
    admin_col_action: "การทำงาน",
    admin_edit_title: "แก้ไขสินค้า",
    admin_sec_branding: "รายละเอียดสินค้า",
    admin_field_pname: "ชื่อสินค้า (แสดงผล)",
    admin_field_price: "ราคา ($ USD)",
    admin_sec_imagery: "ภาพถ่ายระดับลักชัวรี",
    admin_choose_file: "เลือกรูปภาพ",
    admin_upload_tip: "ไฟล์ PNG หรือ JPG แนะนำอัตราส่วนรูปภาพ 1:1.2",
    admin_sec_scent: "ข้อมูลการเดินทางแห่งกลิ่นหอม",
    admin_field_tagline: "สโลแกนกลิ่น",
    admin_field_desc: "คำอธิบายกลิ่น",
    admin_sec_recommendations: "สถานที่ท่องเที่ยวแนะนำ",
    admin_save_changes: "บันทึกการแก้ไข",

    // --- SCENT DATABASE (THAI) ---
    // 1. Origins of Thailand
    rain_on_earth: {
      name: "เรนออนเอิร์ธ", tagline: "กลิ่นไอฝนและไอโอโซนเปียกชื้น",
      scent_title: "Rain on Earth", scent_desc: "บันทึกกลิ่นอายการบำบัดของหน้าดินแห้งแล้งที่อ้าแขนรับน้ำฝนแรกฤดูมรสุม อบอวลไปด้วยกลิ่นไอดีนเปียกชื้น มอสป่า และโอโซนอุ่นชื้น",
      temple: "วัดสระเกศ (ภูเขาทอง)", cafe: "Earthy Brews Bangkok", season: "ฝนแรกฤดู (พ.ค. - มิ.ย.)", music: "Bangkok Rain Lofi"
    },
    siam_jasmine: {
      name: "สยามจัสมิน", tagline: "กลิ่นมะลิหลวงสยามหวานละมุน",
      scent_title: "Siam Jasmine", scent_desc: "ความหอมรัญจวนใจของดอกมะลิหลวงบานสะพรั่งที่เพิ่งเก็บใหม่ในคืนพระจันทร์เต็มดวงสไตล์ชาววัง โบราณ ประณีต และผ่อนคลายลึกซึ้ง",
      temple: "วัดพระศรีรัตนศาสดาราม (วัดพระแก้ว)", cafe: "Floral Cafe at Napasorn", season: "ฤดูร้อน (มี.ค. - พ.ค.)", music: "Siam Royal Harp"
    },
    thai_rice: {
      name: "ไทยไรซ์", tagline: "ข้าวหอมมะลิไทยไอเตยหอม",
      scent_title: "Thai Rice", scent_desc: "กลิ่นหอมกรุ่นอบอุ่นใจของข้าวหอมมะลิหุงสุกใหม่ๆ เคล้าไอเตยหอมบดละเอียด ให้ความรู้สึกละมุน อบอุ่น และเป็นเอกลักษณ์ไทยอันคุ้นเคย",
      temple: "วัดอรุณราชวราราม", cafe: "Pandan & Rice Lab", season: "ฤดูเก็บเกี่ยว (พ.ย. - ม.ค.)", music: "Siam Acoustic Guitar"
    },
    temple_incense: {
      name: "เทมเพิลอินเซนส์", tagline: "ควันธูปไม้จันทน์และวิหารศิลา",
      scent_title: "Temple Incense", scent_desc: "การผสมผสานอันศักดิ์สิทธิ์ของไม้แก่นจันทน์ ควันกำยานวัดโบราณ และดอกไม้สักการะแห้ง ให้ความรู้สึกสงบเงียบเย็นใจทางจิตวิญญาณ",
      temple: "วัดพระเชตุพนฯ (วัดโพธิ์)", cafe: "Peace Oriental Teahouse", season: "ฤดูหนาว (พ.ย. - ก.พ.)", music: "Buddhist Chants Ambient"
    },
    // 2. Northern Tales
    chiangmai: {
      name: "เชียงใหม่", tagline: "สายฝนหลังไร่ชา",
      scent_title: "Rain after Tea", scent_desc: "กลิ่นหอมสดชื่นของหยดน้ำค้างและฝนแรกฤดูที่ตกลงบนยอดใบชาเขียวชอุ่ม ณ ขุนเขาเชียงใหม่ที่เคล้าไอหมอก ให้ความรู้สึกเหมือนเช้าวันใหม่ใกล้ดอยสุเทพ",
      temple: "วัดพระธาตุดอยสุเทพ", cafe: "Gokotta Tea Shokudo", season: "ฤดูฝนและหมอก (ก.ค. - ต.ค.)", music: "Northern Mist Lofi"
    },
    nan: {
      name: "น่าน", tagline: "เสียงกระซิบจากป่าน่าน",
      scent_title: "Nan Forest Whisper", scent_desc: "กลิ่นป่าสนดึกดำบรรพ์สลับเฟิร์นป่าเปียกชื้นของสายหมอกและดินชื้น นำความสงบผ่อนคลายเงียบสงัดของหุบเขาน่านมาสู่ห้องคุณ",
      temple: "วัดภูมินทร์", cafe: "Nan Valleys Coffee", season: "ไอหมอกฤดูหนาว (ธ.ค. - ม.ค.)", music: "Nan Valley Acoustic"
    },
    chiangrai: {
      name: "เชียงราย", tagline: "ชาอูหลงยอดดอยสูง",
      scent_title: "Highland Oolong", scent_desc: "ยอดชาคั่วหอมกรุ่น ดอกกล้วยไม้ป่า และไอเย็นบนดอยสูง ชวนให้นึกถึงความงดงามยามพระอาทิตย์ขึ้นเหนือเทือกเขาดอยแม่สลอง",
      temple: "วัดร่องขุ่น", cafe: "Choui Fong Tea Cafe", season: "ลมหนาวเทือกเขา (พ.ย. - ม.ค.)", music: "Highland Flute"
    },
    maehongson: {
      name: "แม่ฮ่องสอน", tagline: "หมอกสามฤดู",
      scent_title: "Mist of Three Seasons", scent_desc: "ใบสนป่า มอสสีเขียวชุ่มน้ำ ดอกไม้ป่า และยูคาลิปตัสที่เย็นสดชื่น ให้ความรู้สึกเย็นสะอาด ปลอดโปร่งราวอยู่ในโอบกอดของขุนเขาปาย",
      temple: "วัดพระธาตุดอยกองมู", cafe: "Coffee in Love Pai", season: "เทศกาลสายหมอก (ต.ค. - พ.ย.)", music: "Pai Acoustic Sunset"
    },
    // 3. Island Stories
    phuket: {
      name: "ภูเก็ต", tagline: "เกลือทะเลและมะพร้าวหอม",
      scent_title: "Sea Salt & Coconut", scent_desc: "กลิ่นอายลมทะเลชื่นใจผสานความหวานละมุนจากน้ำมันมะพร้าวและครีมกันแดดอุ่น ๆ ชวนให้นึกถึงช่วงเวลาทองก่อนพระอาทิตย์ลับขอบฟ้าที่แหลมพรหมเทพ",
      temple: "วัดฉลอง (วัดไชยธาราราม)", cafe: "Refresh Tropical Cafe", season: "ฤดูร้อนและแดดใส (พ.ย. - เม.ย.)", music: "Andaman Sunset Chill"
    },
    krabi: {
      name: "กระบี่", tagline: "ถ้ำมรกตกระบี่",
      scent_title: "Emerald Caves", scent_desc: "กลิ่นคลื่นทะเลสดชื่นปะทะหน้าผาหินปูนและหินแร่เปียกชื้น แทรกด้วยสมุนไพรขิงป่าและใบไม้ริมหาด ให้กลิ่นสะอาดลุ่มลึกแนวแอดเวนเจอร์",
      temple: "วัดถ้ำเสือ", cafe: "Hub Cafe Krabi", season: "ลมมรสุมสงบ (ธ.ค. - มี.ค.)", music: "Emerald Bay Waves"
    },
    samui: {
      name: "สมุย", tagline: "สวนมะพร้าวชายหาดสมุย",
      scent_title: "Coconut Grove", scent_desc: "มะพร้าวคั่วไฟหอมหวาน น้ำกะทิสดเข้มข้น วานิลลา และดอกลีลาวดีสีขาวหอมสดชื่น ให้บรรยากาศพักผ่อนเขตร้อนที่น่ารื่นรมย์และอบอุ่นใจ",
      temple: "วัดปลายแหลม", cafe: "Coco Tam's", season: "หน้าร้อนท้องทะเล (ก.พ. - มิ.ย.)", music: "Island Reggae Chill"
    },
    similan: {
      name: "สิมิลัน", tagline: "น้ำใสสิมิลันสีคราม",
      scent_title: "Turquoise Sea", scent_desc: "กลิ่นอายโอโซนทะเลสีครามสดชื่น เปลือกมะนาวคั้นสด ไม้ลอยน้ำตากแดด และแอมเบอร์สีขาวสะอาด ให้ความรู้สึกเย็นสดชื่นโปร่งเบาเหมือนลอยอยู่ในน้ำทะเลใส",
      temple: "วัดสุวรรณคูหา", cafe: "Sea Glass Cafe", season: "ฤดูกาลล่องเรือ (พ.ย. - พ.ค.)", music: "Deep Blue Ambient"
    },
    // 4. Royal Heritage
    ayutthaya: {
      name: "อยุธยา", tagline: "วิหารแห่งกาลเวลา",
      scent_title: "Temple of Time", scent_desc: "ความเงียบสงบที่ประณีตด้วยกลิ่นกฤษณาควันกำยานวัดโบราณ และดอกบัวบานสะพรั่งเหนือน้ำใส ให้ความรู้สึกเหมือนเวลารอบกายหยุดนิ่งท่ามกลางโบราณสถานอิฐแดง",
      temple: "วัดใหญ่ชัยมงคล", cafe: "ทาทา คาเฟ่ (Tatha Cafe)", season: "ฤดูหนาวรับลมเย็น (พ.ย. - ก.พ.)", music: "Siam Ancient Chimes"
    },
    bangkok: {
      name: "บางกอก", tagline: "มะลิราตรีบางกอก",
      scent_title: "Midnight Jasmine", scent_desc: "ดอกมะลิราตรีบานสะพรั่งหอมยวนใจหลังเที่ยงคืน โอบล้อมด้วยพิมเสนหอม และยางไม้แอมเบอร์สีทอง ให้เสน่ห์หรูหรา น่าค้นหา ยามค่ำคืนของบางกอกโบราณ",
      temple: "วัดสระเกศ", cafe: "Chata Specialty Coffee", season: "ค่ำคืนลมเย็น (พ.ย. - ม.ค.)", music: "Bangkok Jazz Lofi"
    },
    sukhothai: {
      name: "สุโขทัย", tagline: "รุ่งอรุณแห่งความสุข",
      scent_title: "Dawn of Happiness", scent_desc: "ดอกบัวหลวงสีชมพูในสระน้ำโบราณพรมกลิ่นศิลาวิหาร และมัสก์สีทองคำบางเบา ให้ความรู้สึกสงบงาม ร่มเย็น และเต็มเปี่ยมด้วยประวัติศาสตร์สยามรุ่งอรุณ",
      temple: "วัดมหาธาตุ สุโขทัย", cafe: "Sukhothai Heritage Cafe", season: "ลอยกระทงเผาเทียนเล่นไฟ (พ.ย.)", music: "Siam Traditional Ranat"
    }
  }
};

// Add fallback translations for other 6 languages to keep file clean but valid
const otherLangs = ["zh", "ar", "ja", "ko", "fr", "es"];
otherLangs.forEach(lang => {
  defaultI18n[lang] = {};
  // Copy all non-scent keys and structural items from English default
  Object.keys(defaultI18n.en).forEach(key => {
    if (typeof defaultI18n.en[key] === "string") {
      defaultI18n[lang][key] = defaultI18n.en[key];
    } else {
      defaultI18n[lang][key] = { ...defaultI18n.en[key] };
    }
  });
});

// Customized Chinese adjustments for names (Optional, for realistic look)
defaultI18n.zh.coll_origins = "泰国起源";
defaultI18n.zh.coll_northern = "北方故事";
defaultI18n.zh.coll_island = "海岛故事";
defaultI18n.zh.coll_royal = "皇家遗产";
defaultI18n.zh.admin_title = "产品管理器";
defaultI18n.zh.admin_save_changes = "保存修改";

// Customized Arabic adjustments for names
defaultI18n.ar.coll_origins = "أصول تايلاند";
defaultI18n.ar.coll_northern = "حكايات الشمال";
defaultI18n.ar.coll_island = "قصص الجزر";
defaultI18n.ar.coll_royal = "التراث الملكي";

// ==========================================================================
// LUXURY PRODUCT GRID DATABASES & FALLBACKS
// ==========================================================================

const defaultProductsData = {};
const collectionsData = {
  origins: ["rain_on_earth", "siam_jasmine", "thai_rice", "temple_incense"],
  northern: ["chiangmai", "nan", "chiangrai", "maehongson"],
  island: ["phuket", "krabi", "samui", "similan"],
  royal: ["ayutthaya", "bangkok", "sukhothai"]
};

// Initialize all 15 scents products catalog dynamically
const defaultPostcardImages = {
  chiangmai: "assets/chiang_mai.png",
  phuket: "assets/phuket.jpg",
  ayutthaya: "assets/ayutthaya.jpg",
  
  // Defaults for others
  rain_on_earth: "assets/ayutthaya.jpg",
  siam_jasmine: "assets/ayutthaya.jpg",
  thai_rice: "assets/ayutthaya.jpg",
  temple_incense: "assets/ayutthaya.jpg",
  nan: "assets/chiang_mai.png",
  chiangrai: "assets/chiang_mai.png",
  maehongson: "assets/chiang_mai.png",
  krabi: "assets/phuket.jpg",
  samui: "assets/phuket.jpg",
  similan: "assets/phuket.jpg",
  bangkok: "assets/ayutthaya.jpg",
  sukhothai: "assets/ayutthaya.jpg"
};

const defaultProductPhotos = {
  chiangmai_diffuser: "assets/diffuser_chiangmai.png",
  ayutthaya_candle: "assets/candle_ayutthaya.jpg",
  // Others fallback to respective default postcard frames
};

Object.keys(collectionsData).forEach(colKey => {
  collectionsData[colKey].forEach(scentId => {
    defaultProductsData[scentId] = [
      {
        id: `${scentId}_diffuser`,
        type: "diffuser",
        price: 59.00,
        img: defaultProductPhotos[`${scentId}_diffuser`] || defaultPostcardImages[scentId]
      },
      {
        id: `${scentId}_candle`,
        type: "candle",
        price: 49.00,
        img: defaultProductPhotos[`${scentId}_candle`] || defaultPostcardImages[scentId]
      },
      {
        id: `${scentId}_spray`,
        type: "spray",
        price: 45.00,
        img: defaultProductPhotos[`${scentId}_spray`] || defaultPostcardImages[scentId]
      }
    ];
  });
});

// ==========================================================================
// STATE LOADERS & SAVERS (LOCAL STORAGE CACHING)
// ==========================================================================

let i18n = {};
let productsData = {};

function initCatalogStorage() {
  const cachedI18n = localStorage.getItem("saneh_i18n");
  const cachedProducts = localStorage.getItem("saneh_products");

  if (cachedI18n) {
    i18n = JSON.parse(cachedI18n);
  } else {
    i18n = JSON.parse(JSON.stringify(defaultI18n));
    localStorage.setItem("saneh_i18n", JSON.stringify(i18n));
  }

  if (cachedProducts) {
    productsData = JSON.parse(cachedProducts);
  } else {
    productsData = JSON.parse(JSON.stringify(defaultProductsData));
    localStorage.setItem("saneh_products", JSON.stringify(productsData));
  }
}

function saveCatalogStorage() {
  localStorage.setItem("saneh_i18n", JSON.stringify(i18n));
  localStorage.setItem("saneh_products", JSON.stringify(productsData));
}

function resetCatalogToDefault() {
  localStorage.removeItem("saneh_i18n");
  localStorage.removeItem("saneh_products");
  location.reload();
}

initCatalogStorage();

// ==========================================================================
// STATE MANAGEMENT & DOM FLOW
// ==========================================================================

let activeLang = "en";
let activeCollection = "origins";
let activeProvince = "rain_on_earth"; // default first scent
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  lucide.createIcons();
  
  // DOM selectors
  const gatekeeper = document.getElementById("gatekeeper");
  const langButtons = document.querySelectorAll(".lang-btn");
  const enterJourneyBtn = document.getElementById("enter-journey-btn");
  
  // Navigation Tabs Toggles
  const showCollectionBtn = document.getElementById("show-collection-btn");
  const showMapBtn = document.getElementById("show-map-btn");
  const collectionViewPanel = document.getElementById("collection-view-panel");
  const mapViewPanel = document.getElementById("map-view-panel");
  
  // Travel Card Modal elements
  const openTravelCardBtn = document.getElementById("open-travel-card-btn");
  const closeTravelCardBtn = document.getElementById("close-travel-card-btn");
  const cardModalOverlay = document.getElementById("card-modal-overlay");
  const travelCard3d = document.getElementById("travel-card-3d");
  const flipBackTrigger = document.getElementById("flip-back-trigger");
  
  // Shopping Cart elements
  const cartBtn = document.getElementById("cart-btn");
  const cartCloseBtn = document.getElementById("close-cart-btn");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-drawer-overlay");
  
  // Media Player elements
  const simulatedMusicBtn = document.getElementById("simulated-music-play");
  const ambientAudioBtn = document.getElementById("ambient-audio-btn");

  // Admin Portal elements
  const adminToggleBtn = document.getElementById("admin-toggle-btn");
  const closeAdminBtn = document.getElementById("close-admin-btn");
  const adminEditBackBtn = document.getElementById("admin-edit-back-btn");
  const adminDrawer = document.getElementById("admin-drawer");
  const adminDrawerOverlay = document.getElementById("admin-drawer-overlay");
  
  const adminViewList = document.getElementById("admin-view-list");
  const adminViewEdit = document.getElementById("admin-view-edit");
  const adminProductListBody = document.getElementById("admin-product-list-body");
  
  const adminProductEditForm = document.getElementById("admin-product-edit-form");
  const editProdId = document.getElementById("edit-prod-id");
  const editProdNameDisplay = document.getElementById("edit-prod-name-display");
  const editProdPrice = document.getElementById("edit-prod-price");
  const editProdImagePreview = document.getElementById("edit-prod-image-preview");
  const editProdImageFile = document.getElementById("edit-prod-image-file");
  
  const editScentTagline = document.getElementById("edit-scent-tagline");
  const editScentDesc = document.getElementById("edit-scent-desc");
  const editRecTemple = document.getElementById("edit-rec-temple");
  const editRecCafe = document.getElementById("edit-rec-cafe");
  const editRecSeason = document.getElementById("edit-rec-season");
  
  const adminResetCatalogBtn = document.getElementById("admin-reset-catalog-btn");

  // ==================== GATEKEEPER ACTIONS ====================
  
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      langButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      
      activeLang = btn.getAttribute("data-lang");
      enterJourneyBtn.classList.remove("disabled");
      enterJourneyBtn.disabled = false;
      enterJourneyBtn.querySelector("span").textContent = i18n[activeLang].enter_btn;
    });
  });
  
  enterJourneyBtn.addEventListener("click", () => {
    if (enterJourneyBtn.disabled) return;
    
    applyTranslations(activeLang);
    updateHeaderLangDisplay(activeLang);
    document.body.classList.remove("gatekeeper-active");
    
    // Initialize Collection Nav & Scent Nav
    renderCollectionNav();
    selectCollection(activeCollection);
  });
  
  // Lang Toggle dropdown in header
  document.querySelectorAll(".lang-menu-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      activeLang = item.getAttribute("data-lang");
      applyTranslations(activeLang);
      updateHeaderLangDisplay(activeLang);
      renderCollectionNav();
      renderScentNav(activeCollection);
      renderProductGrid(activeProvince);
    });
  });

  // ==================== DUAL-LEVEL NAV RENDERING ====================
  
  function renderCollectionNav() {
    document.querySelectorAll(".coll-nav-item").forEach(btn => {
      const colKey = btn.getAttribute("data-collection");
      btn.textContent = i18n[activeLang][`coll_${colKey}`] || btn.textContent;
      
      // Remove old listeners to avoid stacking
      btn.replaceWith(btn.cloneNode(true));
    });
    
    // Re-attach fresh click handlers
    document.querySelectorAll(".coll-nav-item").forEach(btn => {
      const colKey = btn.getAttribute("data-collection");
      if (colKey === activeCollection) btn.classList.add("active");
      
      btn.addEventListener("click", () => {
        document.querySelectorAll(".coll-nav-item").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectCollection(colKey);
      });
    });
  }

  function selectCollection(colKey) {
    activeCollection = colKey;
    renderScentNav(colKey);
    
    // Select first scent in the newly selected collection
    const firstScent = collectionsData[colKey][0];
    selectScent(firstScent);
  }

  function renderScentNav(colKey) {
    const container = document.getElementById("scent-nav-container");
    container.innerHTML = "";
    
    const scents = collectionsData[colKey];
    scents.forEach(scentId => {
      const scentData = i18n[activeLang][scentId] || defaultI18n[activeLang][scentId];
      
      const btn = document.createElement("button");
      btn.className = `scent-nav-item ${scentId === activeProvince ? 'active' : ''}`;
      btn.setAttribute("data-scent", scentId);
      btn.textContent = scentData.name;
      
      btn.addEventListener("click", () => {
        document.querySelectorAll(".scent-nav-item").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectScent(scentId);
      });
      container.appendChild(btn);
    });
  }

  function selectScent(scentId) {
    if (activeProvince === scentId) {
      // Just make sure values are rendered
      updateActiveScentDetails(activeLang, scentId);
      renderProductGrid(scentId);
      return;
    }
    
    stopAudioStates();
    
    // Reset postcard flipping
    travelCard3d.classList.remove("flipped");
    
    activeProvince = scentId;
    
    // Sync Scent Sub-nav styling
    document.querySelectorAll(".scent-nav-item").forEach(btn => {
      if (btn.getAttribute("data-scent") === scentId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update body background theme based on collection group
    document.body.className = `bg-${activeCollection}`;
    
    updateActiveScentDetails(activeLang, scentId);
    renderProductGrid(scentId);
  }

  // ==================== NAVIGATION TABS TOGGLES ====================
  
  showCollectionBtn.addEventListener("click", () => {
    showCollectionBtn.classList.add("active-nav");
    showMapBtn.classList.remove("active-nav");
    collectionViewPanel.classList.remove("hidden");
    mapViewPanel.classList.add("hidden");
  });
  
  showMapBtn.addEventListener("click", () => {
    showMapBtn.classList.add("active-nav");
    showCollectionBtn.classList.remove("active-nav");
    mapViewPanel.classList.remove("hidden");
    collectionViewPanel.classList.add("hidden");
  });

  // Map Pins redirection to dynamic categories
  document.querySelectorAll(".map-pin").forEach(pin => {
    pin.addEventListener("click", () => {
      const prov = pin.getAttribute("data-province");
      
      // Map standard pins back to our collection hierarchy
      if (prov === "chiangmai") {
        document.querySelector("[data-collection='northern']").click();
        setTimeout(() => {
          const matchingScentBtn = document.querySelector("[data-scent='chiangmai']");
          if (matchingScentBtn) matchingScentBtn.click();
        }, 50);
      } else if (prov === "phuket") {
        document.querySelector("[data-collection='island']").click();
        setTimeout(() => {
          const matchingScentBtn = document.querySelector("[data-scent='phuket']");
          if (matchingScentBtn) matchingScentBtn.click();
        }, 50);
      } else if (prov === "ayutthaya") {
        document.querySelector("[data-collection='royal']").click();
        setTimeout(() => {
          const matchingScentBtn = document.querySelector("[data-scent='ayutthaya']");
          if (matchingScentBtn) matchingScentBtn.click();
        }, 50);
      }
      
      setTimeout(() => {
        showCollectionBtn.click();
      }, 500);
    });
  });

  // ==================== TRAVEL CARD MODAL CONTROLS ====================
  
  openTravelCardBtn.addEventListener("click", () => {
    cardModalOverlay.classList.add("active");
  });
  
  const closeTravelCardModal = () => {
    cardModalOverlay.classList.remove("active");
    travelCard3d.classList.remove("flipped");
    stopAudioStates();
  };
  
  closeTravelCardBtn.addEventListener("click", closeTravelCardModal);
  cardModalOverlay.addEventListener("click", (e) => {
    if (e.target === cardModalOverlay) {
      closeTravelCardModal();
    }
  });
  
  // Card 3D Flip
  document.querySelector(".card-front").addEventListener("click", () => {
    travelCard3d.classList.add("flipped");
  });
  
  flipBackTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    travelCard3d.classList.remove("flipped");
  });

  // ==================== SIMULATED SPOTIFY & AMBIENT AUDIO ====================
  let musicInterval = null;
  let musicPlaying = false;
  let musicProgress = 0;
  
  simulatedMusicBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const widget = document.querySelector(".spotify-simulated-widget");
    const playIcon = document.getElementById("play-icon-state");
    const progressBar = document.getElementById("music-progress-bar");
    
    if (musicPlaying) {
      musicPlaying = false;
      widget.classList.remove("playing");
      playIcon.setAttribute("data-lucide", "play");
      clearInterval(musicInterval);
    } else {
      musicPlaying = true;
      widget.classList.add("playing");
      playIcon.setAttribute("data-lucide", "pause");
      
      musicInterval = setInterval(() => {
        musicProgress += 1;
        if (musicProgress > 100) musicProgress = 0;
        progressBar.style.width = `${musicProgress}%`;
      }, 300);
    }
    lucide.createIcons();
  });

  let ambientPlaying = false;
  
  ambientAudioBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    
    // We only have real audio elements for chiangmai, phuket, ayutthaya. Others fallback silently or use those.
    let mappedAudioId = activeProvince;
    if (!["chiangmai", "phuket", "ayutthaya"].includes(activeProvince)) {
      // Fallback based on collection category
      if (activeCollection === "origins") mappedAudioId = "ayutthaya";
      else if (activeCollection === "northern") mappedAudioId = "chiangmai";
      else if (activeCollection === "island") mappedAudioId = "phuket";
      else mappedAudioId = "ayutthaya";
    }
    
    const audioEl = document.getElementById(`audio-${mappedAudioId}`);
    const ambientIcon = document.getElementById("ambient-icon-state");
    
    if (ambientPlaying) {
      if (audioEl) audioEl.pause();
      ambientPlaying = false;
      ambientAudioBtn.classList.remove("active");
      ambientIcon.setAttribute("data-lucide", "volume-x");
      ambientAudioBtn.querySelector("span").textContent = i18n[activeLang].ambient_toggle;
    } else {
      if (audioEl) {
        audioEl.play().then(() => {
          ambientPlaying = true;
          ambientAudioBtn.classList.add("active");
          ambientIcon.setAttribute("data-lucide", "volume-2");
          ambientAudioBtn.querySelector("span").textContent = i18n[activeLang].ambient_toggle_active;
        }).catch(err => {
          console.log("Audio play blocked by browser policy.", err);
        });
      } else {
        // Mock ambient audio play if audio tag missing
        ambientPlaying = true;
        ambientAudioBtn.classList.add("active");
        ambientIcon.setAttribute("data-lucide", "volume-2");
        ambientAudioBtn.querySelector("span").textContent = i18n[activeLang].ambient_toggle_active;
      }
    }
    lucide.createIcons();
  });
  
  function stopAudioStates() {
    let mappedAudioId = activeProvince;
    if (!["chiangmai", "phuket", "ayutthaya"].includes(activeProvince)) {
      if (activeCollection === "origins") mappedAudioId = "ayutthaya";
      else if (activeCollection === "northern") mappedAudioId = "chiangmai";
      else if (activeCollection === "island") mappedAudioId = "phuket";
      else mappedAudioId = "ayutthaya";
    }
    
    const audioEl = document.getElementById(`audio-${mappedAudioId}`);
    if (audioEl) {
      audioEl.pause();
      audioEl.currentTime = 0;
    }
    ambientPlaying = false;
    ambientAudioBtn.classList.remove("active");
    document.getElementById("ambient-icon-state").setAttribute("data-lucide", "volume-x");
    ambientAudioBtn.querySelector("span").textContent = i18n[activeLang].ambient_toggle;
    
    musicPlaying = false;
    document.querySelector(".spotify-simulated-widget").classList.remove("playing");
    document.getElementById("play-icon-state").setAttribute("data-lucide", "play");
    document.getElementById("music-progress-bar").style.width = "0%";
    musicProgress = 0;
    clearInterval(musicInterval);
    
    lucide.createIcons();
  }

  // ==================== CART DRAWER FLOW ====================
  
  cartBtn.addEventListener("click", () => {
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
  });
  
  const closeCart = () => {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
    resetCartViews();
  };
  
  cartCloseBtn.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);

  // ==================== CHECKOUT STEP FLOW ====================
  const checkoutBtn = document.getElementById("checkout-btn");
  const checkoutBackBtn = document.getElementById("checkout-back-btn");
  const checkoutAddressForm = document.getElementById("checkout-address-form");
  const successCloseBtn = document.getElementById("success-close-btn");
  
  const cartViewItems = document.getElementById("cart-view-items");
  const cartViewCheckout = document.getElementById("cart-view-checkout");
  const cartViewSuccess = document.getElementById("cart-view-success");
  
  checkoutBtn.addEventListener("click", () => {
    cartViewItems.className = "cart-drawer-view hidden-view";
    cartViewCheckout.className = "cart-drawer-view active-view";
    updateCheckoutTotal();
  });
  
  checkoutBackBtn.addEventListener("click", () => {
    cartViewCheckout.className = "cart-drawer-view hidden-view";
    cartViewItems.className = "cart-drawer-view active-view";
  });
  
  checkoutAddressForm.addEventListener("submit", (e) => {
    e.preventDefault();
    cart = [];
    updateCartUI();
    
    cartViewCheckout.className = "cart-drawer-view hidden-view";
    cartViewSuccess.className = "cart-drawer-view active-view";
  });
  
  successCloseBtn.addEventListener("click", () => {
    closeCart();
  });
  
  const resetCartViews = () => {
    cartViewItems.className = "cart-drawer-view active-view";
    cartViewCheckout.className = "cart-drawer-view hidden-view";
    cartViewSuccess.className = "cart-drawer-view hidden-view";
    checkoutAddressForm.reset();
  };

  // Shipping cost recalculation
  const shipStdRadio = document.getElementById("ship-std-radio");
  const shipExpRadio = document.getElementById("ship-exp-radio");
  
  const updateCheckoutTotal = () => {
    let subtotal = 0;
    cart.forEach(item => subtotal += item.price);
    
    let total = subtotal;
    if (shipExpRadio.checked) {
      total += 25.00;
    }
    
    document.getElementById("checkout-total-val").textContent = `$${total.toFixed(2)}`;
  };
  
  shipStdRadio.addEventListener("change", updateCheckoutTotal);
  shipExpRadio.addEventListener("change", updateCheckoutTotal);

  // ==================== ADMIN PANEL MANAGER DRAWER ====================
  
  adminToggleBtn.addEventListener("click", () => {
    renderAdminProductList();
    adminDrawer.classList.add("active");
    adminDrawerOverlay.classList.add("active");
  });

  const closeAdmin = () => {
    adminDrawer.classList.remove("active");
    adminDrawerOverlay.classList.remove("active");
    setTimeout(() => {
      adminViewList.className = "admin-drawer-view active-view";
      adminViewEdit.className = "admin-drawer-view hidden-view";
      adminProductEditForm.reset();
    }, 400);
  };

  closeAdminBtn.addEventListener("click", closeAdmin);
  adminDrawerOverlay.addEventListener("click", closeAdmin);
  adminEditBackBtn.addEventListener("click", () => {
    adminViewEdit.className = "admin-drawer-view hidden-view";
    adminViewList.className = "admin-drawer-view active-view";
  });

  adminResetCatalogBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset all custom product images and metadata to default?")) {
      resetCatalogToDefault();
    }
  });

  function renderAdminProductList() {
    adminProductListBody.innerHTML = "";
    
    // Loop through all collections and scents to list products in a neat table
    Object.keys(collectionsData).forEach(colKey => {
      collectionsData[colKey].forEach(scentId => {
        const scentData = i18n[activeLang][scentId];
        const products = productsData[scentId];
        
        products.forEach(prod => {
          const typeLabel = i18n[activeLang][`item_${prod.type}`];
          
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>
              <img src="${prod.img}" class="admin-table-img" alt="Prod Image">
            </td>
            <td>
              <span class="admin-table-name-cell">${scentData.name}</span>
              <span class="admin-table-format-cell">${typeLabel} — $${prod.price.toFixed(2)}</span>
            </td>
            <td>
              <button class="admin-edit-action-btn" onclick="openEditProductForm('${scentId}', '${prod.id}')">
                Edit
              </button>
            </td>
          `;
          adminProductListBody.appendChild(tr);
        });
      });
    });
  }

  // Edit image FileReader container
  let uploadedImageBase64 = null;
  editProdImageFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        uploadedImageBase64 = event.target.result;
        editProdImagePreview.src = uploadedImageBase64;
      };
      reader.readAsDataURL(file);
    }
  });

  // Global callback for opening the edit form
  window.openEditProductForm = (scentId, prodId) => {
    uploadedImageBase64 = null;
    editProdImageFile.value = "";
    
    const products = productsData[scentId];
    const product = products.find(p => p.id === prodId);
    if (!product) return;
    
    const scentData = i18n[activeLang][scentId];
    const typeLabel = i18n[activeLang][`item_${product.type}`];
    
    editProdId.value = JSON.stringify({ scentId, prodId });
    editProdNameDisplay.value = `${scentData.name} — ${typeLabel}`;
    editProdPrice.value = product.price;
    editProdImagePreview.src = product.img;
    
    editScentTagline.value = scentData.tagline;
    editScentDesc.value = scentData.scent_desc;
    editRecTemple.value = scentData.temple;
    editRecCafe.value = scentData.cafe;
    editRecSeason.value = scentData.season;
    
    adminViewList.className = "admin-drawer-view hidden-view";
    adminViewEdit.className = "admin-drawer-view active-view";
    
    lucide.createIcons();
  };

  adminProductEditForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const keys = JSON.parse(editProdId.value);
    const { scentId, prodId } = keys;
    
    // 1. Update Product Details
    const products = productsData[scentId];
    const product = products.find(p => p.id === prodId);
    if (product) {
      product.price = parseFloat(editProdPrice.value);
      if (uploadedImageBase64) {
        product.img = uploadedImageBase64;
      }
    }
    
    // 2. Update Scent Metadata (Saves directly to active lang node)
    const scentData = i18n[activeLang][scentId];
    if (scentData) {
      scentData.tagline = editScentTagline.value;
      scentData.scent_title = editScentTagline.value; // sync title and tagline
      scentData.scent_desc = editScentDesc.value;
      scentData.temple = editRecTemple.value;
      scentData.cafe = editRecCafe.value;
      scentData.season = editRecSeason.value;
    }
    
    // 3. Save to localStorage
    saveCatalogStorage();
    
    // 4. Update UI Components
    applyTranslations(activeLang);
    renderProductGrid(activeProvince);
    
    // Toast alert
    showToastNotification(`Successfully updated ${editProdNameDisplay.value}!`);
    
    // Return to list view
    adminViewEdit.className = "admin-drawer-view hidden-view";
    adminViewList.className = "admin-drawer-view active-view";
    renderAdminProductList();
  });

});

// ==========================================================================
// TRANSLATION & DYNAMIC GRID RENDERING ENGINE
// ==========================================================================

function applyTranslations(lang) {
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.lang = lang;
  }
  
  // Translate static data-i18n items in page
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      element.textContent = i18n[lang][key];
    }
  });
  
  updateActiveScentDetails(lang, activeProvince);
  updateCartUI();
}

function updateHeaderLangDisplay(lang) {
  const displayLabel = document.querySelector(".current-lang-code");
  if (displayLabel) {
    displayLabel.textContent = lang.toUpperCase();
  }
}

function updateActiveScentDetails(lang, province) {
  const tData = i18n[lang][province] || defaultI18n[lang][province];
  
  // Upper Banner Content
  document.getElementById("banner-scent-title").textContent = tData.scent_title;
  document.getElementById("banner-scent-desc").textContent = tData.scent_desc;
  
  // Travel Postcard Modal Front
  document.getElementById("card-front-title").textContent = tData.name;
  document.getElementById("card-front-tagline").textContent = `"${tData.tagline}"`;
  
  // Get postcard image (using Chiang Mai / Phuket / Ayutthaya defaults or fallback colors)
  const defaultImages = {
    chiangmai: "assets/chiang_mai.png",
    phuket: "assets/phuket.jpg",
    ayutthaya: "assets/ayutthaya.jpg"
  };
  document.getElementById("card-front-img").src = defaultImages[province] || defaultImages.ayutthaya;
  document.getElementById("card-front-img").alt = tData.name;
  
  // Travel Postcard Modal Back Scent
  document.getElementById("card-back-scent-title").textContent = tData.scent_title;
  document.getElementById("card-back-scent-desc").textContent = tData.scent_desc;
  
  // Travel Postcard Locals
  document.getElementById("rec-temple-name").textContent = tData.temple;
  document.getElementById("rec-cafe-name").textContent = tData.cafe;
  document.getElementById("rec-season-val").textContent = tData.season;
  
  // Playlist
  document.getElementById("music-title").textContent = tData.music;
}

// Render dynamic Chanel-Style Product Grid cards
function renderProductGrid(province) {
  const gridContainer = document.getElementById("product-grid-container");
  gridContainer.innerHTML = "";
  
  const products = productsData[province] || defaultProductsData[province];
  const tData = i18n[activeLang][province] || defaultI18n[activeLang][province];
  
  products.forEach(prod => {
    const formatLabel = i18n[activeLang][`item_${prod.type}`];
    const buyButtonLabel = i18n[activeLang].quick_buy;
    
    const cardEl = document.createElement("div");
    cardEl.className = "product-card";
    cardEl.innerHTML = `
      <div class="product-image-wrapper">
        <img src="${prod.img}" class="product-img-primary" alt="${formatLabel} - ${tData.name}">
        <button class="quick-add-overlay-btn" onclick="addProductToCart('${province}', '${prod.type}', ${prod.price}, '${prod.img}')">
          <i data-lucide="shopping-bag" class="icon-sm"></i>
          <span>${buyButtonLabel}</span>
        </button>
      </div>
      <div class="product-meta">
        <span class="product-brand-sub">S A N É H</span>
        <h4 class="product-grid-name">${formatLabel} — ${tData.name}</h4>
        <p class="product-grid-scent">${tData.tagline}</p>
        <span class="product-grid-price">$${prod.price.toFixed(2)}</span>
      </div>
    `;
    gridContainer.appendChild(cardEl);
  });
  
  lucide.createIcons(); // refresh icons inside grids
}

// ==========================================================================
// E-COMMERCE SHOPPING BAG LOGIC
// ==========================================================================

window.addProductToCart = (province, formatType, price, imagePath) => {
  const provinceDetails = i18n[activeLang][province] || defaultI18n[activeLang][province];
  const formatLabel = i18n[activeLang][`item_${formatType}`];
  
  const cartItem = {
    id: `${province}-${formatType}-${Date.now()}`,
    name: `SANÉH ${formatLabel} — ${provinceDetails.name}`,
    format: formatLabel,
    price: price,
    img: imagePath
  };
  
  cart.push(cartItem);
  updateCartUI();
  showToastNotification(`${cartItem.name} ${i18n[activeLang].added_toast}`);
};

function updateCartUI() {
  const container = document.getElementById("cart-items-container");
  const countBadge = document.querySelector(".cart-count");
  const subtotalEl = document.getElementById("cart-subtotal-val");
  const checkoutBtn = document.getElementById("checkout-btn");
  
  if (countBadge) countBadge.textContent = cart.length;
  if (!container) return; // guard check for gatekeeper
  
  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-cart-message">${i18n[activeLang].empty_cart}</p>`;
    subtotalEl.textContent = "$0.00";
    checkoutBtn.disabled = true;
    return;
  }
  
  container.innerHTML = "";
  let subtotal = 0;
  
  cart.forEach(item => {
    subtotal += item.price;
    
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h5 class="cart-item-name">${item.name}</h5>
        <span class="cart-item-meta">${item.format}</span>
        <span class="cart-item-price">$${item.price.toFixed(2)}</span>
      </div>
      <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')">
        <i data-lucide="trash-2" class="icon-xs"></i>
      </button>
    `;
    container.appendChild(itemEl);
  });
  
  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  checkoutBtn.disabled = false;
  
  lucide.createIcons();
}

window.removeFromCart = (id) => {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
};

function showToastNotification(message) {
  const toast = document.getElementById("toast-notification");
  toast.querySelector(".toast-message").textContent = message;
  toast.classList.add("active");
  
  setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
}

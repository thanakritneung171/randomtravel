const places = [
  // วัด / ศาสนา
  {
    name: 'ดอยสุเทพ',
    nameEn: 'Doi Suthep Temple',
    category: '🛕 วัด / ศาสนา',
    emoji: '⛰️',
    desc: 'พระธาตุดอยสุเทพ สัญลักษณ์ของเชียงใหม่ ตั้งอยู่บนยอดดอยสูง 1,073 เมตร วิวเมืองจากยอดดอยสวยสุดๆ โดยเฉพาะตอนเช้า ต้องขึ้นบันได 309 ขั้น!',
    mapUrl: 'https://www.google.com/maps/search/วัดพระธาตุดอยสุเทพ+เชียงใหม่'
  },
  {
    name: 'วัดพระสิงห์',
    nameEn: 'Wat Phra Singh',
    category: '🛕 วัด / ศาสนา',
    emoji: '🏛️',
    desc: 'วัดสำคัญใจกลางเมืองเก่า เป็นที่ประดิษฐานพระพุทธสิหิงค์ สถาปัตยกรรมล้านนาสวยงาม บรรยากาศดีทั้งกลางวันและกลางคืน',
    mapUrl: 'https://www.google.com/maps/search/วัดพระสิงห์+เชียงใหม่'
  },
  {
    name: 'วัดเจดีย์หลวง',
    nameEn: 'Wat Chedi Luang',
    category: '🛕 วัด / ศาสนา',
    emoji: '🗼',
    desc: 'เจดีย์โบราณขนาดใหญ่กลางใจเมืองเชียงใหม่ สร้างในศตวรรษที่ 15 ยามค่ำคืนมีแสงไฟสว่างสวยงาม เป็น landmark ที่ถ่ายรูปสวยมาก',
    mapUrl: 'https://www.google.com/maps/search/วัดเจดีย์หลวง+เชียงใหม่'
  },
  {
    name: 'วัดอุโมงค์',
    nameEn: 'Wat Umong',
    category: '🛕 วัด / ศาสนา',
    emoji: '🌳',
    desc: 'วัดป่าโบราณที่มีอุโมงค์อิฐดินเผายังคงสภาพสมบูรณ์ บรรยากาศร่มรื่นเงียบสงบ ต่างจากวัดอื่นๆ โดยสิ้นเชิง',
    mapUrl: 'https://www.google.com/maps/search/วัดอุโมงค์+เชียงใหม่'
  },
  {
    name: 'วัดสวนดอก',
    nameEn: 'Wat Suan Dok',
    category: '🛕 วัด / ศาสนา',
    emoji: '🤍',
    desc: 'วัดเก่าแก่ที่มีเจดีย์สีขาวหลายหลัง ฉากหลัง minimal สวยมาก เป็น spot ถ่ายรูปสุดฮิตบน TikTok โดยเฉพาะช่วงพระอาทิตย์ตก',
    mapUrl: 'https://www.google.com/maps/search/วัดสวนดอก+เชียงใหม่'
  },
  {
    name: 'วัดเจ็ดยอด',
    nameEn: 'Wat Jet Yod',
    category: '🛕 วัด / ศาสนา',
    emoji: '🏺',
    desc: 'วัดโบราณที่ไม่ค่อยมีคนรู้จัก มีเจดีย์ 7 ยอดที่งดงาม บรรยากาศเงียบสงบ เหมาะสำหรับคนชอบท่องเที่ยวแบบ slow travel',
    mapUrl: 'https://www.google.com/maps/search/วัดเจ็ดยอด+เชียงใหม่'
  },
  {
    name: 'วัดบ้านเด่น',
    nameEn: 'Wat Ban Den',
    category: '🛕 วัด / ศาสนา',
    emoji: '✨',
    desc: 'วัดสวยงามที่มีวิหารไม้สักแกะสลักประณีตที่สุดแห่งหนึ่งในภาคเหนือ อยู่ที่อำเภอแม่แตง ขับรถขึ้นไปชมได้เลย',
    mapUrl: 'https://www.google.com/maps/search/วัดบ้านเด่น+แม่แตง+เชียงใหม่'
  },

  // ธรรมชาติ / ภูเขา
  {
    name: 'ดอยอินทนนท์',
    nameEn: 'Doi Inthanon National Park',
    category: '🌿 ธรรมชาติ',
    emoji: '🏔️',
    desc: 'ยอดเขาสูงสุดในประเทศไทย 2,565 เมตร ทะเลหมอกสวยสุดในประเทศ มีน้ำตกหลายแห่ง เหมาะไปช่วงเช้าตรู่เพื่อดูพระอาทิตย์ขึ้น',
    mapUrl: 'https://www.google.com/maps/search/อุทยานแห่งชาติดอยอินทนนท์+เชียงใหม่'
  },
  {
    name: 'ม่อนแจ่ม',
    nameEn: 'Mon Jam',
    category: '🌿 ธรรมชาติ',
    emoji: '🍓',
    desc: 'จุดท่องเที่ยวทะเลหมอกและสตรอว์เบอร์รี่ที่ฮิตสุดในเชียงใหม่! มีเต็นท์นอนชมทะเลหมอกยามเช้า บรรยากาศสุดโรแมนติก',
    mapUrl: 'https://www.google.com/maps/search/ม่อนแจ่ม+เชียงใหม่'
  },
  {
    name: 'ดอยอ่างขาง',
    nameEn: 'Doi Ang Khang',
    category: '🌿 ธรรมชาติ',
    emoji: '🌸',
    desc: '"สวิตเซอร์แลนด์เมืองไทย" อากาศหนาวตลอดปี สวนดอกไม้หลากสี สวนผัก สตรอว์เบอร์รี่ วิวภูเขาสวยงาม',
    mapUrl: 'https://www.google.com/maps/search/ดอยอ่างขาง+เชียงใหม่'
  },
  {
    name: 'ดอยแม่สลอง',
    nameEn: 'Doi Mae Salong',
    category: '🌿 ธรรมชาติ',
    emoji: '🍵',
    desc: 'หมู่บ้านชาวจีนบนยอดดอย มีไร่ชาสวยงาม ดื่มชาสดๆ วิวภูเขาสุดลูกตา และวัฒนธรรมผสมผสานที่ไม่เหมือนที่ไหน',
    mapUrl: 'https://www.google.com/maps/search/ดอยแม่สลอง+เชียงใหม่'
  },
  {
    name: 'ถ้ำเชียงดาว',
    nameEn: 'Chiang Dao Cave',
    category: '🌿 ธรรมชาติ',
    emoji: '🦇',
    desc: 'ถ้ำหินปูนขนาดใหญ่ มีหินงอกหินย้อยสวยงาม ลึกกว่า 10 กิโลเมตร มีพระพุทธรูปโบราณภายในถ้ำ บรรยากาศลึกลับน่าสำรวจ',
    mapUrl: 'https://www.google.com/maps/search/ถ้ำเชียงดาว+เชียงใหม่'
  },
  {
    name: 'บ้านแม่กำปอง',
    nameEn: 'Mae Kampong Village',
    category: '🌿 ธรรมชาติ',
    emoji: '🏘️',
    desc: 'หมู่บ้านเล็กๆ ในหุบเขาที่ฮิตสุดบน TikTok! มีน้ำตก ลำธาร โฮมสเตย์บ้านไม้เก่า บรรยากาศเย็นสบายราวกับหลุดออกจากโลก',
    mapUrl: 'https://www.google.com/maps/search/บ้านแม่กำปอง+เชียงใหม่'
  },
  {
    name: 'ทุ่งบัวตอง ดอยแม่อูคอ',
    nameEn: 'Bua Tong Fields',
    category: '🌿 ธรรมชาติ',
    emoji: '🌻',
    desc: 'ทะเลดอกบัวตองสีเหลืองทองบานสะพรั่งทุกปีช่วงเดือนพฤศจิกายน! สวยจนต้องหยุดรถถ่ายรูป มีฉายาว่า "ดอกทานตะวันแห่งภาคเหนือ"',
    mapUrl: 'https://www.google.com/maps/search/ทุ่งบัวตอง+แม่ฮ่องสอน'
  },
  {
    name: 'น้ำตกแม่กลาง',
    nameEn: 'Mae Klang Waterfall',
    category: '🌿 ธรรมชาติ',
    emoji: '💧',
    desc: 'น้ำตกขนาดใหญ่ใกล้ทางขึ้นดอยอินทนนท์ เหมาะเล่นน้ำ มีร้านอาหารและพื้นที่ปิกนิก เดินทางสะดวก เหมาะแวะก่อนขึ้นดอย',
    mapUrl: 'https://www.google.com/maps/search/น้ำตกแม่กลาง+เชียงใหม่'
  },
  {
    name: 'น้ำตกวชิรธาร',
    nameEn: 'Vachiratharn Waterfall',
    category: '🌿 ธรรมชาติ',
    emoji: '🌊',
    desc: 'น้ำตกสูงที่สุดในเชียงใหม่ สายน้ำตกลงมาสูงกว่า 70 เมตร อลังการมาก เสียงน้ำดังสนั่น ละอองน้ำโปรยเย็นสดชื่น',
    mapUrl: 'https://www.google.com/maps/search/น้ำตกวชิรธาร+เชียงใหม่'
  },
  {
    name: 'น้ำพุร้อนสันกำแพง',
    nameEn: 'San Kamphaeng Hot Springs',
    category: '🌿 ธรรมชาติ',
    emoji: '♨️',
    desc: 'น้ำพุร้อนธรรมชาติอุณหภูมิสูงถึง 99 องศา! แช่เท้าผ่อนคลาย ต้มไข่ในน้ำพุร้อน บรรยากาศอบอุ่น เหมาะมากช่วงหน้าหนาว',
    mapUrl: 'https://www.google.com/maps/search/น้ำพุร้อนสันกำแพง+เชียงใหม่'
  },
  {
    name: 'อุทยานแห่งชาติออบหลวง',
    nameEn: 'Ob Luang National Park',
    category: '🌿 ธรรมชาติ',
    emoji: '🏞️',
    desc: 'หุบเขาหินแคบที่สุดในประเทศไทย! แม่น้ำไหลผ่านหุบผาหินสูงชัน มีล่องแก่ง เดินป่า บรรยากาศแปลกตาสวยมาก',
    mapUrl: 'https://www.google.com/maps/search/อุทยานแห่งชาติออบหลวง+เชียงใหม่'
  },
  {
    name: 'สวนพฤกษศาสตร์ สมเด็จพระนางเจ้าสิริกิติ์',
    nameEn: 'Queen Sirikit Botanic Garden',
    category: '🌿 ธรรมชาติ',
    emoji: '🌿',
    desc: 'สวนพฤกษศาสตร์แห่งชาติ มีต้นไม้หายากกว่า 6,000 ชนิด เรือนกระจกขนาดยักษ์ ป่าสนธรรมชาติ เดินเล่นได้ทั้งวัน',
    mapUrl: 'https://www.google.com/maps/search/สวนพฤกษศาสตร์สมเด็จพระนางเจ้าสิริกิติ์+เชียงใหม่'
  },

  // เที่ยวเมือง / ตลาด
  {
    name: 'ถนนนิมมานเหมินท์',
    nameEn: 'Nimmanhaemin Road',
    category: '🏙️ เที่ยวเมือง',
    emoji: '☕',
    desc: 'ย่านฮิปที่สุดในเชียงใหม่! เต็มไปด้วยคาเฟ่เก๋ ร้านอาหารเด็ด บูติกน่ารัก ทุกมุมถ่ายรูปสวย เดินเล่นได้ทั้งวัน',
    mapUrl: 'https://www.google.com/maps/search/ถนนนิมมาน+เชียงใหม่'
  },
  {
    name: 'ถนนคนเดินวัวลาย (เสาร์-อาทิตย์)',
    nameEn: 'Wua Lai Walking Street',
    category: '🏙️ เที่ยวเมือง',
    emoji: '🌙',
    desc: 'ตลาดกลางคืนบนถนนวัวลาย มีของฝาก หัตถกรรมเงิน อาหารพื้นเมือง และการแสดงศิลปะล้านนา บรรยากาศสุดชิล เปิดทุกเสาร์-อาทิตย์',
    mapUrl: 'https://www.google.com/maps/search/ถนนวัวลาย+คนเดิน+เชียงใหม่'
  },
  {
    name: 'เชียงใหม่ไนท์บาซาร์',
    nameEn: 'Chiang Mai Night Bazaar',
    category: '🏙️ เที่ยวเมือง',
    emoji: '🛍️',
    desc: 'ตลาดกลางคืนแหล่งช้อปปิ้งชื่อดัง มีสินค้าหัตถกรรม เสื้อผ้า ของฝาก อาหาร และโชว์พื้นเมืองมากมาย เปิดทุกคืน',
    mapUrl: 'https://www.google.com/maps/search/เชียงใหม่ไนท์บาซาร์'
  },
  {
    name: 'ตลาดวโรรส (กาดหลวง)',
    nameEn: 'Waroros Market',
    category: '🏙️ เที่ยวเมือง',
    emoji: '🥬',
    desc: 'ตลาดเก่าแก่ใจกลางเมือง มีผัก ผลไม้ อาหารพื้นเมือง เครื่องเทศ ผ้าซิ่น เปิดตั้งแต่เช้ามืด เป็นตลาดของคนท้องถิ่นแท้ๆ',
    mapUrl: 'https://www.google.com/maps/search/ตลาดวโรรส+เชียงใหม่'
  },
  {
    name: 'ตลาดจริงใจ (Jing Jai)',
    nameEn: 'Jing Jai Farmers Market',
    category: '🏙️ เที่ยวเมือง',
    emoji: '🌱',
    desc: 'ตลาดออร์แกนิคและอินดี้ยอดนิยม! มีสินค้าเกษตร อาหารสุขภาพ คาเฟ่น่ารัก บรรยากาศ laid-back เปิดเช้าวันเสาร์-อาทิตย์',
    mapUrl: 'https://www.google.com/maps/search/ตลาดจริงใจ+เชียงใหม่'
  },
  {
    name: 'ตลาดต้นพยอม',
    nameEn: 'Ton Payom Market',
    category: '🏙️ เที่ยวเมือง',
    emoji: '🍜',
    desc: 'ตลาดเช้าราคาประหยัดย่านมหาวิทยาลัย ของกินเยอะสุด อร่อยสุด ราคาถูกมาก ข้าวแกง ขนม อาหารเหนือครบ เหมาะมาเช้าๆ',
    mapUrl: 'https://www.google.com/maps/search/ตลาดต้นพยอม+เชียงใหม่'
  },
  {
    name: 'ย่านเมืองเก่า',
    nameEn: 'Chiang Mai Old City',
    category: '🏙️ เที่ยวเมือง',
    emoji: '🏰',
    desc: 'เดินเล่นรอบคูเมืองเชียงใหม่ ชมกำแพงเมืองเก่า แวะวัดโบราณ ร้านกาแฟ ร้านอาหาร บรรยากาศผสมผสานโบราณและทันสมัย',
    mapUrl: 'https://www.google.com/maps/search/เมืองเก่าเชียงใหม่'
  },
  {
    name: 'ประตูท่าแพ',
    nameEn: 'Tha Phae Gate',
    category: '🏙️ เที่ยวเมือง',
    emoji: '🚪',
    desc: 'จุดเช็คอินสัญลักษณ์ของเชียงใหม่! ประตูเมืองโบราณที่ยังคงสภาพสมบูรณ์ มีลานกว้างจัดงานเทศกาลต่างๆ',
    mapUrl: 'https://www.google.com/maps/search/ประตูท่าแพ+เชียงใหม่'
  },
  {
    name: 'บ้านกาดวัด (Baan Kang Wat)',
    nameEn: 'Baan Kang Wat',
    category: '🏙️ เที่ยวเมือง',
    emoji: '🎨',
    desc: 'หมู่บ้านศิลปะและสร้างสรรค์ที่ซ่อนอยู่ มีร้านค้า studio ศิลปิน คาเฟ่น่ารัก บรรยากาศอบอุ่นเหมือนหมู่บ้านเล็กๆ กลางเมือง',
    mapUrl: 'https://www.google.com/maps/search/บ้านกาดวัด+เชียงใหม่'
  },

  // วัฒนธรรม
  {
    name: 'พระตำหนักภูพิงค์',
    nameEn: 'Bhubing Palace',
    category: '🏛️ วัฒนธรรม',
    emoji: '🌺',
    desc: 'พระตำหนักบนดอยสุเทพ เปิดให้ชมสวนดอกไม้นานาพรรณในช่วงหน้าหนาว (ม.ค.-มี.ค.) สวยงามราวกับสวรรค์',
    mapUrl: 'https://www.google.com/maps/search/พระตำหนักภูพิงค์+เชียงใหม่'
  },
  {
    name: 'หมู่บ้านชนเผ่าดอยปุย',
    nameEn: 'Doi Pui Hmong Village',
    category: '🏛️ วัฒนธรรม',
    emoji: '👘',
    desc: 'หมู่บ้านชาวม้งบนดอยสุเทพ สวมชุดพื้นเมืองถ่ายรูป ซื้อของฝากงานหัตถกรรม ชมวิถีชีวิตชาวเขาดั้งเดิม',
    mapUrl: 'https://www.google.com/maps/search/หมู่บ้านดอยปุย+เชียงใหม่'
  },
  {
    name: 'บ้านบ่อสร้าง',
    nameEn: 'Bo Sang Umbrella Village',
    category: '🏛️ วัฒนธรรม',
    emoji: '☂️',
    desc: 'หมู่บ้านช่างทำร่มกระดาษสาลวดลายสวยงาม สินค้าหัตถกรรมเชิงศิลป์ราคาย่อมเยา มีงานเทศกาลร่มสวยทุกปีในเดือนมกราคม',
    mapUrl: 'https://www.google.com/maps/search/บ้านบ่อสร้าง+เชียงใหม่'
  },
  {
    name: 'พิพิธภัณฑ์พื้นถิ่นล้านนา',
    nameEn: 'Lanna Folklife Museum',
    category: '🏛️ วัฒนธรรม',
    emoji: '🏺',
    desc: 'พิพิธภัณฑ์ที่รวบรวมวิถีชีวิตและวัฒนธรรมล้านนา อยู่ในอาคารเก่าแก่สวยงาม เรียนรู้ประเพณีเหนือได้ในที่เดียว',
    mapUrl: 'https://www.google.com/maps/search/พิพิธภัณฑ์พื้นถิ่นล้านนา+เชียงใหม่'
  },

  // สวนสัตว์
  {
    name: 'สวนสัตว์เชียงใหม่',
    nameEn: 'Chiang Mai Zoo',
    category: '🦒 สวนสัตว์',
    emoji: '🐼',
    desc: 'สวนสัตว์ที่มีแพนด้าไจแอนท์จากจีนเป็นไฮไลท์! มีสัตว์หลากหลายชนิดในบรรยากาศสวนป่า บรรยากาศร่มรื่นเหมาะมาทั้งครอบครัว',
    mapUrl: 'https://www.google.com/maps/search/สวนสัตว์เชียงใหม่'
  },
  {
    name: 'เชียงใหม่ไนท์ซาฟารี',
    nameEn: 'Chiang Mai Night Safari',
    category: '🦒 สวนสัตว์',
    emoji: '🦁',
    desc: 'ซาฟารีกลางคืนที่ใหญ่ที่สุดในเอเชีย! นั่งรถชมสัตว์ป่าในยามค่ำคืน มีโชว์น้ำพุดนตรีและร้านอาหารบรรยากาศดี',
    mapUrl: 'https://www.google.com/maps/search/เชียงใหม่ไนท์ซาฟารี'
  }
];

let lastIndex = -1;
const selectedCategories = new Set();
const categoryChips = new Map();

function getFiltered() {
  return selectedCategories.size === 0
    ? places
    : places.filter(p => selectedCategories.has(p.category));
}

function buildFilterBar() {
  const cats = [...new Set(places.map(p => p.category))];
  const bar = document.getElementById('filterBar');

  const allBtn = document.createElement('button');
  allBtn.className = 'filter-chip active';
  allBtn.textContent = 'ทั้งหมด';
  allBtn.addEventListener('click', selectAll);
  categoryChips.set(null, allBtn);
  bar.appendChild(allBtn);

  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-chip';
    btn.textContent = cat;
    btn.addEventListener('click', () => toggleCategory(cat));
    categoryChips.set(cat, btn);
    bar.appendChild(btn);
  });
}

function syncChips() {
  categoryChips.get(null).classList.toggle('active', selectedCategories.size === 0);
  categoryChips.forEach((btn, cat) => {
    if (cat !== null) btn.classList.toggle('active', selectedCategories.has(cat));
  });
}

function resetCard() {
  const card = document.getElementById('card');
  if (!card.classList.contains('hidden')) {
    card.classList.add('hidden');
    document.getElementById('initialState').style.display = '';
    document.getElementById('counter').textContent = '';
  }
}

function selectAll() {
  selectedCategories.clear();
  lastIndex = -1;
  syncChips();
  resetCard();
}

function toggleCategory(cat) {
  selectedCategories.has(cat) ? selectedCategories.delete(cat) : selectedCategories.add(cat);
  lastIndex = -1;
  syncChips();
  resetCard();
}

function randomCategory() {
  const cats = [...categoryChips.keys()].filter(k => k !== null);
  const currentSingle = selectedCategories.size === 1 ? [...selectedCategories][0] : null;
  let cat;
  do {
    cat = cats[Math.floor(Math.random() * cats.length)];
  } while (cats.length > 1 && cat === currentSingle);

  selectedCategories.clear();
  selectedCategories.add(cat);
  lastIndex = -1;
  syncChips();
  randomPlace();
}

function randomPlace() {
  const filtered = getFiltered();
  if (filtered.length === 0) return;

  const btn = document.getElementById('randomBtn');
  btn.classList.remove('pop');
  void btn.offsetWidth;
  btn.classList.add('pop');

  let idx;
  do {
    idx = Math.floor(Math.random() * filtered.length);
  } while (filtered.length > 1 && filtered[idx] === places[lastIndex]);
  lastIndex = places.indexOf(filtered[idx]);

  const place = filtered[idx];
  const card = document.getElementById('card');
  const initialState = document.getElementById('initialState');

  document.getElementById('cardCategory').textContent = place.category;
  document.getElementById('cardEmoji').textContent = place.emoji;
  document.getElementById('cardName').textContent = place.name;
  document.getElementById('cardNameEn').textContent = place.nameEn;
  document.getElementById('cardDesc').textContent = place.desc;
  document.getElementById('cardMap').href = place.mapUrl;

  initialState.style.display = 'none';
  card.classList.remove('hidden', 'animate');
  void card.offsetWidth;
  card.classList.add('animate');

  const label = selectedCategories.size === 0
    ? 'ทั้งหมด'
    : selectedCategories.size <= 2
      ? [...selectedCategories].join(' + ')
      : `${selectedCategories.size} หมวด`;
  document.getElementById('counter').textContent =
    `${filtered.length} สถานที่ในหมวด "${label}"`;
}

buildFilterBar();

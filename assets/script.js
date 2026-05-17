/* ================================================================
   重庆 CHONGQING — Interactions + Stories + Maps
   ================================================================ */

/* Cultural stories per place — เกล็ดความรู้ */
const STORIES = {
  jiefangbei: {
    title: 'Jiefangbei',
    titleCn: '解放碑 · อนุสรณ์ปลดปล่อย',
    stamp: '解', era: 'Built 1941 · Renamed 1950',
    image: 'assets/images/rs_jiefangbei.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Jiefangbei+CBD+Chongqing',
    facts: [
      ['Height', '27.5 เมตร'], ['Built', '1941'],
      ['Renamed', '1950'], ['Status', 'อนุสรณ์ WWII']
    ],
    text: `
      <p>หอนาฬิกาใจกลาง Jiefangbei สร้างขึ้นปี <strong>1941</strong> ในชื่อ "ป้อมจิตวิญญาณ" (精神堡垒) เพื่อเป็นกำลังใจให้ชาวเมืองในระหว่างการทิ้งระเบิดของญี่ปุ่นช่วงสงครามโลกครั้งที่สอง — ฉงชิ่งเป็นเมืองหลวงชั่วคราวของจีนในช่วงนั้นและถูกถล่มทางอากาศกว่า 218 ครั้ง</p>
      <p>หลังสงครามจบในปี 1945 รัฐบาลคอมมิวนิสต์ใหม่ได้เปลี่ยนชื่อเป็น <em>"อนุสรณ์การปลดปล่อยประชาชน" (人民解放纪念碑)</em> ในปี 1950</p>
      <span class="pullquote">เป็นเพียงอนุสรณ์เดียวสมัยสงครามต่อต้านญี่ปุ่นที่ยังเหลือในใจกลางเมืองใหญ่ของจีน</span>
      <p>ปัจจุบันบริเวณรอบ ๆ คือย่านช้อปปิ้งหรูที่สุดของฉงชิ่ง — ความเปลี่ยนแปลงจากภาพการรุกรานสู่ความเจริญรุ่งเรืองในรอบ 80 ปี</p>`
  },
  hongyadong: {
    title: 'Hongyadong',
    titleCn: '洪崖洞 · บ้านไม้ยกพื้นริมผา',
    stamp: '洪', era: 'Ba Kingdom · 1122 BC – ปัจจุบัน',
    image: 'assets/images/rs_hongyadong.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Hongyadong+Chongqing',
    facts: [
      ['Style', 'Diaojiao Lou (吊脚楼)'], ['Tradition', 'อายุ 2,300+ ปี'],
      ['Rebuilt', '2006'], ['Floors', '11 ชั้น']
    ],
    text: `
      <p>สถาปัตยกรรม "บ้านไม้ยกพื้น" (<strong>吊脚楼 Diaojiao Lou</strong>) ที่ห้อยอยู่บนหน้าผาของ Hongyadong คือเอกลักษณ์ของกลุ่มชาติพันธุ์ <em>Bayu</em> ที่อาศัยริมแม่น้ำแยงซีมากว่า 2,300 ปี — ตั้งแต่สมัย "อาณาจักร Ba" (1122 ปีก่อนคริสตศักราช)</p>
      <p>เหตุที่ต้องสร้างบ้านห้อยขอบหน้าผาเพราะ <strong>ฉงชิ่งแทบไม่มีพื้นที่ราบ</strong> — ทุกตารางเมตรของพื้นมีค่า ผู้คนจึงต้องสร้างบ้านที่ "ใช้อากาศ" แทน</p>
      <span class="pullquote">Hayao Miyazaki เคยกล่าวว่าได้แรงบันดาลใจสำหรับเมืองในเรื่อง "Spirited Away" จากเมืองจีนคล้ายลักษณะนี้</span>
      <p>อาคารปัจจุบันสร้างใหม่ปี 2006 เลียนแบบโครงสร้างดั้งเดิมที่ถูกรื้อถอนไปในช่วงปฏิวัติวัฒนธรรม — กลายเป็นแลนด์มาร์กยอดนิยมที่สุดของฉงชิ่งในยุคโซเชียลมีเดีย</p>`
  },
  starbucks: {
    title: 'Starbucks Reserve Raffles',
    titleCn: '来福士星巴克臻选 · 250 เมตร',
    stamp: '星', era: 'Opened 2020',
    image: 'assets/images/rs_raffles.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Starbucks+Reserve+Raffles+City+Chongqing',
    facts: [
      ['Height', '250 ม. · ชั้น 49'], ['Status', 'สูงที่สุดในจีน'],
      ['Design', 'LTW Hong Kong'], ['Opened', '2020']
    ],
    text: `
      <p>เปิดเมื่อปี 2020 — Starbucks Reserve สาขานี้คือ <strong>Reserve ที่สูงที่สุดในจีน</strong> ตั้งอยู่ที่ชั้น 49 ของ Raffles City North Tower เหนือจุดบรรจบของแม่น้ำเจียหลิงและแยงซีพอดี ที่ระดับ 250 เมตร</p>
      <p>การออกแบบภายในโดย LTW Studio ฮ่องกง อ้างอิงการไหลของแม่น้ำแยงซีผ่านงานติดเพดานคล้ายสายน้ำ และผนังที่เลียน <em>"ผิวกระเบื้องเคลือบเซรามิคโบราณ"</em> ที่ Ciqikou เคยเป็นแหล่งผลิตและส่งออก</p>
      <span class="pullquote">เป็นเครื่อง Modbar Steam นำเข้าจากอิตาลี — ระดับ Reserve เต็มรูปแบบ</span>
      <p>คนท้องถิ่นจำนวนมากเชื่อว่าวิว Panorama จากที่นี่ — ฟรี — เทียบเท่าหรือดีกว่าวิวจาก Crystal Skybridge ที่ต้องเสียค่าเข้า 188 หยวน</p>`
  },
  liziba: {
    title: 'Liziba Station',
    titleCn: '李子坝 · รถไฟทะลุตึก',
    stamp: '李', era: 'Built 2004',
    image: 'assets/images/rs_liziba.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Liziba+Station+Chongqing',
    facts: [
      ['Floors', 'ชั้น 6 – 8 ของอาคาร 19 ชั้น'], ['Year', '2004'],
      ['Line', 'CRT Line 2'], ['Wheels', 'Rubber tires']
    ],
    text: `
      <p>สร้างปี 2004 เป็นส่วนหนึ่งของ <strong>Chongqing Rail Transit Line 2</strong> — รถไฟทะลุตึก Liziba ไม่ใช่กิมมิคของการท่องเที่ยว แต่เป็น <em>ความจำเป็นของการวางผังเมืองภูเขา</em></p>
      <p>เพราะฉงชิ่งมีพื้นที่ราบจำกัด วิศวกรจึงร่วมงานกับบริษัทพัฒนา Diwang International ออกแบบตึกพักอาศัยสูง 19 ชั้น โดยจงใจเว้น <strong>ชั้น 6 – 8 ให้กลวง</strong> เพื่อให้รถไฟวิ่งผ่านได้</p>
      <span class="pullquote">รถไฟใช้ยางล้อ (ไม่ใช่ล้อเหล็ก) และระบบลดเสียง — ห้องเหนือชั้นรถไฟเงียบกว่าห้องริมถนนใหญ่ทั่วไป</span>
      <p>เป็นกรณีศึกษา Mass Transit ระดับโลกที่ MIT และ ETH Zurich หยิบไปสอนในวิชาวางผังเมือง — บางครั้งทางออกที่ดูเหลือเชื่อ คือทางออกที่ฉลาดที่สุด</p>`
  },
  eling: {
    title: 'Eling Park',
    titleCn: '鹅岭公园 · สวนสันหลังห่าน',
    stamp: '鹅', era: 'Established 1909',
    image: 'assets/images/rs_eling.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Eling+Park+Chongqing',
    facts: [
      ['Built', '1909'], ['Height', '343 ม. (ที่สูงสุดในเขตเมือง)'],
      ['Owner', 'Li Yaoting (พ่อค้าเกลือ)'], ['WWII Use', 'ที่พักเจียงไคเช็ค']
    ],
    text: `
      <p>ตั้งขึ้นในปี <strong>1909</strong> เป็นสวนส่วนตัวของ Li Yaoting พ่อค้าเกลือผู้ร่ำรวยที่สุดของฉงชิ่งในยุคนั้น — Eling Park คือสวนสาธารณะที่เก่าแก่ที่สุดของเมือง ตั้งอยู่บนยอดเขา Eling (343 ม.) ซึ่งเป็น <em>จุดสูงสุดในเขตเมืองชั้นใน</em></p>
      <p>ชื่อ "Eling" (鹅岭) แปลว่า "สันหลังห่าน" — เพราะรูปร่างของภูเขาดูเหมือนห่านกำลังยืดคอ ตามตำนานท้องถิ่น</p>
      <span class="pullquote">ระหว่างสงครามโลกครั้งที่ 2 สวนนี้เป็นที่พำนักชั่วคราวของเจียงไคเช็คและซ่งเหม่ยหลิง — ระเบียงไม้ดั้งเดิมยังคงอยู่</span>
      <p>คาเฟ่ Crow Bar บนยอดเขาเปิดในศาลาที่สร้างขึ้นในสมัยราชวงศ์ชิงตอนปลาย — กาแฟอาจราคา 80 หยวน แต่วิว 270° ของเมืองทั้งเมืองนั้นไม่มีให้ราคาทดแทน</p>`
  },
  shibati: {
    title: 'Shibati',
    titleCn: '十八梯 · บันได 18 ขั้น',
    stamp: '梯', era: 'Ming Dynasty · 400+ ปี',
    image: 'assets/images/rs_shibati.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Shibati+Chongqing+%E5%8D%81%E5%85%AB%E6%A2%AF',
    facts: [
      ['Era', 'ราชวงศ์หมิง'], ['Steps', '18 ขั้น'],
      ['Tragedy', '5 มิ.ย. 1941'], ['Rebuilt', '2021']
    ],
    text: `
      <p>"บันได 18 ขั้น" เคยเป็นเส้นทางหลักเชื่อม "เมืองบน" (ย่านที่อยู่อาศัยและการค้า) กับ "เมืองล่าง" (ท่าเรือริมแม่น้ำแยงซี) มากว่า <strong>400 ปี</strong> ตั้งแต่สมัยราชวงศ์หมิง</p>
      <p>ในวันที่ <em>5 มิถุนายน 1941</em> ระหว่างการทิ้งระเบิดของญี่ปุ่น หลุมหลบภัย Shibati กลายเป็นสถานที่เกิดโศกนาฏกรรมที่ร้ายแรงที่สุดในประวัติศาสตร์เมือง — <strong>พลเรือนกว่า 2,500 คนเสียชีวิตจากการขาดอากาศ</strong> ขณะหาที่หลบ</p>
      <span class="pullquote">ระหว่างสงคราม ฉงชิ่งโดนทิ้งระเบิด 218 ครั้ง — Shibati คือหนึ่งในความทรงจำที่หนักหน่วงที่สุด</span>
      <p>ย่านเก่าถูกรื้อและสร้างใหม่ในปี 2021 โดยรักษาโครงสร้างบันได 18 ขั้นและบ้านไม้สมัยหมิง-ชิงไว้ พร้อมแทนที่ชุมชนแออัดเดิมด้วยร้านอาหารและคาเฟ่ — Old meets Cyberpunk อย่างที่นักท่องเที่ยวเห็นวันนี้</p>`
  },
  raffles: {
    title: 'Raffles Crystal Skybridge',
    titleCn: '来福士天空步道 · สะพานลอยฟ้า',
    stamp: '来', era: 'Opened 2020',
    image: 'assets/images/rs_raffles.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Raffles+City+Chongqing+Skybridge',
    facts: [
      ['Architect', 'Moshe Safdie'], ['Length', '300 ม.'],
      ['Height', '250 ม.'], ['Towers', 'เชื่อม 4 จาก 8 ตึก']
    ],
    text: `
      <p>ออกแบบโดย <strong>Moshe Safdie</strong> สถาปนิกชาวอิสราเอล-แคนาดาคนเดียวกับที่ออกแบบ Marina Bay Sands สิงคโปร์ — Raffles City Chongqing เปิดในปี 2020 ที่ตำแหน่ง <em>Chaotianmen</em> ซึ่งเป็นจุดบรรจบของแม่น้ำเจียหลิงและแยงซีที่มีประวัติศาสตร์มากว่า 3,000 ปี</p>
      <p>สะพานคริสตัล Conservatory ยาว 300 เมตรเชื่อม 4 ใน 8 ตึก มีสระว่ายน้ำ จุดชมวิว และบาร์ <strong>ที่ระดับ 250 เมตร</strong></p>
      <span class="pullquote">รูปทรงเรือใบของอาคารตั้งใจเลียนแบบเรือสำเภาโบราณที่เคยออกจากท่า Chaotianmen แห่งนี้</span>
      <p>โครงการนี้เปลี่ยนภูมิทัศน์ของฉงชิ่งไปอย่างสิ้นเชิง — กลายเป็นสัญลักษณ์ใหม่ของเมืองยุคศตวรรษที่ 21 ที่ผสมประวัติศาสตร์ Bayu โบราณกับเส้นโค้งล้ำสมัย</p>`
  },
  dinglaotou: {
    title: 'Ding Lao Tou BBQ',
    titleCn: '丁老头烤肉 · ปิ้งย่างวิวล้านดาว',
    stamp: '丁', era: 'Born ~2015 · Viral 2022',
    image: 'assets/images/rs_skyline.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=%E4%B8%81%E8%80%81%E5%A4%B4%E7%83%A4%E8%82%89+Chongqing',
    facts: [
      ['Founder', 'อดีตคนงานโรงงาน'], ['Viral', 'Douyin 2022'],
      ['Policy', 'ไม่รับจองโต๊ะ'], ['Style', 'เสฉวน Kao Chuan']
    ],
    text: `
      <p>เริ่มจากซุ้มปิ้งย่างเล็ก ๆ บนดาดฟ้าของอาคารชุดบน Nanshan ในช่วงกลางปี 2010s โดย "ลุง Ding" อดีตคนงานโรงงานที่เพียงแค่อยากปิ้งเนื้อให้เพื่อนกินพร้อมชมวิว</p>
      <p>ภาพมุม Sunset ของร้านแพร่หลายบน <strong>Douyin</strong> (TikTok จีน) ในช่วงปี 2022 และกลายเป็นปรากฏการณ์ทันที — <em>ภาพ Hongyadong + Raffles + แม่น้ำสองสาย + พระอาทิตย์ตกในเฟรมเดียว</em></p>
      <span class="pullquote">นโยบาย "ไม่รับจองโต๊ะ ใครมาก่อนได้ก่อน" กลับทำให้คิวยิ่งยาว</span>
      <p>สไตล์ปิ้งย่างคือ "<strong>Kao Chuan</strong>" (烤串) แบบเสฉวน — ไม้เสียบ เนื้อหมัก เครื่องเทศหนัก ๆ ทั้งยี่หร่า พริก และฮวาเจียว (พริกไทยเสฉวน) เคียงกับเบียร์เย็น</p>`
  },
  wulong: {
    title: 'Wulong Three Natural Bridges',
    titleCn: '武隆天生三桥 · มรดกโลก',
    stamp: '武', era: '7 ล้านปี · UNESCO 2007',
    image: 'assets/images/rs_wulong.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Wulong+Karst+National+Geology+Park',
    facts: [
      ['Age', '7 ล้านปี'], ['UNESCO', '2007'],
      ['Sinkhole', '300×200×280 ม.'], ['Films', 'Transformers 4, Curse of the Golden Flower']
    ],
    text: `
      <p>เกิดจากการกัดเซาะของแม่น้ำใต้ดินตลอดระยะเวลา <strong>7 ล้านปี</strong> — สะพานหินธรรมชาติทั้งสาม (Tianlong, Qinglong, Heilong) เป็นสะพานหินธรรมชาติที่ใหญ่ที่สุดในโลก</p>
      <p>หลุมยุบ <em>"Tiankeng"</em> (天坑 — "หลุมสวรรค์") ระหว่างสะพานนั้นลึกถึง 280 เมตร — ลึกพอที่ <strong>โรงเตี๊ยมยุคราชวงศ์ถัง (Tianfu Inn)</strong> ที่เคยใช้เป็นจุดส่งจดหมายระหว่างเมืองจะตั้งอยู่ภายในได้</p>
      <span class="pullquote">UNESCO ขึ้นทะเบียนเป็นมรดกโลกในปี 2007 ในชื่อ "South China Karst"</span>
      <p>ผู้กำกับ Zhang Yimou ถ่ายฉาก <em>Curse of the Golden Flower</em> ที่นี่ และ Michael Bay ใช้เป็นฉากใน <em>Transformers: Age of Extinction</em> — แต่ความตื่นตาตื่นใจจริงไม่ได้มาจากภาพยนตร์ มันคือธรรมชาติที่สร้างเองนานก่อนมนุษย์จะเริ่มเขียนประวัติศาสตร์</p>`
  },
  ciqikou: {
    title: 'Ciqikou Ancient Town',
    titleCn: '磁器口古镇 · เมืองท่าเครื่องเคลือบ',
    stamp: '磁', era: 'Northern Song · ~998 AD',
    image: 'assets/images/rs_ciqikou.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Ciqikou+Ancient+Town+Chongqing',
    facts: [
      ['Founded', '~998 AD'], ['Era', 'Northern Song'],
      ['Peak Trade', '300 boats/day'], ['Nickname', 'Little Chongqing']
    ],
    text: `
      <p>ก่อตั้งในสมัยราชวงศ์ <strong>Northern Song</strong> (ราว ค.ศ. 998) — ชื่อ "Ciqikou" แปลตรงตัวว่า "ท่าเรือเครื่องเคลือบ" เพราะเป็นแหล่งผลิตและส่งออกเครื่องเคลือบกระเบื้องชั้นนำของจีนตะวันตกเฉียงใต้ในสมัยราชวงศ์ <strong>หมิง</strong></p>
      <p>ในช่วงพีคต้นปี 1900s มีเรือไม้กว่า <strong>300 ลำเทียบท่าทุกวัน</strong> เพื่อขนเครื่องเคลือบลงแม่น้ำเจียหลิงสู่แม่น้ำแยงซีและออกสู่โลก</p>
      <span class="pullquote">ฉายา "ฉงชิ่งน้อย" (Little Chongqing) เพราะที่นี่รักษาบรรยากาศของฉงชิ่งก่อนยุคทันสมัยไว้ได้สมบูรณ์ที่สุด</span>
      <p>ถนนหินแคบ ๆ และตึกไม้สมัยราชวงศ์ชิงรอดมาได้ — ขณะที่ส่วนใหญ่ของฉงชิ่งเก่าหายไปกับการพัฒนาสมัยใหม่ ขนม <em>Mahua</em> (ขนมหวานเส้นบิดทอด) ของที่นี่ยังคงทำตามสูตรเดิมที่อายุกว่า 600 ปี</p>`
  },
  chaotianmen: {
    title: 'Chaotianmen Pier',
    titleCn: '朝天门 · ประตูเฝ้าฟ้า',
    stamp: '朝', era: '~3,000 ปี',
    image: 'assets/images/rs_chaotianmen.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Chaotianmen+Pier+Chongqing',
    facts: [
      ['History', '~3,000 ปี'], ['Meaning', 'ประตูเฝ้าฟ้า'],
      ['Old Wall', 'รื้อปี 1927'], ['Tradition', 'ดูพระอาทิตย์ปีใหม่']
    ],
    text: `
      <p>เป็นศูนย์กลางทางจิตวิญญาณและการค้าของฉงชิ่งมาเกือบ <strong>3,000 ปี</strong> — Chaotianmen คือท่าเรือที่แม่น้ำเจียหลิงและแยงซีมาบรรจบกัน</p>
      <p>ชื่อ "Chaotianmen" (朝天门) แปลตรงตัวว่า <em>"ประตูเฝ้าฟ้า"</em> เพราะในยุคจักรพรรดิ ทูตที่เดินทางมาจากปักกิ่งจะขึ้นฝั่งที่นี่ — เป็นเหมือนการเข้าพบเมืองหลวงในนามจักรวรรดิ</p>
      <span class="pullquote">กำแพงเมืองและประตูเดิมถูกรื้อในปี 1927 — แต่ความเป็นใจกลางของฉงชิ่งไม่เคยหายไป</span>
      <p>ทุกวันตรุษจีน คนท้องถิ่นยังคงมารวมตัวที่นี่เพื่อชมพระอาทิตย์ขึ้นวันแรกของปีสะท้อนบนแม่น้ำทั้งสอง — ประเพณีที่สืบต่อมาตั้งแต่ราชวงศ์โบราณ</p>`
  },
  yikeshu: {
    title: 'Yikeshu Observation Deck',
    titleCn: '一棵树观景台 · "ต้นไม้เดี่ยว"',
    stamp: '观', era: '1950s · เคยอยู่ในธนบัตร 5 หยวน',
    image: 'assets/images/rs_skyline.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Yikeshu+Viewpoint+Nanshan+Chongqing',
    facts: [
      ['Ticket', '20¥'], ['Hours', '08:00 – 22:00'],
      ['Elevation', '443 ม. บน Nanshan'], ['Rating', '★ 4.6 Google']
    ],
    text: `
      <p>"<strong>Yikeshu</strong>" (一棵树 — "ต้นไม้เดี่ยว") เป็นจุดชมวิวสูงสุดของ Nanshan ที่ระดับ 443 เมตร — ชื่อมาจากต้นยางใหญ่ต้นเดียวที่ยืนอยู่ตรงนั้นมาเกือบ 100 ปี · เป็นจุดที่คนเฉิ่งฉิ่งยกให้ <em>"ดีกว่า Crystal Skybridge ที่เสีย 188¥"</em></p>
      <p>ที่นี่เคยปรากฏใน <strong>ธนบัตร 5 หยวนยุค 1980s</strong> ของจีน — รูปวาดของวิวจาก Yikeshu ลงไปยังคาบสมุทร Yuzhong เป็นภาพ Iconic ที่ทุกคนจีนรู้จัก</p>
      <span class="pullquote">ในเย็นชัดเจน เห็น Hongyadong, Raffles, Liziba Bridge, ท่า Chaotianmen ทั้งหมดในเฟรมเดียว</span>
      <p>การเดินทาง: <strong>DiDi 25¥ จาก Jiefangbei</strong> 25 นาที · หรือนั่ง Bus 384 ลง Yikeshu Station · มี Cable Car เล็ก ๆ ขึ้นจากเชิงเขาราคา 30¥ · ค่าเข้าเพียง 20¥ คุ้มที่สุดในเมือง</p>
      <p><strong>ทริค:</strong> มาก่อน Sunset 45 นาที จะได้จุดถ่ายภาพดีก่อนทัวร์จีนมา · ใกล้ ๆ มี Pipa Garden Hotpot หม้อไฟใหญ่ที่สุดในโลก เดิน 10 นาทีไปดินเนอร์ต่อได้</p>`
  },
  angela: {
    title: 'Angela · Angel Homestay',
    titleCn: '高层江景民宿 · Jiefangbei Hongyadong Branch',
    stamp: '宿', era: 'คืน 1 · 2 · 27-29 ก.ค.',
    image: 'assets/images/rs_hongyadong.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Angela+Angel+High+Rise+Homestay+Hongyadong+Chongqing',
    facts: [
      ['Nights', '27-29 ก.ค. (2 คืน)'], ['Style', 'Apartment Homestay'],
      ['Walk to Hongyadong', '5 นาที'], ['Walk to Jiefangbei', '8 นาที']
    ],
    text: `
      <p><strong>Angela · Angel High-rise River View Homestay</strong> เป็นห้องชุดสไตล์ Apartment ในตึกสูงใกล้ Hongyadong — เจ้าของห้องชาวจีนเปิดให้นักท่องเที่ยวเช่าผ่าน Booking.com, Trip.com และ Airbnb · เป็นรูปแบบ "民宿 (Mínsù)" ที่กำลังมาแรงในจีน — เหมือน Hotel แต่บรรยากาศบ้านมากกว่า</p>
      <p>ตั้งอยู่ที่ <em>สาขา Jiefangbei Hongyadong</em> — เดิน 5 นาทีถึง Hongyadong เปิดไฟ และ 8 นาทีถึง Jiefangbei CBD · มี Metro Xiaoshizi (Line 1/2/6) อยู่ใกล้ ๆ</p>
      <span class="pullquote">ทำไมเลือกที่นี่ 2 คืนแรก: ทันทีที่ถึงจากเที่ยวบินกลางคืน เดินไปลงทุนที่ Hongyadong กลางคืนได้ง่าย ไม่ต้องนั่งรถไกล</span>
      <p><strong>ขั้นตอน Check-in:</strong> Booking แล้ว Host จะส่ง WeChat / Phone Number มาให้ · แจ้งเวลามาถึงล่วงหน้า · ส่วนใหญ่ใช้ Smart Lock ส่งรหัสประตูทาง WeChat · เผื่อเงินสด ~200¥ มัดจำ (押金) คืนตอน Check-out</p>
      <p><strong>สิ่งที่ควรเตรียม:</strong> ปลั๊กแปลง 3 ขา (จีนใช้ Type A/I) · Adapter Type C สำหรับ HDMI ถ้าจะดู Netflix ผ่าน TV · ที่นี่บางตึกล็อกบางช่อง YouTube/Google ในห้องน้ำที่มีน้ำร้อน Geyser ก๊าซ</p>`
  },
  yicheng: {
    title: 'Yicheng High Altitude',
    titleCn: '宜程高层江景 · River View Chongqing',
    stamp: '宿', era: 'คืน 3 · 4 · 29-31 ก.ค.',
    image: 'assets/images/rs_skyline.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Yicheng+High+Altitude+River+View+Chongqing',
    facts: [
      ['Nights', '29-31 ก.ค. (2 คืน)'], ['Style', 'High-rise Apartment'],
      ['View', 'แม่น้ำสองสาย Panorama'], ['Floor', 'ตึกสูง 30+ ชั้น']
    ],
    text: `
      <p><strong>Yicheng High Altitude River View Chongqing</strong> เป็น Service Apartment ในตึกสูง — Yicheng (宜程) เป็นแบรนด์ Apartment-Hotel ที่นิยมในจีน · เน้นห้องชั้นบนของตึก 30+ ชั้น พร้อมหน้าต่างเต็มผนังเห็นวิวแม่น้ำแยงซีและเจียหลิงพาโนรามา</p>
      <p>เหมาะกับ <em>คืน 3-4 ของทริป</em> เพราะหลังกลับจาก Wulong Day Trip ใช้เวลานั่งรถไฟไป-กลับเหนื่อยมาก — ต้องการห้องที่เงียบ วิวดี และอาบน้ำร้อนได้สบาย ๆ</p>
      <span class="pullquote">ทำไมเลือกที่นี่ 2 คืนหลัง: วิวที่ดีที่สุดสำหรับช่วงเช้า — Sunrise สะท้อนแม่น้ำ — และค่ำคืนที่เห็น Hongyadong + Raffles ติดไฟพร้อมกัน</span>
      <p><strong>สิ่งอำนวยความสะดวก:</strong> เครื่องชงกาแฟ Capsule · กาน้ำร้อน · เครื่องซักผ้า (บางห้อง) · WiFi ความเร็วสูง · เครื่องปรับอากาศ Inverter</p>
      <p><strong>ทริค:</strong> ขอห้องที่ <em>หันออกแม่น้ำ</em> (江景房 jiāngjǐng fáng) — ตอนจองให้ระบุชัด · บางคนถูกจัดให้หันออกตึกอื่น เสียค่าวิวเปล่า ๆ</p>`
  },
  cableway: {
    title: 'Yangtze Cableway',
    titleCn: '长江索道 · กระเช้าโบราณ',
    stamp: '索', era: 'Opened 1987',
    image: 'assets/images/rs_cableway.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Yangtze+River+Cableway+Chongqing',
    facts: [
      ['Opened', '1987'], ['Length', '1,166 ม.'],
      ['Status', 'กระเช้าโดยสารแรกของจีน'], ['Saved', '2006 (เกือบโดนรื้อ)']
    ],
    text: `
      <p>เปิดดำเนินการในปี <strong>1987</strong> เพื่อเชื่อมเขต Yuzhong กับ Nan'an ข้ามแม่น้ำแยงซีระยะ 1,166 เมตร — Yangtze Cableway เคยเป็นเส้นทางไป-กลับทำงานของคนหลายพันคนต่อวัน หรือที่ชาวเมืองเรียกว่า <em>"รถเมล์อากาศ"</em></p>
      <p>เป็น <strong>กระเช้าโดยสารในเมืองแห่งแรกของจีน</strong> — ออกแบบโดยวิศวกรที่เคยทำงานในโซเวียต จึงมีร่องรอยสุนทรียะแบบ Soviet Modernism ในสีส้มสนิมและคันกระเช้าเหล็กหนา</p>
      <span class="pullquote">ปี 2006 รัฐบาลเกือบรื้อกระเช้าทิ้งเพราะมีสะพานข้ามแม่น้ำเพียงพอแล้ว แต่ประชาชนประท้วงสำเร็จ</span>
      <p>วันนี้กระเช้ายังคงวิ่งทุก 10 นาที กลายเป็น "เครื่องบินไทม์แมชชีน" ที่พาผู้โดยสารกลับไปสู่ฉงชิ่งยุคทศวรรษ 1980 — 5 นาทีของการชมเมืองจากอากาศที่ทุกคนเคยขึ้นในวัยเด็ก</p>`
  }
};

(() => {
  'use strict';

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navProgress = document.getElementById('navProgress');
  const backToTop = document.getElementById('backToTop');

  document.documentElement.classList.add('js-ready');

  /* ---------- Scroll: nav + progress + back-to-top ---------- */
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 60);
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? Math.min(100, (y / docH) * 100) : 0;
    navProgress.style.width = pct + '%';
    if (backToTop) backToTop.classList.toggle('show', y > 720);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Nav toggle ---------- */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Smooth scroll w/ offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = nav.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- Active nav highlight ---------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navAnchors = navLinks.querySelectorAll('a');
  const highlight = () => {
    const y = window.scrollY + 160;
    let current = '';
    sections.forEach(s => {
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) current = '#' + s.id;
    });
    navAnchors.forEach(a => a.classList.toggle('active-link', a.getAttribute('href') === current));
  };
  window.addEventListener('scroll', highlight, { passive: true });
  highlight();

  /* ---------- Counter animation ---------- */
  const animateNum = (el, target, duration = 1600) => {
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased).toLocaleString();
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target || el.textContent.replace(/,/g, ''), 10);
      if (!isNaN(target)) animateNum(el, target);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    el.textContent = '0';
    counterIO.observe(el);
  });
  document.querySelectorAll('[data-budget]').forEach(el => counterIO.observe(el));

  /* ---------- Food tabs ---------- */
  const foodTabs = document.querySelectorAll('.food-tab');
  const foodPanes = document.querySelectorAll('.food-content');
  foodTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      foodTabs.forEach(t => t.classList.remove('active'));
      foodPanes.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const pane = document.getElementById('tab-' + target);
      if (pane) pane.classList.add('active');
    });
  });

  /* ---------- Scroll reveals ---------- */
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  const revealTargets = [
    '.section-head', '.overview-text', '.overview-map',
    '.timeline-row', '.day-head', '.route-map',
    '.schedule-row', '.place', '.note',
    '.cafe', '.souvenir', '.budget-row',
    '.transport-card', '.tips-card',
    '.subsection-title', '.food-tabs', '.budget-total'
  ];
  document.querySelectorAll(revealTargets.join(',')).forEach((el, i) => {
    el.setAttribute('data-reveal', '');
    el.style.transitionDelay = Math.min(i % 8, 6) * 60 + 'ms';
    revealIO.observe(el);
  });

  /* ---------- Hero particles (gold) ---------- */
  const particleHost = document.getElementById('particles');
  if (particleHost) {
    const N = window.innerWidth < 768 ? 18 : 36;
    for (let i = 0; i < N; i++) {
      const p = document.createElement('span');
      p.className = 'particle';
      const size = Math.random() * 4 + 2;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = '-10px';
      const dur = Math.random() * 12 + 14;
      p.style.animationDuration = dur + 's';
      p.style.animationDelay = (Math.random() * dur) + 's';
      p.style.opacity = Math.random() * 0.5 + 0.3;
      particleHost.appendChild(p);
    }
  }

  /* ---------- Hero parallax ---------- */
  if (window.matchMedia('(min-width: 769px)').matches) {
    const sun = document.querySelector('.hero-sun');
    const back = document.querySelector('.hero-layer-back');
    const mid = document.querySelector('.hero-layer-mid');
    const front = document.querySelector('.hero-layer-front');
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > window.innerHeight) return;
      if (sun)   sun.style.transform   = `translateY(${y * 0.25}px)`;
      if (back)  back.style.transform  = `translateY(${y * 0.18}px)`;
      if (mid)   mid.style.transform   = `translateY(${y * 0.10}px)`;
      if (front) front.style.transform = `translateY(${y * 0.04}px)`;
    }, { passive: true });
  }

  /* ---------- 3D tilt on place cards ---------- */
  if (window.matchMedia('(min-width: 1024px) and (hover: hover)').matches) {
    document.querySelectorAll('.place').forEach(card => {
      let raf = 0;
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform = `translateY(-8px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;
        });
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ---------- Story modal ---------- */
  const modal = document.getElementById('storyModal');
  const modalImg = document.getElementById('storyImg');
  const modalStamp = document.getElementById('storyStamp');
  const modalKicker = document.getElementById('storyKicker');
  const modalEra = document.getElementById('storyEra');
  const modalTitle = document.getElementById('storyTitle');
  const modalTitleCn = document.getElementById('storyTitleCn');
  const modalText = document.getElementById('storyText');
  const modalFacts = document.getElementById('storyFacts');
  const modalMap = document.getElementById('storyMap');

  let lastTrigger = null;

  const openStory = (id, triggerEl) => {
    const story = STORIES[id];
    if (!story || !modal) return;
    lastTrigger = triggerEl;

    modalImg.src = story.image;
    modalImg.alt = story.title;
    modalStamp.textContent = story.stamp;
    modalKicker.textContent = 'Story · 故事';
    modalEra.textContent = story.era;
    modalTitle.textContent = story.title;
    modalTitleCn.textContent = story.titleCn;
    modalText.innerHTML = story.text;
    modalMap.href = story.map;

    modalFacts.innerHTML = (story.facts || []).map(([label, value]) => `
      <div class="story-fact">
        <span class="story-fact-label">${label}</span>
        <span class="story-fact-value">${value}</span>
      </div>`).join('');

    modal.setAttribute('data-open', 'true');
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => modal.querySelector('.story-close')?.focus());
  };

  const closeStory = () => {
    if (!modal) return;
    modal.setAttribute('data-open', 'false');
    document.body.classList.remove('modal-open');
    lastTrigger?.focus();
  };

  document.querySelectorAll('[data-story-open]').forEach(btn => {
    btn.addEventListener('click', () => openStory(btn.dataset.storyOpen, btn));
  });
  modal?.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeStory));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.getAttribute('data-open') === 'true') closeStory();
  });

  /* ---------- Falling lotus petals (culture deco) ---------- */
  const cultureDeco = document.querySelector('.culture-deco');
  if (cultureDeco && window.matchMedia('(min-width: 768px)').matches) {
    const spawnPetal = () => {
      const p = document.createElement('span');
      p.className = 'petal';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.top = '-20px';
      const dur = Math.random() * 14 + 18;
      p.style.animationDuration = dur + 's';
      const drift = (Math.random() - 0.5) * 200;
      p.style.setProperty('--drift', drift + 'px');
      p.style.opacity = Math.random() * 0.5 + 0.5;
      const scale = Math.random() * 0.7 + 0.7;
      p.style.transform = `scale(${scale})`;
      cultureDeco.appendChild(p);
      setTimeout(() => p.remove(), dur * 1000 + 500);
    };

    // Spawn petals at random intervals
    const petalInterval = setInterval(spawnPetal, 1800);
    // Show koi + crane once page is ready
    setTimeout(() => {
      cultureDeco.querySelectorAll('.culture-koi, .culture-crane').forEach(el => el.classList.add('show'));
    }, 1000);

    // Pause when tab not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearInterval(petalInterval);
    });
  }

  /* ---------- Map fallback rendering ---------- */
  const renderMapFallback = (container, reason = '') => {
    const wrapper = container.closest('.route-map');
    if (!wrapper) return;
    const data = JSON.parse(wrapper.dataset.route || '{}');
    const img = data.fallback;
    container.innerHTML = `
      <div class="route-map-fallback">
        ${img ? `<img src="${img}" alt="${data.title || 'Route map'}">` : ''}
        <p>${reason || 'แผนที่แบบ Static — ใส่ Google Maps API key เพื่อใช้แผนที่จริง'}
        ${reason ? '' : `<br><code>${data.title || ''}</code>`}</p>
      </div>`;
  };

  /* ---------- Google Maps initializer ---------- */
  const mapInstances = [];

  // Jade-themed map style
  const jadeMapStyle = [
    { elementType: "geometry", stylers: [{ color: "#EAF1E9" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#1F5E58" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#FAF7EE" }] },
    { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#BFDDD0" }] },
    { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#DCEBE2" }] },
    { featureType: "poi", elementType: "geometry", stylers: [{ color: "#D7E7DC" }] },
    { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#3FA89C" }] },
    { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#BFDDD0" }] },
    { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#2D8079" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#F5EFE2" }] },
    { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#FAF7EE" }] },
    { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#E5C97D" }] },
    { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#B8954A" }] },
    { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#F2F6EE" }] },
    { featureType: "transit", elementType: "geometry", stylers: [{ color: "#D9B86A" }, { lightness: 20 }] },
    { featureType: "transit.line", elementType: "geometry.fill", stylers: [{ color: "#B8954A" }] },
    { featureType: "transit.station", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#7FB8AA" }] },
    { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#0F3A36" }] }
  ];

  // SVG marker (gold pin)
  const goldPinSVG = (n) => ({
    path: 'M12 0C5.4 0 0 5.4 0 12c0 9 12 22 12 22s12-13 12-22C24 5.4 18.6 0 12 0z',
    fillColor: '#B8954A',
    fillOpacity: 1,
    strokeColor: '#FAF7EE',
    strokeWeight: 2,
    scale: 1.2,
    labelOrigin: { x: 12, y: 12 }
  });

  const buildMap = (container) => {
    const wrapper = container.closest('.route-map');
    if (!wrapper) return;
    let data;
    try { data = JSON.parse(wrapper.dataset.route); }
    catch (e) { renderMapFallback(container, 'Route data ผิดรูปแบบ'); return; }
    if (!data.waypoints || data.waypoints.length < 2) {
      renderMapFallback(container, 'ต้องมีอย่างน้อย 2 จุด');
      return;
    }

    // Bounds
    const bounds = new google.maps.LatLngBounds();
    data.waypoints.forEach(p => bounds.extend(new google.maps.LatLng(p.lat, p.lng)));

    const map = new google.maps.Map(container, {
      center: bounds.getCenter(),
      zoom: 11,
      styles: jadeMapStyle,
      disableDefaultUI: false,
      mapTypeControl: false,
      fullscreenControl: true,
      streetViewControl: false,
      gestureHandling: 'cooperative',
      backgroundColor: '#EAF1E9'
    });
    map.fitBounds(bounds, { top: 60, right: 60, bottom: 60, left: 60 });
    mapInstances.push(map);

    // Numbered markers
    data.waypoints.forEach((p, i) => {
      new google.maps.Marker({
        position: { lat: p.lat, lng: p.lng },
        map,
        title: p.name,
        label: { text: String(i + 1), color: '#FAF7EE', fontWeight: '600', fontSize: '13px' },
        icon: goldPinSVG(i + 1),
        animation: google.maps.Animation.DROP
      });
    });

    // Directions
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map,
      suppressMarkers: true,
      preserveViewport: true,
      polylineOptions: {
        strokeColor: '#B8954A',
        strokeOpacity: 0.92,
        strokeWeight: 5,
        geodesic: false
      }
    });

    const origin = data.waypoints[0];
    const destination = data.waypoints[data.waypoints.length - 1];
    const waypoints = data.waypoints.slice(1, -1).map(p => ({
      location: new google.maps.LatLng(p.lat, p.lng),
      stopover: true
    }));

    directionsService.route({
      origin: new google.maps.LatLng(origin.lat, origin.lng),
      destination: new google.maps.LatLng(destination.lat, destination.lng),
      waypoints,
      travelMode: google.maps.TravelMode[data.travelMode || 'DRIVING'],
      optimizeWaypoints: false
    }, (response, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
        // Draw a softer secondary line underneath for depth
        const path = response.routes[0].overview_path;
        new google.maps.Polyline({
          path,
          map,
          strokeColor: '#FAF7EE',
          strokeOpacity: 0.5,
          strokeWeight: 10,
          zIndex: -1
        });
      } else {
        // Fallback: draw straight polyline between waypoints
        new google.maps.Polyline({
          path: data.waypoints.map(p => ({ lat: p.lat, lng: p.lng })),
          map,
          strokeColor: '#B8954A',
          strokeOpacity: 0.9,
          strokeWeight: 4,
          icons: [{
            icon: { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 3 },
            offset: '0',
            repeat: '14px'
          }]
        });
      }
    });
  };

  // Public init function called by Google Maps script
  window.initJadeMaps = () => {
    const apiKeyValid = typeof google !== 'undefined' && google.maps;
    if (!apiKeyValid) return;
    document.querySelectorAll('.route-map-canvas').forEach(buildMap);
  };

  // Handle map load failure / invalid key
  const onMapsFailed = () => {
    document.querySelectorAll('.route-map-canvas').forEach(c =>
      renderMapFallback(c, 'แผนที่แบบ Static — กรุณาใส่ Google Maps API key ในไฟล์ index.html')
    );
  };
  document.addEventListener('mapsfailed', onMapsFailed);

  // If after 4 seconds Google Maps hasn't loaded, fall back
  setTimeout(() => {
    if (typeof google === 'undefined' || !google.maps) {
      onMapsFailed();
    }
  }, 4500);

  // Listen for Google Maps error event (invalid key)
  window.gm_authFailure = onMapsFailed;
})();

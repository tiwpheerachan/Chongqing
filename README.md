# 重庆 Chongqing · Jade Watercolor Field Guide 2026

แผนเที่ยวฉงชิ่ง 5 วัน 4 คืน · งบ 23,000 บาท/คน · เว็บไซต์ดีไซน์ Chinese Watercolor × Modern 3D

---

## วิธีเปิดเว็บ

### 1. เปิดไฟล์ตรง (เร็วที่สุด)
ดับเบิลคลิกที่ `index.html` — เว็บจะเปิดในเบราว์เซอร์ทันที (ไม่มีแผนที่ Google Maps ใช้รูป Static แทน)

### 2. เปิดผ่าน Local Server (แนะนำ)
```bash
cd chongqing-trip
python3 -m http.server 8000
```
เปิดเบราว์เซอร์ไปที่ `http://localhost:8000`

---

## Google Maps API

ใส่ API key เรียบร้อยแล้วในไฟล์ `index.html` — แผนที่ทุกวันจะลากเส้นทางจริงตามถนน (DRIVING via Directions API) สีทอง พร้อม Numbered Pins สำหรับทุก Waypoint

**ถ้าต้องการเปลี่ยน API key:**
1. เปิด `index.html`
2. แก้ที่ `src="https://maps.googleapis.com/maps/api/js?key=..."` ใกล้ท้ายไฟล์

**APIs ที่เปิดใช้:** Maps JavaScript API + Directions API · ระดับ Free Tier ใช้ส่วนตัวเหลือเฟือ ($200/เดือน)

## เรื่องเล่า · 故事

ทุกการ์ดสถานที่มีปุ่ม **"เรื่องเล่า · 历史"** — กดแล้วจะเปิด modal ใหญ่ที่มีประวัติศาสตร์, เกล็ดความรู้, และ Cultural Context ของสถานที่นั้น ๆ ตั้งแต่สมัยราชวงศ์หมิงจนถึงปัจจุบัน รวม 12 เรื่อง:

| Place | เรื่อง |
|--|--|
| Jiefangbei | อนุสรณ์ WWII ที่ถูกทิ้งระเบิด 218 ครั้ง |
| Hongyadong | สถาปัตยกรรม Bayu อายุ 2,300 ปี |
| Liziba | วิศวกรรมรถไฟทะลุตึก กรณีศึกษา MIT |
| Eling Park | สวนพ่อค้าเกลือยุค 1909 ที่พักเจียงไคเช็ค |
| Shibati | โศกนาฏกรรมหลุมหลบภัย 5 มิ.ย. 1941 |
| Raffles | Moshe Safdie · สถาปนิก Marina Bay Sands |
| Wulong | UNESCO 2007 · ภูมิประเทศ 7 ล้านปี |
| Ciqikou | เมืองท่าเครื่องเคลือบสมัย Northern Song |
| ...และอีก 4 เรื่อง | |

---

## Design System

| Element | Value |
|--|--|
| Primary | Jade (#0F3A36 → #1F5E58 → #3FA89C) |
| Accent | Gold (#B8954A → #D9B86A → #F0DAA3) |
| Seal | Vermilion (#B83D2A) |
| Paper | Cream (#FAF7EE) + Mint Mist (#E9F1EA) |
| Display | Fraunces (variable serif) |
| Body | Inter |
| Mono | JetBrains Mono |
| Chinese | Noto Serif SC |

---

## โครงสร้างไฟล์

```
chongqing-trip/
├── index.html          เว็บหลัก (Single Page)
├── README.md           ไฟล์นี้
└── assets/
    ├── style.css       Jade Watercolor + 3D
    ├── script.js       Google Maps + Animations
    └── images/
        ├── rs_*.jpg    13 รูปสถานที่
        └── *_map.png   6 แผนที่ Static (fallback)
```

---

## ฟีเจอร์เด็ด

- **Hero แบบ Layered Watercolor** — ภูเขา 3 ชั้น + พระอาทิตย์ทอง + เมฆลอย + ฝุ่นทอง
- **Day Stamps สีแดง** — ตราประทับจีน Vermilion ทุกวัน
- **Google Maps พร้อมเส้นทางสีทอง** — เส้นทางจริงเชื่อม Waypoint ทุกจุด
- **3D Tilt บน Place Cards** — ขยับเมาส์เพื่อให้การ์ดเอียงตามมุมมอง
- **Parallax Hero** — ภูเขา 3 ชั้นเลื่อนตาม Scroll ที่ความเร็วต่างกัน
- **Counter Animation** — เลขนับเข้าหาเป้าหมายเมื่อ Scroll ถึง
- **Food Tabs** — Hotpot / BBQ / Sky View / Local
- **Brush Stroke Dividers** — เส้นแบ่งสไตล์พู่กันจีน
- **Gold Particles** — ฝุ่นทองลอยขึ้นใน Hero
- **Reduced Motion** — เคารพ User Preference

---

## รองรับเบราว์เซอร์

Safari 15+ · Chrome 90+ · Firefox 88+ · Edge 90+
iOS Safari 15+ · Android Chrome ล่าสุด

---

## เครดิตข้อมูล

- ภาพ: Wikipedia Commons (CC-licensed)
- ข้อมูลแผน: Trip.com, YouTrip, Klook, Tripadvisor (2026)
- Font: Fraunces, Inter, JetBrains Mono, Noto Serif SC (Google Fonts)
- Map Style: Custom Jade theme

---

🇨🇳 一路平安 · เดินทางโดยสวัสดิภาพ
# Chongqing

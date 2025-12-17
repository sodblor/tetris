"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Droplets, Heart, Leaf, ShoppingBag, Sparkles, Star, Sun } from "lucide-react"
import Footer from "@/app/components/footer"
import { useApp } from "@/app/providers"
import Navigation from "@/app/components/navigation"

const categories = ["All", "Cleansers", "Essences", "Serums", "Moisturizers", "Sun Care"]

export const shopProducts = [
  {
    id: "pure-grinding-cleansing-balm",
    name: "Pure Grinding Cleansing Balm",
    description: "Hygienic grinding-type cleansing balm that melts away makeup and sunscreen without irritation",
    price: "$36",
    rating: 4.6,
    category: "Cleansers",
    image: "https://sk1ntro.com/cdn/shop/files/dr-althea-pure-grinding-cleansing-balm-01.jpg?v=1762458749",
    details: [
      "Grinding dispenser keeps balm fresh and hygienic",
      "Melts makeup, SPF, and excess sebum gently",
      "Rinses clean without leaving residue",
    ],
    howToUse: {
      en: [
        "Apply to dry skin with dry hands",
        "Massage gently in circular motions to melt makeup and sunscreen",
        "Add a little water to emulsify and continue massaging",
        "Rinse thoroughly with lukewarm water",
        "Follow with a second cleanser if desired",
      ],
      mn: [
        "Хуурай арьс, хуурай гараар түрхэх",
        "Будалт, нарнаас хамгаалах бүтээгдэхүүнийг уусгахын тулд дугуй хэлбэрээр зөөлөн массаж хийх",
        "Бага зэрэг ус нэмж эмульсжүүлж, массаж үргэлжлүүлэх",
        "Дулаан уснаар сайтар зайлах",
        "Хэрэв хүсвэл хоёр дахь цэвэрлэгч хэрэглэх",
      ],
    },
    ingredients: {
      en: [
        "Mineral oil and plant-based oils for effective makeup removal",
        "Emulsifiers for easy rinsing",
        "Antioxidants to protect skin",
        "No harsh surfactants or fragrances",
      ],
      mn: [
        "Будалтыг үр дүнтэй арилгах эрдэс тос болон ургамлын тос",
        "Хялбар зайлгах эмульсжүүлэгч",
        "Арьсыг хамгаалах антиоксидантууд",
        "Хатуу гадаргын идэвхжүүлэгч эсвэл анхилуун үнэргүй",
      ],
    },
    effects: {
      en: [
        "Thoroughly removes makeup, sunscreen, and impurities",
        "Leaves skin clean without stripping natural oils",
        "Prevents clogged pores and breakouts",
        "Suitable as first step in double cleansing routine",
      ],
      mn: [
        "Будалт, нарнаас хамгаалах бүтээгдэхүүн, бохирдлыг бүрэн арилгана",
        "Байгалийн тослогийг хадгалж арьсыг цэвэрхэн үлдээнэ",
        "Нүхний бөглөрөл, батганаас сэргийлнэ",
        "Давхар цэвэрлэгээний эхний алхамд тохиромжтой",
      ],
    },
    suitableFor: ["oily", "dry", "sensitive", "normal", "acne-prone", "combination"],
  },
  {
    id: "green-relief-amino-gel-cleanser",
    name: "Green Relief Amino Gel Cleanser",
    description: "Low-irritation amino acid cleanser that gently cleanses while keeping skin calm and hydrated",
    price: "$42",
    rating: 4.7,
    category: "Cleansers",
    image: "https://living-beauty.com/cdn/shop/files/dr-althea-cleanser-100ml-green-relief-amino-gel-cleanser-26561674608676_2000x.jpg?v=1758121320",
    details: [
      "Amino acid surfactants cleanse without stripping",
      "Green complex helps calm sensitive skin",
      "Gel texture foams softly and rinses clean",
    ],
    howToUse: {
      en: [
        "Wet face with lukewarm water",
        "Dispense a small amount and work into a gentle lather",
        "Massage onto face in circular motions for 30-60 seconds",
        "Rinse thoroughly with lukewarm water",
        "Use morning and evening as part of your routine",
      ],
      mn: [
        "Дулаан уснаар нүүрийг нойтон болгох",
        "Бага зэрэг шахаж, зөөлөн хөөс үүсгэх",
        "30-60 секунд дугуй хэлбэрээр нүүрэнд массаж хийх",
        "Дулаан уснаар сайтар зайлах",
        "Өглөө, орой хэвийн үйлдлийн хэсэг болгон хэрэглэх",
      ],
    },
    ingredients: {
      en: [
        "Amino acid surfactants (gentle cleansing agents)",
        "Centella asiatica extract for soothing",
        "Green tea extract for antioxidant benefits",
        "Hyaluronic acid for hydration",
        "No sulfates, parabens, or artificial fragrances",
      ],
      mn: [
        "Амин хүчлийн гадаргын идэвхжүүлэгч (зөөлөн цэвэрлэгч бодисууд)",
        "Тайвшруулахын тулд центелла азиатика экстракт",
        "Антиоксидантын ашиг тусын тулд ногоон цайны экстракт",
        "Чийгшүүлэх гиалуроны хүчил",
        "Сульфат, парабен, эсвэл хиймэл анхилуун үнэргүй",
      ],
    },
    effects: {
      en: [
        "Cleanses thoroughly without over-drying",
        "Maintains skin's natural moisture balance",
        "Reduces redness and irritation",
        "Strengthens skin barrier over time",
      ],
      mn: [
        "Хэт хуурайшлуулахгүйгээр бүрэн цэвэрлэнэ",
        "Арьсны байгалийн чийгшлийн тэнцвэрийг хадгална",
        "Улайлт, цочролыг бууруулна",
        "Цаг хугацаа өнгөрөхөд арьсны хамгаалах давхаргыг бэхжүүлнэ",
      ],
    },
    suitableFor: ["oily", "dry", "sensitive", "normal", "acne-prone", "combination"],
  },
  {
    id: "gentle-pore-cleansing-oil",
    name: "Gentle Pore Cleansing Oil",
    description: "Lightweight cleansing oil that dissolves impurities and unclogs pores",
    price: "$38",
    rating: 4.7,
    category: "Cleansers",
    image: "https://m.media-amazon.com/images/I/51terxj-e+L.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_PIRIOFOURANDHALF-medium,BottomLeft,30,-20_ZJPHNwYW4gZm9yZWdyb3VuZD0iIzU2NTk1OSIgZm9udD0iQW1hem9uRW1iZXIgNTAiID4yODwvc3Bhbj4=,500,900,420,420,0,0_QL100_.jpg",
    details: [
      "Soft oil texture melts away makeup",
      "Helps unclog and refine pores",
      "Leaves skin soft and non-greasy",
    ],
    howToUse: {
      en: [
        "Apply to dry face and hands",
        "Massage gently for 1-2 minutes to dissolve makeup and impurities",
        "Add water to emulsify the oil",
        "Continue massaging until oil turns milky",
        "Rinse thoroughly with lukewarm water",
      ],
      mn: [
        "Хуурай нүүр, гараар түрхэх",
        "Будалт, бохирдлыг уусгахын тулд 1-2 минут зөөлөн массаж хийх",
        "Тосыг эмульсжүүлэхийн тулд ус нэмэх",
        "Тос сүүтэй болтол массаж үргэлжлүүлэх",
        "Дулаан уснаар сайтар зайлах",
      ],
    },
    ingredients: {
      en: [
        "Jojoba oil and olive oil for effective cleansing",
        "Salicylic acid (BHA) to unclog pores",
        "Vitamin E for antioxidant protection",
        "Lightweight, non-comedogenic formula",
      ],
      mn: [
        "Үр дүнтэй цэвэрлэгээний жожоба тос, оливын тос",
        "Нүхний бөглөрөлийг арилгах салицилын хүчил (BHA)",
        "Антиоксидантын хамгаалалтын витамин E",
        "Хөнгөн, бөөгнөрөл үүсгэдэггүй томьёолол",
      ],
    },
    effects: {
      en: [
        "Deeply cleanses pores and removes blackheads",
        "Dissolves stubborn makeup and sunscreen",
        "Refines pore appearance over time",
        "Leaves skin smooth and balanced",
      ],
      mn: [
        "Нүхний гүн цэвэрлэгээ, хар толбо арилгана",
        "Тууштай будалт, нарнаас хамгаалах бүтээгдэхүүнийг уусгана",
        "Цаг хугацаа өнгөрөхөд нүхний харагдах байдлыг сайжруулна",
        "Арьсыг гөлгөр, тэнцвэртэй үлдээнэ",
      ],
    },
    suitableFor: ["oily", "combination", "acne-prone", "normal"],
  },
  {
    id: "vitamin-c-boosting-serum",
    name: "Vitamin C Boosting Serum",
    description: "Brightening serum with vitamin C to even skin tone and enhance radiance",
    price: "$42",
    rating: 4.8,
    category: "Serums",
    image: "https://static.beautytocare.com/cdn-cgi/image/f=auto/media/catalog/product/d/r/dr-althea-vitamin-c-boosting-serum-30ml_1.jpg",
    details: [
      "Vitamin C improves brightness and glow",
      "Niacinamide calms and balances tone",
      "Lightweight serum absorbs quickly",
    ],
    howToUse: {
      en: [
        "Apply 2-3 drops to clean, dry skin in the morning",
        "Gently pat into face and neck",
        "Allow to absorb for 1-2 minutes",
        "Follow with moisturizer and always use sunscreen",
        "Start with every other day if new to vitamin C",
      ],
      mn: [
        "Өглөө цэвэр, хуурай арьсанд 2-3 дусал түрхэх",
        "Нүүр, хүзүүнд зөөлөн товших",
        "1-2 минут шингээхэд зөвшөөрөх",
        "Чийгшүүлэгч дараа нь хэрэглэж, үргэлж нарнаас хамгаалах бүтээгдэхүүн ашиглах",
        "Хэрэв витамин C шинээр хэрэглэж байгаа бол хоёр өдөрт нэг удаа эхлэх",
      ],
    },
    ingredients: {
      en: [
        "L-Ascorbic Acid (Vitamin C) for brightening",
        "Niacinamide to balance and calm",
        "Hyaluronic acid for hydration",
        "Vitamin E for antioxidant protection",
        "Ferulic acid to stabilize vitamin C",
      ],
      mn: [
        "Гэрэлтүүлэх L-Аскорбины хүчил (Витамин C)",
        "Тэнцвэржүүлж тайвшруулах ниацинамид",
        "Чийгшүүлэх гиалуроны хүчил",
        "Антиоксидантын хамгаалалтын витамин E",
        "Витамин C-г тогтворжуулах ферулын хүчил",
      ],
    },
    effects: {
      en: [
        "Fades dark spots and post-acne marks",
        "Improves overall skin brightness and radiance",
        "Even out skin tone and reduce dullness",
        "Protects against environmental damage",
      ],
      mn: [
        "Нөсөө толбо, батганы дараах тэмдгийг бүдгэрүүлнэ",
        "Арьсны ерөнхий гэрэлтэлт, гялалзлыг сайжруулна",
        "Арьсны өнгийг жигдрүүлж, бараан туяаг бууруулна",
        "Байгаль орчны гэмтлээс хамгаална",
      ],
    },
    suitableFor: ["oily", "normal", "combination", "acne-prone"],
  },
  {
    id: "multi-action-infusion-serum",
    name: "Multi‑Action Infusion Serum",
    description: "Hydrating and soothing serum for all skin types",
    price: "$44",
    rating: 4.7,
    category: "Serums",
    image: "https://veel.gr/wp-content/uploads/2024/10/veel-dr-althea-multi-action-infusion-serum-2.png",
    details: [
      "Multi-peptide complex strengthens skin",
      "Hyaluronic acid deeply hydrates",
      "Gentle on sensitive skin",
    ],
    howToUse: {
      en: [
        "Apply 3-4 drops to clean skin after toning",
        "Gently pat and press into face and neck",
        "Allow to fully absorb before next step",
        "Use morning and evening",
        "Can be layered with other serums",
      ],
      mn: [
        "Тонер хэрэглэсний дараа цэвэр арьсанд 3-4 дусал түрхэх",
        "Нүүр, хүзүүнд зөөлөн товшиж дарах",
        "Дараагийн алхамд шилжихээсээ өмнө бүрэн шингээхэд зөвшөөрөх",
        "Өглөө, орой хэрэглэх",
        "Бусад серумтай давхарлан ашиглах боломжтой",
      ],
    },
    ingredients: {
      en: [
        "Multi-peptide complex (signal peptides, copper peptides)",
        "5-weight hyaluronic acid blend",
        "Niacinamide for barrier support",
        "Centella asiatica for soothing",
        "Ceramides to strengthen barrier",
      ],
      mn: [
        "Олон пептидийн иж бүрдэл (сигнал пептид, зэс пептид)",
        "5 жинтэй гиалуроны хүчлийн холимог",
        "Хамгаалах давхаргыг дэмжих ниацинамид",
        "Тайвшруулах центелла азиатика",
        "Хамгаалах давхаргыг бэхжүүлэх церамид",
      ],
    },
    effects: {
      en: [
        "Deeply hydrates and plumps skin",
        "Strengthens skin barrier function",
        "Improves skin elasticity and firmness",
        "Reduces fine lines and improves texture",
      ],
      mn: [
        "Гүн чийгшүүлж арьсыг дүүргэнэ",
        "Арьсны хамгаалах давхаргын үйл ажиллагааг бэхжүүлнэ",
        "Арьсны уян хатан, чанарыг сайжруулна",
        "Нарийн үрчлээг бууруулж бүтцийг сайжруулна",
      ],
    },
    suitableFor: ["oily", "dry", "sensitive", "normal", "acne-prone", "combination"],
  },
  {
    id: "345-relief-cream",
    name: "345 Relief Cream",
    description: "Nutrient-rich, lightweight gel-cream that soothes irritation, strengthens the skin barrier, and improves hydration and tone",
    price: "$30–$38",
    rating: 4.9,
    category: "Moisturizers",
    image: "https://beautyshoplili.com/wp-content/uploads/2024/11/IMG_0950.jpeg",
    details: [
      "Soothes redness and irritation with centella and panthenol",
      "Niacinamide and ceramides strengthen the moisture barrier",
      "Light, non-greasy texture absorbs quickly",
    ],
    howToUse: {
      en: [
        "Apply to clean skin after serum or essence",
        "Take a pea-sized amount and gently massage into face",
        "Use morning and evening",
        "Can be used as a day cream or night cream",
        "Apply to damp skin for better absorption",
      ],
      mn: [
        "Серум эсвэл эссенс хэрэглэсний дараа цэвэр арьсанд түрхэх",
        "Буурцагны хэмжээтэй авч нүүрэнд зөөлөн массаж хийх",
        "Өглөө, орой хэрэглэх",
        "Өдрийн крем эсвэл шөнийн крем болгон ашиглах боломжтой",
        "Илүү сайн шингээхийн тулд чийгтэй арьсанд түрхэх",
      ],
    },
    ingredients: {
      en: [
        "Centella asiatica (Cica) extract for soothing",
        "Panthenol (Pro-Vitamin B5) for healing",
        "Niacinamide to strengthen barrier",
        "Ceramides to repair and protect",
        "Hyaluronic acid for hydration",
        "No fragrances or harsh additives",
      ],
      mn: [
        "Тайвшруулах центелла азиатика (Сика) экстракт",
        "Эмчлэх пантенол (Про-Витамин B5)",
        "Хамгаалах давхаргыг бэхжүүлэх ниацинамид",
        "Засварлах, хамгаалах церамид",
        "Чийгшүүлэх гиалуроны хүчил",
        "Анхилуун үнэр эсвэл хатуу нэмэлт бодисгүй",
      ],
    },
    effects: {
      en: [
        "Calms redness and reduces irritation",
        "Repairs and strengthens damaged skin barrier",
        "Improves skin hydration and prevents moisture loss",
        "Even out skin tone and reduce sensitivity",
      ],
      mn: [
        "Улайлтыг тайвшруулж цочролыг бууруулна",
        "Гэмтсэн арьсны хамгаалах давхаргыг засварлаж бэхжүүлнэ",
        "Арьсны чийгшлийг сайжруулж чийгийн алдагдлаас сэргийлнэ",
        "Арьсны өнгийг жигдрүүлж мэдрэмтгий байдлыг бууруулна",
      ],
    },
    suitableFor: ["dry", "sensitive", "normal", "combination"],
  },
  {
    id: "vita-glow-mask",
    name: "Vita Glow Mask",
    description: "Brightening and hydrating sheet mask infused with vitamins",
    price: "$8",
    rating: 4.6,
    category: "Masks",
    image: "https://soderma.lt/wp-content/uploads/2024/11/20-1000x1250w.jpg",
    details: [
      "Vitamin C and E improve radiance",
      "Hydrates and calms skin",
      "Soft, comfortable sheet material",
    ],
    howToUse: {
      en: [
        "Cleanse and tone skin before applying",
        "Remove mask from package and unfold",
        "Apply to face, adjusting to fit contours",
        "Leave on for 15-20 minutes",
        "Remove mask and gently pat remaining essence into skin",
        "Use 1-2 times per week",
      ],
      mn: [
        "Түрхэхээсээ өмнө арьсыг цэвэрлэж тонер хэрэглэх",
        "Уутнаас маск гаргаж задлах",
        "Нүүрэнд түрхэж, хэлбэрт тохируулах",
        "15-20 минут үлдээх",
        "Маскыг арилгаж, үлдсэн эссенсийг арьсанд зөөлөн товших",
        "Долоо хоногт 1-2 удаа хэрэглэх",
      ],
    },
    ingredients: {
      en: [
        "Vitamin C (Ascorbic Acid) for brightening",
        "Vitamin E for antioxidant protection",
        "Hyaluronic acid for deep hydration",
        "Niacinamide to even tone",
        "Aloe vera for soothing",
      ],
      mn: [
        "Гэрэлтүүлэх витамин C (Аскорбины хүчил)",
        "Антиоксидантын хамгаалалтын витамин E",
        "Гүн чийгшүүлэх гиалуроны хүчил",
        "Өнгийг жигдрүүлэх ниацинамид",
        "Тайвшруулах алоэ вера",
      ],
    },
    effects: {
      en: [
        "Instantly brightens and refreshes skin",
        "Provides intense hydration",
        "Improves skin radiance and glow",
        "Calms and soothes irritated skin",
      ],
      mn: [
        "Арьсыг шууд гэрэлтүүлж сэргээнэ",
        "Гүн чийгшүүлнэ",
        "Арьсны гэрэлтэлт, гялалзлыг сайжруулна",
        "Цочролд орсон арьсыг тайвшруулна",
      ],
    },
    suitableFor: ["oily", "dry", "normal", "combination"],
  },
  {
    id: "skin-relief-essence",
    name: "Skin Relief Essence",
    description: "Light essence that soothes and hydrates irritated skin",
    price: "$36",
    rating: 4.7,
    category: "Essences",
    image: "https://panel.blank-store.com/storage/19100/2779.jpg",
    details: [
      "Calms redness with centella asiatica",
      "Hydrates with hyaluronic acid",
      "Light texture layers easily",
    ],
    howToUse: {
      en: [
        "Apply after cleansing and toning",
        "Pour 2-3 drops into palms and press into skin",
        "Gently pat over face and neck",
        "Use morning and evening",
        "Can be layered multiple times for extra hydration",
      ],
      mn: [
        "Цэвэрлэгээ, тонер хэрэглэсний дараа түрхэх",
        "Гаранд 2-3 дусал асгаж арьсанд дарах",
        "Нүүр, хүзүүнд зөөлөн товших",
        "Өглөө, орой хэрэглэх",
        "Нэмэлт чийгшүүлэхийн тулд олон удаа давхарлан ашиглах боломжтой",
      ],
    },
    ingredients: {
      en: [
        "Centella asiatica extract (Madecassoside, Asiaticoside)",
        "Hyaluronic acid for hydration",
        "Panthenol for healing",
        "Allantoin for soothing",
        "Green tea extract for antioxidants",
      ],
      mn: [
        "Центелла азиатика экстракт (Мадекассозид, Азиатикозид)",
        "Чийгшүүлэх гиалуроны хүчил",
        "Эмчлэх пантенол",
        "Тайвшруулах аллантоин",
        "Антиоксидантын ногоон цайны экстракт",
      ],
    },
    effects: {
      en: [
        "Reduces redness and irritation",
        "Provides lightweight hydration",
        "Strengthens skin barrier",
        "Calms sensitive and reactive skin",
      ],
      mn: [
        "Улайлт, цочролыг бууруулна",
        "Хөнгөн чийгшүүлнэ",
        "Арьсны хамгаалах давхаргыг бэхжүүлнэ",
        "Мэдрэмтгий, урвалттай арьсыг тайвшруулна",
      ],
    },
    suitableFor: ["dry", "sensitive", "normal", "combination"],
  },
  {
    id: "green-tea-fresh-sunscreen-spf-50",
    name: "Green Tea Fresh Sunscreen SPF 50+",
    description: "Oil-free sunscreen with green tea extract to protect and soothe skin",
    price: "$32",
    rating: 4.8,
    category: "Sun Care",
    image: "https://www.koreanbeauty.com/cdn/shop/files/GreenTeaFreshSunscreen.png?v=1754311974",
    details: [
      "Broad-spectrum SPF 50+ protection",
      "Green tea extract soothes and calms",
      "Lightweight, non-greasy finish",
    ],
    howToUse: {
      en: [
        "Apply as the last step of your morning routine",
        "Use 2 finger-lengths for face and neck",
        "Apply 15-30 minutes before sun exposure",
        "Reapply every 2 hours when outdoors",
        "Reapply after swimming or sweating",
      ],
      mn: [
        "Өглөөний үйлдлийн сүүлчийн алхам болгон түрхэх",
        "Нүүр, хүзүүнд 2 хурууны урт хэмжээтэй түрхэх",
        "Нарны гэрэлд гарахаас 15-30 минутын өмнө түрхэх",
        "Гадаа байхдаа 2 цаг тутамд дахин түрхэх",
        "Усанд орох эсвэл хөлслөх дараа дахин түрхэх",
      ],
    },
    ingredients: {
      en: [
        "Zinc oxide and titanium dioxide (mineral filters)",
        "Green tea extract for antioxidant protection",
        "Centella asiatica for soothing",
        "Hyaluronic acid for hydration",
        "No chemical filters or fragrances",
      ],
      mn: [
        "Цинк оксид ба титан диоксид (эрдэс шүүлтүүр)",
        "Антиоксидантын хамгаалалтын ногоон цайны экстракт",
        "Тайвшруулах центелла азиатика",
        "Чийгшүүлэх гиалуроны хүчил",
        "Химийн шүүлтүүр эсвэл анхилуун үнэргүй",
      ],
    },
    effects: {
      en: [
        "Protects against UVA and UVB rays",
        "Prevents sunburn and premature aging",
        "Soothes and calms skin while protecting",
        "Leaves no white cast or greasy residue",
      ],
      mn: [
        "UVA болон UVB туяанаас хамгаална",
        "Нарны шатаалт, эрт хөгшрөлтөөс сэргийлнэ",
        "Хамгаалж байхдаа арьсыг тайвшруулна",
        "Цагаан тэмдэг эсвэл тослог үлдэгдэл үлдээхгүй",
      ],
    },
    suitableFor: ["oily", "dry", "sensitive", "normal", "acne-prone", "combination"],
  },
  {
    id: "aqua-glowing-sunscreen",
    name: "Aqua Glowing Sunscreen",
    description: "Hydrating sunscreen with a dewy finish",
    price: "$34",
    rating: 4.7,
    category: "Sun Care",
    image: "https://www.koreanbeauty.es/cdn/shop/files/AquaGlowingSunscreen.png?v=1754310459&width=900",
    details: [
      "Moisturizes while protecting from UV",
      "Non-sticky, radiant finish",
      "Suitable for all skin types",
    ],
    howToUse: {
      en: [
        "Apply after moisturizer in morning routine",
        "Use generous amount (2 finger-lengths) for face and neck",
        "Apply 20 minutes before sun exposure",
        "Reapply every 2 hours or after swimming",
        "Can be worn alone or under makeup",
      ],
      mn: [
        "Өглөөний үйлдэлд чийгшүүлэгчийн дараа түрхэх",
        "Нүүр, хүзүүнд их хэмжээтэй (2 хурууны урт) түрхэх",
        "Нарны гэрэлд гарахаас 20 минутын өмнө түрхэх",
        "2 цаг тутамд эсвэл усанд орох дараа дахин түрхэх",
        "Ганцаараа эсвэл будалтын доор өмсөх боломжтой",
      ],
    },
    ingredients: {
      en: [
        "SPF 50+ broad-spectrum protection",
        "Hyaluronic acid for hydration",
        "Niacinamide for barrier support",
        "Light-reflecting particles for glow",
        "Non-comedogenic formula",
      ],
      mn: [
        "SPF 50+ өргөн спектрийн хамгаалалт",
        "Чийгшүүлэх гиалуроны хүчил",
        "Хамгаалах давхаргыг дэмжих ниацинамид",
        "Гялалзлын гэрлийн тусгалын бөөмс",
        "Бөөгнөрөл үүсгэдэггүй томьёолол",
      ],
    },
    effects: {
      en: [
        "Provides high-level UV protection",
        "Creates a dewy, glowing finish",
        "Hydrates skin throughout the day",
        "Works as both sunscreen and primer",
      ],
      mn: [
        "Өндөр түвшний UV хамгаалалт өгнө",
        "Чийгтэй, гялалзсан төгсгөл үүсгэнэ",
        "Өдрийн турш арьсыг чийгшүүлнэ",
        "Нарнаас хамгаалах бүтээгдэхүүн болон суурь тос хоёуланг нь гүйцэтгэнэ",
      ],
    },
    suitableFor: ["oily", "dry", "normal", "combination"],
  },
  {
    id: "rapid-firm-sculpting-cream",
    name: "Rapid Firm Sculpting Cream",
    description: "Retinal and peptide cream designed for overnight firming and skin renewal",
    price: "$54",
    rating: 4.9,
    category: "Moisturizers",
    image: "https://storage.skinsort.com/wmmbf24e6snzhos1pcw00ljgmf4a",
    details: [
      "0.1% encapsulated retinal helps smooth skin texture",
      "Peptides support firmness and elasticity",
      "Rich yet cushioned base minimizes irritation overnight",
    ],
    howToUse: {
      en: [
        "Use only in evening routine",
        "Apply to clean, dry skin after serum",
        "Start with 2-3 times per week",
        "Gradually increase to nightly use if tolerated",
        "Always use sunscreen in the morning",
        "Avoid eye area",
      ],
      mn: [
        "Зөвхөн оройн үйлдэлд ашиглах",
        "Серум хэрэглэсний дараа цэвэр, хуурай арьсанд түрхэх",
        "Долоо хоногт 2-3 удаа эхлэх",
        "Хэрэв тэсвэрлэх юм бол аажмаар шөнө бүр хэрэглэх",
        "Өглөө үргэлж нарнаас хамгаалах бүтээгдэхүүн ашиглах",
        "Нүдний орчмыг зайлсхийх",
      ],
    },
    ingredients: {
      en: [
        "0.1% Encapsulated Retinal (retinoid)",
        "Signal peptides (Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7)",
        "Ceramides for barrier support",
        "Niacinamide to minimize irritation",
        "Squalane for moisture",
      ],
      mn: [
        "0.1% Капсулжуулсан Ретинал (ретиноид)",
        "Сигнал пептид (Палмитоил Трипептид-1, Палмитоил Тетрапептид-7)",
        "Хамгаалах давхаргыг дэмжих церамид",
        "Цочролыг бууруулах ниацинамид",
        "Чийгшүүлэх сквалан",
      ],
    },
    effects: {
      en: [
        "Smooths skin texture and reduces fine lines",
        "Improves skin firmness and elasticity",
        "Promotes cell turnover and renewal",
        "Reduces appearance of wrinkles over time",
      ],
      mn: [
        "Арьсны бүтцийг жигдрүүлж нарийн үрчлээг бууруулна",
        "Арьсны чанар, уян хатан байдлыг сайжруулна",
        "Эсийн шинэчлэл, сэргээлтийг дэмжинэ",
        "Цаг хугацаа өнгөрөхөд судалтай байдлын харагдах байдлыг бууруулна",
      ],
    },
    suitableFor: ["normal", "combination", "dry"],
  },
  {
    id: "amino-acid-gentle-bubble-cleanser",
    name: "Amino Acid Gentle Bubble Cleanser",
    description: "Gentle foaming cleanser that removes impurities without stripping",
    price: "$28",
    rating: 4.6,
    category: "Cleansers",
    image: "https://skinbox.gr/583-thickbox_default/amino-acid-gentle-bubble-cleanser.jpg",
    details: [
      "Soft foam cleanses and hydrates",
      "Gentle on sensitive skin",
      "Leaves skin refreshed and soft",
    ],
    howToUse: {
      en: [
        "Wet face with lukewarm water",
        "Pump 1-2 times and work into a gentle foam",
        "Massage onto face for 30-60 seconds",
        "Rinse thoroughly with lukewarm water",
        "Use morning and evening",
      ],
      mn: [
        "Дулаан уснаар нүүрийг нойтон болгох",
        "1-2 удаа шахаж зөөлөн хөөс үүсгэх",
        "30-60 секунд нүүрэнд массаж хийх",
        "Дулаан уснаар сайтар зайлах",
        "Өглөө, орой хэрэглэх",
      ],
    },
    ingredients: {
      en: [
        "Amino acid-based surfactants",
        "Glycerin for hydration",
        "Allantoin for soothing",
        "No sulfates or harsh detergents",
        "pH-balanced formula",
      ],
      mn: [
        "Амин хүчлийн суурьтай гадаргын идэвхжүүлэгч",
        "Чийгшүүлэх глицерин",
        "Тайвшруулах аллантоин",
        "Сульфат эсвэл хатуу угаалгын бодисгүй",
        "pH тэнцвэртэй томьёолол",
      ],
    },
    effects: {
      en: [
        "Cleanses without stripping natural oils",
        "Maintains skin's pH balance",
        "Leaves skin soft and comfortable",
        "Suitable for daily use",
      ],
      mn: [
        "Байгалийн тослогийг арилгахгүйгээр цэвэрлэнэ",
        "Арьсны pH тэнцвэрийг хадгална",
        "Арьсыг зөөлөн, тохь тухтай үлдээнэ",
        "Өдөр бүр хэрэглэхэд тохиромжтой",
      ],
    },
    suitableFor: ["oily", "dry", "sensitive", "normal", "combination"],
  },
];



export default function ShopPage() {
  const { language, toggleFavorite, isFavorite, addToCart, t } = useApp()
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return shopProducts
    return shopProducts.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-28 pb-16 px-6 lg:px-8 bg-gradient-to-br from-accent/30 via-background to-secondary/20">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">Shop</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium">Curated Korean Skincare</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse our most-loved formulas by category. Layer-friendly textures and gentle ingredients for every skin
            journey.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {categories.map((category) => {
              const isActive = category === activeCategory
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all ${
                    isActive
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            // Ensure type is set for all products
            const productWithType = { ...product, type: product.type || "skincare" }
            return (
            <article
              key={product.id}
              className="group h-full flex flex-col border border-border/60 rounded-3xl overflow-hidden bg-card shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/products/${product.id}`} className="relative aspect-[3/4] overflow-hidden block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute left-4 top-4 bg-background/90 text-xs font-semibold px-3 py-1 rounded-full border border-border">
                    {typeof product.badge === "object" ? product.badge[language] || product.badge.en : product.badge}
                  </span>
                )}
              </Link>
              <div className="p-5 space-y-3 flex-1 flex flex-col">
                <Link href={`/products/${product.id}`} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {typeof product.category === "object"
                        ? product.category[language] || product.category.en
                        : product.category}
                    </p>
                    <h3 className="text-lg font-semibold mt-1 hover:text-primary transition-colors">{product.name}</h3>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      toggleFavorite(product.id)
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Save to favourites"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isFavorite(product.id) ? "text-primary fill-primary" : ""
                      }`}
                    />
                  </button>
                </Link>
                <Link href={`/products/${product.id}`}>
                  <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {typeof product.description === "object"
                      ? product.description[language] || product.description.en
                      : product.description}
                  </p>
                </Link>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-base font-semibold">{product.price}</span>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {(typeof product.details === "object"
                    ? product.details[language] || product.details.en
                    : product.details
                  )?.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {t("shop.addToBag")}
                </button>
              </div>
            </article>
            )
          })}

          {filteredProducts.length === 0 && (
            <p className="col-span-full text-center text-sm text-muted-foreground">
              {language === "en" ? "No products match your search yet." : "Хайлтанд тохирох бүтээгдэхүүн алга."}
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

// src/data/projects.ts

// 1. تعريف هيكل البيانات (Data Structure)
export interface Project {
  id: string; // المُعرّف الأساسي لربطه بالترجمة
  slug: string; // الرابط النظيف للسيو (مثال: the-royal-palm)
  categoryId: string; // نوع المطبخ (modern, classic, wood)
  coverImage: string; // صورة الغلاف الأساسية
  gallery: string[]; // مصفوفة صور المعرض الداخلي للمشروع
  year: number; // سنة التنفيذ
}

// 2. مصفوفة البيانات الثابتة
export const projectsData: Project[] = [
  {
    id: "p1",
    slug: "the-royal-palm",
    categoryId: "modern",
    coverImage:
      "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2070",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070",
    ],
    year: 2025,
  },
  {
    id: "p2",
    slug: "emirates-hills-villa",
    categoryId: "classic",
    coverImage:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2070",
    gallery: [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2070",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    ],
    year: 2024,
  },
  // يمكنك إضافة باقي المشاريع بنفس الطريقة...
];

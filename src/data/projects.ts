export interface Project {
  id: string;
  slug: string;
  categoryId: string;
  coverImage: string;
  gallery: string[];
  year: number;
}

export const projectsData: Project[] = [
  {
    id: "p1",
    slug: "royal-indigo-elegance",
    categoryId: "royal", // ضفنا تصنيف جديد اسمه royal
    coverImage:
      "https://i.ibb.co/Q77s0dyP/Gemini-Generated-Image-eazp63eazp63eazp.png",
    gallery: [
      "https://i.ibb.co/VsMyhN2/Gemini-Generated-Image-jmn099jmn099jmn0.png",
      "https://i.ibb.co/fY8kkWwW/Gemini-Generated-Image-6xgq7h6xgq7h6xgq.png",
      "https://i.ibb.co/Q77s0dyP/Gemini-Generated-Image-eazp63eazp63eazp.png",
      "https://i.ibb.co/PvW9gtbN/unnamed.jpg",
    ],
    year: 2025,
  },
  {
    id: "p2",
    slug: "the-muted-olive-grove",
    categoryId: "organic", // ضفنا تصنيف جديد للتصاميم المستدامة والطبيعية
    coverImage:
      "https://i.ibb.co/YFfxW3J8/Gemini-Generated-Image-ws9rh0ws9rh0ws9r.png",
    gallery: [
      "https://i.ibb.co/5W7z7rpY/Gemini-Generated-Image-mwh7ofmwh7ofmwh7.png",
      "https://i.ibb.co/YFfxW3J8/Gemini-Generated-Image-ws9rh0ws9rh0ws9r.png",
      "https://i.ibb.co/Pvq8qXMP/Gemini-Generated-Image-ig5a0mig5a0mig5a.png",
    ],
    year: 2025,
  },
  {
    id: "p3",
    slug: "the-obsidian-luxury",
    categoryId: "dark", // تصنيف جديد للألوان الداكنة
    coverImage:
      "https://i.ibb.co/2Y0YXhD7/Gemini-Generated-Image-fv2yacfv2yacfv2y.png",
    gallery: [
      "https://i.ibb.co/6JmTfyR6/Gemini-Generated-Image-igroazigroazigro.png",
      "https://i.ibb.co/m5wJYj84/Gemini-Generated-Image-onpgq3onpgq3onpg.png",
      "https://i.ibb.co/2Y0YXhD7/Gemini-Generated-Image-fv2yacfv2yacfv2y.png",
    ],
    year: 2025,
  },
  {
    id: "p4",
    slug: "the-gulf-pearl",
    categoryId: "coastal", // تصنيف جديد للفلل الشاطئية
    coverImage:
      "https://i.ibb.co/ZpWxv055/Gemini-Generated-Image-q4b3wbq4b3wbq4b3.png",
    gallery: [
      "https://i.ibb.co/jkxgWkKk/Gemini-Generated-Image-l5f070l5f070l5f0.png",
      "https://i.ibb.co/ZpWxv055/Gemini-Generated-Image-q4b3wbq4b3wbq4b3.png",
      "https://i.ibb.co/zMW6Z7P/Gemini-Generated-Image-1nivtw1nivtw1niv.png",
    ],
    year: 2026,
  },
];

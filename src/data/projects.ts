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
      "https://i.ibb.co/wNDmbpKZ/Gemini-Generated-Image-jmn099jmn099jmn0.png",
    gallery: [
      "https://i.ibb.co/wNDmbpKZ/Gemini-Generated-Image-jmn099jmn099jmn0.png",
      "https://i.ibb.co/wNfVFZJx/Gemini-Generated-Image-6xgq7h6xgq7h6xgq.png",
      "https://i.ibb.co/RkZq2Np9/Gemini-Generated-Image-eazp63eazp63eazp.png",
      "https://i.ibb.co/W4Vk3dDL/unnamed.jpg",
    ],
    year: 2025,
  },
  {
    id: "p2",
    slug: "the-muted-olive-grove",
    categoryId: "organic", // ضفنا تصنيف جديد للتصاميم المستدامة والطبيعية
    coverImage:
      "https://i.ibb.co/4Rvy7Spd/Gemini-Generated-Image-ig5a0mig5a0mig5a.png",
    gallery: [
      "https://i.ibb.co/4Rvy7Spd/Gemini-Generated-Image-ig5a0mig5a0mig5a.png",
      "https://i.ibb.co/DHnzgYc1/Gemini-Generated-Image-mwh7ofmwh7ofmwh7.png",
      "https://i.ibb.co/pvXFXtp8/Gemini-Generated-Image-ws9rh0ws9rh0ws9r.png",
    ],
    year: 2025,
  },
  {
    id: "p3",
    slug: "the-obsidian-luxury",
    categoryId: "dark", // تصنيف جديد للألوان الداكنة
    coverImage:
      "https://i.ibb.co/6cVVfgy7/Gemini-Generated-Image-fv2yacfv2yacfv2y.png",
    gallery: [
      "https://i.ibb.co/6cVVfgy7/Gemini-Generated-Image-fv2yacfv2yacfv2y.png",
      "https://i.ibb.co/Jwxc7jZz/Gemini-Generated-Image-igroazigroazigro.png",
      "https://i.ibb.co/b5ytNXVC/Gemini-Generated-Image-onpgq3onpgq3onpg.png",
    ],
    year: 2025,
  },
  {
    id: "p4",
    slug: "the-gulf-pearl",
    categoryId: "coastal", // تصنيف جديد للفلل الشاطئية
    coverImage:
      "https://i.ibb.co/fdm3pXM6/Gemini-Generated-Image-q4b3wbq4b3wbq4b3.png",
    gallery: [
      "https://i.ibb.co/fdm3pXM6/Gemini-Generated-Image-q4b3wbq4b3wbq4b3.png",
      "https://i.ibb.co/SX77Nmsr/Gemini-Generated-Image-1nivtw1nivtw1niv.png",
      "https://i.ibb.co/nq9pkHZH/Gemini-Generated-Image-l5f070l5f070l5f0.png",
    ],
    year: 2026,
  },
];

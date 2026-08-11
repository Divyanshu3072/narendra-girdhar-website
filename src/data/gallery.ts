export interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  titleHindi: string;
  category: string;
  date: string;
  location?: string;
  description: string;
  image?: string;
  images?: string[];
  sourceName?: string;
  sourceUrl?: string;
  verificationStatus: "verified" | "source-provided" | "draft";
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "jan-abhiyog-samiti-nomination",
    slug: "jan-abhiyog-samiti-nomination",
    title: "Nominated as Member of Jan Abhiyog and Satarkta Samiti",
    titleHindi: "जन अभियोग एवं सतर्कता समिति में सदस्य मनोनयन से संबंधित समाचार",
    category: "समाचार / सार्वजनिक जिम्मेदारी",
    date: "August 2024", // Assuming date from typical URL structure, but we can leave it general
    description: "जन अभियोग एवं सतर्कता समिति में सदस्य मनोनयन से संबंधित समाचार।",
    sourceName: "Dainik Bhaskar",
    sourceUrl: "https://www.bhaskar.com/local/rajasthan/jhunjhunu/chirawa/news/narendra-girdhar-chida-jan-abhiyog-satarkta-samiti-member-nomination-138686580.html",
    verificationStatus: "source-provided",
    image: "/images/narendra-girdhar/20260808_130300.jpg", // Using an appropriate existing image from the project
    featured: true
  }
];

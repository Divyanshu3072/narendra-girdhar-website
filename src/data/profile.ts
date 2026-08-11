export interface ProfileData {
  name: {
    en: string;
    hi: string;
  };
  designation: {
    en: string;
    hi: string;
  };
  location: {
    en: string;
    hi: string;
  };
  social: {
    facebook: string;
    whatsapp?: string;
    email?: string;
  };
}

export const profile: ProfileData = {
  name: {
    en: "Narendra Girdhar",
    hi: "नरेंद्र गिरधर",
  },
  designation: {
    en: "BJP Chirawa Nagar Mandal President",
    hi: "भाजपा चिड़ावा नगर मंडल अध्यक्ष",
  },
  location: {
    en: "Chirawa, Jhunjhunu, Rajasthan",
    hi: "चिड़ावा, झुंझुनूं, राजस्थान",
  },
  social: {
    facebook: "https://www.facebook.com/narendragirdharchirawa",
    email: "narendragirdhar@gmail.com"
  }
};

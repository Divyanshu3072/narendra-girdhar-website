export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  source?: string;
  category: string;
  image?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "2019",
    title: "सार्वजनिक कार्यक्रमों में सक्रियता",
    description: "चिड़ावा में भाजपा और सार्वजनिक कार्यक्रमों में निरंतर भागीदारी।",
    category: "जनसंपर्क",
  },
  {
    id: "2",
    date: "2022",
    title: "स्थानीय गतिविधियों में भागीदारी",
    description: "द्रौपदी मुर्मू जी के राष्ट्रपति चुनाव में जीत के उपलक्ष्य में आयोजित कार्यक्रमों सहित स्थानीय भाजपा गतिविधियों में भागीदारी।",
    category: "संगठन",
  },
  {
    id: "3",
    date: "February 2025",
    title: "मंडल अध्यक्ष के रूप में नियुक्ति",
    description: "भाजपा चिड़ावा नगर मंडल अध्यक्ष के रूप में नियुक्ति।",
    category: "संगठन",
  },
  {
    id: "4",
    date: "May 2025",
    title: "नई कार्यकारिणी का गठन",
    description: "भाजपा चिड़ावा नगर मंडल की नई कार्यकारिणी का गठन एवं घोषणा।",
    category: "संगठन",
  },
  {
    id: "5",
    date: "2025–2026",
    title: "निरंतर जनसेवा एवं संपर्क",
    description: "राजनीतिक, नागरिक, सामुदायिक और खेल कार्यक्रमों में निरंतर भागीदारी और जनसंपर्क।",
    category: "जनसेवा",
  }
];

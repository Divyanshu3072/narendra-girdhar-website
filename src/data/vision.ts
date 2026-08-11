export interface VisionPillar {
  id: string;
  title: string;
  description: string;
  icon: string; // Key for the Phosphor Icon to use
}

export const visionPillars: VisionPillar[] = [
  { id: "1", title: "नगर विकास", description: "चिड़ावा के समग्र विकास और बुनियादी ढांचे को मजबूत करने का संकल्प।", icon: "Buildings" },
  { id: "2", title: "जल एवं मूलभूत सुविधाएं", description: "हर क्षेत्र में स्वच्छ पेयजल और मूलभूत नागरिक सुविधाओं की उपलब्धता सुनिश्चित करना।", icon: "Drop" },
  { id: "3", title: "स्वच्छता", description: "स्वच्छ चिड़ावा, स्वस्थ चिड़ावा के लिए निरंतर प्रयास।", icon: "Broom" },
  { id: "4", title: "युवा एवं रोजगार", description: "युवाओं के लिए खेल, शिक्षा और रोजगार के नए अवसरों को बढ़ावा देना।", icon: "Student" },
  { id: "5", title: "महिला सुरक्षा", description: "महिलाओं के लिए सुरक्षित और सशक्त वातावरण का निर्माण।", icon: "ShieldCheck" },
  { id: "6", title: "जनसमस्याओं का समाधान", description: "आमजन की समस्याओं को सुनकर संबंधित विभागों तक पहुंचाना और समाधान का प्रयास।", icon: "Users" }
];

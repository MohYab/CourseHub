const courses = [
  {
    id: 1,
    name: "Webbutveckling med React",
    description: "Lär dig bygga moderna webbapplikationer med React.",
    longDescription:
      "Denna kurs ger dig en grundlig introduktion till React, en av de mest populära JavaScript-biblioteken för att bygga användargränssnitt. Du kommer att lära dig om komponenter, state, props, hooks och mycket mer.",
    teacher: "Anna Andersson",
    credits: 7.5,
    category: "Programmering",
  },
  {
    id: 2,
    name: "Databasteknik",
    description: "Grundläggande databasteknik med SQL och NoSQL.",
    longDescription:
      "I denna kurs får du lära dig grunderna i databashantering, inklusive relationsdatabaser med SQL och dokumentorienterade databaser som MongoDB. Kursen täcker även datamodellering och normalisering.",
    teacher: "Bengt Bengtsson",
    credits: 7.5,
    category: "Databaser",
  },
  {
    id: 3,
    name: "AI Introduktion",
    description:
      "Introduktion till artificiell intelligens och maskininlärning.",
    longDescription:
      "Denna kurs ger en översikt över artificiell intelligens och dess tillämpningar. Du kommer att lära dig grunderna i maskininlärning, neurala nätverk och djupinlärning, samt få praktisk erfarenhet av att implementera enkla AI-modeller.",
    teacher: "Carl Carlson",
    credits: 15,
    category: "AI",
  },
  {
    id: 4,
    name: "Projektledning",
    description: "Metoder och verktyg för effektiv projektledning.",
    longDescription:
      "I denna kurs får du lära dig olika projektledningsmetoder som agila och traditionella tillvägagångssätt. Kursen täcker även verktyg för planering, uppföljning och kommunikation i projekt.",
    teacher: "Diana Davidsson",
    credits: 7.5,
    category: "Ledarskap",
  },
];

export function getCourses() {
  return courses;
}

export function getCourseById(id) {
  return courses.find((course) => course.id === id);
}

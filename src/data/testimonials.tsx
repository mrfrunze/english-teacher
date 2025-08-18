


export type Testimonial = {
  id: string;
  name: string;
  dateLabel: string;
  dateISO: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  avatarKey: string | null;
};

export const testimonials: Testimonial[] = [
  // 1
  {
    id: "r01",
    name: "Oleg",
    dateLabel: "August 23, 2023",
    dateISO: "2023-08-23",
    rating: 5,
    text:
      "A very high-level teacher. She works well with beginners and intermediate students and adapts a special system for each learner. I recommend Lynette.",
    avatarKey: null,
    source: "preply",
  },
  // 2
  {
    id: "r02",
    name: "Angel",
    dateLabel: "June 12, 2024",
    dateISO: "2024-06-12",
    rating: 5,
    text:
      "She is kind and lovely. I enjoyed meeting her and will continue in her class!",
    avatarKey: null,
    source: "preply",
  },
  // 3
  {
    id: "r03",
    name: "Derek",
    dateLabel: "December 13, 2022",
    dateISO: "2022-12-13",
    rating: 5,
    text:
      "I really enjoyed being Lynette’s student. She is not only an amiable English teacher but also a very sophisticated person. Highly recommended.",
    avatarKey: null,
    source: "preply",
  },
  // 4
  {
    id: "r04",
    name: "Olena",
    dateLabel: "December 13, 2022",
    dateISO: "2022-12-13",
    rating: 5,
    text:
      "Thank you so much, Lynette, for the great teaching! Your sensitivity, tactfulness, intelligence, and professionalism are invaluable to me.",
    avatarKey: null,
    source: "preply",
  },
  // 5
  {
    id: "r05",
    name: "Tuan",
    dateLabel: "December 9, 2022",
    dateISO: "2022-12-09",
    rating: 5,
    text:
      "Lynette is a VERY good English teacher. She helped my little girl master English. Caring, kind and patient — truly helpful.",
    avatarKey: null,
    source: "preply",
  },
  // 6
  {
    id: "r06",
    name: "Vova",
    dateLabel: "December 9, 2022",
    dateISO: "2022-12-09",
    rating: 5,
    text:
      "I love my classes with Lynette. She is attentive and friendly. Her gentle approach improved my communication skills — I really enjoy it.",
    avatarKey: null,
    source: "preply",
  },
  // 7
  {
    id: "r07",
    name: "Adam",
    dateLabel: "August 6, 2022",
    dateISO: "2022-08-06",
    rating: 5,
    text:
      "A very wise and good person, and at the same time a great teacher. Worth recommending — I highly recommend Lynette as an English teacher.",
    avatarKey: null,
    source: "preply",
  },
  // 8
  {
    id: "r08",
    name: "Fatma",
    dateLabel: "July 15, 2022",
    dateISO: "2022-07-15",
    rating: 5,
    text:
      "Lynette is a very good English teacher. Her lessons are easy and fun and make me feel comfortable speaking English.",
    avatarKey: null,
    source: "preply",
  },
  // 9
  {
    id: "r09",
    name: "Sergio",
    dateLabel: "June 26, 2022",
    dateISO: "2022-06-26",
    rating: 5,
    text:
      "Classes are enjoyable and instructive. Lynette ensures you grasp meaning, pronunciation and spelling. I totally recommend her lessons.",
    avatarKey: null,
    source: "preply",
  },
  // 10
  {
    id: "r10",
    name: "Maria Luisa",
    dateLabel: "June 10, 2022",
    dateISO: "2022-06-10",
    rating: 5,
    text:
      "It was a good lesson. Lynette is a good teacher. Unfortunately, the internet connection didn’t work well that day.",
    avatarKey: null,
    source: "preply",
  },
  // 11
  {
    id: "r11",
    name: "Esteban",
    dateLabel: "May 21, 2022",
    dateISO: "2022-05-21",
    rating: 5,
    text:
      "Not only a great instructor but also a wonderful human being — full of energy and empathy. She guides students with passion. One of the best.",
    avatarKey: null,
    source: "preply",
  },
  // 12
  {
    id: "r12",
    name: "Dmitry",
    dateLabel: "May 17, 2022",
    dateISO: "2022-05-17",
    rating: 5,
    text:
      "Extremely kind and polite tutor. She is careful about pronunciation and grammar, and our lessons include many different activities.",
    avatarKey: null,
    source: "preply",
  },
  // 13
  {
    id: "r13",
    name: "Iuliana",
    dateLabel: "April 15, 2022",
    dateISO: "2022-04-15",
    rating: 5,
    text:
      "It’s fun and relaxing — exactly what I needed!",
    avatarKey: null,
    source: "preply",
  },
  // 14
  {
    id: "r14",
    name: "Anna",
    dateLabel: "April 6, 2022",
    dateISO: "2022-04-06",
    rating: 5,
    text:
      "A very good teacher. She adjusts methods to the student’s needs and teaches pronunciation well :)",
    avatarKey: null,
    source: "preply",
  },
  // 15
  {
    id: "r15",
    name: "Klaus",
    dateLabel: "April 4, 2022",
    dateISO: "2022-04-04",
    rating: 5,
    text:
      "Lessons are well structured and she conveys content clearly. Extremely helpful — I also enjoy our discussions about music.",
    avatarKey: null,
    source: "preply",
  },
  // 16
  {
    id: "r16",
    name: "Wong",
    dateLabel: "April 3, 2022",
    dateISO: "2022-04-03",
    rating: 5,
    text:
      "A very good teacher. My Form 3 daughter can’t wait to reserve a class after today’s trial lesson 😄",
    avatarKey: null,
    source: "preply",
  },
  // 17
  {
    id: "r17",
    name: "Ambre",
    dateLabel: "March 23, 2022",
    dateISO: "2022-03-23",
    rating: 5,
    text: "Good teacher!",
    avatarKey: null,
    source: "preply",
  },
  // 18
  {
    id: "r18",
    name: "Erkan",
    dateLabel: "March 23, 2022",
    dateISO: "2022-03-23",
    rating: 5,
    text:
      "A great teacher and person — patient and attentive. Lessons are effective and fun; our conversations helped me a lot.",
    avatarKey: null,
    source: "preply",
  },
];

const messages = [
  [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
  ],
  [
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The harder you work for something, the greater you’ll feel when you achieve it. - Anonymous",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
  ],
  [
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Keep your eyes on the stars, and your feet on the ground. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  ],
  [
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don’t wait for opportunity. Create it. - Anonymous",
  ],
  [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  ],
  [
    "The secret of getting ahead is getting started. - Mark Twain",
    "You don’t have to be great to start, but you have to start to be great. - Zig Ziglar",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  ],
  [
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "We have cold beer like your EX’s heart. - Anonymous",
  ],
];

const randomMessages = (messages) => {
  const randomIndex = Math.floor(Math.random() * messages.length);

  return messages[randomIndex].join("\n\n");
};

const resultMessage = randomMessages(messages);
console.log(resultMessage);

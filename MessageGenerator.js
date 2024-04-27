// Daily affirmations
const dailyAffirmations = [
    'I am worthy of love and happiness.',
    'I trust the process of life.',
    'I deserve all good things the world has to offer.'
  ];
  
  // Function to generate a random daily affirmation
  const generateDailyAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * dailyAffirmations.length);
    return dailyAffirmations[randomIndex];
  }
  
  // Test the function
  console.log(generateDailyAffirmation());
  
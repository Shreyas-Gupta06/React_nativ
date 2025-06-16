// Helper to get last N days as labels
const getLastNDates = (n) => {
  const dates = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(d.toISOString().slice(0, 10)); // 'YYYY-MM-DD'
  }
  return dates;
};

// TEST DATA: Uncomment to use fake data for testing
// const stepData = getLastNDates(7).map(date => ({ date, steps: Math.floor(Math.random() * 10000) }));

// REAL DATA: Replace with your actual data fetching logic
const stepData = getLastNDates(7).map(date => {
  const found = realStepData.find(d => d.date === date);
  return { date, steps: found ? found.steps : 0 };
});

// ...existing code to render the graph using stepData...
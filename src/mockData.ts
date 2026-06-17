export const ticker = {
  symbol: "NVDA",
  company: "NVIDIA Corporation",
  price: 141.32,
  changePct: 2.14,
  marketCap: "3.48T",
  sector: "Technology",
};

export const technicalSignals = [
  { label: "Trend", value: "Bullish", score: 86 },
  { label: "Momentum", value: "Strong", score: 78 },
  { label: "Volatility", value: "Elevated", score: 64 },
  { label: "Risk", value: "Moderate", score: 45 },
];

export const priceSeries = [122, 125, 128, 126, 132, 135, 133, 138, 141, 139, 142, 145];

export const optionLevels = [
  { strike: 130, type: "put wall", exposure: 68 },
  { strike: 140, type: "gamma flip", exposure: 91 },
  { strike: 150, type: "call wall", exposure: 76 },
];

export const news = [
  {
    title: "AI infrastructure demand remains the core catalyst",
    tone: "Positive",
    summary: "Mock news summary showing how Stockalytics turns scattered catalysts into concise investor context.",
  },
  {
    title: "Valuation sensitivity rises after the recent rally",
    tone: "Watch",
    summary: "The platform flags valuation and volatility risks alongside bullish technical signals.",
  },
];


const PARTY_KEY = "partyCount";

const getPartyCount = () => {
  return Number(localStorage.getItem(PARTY_KEY) || "0");
};

const setPartyCount = (count: number) => {
  localStorage.setItem(PARTY_KEY, String(count));
};

const formatPartyId = (count: number) => {
  return `PTY-${String(count).padStart(3, "0")}`;
};

export const generateNextPartyId = () => {
  const nextCount = getPartyCount() + 1;

  return {
    count: nextCount,
    partyId: formatPartyId(nextCount),
  };
};

export const commitPartyId = (count: number) => {
  setPartyCount(count);
};

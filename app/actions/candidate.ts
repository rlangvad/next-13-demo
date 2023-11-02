import candidates from "../api/candidates.json";

const getCandidate = (id: string) => {
  const candidate = candidates.find((candidate) => candidate.id === id);

  return candidate;
};

export default getCandidate;

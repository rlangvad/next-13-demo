import { Candidate } from "@/types/Candidate";
import candidates from "../api/candidates.json";

const getCandidate = (id: string): Promise<Candidate> => {
  const candidate = candidates.find((candidate) => candidate.id === id);

  // Simulate an API call
  return new Promise((resolve, reject) => {
    if (candidate) {
      resolve(candidate);
    } else {
      reject("Candidate not found");
    }
  });
};

export default getCandidate;

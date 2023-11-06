import Image from "next/image";
import { Candidate } from "@/types/Candidate";
import { notFound } from "next/navigation";
import getCandidate from "@/app/actions/candidate";

const CandidatePage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `http://localhost:3000/api/candidate?id=${params.id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const candidate: Candidate = await res.json();

  // Uncomment to use server action instead
  // const candidate = await getCandidate(params.id);

  if (!candidate) {
    return notFound();
  }

  return (
    <div className="mt-20 flex flex-col items-center space-y-5">
      <div className="italic text-gray-500">Candidate details page</div>
      <h1 className="text-4xl font-semibold">
        {candidate.name.first} {candidate.name.last}
      </h1>
      <Image
        className="mb-1 mt-2 rounded-xl shadow-lg"
        alt={candidate.name.first}
        src={candidate.picture}
        width={300}
        height={300}
      />
    </div>
  );
};

export default CandidatePage;

import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Candidate } from "@/types/Candidate";

const CandidatesPage = async () => {
  const res = await fetch("http://localhost:3000/api/candidates?delay=1000");

  const data = await res.json();

  return (
    <section className="flex flex-col flex-wrap items-center space-y-4 md:flex-row md:gap-4 md:space-y-0">
      {data &&
        data.map((candidate: Candidate) => (
          <Link href={`/candidate/${candidate.id}`} key={candidate.name.first}>
            <Card className="w-[200px] bg-neutral-50 transition-all hover:shadow-lg">
              <CardContent className="flex flex-col items-center justify-center">
                <h3 className="pb-2 pt-4 font-semibold">
                  {candidate.name.first} {candidate.name.last}
                </h3>
                <Image
                  className="mb-1 mt-2 rounded-xl shadow-lg"
                  alt={candidate.name.first}
                  src={candidate.picture}
                  width={90}
                  height={90}
                />
              </CardContent>
            </Card>
          </Link>
        ))}
    </section>
  );
};

export default CandidatesPage;

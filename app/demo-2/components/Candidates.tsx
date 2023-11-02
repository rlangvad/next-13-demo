"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Candidate } from "@/types/Candidate";
import CandidatesSkeleton from "./CandidatesSkeleton";

const Candidate = () => {
  const [candidatesLoading, setCandidatesLoading] = useState(true);
  const [candidatesError, setCandidatesError] = useState<any>(null);
  const [candidates, setCandidates] = useState<Candidate[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const candidatesRes = await fetch(
          "http://localhost:3000/api/candidates",
        );
        const candidates = await candidatesRes.json();
        setCandidates(candidates);
      } catch (error) {
        setCandidatesError(error);
      } finally {
        setCandidatesLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Candidates in process</h2>
      <section className="flex flex-col flex-wrap items-center space-y-4 md:flex-row md:gap-4 md:space-y-0">
        {candidatesLoading && <CandidatesSkeleton />}

        {candidatesError && (
          <p className="text-red-400">Error loading candidates...</p>
        )}

        {candidates &&
          candidates.map((person: Candidate) => (
            <Link href="/" key={person.name.first}>
              <Card className="w-[200px] bg-neutral-50 transition-all hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center">
                  <h3 className="pb-2 pt-4 font-semibold">
                    {person.name.first} {person.name.last}
                  </h3>
                  <Image
                    className="mb-1 mt-2 rounded-xl shadow-lg"
                    alt={person.name.first}
                    src={person.picture.large}
                    width={90}
                    height={90}
                  />
                  <p className="pt-3 text-sm">{person.country}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
      </section>
    </>
  );
};

export default Candidate;

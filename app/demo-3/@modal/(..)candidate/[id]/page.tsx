"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Candidate } from "@/types/Candidate";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Candidate = ({ params }: { params: { id: string } }) => {
  const [open, setOpen] = useState(true);
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3000/api/candidate?id=${params.id}`,
      );

      const candidate: Candidate = await res.json();
      setCandidate(candidate);
    };

    fetchData();
  }, []);

  return (
    <>
      {candidate && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <div className="my-10 flex flex-col items-center space-y-5">
              <h1 className="mb-2 text-4xl font-semibold">
                {candidate.name.first} {candidate.name.last}
              </h1>
              <Image
                className="mb-1 mt-6 rounded-xl shadow-lg"
                alt={candidate.name.first}
                src={candidate.picture.large}
                width={300}
                height={300}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Candidate;

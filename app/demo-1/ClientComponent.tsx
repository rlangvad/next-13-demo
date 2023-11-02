"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DataItem } from "@/types/DataItem";
import { useEffect, useState } from "react";

const ClientComponent = () => {
  const [dataItem, setDataItem] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/data");
      const data = await res.json();

      setDataItem(data);
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col flex-wrap items-center space-y-4 md:flex-row md:gap-4 md:space-y-0">
      {dataItem &&
        dataItem.map((item: DataItem) => (
          <Card
            className="w-[200px] shadow hover:bg-green-100"
            key={item.title}
          >
            <CardContent className="flex flex-col items-center justify-center">
              <h3 className="pb-2 pt-4 font-semibold">{item.title}</h3>
              <p>{item.value}</p>
            </CardContent>
          </Card>
        ))}
    </section>
  );
};

export default ClientComponent;

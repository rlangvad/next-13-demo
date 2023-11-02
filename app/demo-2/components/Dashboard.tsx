"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DataItem } from "@/types/DataItem";
import DashboardSkeleton from "./DashboardSkeleton";

const Dashboard = () => {
  const [dataLoading, setDataLoading] = useState(true);
  const [dataError, setDataError] = useState<any>(null);
  const [data, setData] = useState<DataItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRes = await fetch("http://localhost:3000/api/data");
        const data = await dataRes.json();
        setData(data);
      } catch (error) {
        setDataError(error);
      } finally {
        setDataLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-14">
      <h2>Dashboard</h2>
      <section className="flex flex-col flex-wrap items-center space-y-4 md:flex-row md:gap-4 md:space-y-0">
        {dataLoading && <DashboardSkeleton />}
        {dataError && (
          <p className="text-red-400">Error loading dashboard data...</p>
        )}

        {data &&
          data.map((item: DataItem) => (
            <Card className="w-[200px] shadow" key={item.title}>
              <CardContent className="flex flex-col items-center justify-center">
                <h3 className="pb-2 pt-4 font-semibold">{item.title}</h3>
                <p>{item.value}</p>
              </CardContent>
            </Card>
          ))}
      </section>
    </div>
  );
};

export default Dashboard;

import { Card, CardContent } from "@/components/ui/card";
import { DataItem } from "@/types/DataItem";

const ServerComponent = async () => {
  const res = await fetch("http://localhost:3000/api/data?delay=5000");
  const data = await res.json();

  return (
    <section className="flex flex-col flex-wrap items-center space-y-4 md:flex-row md:gap-4 md:space-y-0">
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
  );
};

export default ServerComponent;

import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const StorySection = () => {
  return (
    <Card className="w-full rounded-xl bg-[linear-gradient(90deg,rgba(44,0,202,0.15)_0%,rgba(61,254,144,0.2)_100%)] border-0">
      <CardContent className="p-6 space-y-2">
        <p className="font-medium text-slate-900 text-lg leading-7">
          Cerify was born to fix this — starting with a simple question:
        </p>
        <p className="font-medium italic text-[#2c00ca] text-xl leading-7">
          &#34;What if auditing worked like HTTPS — seamless, fast, and
          universally trusted?&#34;
        </p>
      </CardContent>
    </Card>
  );
};

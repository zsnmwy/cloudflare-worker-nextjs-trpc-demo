'use client';

import { trpcClient } from "@/utils/trpc";
import { useState } from "react";

export default function Home() {
  const [str, setStr] = useState<string>("Click the test button");
  return (
    <main >
      <p>Please open the devtools get more info.</p>
      <p>{str}</p>
      <button onClick={async () => {
            console.log(`Trigger The Button`);

            const res = await trpcClient.healthcheck.query();
            const str = `The trpc res is: ${res}`
            console.log(str)
            setStr(str)
          }}>test</button>
    </main>
  );
}

"use client";

import { someDBAction } from "./actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="text-lg flex p-3 rounded-md bg-white shadow-white text-black"
        onClick={async () => {
          const data = await someDBAction();
          console.log(data);
          alert("Check console");
        }}
      >
        Perform Server Action
      </button>
    </main>
  );
}

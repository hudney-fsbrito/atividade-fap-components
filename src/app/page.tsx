"use client"
import { Button } from "./components/button";
import { ListItens } from "./components/listItens";
import { Square } from "./components/square";
import { Title } from "./components/title";

export default function Home() {
  return (
    <div className="flex flex-col grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Title title="Quadrado"/>
      <Square />
      <Button name="Click"></Button>
      <ListItens links={["Home", "About", "Contact"]} />
    </div>
  );
}

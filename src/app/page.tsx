"use client"
import { Button } from "./components/button";
import { ListItens } from "./components/listItens";
import { ImgLog } from "./components/logo";
import { Square } from "./components/square";
import  img  from "./assets/pexels-starWars.jpg"
import { Text } from "./components/text";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="flex flex-col grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />


      <Square />
      <Button name="Click"></Button>
      <ListItens links={["Home", "About", "Contact"]} />
      <ImgLog img={img}/>
      <Text text="Segue um texto bacana para um parágrafo."/>
    </div>
  );
}

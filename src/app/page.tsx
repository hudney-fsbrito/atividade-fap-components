"use client"
import { Button } from "./components/button";
import { ImgLog } from "./components/logo";
import { Square } from "./components/square";
import  img  from "./assets/pexels-starWars.jpg"
import { Text } from "./components/text";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="border border-gray-800 flex flex-col grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Square />
      <Button name="Click"></Button>
      <ImgLog img={img}/>
      <Text text="Segue um texto bacana para um parágrafo."/>
      <Footer desc={"Hudney Brito"}/>
    </div>
  );
}

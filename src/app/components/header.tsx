"use client"
import { Title } from "../components/title";
import { ListItens } from "./listItens";

export function Header() {
    return (
        <div className="w-full px-4 py-10 bg-black bg-opacity-20 flex justify-between items-center">
            <Title title="O Quadrado"/>
            <ListItens links={["Home", "About", "Contact"]} />
        </div>

    )
}
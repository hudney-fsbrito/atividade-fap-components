import Image from 'next/image'
// import  img  from "../assets/pexels-starWars.jpg"
export function ImgLog(image: {img:string}){
    return (
    <picture className='border border-cyan-700 max-w-40'>
        <Image 
            src={image.img} 
            alt="Imagem bacana"
            width={200}
            height={200}
        />
    </picture>
)
}
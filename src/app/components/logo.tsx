import Image from 'next/image'

export function ImgLog(image:string){
    return (
    <picture >
        {/* <img url={props.urlImg}></img> */}
        <Image 
            src={image} 
            alt="Imagem bacana"
            width={300}
            height={200}
        />
    </picture>
)
}
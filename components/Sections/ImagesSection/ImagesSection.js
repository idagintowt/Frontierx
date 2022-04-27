import Image from 'next/image'

export default function ImagesSection() {
  return <section className="pt-[2.688rem] bg-transparent">
    <span className="relative flex justify-center ">
      <span className="absolute -bottom-16 z-10 ml-4">
        <Image src="/image-rounded.png" alt="Rounded image" width={149} height={149}/>
      </span>
      <span>
        <Image src="/image-section.png" alt="Image" width={1399} height={264}/>
      </span>
    </span>
  </section>;
}

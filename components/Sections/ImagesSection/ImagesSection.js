import React from "react";
import Image from 'next/image'

export default function ImagesSection() {
  return <React.Fragment>
    <section className="pt-[2.688rem] flex justify-center">
      <span>
        <Image src="/image-section.png" alt="Image" width={1399} height={264}/>
      </span>
    </section>
    <section className="flex justify-center items-start h-0">
      <span className="-translate-y-[52%] w-[10%] max-w-[149px] ml-[0.5rem]">
        <Image src="/image-rounded.png" alt="Rounded image" width={149} height={149}/>
      </span>
    </section>
  </React.Fragment>
}

import Image from 'next/image'

type TypeAbout = {
  image: string
  subheading: string
  text: string
}

function CardAbout(props: TypeAbout) {
  const { image, subheading, text } = props
  return (
    <div className="mx-auto w-[320px] p-5">
      <div className="text-center">
        <Image
          src={image}
          alt="about"
          width={184}
          height={157}
          // layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="my-1 text-center text-xl font-bold text-[#008c8d] md:my-3 md:text-2xl">
        {subheading}
      </p>
      <p className="leading-7">{text}</p>
    </div>
  )
}

export default CardAbout

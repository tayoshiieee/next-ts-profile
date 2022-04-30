import Image from 'next/image'

type TypeValue = {
  image: string
  title: string
  children: string
}

function CardValue(props: TypeValue) {
  const { image, title, children } = props
  return (
    <div className="mx-auto px-5 py-5 md:w-[320px] md:py-0">
      <div className="text-center">
        <Image
          src={image}
          alt="value1"
          width={184}
          height={157}
          // layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="my-1 text-center text-lg font-bold text-[#384359] md:my-3">
        {title}
      </p>
      <p className="text-sm leading-7 md:text-base md:leading-7">{children}</p>
    </div>
  )
}

export default CardValue

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
      style={{
        background:'rgb(4,7,29)',
        backgroundColor: 'gradient...'
      }}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?:Number;
  img? : string ;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?:string
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      
      <div className={`${id===6} && ' flex flex-col justify-center h-full'`}>
        <div className=" w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover','object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id===5&& 'w-full opacity-80'} `}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn('w-full h-full object-cover object-center')}
               />
          )}
        </div>
        {id===6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight  text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
        </div>
        <div className={cn( titleClassName, `${id===1 && ' relative bottom-[4rem] left-[3rem] mt-[16rem] mr-[8rem] '}`,`${id===2 && ' relative bottom-[8rem] left-[2rem]'}`,`${id===3 && 'relative bottom-[4rem] left-7'}`,'font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-white')}>
          {title}
        </div>

      {id===2 && <GlobeDemo/>}
      {id===3 && (
        <div className=" flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
          <div className=" flex flex-col gap-3">
            {['React.js','Next.js','TypeScript'].map((item)=>(
              <div key={item} className=" py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center text-white bg-[#10132E]">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

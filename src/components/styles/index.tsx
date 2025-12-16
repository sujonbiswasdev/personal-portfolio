// import { props } from '@/ types/children'
import { CardProps } from '@/ types/children'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const Size_template = ({children,className}:CardProps) => {
  return  <div className={twMerge(clsx(`sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1200px] xl:max-w-[1400px] px-4 md:px-6 flex flex-col items-center justify-center mx-auto`,className))}>
      {children}
    </div>
  
}
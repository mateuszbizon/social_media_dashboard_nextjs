import React from 'react'
import Image from 'next/image'
import { SocialDataType } from '@/types'

type ViewsCardProps = {
    socialData: SocialDataType;
}

function ViewsCard({ socialData } : ViewsCardProps) {
  return (
    <div className='flex flex-col gap-6 card-width card-bg rounded-lg py-7 px-5'>
        <div className='flex justify-between items-center'>
            <span className='text-secondary-color font-bold'>{socialData.views.viewsType}</span>
            <Image src={socialData.icon} width={20} height={20} alt={socialData.altIcon} />
        </div>
        <div className='flex justify-between items-end'>
            <span className='text-main-color text-4xl font-bold'>{socialData.views.viewsAmount}</span>
            <div className='flex gap-1 items-center'>
                <Image
                    src={socialData.views.isIncreasing ? "/images/icon-up.svg" : "/images/icon-down.svg"}
                    width={12}
                    height={12}
                    alt={socialData.views.isIncreasing ? "arrow up icon" : "arrow down icon"}
                />
                <span className={socialData.views.isIncreasing ? 'text-lime-green' : 'text-bright-red'}>
                    {socialData.views.viewsProcent}%
                </span>
            </div>
        </div>
    </div>
  )
}

export default ViewsCard
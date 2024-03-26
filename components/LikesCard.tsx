import React from 'react'
import Image from 'next/image'
import { SocialDataType } from '@/types'

type LikesCardProps = {
    socialData: SocialDataType;
}

function LikesCard({ socialData } : LikesCardProps) {
  return (
    <div className='flex flex-col gap-6 card-width card-bg rounded-lg py-7 px-5'>
        <div className='flex justify-between items-center'>
            <span className='text-secondary-color dark:text-dark-secondary-color font-bold'>Likes</span>
            <Image src={socialData.icon} width={20} height={20} alt={socialData.altIcon} />
        </div>
        <div className='flex justify-between items-end'>
            <span className='text-main-color dark:text-dark-main-color text-4xl font-bold'>{socialData.likes.likesAmount}</span>
            <div className='flex gap-1 items-center'>
                <Image
                    src={socialData.likes.isIncreasing ? "/images/icon-up.svg" : "/images/icon-down.svg"}
                    width={12}
                    height={12}
                    alt={socialData.likes.isIncreasing ? "arrow up icon" : "arrow down icon"}
                />
                <span className={socialData.likes.isIncreasing ? 'text-lime-green' : 'text-bright-red'}>
                    {socialData.likes.likesProcent}%
                </span>
            </div>
        </div>
    </div>
  )
}

export default LikesCard
"use client"
import Image from 'next/image'
import Link from 'next/link'
import notFound from '/public/assets/404.svg'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter();
    return (
        <div className='w-[435px] absolute top-[50%] left-[50%] mr-[-50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-6 items-center not_found:w-dvw px-[15px] py-[0px] '>
            <Image src={notFound} alt='Page not found' priority width={150} height={150} />
            <div className="gap-3">
                <Text type='h2' className='mobile:text-[17px] text-[24px]' position='center'>Страница не найдена</Text>
                <Text type='p' className='mobile:text-[14px] text-[16px]' color='#B1B2B4' position='center'>Неправильно набран адрес <br /> или такой страницы не существует</Text>
            </div>
            <Button onClick={() => router.back()}>Вернуться</Button>
        </div>
    )
}

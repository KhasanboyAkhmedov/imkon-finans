import { useTranslations } from "next-intl";
import Image from "next/image";
import Call from '../../public/call.png'
import Message from '../../public/message.png'
import Carousel from '../[locale]/components/carousel'
import OurProducts from '../[locale]/components/ourproducts'
import Testomonial from '../[locale]/components/testomonial'
const Home = () => {
    const t = useTranslations("Home");

    return (
        <main className="min-h-screen md:ml-[15%] md:w-[85%]  w-full">
            <Carousel/>
            <section className="px-[20px] md:px-[70px]">
                <div className="flex flex-row justify-between items-center py-[70px] ">
                    <Image src={Call} alt={'call icon'} className="w-[50px] md:w-[70px] lg:w-[100px] h-[50px] md:h-[70px] lg:h-[100px]"/>
                    <p className="text-center text-2xl md:text-3xl ">
                    {t('consultation')}</p>
                    <Image src={Message} alt={'call icon'} className="w-[50px] md:w-[70px] lg:w-[100px] h-[50px] md:h-[70px] lg:h-[100px]"/>
                </div>
                <OurProducts/>
                <Testomonial/>
            </section>
        </main>
    )
}

export default Home;
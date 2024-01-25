import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Call from '../../public/call.png'
import Message from '../../public/message.png'
import Carousel from '../[locale]/components/carousel'
import OurProducts from '../[locale]/components/ourproducts'


const Home = () => {
    const t = useTranslations("Home");

    return (
        <main className="min-h-screen md:ml-[15%] md:w-[85%] mt-[80px] w-full px-[20px] md:px-[70px]">
            <section>
                <div className="flex flex-row justify-between items-center  ">
                    <Image src={Call} alt={'call icon'} className="w-[50px] md:w-[70px] lg:w-[100px] h-[50px] md:h-[70px] lg:h-[100px]"/>
                    <p className="text-center text-2xl md:text-3xl ">
                    {t('consultation')}</p>
                    <Image src={Message} alt={'call icon'} className="w-[50px] md:w-[70px] lg:w-[100px] h-[50px] md:h-[70px] lg:h-[100px]"/>
                </div>
                <OurProducts/>
                <Carousel/>
            </section>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center mb-16 lg:mb-24">
                <div className="pb-6 pt-4 lg:pt-0 text-center lg:text-left">
                    <p className="scroll-m-20 pb-2 text-xl lg:text-2xl font-semibold tracking-tight first:mt-0">Alisson Santos</p>
                    <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-5xl">{t("h1")}</h1>
                    <p className="leading-7 lg:text-lg py-4 max-w-sm">
                        {t("p")}
                    </p>
                </div>
            </div> */}
        </main>
    )
}

export default Home;
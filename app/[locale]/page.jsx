import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Home = () => {
    const t = useTranslations("Home");

    return (
        <main className="min-h-screen container mt-[80px] w-full mx-auto xl:max-w-7xl ">
            <section>
                <div className="flex flex-row justify-between items-center  ">
                    <Image src={'/call.png'} alt={'call icon'} width={100} height={100}/>
                    <p className="text-center text-2xl ">
                    {t('consultation')}</p>
                    <Image src={'/call.png'} alt={'call icon'} width={100} height={100}/>
                </div>
                <div className="flex flex-col justify-center pt-[70px]">
                    <h3 className="uppercase text-center text-3xl">наши Продукты</h3>
                    <div className="p-10 flex flex-row flex-wrap justify-around">
                        <div className="rounded m-3 flex h-[300px] w-[300px] bg-red-900 justify-center items-center">
                            Ishonch
                        </div>
                        <div className="rounded m-3 flex h-[300px] w-[300px] bg-red-900 justify-center items-center">
                            Sayohat
                        </div>
                        <div className="rounded m-3 flex h-[300px] w-[300px] bg-red-900 justify-center items-center">
                            Madad
                        </div>
                        <div className="rounded m-3 flex h-[300px] w-[300px] bg-red-900 justify-center items-center">
                            Ishonch
                        </div>
                        <div className="rounded m-3 flex h-[300px] w-[300px] bg-red-900 justify-center items-center">
                            Ishonch
                        </div>
                        <div className="rounded m-3 flex h-[300px] w-[300px] bg-red-900 justify-center items-center">
                            Sayohat
                        </div>
                        <div className="rounded m-3 flex h-[300px] w-[300px] bg-red-900 justify-center items-center">
                            Madad
                        </div>
                        <div className="rounded m-3 flex h-[300px] w-[300px] bg-red-900 justify-center items-center">
                            Ishonch
                        </div>
                        <div className="rounded m-3 flex h-[300px] w-[300px] bg-red-900 justify-center items-center">
                            Ishonch
                        </div>
                    </div>
                </div>

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
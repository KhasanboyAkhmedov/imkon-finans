import { useTranslations } from "next-intl";

const Home = () => {

    const t = useTranslations("Home");

    return (
        <main className="container mx-auto xl:max-w-7xl overflow-hidden py-14 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center mb-16 lg:mb-24">
                <div className="pb-6 pt-4 lg:pt-0 text-center lg:text-left">
                    <p className="scroll-m-20 pb-2 text-xl lg:text-2xl font-semibold tracking-tight first:mt-0">Alisson Santos</p>
                    <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-5xl">{t("h1")}</h1>
                    <p className="leading-7 lg:text-lg py-4 max-w-sm">
                        {t("p")}
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Home;
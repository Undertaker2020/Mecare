import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Card({colorCardBg, cardTitle, cardIcon, cardDescription, cardContentButton}) {
    return (
        <div className={`row-start-2 h-[312px] ${colorCardBg} rounded-2xl p-[31px_48px] flex flex-col gap-3`}>
            <div className="card-header flex justify-between items-center">
                <h5 className="text-h5 font-semibold text-neutral-700">{cardTitle}</h5>
                <div className="bg-white rounded-full p-[15px]">
                    <Image src={cardIcon} alt={cardIcon}/>
                </div>

            </div>
            <div className="card-body h-full flex flex-col justify-between">
                <p className="description text-body-xl font-normal text-neutral-600 w-[260px]">
                    {cardDescription}
                </p>
                <Button className="bg-neutral-900 flex gap-1 items-center justify-center h-12 font-medium text-base">
                    {cardContentButton}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2891 4.64517L16.6668 9.99982L11.2891 15.3554" stroke="white" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.6666 10H3.33325" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </Button>
            </div>
        </div>
    );
}

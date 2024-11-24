import Wrapper from "@/components/ui/Wrapper";
import GridTemplate from "@/components/ui/GridTemplate";

export default function Hero() {
    return (
        <Wrapper>
            <GridTemplate>
                <div className="w-full h-[513px] col-span-3 bg-gradient-to-bl from-[#64D3C2]  to-[#E1F0D7] rounded-2xl"></div>
                <div className="row-start-2 h-[312px] bg-primary-500 rounded-2xl"></div>
                <div className="row-start-2 h-[312px] bg-primary-500 rounded-2xl"></div>
                <div className="row-start-2 h-[312px] bg-primary-500 rounded-2xl"></div>
            </GridTemplate>
        </Wrapper>
    );
}

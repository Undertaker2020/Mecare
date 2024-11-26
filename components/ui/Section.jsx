import Wrapper from "@/components/ui/Wrapper";

function Section({title, description, children, noWrapperContent}) {
    return (
        <section>
            <Wrapper>
                <h1 className="text-center">{title}</h1>
                <p className="text-center">{description}</p>
                {children}
            </Wrapper>
            {noWrapperContent || null}
        </section>
    );
}

export default Section;
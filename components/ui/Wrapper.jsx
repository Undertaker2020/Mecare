export default function Wrapper({children, className}) {
    return (
        <div className={`w-[1408px] ${className}`}>
            {children}
        </div>
    );
}
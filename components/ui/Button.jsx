export default function Button({children, className, onClick}) {
    return (
        <button className={`rounded-full font-bold text-white ${className} cursor-pointer`} >
            {children}
        </button>
    );
}
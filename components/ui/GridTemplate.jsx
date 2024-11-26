export default function GridTemplate({children}) {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-10">
            {children}
        </div>
    );
}

export const Feature = ({title,subtitle}: {
    title: string,
    subtitle : string
}) => {
    return <div className="flex pl-8 ">
        <Check />
        <div className="pl-2 font-bold text-sm">
            {title}
        </div>
        <div className="pl-2 text-sm">
            {subtitle}
        </div>
    </div>
}


const Check = () =>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    );
}
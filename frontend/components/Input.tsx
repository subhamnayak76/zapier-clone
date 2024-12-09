export const Input = ({label,placeholder,onChange,type="text"} : {
    label: string,
    placeholder : string,
    onChange : () => void;
    type? : 'text' | 'password'
}) => {
    return <div>
        <input type={type} placeholder={placeholder} onChange={onChange}></input>
    </div>
}
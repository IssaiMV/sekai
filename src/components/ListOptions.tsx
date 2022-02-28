import { Option } from "../interface/Option";

export default function ListOptions({ options = [] }) {
    return (
        <>
            {options.map((option: Option) => (<option key={'op' + option.code} value={option.code}>{option.name}</option>))}
        </>
    );
}
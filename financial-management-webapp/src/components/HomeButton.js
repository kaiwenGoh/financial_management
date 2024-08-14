import { useNavigate } from 'react-router-dom';

function Button({ value }) {
    const navigate = useNavigate();
    function handleClick() {
        const [fp, sp] = value.split(" ");
        navigate(`/${fp+sp}`);
    }
    return <button className = "bg-white border border-gray-300 p-8 rounded-lg shadow-md w-full sm:max-w-md " onClick={handleClick}>{value}</button>;
  }


export default Button

import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>About</h1>
            <button
                className="mt-4 ml-4 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none active:scale-[0.99]"
                onClick={() => navigate('/welcome')}
            >
                Welcome 페이지로 이동
            </button>
        </div>
    );
}

export default About;

import { useNavigate } from "react-router-dom";
import Button from "../components/reusable/Button";

const NoData = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center flex-col h-screen w-full gap-3">
      <i className="fa-solid fa-face-frown text-gray-500 text-[5rem]"></i>
      <span className="text-gray-700 text-3xl font-light">No Data Loaded</span>
      <span
        onClick={() => navigate("/")}
        className="underline text-gray-700 hover:text-gray-800 cursor-pointer"
      >
        Go Back To Upload Page
      </span>
    </section>
  );
};

export default NoData;

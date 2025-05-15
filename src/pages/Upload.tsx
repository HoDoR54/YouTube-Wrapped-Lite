import { useSelector } from "react-redux";
import Button from "../components/reusable/Button";
import JsonUploader from "../components/JsonUploader";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
  const { file } = useSelector((state: RootState) => state.currentFile);

  return (
    <section className="flex flex-col p-5 gap-2 items-center justify-center min-h-screen min-w-screen">
      <div className="w-[300px] max-w-xs flex flex-col gap-2 items-center justify-center">
        <h1 className="font-bold text-2xl py-3 text-gray-600">
          YouTube Wrapped Lite
        </h1>
        <JsonUploader />
        <Button
          text="See Statistics"
          additionalStyling={`w-full`}
          onClick={() => {
            navigate("/results");
          }}
          isPrimary={true}
          isDisabled={!file}
        />
      </div>
    </section>
  );
};

export default Upload;

import { setCurrentFile } from "../redux/slices/currentFile";
import type { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const JsonUploader = () => {
  const dispatch = useDispatch();
  const { file } = useSelector((state: RootState) => state.currentFile);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    dispatch(setCurrentFile(file));
  };

  return (
    <div
      className={`w-full aspect-square relative hover:brightness-90 rounded-xl bg-gray-200 border-2 text-gray-600 border-gray-700 border-dashed flex flex-col items-center justify-center`}
    >
      <input
        type="file"
        accept=".json"
        className="absolute w-full h-full opacity-0 cursor-pointer"
        onChange={handleFileChange}
      ></input>
      <div className="flex flex-col gap-2 items-center justify-center">
        <i className="fa-regular fa-file fa-3x" />
        {file ? file.name : "Upload JSON File"}
      </div>
    </div>
  );
};

export default JsonUploader;

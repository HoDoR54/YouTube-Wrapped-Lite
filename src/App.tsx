import { Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";
import Results from "./pages/Results";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { setCurrentData } from "./redux/slices/currentJsonData";
import NoData from "./pages/NoData";

const App = () => {
  const dispatch = useDispatch();
  const { file } = useSelector((state: RootState) => state.currentFile);
  const { dataArray } = useSelector(
    (state: RootState) => state.currentJsonData
  );

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string);
        const times = parsed.map((vid: any) =>
          typeof vid.time === "string" ? new Date(vid.time).getTime() : vid.time
        );

        const latestTime = Math.max(...times);
        const oneYearAgo = latestTime - 365 * 24 * 3600 * 1000;

        const filtered = parsed.filter((vid: any) => {
          const time =
            typeof vid.time === "string"
              ? new Date(vid.time).getTime()
              : vid.time;
          return time >= oneYearAgo;
        });
        dispatch(setCurrentData(filtered));
      } catch (err) {
        console.error("Invalid JSON file:", err);
      }
    };

    reader.readAsText(file);
  }, [file]);

  return (
    <Routes>
      <Route path="/" element={<Upload />} />
      <Route path="/results" element={<Results jsonData={dataArray} />} />
      <Route path="/noData" element={<NoData />} />
    </Routes>
  );
};

export default App;

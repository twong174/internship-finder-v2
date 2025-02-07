import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";

const WelcomePage = () => {
  const [keywords, setKeywords] = useState("");
  const [internshipData, setInternshipData] = useState([]);
  const [dateRange, setDateRange] = useState(7);

  const getInternshipData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getData", {
        params: { query: keywords },
      });
      setInternshipData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-full flex flex-col gap-2 p-6">
      <div className="  font-bold text-9xl p-2">SOKUDO</div>
      <div className="  w-1/2 text-2xl font-light p-4">
        FIND YOUR DREAM INTERNSHIP 50% FASTER!
      </div>
      <div className="border w-fit rounded-md m-4">
        <input
          className=" p-2 focus:outline-none"
          placeholder="Enter key terms"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getInternshipData()}
        />
        <SearchIcon onClick={getInternshipData} />
      </div>

      <div className="h-full flex flex-col justify-center items-center">
        {internshipData.length > 0 ? (
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl">Results</h1>
              <div className="flex gap-2">
                <button className="cursor-pointer border p-1 rounded-md">
                  24 Hours
                </button>
                <button className="cursor-pointer border p-1 rounded-md">
                  3 Days
                </button>
                <button className="cursor-pointer border p-1 rounded-md">
                  7 Days
                </button>
                <button className="cursor-pointer border p-1 rounded-md">
                  <DownloadIcon />
                </button>
              </div>
            </div>

            {internshipData.map((job, index) => (
              <div className="border p-2" key={index}>
                <h2 className="font-medium text-lg">{job.title}</h2>
                <a
                  href={job.link}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  {job.link}
                </a>
                <p>{job.snippet}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="">
            <p>¯\_(ツ)_/¯ Enter keywords to start!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;

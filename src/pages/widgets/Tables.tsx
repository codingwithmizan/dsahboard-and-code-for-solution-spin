import axios from "axios";
import { useState, useEffect } from "react";
import { RiFilterFill } from "react-icons/ri";
import TableItem from "../../components/TableItem";

const Tables = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/tableData").then((res) => {
      setTableData(res.data);
    });
  }, []);

  return (
    <div className="text-2xl">
      <div className="bg-white  sticky top-20 py-2">
        <ul className="flex space-x-4">
          <li>
            <h4 className="text-4xl pl-3 lg:pl-3">Tables</h4>
          </li>
          <li>
            <button className="bg-gray-100 text-gray-500 px-3 py-1 rounded">
              <RiFilterFill className="inline-block pr-1" size={20} />
              <span>Filter</span>
            </button>
          </li>
          <li>
            <button className="bg-sky-400 text-white px-4 py-1 rounded">
              Create
            </button>
          </li>
        </ul>
      </div>
      <div className="mx-6 grid xl:grid-cols-2 gap-8">
        {tableData.length > 0 ? (
          <>
            {tableData?.map((tblData) => (
              <TableItem tableData={tblData} />
            ))}
          </>
        ) : (
          <div className="mt-4  bg-white p-6">
            <h2 className="text-4xl text-red-700 font-semibold">No Table data found</h2>
            <p className="text-sky-600">
              Please open a terminal and run following command(npx json-server
              --watch data.json --port 8000)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tables;

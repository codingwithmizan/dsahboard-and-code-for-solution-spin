import { FC } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { FaTelegram, FaKickstarterK } from "react-icons/fa";
import {
  SiMicrosoftbing,
  SiVimeo,
  SiKickstarter,
  SiPelican,
} from "react-icons/si";

interface TableItemProps {
  tableData: any;
}
const TableItem: FC<TableItemProps> = ({ tableData }) => {
  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return <SiPelican className="table-icon text-red-600" />;
      case 2:
        return <FaTelegram className="table-icon text-sky-500" />;
      case 3:
        return <SiVimeo className="table-icon text-sky-500" />;
      case 4:
        return <SiMicrosoftbing className="table-icon text-red-600" />;
      case 5:
        return <FaKickstarterK className="table-icon text-emerald-400" />;
      default:
        return;
    }
  };
  return (
    <div className="bg-white  rounded p-6">
      <div className="flex justify-between mb-2">
        <div>
          <h4 className="text-3xl sm:text-4xl text-gray-600">{tableData.heading}</h4>
          <p className="text-gray-400 -mt-3">{tableData.subheading}</p>
        </div>
        {tableData.name === "tasksOverview" && (
          <div className="mr-8">
            <MdOutlineDashboardCustomize className="text-sky-300" />
          </div>
        )}
      </div>
      <table className="table-auto w-full">
        <tbody>
          {tableData.data.map((item: any, i:number) => (
            <tr key={i}>
              <td>{getIcon(item.id)}</td>
              <td className=' text-center'>
                <h4 className="sm:text-3xl text-gray-600  ">{item.title}</h4>
                <p className="text-gray-400 -mt-3 text-xl sm:text-2xl">{item.subtitle}</p>
              </td>
              {item?.complete ? (
                <td className=" hidden xs:block w-20 sm:w-32">
                  <div className="mb-1 text-2xl font-medium text-gray-400">
                    {item.complete}%
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-sky-500 h-2 rounded-full -mt-1.5"
                      style={{ width: `${item.complete}%` }}
                    ></div>
                  </div>
                </td>
              ) : (
                <>
                  <td className=" hidden xs:block relative top-5">
                    {item?.technology?.map((tech: string, index: number) => (
                      <span
                      key={index}
                        className={` px-1 sx:px-2 text-sm xs:text-base rounded -mt-2 ${
                          index === 0
                            ? "bg-red-100 text-red-600 mr-2"
                            : "bg-purple-100 text-purple-500"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </td>
                  <td className="text-gray-400 text-lg sm:text-2xl"> {item.users} users</td>
                </>
              )}

              <td>
                <FiArrowRight
                  className="bg-slate-100 text-gray-400 py-1 sm:py-2 rounded ml-auto text-2xl sm:text-4xl"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;

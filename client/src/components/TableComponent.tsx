import React from "react";

const TableComponent = ({
  head,
  content,
  title,
  classname
}: {
  head: string[];
  content: any[];
  title:string,
  classname:string
}) => {
  return (
    <div>
      
      <h3 className={classname}>{title}</h3>

      <div className="overflow-x-auto mt-3 max-h-[600px] overflow-scroll">
        <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              {head.map((item, index) => (
                <th
                  key={`head_${index}`}
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-700"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {content.map((itemx, indexx) => (
              <tr
                key={`content_${indexx}`}
                className="hover:bg-gray-50 transition"
              >
                {itemx.map(
                  (
                    tm:
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | React.ReactPortal
                          | React.ReactElement<
                              unknown,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined,
                  ) => (
                    <td className="px-6 py-4 text-sm text-gray-800">{tm}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;

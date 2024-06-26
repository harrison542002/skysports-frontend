"use client";
import React from "react";

type Props = {
  table_title: string;
  dataFormat: { heading: string; key: string }[];
  id_property: string;
  data: any;
  rowLink?: boolean;
};
const TableRowStyle = ({ data }: { data: string | number }) => {
  return (
    <td className="border-b border-slate-600 p-2 group-hover:bg-slate-200">
      {data}
    </td>
  );
};

const TableHeaderStyle = ({ data }: { data: string }) => {
  return <th className="border-b border-slate-600 p-2 text-left">{data}</th>;
};

const TableLayout = (props: Props) => {
  return (
    <>
      <h4 className="py-3 text-center bg-[#002672] text-white text-lg">
        {props.table_title}
      </h4>
      {Number(props.data.length) > 0 ? (
        <div className="overflow-x-auto">
          <table className="border-collapse border-b border-slate-500 w-full shadow-md">
            <thead className="p-5">
              <tr className="p-5 bg-slate-100">
                {props.dataFormat.map((elem) => (
                  <TableHeaderStyle data={elem.heading} key={elem.heading} />
                ))}
              </tr>
            </thead>
            <tbody>
              {props.data.map((res: any, index: number) => (
                <tr
                  key={res[props.id_property]}
                  className={`${
                    props.rowLink && "hover:bg-slate-200 cursor-pointer"
                  }`}
                  onClick={(e) => {
                    if (props.rowLink) {
                      window.open(
                        `https://www.skysports.com${res["detail_url"]}`,
                        "_blank"
                      );
                    }
                  }}
                >
                  {props.dataFormat.map((elem) => {
                    if (elem.key === "#") {
                      return (
                        <TableRowStyle data={index + 1} key={res[elem.key]} />
                      );
                    } else {
                      return (
                        <TableRowStyle
                          data={res[elem.key]}
                          key={res[elem.key]}
                        />
                      );
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>No Data Existed for this category.</h1>
      )}
    </>
  );
};

export default TableLayout;

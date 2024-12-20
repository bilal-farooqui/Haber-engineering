import React from "react";
import MUIDataTable from "mui-datatables";

const MUITable = ({ columns, data, title }) => {
  const options = {
    filterType: "checkbox",
  };

  return (
    <MUIDataTable
      title={title}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default MUITable;

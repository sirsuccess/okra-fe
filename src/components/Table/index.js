import { Table, Button, Space } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import JSONData from "../../assets/data/recommendations-michael.json";

const TableComponent = () => {
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
    },
    {
      title: "Priority",
      dataIndex: "Priority",
      key: "Priority",
      filters: [
        { text: "Low", value: "Low" },
        { text: "Mid", value: "Mid" },
        { text: "High", value: "High" },
      ],
      filteredValue: filteredInfo.Priority || null,
      onFilter: (value, record) => record.Priority.includes(value),
      ellipsis: true,
    },
    {
      title: "Contact",
      dataIndex: "Contact",
      key: "Contact",
    },
    {
      title: "Postcode",
      dataIndex: "Postcode",
      key: "Postcode",
    },
    {
      title: "Messaging",
      dataIndex: "Messaging",
      key: "Messaging",
      filters: [
        { text: "Email", value: "Email" },
        { text: "Call", value: "Call" },
        { text: "Meeting", value: "Meeting" },
      ],
      filteredValue: filteredInfo.Messaging || null,
      onFilter: (value, record) => record.Messaging.includes(value),
      ellipsis: true,
    },
    {
      title: "Suggestion",
      dataIndex: "Suggestion",
      key: "Suggestion",
    },
    {
      title: "Reason",
      dataIndex: "Reason",
      key: "Reason",
    },
    {
      title: "Target",
      dataIndex: "Target",
      key: "Target",
      filters: [
        { text: "No", value: "No" },
        { text: "Yes", value: "yes" },
      ],
      filteredValue: filteredInfo.Target || null,
      onFilter: (value, record) => record.Target.includes(value),
      ellipsis: true,
    },
    {
      title: "Access",
      dataIndex: "Access",
      key: "Access",
      filters: [
        { text: "Easy", value: "easy" },
        { text: "Mid", value: "mid" },
        { text: "Hard", value: "hard" },
      ],
      filteredValue: filteredInfo.Access || null,
      onFilter: (value, record) => record.Access.includes(value),
      ellipsis: true,
    },
    {
      title: "Potential revenue",
      dataIndex: "Potential revenue",
      key: "Potential revenue",
      sorter: (a, b) => a["Potential revenue"] - b["Potential revenue"],
      sortOrder:
        sortedInfo.columnKey === "Potential revenue" && sortedInfo.order,
      ellipsis: true,
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={JSONData} onChange={handleChange} />
    </>
  );
};

export default TableComponent;

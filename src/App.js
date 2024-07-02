import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Input, Space, Table } from "antd";
import getApiData from "./api/getApiData";
import { getSearchedData } from "./util/getSearchedData";

const App = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address, _, key) => {
        return (
          <a
            rel="noreferrer"
            key={key}
            href={`https://maps.google.com/?q=${address.geo.lat},${address.geo.lng}`}
            target="_blank"
          >
            {address.street}, <br />
            {address.suite}, <br />
            {address.city}, <br />
            {address.zipcode}, <br />
          </a>
        );
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
      render: (website) => {
        return (
          <a href={"https://" + website} target="_blank" rel="noreferrer">
            {website}
          </a>
        );
      },
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      render: (company) => {
        return (
          <>
            <h4>{company.name},</h4>
            {company.catchPhrase},
            <br />
            {company.bs}
          </>
        );
      },
    },
    {
      title: "Action",
      render: (_, data, key) => {
        return (
          <Button
            type="primary"
            style={{ background: "red" }}
            onClick={handleDelete.bind(this, data.id)}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    const NewData = dataSource.filter((ele) => ele.id !== id);
    setDataSource(NewData);
  };

  const fetchUserData = async () => {
    const ActualData = await getApiData();
    const data = await getSearchedData(ActualData, search);
    setDataSource(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetchUserData();
    }, 1000);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <Space>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your Query"
        />
        <Button disabled={loading} onClick={() => setSearch("")}>
          Reset
        </Button>
      </Space>
      <Table
        scroll={{ x: 300, y: 800 }}
        dataSource={dataSource}
        columns={columns}
        loading={loading}
        pagination={false}
      />
    </>
  );
};

export default App;
// 1.get the data from below url
// https://jsonplaceholder.typicode.com/users
// 2. Display a table with basic data from this api
// 3. Add a input to Search name and apply debouncing here.
// 4. Add a reset button which will reset the data in table to initial data.
// 5. Add delete option in each row which should delete respective row when clicked

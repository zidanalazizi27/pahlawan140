import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import { EditIcon } from "../../components/Icon/EditIcon";
import { DeleteIcon } from "../../components/Icon/DeleteIcon";
import { EyeIcon } from "../../components/Icon/EyeIcon";
import { Form, Input, Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const columns = [
  { name: "Urutan", uid: "urut" },
  { name: "Nama Menu", uid: "nama_menu" },
  { name: "Sub Menu", uid: "status" },
  { name: "Aksi", uid: "aksi" },
];

const data_menu = [
  {
    id: 1,
    urut: "1",
    nama_menu: "Beranda",
    status: "Iya",
  },
  {
    id: 2,
    urut: "2",
    nama_menu: "Teman Luki",
    status: "Tidak",
  },
  {
    id: 3,
    urut: "3",
    nama_menu: "Ruang Baca",
    status: "Tidak",
  },
  {
    id: 4,
    urut: "4",
    nama_menu: "Aduan",
    status: "Tidak",
  },
];

const statusColorMap = {
  Iya: "success",
  Tidak: "danger",
};

function Menu() {
  const [errors, setErrors] = useState({});

  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "nama_menu":
        return <p className="text-bold text-sm text-center">{cellValue}</p>;
      case "status":
        return (
          <Chip
            className="capitalize text-center"
            color={statusColorMap[cellValue]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "aksi":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Detail">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="primary" content="Edit">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Hapus">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return <p className="text-sm text-center">{cellValue}</p>;
    }
  }, []);

  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const buttonItemLayout = {
    wrapperCol: {
      span: 14,
      offset: 4,
    },
  };

  return (
    <AdminLayout>
      <div className="bg-grayCustom min-h-screen p-10 mt-0 mx-auto">
        <h5 className="text-base text-pdarkblue font-semibold">
          Admin > Pahlawan140 > Menu Navbar
        </h5>
        <div className="mt-5 bg-white rounded-2xl p-5">
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold text-pdarkblue">
              Tambah Menu
            </h2>
          </div>
          <Form
            {...formItemLayout}
            layout="horizontal"
            style={{
              width: '100%',
            }}
          >
            <Form.Item label="Nama Menu">
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="Link">
              <Input placeholder="" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              {/* Flexbox container for Submenu and buttons */}
              <div className="flex items-center justify-end">
                <h7 className="text-lg font-semibold text-pdarkblue">Submenu:</h7>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<MinusOutlined />}
                  style={{ marginLeft: 8 }}
                />
                <Button
                  type="primary"
                  shape="circle"
                  icon={<PlusOutlined />}
                  style={{ marginLeft: 8 }}
                />
                <Button
                  type="primary"
                  style={{ marginLeft: 20 }}
                >
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>

        <div className="mt-5 flex">
          <Table aria-label="Menu table with custom cells" shadow="none">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid} align="center">
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={data_menu}>
              {(item) => (
                <TableRow key={item.id} className="text-center">
                  {(columnKey) => (
                    <TableCell className="text-center">
                      {renderCell(item, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Menu;

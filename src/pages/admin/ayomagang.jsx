import React, { useState, useCallback } from "react";
import AdminLayout from "../layout/AdminLayout";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Button as NextUIButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Chip,
} from "@nextui-org/react";
import { EditIcon } from "../../components/Icon/EditIcon";
import { DeleteIcon } from "../../components/Icon/DeleteIcon";
import { EyeIcon } from "../../components/Icon/EyeIcon";
import { Form, Input, Select, Upload, Button } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";
const monthFormat = "YYYY/MM";

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ["DD-MM-YYYY"];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
  `${dayjs(value).startOf("week").format(weekFormat)} ~ ${dayjs(value)
    .endOf("week")
    .format(weekFormat)}`;

const uploadProps = {
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: "1",
      name: "xxx.png",
      size: 1234567,
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "http://www.baidu.com/xxx.png",
    },
    {
      uid: "2",
      name: "yyy.png",
      size: 1234567,
      status: "done",
      url: "http://www.baidu.com/yyy.png",
    },
  ],
  showUploadList: {
    extra: ({ size = 0 }) => (
      <span style={{ color: "#cccccc" }}>
        ({(size / 1024 / 1024).toFixed(2)}MB)
      </span>
    ),
    showDownloadIcon: true,
    downloadIcon: "Download",
    showRemoveIcon: true,
    removeIcon: (
      <DeleteIcon
        onClick={(e) => console.log(e, "custom removeIcon event")}
      />
    ),
  },
};

const columns = [
  { name: "No", uid: "id_am" },
  { name: "Nama", uid: "nama_am" },
  { name: "Perguruan Tinggi", uid: "pt_am" },
  { name: "Program Studi", uid: "prodi_am" },
  { name: "Status", uid: "status_am" },
  { name: "Aksi", uid: "aksi_am" }, // Add action column
];

const statusColorMap = {
  Diterima: "success",
  Menunggu: "warning",
  Ditolak: "danger",
};

const data_am = [
  {
    id_am: 1,
    nama_am: "Rahadian Eka Pambayun",
    pt_am: "UNAIR",
    prodi_am: "Statistika",
    status_am: "Diterima",
  },
  {
    id_am: 2,
    nama_am: "Ilzamuddin Armain",
    pt_am: "UNAIR",
    prodi_am: "Fisika",
    status_am: "Menunggu",
  },
  {
    id_am: 3,
    nama_am: "Ayfa Hamda",
    pt_am: "Univesitas Brawijaya",
    prodi_am: "Teknik Mesin",
    status_am: "Menunggu",
  },
  {
    id_am: 4,
    nama_am: "Ryan Abdullah",
    pt_am: "Univesitas NU Sidoarjo",
    prodi_am: "Sastra Indonesia",
    status_am: "Ditolak",
  },
  {
    id_am: 5,
    nama_am: "Rahmad Sinaga",
    pt_am: "Univesitas Muhammadiyah Sidoarjo",
    prodi_am: "Informatika",
    status_am: "Diterima",
  },
];

const AyoMg = () => {
  const [modalActionAM, setModalActionAM] = useState(null);
  const [selectedItemAM, setSelectedItemAM] = useState(null);
  const [fileList, setFileList] = useState([]); // For upload file management

  const {
    isOpen: isOpenAM,
    onOpen: onOpenAM,
    onOpenChange: onOpenChangeAM,
  } = useDisclosure();

  const openModalAM = (action, item) => {
    setModalActionAM(action);
    setSelectedItemAM(item);
    onOpenAM();
  };

  const handlePreview = async (file) => {
    // Handle preview logic
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = <NextUIButton>Upload</NextUIButton>; // Upload button placeholder

  const renderCellAM = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "nama_am":
        return <p className="text-bold text-sm text-center">{cellValue}</p>;
      case "pt_am":
        return <p className="text-bold text-sm text-center">{cellValue}</p>;
      case "prodi_am":
        return <p className="text-bold text-sm text-center">{cellValue}</p>;
      case "status_am":
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
      case "aksi_am":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Detail">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalAM("view", item)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="primary" content="Edit">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalAM("edit", item)}
              >
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
      span: 20,
    },
  };

  return (
    <AdminLayout>
      <div className="bg-grayCustom min-h-screen p-10 mt-0 mx-auto">
        <h6 className="text-sm font-semibold text-pdarkblue">
          Admin > AyoMagang
        </h6>
        <div className="mt-5 flex flex-col md:flex-row bg-white rounded-2xl p-10 justify-between space-y-5 md:space-y-0">
          <div className="w-full flex justify-center items-center flex-col">
            <h2 className="text-lg font-semibold text-pdarkblue mb-4">
              Daftar Peserta Magang
            </h2>

            <NextUIButton
              size="sm"
              color="primary"
              onPress={() => openModalAM("add", null)} // Open modal to add new item
            >
              Tambah <PlusOutlined />
            </NextUIButton>

            <Modal
              size="3xl"
              backdrop="opaque"
              isOpen={isOpenAM}
              onOpenChange={onOpenChangeAM}
              classNames={{
                backdrop: "transparent",
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col items-center font-semibold text-pdarkblue">
                      {modalActionAM === "view"
                        ? "Detail Identitas Peserta Magang"
                        : "Form Identitas Peserta Magang"}
                    </ModalHeader>
                    <ModalBody>
                      <Form
                        layout="horizontal"
                        labelAlign="left"
                        style={{ width: "100%" }}
                        labelCol={{ span: 5 }} // Lebar label
                        wrapperCol={{ span: 20 }} // Lebar input field
                      >
                        {/* 'No' Field */}
                        <Form.Item label="No" style={{ marginBottom: "20px" }}>
                          <Input
                            placeholder=""
                            defaultValue={selectedItemAM?.id_am}
                            disabled={modalActionAM === "view"}
                          />
                        </Form.Item>

                        {/* 'Nama' Field */}
                        <Form.Item
                          label="Nama"
                          style={{ marginBottom: "20px" }}
                        >
                          <Input
                            placeholder=""
                            defaultValue={selectedItemAM?.nama_am}
                            disabled={modalActionAM === "view"}
                          />
                        </Form.Item>

                        {/* 'Perguruan Tinggi' Field */}
                        <Form.Item
                          label="Perguruan Tinggi"
                          style={{ marginBottom: "20px" }}
                        >
                          <Input
                            placeholder=""
                            defaultValue={selectedItemAM?.pt_am}
                            disabled={modalActionAM === "view"}
                          />
                        </Form.Item>

                        {/* 'Program Studi' Field */}
                        <Form.Item
                          label="Program Studi"
                          style={{ marginBottom: "20px" }}
                        >
                          <Input
                            placeholder=""
                            defaultValue={selectedItemAM?.prodi_am}
                            disabled={modalActionAM === "view"}
                          />
                        </Form.Item>

                        {/* Email & Telp in the same row */}
                        <Form.Item
                          label="Email"
                          style={{ marginBottom: "20px" }}
                        >
                          <div style={{ display: "flex", gap: "16px" }}>
                            <Form.Item style={{ flex: 1, marginBottom: 0 }}>
                              <Input
                                placeholder=""
                                defaultValue={selectedItemAM?.email_am}
                                disabled={modalActionAM === "view"}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Telp"
                              style={{ flex: 1, marginBottom: 0 }}
                            >
                              <Input
                                placeholder=""
                                defaultValue={selectedItemAM?.telp_am}
                                disabled={modalActionAM === "view"}
                              />
                            </Form.Item>
                          </div>
                        </Form.Item>

                        {/* Periode Waktu */}
                        <Form.Item
                          label="Periode Waktu"
                          style={{ marginBottom: "20px" }}
                        >
                          <Space
                            direction="vertical"
                            size={12}
                            style={{ width: "100%" }}
                          >
                            <RangePicker
                              format={dateFormat}
                              style={{ width: "100%" }}
                            />
                          </Space>
                        </Form.Item>

                        {/* 'Status' Field */}
                        <Form.Item
                          label="Status"
                          style={{ marginBottom: "20px" }}
                        >
                          <Select
                            defaultValue={selectedItemAM?.status_am}
                            disabled={modalActionAM === "view"}
                            options={[
                              {
                                label: (
                                  <span
                                    className={`text-${statusColorMap["Menunggu"]} bg-${statusColorMap["Menunggu"]}-100 p-1 rounded`}
                                  >
                                    Menunggu
                                  </span>
                                ),
                                value: "menunggu",
                              },
                              {
                                label: (
                                  <span
                                    className={`text-${statusColorMap["Ditolak"]} bg-${statusColorMap["Ditolak"]}-100 p-1 rounded`}
                                  >
                                    Ditolak
                                  </span>
                                ),
                                value: "ditolak",
                              },
                              {
                                label: (
                                  <span
                                    className={`text-${statusColorMap["Diterima"]} bg-${statusColorMap["Diterima"]}-100 p-1 rounded`}
                                  >
                                    Diterima
                                  </span>
                                ),
                                value: "diterima",
                              },
                            ]}
                          />
                        </Form.Item>

                        {/* 'Dokumen Terlampir' Field */}
                        <Form.Item
                          label="Dokumen Terlampir"
                          style={{ marginBottom: "20px" }}
                        >
                          <Upload {...uploadProps}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                          </Upload>
                        </Form.Item>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <NextUIButton
                        color="danger"
                        variant="light"
                        onPress={onClose}
                      >
                        Batal
                      </NextUIButton>
                      {modalActionAM !== "view" && (
                        <NextUIButton color="primary" onPress={onClose}>
                          Simpan
                        </NextUIButton>
                      )}
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>

            {/* Table */}
            <Table aria-label="Menu table with custom cells" shadow="none">
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn key={column.uid} className="text-center">
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={data_am}>
                {(item) => (
                  <TableRow key={item.id_am} className="text-center">
                    {(columnKey) => (
                      <TableCell className="text-center">
                        {renderCellAM(item, columnKey)}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AyoMg;

import React, { useState, useCallback } from "react";
import AdminLayout from "../layout/AdminLayout";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, Form, Input, Button as AntButton } from "antd";
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
} from "@nextui-org/react";
import { EditIcon } from "../../components/Icon/EditIcon";
import { DeleteIcon } from "../../components/Icon/DeleteIcon";
import { EyeIcon } from "../../components/Icon/EyeIcon";

//layanan kami table
const columns_lyn = [
  { name: "Urutan", uid: "urut_lyn" },
  { name: "Judul", uid: "judul_lyn" },
  { name: "Aksi", uid: "aksi_lyn" },
];

const data_lyn = [
  { id_lyn: 1, urut_lyn: "1", judul_lyn: "Satu Data Indonesia" },
  { id_lyn: 2, urut_lyn: "2", judul_lyn: "Pojok Statistik" },
  { id_lyn: 3, urut_lyn: "3", judul_lyn: "Desa Cantik" },
  { id_lyn: 4, urut_lyn: "4", judul_lyn: "Ayo Magang" },
];

//aplikasi pelayanan table
const columns_app = [
  { name: "Urutan", uid: "urut_app" },
  { name: "Judul", uid: "judul_app" },
  { name: "Aksi", uid: "aksi_app" },
];

const data_app = [
  { id_app: 1, urut_app: "1", judul_app: "Romantik" },
  { id_app: 2, urut_app: "2", judul_app: "Situs BPS" },
  { id_app: 3, urut_app: "3", judul_app: "Desa Cantik" },
  { id_app: 4, urut_app: "4", judul_app: "Pojok Statistik" },
];

// Helper function to get Base64 of a file
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function BerandaAdmin() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 50,
      name: "image.png",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
  ]);

  // const [modalAction, setModalAction] = useState(null); // To store the action type ('edit' or 'view')
  // const [selectedItem, setSelectedItem] = useState(null); // To store the item selected for editing or viewing
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Separate state for Layanan Kami modal
  const [modalActionLyn, setModalActionLyn] = useState(null);
  const [selectedItemLyn, setSelectedItemLyn] = useState(null);

  // Separate state for Aplikasi Pelayanan modal
  const [modalActionApp, setModalActionApp] = useState(null);
  const [selectedItemApp, setSelectedItemApp] = useState(null);

  const {
    isOpen: isOpenLyn,
    onOpen: onOpenLyn,
    onOpenChange: onOpenChangeLyn,
  } = useDisclosure();
  
  const {
    isOpen: isOpenApp,
    onOpen: onOpenApp,
    onOpenChange: onOpenChangeApp,
  } = useDisclosure();

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <AntButton
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </AntButton>
  );

  // const openModal = (action, item) => {
  //   setModalAction(action);
  //   setSelectedItem(item);
  //   onOpen();
  // };

  // Open modal for Layanan Kami
  const openModalLyn = (action, item) => {
    setModalActionLyn(action);
    setSelectedItemLyn(item);
    onOpenLyn();
  };

  // Open modal for Aplikasi Pelayanan
  const openModalApp = (action, item) => {
    setModalActionApp(action);
    setSelectedItemApp(item);
    onOpenApp();
  };

  const renderCellLyn = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "judul_lyn":
        return <p className="text-bold text-sm text-center">{cellValue}</p>;
      case "aksi_lyn":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Detail">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalLyn("view", item)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="primary" content="Edit">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalLyn("edit", item)}
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

  const renderCellApp = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "judul_app":
        return <p className="text-bold text-sm text-center">{cellValue}</p>;
      case "aksi_app":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Detail">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalApp("view", item)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="primary" content="Edit">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalApp("edit", item)}
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
        <h7 className="text-sm font-semibold text-pdarkblue">
          Admin > Pahlawan140 > Beranda
        </h7>
        <div className="mt-5 flex flex-col md:flex-row bg-white rounded-2xl p-10 justify-between space-y-5 md:space-y-0">
          <div className="w-full flex justify-center items-center flex-col">
            <h2 className="text-lg font-semibold text-pdarkblue mb-4">
              Pengaturan Carousel
            </h2>
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{
                  display: "none",
                }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(""),
                }}
                src={previewImage}
              />
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-col md:flex-row bg-white rounded-2xl p-10 justify-between space-y-5 md:space-y-0">
          <div className="w-full flex justify-center items-center flex-col">
            <h2 className="text-lg font-semibold text-pdarkblue mb-4">
              Layanan Kami
            </h2>
            <NextUIButton
              size="sm"
              color="primary"
              onPress={() => openModalLyn("add", null)}
            >
              Tambah <PlusOutlined />
            </NextUIButton>

            {/* Modal for Layanan Kami */}
            <Modal
              size="xl"
              backdrop="opaque"
              isOpen={isOpenLyn} // Use isOpenLyn here
              onOpenChange={onOpenChangeLyn} // Use onOpenChangeLyn here
              classNames={{
                backdrop: "transparent",
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col items-center font-semibold text-pdarkblue">
                      {modalActionLyn === "view"
                        ? "Detail Layanan Kami"
                        : "Form Layanan Kami"}
                    </ModalHeader>
                    <ModalBody>
                      <Form
                        {...formItemLayout}
                        layout="horizontal"
                        labelAlign="left"
                        style={{ width: "100%" }}
                      >
                        <Form.Item label="Urutan">
                          <Input
                            placeholder=""
                            defaultValue={selectedItemLyn?.urut_lyn}
                            disabled={modalActionLyn === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Judul">
                          <Input
                            placeholder=""
                            defaultValue={selectedItemLyn?.judul_lyn}
                            disabled={modalActionLyn === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Link Icon">
                          <Input
                            placeholder=""
                            disabled={modalActionLyn === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Deskripsi">
                          <Input
                            placeholder=""
                            disabled={modalActionLyn === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Link Tujuan">
                          <Input
                            placeholder=""
                            disabled={modalActionLyn === "view"}
                          />
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
                      {modalActionLyn !== "view" && (
                        <NextUIButton color="primary" onPress={onClose}>
                          Simpan
                        </NextUIButton>
                      )}
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
            <Table aria-label="Menu table with custom cells" shadow="none">
              <TableHeader columns={columns_lyn}>
                {(column_lyn) => (
                  <TableColumn key={column_lyn.uid} align="center">
                    {column_lyn.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={data_lyn}>
                {(item) => (
                  <TableRow key={item.id_lyn} className="text-center">
                    {(columnKey) => (
                      <TableCell className="text-center">
                        {renderCellLyn(item, columnKey)}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-5 flex flex-col md:flex-row bg-white rounded-2xl p-10 justify-between space-y-5 md:space-y-0">
          <div className="w-full flex justify-center items-center flex-col">
            <h2 className="text-lg font-semibold text-pdarkblue mb-4">
              Aplikasi Pelayanan
            </h2>
            <NextUIButton
              size="sm"
              color="primary"
              onPress={() => openModalApp("add", null)}
            >
              Tambah <PlusOutlined />
            </NextUIButton>

            {/* Modal for Aplikasi Pelayanan */}
            <Modal
              size="xl"
              backdrop="opaque"
              isOpen={isOpenApp} // Use isOpenApp here
              onOpenChange={onOpenChangeApp} // Use onOpenChangeApp here
              classNames={{
                backdrop: "transparent",
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col items-center font-semibold text-pdarkblue">
                      {modalActionApp === "view"
                        ? "Detail Aplikasi Pelayanan"
                        : "Form Aplikasi Pelayanan"}
                    </ModalHeader>
                    <ModalBody>
                      <Form
                        {...formItemLayout}
                        layout="horizontal"
                        labelAlign="left"
                        style={{ width: "100%" }}
                      >
                        <Form.Item label="Urutan">
                          <Input
                            placeholder=""
                            defaultValue={selectedItemApp?.urut_app}
                            disabled={modalActionApp === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Judul">
                          <Input
                            placeholder=""
                            defaultValue={selectedItemApp?.judul_app}
                            disabled={modalActionApp === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Gambar">
                          <Input
                            placeholder=""
                            disabled={modalActionApp === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Deskripsi">
                          <Input
                            placeholder=""
                            disabled={modalActionApp === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Link Tujuan">
                          <Input
                            placeholder=""
                            disabled={modalActionApp === "view"}
                          />
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
                      {modalActionApp !== "view" && (
                        <NextUIButton color="primary" onPress={onClose}>
                          Simpan
                        </NextUIButton>
                      )}
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>

            <Table aria-label="Menu table with custom cells" shadow="none">
              <TableHeader columns={columns_app}>
                {(column_app) => (
                  <TableColumn key={column_app.uid} align="center">
                    {column_app.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={data_app}>
                {(item) => (
                  <TableRow key={item.id_app} className="text-center">
                    {(columnKey) => (
                      <TableCell className="text-center">
                        {renderCellApp(item, columnKey)}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-5 flex flex-col md:flex-row bg-white rounded-2xl p-10 justify-between space-y-5 md:space-y-0">
          <div className="w-full flex justify-center items-center flex-col">
            <h2 className="text-lg font-semibold text-pdarkblue mb-4">
              Pengaturan Penghargaan
            </h2>
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{
                  display: "none",
                }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(""),
                }}
                src={previewImage}
              />
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default BerandaAdmin;

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
  Modal as NextUIModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { EditIcon } from "../../components/Icon/EditIcon";
import { DeleteIcon } from "../../components/Icon/DeleteIcon";
import { EyeIcon } from "../../components/Icon/EyeIcon";
import { Form, Input, Upload, Modal as AntModal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Select } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const columns_seg = [
  { name: "Urutan", uid: "urut_seg" },
  { name: "Nama Segmen", uid: "judul_seg" },
  { name: "Deskripsi", uid: "desk_seg" },
  { name: "Aksi", uid: "aksi_seg" },
];

const columns_off = [
  { name: "Urutan", uid: "urut_off" },
  { name: "Judul", uid: "judul_off" },
  // { name: "Deskripsi", uid: "desk_off" },
  { name: "Segmen", uid: "seg_off" },
  { name: "Cover", uid: "cover_off" },
  // { name: "Link", uid: "link_off" },
  { name: "Aksi", uid: "aksi_off" },
];

const data_seg = [
  {
    id_seg: 1,
    urut_seg: "1",
    judul_seg: "Kepegawaian",
    desk_seg:
      "Solusi digital yang dirancang untuk mengoptimalkan berbagai aspek pengelolaan sumber daya manusia dalam organisasi BPS Sidoarjo.",
  },
  {
    id_seg: 2,
    urut_seg: "2",
    judul_seg: "Keuangan",
    desk_seg:
      "Membantu organisasi dalam mengelola keuangan secara efektif dan efisien. Mencakup berbagai fitur yang memungkinkan pengguna untuk melakukan berbagai laporan keuangan.",
  },
  {
    id_seg: 3,
    urut_seg: "3",
    judul_seg: "Administrasi",
    desk_seg:
      "Sistem informasi yang membantu organisasi dalam mengelola berbagai tugas administratif menjadi lebih efisien dan terorganisir.",
  },
];

const data_off = [
  {
    id_off: 1,
    urut_off: "1",
    judul_off: "KippApp",
    cover_off: "https://example.com/image2.jpg",
    seg_off: "Kepegawaian",
  },
  {
    id_off: 2,
    urut_off: "2",
    judul_off: "Sipecut",
    cover_off: "https://example.com/image2.jpg",
    seg_off: "Kepegawaian",
  },
  {
    id_off: 3,
    urut_off: "3",
    judul_off: "BAST",
    cover_off: "https://example.com/image2.jpg",
    seg_off: "Administrasi",
  },
  {
    id_off: 4,
    urut_off: "4",
    judul_off: "FRA",
    cover_off: "https://example.com/image2.jpg",
    seg_off: "Keuangan",
  },
];

const MyOff = () => {
  const [modalActionSeg, setModalActionSeg] = useState(null);
  const [selectedItemSeg, setSelectedItemSeg] = useState(null);

  const [modalActionOff, setModalActionOff] = useState(null);
  const [selectedItemOff, setSelectedItemOff] = useState(null);

  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const {
    isOpen: isOpenSeg,
    onOpen: onOpenSeg,
    onOpenChange: onOpenChangeSeg,
  } = useDisclosure();
  const {
    isOpen: isOpenOff,
    onOpen: onOpenOff,
    onOpenChange: onOpenChangeOff,
  } = useDisclosure();

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
    setPreviewVisible(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const handleCancelPreview = () => setPreviewVisible(false);

  const openModalSeg = (action, item) => {
    setModalActionSeg(action);
    setSelectedItemSeg(item);
    onOpenSeg();
  };

  const openModalOff = (action, item) => {
    setModalActionOff(action);
    setSelectedItemOff(item);
    onOpenOff();
  };

  const renderCellSeg = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "judul_seg":
        return <p className="text-bold text-sm text-center">{cellValue}</p>;
      case "desk_seg":
        return <p className="text-bold text-sm text-justify">{cellValue}</p>;
      case "aksi_seg":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Detail">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalSeg("view", item)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="primary" content="Edit">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalSeg("edit", item)}
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

  const renderCellOff = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "judul_off":
        return <p className="text-bold text-sm text-center">{cellValue}</p>;
      case "seg_off":
        return <p className="text-bold text-sm text-center">{cellValue}</p>;
      case "cover_off":
        return <img src={cellValue} alt="cover" className="w-20 h-12" />;
      case "aksi_off":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Detail">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalOff("view", item)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="primary" content="Edit">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalOff("edit", item)}
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

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <AdminLayout>
      <div className="bg-grayCustom min-h-screen p-10 mt-0 mx-auto">
        <h6 className="text-sm font-semibold text-pdarkblue">
          Admin > Pahlawan140 > MyOffice
        </h6>
        <div className="mt-5 flex flex-col md:flex-row bg-white rounded-2xl p-10 justify-between space-y-5 md:space-y-0">
          <div className="w-full flex justify-center items-center flex-col">
            <h2 className="text-lg font-semibold text-pdarkblue mb-4">
              Segmen MyOffice
            </h2>

            <NextUIButton
              size="sm"
              color="primary"
              onPress={() => openModalSeg("add", null)}
            >
              Tambah <PlusOutlined />
            </NextUIButton>

            <NextUIModal
              size="xl"
              backdrop="opaque"
              isOpen={isOpenSeg}
              onOpenChange={onOpenChangeSeg}
              classNames={{
                backdrop: "transparent",
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col items-center font-semibold text-pdarkblue">
                      {modalActionSeg === "view"
                        ? "Detail Segmen MyOffice"
                        : "Form Segmen MyOffice"}
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
                            defaultValue={selectedItemSeg?.urut_seg}
                            disabled={modalActionSeg === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Judul">
                          <Input
                            placeholder=""
                            defaultValue={selectedItemSeg?.judul_seg}
                            disabled={modalActionSeg === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Deskripsi">
                          <Input
                            placeholder=""
                            defaultValue={selectedItemSeg?.desk_seg}
                            disabled={modalActionSeg === "view"}
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
                      {modalActionSeg !== "view" && (
                        <NextUIButton color="primary" onPress={onClose}>
                          Simpan
                        </NextUIButton>
                      )}
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </NextUIModal>

            <Table aria-label="Menu table with custom cells" shadow="none">
              <TableHeader columns={columns_seg}>
                {(column) => (
                  <TableColumn key={column.uid} align="center">
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={data_seg}>
                {(item) => (
                  <TableRow key={item.id_seg} className="text-center">
                    {(columnKey) => (
                      <TableCell className="text-center">
                        {renderCellSeg(item, columnKey)}
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
              Menu MyOffice
            </h2>

            <NextUIButton
              size="sm"
              color="primary"
              onPress={() => openModalOff("add", null)}
            >
              Tambah <PlusOutlined />
            </NextUIButton>

            <NextUIModal
              size="xl"
              backdrop="opaque"
              isOpen={isOpenOff}
              onOpenChange={onOpenChangeOff}
              classNames={{
                backdrop: "transparent",
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col items-center font-semibold text-pdarkblue">
                      {modalActionOff === "view"
                        ? "Detail Menu MyOffice"
                        : "Form Menu MyOffice"}
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
                            defaultValue={selectedItemOff?.urut_off}
                            disabled={modalActionOff === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Judul">
                          <Input
                            placeholder=""
                            defaultValue={selectedItemOff?.judul_off}
                            disabled={modalActionOff === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Deskripsi">
                          <Input
                            placeholder=""
                            defaultValue={selectedItemOff?.desk_off}
                            disabled={modalActionOff === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Segmen">
                          <Select
                            placeholder="Pilih Segmen"
                            defaultValue={selectedItemOff?.seg_off}
                            disabled={modalActionOff === "view"}
                            options={data_seg.map((seg) => ({
                              label: seg.judul_seg,
                              value: seg.judul_seg,
                            }))}
                          />
                        </Form.Item>
                        <Form.Item label="Link">
                          <Input
                            placeholder=""
                            defaultValue={selectedItemOff?.link_off}
                            disabled={modalActionOff === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Cover">
                          <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                            beforeUpload={() => false} // Prevent automatic upload
                          >
                            {fileList.length >= 1 ? null : uploadButton}
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
                      {modalActionOff !== "view" && (
                        <NextUIButton color="primary" onPress={onClose}>
                          Simpan
                        </NextUIButton>
                      )}
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </NextUIModal>

            {/* Preview Modal for Image */}
            <AntModal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={handleCancelPreview}
            >
              <img alt="preview" style={{ width: "100%" }} src={previewImage} />
            </AntModal>

            <Table aria-label="Menu table with custom cells" shadow="none">
              <TableHeader columns={columns_off}>
                {(column) => (
                  <TableColumn key={column.uid} align="center">
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={data_off}>
                {(item) => (
                  <TableRow key={item.id_off} className="text-center">
                    {(columnKey) => (
                      <TableCell className="text-center">
                        {renderCellOff(item, columnKey)}
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

export default MyOff;

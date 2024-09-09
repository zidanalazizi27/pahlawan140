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
} from "@nextui-org/react";
import { EditIcon } from "../../components/Icon/EditIcon";
import { DeleteIcon } from "../../components/Icon/DeleteIcon";
import { EyeIcon } from "../../components/Icon/EyeIcon";
import { Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const columns = [
  { name: "Urutan", uid: "urut_rbc" },
  { name: "Judul", uid: "judul_rbc" },
  { name: "Gambar", uid: "gambar_rbc" },
  { name: "Aksi", uid: "aksi_rbc" },
];

const data_rbc = [
  {
    id_rbc: 1,
    urut_rbc: "1",
    judul_rbc: "Monev OPD",
    gambar_rbc: "https://example.com/image1.jpg", // Add valid image URL
  },
  {
    id_rbc: 2,
    urut_rbc: "2",
    judul_rbc: "Monitoring Sensus dan Survei",
    gambar_rbc: "https://example.com/image2.jpg", // Add valid image URL
  },
];

const RBc = () => {
  const [modalActionRBc, setModalActionRBc] = useState(null);
  const [selectedItemRBc, setSelectedItemRBc] = useState(null);

  const { isOpen: isOpenRBc, onOpen: onOpenRBc, onOpenChange: onOpenChangeRBc } =
    useDisclosure();

  const openModalRBc = (action, item) => {
    setModalActionRBc(action);
    setSelectedItemRBc(item);
    onOpenRBc();
  };

  const renderCellRBc = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "judul_rbc":
        return <p className="text-bold text-sm text-center">{cellValue}</p>;
      case "gambar_rbc":
        return <img src={cellValue} alt="gambar" className="w-20 h-12" />;
      case "aksi_rbc":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Detail">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalRBc("view", item)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="primary" content="Edit">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalRBc("edit", item)}
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
          Admin > Pahlawan140 > Ruang Baca
        </h7>
        <div className="mt-5 flex flex-col md:flex-row bg-white rounded-2xl p-10 justify-between space-y-5 md:space-y-0">
          <div className="w-full flex justify-center items-center flex-col">
            <h2 className="text-lg font-semibold text-pdarkblue mb-4">
              Pengaturan Ruang Baca
            </h2>

            <NextUIButton
              size="sm"
              color="primary"
              onPress={() => openModalRBc("add", null)} // Open modal to add new item
            >
              Tambah <PlusOutlined />
            </NextUIButton>

            {/* Modal for Ruang Baca */}
            <Modal
              size="xl"
              backdrop="opaque"
              isOpen={isOpenRBc} // Ensure this controls modal visibility
              onOpenChange={onOpenChangeRBc} // Fix closing behavior
              classNames={{
                backdrop: "transparent",
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col items-center font-semibold text-pdarkblue">
                      {modalActionRBc === "view"
                        ? "Detail Ruang Baca"
                        : "Form Ruang Baca"}
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
                            placeholder="Masukkan urutan"
                            defaultValue={selectedItemRBc?.urut_rbc}
                            disabled={modalActionRBc === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Judul">
                          <Input
                            placeholder="Masukkan judul"
                            defaultValue={selectedItemRBc?.judul_rbc}
                            disabled={modalActionRBc === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Gambar">
                          <Input
                            placeholder="Masukkan deskripsi gambar"
                            defaultValue={selectedItemRBc?.gambar_rbc}
                            disabled={modalActionRBc === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Link">
                          <Input
                            placeholder="Masukkan link"
                            disabled={modalActionRBc === "view"}
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
                      {modalActionRBc !== "view" && (
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
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn key={column.uid} align="center">
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={data_rbc}>
                {(item) => (
                  <TableRow key={item.id_rbc} className="text-center">
                    {(columnKey) => (
                      <TableCell className="text-center">
                        {renderCellRBc(item, columnKey)}
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

export default RBc;

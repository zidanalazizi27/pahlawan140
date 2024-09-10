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
  { name: "Urutan", uid: "urut_tl" },
  { name: "Judul", uid: "judul_tl" },
  { name: "Deskripsi", uid: "desk_tl" },
  { name: "Aksi", uid: "aksi_tl" },
];

const data_tl = [
  {
    id_tl: 1,
    urut_tl: "1",
    judul_tl: "Monev OPD",
    desk_tl:
      "Sebuah alat manajemen informasi dan visualisasi data yang dirancang dengan cermat untuk memuat dan menampilkan seluruh kegiatan statistik sektoral yang diajukan oleh Organisasi Perangkat Daerah (OPD) dari tahun ke tahun.",
  },
  {
    id_tl: 2,
    urut_tl: "2",
    judul_tl: "Monitoring Sensus dan Survei",
    desk_tl:
      "Sistem evaluasi yang dirancang untuk memastikan kualitas dan akurasi data yang dikumpulkan oleh petugas lapangan dalam pelaksanaan sensus dan survei oleh Badan Pusat Statistik (BPS).",
  },
];

const TLk = () => {
  const [modalActionTL, setModalActionTL] = useState(null);
  const [selectedItemTL, setSelectedItemTL] = useState(null);
  
  const {
    isOpen: isOpenTL,
    onOpen: onOpenTL,
    onOpenChange: onOpenChangeTL,
  } = useDisclosure();

  const openModalTL = (action, item) => {
    setModalActionTL(action);
    setSelectedItemTL(item);
    onOpenTL();
  };

  const renderCellTL = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "judul_tl":
        return <p className="text-bold text-sm text-center">{cellValue}</p>;
      case "desk_tl":
        return <p className="text-bold text-sm text-justify">{cellValue}</p>;
      case "aksi_tl":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Detail">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalTL("view", item)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="primary" content="Edit">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => openModalTL("edit", item)}
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
          Admin > Pahlawan140 > Teman Luki
        </h6>
        <div className="mt-5 flex flex-col md:flex-row bg-white rounded-2xl p-10 justify-between space-y-5 md:space-y-0">
          <div className="w-full flex justify-center items-center flex-col">
            <h2 className="text-lg font-semibold text-pdarkblue mb-4">
              Pengaturan Teman Luki
            </h2>

            <NextUIButton
              size="sm"
              color="primary"
              onPress={() => openModalTL("add", null)} // Open modal to add new item
            >
              Tambah <PlusOutlined />
            </NextUIButton>

            {/* Modal for Teman Luki */}
            <Modal
              size="xl"
              backdrop="opaque"
              isOpen={isOpenTL} // Ensure this controls modal visibility
              onOpenChange={onOpenChangeTL} // Fix closing behavior
              classNames={{
                backdrop: "transparent",
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col items-center font-semibold text-pdarkblue">
                      {modalActionTL === "view"
                        ? "Detail Teman Luki"
                        : "Form Teman Luki"}
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
                            defaultValue={selectedItemTL?.urut_tl}
                            disabled={modalActionTL === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Judul">
                          <Input
                            placeholder=""
                            defaultValue={selectedItemTL?.judul_tl}
                            disabled={modalActionTL === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Deskripsi">
                          <Input
                            placeholder=""
                            defaultValue={selectedItemTL?.desk_tl}
                            disabled={modalActionTL === "view"}
                          />
                        </Form.Item>
                        <Form.Item label="Link">
                          <Input
                            placeholder=""
                            disabled={modalActionTL === "view"}
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
                      {modalActionTL !== "view" && (
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
              <TableBody items={data_tl}>
                {(item) => (
                  <TableRow key={item.id_tl} className="text-center">
                    {(columnKey) => (
                      <TableCell className="text-center">
                        {renderCellTL(item, columnKey)}
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

export default TLk;

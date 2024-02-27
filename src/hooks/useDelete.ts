/* eslint-disable no-console */
import Swal from "sweetalert2";

import {useAlert} from "./useAlert";

import {EAlert} from "@/enums/alert";

interface Row {
  id?: number;
  [key: string]: any;
}

export const useDelete = (
  deleteMutation: (id: number) => Promise<any>,
  removeFromList: (data: any) => void,
  name: string = "Delete",
) => {
  const Alert = useAlert();
  const deletePopup = async (deleteData: Row) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "rounded-md bg-danger text-white h-10 px-5 py-2 mx-1",
        cancelButton: "rounded-md border-danger border text-black h-10 px-5 py-2 mx-1",
      },
      buttonsStyling: false,
    });

    const result = await swalWithBootstrapButtons.fire({
      title: `Are you sure want to ${name}?`,
      text: `This item will be ${name} immediately. You can’t undo this action`,
      icon: EAlert.warning,
      showCancelButton: true,
      confirmButtonText: `${name}`,
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        if (deleteData) {
          const response = await deleteMutation(deleteData?.id ?? 1);

          if (response.data.success) {
            swalWithBootstrapButtons.fire(`${name}`, `Successfully ${name}`, "success");
            Alert(EAlert.success, response.data.message || `${name} successfully`);
            removeFromList(deleteData);
          } else {
            Alert(EAlert.error, response.data.message || `${name} failed`);
          }
        }
      } catch (error) {
        console.error(error);
        Alert(
          EAlert.error,
          (error as any)?.data?.message ||
            (error as any)?.message ||
            "Something went wrong! Please try again.",
        );
      }
    }
  };

  return {deletePopup};
};

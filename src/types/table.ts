export interface IColumn {
  id?: number | string;
  uid: string;
  name: string;
  sortable?: boolean;
}
export type TSearchable = string | number | undefined | null;

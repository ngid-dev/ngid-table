export interface TableOptionsModel {
  selectedRow?: {
    compareWith: (selectedRecord: any, record: any) => boolean;
  };
}

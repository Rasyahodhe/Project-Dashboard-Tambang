// Components interface
export interface ButtonType {
  style: string;
  onClick?: () => void;
  title: string;
}

// Dropdown

interface DrodpdownTypeList {
  path: string;
  name: string;
}
export interface DropdownType {
  list: DrodpdownTypeList[];
  options: string[];
  style: string;
  onselect: (value: string) => void;
}

export interface ChartType {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
  typechart: "line" | "bar" | "pie" | "doughnut" | "radar" | "polarArea";
  style: string;
  indexaxiss?: "y" | "x";
  id: string;
}

// Type List

interface Listitem {
  name: string;
  path: string;
}

export interface ListType {
  list: Listitem[];
  style: string;
  stylelist: string;
  styletext: string;
}

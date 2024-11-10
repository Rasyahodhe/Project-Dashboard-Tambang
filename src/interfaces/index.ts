export interface UnitData {
  code_unit: number;
  name_unit: string;
  source: string;
  name?: string;
}

export interface Errormessage {
  message: string;
}

export type Apiresponse = UnitData[] | Errormessage;


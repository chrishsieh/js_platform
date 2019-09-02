export interface FamilyContent {
  name: string;
  name_link: string;
  address: string;
  datetime: string;
}

export interface Familyif {
  lastFamilyContent: FamilyContent[];
  updatedFamilyContent: FamilyContent[];
}

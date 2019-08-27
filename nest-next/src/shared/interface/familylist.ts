export interface FamilyContent {
  name: string;
  name_link: string;
  address: string;
  created: string;
}

export interface Familyif {
  lastFamilyContent: FamilyContent[];
  updatedFamilyContent: FamilyContent[];
}

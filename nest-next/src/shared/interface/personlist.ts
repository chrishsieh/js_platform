export interface PersonContent {
  name: string;
  name_link: string;
  nameshort: string;
  date: string;
}

export interface Personif {
  lastPersonContent: PersonContent[];
  updatedPersonContent: PersonContent[];
}

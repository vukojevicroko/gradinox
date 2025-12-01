// data/projektOtok.ts

export type StanStatus = "available" | "reserved" | "sold";

export type Kat = {
  id: string;          // npr. "1"
  label: string;       // npr. "Prvi kat"
  opis?: string;
};

export type Stan = {
  id: string;          // slug za URL, npr. "1a"
  katId: string;       // referenca na Kat.id
  oznaka: string;      // npr. "Stan 1A"
  povrsina: number;    // m2
  brojSoba: number;
  orijentacija: string;
  status: StanStatus;
};

// 💡 OVDJE SAMO DODAJEŠ / MIJENJAŠ KATOVE
export const katovi: Kat[] = [
  { id: "1", label: "Prvi kat", opis: "Kat s manjim dvosobnim stanovima." },
  { id: "2", label: "Drugi kat", opis: "Kat s kombinacijom dvo- i trosobnih stanova." },
  { id: "3", label: "Treći kat", opis: "Kat s većim stanovima i boljom orijentacijom." },
];

// 💡 OVDJE KASNIJE DODAJEŠ SVE STANOVE
export const stanovi: Stan[] = [
  {
    id: "1a",
    katId: "1",
    oznaka: "Stan 1A",
    povrsina: 52.4,
    brojSoba: 2,
    orijentacija: "jug",
    status: "available",
  },
  {
    id: "1b",
    katId: "1",
    oznaka: "Stan 1B",
    povrsina: 48.9,
    brojSoba: 2,
    orijentacija: "istok",
    status: "reserved",
  },
  {
    id: "2a",
    katId: "2",
    oznaka: "Stan 2A",
    povrsina: 68.3,
    brojSoba: 3,
    orijentacija: "jugozapad",
    status: "available",
  },
  {
    id: "2b",
    katId: "2",
    oznaka: "Stan 2B",
    povrsina: 61.7,
    brojSoba: 3,
    orijentacija: "zapad",
    status: "sold",
  },
  {
    id: "3a",
    katId: "3",
    oznaka: "Stan 3A",
    povrsina: 75.2,
    brojSoba: 3,
    orijentacija: "jugozapad",
    status: "available",
  },
  {
    id: "3b",
    katId: "3",
    oznaka: "Stan 3B",
    povrsina: 70.1,
    brojSoba: 3,
    orijentacija: "jug",
    status: "reserved",
  },
];

// data/projektOtok.ts

export type StanStatus = "available" | "reserved" | "sold";

export type Zgrada = {
  id: string;       // "a" | "b" | "c"
  label: string;    // "Zgrada A"
};

export type Kat = {
  id: string;          // npr. "1"
  zgradaId: string;    // "a"
  label: string;       // "Prvi kat"
  opis?: string;
};

export type Stan = {
  id: string;          // slug, npr. "a-1a"
  zgradaId: string;    // "a"
  katId: string;       // referenca na Kat.id
  oznaka: string;      // "Stan 1A"
  povrsina: number;
  brojSoba: number;
  orijentacija: string;
  status: StanStatus;
};

export const zgrade: Zgrada[] = [
  { id: "a", label: "Zgrada A" },
  { id: "b", label: "Zgrada B" },
  { id: "c", label: "Zgrada C" },
];

// 💡 Sada katovi pripadaju zgradi
export const katovi: Kat[] = [
  { id: "0", zgradaId: "a", label: "Prizemlje" },
  { id: "1", zgradaId: "a", label: "1. kat" },
  { id: "2", zgradaId: "a", label: "2. kat" },

  { id: "0", zgradaId: "b", label: "Prizemlje" },
  { id: "1", zgradaId: "b", label: "1. kat" },
  { id: "2", zgradaId: "b", label: "2. kat" },

  { id: "0", zgradaId: "c", label: "Prizemlje" },
  { id: "1", zgradaId: "c", label: "1. kat" },
  { id: "2", zgradaId: "c", label: "2. kat" },
];

// 💡 Stanovi sada znaju kojoj zgradi i kojem katu pripadaju
export const stanovi: Stan[] = [
  {
    id: "a-0-1",
    zgradaId: "a",
    katId: "0",
    oznaka: "Stan 1",
    povrsina: 45.2,
    brojSoba: 2,
    orijentacija: "jug",
    status: "available",
  },
  {
    id: "a-0-2",
    zgradaId: "a",
    katId: "0",
    oznaka: "Stan 2",
    povrsina: 49.7,
    brojSoba: 2,
    orijentacija: "istok",
    status: "reserved",
  },
  {
    id: "a-1-3",
    zgradaId: "a",
    katId: "1",
    oznaka: "Stan 3",
    povrsina: 52.4,
    brojSoba: 2,
    orijentacija: "jug",
    status: "available",
  },
  {
    id: "a-1-4",
    zgradaId: "a",
    katId: "1",
    oznaka: "Stan 4",
    povrsina: 48.9,
    brojSoba: 2,
    orijentacija: "istok",
    status: "reserved",
  },
  {
    id: "a-2-5",
    zgradaId: "a",
    katId: "2",
    oznaka: "Stan 5",
    povrsina: 55.1,
    brojSoba: 3,
    orijentacija: "zapad",
    status: "available",
  },
  {
    id: "a-2-6",
    zgradaId: "a",
    katId: "2",
    oznaka: "Stan 6",
    povrsina: 51.3,
    brojSoba: 2,
    orijentacija: "sjever",
    status: "sold",
  },
];

// data/projektOtok.ts (DODAJ NA DNO FILE-A)

// Helper: vrati label zgrade iz id-a
export function getZgradaLabel(zgradaId: string) {
  const map: Record<string, string> = { a: "Zgrada A", b: "Zgrada B", c: "Zgrada C" };
  return map[zgradaId] ?? `Zgrada ${zgradaId.toUpperCase()}`;
}

// Helper: vrati katove za jednu zgradu, sortirano po id (0,1,2)
export function getKatoviZaZgradu(zgradaId: string) {
  return katovi
    .filter((k) => k.zgradaId === zgradaId)
    .sort((x, y) => Number(x.id) - Number(y.id));
}

// Helper: stanovi za (zgrada, kat)
export function getStanoviZaKat(zgradaId: string, katId: string) {
  return stanovi.filter((s) => s.zgradaId === zgradaId && s.katId === katId);
}

// Helper: pretvori katId u “slug” za URL
export function katIdToSlug(katId: string) {
  if (katId === "0") return "prizemlje";
  if (katId === "1") return "1-kat";
  if (katId === "2") return "2-kat";
  return `${katId}-kat`;
}

// Helper: pretvori slug iz URL-a u katId
export function slugToKatId(slug: string) {
  if (slug === "prizemlje") return "0";
  if (slug === "1-kat") return "1";
  if (slug === "2-kat") return "2";
  return slug.replace("-kat", "");
}

// Putanje tlocrta po zgradi i katu
export const planovi: Record<
  string,
  Record<"0" | "1" | "2", string>
> = {
  a: {
    "0": "/plans/a/prizemlje_crop.webp",
    "1": "/plans/a/1-kat.webp",
    "2": "/plans/a/2-kat.webp",
  },
  b: {
    "0": "/renders/Image22.png",
    "1": "/renders/Image22.png",
    "2": "/renders/Image22.png",
  },
  c: {
    "0": "/renders/Image24.png",
    "1": "/renders/Image24.png",
    "2": "/renders/Image24.png",
  },
};


export type Pin = { stanId: string; x: number; y: number };

export const pinovi: Record<string, Record<"0" | "1" | "2", Pin[]>> = {
  a: {
    "0": [
      { stanId: "a-0-1", x: 28, y: 42 },
      { stanId: "a-0-2", x: 56, y: 38 },
    ],
    "1": [
      { stanId: "a-1-3", x: 30, y: 35 },
      { stanId: "a-1-4", x: 55, y: 70 },
    ],
    "2": [
      { stanId: "a-2-5", x: 34, y: 30 },
      { stanId: "a-2-6", x: 58, y: 62 },
    ],
  },
  b: { "0": [], "1": [], "2": [] },
  c: { "0": [], "1": [], "2": [] },
};


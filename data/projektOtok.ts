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
  slika?: string;      // putanja do slike stana
  seoOpis?: string;    // SEO opis stana
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
  // Zgrada A
  {
    id: "a-0-1",
    zgradaId: "a",
    katId: "0",
    oznaka: "Stan A1",
    povrsina: 73.27,
    brojSoba: 3,
    orijentacija: "jug",
    status: "available",
    slika: "/stanovi/A/stan_1.png",
    seoOpis: "Najveći i najkomforniji stan u Zgradi A – tri spavaće sobe, prostrani dnevni dio i vlastiti vrt koji stvarno daje osjećaj kuće, a ne klasičnog stana. Ako tražite prostor za obitelj i malo vanjske privatnosti, ovo mora biti Vaš izbor.",
  },
  {
    id: "a-0-2",
    zgradaId: "a",
    katId: "0",
    oznaka: "Stan A2",
    povrsina: 64.07,
    brojSoba: 2,
    orijentacija: "istok",
    status: "available",
    slika: "/stanovi/A/stan_2.png",
    seoOpis: "Odličan prizemni stan s velikim vrtom i jasnim, funkcionalnim rasporedom. Dovoljno prostora za obitelj, a vrt daje dodatnu vrijednost koja se rijetko dobija u novogradnji.",
  },
  {
    id: "a-1-3",
    zgradaId: "a",
    katId: "1",
    oznaka: "Stan A3",
    povrsina: 72.69,
    brojSoba: 2,
    orijentacija: "jug",
    status: "available",
    slika: "/stanovi/A/stan_3.png",
    seoOpis: "Pametno organiziran stan na 1. katu s lođom i lijepo odvojenim sobama. Idealan balans između cijene, kvadrature i udobnosti – dobar izbor i za život i za investiciju.",
  },
  {
    id: "a-1-4",
    zgradaId: "a",
    katId: "1",
    oznaka: "Stan A4",
    povrsina: 62.07,
    brojSoba: 2,
    orijentacija: "istok",
    status: "available",
    slika: "/stanovi/A/stan_4.png",
    seoOpis: "Kompaktan, ali maksimalno iskorišten stan s dvije spavaće sobe i lođom. Sve što Vam treba bez viška kvadrata – praktično i ugodno rješenje.",
  },
  {
    id: "a-2-5",
    zgradaId: "a",
    katId: "2",
    oznaka: "Stan A5",
    povrsina: 55.74,
    brojSoba: 3,
    orijentacija: "zapad",
    status: "available",
    slika: "/stanovi/A/stan_5.png",
    seoOpis: "Stan na uvučenom katu s velikom terasom koja je stvarno produžetak dnevnog boravka. Odlična opcija ako želite više svjetla, mira i vanjskog prostora za druženja.",
  },
  {
    id: "a-2-6",
    zgradaId: "a",
    katId: "2",
    oznaka: "Stan A6",
    povrsina: 42.72,
    brojSoba: 2,
    orijentacija: "sjever",
    status: "available",
    slika: "/stanovi/A/stan_6.png",
    seoOpis: "Najintimniji stan u zgradi, ali s velikom terasom koja mu daje poseban karakter. Odličan za parove ili kao pametna kupnja za najam.",
  },

  // Zgrada B
  {
    id: "b-0-1",
    zgradaId: "b",
    katId: "0",
    oznaka: "Stan B1",
    povrsina: 95.22,
    brojSoba: 2,
    orijentacija: "jug",
    status: "available",
    slika: "/stanovi/B/stan_1.png",
    seoOpis: "Impresivan stan s izuzetno velikim privatnim vrtom koji Vam daje stvarni osjećaj prostranosti i slobode. Raspored je osmišljen tako da jasno odvaja dnevni dio od spavaćeg, što ga čini odličnim izborom za obitelj koja želi dugoročan komfor.",
  },
  {
    id: "b-0-2",
    zgradaId: "b",
    katId: "0",
    oznaka: "Stan B2",
    povrsina: 79.71,
    brojSoba: 2,
    orijentacija: "istok",
    status: "available",
    slika: "/stanovi/B/stan_2.png",
    seoOpis: "Prostrani prizemni stan s vrtom i logičnim rasporedom prostorija. Ako želite kombinaciju zatvorenog komfora i vlastitog vanjskog prostora za druženja ili opuštanje, ovaj stan nudi upravo to.",
  },
  {
    id: "b-1-3",
    zgradaId: "b",
    katId: "1",
    oznaka: "Stan B3",
    povrsina: 86.52,
    brojSoba: 2,
    orijentacija: "jug",
    status: "available",
    slika: "/stanovi/B/stan_3.png",
    seoOpis: "Stan na 1. katu s dobro definiranim zonama i lođom koja daje dodatnu vrijednost dnevnom boravku. Prikladan je za Vas ako tražite više prostora uz praktičan raspored i dodatno spremište.",
  },
  {
    id: "b-1-4",
    zgradaId: "b",
    katId: "1",
    oznaka: "Stan B4",
    povrsina: 76.36,
    brojSoba: 2,
    orijentacija: "zapad",
    status: "available",
    slika: "/stanovi/B/stan_4.png",
    seoOpis: "Udoban i racionalno projektiran stan s lođom i spremištem. Sve je postavljeno tako da dobijete maksimalnu funkcionalnost bez suvišnih kvadrata – idealno rješenje za miran i organiziran život.",
  },
  {
    id: "b-2-5",
    zgradaId: "b",
    katId: "2",
    oznaka: "Stan B5",
    povrsina: 73.20,
    brojSoba: 3,
    orijentacija: "jug",
    status: "available",
    slika: "/stanovi/B/stan_5.png",
    seoOpis: "Stan na uvučenom katu s terasom koja pruža dodatnu privatnost i otvorenost prostora. Ako cijenite svjetlo, mir i vanjski prostor koji možete koristiti tijekom većeg dijela godine, ovo je vrlo privlačna opcija.",
  },
  {
    id: "b-2-6",
    zgradaId: "b",
    katId: "2",
    oznaka: "Stan B6",
    povrsina: 53.68,
    brojSoba: 2,
    orijentacija: "sjever",
    status: "available",
    slika: "/stanovi/B/stan_6.png",
    seoOpis: "Moderan stan s velikom terasom koja postaje prirodni produžetak dnevnog prostora. Idealan je za Vas ako želite spoj unutarnjeg komfora i vanjskog boravka bez kompromisa u funkcionalnosti.",
  },

  // Zgrada C
  {
    id: "c-0-1",
    zgradaId: "c",
    katId: "0",
    oznaka: "Stan C1",
    povrsina: 42.27,
    brojSoba: 2,
    orijentacija: "jug",
    status: "available",
    slika: "/stanovi/C/stan_1.png",
    seoOpis: "Ugodan prizemni stan s privatnim vrtom koji Vam daje dodatni vanjski prostor za opuštanje. Kompaktno i funkcionalno rješenje za miran početak ili sigurnu investiciju.",
  },
  {
    id: "c-0-2",
    zgradaId: "c",
    katId: "0",
    oznaka: "Stan C2",
    povrsina: 45.54,
    brojSoba: 2,
    orijentacija: "istok",
    status: "available",
    slika: "/stanovi/C/stan_2.png",
    seoOpis: "Prizemni stan s izuzetno velikim vrtom koji prostoru daje dodatnu širinu i privatnost. Ako tražite stan koji nudi više od standardnog prizemlja, ovo je ozbiljna opcija.",
  },
  {
    id: "c-0-3",
    zgradaId: "c",
    katId: "0",
    oznaka: "Stan C3",
    povrsina: 41.85,
    brojSoba: 2,
    orijentacija: "zapad",
    status: "available",
    slika: "/stanovi/C/stan_3.png",
    seoOpis: "Dobro organiziran stan s vrtom i logičnim rasporedom prostorija. Idealan je ako želite praktičan životni prostor uz dodatni kontakt s vanjskim dijelom.",
  },
  {
    id: "c-0-4",
    zgradaId: "c",
    katId: "0",
    oznaka: "Stan C4",
    povrsina: 72.40,
    brojSoba: 2,
    orijentacija: "sjever",
    status: "available",
    slika: "/stanovi/C/stan_4.png",
    seoOpis: "Prostraniji obiteljski stan s lođom i velikim vrtom. Raspored omogućuje jasan dnevni i spavaći dio, što ga čini vrlo komfornim za dugoročno stanovanje.",
  },
  {
    id: "c-0-5",
    zgradaId: "c",
    katId: "0",
    oznaka: "Stan C5",
    povrsina: 39.74,
    brojSoba: 2,
    orijentacija: "jug-istok",
    status: "available",
    slika: "/stanovi/C/stan_5.png",
    seoOpis: "Kompaktan stan s jasno definiranim dnevnim prostorom. Odličan izbor ako tražite jednostavno, racionalno i lako održivo rješenje.",
  },
  {
    id: "c-0-6",
    zgradaId: "c",
    katId: "0",
    oznaka: "Stan C6",
    povrsina: 41.84,
    brojSoba: 2,
    orijentacija: "jug-zapad",
    status: "available",
    slika: "/stanovi/C/stan_6.png",
    seoOpis: "Prizemni stan s vrtom i uravnoteženim rasporedom. Dobar izbor ako želite privatnost i dodatni vanjski prostor bez velikih kvadratura.",
  },
  {
    id: "c-0-7",
    zgradaId: "c",
    katId: "0",
    oznaka: "Stan C7",
    povrsina: 41.94,
    brojSoba: 3,
    orijentacija: "sjever-istok",
    status: "available",
    slika: "/stanovi/C/stan_7.png",
    seoOpis: "Funkcionalan stan s vrtom i prirodnim svjetlom u dnevnom dijelu. Prikladan za parove ili kao investicija za najam.",
  },
  {
    id: "c-0-8",
    zgradaId: "c",
    katId: "0",
    oznaka: "Stan C8",
    povrsina: 72.40,
    brojSoba: 2,
    orijentacija: "sjever-zapad",
    status: "available",
    slika: "/stanovi/C/stan_8.png",
    seoOpis: "Obiteljski stan s lođom i većim vrtom, s jasno podijeljenim zonama za život i odmor. Nudi komfor i dodatni vanjski prostor u jednoj cjelini.",
  },
  {
    id: "c-0-9",
    zgradaId: "c",
    katId: "0",
    oznaka: "Stan C9",
    povrsina: 65.27,
    brojSoba: 2,
    orijentacija: "jug",
    status: "available",
    slika: "/stanovi/C/stan_9.png",
    seoOpis: "Stan s lođom i vrtom koji daje osjećaj privatnosti i širine. Idealan ako želite kombinaciju zatvorenog i otvorenog prostora.",
  },
  {
    id: "c-0-10",
    zgradaId: "c",
    katId: "0",
    oznaka: "Stan C10",
    povrsina: 54.32,
    brojSoba: 2,
    orijentacija: "istok",
    status: "available",
    slika: "/stanovi/C/stan_10.png",
    seoOpis: "Prostran stan s lođom i dobro organiziranim dnevnim dijelom. Praktičan raspored čini ga stabilnim izborom za dugoročno stanovanje.",
  },
  {
    id: "c-1-11",
    zgradaId: "c",
    katId: "1",
    oznaka: "Stan C11",
    povrsina: 77.49,
    brojSoba: 3,
    orijentacija: "zapad",
    status: "available",
    slika: "/stanovi/C/stan_11.png",
    seoOpis: "Veći obiteljski stan s tri spavaće sobe i lođom. Ako tražite više prostora i dodatnu funkcionalnost, ovo je jedna od najuravnoteženijih opcija u zgradi.",
  },
  {
    id: "c-1-12",
    zgradaId: "c",
    katId: "1",
    oznaka: "Stan C12",
    povrsina: 54.96,
    brojSoba: 3,
    orijentacija: "sjever",
    status: "available",
    slika: "/stanovi/C/stan_12.png",
    seoOpis: "Kompaktan stan s lođom i jasnim rasporedom prostorija. Odličan za Vas ako tražite racionalan stan bez suvišnih kvadrata.",
  },
  {
    id: "c-1-13",
    zgradaId: "c",
    katId: "1",
    oznaka: "Stan C13",
    povrsina: 68.68,
    brojSoba: 2,
    orijentacija: "jug-istok",
    status: "available",
    slika: "/stanovi/C/stan_13.png",
    seoOpis: "Stan s lođom i dodatnom ostavom koji pruža dobru organizaciju prostora. Idealan za obiteljski život srednje kvadrature.",
  },
  {
    id: "c-1-14",
    zgradaId: "c",
    katId: "1",
    oznaka: "Stan C14",
    povrsina: 77.30,
    brojSoba: 3,
    orijentacija: "jug-zapad",
    status: "available",
    slika: "/stanovi/C/stan_14.png",
    seoOpis: "Prostran stan s tri spavaće sobe, lođom i dodatnim WC-om. Namijenjen je Vama ako tražite ozbiljniji obiteljski prostor.",
  },
  {
    id: "c-1-15",
    zgradaId: "c",
    katId: "1",
    oznaka: "Stan C15",
    povrsina: 54.96,
    brojSoba: 3,
    orijentacija: "sjever-istok",
    status: "available",
    slika: "/stanovi/C/stan_15.png",
    seoOpis: "Kompaktan i funkcionalan stan s lođom, jednostavan za održavanje i praktičan za svakodnevni život.",
  },
  {
    id: "c-1-16",
    zgradaId: "c",
    katId: "1",
    oznaka: "Stan C16",
    povrsina: 68.68,
    brojSoba: 2,
    orijentacija: "jug",
    status: "available",
    slika: "/stanovi/C/stan_16.png",
    seoOpis: "Stan srednje kvadrature s lođom i ostavom, dobro organiziran i prilađen obiteljskom načinu života.",
  },
  {
    id: "c-1-17",
    zgradaId: "c",
    katId: "1",
    oznaka: "Stan C17",
    povrsina: 77.80,
    brojSoba: 3,
    orijentacija: "istok",
    status: "available",
    slika: "/stanovi/C/stan_17.png",
    seoOpis: "Prostran stan s tri spavaće sobe i lođom. Raspored omogućuje jasan odmak između dnevnog i spavaćeg dijela, što pruža dodatni komfor.",
  },
  {
    id: "c-1-18",
    zgradaId: "c",
    katId: "1",
    oznaka: "Stan C18",
    povrsina: 51.50,
    brojSoba: 2,
    orijentacija: "zapad",
    status: "available",
    slika: "/stanovi/C/stan_18.png",
    seoOpis: "Manji stan s lođom i otvorenim dnevnim prostorom. Odličan izbor za parove ili investitore.",
  },
  {
    id: "c-2-19",
    zgradaId: "c",
    katId: "2",
    oznaka: "Stan C19",
    povrsina: 91.27,
    brojSoba: 3,
    orijentacija: "sjever",
    status: "available",
    slika: "/stanovi/C/stan_19.png",
    seoOpis: "Jedan od najatraktivnijih stanova – velik dnevni prostor i impresivna terasa koja postaje produžetak interijera. Ako želite istinski vanjski prostor, ovo je poseban stan.",
  },
  {
    id: "c-2-20",
    zgradaId: "c",
    katId: "2",
    oznaka: "Stan C20",
    povrsina: 73.03,
    brojSoba: 2,
    orijentacija: "jug-istok",
    status: "available",
    slika: "/stanovi/C/stan_20.png",
    seoOpis: "Stan s lođom i dodatnom terasom, koji pruža više svjetla i otvorenosti. Dobro rješenje za obitelj koja želi vanjski prostor bez kompromisa.",
  },
  {
    id: "c-2-21",
    zgradaId: "c",
    katId: "2",
    oznaka: "Stan C21",
    povrsina: 90.42,
    brojSoba: 2,
    orijentacija: "jug-zapad",
    status: "available",
    slika: "/stanovi/C/stan_21.png",
    seoOpis: "Prostran stan s velikom terasom i jasno organiziranim zonama. Kombinira komfor unutarnjeg prostora i ozbiljan vanjski dio.",
  },
  {
    id: "c-2-22",
    zgradaId: "c",
    katId: "2",
    oznaka: "Stan C22",
    povrsina: 73.03,
    brojSoba: 3,
    orijentacija: "sjever-istok",
    status: "available",
    slika: "/stanovi/C/stan_22.png",
    seoOpis: "Uravnotežen stan s lođom i terasom, funkcionalan i prilađivljiv različitim životnim stilovima.",
  },
  {
    id: "c-2-23",
    zgradaId: "c",
    katId: "2",
    oznaka: "Stan C23",
    povrsina: 91.79,
    brojSoba: 2,
    orijentacija: "sjever-zapad",
    status: "available",
    slika: "/stanovi/C/stan_23.png",
    seoOpis: "Najveći i najimpresivniji stan u Zgradi C s prostranom terasom koja daje potpuno drugačiji doživljaj stanovanja. Premium opcija za Vas ako tražite maksimum prostora i komfora.",
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
    "0": "/plans/a/prizemlje_a_crop.jpg",
    "1": "/plans/a/1kat_a_crop.jpg",
    "2": "/plans/a/2kat_a_crop.jpg",
  },
  b: {
    "0": "/plans/b/prizemlje_b_crop.jpg",
    "1": "/plans/b/1kat_b_crop.jpg",
    "2": "/plans/b/2kat_b_crop.jpg",
  },
  c: {
    "0": "/plans/c/prizemlje_C_crop.jpg",
    "1": "/plans/c/1kat_C_crop.jpg",
    "2": "/plans/c/2kat_C_crop.jpg",
  },
};

export type ParkingStatus = "available" | "reserved" | "sold";

export type Parking = {
  id: string;              // "parking_1_a"
  zgradaId: string;        // "a" | "b" | "c"
  oznaka: string;          // "Parking 1"
  povrsina: number;        // square meters
  cijena: number;          // price in thousands
  status: ParkingStatus;
};

export const parking: Parking[] = [
  // Zgrada A
  { id: "parking_1_a", zgradaId: "a", oznaka: "Parking 1", povrsina: 15.00, cijena: 3.75, status: "available" },
  { id: "parking_2_a", zgradaId: "a", oznaka: "Parking 2", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_3_a", zgradaId: "a", oznaka: "Parking 3", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_4_a", zgradaId: "a", oznaka: "Parking 4", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_5_a", zgradaId: "a", oznaka: "Parking 5", povrsina: 12.10, cijena: 3.03, status: "available" },
  { id: "parking_6_a", zgradaId: "a", oznaka: "Parking 6", povrsina: 12.10, cijena: 3.03, status: "available" },

  // Zgrada B
  { id: "parking_1_b", zgradaId: "b", oznaka: "Parking 1", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_2_b", zgradaId: "b", oznaka: "Parking 2", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_3_b", zgradaId: "b", oznaka: "Parking 3", povrsina: 12.10, cijena: 3.03, status: "available" },
  { id: "parking_4_b", zgradaId: "b", oznaka: "Parking 4", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_5_b", zgradaId: "b", oznaka: "Parking 5", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_6_b", zgradaId: "b", oznaka: "Parking 6", povrsina: 12.50, cijena: 3.13, status: "available" },

  // Zgrada C
  { id: "parking_1_c", zgradaId: "c", oznaka: "Parking 1", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_2_c", zgradaId: "c", oznaka: "Parking 2", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_3_c", zgradaId: "c", oznaka: "Parking 3", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_4_c", zgradaId: "c", oznaka: "Parking 4", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_5_c", zgradaId: "c", oznaka: "Parking 5", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_6_c", zgradaId: "c", oznaka: "Parking 6", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_7_c", zgradaId: "c", oznaka: "Parking 7", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_8_c", zgradaId: "c", oznaka: "Parking 8", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_9_c", zgradaId: "c", oznaka: "Parking 9", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_10_c", zgradaId: "c", oznaka: "Parking 10", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_11_c", zgradaId: "c", oznaka: "Parking 11", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_12_c", zgradaId: "c", oznaka: "Parking 12", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_13_c", zgradaId: "c", oznaka: "Parking 13", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_14_c", zgradaId: "c", oznaka: "Parking 14", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_15_c", zgradaId: "c", oznaka: "Parking 15", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_16_c", zgradaId: "c", oznaka: "Parking 16", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_17_c", zgradaId: "c", oznaka: "Parking 17", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_18_c", zgradaId: "c", oznaka: "Parking 18", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_19_c", zgradaId: "c", oznaka: "Parking 19", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_20_c", zgradaId: "c", oznaka: "Parking 20", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_21_c", zgradaId: "c", oznaka: "Parking 21", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_22_c", zgradaId: "c", oznaka: "Parking 22", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_23_c", zgradaId: "c", oznaka: "Parking 23", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_24_c", zgradaId: "c", oznaka: "Parking 24", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_25_c", zgradaId: "c", oznaka: "Parking 25", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_26_c", zgradaId: "c", oznaka: "Parking 26", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_27_c", zgradaId: "c", oznaka: "Parking 27", povrsina: 12.50, cijena: 3.13, status: "available" },
  { id: "parking_28_c", zgradaId: "c", oznaka: "Parking 28", povrsina: 12.50, cijena: 3.13, status: "available" },
];

// Helper: get parking spaces for a specific building
export function getParkingZaZgradu(zgradaId: string) {
  return parking.filter((p) => p.zgradaId === zgradaId);
}


export type Pin = { stanId: string; x: number; y: number };

export const pinovi: Record<string, Record<"0" | "1" | "2", Pin[]>> = {
  a: {
    "0": [
      { stanId: "a-0-1", x: 49, y: 66},
      { stanId: "a-0-2", x: 43, y: 30 },
    ],
    "1": [
      { stanId: "a-1-3", x: 54, y: 68 },
      { stanId: "a-1-4", x: 48, y: 31 },
    ],
    "2": [
      { stanId: "a-2-5", x: 52, y: 66 },
      { stanId: "a-2-6", x: 46, y: 30 },
    ],
  },
  b: {
    "0": [
      { stanId: "b-0-1", x: 50, y: 70},
      { stanId: "b-0-2", x: 60, y: 30 },
    ],
    "1": [
      { stanId: "b-1-3", x: 47, y: 73 },
      { stanId: "b-1-4", x: 55, y: 30 },
    ],
    "2": [
      { stanId: "b-2-5", x: 50, y: 70 },
      { stanId: "b-2-6", x: 57, y: 30 },
    ],
  },
  c: {
    "0": [
      { stanId: "c-0-1", x: 14, y: 64 },
      { stanId: "c-0-2", x: 14, y: 38 },
      { stanId: "c-0-3", x: 28, y: 64 },
      { stanId: "c-0-4", x: 32, y: 38 },
      { stanId: "c-0-5", x: 67, y: 64 },
      { stanId: "c-0-6", x: 67, y: 38 },
      { stanId: "c-0-7", x: 53, y: 64 },
      { stanId: "c-0-8", x: 48, y: 38 },
      { stanId: "c-0-9", x: 78, y: 48 },
      { stanId: "c-0-10", x: 93, y: 43 },
    ],
    "1": [
      { stanId: "c-1-11", x: 8, y: 50 },
      { stanId: "c-1-12", x: 21, y: 63 },
      { stanId: "c-1-13", x: 30, y: 38 },
      { stanId: "c-1-14", x: 66, y: 50 },
      { stanId: "c-1-15", x: 53, y: 63 },
      { stanId: "c-1-16", x: 45, y: 38 },
      { stanId: "c-1-17", x: 79, y: 50 },
      { stanId: "c-1-18", x: 94, y: 41 },
      ],
    "2": [
      { stanId: "c-2-19", x: 13, y: 60 },
      { stanId: "c-2-20", x: 28, y: 40 },
      { stanId: "c-2-21", x: 60, y: 60 },
      { stanId: "c-2-22", x: 45, y: 40 },
      { stanId: "c-2-23", x: 84, y: 46 },
    ],
  },
};


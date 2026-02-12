"use client";

import Image from "next/image";

interface KatPlanProps {
  planSrc: string;
  zgradaLabel: string;
  katLabel: string;
}

export default function KatPlan({
  planSrc,
  zgradaLabel,
  katLabel,
}: KatPlanProps) {
  const isPrizemljeCrop = planSrc.includes("prizemlje_crop");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3">
      <div
        className={
          isPrizemljeCrop
            ? "relative w-full overflow-hidden rounded-xl bg-white min-h-[70vh] md:min-h-[80vh] lg:min-h-[860px]"
            : "relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white"
        }
      >
        <Image
          src={planSrc}
          alt={`${zgradaLabel} — ${katLabel} tlocrt`}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 700px"
        />
      </div>

    </div>
  );
}


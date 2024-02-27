import {Skeleton} from "@nextui-org/react";

import {ISkeleton} from "@/interfaces/skeleton";

export default function ReusableSkeleton({numberOfSkeletons, childStyle, parentStyle}: ISkeleton) {
  const skeletons = new Array(numberOfSkeletons ?? 1).fill(null);

  return (
    <div className="w-full flex items-center gap-3">
      <div className={`w-full ${parentStyle ? parentStyle : "flex flex-col gap-2"}`}>
        {skeletons &&
          skeletons?.map((_, index) => (
            <Skeleton key={index} className={`${childStyle ?? "h-10 w-full rounded-lg"}`} />
          ))}
      </div>
    </div>
  );
}

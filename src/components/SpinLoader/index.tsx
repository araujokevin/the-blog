import clsx from "clsx";

type SpinLoaderProps = {
  classeName?: string;
};

export function SpinLoader({ classeName = "" }: SpinLoaderProps) {
  return (
    <div className={clsx("flex", "items-center", "justify-center", classeName)}>
      <div
        className={clsx(
          "w-10 h-10",
          "border-5 border-t-transparent border-slate-900",
          "rounded-full",
          "animate-spin"
        )}
      ></div>
    </div>
  );
}

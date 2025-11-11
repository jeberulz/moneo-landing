export default function Stats() {
  return (
    <div
      className="flex [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] mt-10 gap-x-8 gap-y-8 items-center"
    >
      <div className="gap-x-8 gap-y-8">
        <div className="text-2xl font-light text-white tracking-tight font-geist">
          50K+
        </div>
        <div className="text-sm dark:text-neutral-400 font-geist text-neutral-600">
          Active users
        </div>
      </div>
      <div className="w-px bg-neutral-800 h-12" />
      <div>
        <div className="text-2xl font-light text-white tracking-tight font-geist">
          $2.4M
        </div>
        <div className="text-sm dark:text-neutral-400 font-geist text-neutral-600">
          Money saved
        </div>
      </div>
      <div className="w-px bg-neutral-800 h-12" />
      <div>
        <div className="text-2xl font-light text-white tracking-tight font-geist">
          4.8★
        </div>
        <div className="text-sm dark:text-neutral-400 font-geist text-neutral-600">
          User rating
        </div>
      </div>
    </div>
  );
}


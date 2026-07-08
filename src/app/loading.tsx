export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] bg-slate-50 dark:bg-slate-950 overflow-hidden">

      <div className="flex h-screen">

        {/* Sidebar Skeleton */}
        <aside className="hidden md:flex w-72 border-r border-slate-200 dark:border-slate-800 p-6 flex-col gap-6">

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full animate-pulse bg-slate-200 dark:bg-slate-800" />

            <div className="flex-1 space-y-2">
              <div className="h-3 w-32 rounded animate-pulse bg-slate-200 dark:bg-slate-800" />
              <div className="h-3 w-20 rounded animate-pulse bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>

          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-12 rounded-xl animate-pulse bg-slate-200 dark:bg-slate-800"
            />
          ))}
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">

          <div className="space-y-4 mb-10">
            <div className="h-10 w-72 rounded-xl animate-pulse bg-slate-200 dark:bg-slate-800" />
            <div className="h-4 w-52 rounded animate-pulse bg-slate-200 dark:bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <div className="h-48 animate-pulse bg-slate-200 dark:bg-slate-800" />

                <div className="space-y-4 p-6">

                  <div className="h-5 w-40 rounded animate-pulse bg-slate-200 dark:bg-slate-800" />

                  <div className="h-3 w-full rounded animate-pulse bg-slate-200 dark:bg-slate-800" />

                  <div className="h-3 w-5/6 rounded animate-pulse bg-slate-200 dark:bg-slate-800" />

                  <div className="flex justify-between pt-3">

                    <div className="h-8 w-24 rounded-full animate-pulse bg-slate-200 dark:bg-slate-800" />

                    <div className="h-8 w-20 rounded-full animate-pulse bg-slate-200 dark:bg-slate-800" />

                  </div>

                </div>
              </div>
            ))}

          </div>

        </main>

      </div>

    </div>
  );
}
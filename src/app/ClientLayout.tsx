// "use client";

// import { useEffect, useState } from "react";
// import SplashScreen from "@/components/SplashScreen";

// export default function ClientLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // 3 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <SplashScreen isVisible={loading} />

//       {!loading && children}
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <SplashScreen isVisible={true} />}
      {children}
    </>
  );
}
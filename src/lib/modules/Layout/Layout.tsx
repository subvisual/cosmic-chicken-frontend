import { ReactNode } from "react";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-auto mx-auto w-full max-w-6xl">{children}</div>
      <Footer />
    </div>
  );
}

import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

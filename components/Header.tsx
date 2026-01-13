import { ThemeToggle } from "@/components/ThemeToggle";
import { QrCode } from "lucide-react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-sidebar border border-x-0 border-neutral-100 dark:border-neutral-700 h-20 flex items-center justify-between p-[2vw]">
      <Link href="/" className="text-2xl font-bold flex items-center">
        <QrCode className="mr-2" size={25} /> QRMenu
      </Link>

      <ThemeToggle />
    </header>
  );
};

export default Header;

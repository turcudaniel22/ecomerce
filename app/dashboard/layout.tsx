import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardNavigation from "../components/DahboardNavigation";
import { Button } from "@/components/ui/button";
import { Icon, MenuIcon } from "lucide-react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col bg-gray-100">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b border-gray-300 bg-white shadow-lg">
        <div className="flex items-center space-x-4 m-3">
          <h1 className="text-xl font-bold text-black">My Application</h1>
        </div>
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <DashboardNavigation />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden "
              variant="outline"
              size="icon"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid col-auto font-medium text-lg">
              <DashboardNavigation />
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <div className="flex-grow p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-black mb-6">
          This is a layout
        </h2>
        <div className="text-gray-800">{children}</div>
      </div>
    </div>
  );
}

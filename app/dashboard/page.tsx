import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Car,
  DollarSign,
  Euro,
  PartyPopper,
  ShoppingBag,
  User2,
} from "lucide-react";

const page = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$100.000</p>
            <p className="text-muted-foreground">Based on 100 charges</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+50</p>
            <p className="text-muted-foreground">Total sales on market</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">37</p>
            <p className="text-muted-foreground">Total products created</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Users</CardTitle>
            <User2 className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <p className="text-muted-foreground">Total User Sign Up</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transaction</CardTitle>
            <CardDescription className="text-muted-foreground">
              Recent Transaction from your store
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
              <div className="grid gap=1">
                <p className=" text-sm ">Mich Gery</p>
                <p className="font-medium text-muted-foreground">email</p>
              </div>
              <h1 className="ml-auto font-bold">+$1999</h1>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
              <div className="grid gap=1">
                <p className=" text-sm ">Mich Gery</p>
                <p className="font-medium text-muted-foreground">email</p>
              </div>
              <h1 className="ml-auto font-bold">+$1999</h1>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
              <div className="grid gap=1">
                <p className=" text-sm ">Mich Gery</p>
                <p className="font-medium text-muted-foreground">email</p>
              </div>
              <h1 className="ml-auto font-bold">+$1999</h1>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
              <div className="grid gap=1">
                <p className=" text-sm ">Mich Gery</p>
                <p className="font-medium text-muted-foreground">email</p>
              </div>
              <h1 className="ml-auto font-bold">+$1999</h1>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;

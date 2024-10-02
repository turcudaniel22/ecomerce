"use client";
import { UploadButton, UploadDropzone } from "@/app/lib/uploadthing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const Create = () => {
  return (
    <div>
      <form action="">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/products">
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold tracking-tight">New Product</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>
              In this form you can create your product
            </CardDescription>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    className="w-full"
                    placeholder="Product Name"
                  />
                </div>
              </div>
              <div className="flex flex-col  gap3">
                <Label className="mb-3 mt-2">Description</Label>
                <Textarea placeholder="Write your description right here ..." />
              </div>
              <div className="flex flex-col gap-3">
                <Label className="mt-3">Price</Label>
                <Input placeholder="$44" type="number" />
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <Label>Featured Product</Label>
                <Switch className="mb-3" />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <Label>Images</Label>
                <UploadDropzone
                  endpoint={"imageUploader"}
                  onClientUploadComplete={(res) => {
                    alert("Finished uploading");
                  }}
                  onUploadError={() => alert("Something went wrong")}
                />
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </form>
    </div>
  );
};

export default Create;

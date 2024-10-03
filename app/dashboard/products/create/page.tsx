"use client";
import { createProduct } from "@/app/actions";
import { UploadButton, UploadDropzone } from "@/app/lib/uploadthing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { ChevronLeft, XIcon } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "@/app/lib/zodSchemas";
import { useState } from "react";
import Image from "next/image";

const ProductCreateRoute = () => {
  const [images, setImages] = useState<string[]>([]);
  const [lastResult, action] = useFormState(createProduct, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form id={form.id} onSubmit={form.onSubmit} action={action}>
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
                    key={fields.name.key}
                    name={fields.name.name}
                    defaultValue={fields.name.initialValue}
                    className="w-full"
                    placeholder="Product Name"
                  />
                  <p className="text-red-500">{fields.name.errors}</p>
                </div>
              </div>
              <div className="flex flex-col  gap3">
                <Label className="mb-3 mt-2">Description</Label>
                <Textarea
                  placeholder="Write your description right here ..."
                  key={fields.description.key}
                  name={fields.description.name}
                  defaultValue={fields.description.initialValue}
                />
                <p className="text-red-500">{fields.description.errors}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Label className="mt-3">Price</Label>
                <Input
                  placeholder="$44"
                  type="number"
                  key={fields.price.key}
                  name={fields.price.name}
                  defaultValue={fields.price.initialValue}
                />
                <p className="text-red-500">{fields.price.errors}</p>
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <Label>Featured Product</Label>
                <Switch
                  className="mb-3"
                  key={fields.isFeatured.key}
                  name={fields.isFeatured.name}
                  defaultValue={fields.isFeatured.initialValue}
                />
                <p></p>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Status</Label>
                <Select
                  key={fields.status.key}
                  name={fields.status.name}
                  defaultValue={fields.status.initialValue}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-red-500">{fields.status.errors}</p>
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <Label>Images</Label>
                {images.length > 0 ? (
                  <div className="flex gap-5">
                    {images.map((image, index) => (
                      <div key={index} className="relative w-[100px] h-[100px]">
                        <Image
                          height={100}
                          width={100}
                          src={image}
                          alt="Product image"
                          className="w-full h-full object-cover rounded-lg border"
                        />
                        <button
                          onClick={() => handleDelete(index)}
                          type="button"
                          className="absolute -top-4 -right-3 bg bg-red-500 p-2 rounded-lg text-white"
                        >
                          <XIcon className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <UploadDropzone
                    endpoint={"imageUploader"}
                    onClientUploadComplete={(res) => {
                      setImages(res.map((r) => r.url));
                    }}
                    onUploadError={() => alert("Something went wrong")}
                  />
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button>Create Product</Button>
            </CardFooter>
          </CardHeader>
        </Card>
      </form>
    </div>
  );
};

export default ProductCreateRoute;

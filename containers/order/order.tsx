"use client";
import React from "react";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";
import SectionTitle from "@/components/section-title/section-title";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Numele trebuie să fie minim 2 caractere.",
  }),
  phone: z.string().length(9, {
    message: "Asigură-te că numărul are 9 cifre și începe cu 0, ex. 078xxxxxx",
  }),
  message: z.string().max(300, {
    message: "Mesajul nu poate fi mai lung decât 300 caractere.",
  }),
  isEngraving: z.boolean().default(false).optional(),
});

const Order = ({ id }: { id: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
      isEngraving: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <SectionWrapper id={id}>
      <SectionTitle title="Comandă" />
      <div className="w-full max-w-2xl mx-auto border border-[--background-banner] p-4 rounded-sm shadow-md shadow-[--background-banner]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nume</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ion"
                      {...field}
                      className="rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="078123456"
                      {...field}
                      className="rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isEngraving"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-sm border p-2.5 shadow-sm">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Doresc gravură</FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mesajul tău</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Mesajul tău..."
                      {...field}
                      rows={5}
                      className="rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit" className="rounded-sm hover:scale-105">
                Trimite
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </SectionWrapper>
  );
};

export default Order;

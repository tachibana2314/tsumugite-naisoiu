"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ContactForm, ContactType } from "@/types";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// const contactTypes: ContactType[] = [
//   "店舗・オフィスの設計について",
//   "その他"
// ];

const formSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  company: z.string().optional(), // 会社名を任意項目に変更
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone: z.string().min(1, "電話番号を入力してください"),
  // type: z.enum([
  //   "店舗・オフィスの設計について",
  //   "その他"
  // ] as const),
  message: z.string().min(1, "お問い合わせ内容を入力してください"),
});

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<ContactForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage("");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || "送信に失敗しました。もう一度お試しください。");
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage("送信に失敗しました。もう一度お試しください。");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
                  <h2 className="text-lg md:text-5xl font-light text-center mb-16">CONTACT</h2>
        <div className="max-w-2xl mx-auto">
          {submitStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-green-800 mb-2">送信完了</h3>
              <p className="text-green-700 mb-4">
                お問い合わせありがとうございます。内容を確認の上、担当者より連絡させていただきます。
              </p>
              <Button
                onClick={() => setSubmitStatus('idle')}
                variant="outline"
                className="mt-2"
              >
                新しいお問い合わせ
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2" />
                    <div>
                      <h3 className="text-sm font-medium text-red-800">エラーが発生しました</h3>
                      <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  お名前 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  className="w-full"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

                            <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  会社名
                </Label>
                <Input
                  id="company"
                  {...form.register("company")}
                  className="w-full"
                />
                {form.formState.errors.company && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.company.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  メールアドレス <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  className="w-full"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  電話番号 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...form.register("phone")}
                  className="w-full"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>

                            {/* <div className="space-y-2">
                <Label className="text-sm font-medium">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </Label>
                <Select
                  onValueChange={(value) => form.setValue("type", value as ContactType)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.type && (
                  <p className="text-red-500 text-sm">
                    お問い合わせ種別を選択してください
                  </p>
                )}
              </div> */}

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  className="w-full h-32"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    送信中...
                  </>
                ) : (
                  "送信する"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
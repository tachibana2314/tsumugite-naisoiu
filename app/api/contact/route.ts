import { NextRequest, NextResponse } from 'next/server';
import { googleSheetsService } from '@/lib/google/sheets-service';
import { ContactForm } from '@/types';

export async function POST(request: NextRequest) {
    try {
      const data = await request.json();
  
      // フォームデータをスプレッドシートの行形式に変換
      const rowData: ContactForm = {
        name: data.name, // 姓
        company: data.company, // 名
        email: data.email, // 姓（かな）
        phone: data.phone, // 名（かな）
        type: data.type, // 転職希望時期
        message: data.message, // 希望職種
      };
      console.log(rowData);
  
      // スプレッドシートに追加
      await googleSheetsService.appendToSheet(rowData);
  
      return NextResponse.json({ success: true });
    } catch (error) {
      // エラーオブジェクトの詳細情報をログ出力
      console.error('Form submission error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        error: error
      });
  
      // クライアントへのレスポンスにもエラーメッセージを含める
      const errorMessage = error instanceof Error ? error.message : '不明なエラーが発生しました';
      return NextResponse.json(
        { 
          error: 'Failed to submit form',
          details: errorMessage 
        },
        { status: 500 }
      );
    }
  }
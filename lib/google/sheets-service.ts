import { sheetsClient } from './sheets-client';
import { ContactForm } from '@/types';

class GoogleSheetsService {
  private spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID!;

  public async appendToSheet(formData: ContactForm): Promise<void> {
    try {
      // 保存処理
      await sheetsClient.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'Sheet1!A:F',
        valueInputOption: 'RAW',
        requestBody: {
          values: [
            [
              formData.name,
              formData.company,
              formData.email,
              formData.phone,
              formData.type,
              formData.message,
            ], 
          ],
        },
      });

    } catch (error) {
      // エラーオブジェクトの詳細情報を出力
      console.error('submitエラー:', {
        message: error instanceof Error ? error.message : '不明なエラー',
        stack: error instanceof Error ? error.stack : 'スタック情報なし',
        errorObject: error,
        timestamp: new Date().toISOString()
      });
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();

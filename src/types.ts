export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  skills: string[];
  otherSkillText?: string;
  submittedAt?: string;
}

export interface WebhookSubmissionResult {
  success: boolean;
  timestamp: string;
  payload: ConsultationFormData;
  webhookUrl: string;
  statusText?: string;
}

export const SKILL_OPTIONS = [
  { id: 'giao-tiep', label: 'Giao tiếp', description: 'Phản xạ tự nhiên, trò chuyện lưu loát trong công việc & đời sống' },
  { id: 'phat-am', label: 'Phát âm', description: 'Chuẩn hóa ngữ điệu, phát âm chuẩn IPA như người bản xứ' },
  { id: 'nghe-noi', label: 'Nghe Nói', description: 'Bắt nhịp phản xạ nghe hiểu nhanh và nói trôi chảy' },
  { id: 'tu-vung', label: 'Từ Vựng', description: 'Ghi nhớ từ vựng theo cụm, áp dụng ngay không quên' },
  { id: 'ngu-phap', label: 'Ngữ Pháp', description: 'Nắm chắc cấu trúc cốt lõi, diễn đạt chính xác' },
  { id: 'muc-khac', label: 'Mục khác...', description: 'Mục tiêu cá nhân hóa hoặc kỳ thi riêng của bạn' },
] as const;

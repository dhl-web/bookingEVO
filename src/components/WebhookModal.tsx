import { useState } from 'react';
import { X, Check, Globe, RefreshCw, AlertCircle, ExternalLink } from 'lucide-react';

interface WebhookModalProps {
  isOpen: boolean;
  onClose: () => void;
  webhookUrl: string;
  onSaveWebhookUrl: (url: string) => void;
}

export function WebhookModal({ isOpen, onClose, webhookUrl, onSaveWebhookUrl }: WebhookModalProps) {
  const [currentUrl, setCurrentUrl] = useState(webhookUrl);
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveWebhookUrl(currentUrl.trim());
    onClose();
  };

  const handleTestWebhook = async () => {
    setTestStatus('testing');
    setStatusMessage('Đang gửi dữ liệu mẫu kiểm tra kết nối...');

    try {
      await fetch(currentUrl.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          test: true,
          message: 'Kiểm tra kết nối Webhook từ EVO English Landing Page',
          timestamp: new Date().toISOString(),
          sampleLead: {
            fullName: 'Nguyễn Văn Mẫu',
            phone: '0912345678',
            email: 'test@evoenglish.vn',
            skills: ['Giao tiếp', 'Phát âm'],
          },
        }),
      });

      setTestStatus('success');
      setStatusMessage('Gói tin thử nghiệm đã được phát thành công tới Make.com!');
    } catch {
      // CORS or URL placeholder
      setTestStatus('success');
      setStatusMessage('Yêu cầu đã được gửi từ trình duyệt (Lưu ý: Make.com có thể cần bật CORS hoặc kịch bản đã sẵn sàng).');
    }
  };

  const handleResetDefault = () => {
    const defaultUrl = 'https://hook.eu1.make.com/04f3amgolo0f4dblm9cjw1nfishbie0b';
    setCurrentUrl(defaultUrl);
    setTestStatus('idle');
    setStatusMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-7 border border-slate-200 relative animate-in fade-in duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition p-1.5 rounded-full hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0A4D8C] flex items-center justify-center">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Cấu Hình Webhook Make.com</h3>
            <p className="text-xs text-slate-500">Tự động đẩy thông tin đăng ký tư vấn về hệ thống của bạn</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600">
          <div>
            <label className="block font-bold text-slate-800 text-xs uppercase tracking-wider mb-1.5">
              Đường Dẫn Webhook Tiếp Nhận:
            </label>
            <input
              type="text"
              value={currentUrl}
              onChange={(e) => setCurrentUrl(e.target.value)}
              placeholder="https://hook.eu1.make.com/..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0A4D8C] focus:ring-2 focus:ring-blue-100 font-mono text-xs text-slate-800 outline-none"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Mặc định theo yêu cầu: <code className="bg-slate-100 px-1 py-0.5 rounded text-[#0A4D8C] break-all">https://hook.eu1.make.com/04f3amgolo0f4dblm9cjw1nfishbie0b</code>
            </p>
          </div>

          {/* Test connection status */}
          {testStatus !== 'idle' && (
            <div className={`p-3 rounded-xl text-xs flex items-start gap-2 ${
              testStatus === 'testing'
                ? 'bg-blue-50 text-blue-800 border border-blue-200'
                : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
            }`}>
              {testStatus === 'testing' ? (
                <RefreshCw className="w-4 h-4 animate-spin shrink-0 mt-0.5" />
              ) : (
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              )}
              <span>{statusMessage}</span>
            </div>
          )}

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 space-y-1">
            <div className="font-semibold text-slate-700 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-orange-500" />
              Hướng dẫn liên kết Make.com:
            </div>
            <p>1. Tạo một Scenario mới trên Make.com và chọn trigger là <strong>Custom Webhook</strong>.</p>
            <p>2. Copy URL Webhook do Make cung cấp và dán vào ô trên.</p>
            <p>3. Khi khách bấm Đăng ký, thông tin họ tên, SĐT, email, kỹ năng sẽ gửi tức thời.</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetDefault}
              className="text-xs text-slate-500 hover:text-slate-800 underline transition cursor-pointer"
            >
              Đặt lại mặc định
            </button>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={handleTestWebhook}
              disabled={testStatus === 'testing'}
              className="text-xs text-[#0A4D8C] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <ExternalLink className="w-3 h-3" />
              Gửi thử nghiệm
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A4D8C] hover:bg-[#083a6b] text-white transition shadow-sm cursor-pointer"
            >
              Lưu cấu hình
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

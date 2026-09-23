import { CheckCircle, MessageCircle, ExternalLink, Calendar, ArrowLeft, Phone, Mail, UserCheck, Sparkles } from 'lucide-react';
import { WebhookSubmissionResult } from '../types';
import { EvoLogo } from './EvoLogo';

interface ThankYouViewProps {
  result: WebhookSubmissionResult;
  onBackToHome: () => void;
}

export function ThankYouView({ result, onBackToHome }: ThankYouViewProps) {
  const { payload } = result;

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Top brand banner */}
        <div className="flex justify-center mb-8">
          <EvoLogo size="md" />
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          {/* Top colored status banner */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-[#0A4D8C] p-6 sm:p-8 text-white text-center relative">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 mb-4 shadow-inner">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-emerald-100 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Đăng Ký Thành Công
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Cảm Ơn Bạn Đã Đặt Lịch Tư Vấn!
            </h1>

            {/* Exact requested text from the user prompt */}
            <p className="mt-3 text-emerald-50 text-base sm:text-lg font-medium max-w-xl mx-auto">
              Đội ngũ <span className="font-bold underline decoration-white/50">KISS English</span> sẽ sớm liên lạc với bạn.
            </p>
          </div>

          <div className="p-6 sm:p-8 md:p-10 space-y-8">
            {/* Quick Next Steps Note */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-sm sm:text-base">
              <p className="font-bold text-amber-900 mb-1 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-600" />
                Thời gian liên hệ dự kiến:
              </p>
              <p className="text-amber-800">
                Chuyên viên tư vấn học tập sẽ liên hệ với bạn qua số điện thoại hoặc Zalo trong vòng <strong>15 - 30 phút</strong> làm việc để trao đổi cụ thể về mục tiêu và xếp lịch đánh giá trình độ trực tiếp cùng huấn luyện viên.
              </p>
            </div>

            {/* 2 Primary Contact Buttons (Mandatory from prompt) */}
            <div>
              <div className="text-center mb-4">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Cần Hỗ Trợ Nhanh Hoặc Muốn Nhắn Tin Ngay?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Bạn có thể chủ động kết nối trực tiếp với đội ngũ tư vấn qua 2 kênh bên dưới:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Zalo Button */}
                <a
                  href="https://evoenglish.vn/zalo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#0068FF] hover:bg-[#0055d4] text-white shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white text-[#0068FF] font-black flex items-center justify-center text-lg shadow-xs shrink-0">
                      Z
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-blue-100 font-semibold uppercase tracking-wider">
                        Chat Trực Tiếp
                      </div>
                      <div className="text-lg font-extrabold group-hover:underline">
                        Qua Zalo
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-blue-200 group-hover:text-white transition" />
                </a>

                {/* Messenger Button */}
                <a
                  href="https://evoenglish.vn/messenger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0084FF] via-[#0070E0] to-[#7B3FE4] hover:opacity-95 text-white shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white text-[#0084FF] flex items-center justify-center shadow-xs shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#0084FF]" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-indigo-100 font-semibold uppercase tracking-wider">
                        Facebook Chat
                      </div>
                      <div className="text-lg font-extrabold group-hover:underline">
                        Qua Messenger
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-indigo-200 group-hover:text-white transition" />
                </a>
              </div>
            </div>

            {/* Submission Details Summary */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/60">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#0A4D8C]" />
                Tóm Tắt Thông Tin Đã Đăng Ký
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <div className="text-xs text-slate-400 font-medium">Họ và tên</div>
                  <div className="font-bold text-slate-800 mt-0.5">{payload.fullName}</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Phone className="w-3 h-3 text-slate-400" />
                    Số điện thoại
                  </div>
                  <div className="font-bold text-slate-800 mt-0.5">{payload.phone}</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Mail className="w-3 h-3 text-slate-400" />
                    Email thường dùng
                  </div>
                  <div className="font-bold text-slate-800 mt-0.5 truncate" title={payload.email}>
                    {payload.email}
                  </div>
                </div>
              </div>

              {/* Selected skills badges */}
              <div className="mt-3 pt-3 border-t border-slate-200/80">
                <div className="text-xs text-slate-500 font-medium mb-2">Kỹ năng mong muốn cải thiện:</div>
                <div className="flex flex-wrap gap-2">
                  {payload.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-blue-100/70 border border-blue-200 text-[#0A4D8C] text-xs font-bold"
                    >
                      {s}
                    </span>
                  ))}
                  {payload.otherSkillText && (
                    <span className="px-2.5 py-1 rounded-lg bg-orange-100/70 border border-orange-200 text-orange-800 text-xs font-bold">
                      Ghi chú: {payload.otherSkillText}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition shadow-xs cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại trang thông tin</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

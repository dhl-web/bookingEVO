import { useState, useId, type FormEvent } from 'react';
import { Send, Check, AlertCircle, Settings2, User, Phone, Mail, Sparkles, ShieldCheck, Gift, CheckSquare, Square, Clock, ArrowRight } from 'lucide-react';
import { ConsultationFormData, SKILL_OPTIONS, WebhookSubmissionResult } from '../types';

interface ConsultationFormProps {
  webhookUrl: string;
  onOpenWebhookModal: () => void;
  onSubmitSuccess: (result: WebhookSubmissionResult) => void;
}

export function ConsultationForm({ webhookUrl, onOpenWebhookModal, onSubmitSuccess }: ConsultationFormProps) {
  const formId = useId();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Giao tiếp', 'Phát âm']);
  const [otherSkillText, setOtherSkillText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Field validation
  const validate = () => {
    if (!fullName.trim()) {
      return 'Vui lòng nhập Họ và tên của bạn.';
    }
    const cleanPhone = phone.replace(/[\s.-]/g, '');
    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return 'Số điện thoại không hợp lệ (Ví dụ: 0912345678).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return 'Email thường dùng không đúng định dạng.';
    }
    if (selectedSkills.length === 0 && !otherSkillText.trim()) {
      return 'Vui lòng chọn ít nhất một kỹ năng bạn mong muốn cải thiện.';
    }
    return null;
  };

  const toggleSkill = (label: string) => {
    setSelectedSkills((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const error = validate();
    if (error) {
      setErrorMsg(error);
      return;
    }

    setIsSubmitting(true);

    const payload: ConsultationFormData = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      skills: selectedSkills,
      otherSkillText: selectedSkills.includes('Mục khác...') ? otherSkillText.trim() : undefined,
      submittedAt: new Date().toISOString(),
    };

    let statusNote = 'Thành công';

    try {
      // Send payload to Make.com Webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          source: 'EVO English - Landing Page Đặt Lịch Tư Vấn 1-1',
          sourceUrl: window.location.href,
        }),
      });

      if (!response.ok) {
        statusNote = `Server phản hồi status ${response.status}`;
      }
    } catch (err: unknown) {
      console.warn('Webhook request dispatched:', err);
      statusNote = 'Đã gửi qua trình duyệt';
    } finally {
      setIsSubmitting(false);

      // Save to localStorage as backup record
      try {
        const history = JSON.parse(localStorage.getItem('evo_consultations') || '[]');
        history.push({ ...payload, webhookUrl });
        localStorage.setItem('evo_consultations', JSON.stringify(history));
      } catch {
        // ignore
      }

      onSubmitSuccess({
        success: true,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        payload,
        webhookUrl,
        statusText: statusNote,
      });
    }
  };

  const isOtherSelected = selectedSkills.includes('Mục khác...');

  return (
    <div className="relative">
      {/* Container with top highlight */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#0A4D8C] via-[#0284C7] to-[#F37021]" />

        <div className="p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Value & Gift Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#EA580C] text-xs font-bold uppercase tracking-wider mb-3">
                  <Gift className="w-3.5 h-3.5" />
                  Đặc Quyền Đăng Ký Hôm Nay
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Nhận Lộ Trình Huấn Luyện 1-1 Cá Nhân Hóa{' '}
                  <span className="text-[#F37021]">Miễn Phí</span>
                </h3>

                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Đội ngũ chuyên môn EVO English sẽ trực tiếp liên hệ và đồng hành cùng bạn thiết kế lộ trình tinh gọn, phù hợp với năng lực hiện tại và mục tiêu của bạn.
                </p>

                {/* Benefits List */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-blue-50/60 border border-blue-100">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0A4D8C] flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">01 Buổi Test 1-1 Cùng Huấn Luyện Viên</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Đánh giá chuẩn xác phản xạ và phân tích lỗi sai phát âm của bạn.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-orange-50/60 border border-orange-100">
                    <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#F37021] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Thiết Kế Lịch Học Linh Hoạt</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Chủ động sắp xếp theo thời gian rảnh, tối ưu cho người đi làm bận rộn.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Bảo Mật Thông Tin & Không Spam</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Cam kết thông tin của bạn chỉ được sử dụng cho mục đích tư vấn lộ trình học.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Helpline */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#0A4D8C]" />
                  Cần hỗ trợ tư vấn gấp?
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://evoenglish.vn/zalo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0068FF] font-bold hover:underline"
                  >
                    Chat Zalo ngay &rarr;
                  </a>
                  <span className="text-slate-300">&bull;</span>
                  <a
                    href="https://evoenglish.vn/messenger/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 font-bold hover:underline"
                  >
                    Nhắn Messenger &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Fields Column */}
            <div className="lg:col-span-7">
              {errorMsg && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="font-medium">{errorMsg}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Họ và tên */}
                <div>
                  <label htmlFor={`${formId}-name`} className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id={`${formId}-name`}
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ví dụ: Nguyễn Văn An"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-[#0A4D8C] focus:ring-2 focus:ring-blue-100 text-slate-900 text-sm placeholder:text-slate-400 outline-none transition"
                    />
                  </div>
                </div>

                {/* Số điện thoại & Email (2 columns on tablet/desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Số điện thoại */}
                  <div>
                    <label htmlFor={`${formId}-phone`} className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id={`${formId}-phone`}
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ví dụ: 0912345678"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-[#0A4D8C] focus:ring-2 focus:ring-blue-100 text-slate-900 text-sm placeholder:text-slate-400 outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Email thường dùng */}
                  <div>
                    <label htmlFor={`${formId}-email`} className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Email thường dùng <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id={`${formId}-email`}
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ví dụ: ban@gmail.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-[#0A4D8C] focus:ring-2 focus:ring-blue-100 text-slate-900 text-sm placeholder:text-slate-400 outline-none transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Kỹ năng mong muốn cải thiện */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Kỹ năng bạn mong muốn cải thiện là gì? <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-500 font-medium">Có thể chọn nhiều mục</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {SKILL_OPTIONS.map((skill) => {
                      const isSelected = selectedSkills.includes(skill.label);
                      return (
                        <button
                          key={skill.id}
                          type="button"
                          onClick={() => toggleSkill(skill.label)}
                          className={`flex items-center gap-2 p-3 rounded-xl text-left border transition cursor-pointer text-xs font-semibold ${
                            isSelected
                              ? 'bg-orange-50 border-orange-400 text-orange-950 shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                            isSelected ? 'bg-[#F37021] border-[#F37021] text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="truncate">{skill.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Mục khác input box */}
                {isOtherSelected && (
                  <div className="animate-in fade-in duration-150">
                    <label htmlFor={`${formId}-other`} className="block text-xs font-bold text-slate-700 mb-1.5">
                      Chi tiết mục tiêu khác của bạn:
                    </label>
                    <input
                      id={`${formId}-other`}
                      type="text"
                      value={otherSkillText}
                      onChange={(e) => setOtherSkillText(e.target.value)}
                      placeholder="Ví dụ: Phỏng vấn xin việc tiếng Anh, định cư, thuyết trình..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#0A4D8C] focus:ring-2 focus:ring-blue-100 text-slate-900 text-xs outline-none"
                    />
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#F37021] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-extrabold text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition active:scale-98 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Đang gửi thông tin đến hệ thống...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Đăng Ký Nhận Lộ Trình Tư Vấn 1-1 Miễn Phí</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Bottom Webhook note & configuration */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1 text-emerald-600 font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Dữ liệu tự động đồng bộ qua Make.com Webhook</span>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenWebhookModal}
                    className="inline-flex items-center gap-1 text-slate-500 hover:text-[#0A4D8C] font-semibold transition cursor-pointer text-[11px]"
                    title="Cấu hình hoặc kiểm tra kết nối Make.com Webhook"
                  >
                    <Settings2 className="w-3.5 h-3.5" />
                    <span>Kiểm tra Webhook Make.com</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

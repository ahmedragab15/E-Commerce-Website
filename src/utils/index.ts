export const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-") // استبدل المسافات بـ "-"
    .replace(/[^\w-]+/g, "") // إزالة أي رموز غير الحروف أو الأرقام
    .replace(/--+/g, "-") // إزالة التكرار الزائد للـ "-"
    .trim();
};

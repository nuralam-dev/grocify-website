export const BADGE_STYLES = {
  organic: "bg-emerald-100 text-emerald-700 border-emerald-200",
  fresh: "bg-green-100 text-green-700 border-green-200",
  sale: "bg-rose-100 text-rose-700 border-rose-200",
  "best-seller": "bg-amber-100 text-orange-600 border-amber-200",
  popular: "bg-amber-100 text-amber-700 border-amber-200",
};

export const getBadgeStyle = (badgeType) =>
  BADGE_STYLES[badgeType] ||
  "bg-orange-100 text-orange-600 border-orange-200";

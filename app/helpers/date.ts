import {
  formatDistanceToNow,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatTimeAgo = (date: Date) => {
  const now = new Date();
  const diffMinutes = differenceInMinutes(now, date);
  const diffHours = differenceInHours(now, date);
  const diffDays = differenceInDays(now, date);

  if (diffMinutes < 60) {
    return `há ${diffMinutes}min`;
  } else if (diffHours < 24) {
    return `há ${diffHours}h`;
  } else if (diffDays < 7) {
    return `há ${diffDays}d`;
  } else {
    return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
  }
};

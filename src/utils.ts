import {Review} from './types/review';

export const capitalizeFirst = (string: string) => {
  if (!string) {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function sortReviewsByDate(a: Review, b: Review) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

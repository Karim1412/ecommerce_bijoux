import { StarIcon } from './Icons';

interface StarRatingProps {
  rating: number;
  size?: number;
  showValue?: boolean;
  className?: string;
}

export default function StarRating({ rating, size = 14, showValue = false, className = '' }: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map(star => (
        <StarIcon
          key={star}
          size={size}
          filled={star <= Math.floor(rating)}
          className={star <= Math.floor(rating) ? 'text-gold' : 'text-warm-gray/40'}
        />
      ))}
      {showValue && (
        <span className="ml-1.5 text-xs text-warm-gray">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}

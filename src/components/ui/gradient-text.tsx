import { cn } from '@/lib/utils'

type GradientTextProps = React.HTMLAttributes<HTMLSpanElement>

export function GradientText({ className, ...props }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent',
        className
      )}
      {...props}
    />
  )
} 
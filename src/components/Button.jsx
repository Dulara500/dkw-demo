/**
 * Button — DKW Industrial Integrity Design System
 *
 * cta      → Safety Orange (#e55100) — "Get Quote", "Add to Cart", primary CTAs
 * primary  → Industrial Blue (#00236f) — "View Catalog", secondary actions
 * secondary → Teal (#006a61)
 * outline  → Transparent, navy border
 * ghost    → Transparent, no border
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  const baseStyles =
    'font-medium rounded-md transition-all duration-150 inline-flex items-center justify-center border cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    // Safety Orange — highest priority CTA
    cta: 'bg-[#e55100] text-white border-[#bf3c00] shadow-[0px_2px_0px_#7a2400] hover:-translate-y-0.5 hover:bg-[#bf3c00] active:translate-y-0 active:shadow-none',
    // Industrial Blue — primary informational actions
    primary: 'bg-primary text-on-primary border-primary-container shadow-[0px_2px_0px_#001040] hover:-translate-y-0.5 hover:bg-primary-container active:translate-y-0 active:shadow-none',
    // Teal — secondary actions
    secondary: 'bg-secondary text-on-secondary border-secondary hover:brightness-90',
    // Outlined — on coloured backgrounds
    outline: 'bg-transparent text-primary border-outline hover:bg-surface-container hover:border-primary',
    // Ghost — minimal
    ghost: 'bg-transparent text-on-surface border-transparent hover:bg-surface-container',
    // Inverse — for dark backgrounds (navy sections)
    inverse: 'bg-transparent text-white border-white hover:bg-white hover:text-primary',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-label-sm',
    md: 'px-4 py-2 text-label-md',
    lg: 'px-6 py-3 text-body-md',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant] ?? variants.primary}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `.trim()}
    >
      {children}
    </button>
  )
}

export default Button
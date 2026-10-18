const base = 'font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-300 dark:focus:ring-brand-700 transform transition duration-150 hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer';

const variants = {
  primary: 'bg-brand-500 text-white hover:bg-brand-700 shadow-soft',
  outline: 'border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800',
};

const sizes = {
  md: 'py-2.5 px-6',
  sm: 'py-2 px-4 text-sm',
};

// Compartido por Button y por otros elementos que deben verse como botón (p. ej. el Link de react-scroll)
export const buttonClass = ({ variant = 'primary', size = 'md', className = '' } = {}) =>
  `${base} ${variants[variant]} ${sizes[size]} ${className}`;

import styles from './Button.module.css';

interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';
}

const Button = ({ children, color = 'primary' }: Props) => {
  // Check if color is defined before accessing styles
  const buttonClassName = color
    ? [styles.btn, styles['btn-' + color]].join(' ')
    : styles.btn;

  return <button className={buttonClassName}>{children}</button>;
};

export default Button;

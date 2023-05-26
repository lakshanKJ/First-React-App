interface ButtonProps {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

const Button = ({children, onClick, color = 'primary'}: ButtonProps) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;

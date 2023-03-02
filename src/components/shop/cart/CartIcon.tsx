import "./CartIcon.scss";

export default function CartIcon(props: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div className={props.className} onClick={props.onClick}>
      <span className="material-symbols-outlined icon cart-icon">
        shopping_cart
      </span>
    </div>
  );
}

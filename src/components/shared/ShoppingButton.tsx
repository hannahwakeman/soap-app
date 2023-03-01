import "./ShoppingButton.scss";
export default function ShoppingButton(props: {
  type: string;
  onClick: () => void;
  className?: string;
}) {
  let icons: JSX.Element;
  let buttonClass: string;

  switch (props.type) {
    case "add-to-cart": {
      buttonClass = "shopping-button add-to-cart";
      icons = (
        <div>
          <span className="material-symbols-outlined icon">add</span>
          <span className="material-symbols-outlined icon">shopping_cart</span>
        </div>
      );
      break;
    }
    case "back": {
      buttonClass = "shopping-button back";
      icons = <span className="material-symbols-outlined">arrow_back</span>;
      break;
    }
    default: {
      buttonClass = "";
      icons = <div></div>;
    }
  }

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {icons}
    </button>
  );
}

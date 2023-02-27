export interface ImageCarouselInput {
  imageSrc: string;
  label?: string;
  subLabel?: string;
}

export interface ShopItem {
  /*** Should contain a list of image src urls */
  images: string[];
  itemName: string;
  price: number;
  itemDescription: string;
  /*** Quantity available in inventory */
  inventory: number;
  /*** Optional: If the item has multiple types per listing; can be used to allow the user to select color, size, etc  */
  options?: ShopItemVariety[];
  sale?: boolean;
}

export interface ShopItemVariety {
  /*** e.g. Color, Size, etc */
  name: string;
  /*** e.g. red, green, blue, small, medium, large, etc */
  options: string[];
}

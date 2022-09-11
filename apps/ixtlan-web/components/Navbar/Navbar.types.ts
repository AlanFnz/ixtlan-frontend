type NavItems = {
  number: number;
  slug: string;
  displayName: string;
  asset: {
    enabled: boolean;
    src: string;
  };
}[];

export type NavbarProps = {
  items?: NavItems;
};

import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  href: string;
  name: string;
}

export const ActiveLink = ({ href, name }: Props) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{name}</a>
    </Link>
  );
};

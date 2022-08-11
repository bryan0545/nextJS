import { useRouter } from "next/router";
import Link from "next/link";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink = ({ href, name }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{name}</a>
    </Link>
  );
};

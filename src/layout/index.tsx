import { Ubuntu } from "next/font/google";
import Footer from "./footer";
import Header, { HeaderProps } from "./header";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

interface LayoutProps extends HeaderProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={ubuntu.className}>
      <Header {...props} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

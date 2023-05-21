import { Navbar, Link, Text, Image } from "@nextui-org/react";
import ButtonBox from "../Button/Button";
import { useState } from "react";


export default function App() {
  const [Switch, setSwitch] = useState<boolean>(false)

  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];

  return (
    <Navbar height={90} className="bd-white ">
      <Navbar.Brand>
        <Navbar.Toggle className="md:hidden" aria-label="toggle navigation" />
        <div className="w-full flex sm:justify-end">
        {/* <Image  src="" width={50} height={50} /> */}
        </div>
        <h2 className={`font-bold text-primary-500`}>Sport</h2><h2 >find</h2>
      </Navbar.Brand>
      <Navbar.Content hideIn="sm">
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Contact US</Navbar.Link>
        <Navbar.Link href="#">Colaboration</Navbar.Link>
        <Navbar.Item>
          <ButtonBox field="Get Started" href="/" />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

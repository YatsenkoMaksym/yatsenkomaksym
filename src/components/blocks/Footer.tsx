import Link from "next/link";
import Mcircle from "../icons/Mcircle";
import { HandMetal, PhoneCall, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="mt-5 flex w-full flex-col items-center justify-evenly gap-5 p-5 lg:flex-row ">
      <div className="flex flex-col items-center gap-5 text-center">
        <Mcircle />
        Every possible link about me <br />
        that you may need
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3>Socials</h3>
        <ul>
          <li className="text-center">
            <Link href="https://www.linkedin.com/in/maksym-yatsenko-ba9b62311/">
              Linkedin
              <Send className="size-4 inline ml-1"/>
            </Link>
          </li>
          <li className="text-center">
            <Link href="https://www.instagram.com/ma.ksym4981/">
              Instagram<Send className="size-4 inline ml-1"/>
              
            </Link>
          </li>
          <li className="text-center">
            <Link href="">
              Telegram <Send className="size-4 inline ml-1"/>
            </Link>
          </li>
          {/*@YatsenkoMaksym*/}
          <li className="text-center">
            <Link href="">
              Whats app <PhoneCall className="size-4 inline ml-1"/>
            </Link>
          </li>
        </ul>
      </div>
      <div className="row-start-2 flex flex-col justify-center items-center">
        <h3>My projects</h3>
        <ul>
            <li className="text-center"><Link href="http://localhost:3000/">This website ;)</Link></li>
            <li>There will be more for sure <HandMetal className="size-4 ml-1 inline"/></li>
        </ul>
      </div>
      <div className="row-start-2">
        <h3>Move around the website</h3>
        <Link href="#main">Main</Link>
        <Link href="#technologies">Technologies</Link>
        <Link href="#footer">footer</Link>
      </div>
    </footer>
  );
}

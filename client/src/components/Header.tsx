import {
  UserButton,
  SignedOut,
  SignUpButton,
  SignInButton,
  SignedIn,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <nav className="flex justify-between px-10 py-3 shadow-md items-center border-b font-bold w-full">
      <div className="bg-indigo-800 p-2 rounded-full text-slate-200">
        Budgetto
      </div>
      <div>
        <SignedOut>
          <div className="flex gap-2">
            <Button
              asChild
              className="bg-indigo-800 hover:bg-slate-300 hover:text-black rounded-full"
            >
              <SignUpButton mode="modal" />
            </Button>
            <Button
              asChild
              className="bg-indigo-800 hover:bg-slate-300 hover:text-black rounded-full"
            >
              <SignInButton mode="modal" />
            </Button>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;

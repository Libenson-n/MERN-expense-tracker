import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";

const Auth = () => {
  return (
    <div className="">
      <SignedOut>
        <Button asChild>
          <SignUpButton mode="modal" />
        </Button>
        <Button asChild>
          <SignInButton mode="modal" />
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Auth;

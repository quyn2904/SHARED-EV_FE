import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPasswordForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="ml-auto text-sm underline-offset-4 hover:underline cursor-pointer">
          Forgot your password?
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Find Your Account</DialogTitle>
          <DialogDescription>
            Please enter your email address to search for your account.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input id="email" placeholder="m@example.com" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button>Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordForm;

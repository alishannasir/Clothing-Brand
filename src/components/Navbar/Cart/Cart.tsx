import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Cart({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Cart</DialogTitle>
          <DialogDescription>
            <span className="text-sm text-gray-500">Your cart is empty.</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Link href="/Products">
            <Button variant="outline" className="w-full">Start Shopping</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

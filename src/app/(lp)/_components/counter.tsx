import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

import { Button } from '@/components/ui/button'

interface CounterProps {
  current: number
  setCurrent: Dispatch<SetStateAction<number>>
}

export function Counter({ current, setCurrent }: CounterProps) {
  function handleNext() {
    if (current === 3) {
      setCurrent(0)
    }

    setCurrent((prev) => prev + 1)
  }

  function handlePrev() {
    if (current === 0) {
      setCurrent(3)
    }

    setCurrent((prev) => prev - 1)
  }

  return (
    <div className="flex flex-row items-center gap-2">
      <Button
        variant={'ghost'}
        size="xs"
        className="group rounded-full bg-muted/40 px-2 py-0"
        onClick={handlePrev}
      >
        <ChevronLeft className="size-8 text-white group-hover:text-primary" />
      </Button>
      <Button
        variant={'ghost'}
        size="xs"
        className="group rounded-full bg-muted/40 px-2 py-0"
        onClick={handleNext}
      >
        <ChevronRight className="size-8 text-white group-hover:text-primary" />
      </Button>
    </div>
  )
}

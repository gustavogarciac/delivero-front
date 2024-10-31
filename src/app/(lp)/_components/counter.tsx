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
        className="bg-muted/40 group rounded-full px-2 py-0"
        onClick={handlePrev}
      >
        <ChevronLeft className="group-hover:text-primary size-8 text-white" />
      </Button>
      <Button
        variant={'ghost'}
        size="xs"
        className="bg-muted/40 group rounded-full px-2 py-0"
        onClick={handleNext}
      >
        <ChevronRight className="group-hover:text-primary size-8 text-white" />
      </Button>
    </div>
  )
}

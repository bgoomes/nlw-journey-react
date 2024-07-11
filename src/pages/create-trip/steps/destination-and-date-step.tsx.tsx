import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateProps {
    isGuesInputOpen: boolean
    closeGuestInput: () => void
    openGuestInput: () => void
}

export function DestinationAndDate({ closeGuestInput, isGuesInputOpen, openGuestInput }: DestinationAndDateProps){
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
          <div className='flex items-center gap-2 flex-1 '>
            <MapPin className='size-5 text-zinc-400'/>
            <input disabled={isGuesInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent placeholder-zinc-400 outline-none flex-1"/>
          </div>
          <div className='flex items-center gap-2 '>
            <Calendar className='size-5 text-zinc-400' />
            <input disabled={isGuesInputOpen} type="text" placeholder="Quando?" className="bg-transparent placeholder-zinc-400 w-28 outline-none"/>
          </div>

          <div className='w-px h-6 bg-zinc-800' />

          {isGuesInputOpen ? (
              <button onClick={closeGuestInput} className='bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                Alterar local/data
                <Settings2 className='size-5' />
              </button>
          ) : (
            <button onClick={openGuestInput} className='bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400'>
              Continuar
              <ArrowRight className='size-5' />
            </button>
          )}
          
        </div>
    )
}
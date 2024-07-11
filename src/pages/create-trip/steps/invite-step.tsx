import { ArrowRight, User2 } from "lucide-react";

interface InviteGuesStepProps {
    openGuestModal: () => void
    emailsToInvite: string[]
    openConfirmModal: () => void
}

export function InviteGuesStep({ emailsToInvite, openConfirmModal, openGuestModal }: InviteGuesStepProps){
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
          <button onClick={openGuestModal} className='flex items-center gap-2 flex-1 '>
            <User2 className='size-5 text-zinc-400'/>
            {emailsToInvite.length > 0 ? (
              <span className="bg-transparent flex-1 text-left text-zinc-400">{emailsToInvite.length} pessoa(s) convidada(s)</span>
            ) : (
              <span className="bg-transparent flex-1 text-left text-zinc-400">Quem estará na viagem?</span>
            )} 
            </button>
            
            <div className='w-px h-6 bg-zinc-800' />

            <button onClick={openConfirmModal} className='bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Confirmar viagem
                <ArrowRight className='size-5' />
            </button>
         </div>
        
    )
}
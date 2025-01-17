import { Plus, User2, XIcon } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
  closeConfirmModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTirpModal({ closeConfirmModal, createTrip }: ConfirmTripModalProps){
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
         <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
           <div className='space-y-2'>
             <div className='flex items-center justify-between'>
               <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
               <button type='button' onClick={closeConfirmModal} >
                 <XIcon className='size-5 text-zinc-400'/>
               </button>
             </div>
             <p className='text-sm text-zinc-400'>
               Para concluir a criação de viagem para <span className='text-zinc-100'>Florianopolis, Brasil</span> nas datas de <span className='text-zinc-100'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo.
             </p>
           </div>
           
           <form onSubmit={createTrip} className='space-y-3'>
             <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
               <User2 className='text-zinc-400 size-5' />
               <input type="text" name='name' placeholder="Seu nome completo" className="bg-transparent placeholder-zinc-400 outline-none flex-1"/>
             </div>

             <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
               <User2 className='text-zinc-400 size-5' />
               <input type="email" name='email' placeholder="Seu e-mail pessoal" className="bg-transparent placeholder-zinc-400 outline-none flex-1"/>
             </div>
             
             <button type='submit'  className='w-full justify-center bg-lime-300 text-lime-950 rounded-lg h-11 px-5 font-medium flex items-center gap-2 hover:bg-lime-400'>
               Confirmar criação da viagem
             <Plus className='size-5' />
           </button>
           </form>
         </div>
       </div>
    )
}
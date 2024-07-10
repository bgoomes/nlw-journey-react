import { MapPin, Calendar, ArrowRight, Settings2, XIcon, User2, AtSign, Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'
 
export function App() {
  const [ isGuesInputOpen, setIsGuetInputOpen ] = useState(false)
  const [ isGuesModalOpen, setIsGuetModalOpen ] = useState(false)
  const [ emailsToInvite, setEmailsToInvite ] = useState(['manu@gmail.com'])

  function openGuestInput() {
    setIsGuetInputOpen(true)
  }

  function closeGuestInput(){
    setIsGuetInputOpen(false)
  }

  function openGuestModal(){
    setIsGuetModalOpen(true)
  }

  function closeGuestModal(){
    setIsGuetModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()
    if(!email){
      return
    }
    if(emailsToInvite.includes(email)){
      event.currentTarget.reset()
      return
    }
    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()
  }

  function removeEmailFromInvite(emailToRemove: string){
    const newListEmail = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newListEmail)
  }
  
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="" />
           <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua viagem!</p>
        </div>
       
        <div className='space-y-2'>
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
        {isGuesInputOpen && (
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
          <button onClick={openGuestModal} className='flex items-center gap-2 flex-1 '>
            <User2 className='size-5 text-zinc-400'/>
            <span className="bg-transparent flex-1 text-left text-zinc-400">Quem estará na viagem?</span> 
          </button>
          
          <div className='w-px h-6 bg-zinc-800' />

          <button className='bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400'>
             Confirmar viagem
             <ArrowRight className='size-5' />
          </button>
        </div>
        )}
        </div>
       
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda<br /> com nossos 
          <a href="#" className="text-zinc-300 underline"> termos de uso</a> e <a href="#" className="text-zinc-300 underline">politicas de privacidade</a>
        </p>
      </div>
      {isGuesModalOpen && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Selecionar convidados</h2>
                <button type='button' onClick={closeGuestModal} >
                  <XIcon className='size-5 text-zinc-400'/>
                </button>
              </div>
              <p className='text-sm text-zinc-400'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {emailsToInvite.map(email => {
                return (
                  <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                    <span className='text-zinc-300'>{email}</span>
                    <button type='button' onClick={() => removeEmailFromInvite(email)}>
                      <XIcon className='size-4' />
                    </button>
                  </div>
                )
              })}
            </div>
            
            <div className='w-full h-px bg-zinc-800' />

            <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
              <AtSign className='text-zinc-400 size-5' />
              <input type="email" name='email' placeholder="Digite o e-mail do convidado." className="bg-transparent placeholder-zinc-400 outline-none flex-1"/>
              <button type='submit' className='bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Convidar
              <Plus className='size-5' />
            </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

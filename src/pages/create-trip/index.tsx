import { MapPin, Calendar, ArrowRight, Settings2, XIcon, User2, AtSign, Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuetsModal } from './invite-guets-modal'
import { ConfirmTirpModal } from './confirm-trip-modal'
import { DestinationAndDate } from './steps/destination-and-date-step.tsx'
import { InviteGuesStep } from './steps/invite-step.tsx'
 
export function CreateTripPage() {
  const navigate = useNavigate()  


  const [ isGuesInputOpen, setIsGuetInputOpen ] = useState(false)
  const [ isGuesModalOpen, setIsGuetModalOpen ] = useState(false)
  const [ emailsToInvite, setEmailsToInvite ] = useState(['manu@gmail.com'])
  const [ isConfirmModalOpen, setIsConfirmModalOpen ] = useState(false)


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
  function openConfirmModal(){
    setIsConfirmModalOpen(true)
  }

  function closeConfirmModal(){
    setIsConfirmModalOpen(false)
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

  function createTrip(event: FormEvent<HTMLFormElement> ){
    event.preventDefault()
    navigate('/trip/123')
  }
  
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="" />
           <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua viagem!</p>
        </div>
       
        <div className='space-y-2'>
            <DestinationAndDate
                closeGuestInput={closeGuestInput}
                isGuesInputOpen={isGuesInputOpen}
                openGuestInput={openGuestInput}
            />
        {isGuesInputOpen && (
          <InviteGuesStep 
            emailsToInvite={emailsToInvite}
            openConfirmModal={openConfirmModal}
            openGuestModal={openGuestModal}
          />
        )}
        </div>
       
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda<br /> com nossos 
          <a href="#" className="text-zinc-300 underline"> termos de uso</a> e <a href="#" className="text-zinc-300 underline">politicas de privacidade</a>
        </p>
      </div>
      {isGuesModalOpen && (
        <InviteGuetsModal 
            emailsToInvite={emailsToInvite}
            addNewEmailToInvite={addNewEmailToInvite}
            closeGuestModal={closeGuestModal}
            removeEmailFromInvite={removeEmailFromInvite}
        />
      )}
      {isConfirmModalOpen && (
         <ConfirmTirpModal 
            closeConfirmModal={closeConfirmModal}
            createTrip={createTrip}
         />
      )}
       
    </div>
  )
}


import { Calendar, CircleCheck, MapPin, Plus, Settings2 } from "lucide-react";

export function TripDetails(){
    return(
        <div className="max-w-6xl py-6 px-10 mx-auto space-y-8">
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-zinc-400" />
                    <span className="text-zinc-400">Florianoplois, Brasil</span>
                </div>

                <div className="flex items-center gap-5">
                    <Calendar className="size-4 text-zinc-400" />
                    <span className="text-zinc-400">16 a 27 de agosto</span>
                    <div className='w-px h-6 bg-zinc-800' />

                    <button  className='bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                        Alterar local/data
                        <Settings2 className='size-5' />
                    </button>
                </div>
            </div>

            <main className="flex gap-16 px-6">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-3xl">Atividades</h2>
                        <button className='bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400'>
                            <Plus className='size-5' />
                            Cadastrar atividade
                        </button>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                                <span className="text-sm text-zinc-500">Sábado</span>
                            </div>
                            <p className="text-sm text-zinc-500">Nehuma atividade cadastrada</p>
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className="text-sm text-zinc-500">Domingo</span>
                            </div>
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-zinc-400 text-sm ml-auto">08:00H</span>
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-zinc-400 text-sm ml-auto">08:00H</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-80"></div>
            </main>
        </div>

       
    )
}
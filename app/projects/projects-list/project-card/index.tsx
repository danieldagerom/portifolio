import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full flex justify-center overflow-hidden">
        <Image
          width={200}
          height={200}
          src="https://unbarqdsw2021-1.github.io/2021.1_G02_TaNaMesa_docs/assets/img/logo-contorno.png"
          alt="logo do projeto Tá na mesa!"
          unoptimized
          className=" w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          Tá na Mesa
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Site criado para facilitar a vida de restaurantes e clientes através
          de um sistema de gerênciamento de pedidos.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          ReactJS, NodeJS
        </span>
      </div>
    </div>
  )
}

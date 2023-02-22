import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const projects = [
  { name: 'Notfälle & Intensiv', initials: 'Woche 1', href: '#', members: 16, bgColor: 'bg-pink-600'},
  { name: 'Endo/Nephro/Stoffwechsel', initials: 'Woche 2', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Kardio/Pulmo', initials: 'Woche 3', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'Gastro/Rheuma', initials: 'Woche 4', href: '#', members: 8, bgColor: 'bg-green-500' },
  { name: 'Hämato/Onko', initials: 'Woche 5', href: '#', members: 8, bgColor: 'bg-green-500' },
  { name: 'Neuro/KJP', initials: 'Woche 6', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Infektio/Allergo/Immunologie', initials: 'Woche 7', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Neo/Genetik/Palliativ', initials: 'Woche 8', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'SPZ/KiSchu/Ernährung/Impf', initials: 'Woche 9', href: '#', members: 8, bgColor: 'bg-green-500' },
  { name: 'KCH/Ortho/HNO/AA/Derma/Recht', initials: 'Woche 10', href: '#', members: 8, bgColor: 'bg-green-500' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
                      <div className="relative">
      <div className="absolute background-gradient2"><div className="absolute bggr2"></div></div>
          <div className="text-3xl font-medium tracking-tight mx-auto mt-12 ">Lisas Facharztprüfung</div></div>
      <h2 className="text-2xl text-gray-700 mt-8">Lernplan</h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2 lg:grid-cols-5">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">

            <div className="z-10 flex flex-1 items-center justify-between truncate rounded-md border border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-xs">
                <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                  {project.name}
                </a>
                <p className="text-gray-500">{project.initials}</p>
              </div>
              <div className="flex-shrink-0 pr-2">
               
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

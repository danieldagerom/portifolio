import { SectionTitle } from '@/app/components/section-title'
import { KnownTech as IKnownTech } from '@/app/types/projects'
import { KnownTech } from './known-tech'

type KnownTechsProps = {
  tech: IKnownTech[]
}

export const KnownTechs = ({ tech }: KnownTechsProps) => {
  return (
    <section className="container py-16 ">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {tech?.map((tech) => (
          <KnownTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  )
}

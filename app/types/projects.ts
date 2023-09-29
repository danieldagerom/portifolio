import type { RichTextContent } from '@graphcms/rich-text-types'

export type KnownTech = {
  iconSvg: string
  name: string
  startDate: string
}

export type ProjectSections = {
  title: string
  image: {
    url: string
  }
}

export type Project = {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  technologies: KnownTech[]
  pageThumbnail: {
    url: string
  }
  sections: ProjectSections[]
  description: {
    raw: RichTextContent
  }
  liveProjectUrl?: string
  githubUrl?: string
}

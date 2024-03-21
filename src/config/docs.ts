import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Conference",
      href: "/events/Conference-24",
    },
    {
      title: "Career Alumni Meet",
      href: "/events/Career-Alumni-24",
    },
    {
      title: "Quantum Computing Workshop",
      href: "/events/Quantum-Computing-24",
    },
    {
      title: "Python Workshop",
      href: "/events/Python-24",
    },
  ],
  sidebarNav: [
    {
      title: "Topics and Trends",
      items: [
        {
          title: "Quantum Computing",
          href: "/article/quantum-computing",
          items: [],
        },
        {
          title: "Cryptography",
          href: "/article/cryptography",
          items: [],
        },
        {
          title: "Optimization",
          href: "/article/optimization",
          items: [],
        },
        {
          title: "Graph Theory",
          href: "/article/graph-theory",
          items: [],
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
          items: [],
        },
      ],
    },
    {
      title: "Events",
      items: [
        {
          title: "Infinity-Coming Soon",
          href: "#",
          items: [{
            title: "Codewave-24",
            href: "/events/codewave-24",
            items: [],

          },],
        },
        {
          title: "Cryptography",
          href: "/article/cryptography",
          items: [],
        },
        {
          title: "Optimization",
          href: "/article/optimization",
          items: [],
        },
        {
          title: "Graph Theory",
          href: "/docs/components/aspect-ratio",
          items: [],
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
          items: [],
        },
      ],
    },
  ],
}